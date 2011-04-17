(function(){
	var fwUl, fwLi = [], fwRemove, wtFramework = document.getElementById('_wtframework'), howMany = 0;

	fwRemove = function(){
		document.body.removeChild(fwUl);
	};

	if (wtFramework){
		document.body.removeChild(wtFramework);
		return;
	}

	var fwList = {
		'ActiveJS': 'ActiveSupport',
		'Base2': 'base2.version',
		'Clientcide Libraries': 'Clientcide.version',
		'Crafty': 'Crafty.init',
		'DHTMLX': 'dhtmlx',
		'Dojo': 'dojo.version',
		'Ext JS': 'Ext.version',
		'Glow': 'glow.VERSION',
		'JavaScriptMVC': 'steal.fn',
		'jQuery': 'jQuery.fn.jquery',
		'jQuery UI': '$.ui.version',
		'Midori': 'midori.domReady',
		'MochiKit': 'MochiKit.MochiKit.VERSION',
		'MooTools A.R.T.': 'ART.version',
		'MooTools Core': 'MooTools.version',
		'MooTools More': 'MooTools.More.version',
		'Processing.js': 'Processing.version',
		'Prototype': 'Prototype.Version',
		'Qooxdoo': 'qx.$$libraries.qx.version',
		'Raphaël': 'Raphael.version',
		'Rico': 'Rico.Version',
		'RightJS': 'RightJS.version',
		'Script.aculo.us': 'Scriptaculous.Version',
		'Scripty2': 'S2.Version',
		'SproutCore': 'SC.isReady',
		'Spry': 'Spry.$',
		'YUI 3': 'YUI.version',
		'YUI 2': 'YAHOO.VERSION',
		'Zepto': 'Zepto',
		'ZK': 'zk.version'
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

	for (var prop in props){
		fwUl[prop] = props[prop];
	}

	for (var s in fwStyleUl){
		fwUl.style[s] = fwStyleUl[s];
	}

	document.body.appendChild(fwUl);

	var showInfo = function(fwName, fwVersion){
		fwLi = document.createElement('li');
		fwLi.innerHTML = fwName + ((fwVersion && (typeof(fwVersion) == 'string') && (fwVersion != '%build%')) ? ' (' + fwVersion + ')' : '');
		for (var s in fwStyleLi){
			fwLi.style[s] = fwStyleLi[s];
		}
		fwUl.appendChild(fwLi);
	};

	for (var fwNs in fwList){
		if (fwList.hasOwnProperty(fwNs)){
			var exists = window;
			for (var i = 0, idents = fwList[fwNs].split('.'); i < idents.length; i++){
				exists = exists && exists[idents[i]];
			}
			if (exists){
				showInfo(fwNs, exists);
				howMany++;
			}
		}
	}

	if (!howMany){
		showInfo('No known framework detected.');
	}
})();
