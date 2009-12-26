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
        'MooTools.version',
        'MooTools.More.version',
        'base2.version',
        'dojo.version',
        'Ext.version',
        'jQuery.fn.jquery',
        '$.ui.version',
        'MochiKit.MochiKit.VERSION',
        'Prototype.Version',
        'Scriptaculous.Version',
        'YAHOO.VERSION',
        'S2.Version'
    ];

    var fwNames = [
        'MooTools Core',
        'MooTools More',
        'Base2',
        'Dojo',
        'Ext JS',
        'jQuery',
        'jQuery UI',
        'MochiKit',
        'Prototype',
        'Script.aculo.us',
        'Yahoo UI',
        'Scripty2'
    ];

    var fwStyleLi = {
        cursor: 'pointer',
        textAlign: 'left',
        padding: '8px 10px',
        margin: '0 0 5px',
        listStyle: 'none',
        font: 'bold 11px "Lucida Grande"',
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
        width: '190px',
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
        fwLi.innerHTML = fwName + (fwVersion ? ' (' + fwVersion + ')' : '');
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
    
    if (howMany < 1){
        showInfo('No framework detected');
    }
})();