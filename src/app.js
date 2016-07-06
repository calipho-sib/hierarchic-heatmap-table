$(function () {
    
    var headerTemplateData  = {header:['MA-P',
                                  'MA-ND',
                                  'EST-P', 
                                  'IHC-H', 
                                  'IHC-M',
                                  'IHC-L',
                                  'IHC-ND']
                              };

    var heatmapTableOptions = {
        valuesSetting: [
            // { value: 'Positive', color: '#FFA10A'},
            { value: 'Positive', color: '#FFA10A', filterID: ["positiveFilter"]},
            { value: 'NotDetected', color: "lightgray", filterID: ["notDetectedFilter"]},
            { value: 'Low', color: '#FFE6BD', filterID:["positiveFilter", "lowFilter"]},
            { value: 'Medium', color: '#FFC870', filterID:["positiveFilter", "mediumFilter"]},
            { value: 'High', color: '#FFC870', filterID:["positiveFilter", "highFilter"]}
        ],
        columnWidth: "50px",
        detailTemplate: "detailTemplate",
        headerTemplate: "headerTemplate",
        headerTemplateData: headerTemplateData,
    }

    var applicationName = 'protein expression app'; //please provide a name for your application
    var clientInfo = 'JinJin'; //please provide some information about you
    var nx = new Nextprot.Client(applicationName, clientInfo);

    // var proteinAccession = 'NX_Q01101'; //Corresponds to Breast cancer protein -> http://www.nextprot.org/db/entry/NX_P38398/expression
    var proteinAccession = nx.getEntryName();

    var heatMapTableName = "heatmap-table";
    var heatMapTable = HeatMapTable({
        tableID: heatMapTableName,
        options: heatmapTableOptions
    });
    heatMapTable.showLoadingStatus();

    nx.getAnnotationsByCategory(proteinAccession, 'expression-profile').then(function (data) {
        var experimentalContext = {};

        $.ajax(
            {
                type: "get",
                url: "https://api.nextprot.org/entry/"+proteinAccession+"/experimental-context.json",
                async: false,
                success: function (data) {
                    data = data['entry']['experimentalContexts'];
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].developmentalStage && data[i].developmentalStage.name != "unknown") {
                            experimentalContext[data[i].contextId] = data[i].developmentalStage.name;
                        }
                    }
                },
                error: function (msg) {
                    console.log(msg);
                }
            }
        );

        var heatmapData = convertNextProtDataIntoHeatMapTableFormat(experimentalContext, data);

        console.log(heatmapData);
        initFilter(heatmapData, heatMapTable);
        heatMapTable.loadJSONData(heatmapData);
        heatMapTable.show();
        heatMapTable.hideLoadingStatus();
    });


});


function addSelectAll() {
        $(".subtypes a").click(function () {
            $(this).toggleClass("active");
            $("i", this).toggleClass("fa-circle-thin fa-check");
        })

        $(".select-all").click(function () {
            $("i", this).toggleClass("fa-circle-thin fa-check");
            var matchingList = $(this).attr("referTo");
            if ($("i", this).hasClass("fa-check")) {
                $(matchingList + " a").each(function () {
                    if (!$(this).hasClass("active")) {
                        $(this).addClass("active");
                        $("i", this).toggleClass("fa-circle-thin fa-check");
                    }

                })
            } else {
                $(matchingList + " a").each(function () {
                    if ($(this).hasClass("active")) {
                        $(this).removeClass("active");
                        $("i", this).toggleClass("fa-circle-thin fa-check");
                    }

                })
            }
        })
}


$( document ).ready(function() {
    addSelectAll();
    activateFilters();
});


function getFilters() {
    var filters = [];
    $(".filters .subtypes a").each(function () {
        if ($(this).hasClass("active")) {
            var uniqueFilter = $(this).find(".phenAnnot").text();
            filters.push(uniqueFilter);
        }
    });
    return filters;
}

function autoCheckAll(elem) {
    var panel = $(elem).closest(".panel-group");
    var all = panel.find(".select-all i");
    var activeFilters = panel.find(".subtypes a.active");
    if (!activeFilters.length && all.hasClass("fa-check")) {
        all.toggleClass("fa-circle-thin fa-check");
    } else if (activeFilters.length === panel.find(".subtypes a").length) {
        if (all.hasClass("fa-circle-thin")) {
            all.toggleClass("fa-circle-thin fa-check");
        }
    }
}

function activateFilters(data, annots, listingPhenotypes) {
    $(".filters a:not(.collapse-title)").click(function () {
        var filters = getFilters();
        console.log("Something was checked" + filters);
        $("#count-phenotype-selected").text("(" + filters.length + " selected)");

        autoCheckAll($(this));

        //TODO REFILL THE HEATMAP TABLE
    })
}


