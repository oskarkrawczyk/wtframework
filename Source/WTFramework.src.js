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
        'Ace'                        : new fwItem('ace', 'ace'),
        'ActiveJS'                   : new fwItem('ActiveSupport'),
        'Base2'                      : new fwItem('base2.version'),
        'Backbone.js'                : new fwItem('Backbone.VERSION', 'backbone.js'),
        'Backbone localStorage'      : new fwItem('Store', 'backbone-localstorage.js'),
        'CamanJS'                    : new fwItem('Caman.version.release', 'camanjs'),
        'Google Chrome Frame'        : new fwItem('CFInstall', 'chrome-frame'),
        'CoffeeScript'               : new fwItem('CoffeeScript', 'coffee-script'),
        'Clientcide Libraries'       : new fwItem('Clientcide.version'),
        'Crafty'                     : new fwItem('Crafty.init'),
        'CSS 3 Finalize'             : new fwItem('$.cssFinalize', 'css3finalize'),
        'CSS 3 Pie'                  : new fwItem('PIE', 'css3pie'),
        'Cufón'                      : new fwItem('Cufon', 'cufon'),
        'D3'                         : new fwItem('d3.version', 'd3'),
        'Datejs'                     : new fwItem('Date.today', 'datejs'),
        'Davis.js'                   : new fwItem('Davis.version', 'davis.js'),
        'DD_belatedPNG'              : new fwItem('DD_belatedPNG', 'dd_belatedpng'),
        'DocumentUp'                 : new fwItem('DocumentUp', 'documentup'),
        'DHTMLX'                     : new fwItem('dhtmlx'),
        'Dojo'                       : new fwItem('dojo.version', 'dojo'),
        'Ember'                      : new fwItem('Ember.VERSION', 'ember.js'),
        'Ext JS'                     : new fwItem('Ext.version', 'ext-core'),
        'fancyBox'                   : new fwItem('$.fancybox.version', 'fancybox'),
        'flexie'                     : new fwItem('Flexie.version', 'flexie'),
        'Flot'                       : new fwItem('$.plot.version', 'flot'),
        'Galleria'                   : new fwItem('Galleria.version', 'galleria'),
        'g.Raphaël'                  : new fwItem('Raphael.fn.g', 'graphael'),
        'Glow'                       : new fwItem('glow.VERSION'),
        'Handlebars'                 : new fwItem('Handlebars.VERSION', 'handlebars.js'),
        'Head JS'                    : new fwItem('head.js', 'headjs'),
        'Highcharts JS'              : new fwItem('Highcharts.version', 'highcharts'),
        'History.js'                 : new fwItem('History', 'History.js'),
        'html5shiv'                  : new fwItem('html5', 'html5shiv'),
        'ICanHaz.js'                 : new fwItem('ich.VERSION', 'ICanHaz.js'),
        'JS State Machine'           : new fwItem('StateMachine.VERSION', 'javascript-state-machine'),
        'JavaScriptMVC'              : new fwItem('steal.fn'),
        'jQuery'                     : new fwItem('jQuery.fn.jquery', 'jquery'),
        'jQuery Easing'              : new fwItem('jQuery.easing.easeOutQuad', 'jquery-easing'),
        'jQuery throttle / debounce' : new fwItem('jQuery.debounce', 'jquery-throttle-debounce'),
        'jQuery Tools'               : new fwItem('jQuery.tools.version', 'jquery-tools'),
        'jQuery Cycle'               : new fwItem('jQuery.fn.cycle.ver', 'jquery.cycle'),
        'jQuery UI'                  : new fwItem('$.ui.version', 'jqueryui'),
        'js-signals'                 : new fwItem('signals.VERSION', 'js-signals'),
        'JSXGraph'                   : new fwItem('JXG', 'jsxgraph'),
        'Knockout'                   : new fwItem('ko', 'knockout'),
        'LABjs'                      : new fwItem('$LAB', 'labjs'),
        'LESS'                       : new fwItem('less', 'less.js'),
        'Masonry'                    : new fwItem('jQuery.fn.masonry', 'masonry'),
        'Midori'                     : new fwItem('midori.domReady'),
        'Modernizr'                  : new fwItem('Modernizr._version', 'modernizr'),
        'MochiKit'                   : new fwItem('MochiKit.MochiKit.VERSION'),
        'MooTools A.R.T.'            : new fwItem('ART.version'),
        'MooTools Core'              : new fwItem('MooTools.version', 'mootools'),
        'MooTools More'              : new fwItem('MooTools.More.version'),
        'Mustache'                   : new fwItem('Mustache.version', 'mustache.js'),
        'Ninja UI'                   : new fwItem('jQuery.ninja.version', 'ninjaui'),
        'Noisy'                      : new fwItem('jQuery.fn.noisy', 'noisy'),
        'oCanvas'                    : new fwItem('oCanvas', 'ocanvas'),
        'PageDown'                   : new fwItem('Markdown', 'pagedown'),
        'Prettify'                   : new fwItem('prettyPrint', 'prettify'),
        'Processing.js'              : new fwItem('Processing.version', 'processing.js'),
        'Prototype'                  : new fwItem('Prototype.Version', 'prototype'),
        'PubNub'                     : new fwItem('PUBNUB', 'pubnub'),
        'Qooxdoo'                    : new fwItem('qx.$$libraries.qx.version'),
        'Raphaël'                    : new fwItem('Raphael.version', 'raphael'),
        'Rico'                       : new fwItem('Rico.Version'),
        'RightJS'                    : new fwItem('RightJS.version'),
        'Sammy'                      : new fwItem('Sammy.VERSION', 'sammy.js'),
        '$script.js'                 : new fwItem('$script', 'script.js'),
        'Script.aculo.us'            : new fwItem('Scriptaculous.Version', 'scriptaculous'),
        'Scripty2'                   : new fwItem('S2.Version'),
        'Sizzle'                     : new fwItem('Sizzle', 'sizzle'),
        'Snack'                      : new fwItem('snack.v'),
        'Socket.io'                  : new fwItem('io.version', 'socket.io'),
        'Spine'                      : new fwItem('Spine.version', 'spinejs'),
        'SproutCore'                 : new fwItem('SC.isReady'),
        'Spry'                       : new fwItem('Spry.$'),
        'SWFObject'                  : new fwItem('swfobject', 'swfobject'),
        'Tiny Scrollbar'             : new fwItem('jQuery.fn.tinyscrollbar', 'tinyscrollbar'),
        'Twitter Lib'                : new fwItem('twitterlib', 'twitterlib.js'),
        'Underscore.js'              : new fwItem('_.VERSION', 'underscore.js'),
        'Waypoints'                  : new fwItem('jQuery.waypoints', 'waypoints'),
        'WebFont Loader'             : new fwItem('WebFont', 'webfont'),
        'xui'                        : new fwItem('x$', 'xuijs'),
        'yepnope.js'                 : new fwItem('yepnope', 'yepnope'),
        'YUI 3'                      : new fwItem('YUI.version', 'yui'),
        'YUI 2'                      : new fwItem('YAHOO.VERSION', 'yui'),
        'Zepto'                      : new fwItem('Zepto', 'zepto'),
        'ZK'                         : new fwItem('zk.version')
    };

    var fwStyleLi = {
        cursor             : 'pointer',
        textAlign          : 'left',
        padding            : '8px 10px',
        margin             : '0 0 5px',
        listStyle          : 'none',
        font               : 'bold 11px sans-serif',
        backgroundColor    : 'rgba(0, 0, 0, 0.7)',
        color              : '#fff',
        MozBorderRadius    : '5px',
        webkitBorderRadius : '5px',
        borderRadius       : '5px',
        borderTop          : 'solid 1px rgba(255, 255, 255, 0.4)',
        borderLeft         : 'solid 1px rgba(0, 0, 0, 0.8)',
        borderRight        : 'solid 1px rgba(0, 0, 0, 0.8)',
        borderBottom       : 'solid 1px #000',
        textShadow         : '0 1px 0 #000',
        MozBoxShadow       : '0 -1px 0 #000',
        webkitBoxShadow    : '0 -1px 0 #000',
        boxShadow          : '0 -1px 0 #000',
        cssFloat           : 'right',
        clear              : 'both'
    };

    var fwStyleUl = {
        position : 'fixed',
        padding  : '0',
        margin   : '0',
        right    : '10px',
        top      : '10px',
        zIndex   : 16777271
    };

    var fwStyleA = {
        color          : '#fff',
        font           : 'bold 11px sans-serif',
        textDecoration : 'none'
    };

    var props = {
        id      : '_wtframework',
        onclick : fwRemove
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
        var cdnjsInfo = (fwList[fwName] && pkgs[fwList[fwName].cdnjsName]) 
                      ? pkgs[fwList[fwName].cdnjsName] : null;

        var curVer      = (cdnjsInfo) ? cdnjsInfo.version : null,
            homepageUrl = (cdnjsInfo) ? cdnjsInfo.homepage : '#',
            description = (cdnjsInfo) ? cdnjsInfo.description : '';
        
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
                    var version = (typeof exists === 'string') ? exists : false;
                    showInfo(fwNs, version);
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
