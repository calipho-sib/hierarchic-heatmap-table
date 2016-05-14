this["HBtemplates"] = this["HBtemplates"] || {};

this["HBtemplates"]["templates/heatmap-tree.tmpl"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <li>\r\n        <div class=\"heatmap-row\" style=\"overflow:hidden\">\r\n            <p class=\"tree-toggler\" style=\"display:inline-block;margin-bottom:0px;word-break:break-all;\"><span class=\"glyphicon glyphicon-plus\"></span><span>"
    + alias4(((helper = (helper = helpers.rowLabel || (depth0 != null ? depth0.rowLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rowLabel","hash":{},"data":data}) : helper)))
    + "</span><span><a style=\"margin-left:5px; font-size:12px;\" href=\""
    + alias4(((helper = (helper = helpers.linkURL || (depth0 != null ? depth0.linkURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkURL","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">"
    + alias4(((helper = (helper = helpers.linkLabel || (depth0 != null ? depth0.linkLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkLabel","hash":{},"data":data}) : helper)))
    + "</a></span></p>\r\n            <div class=\"pull-right\">\r\n"
    + ((stack1 = (helpers.forCreateIcons || (depth0 && depth0.forCreateIcons) || alias2).call(alias1,(depth0 != null ? depth0.values : depth0),{"name":"forCreateIcons","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\r\n        </div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.children : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </li>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <div class=\"heatmap-column "
    + alias4(((helper = (helper = helpers.columnClass || (depth0 != null ? depth0.columnClass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"columnClass","hash":{},"data":data}) : helper)))
    + "\", style=\"width:"
    + alias4(((helper = (helper = helpers.columnWidth || (depth0 != null ? depth0.columnWidth : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"columnWidth","hash":{},"data":data}) : helper)))
    + "\">\r\n                        <i class=\"circle "
    + alias4(((helper = (helper = helpers.circleColor || (depth0 != null ? depth0.circleColor : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"circleColor","hash":{},"data":data}) : helper)))
    + "\"></i>\r\n                    </div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["create-ul"],depth0,{"name":"create-ul","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"tree\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.children : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\r\n";
},"usePartial":true,"useData":true});

this["HBtemplates"]["templates/heatmap.tmpl"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.createHeader || (depth0 && depth0.createHeader) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,{"name":"createHeader","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <div class=\"heatmap-column "
    + alias4(((helper = (helper = helpers.columnClass || (depth0 != null ? depth0.columnClass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"columnClass","hash":{},"data":data}) : helper)))
    + "\">\r\n                        "
    + alias4(((helper = (helper = helpers.columnName || (depth0 != null ? depth0.columnName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"columnName","hash":{},"data":data}) : helper)))
    + "\r\n                    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<style>\r\n.blueBG {\r\n    background-color: #0070C0;\r\n}\r\n\r\n.redBG {\r\n    background-color: #C00000;\r\n}\r\n\r\n.grayBG {\r\n    background-color: gray;\r\n}\r\n\r\n.greenBG {\r\n    background-color: green;\r\n}\r\n\r\n.circle {\r\n    text-align: center;\r\n    display: inline-block;\r\n    width: 10px;\r\n    height: 10px;\r\n    -webkit-border-radius: 5px;\r\n    -moz-border-radius: 5px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.heatmap-row {\r\n    border-bottom: solid 1px #d4d4d4;\r\n}\r\n\r\n.heatmap-column {\r\n    display: inline-block;\r\n    text-align: center;\r\n    margin-right: 5px;\r\n    margin-left: 5px;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n}\r\np.tree-toggler span{\r\n    cursor:pointer;\r\n}\r\n.glyphicon{\r\n    margin-right:5px;\r\n    font-size:12px;\r\n}\r\n\r\n#heatmap-body {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n} \r\n\r\n</style>\r\n\r\n\r\n<div id=\"heatmap-body\">\r\n    <div style=\"overflow:hidden\">\r\n        <div style=\"display:inline-block;width:400px\"></div>\r\n        <div class=\"pull-right\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.header : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n"
    + ((stack1 = container.invokePartial(partials["create-ul"],depth0,{"name":"create-ul","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true});