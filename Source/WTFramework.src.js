(function() {
    var fwUl, fwLi = [],
        fwRemove, wtFramework = document.getElementById('_wtframework');

    fwRemove = function() {
        document.body.removeChild(fwUl);
    };

    if (wtFramework) {
        document.body.removeChild(wtFramework);
        return;
    }

    var fwList = {
        'ActiveJS': {
            verPath: 'ActiveSupport',
            cdnjsName: ''
        },
        'Base2':{
            verPath: 'base2.version',
            cdnjsName: ''
        },
        'Backbone.js':{
            verPath: 'Backbone.VERSION',
            cdnjsName: 'backbone.js'
        },
        'Clientcide Libraries':{
            verPath: 'Clientcide.version',
            cdnjsName: ''
        },
        'Crafty':{
            verPath: 'Crafty.init',
            cdnjsName: ''
        },
        'DHTMLX':{
            verPath: 'dhtmlx',
            cdnjsName: ''
        },
        'Dojo':{
            verPath: 'dojo.version',
            cdnjsName: 'dojo'
        },
        'Ext JS':{
            verPath: 'Ext.version',
            cdnjsName: 'ext-core'
        },
        'Glow':{
            verPath: 'glow.VERSION',
            cdnjsName: ''
        },
        'JavaScriptMVC':{
            verPath: 'steal.fn',
            cdnjsName: ''
        },
        'jQuery':{
            verPath: 'jQuery.fn.jquery',
            cdnjsName: 'jquery'
        },
        'jQuery UI':{
            verPath: '$.ui.version',
            cdnjsName: 'jqueryui'
        },
        'Midori':{
            verPath: 'midori.domReady',
            cdnjsName: ''
        },
        'Modernizr':{
            verPath: 'Modernizr._version',
            cdnjsName: 'modernizr'
        },
        'MochiKit':{
            verPath: 'MochiKit.MochiKit.VERSION',
            cdnjsName: ''
        },
        'MooTools A.R.T.':{
            verPath: 'ART.version',
            cdnjsName: ''
        },
        'MooTools Core':{
            verPath: 'MooTools.version',
            cdnjsName: 'mootools'
        },
        'MooTools More':{
            verPath: 'MooTools.More.version',
            cdnjsName: ''
        },
        'Processing.js':{
            verPath: 'Processing.version',
            cdnjsName: 'processing.js'
        },
        'Prototype':{
            verPath: 'Prototype.Version',
            cdnjsName: 'prototype'
        },
        'Qooxdoo':{
            verPath: 'qx.$$libraries.qx.version',
            cdnjsName: ''
        },
        'Raphaël':{
            verPath: 'Raphael.version',
            cdnjsName: 'raphael'
        },
        'Rico':{
            verPath: 'Rico.Version',
            cdnjsName: ''
        },
        'RightJS':{
            verPath: 'RightJS.version',
            cdnjsName: ''
        },
        'Sammy':{
            verPath: 'Sammy.VERSION',
            cdnjsName: 'sammy.js'
        },
        'Script.aculo.us':{
            verPath: 'Scriptaculous.Version',
            cdnjsName: 'scriptaculous'
        },
        'Scripty2':{
            verPath: 'S2.Version',
            cdnjsName: ''
        },
        'Snack':{
            verPath: 'snack.v',
            cdnjsName: ''
        },
        'SproutCore':{
            verPath: 'SC.isReady',
            cdnjsName: ''
        },
        'Spry':{
            verPath: 'Spry.$',
            cdnjsName: ''
        },
        'Underscore.js':{
            verPath: '_.VERSION',
            cdnjsName: 'underscore.js'
        },
        'YUI 3':{
            verPath: 'YUI.version',
            cdnjsName: 'yui'
        },
        'YUI 2':{
            verPath: 'YAHOO.VERSION',
            cdnjsName: 'yui'
        },
        'Zepto':{
            verPath: 'Zepto',
            cdnjsName: 'zepto'
        },
        'ZK':{
            verPath: 'zk.version',
            cdnjsName: ''
        }
    };

    var fwStyleLi = {
        cursor: 'pointer',
        textAlign: 'left',
        padding: '8px 10px',
        margin: '0 0 5px',
        listStyle: 'none',
        font: 'bold 11px sans-serif',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: '#fff',
        MozBorderRadius: '5px',
        webkitBorderRadius: '5px',
        borderRadius: '5px',
        borderTop: 'solid 1px rgba(255, 255, 255, 0.4)',
        borderLeft: 'solid 1px rgba(0, 0, 0, 0.8)',
        borderRight: 'solid 1px rgba(0, 0, 0, 0.8)',
        borderBottom: 'solid 1px #000',
        textShadow: '0 1px 0 #000',
        MozBoxShadow: '0 -1px 0 #000',
        webkitBoxShadow: '0 -1px 0 #000',
        boxShadow: '0 -1px 0 #000',
        cssFloat: 'right',
        clear: 'both'
    };

    var fwStyleUl = {
        position: 'fixed',
        padding: '0',
        margin: '0',
        right: '10px',
        top: '10px',
        zIndex: 30000
    };

    var props = {
        onclick: fwRemove,
        id: '_wtframework'
    };

    fwUl = document.createElement('ul');

    for (var prop in props) {
        fwUl[prop] = props[prop];
    }

    for (var s in fwStyleUl) {
        fwUl.style[s] = fwStyleUl[s];
    }

    document.body.appendChild(fwUl);

    var showInfo = function(fwName, fwVersion, curVersion) {
        fwLi = document.createElement('li');
        fwLi.innerHTML = fwName + ((fwVersion && (fwVersion != '%build%')) ? ' (' + fwVersion + ')' : '') + ((curVersion !== null) ? ' [' + curVersion + ']' : '');
        for (var s in fwStyleLi) {
            fwLi.style[s] = fwStyleLi[s];
        }
        fwUl.appendChild(fwLi);
    };

    var findFrameworks = function() {
        var pkgs = window.wtfPkgs,
            howMany = 0;
        
        for (var fwNs in fwList) {
            if (fwList.hasOwnProperty(fwNs)) {
                var exists = window;
                for (var i = 0, idents = fwList[fwNs].verPath.split('.'); i < idents.length; i++) {
                    exists = exists && exists[idents[i]];
                }
                if (exists) {
                    var curVer = (pkgs[fwList[fwNs].cdnjsName]) ? pkgs[fwList[fwNs].cdnjsName].version : null;
                    showInfo(fwNs, exists.toString(), curVer);
                    howMany++;
                }
            }
        }

        if (!howMany) {
            showInfo('No known framework detected.');
        }
    };

    if (!window.wtfPkgs) {
        // Load packages from cdnjs
        // http://www.cdnjs.com/packages.json
        // thru Yahoo's YQL jsonp proxy
        window.wtfJsonpCb = function(json) {
            var pkgs = json.query.results.json.packages;
            var pHash = {};
            for (var i=0; i < pkgs.length; i++) {
                if (pkgs[i]) {
                    pHash[pkgs[i].name.toLowerCase()] = pkgs[i];
                }
            }
            window.wtfPkgs = pHash;
            findFrameworks();
        };

        var jsonp = document.createElement('script');
        jsonp.setAttribute('src', "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url%3D'http%3A%2F%2Fwww.cdnjs.com%2Fpackages.json'&format=json&callback=wtfJsonpCb");
        document.getElementsByTagName('head')[0].appendChild(jsonp);
    } else {
        findFrameworks();
    }
})();