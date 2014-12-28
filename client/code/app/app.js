Ext.define("WebClient.controller.Main", {
    extend: "Ext.app.ViewController",
    alias: "controller.main"
}), Ext.define("WebClient.view.DashboardView", {
    extend: "Ext.panel.Panel",
    alias: "dashboard-view",
    xtype: "dashboard-view",
    requires: [ "WebClient.controller.Dashboard" ],
    html: "<p>This view will eventually show a dashboard of the stock monitoring informationasfasdf  asdsa</p>"
}), Ext.define("WebClient.controller.Dashboard", {
    extend: "Ext.app.ViewController",
    alias: "controller.dashboard"
}), Ext.define("WebClient.view.Viewport", {
    extend: "Ext.container.Container",
    renderTo: Ext.get("viewport"),
    layout: "anchor",
    requires: [ "WebClient.view.MainView" ],
    items: [ {
        xtype: "main-view"
    } ]
}), Ext.define("WebClient.view.MainView", {
    extend: "Ext.tab.Panel",
    alias: "main-view",
    xtype: "main-view",
    controller: "main",
    height: "100%",
    width: "100%",
    layout: "fit",
    requires: [ "Ext.layout.container.Border", "WebClient.controller.Main", "WebClient.view.DashboardView", "WebClient.view.StockView" ],
    defaults: {
        collapsible: !0,
        split: !0,
        bodyPadding: 10
    },
    items: [ {
        title: "Dashboard",
        xtype: "dashboard-view"
    }, {
        title: "Stock View",
        xtype: "stock-view"
    } ]
}), Ext.define("WebClient.view.StockView", {
    extend: "Ext.panel.Panel",
    alias: "stock-view",
    xtype: "stock-view",
    controller: "stock",
    layout: "border",
    requires: [ "Ext.layout.container.Border", "WebClient.controller.Stock" ],
    height: window.innerHeight - 100,
    width: window.innerWidth - 25,
    defaults: {
        collapsible: !0,
        split: !0,
        bodyPadding: 10
    },
    items: [ {
        title: "Stock Form",
        region: "west",
        floatable: !1,
        margin: "5 0 0 0",
        width: 125,
        minWidth: 100,
        maxWidth: 250,
        html: "<p>This is where they will pick their stocks asdfasdf</p>"
    }, {
        title: "Main Content",
        collapsible: !1,
        region: "center",
        margin: "5 0 0 0",
        html: "<h2>This will contain a P/F chart and Grid</p>"
    } ]
}), Ext.define("WebClient.controller.Stock", {
    extend: "Ext.app.ViewController",
    alias: "controller.stock"
}), Ext.application({
    name: "WebClient",
    views: [ "Viewport" ],
    launch: function() {
        Ext.create("WebClient.view.Viewport");
    }
});
//# sourceMappingURL=app.js.map