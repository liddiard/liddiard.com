if (typeof _jaRootPath != "undefined") {
 
    var _jaServer = "jalbum.net";
    var _jaHost = "//" + _jaServer + "/widgetapi/";
    var _jaWidgetContainer = document.getElementById("jalbumwidgetcontainer");
    var _jaIsPreview = (location.protocol != "http:" && location.protocol !="https:") || location.hostname == '127.0.0.1' || location.hostname == 'localhost';
  
    if (_jaWidgetContainer != null && !_jaIsPreview) {
        var _jaLoadScriptSrc = _jaHost + "load/LoadWidgets.action?url=" + encodeURIComponent(typeof _jaUrl != "undefined" ? _jaUrl : document.location) + "&skin=" + encodeURIComponent(_jaSkin) + "&style=" + encodeURIComponent(_jaStyle) + "&version=" + encodeURIComponent(_jaVersion) + "&pageType=" + _jaPageType  + "&rootPath=" + encodeURIComponent(_jaRootPath) + "&timeStamp=" + new Date().getTime();
        if (typeof _jaUserName != "undefined") {
            _jaLoadScriptSrc += "&username=" + encodeURIComponent(_jaUserName);
        }
        if (typeof _jaUserId != "undefined") {
            _jaLoadScriptSrc += "&userId=" + encodeURIComponent(_jaUserId);
        }
        if (typeof _jaGuid != "undefined") {
            _jaLoadScriptSrc += "&guid=" + encodeURIComponent(_jaGuid);
        }
        var _jaLoadScript = document.createElement("script");
        _jaLoadScript.type = "text/javascript";
        _jaLoadScript.src = _jaLoadScriptSrc;
        _jaLoadScript.charset = "utf-8";
        _jaWidgetContainer.appendChild(_jaLoadScript);
    }
}
