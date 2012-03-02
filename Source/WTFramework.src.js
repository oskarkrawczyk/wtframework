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

    function fwItem(verPath, cdnjsName) {
        this.verPath   = verPath;
        this.cdnjsName = cdnjsName || '';
    }
    
    var fwList = {
        'Ace': new fwItem('ace', 'ace'),
        'ActiveJS': new fwItem('ActiveSupport'),
        'Base2': new fwItem('base2.version'),
        'Backbone.js': new fwItem('Backbone.VERSION', 'backbone.js'),
        'Clientcide Libraries': new fwItem('Clientcide.version'),
        'Crafty': new fwItem('Crafty.init'),
        'DHTMLX': new fwItem('dhtmlx'),
        'Dojo': new fwItem('dojo.version', 'dojo'),
        'Ext JS': new fwItem('Ext.version', 'ext-core'),
        'Glow': new fwItem('glow.VERSION'),
        'JavaScriptMVC': new fwItem('steal.fn'),
        'jQuery': new fwItem('jQuery.fn.jquery', 'jquery'),
        'jQuery UI': new fwItem('$.ui.version', 'jqueryui'),
        'Midori': new fwItem('midori.domReady'),
        'Modernizr': new fwItem('Modernizr._version', 'modernizr'),
        'MochiKit': new fwItem('MochiKit.MochiKit.VERSION'),
        'MooTools A.R.T.': new fwItem('ART.version'),
        'MooTools Core': new fwItem('MooTools.version', 'mootools'),
        'MooTools More': new fwItem('MooTools.More.version'),
        'Processing.js': new fwItem('Processing.version', 'processing.js'),
        'Prototype': new fwItem('Prototype.Version', 'prototype'),
        'Qooxdoo': new fwItem('qx.$$libraries.qx.version'),
        'Raphaël': new fwItem('Raphael.version', 'raphael'),
        'Rico': new fwItem('Rico.Version'),
        'RightJS': new fwItem('RightJS.version'),
        'Sammy': new fwItem('Sammy.VERSION', 'sammy.js'),
        'Script.aculo.us': new fwItem('Scriptaculous.Version', 'scriptaculous'),
        'Scripty2': new fwItem('S2.Version'),
        'Snack': new fwItem('snack.v'),
        'SproutCore': new fwItem('SC.isReady'),
        'Spry': new fwItem('Spry.$'),
        'Underscore.js': new fwItem('_.VERSION', 'underscore.js'),
        'YUI 3': new fwItem('YUI.version', 'yui'),
        'YUI 2': new fwItem('YAHOO.VERSION', 'yui'),
        'Zepto': new fwItem('Zepto', 'zepto'),
        'ZK': new fwItem('zk.version')
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
        zIndex: 16777271
    };

    var fwStyleA = {
        color: '#fff',
        font: 'bold 11px sans-serif',
        textDecoration: 'none'
    };

    var props = {
        id: '_wtframework',
        onclick: fwRemove
    };

    fwUl = document.createElement('ul');

    for (var prop in props) {
        fwUl[prop] = props[prop];
    }

    for (var s in fwStyleUl) {
        fwUl.style[s] = fwStyleUl[s];
    }

    document.body.appendChild(fwUl);

    var showInfo = function(fwName, fwVersion) {
        var pkgs = window.wtfPkgs,
            s;

        // Show additional info from cdnjs
        var cdnjsInfo = (fwList[fwName] && pkgs[fwList[fwName].cdnjsName]) ? pkgs[fwList[fwName].cdnjsName] : null;

        var curVer = (cdnjsInfo) ? cdnjsInfo.version : null;
        var homepageUrl = (cdnjsInfo) ? cdnjsInfo.homepage : '#';
        var description = (cdnjsInfo) ? cdnjsInfo.description : '';
        
        if (curVer !== null) {
            description += ' (Current version: ' + curVer + ')';
        }
        
        fwLi = document.createElement('li');

        fwLink = document.createElement('a');
        fwLink.href = homepageUrl;
        fwLink.title = description;
        fwLink.appendChild(document.createTextNode(fwName));

        for (s in fwStyleA) {
            fwLink.style[s] = fwStyleA[s];
        }
        fwLi.appendChild(fwLink);

        if (fwVersion && (fwVersion != '%build%')) {
            fwLi.appendChild(document.createTextNode(' ('));
            
            if (curVer !== null) {
                var verSpan = document.createElement('span');
                verSpan.style.color = (curVer != fwVersion) ? '#f33' : '#0f0';
                verSpan.appendChild(document.createTextNode(fwVersion));
                fwLi.appendChild(verSpan);
            } else {
                fwLi.appendChild(document.createTextNode(fwVersion));
            }
            
            fwLi.appendChild(document.createTextNode(')'));
        }

        for (s in fwStyleLi) {
            fwLi.style[s] = fwStyleLi[s];
        }
        fwUl.appendChild(fwLi);
    };

    var findFrameworks = function() {
        var howMany = 0;

        for (var fwNs in fwList) {
            if (fwList.hasOwnProperty(fwNs)) {
                var exists = window;
                for (var i = 0, idents = fwList[fwNs].verPath.split('.'); i < idents.length; i++) {
                    exists = exists && exists[idents[i]];
                }
                if (exists) {

                    showInfo(fwNs, exists.toString());
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
            for (var i = 0; i < pkgs.length; i++) {
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