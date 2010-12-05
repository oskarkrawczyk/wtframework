(function(){

    var fwUl, fwLi = [], fwUpdate, fwRemove, wtFramework = document.getElementById('_wtframework'), howMany = 0;

    fwRemove = function(){
        document.body.removeChild(fwUl);
    };

    if (wtFramework){
        document.body.removeChild(wtFramework);
        return;
    }

    var fwNamespaces = [
        'base2.version',
        'Clientcide.version',
        'dojo.version',
        'Ext.version',
        'glow.VERSION',
        '$.ui.version',
        'jQuery.fn.jquery',
        'midori.domReady',
        'MochiKit.MochiKit.VERSION',
        'ART.version',
        'MooTools.version',
        'MooTools.More.version',
        'Processing.version',
        'Prototype.Version',
        'window.qx.$$libraries.qx.version',
        'Raphael.version',
        'Rico.Version',
        'RightJS.version',
        'Scriptaculous.Version',
        'S2.Version',
        'YUI.version',
        'YAHOO.VERSION',
        'zk.version'
    ];

    var fwNames = [
        'Base2',
        'Clientcide Libraries',
        'Dojo',
        'Ext JS',
        'Glow',
        'jQuery UI',
        'jQuery',
        'Midori',
        'MochiKit',
        'MooTools A.R.T.',
        'MooTools Core',
        'MooTools More',
        'Processing.js',
        'Prototype',
        'Qooxdoo',
        'Raphael',
        'Rico',
        'RightJS',
        'Script.aculo.us',
        'Scripty2',
        'YUI',
        'YUI',
        'ZK'
    ];

    var fwStyleLi = {
        cursor: 'pointer',
        textAlign: 'left',
        padding: '8px 10px',
        margin: '0 0 5px',
        listStyle: 'none',
        font: 'bold 11px sans-serif',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: '#fff',
        BorderRadius: '5px',
        MozBorderRadius: '5px',
        WebkitBorderRadius: '5px',
        borderTop: 'solid 1px rgba(255, 255, 255, 0.4)',
        borderLeft: 'solid 1px rgba(0, 0, 0, 0.8)',
        borderRight: 'solid 1px rgba(0, 0, 0, 0.8)',
        borderBottom: 'solid 1px #000',
        textShadow: '0 1px 0 #000',
        BoxShadow: '0 -1px 0 #000',
        MozBoxShadow: '0 -1px 0 #000',
        WebkitBoxShadow: '0 -1px 0 #000',
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

    for (var prop in props){
        fwUl[prop] = props[prop];
    }

    for (var s in fwStyleUl){
        fwUl.style[s] = fwStyleUl[s];
    }

    document.body.appendChild(fwUl);

    var showInfo = function (fwName, fwVersion){
        fwLi = document.createElement('li');
        fwLi.innerHTML = fwName + ((fwVersion && (typeof(fwVersion) != 'object') && (fwVersion != '%build%')) ? ' (' + fwVersion + ')' : '');
        for (var s in fwStyleLi){
            fwLi.style[s] = fwStyleLi[s];
        }
        fwUl.appendChild(fwLi);
    };

    for (var fwNs in fwNamespaces){
        if (fwNamespaces.hasOwnProperty(fwNs)){
            var idents = fwNamespaces[fwNs].split('.'), exists = window;

            for (var i in idents){
                if (idents.hasOwnProperty(i)){
                    exists = exists && exists[idents[i]];
                }
            }

            if (exists){
                showInfo(fwNames[fwNs], exists);
                howMany++;
            }
        }
    }

    if (!howMany){
        showInfo('No known framework detected.');
    }
})();
