var _0x4100=['#app','total','consum','preuG','toFixed','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22container\x22><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>Calcula\x20el\x20cost\x20del\x20trajecte\x20</h1><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<form>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22form-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20for=\x22formGroupExampleInput\x22>Km\x20fets</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20class=\x22form-control\x22\x20id=\x22formGroupExampleInput\x22\x20placeholder=\x22100\x22\x20v-model=\x22kmTot\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22form-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20for=\x22formGroupExampleInput2\x22>Preu\x20benzina\x20(€/l)</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20class=\x22form-control\x22\x20id=\x22formGroupExampleInput2\x22\x20placeholder=\x221.4\x22\x20v-model=\x22preuG\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22form-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20for=\x22formGroupExampleInput3\x22>Consum\x20de\x20benzina\x20(l/100Km)</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20class=\x22form-control\x22\x20id=\x22formGroupExampleInput3\x22\x20placeholder=\x222.1\x22\x20v-model=\x22consum\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20v-on:click=\x22calcularResultat\x22\x20class=\x22btn\x20btn-warning\x22>Calcular</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</form><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><b>Resultat:\x20</b><label>{{total}}€</label>\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'];(function(_0x288f26,_0x45feba){var _0x44f519=function(_0x1b9ebc){while(--_0x1b9ebc){_0x288f26['push'](_0x288f26['shift']());}};_0x44f519(++_0x45feba);}(_0x4100,0x1f2));var _0x471d=function(_0x44ed45,_0x413224){_0x44ed45=_0x44ed45-0x0;var _0x2699a9=_0x4100[_0x44ed45];return _0x2699a9;};var app=new Vue({'el':_0x471d('0x0'),'data':{'total':'','kmTot':Number,'preuG':Number,'consum':Number},'methods':{'calcularResultat'(){this[_0x471d('0x1')]=this['kmTot']*(this[_0x471d('0x2')]/0x64)*this[_0x471d('0x3')];this[_0x471d('0x1')]=this[_0x471d('0x1')][_0x471d('0x4')](0x2);}},'template':_0x471d('0x5')});