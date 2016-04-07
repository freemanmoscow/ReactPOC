/*! jQuery v1.11.2 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.2",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;
return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)
}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});

//! moment.js
//! version : 2.9.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

(function (undefined) {
    /************************************
        Constants
    ************************************/

    var moment,
        VERSION = '2.9.0',
        // the global-scope this is NOT the global object in Node.js
        globalScope = (typeof global !== 'undefined' && (typeof window === 'undefined' || window === global.window)) ? global : this,
        oldGlobalMoment,
        round = Math.round,
        hasOwnProperty = Object.prototype.hasOwnProperty,
        i,

        YEAR = 0,
        MONTH = 1,
        DATE = 2,
        HOUR = 3,
        MINUTE = 4,
        SECOND = 5,
        MILLISECOND = 6,

        // internal storage for locale config files
        locales = {},

        // extra moment internal properties (plugins register props here)
        momentProperties = [],

        // check for nodeJS
        hasModule = (typeof module !== 'undefined' && module && module.exports),

        // ASP.NET json date format regex
        aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,
        aspNetTimeSpanJsonRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,

        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
        isoDurationRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,

        // format tokens
        formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,

        // parsing token regexes
        parseTokenOneOrTwoDigits = /\d\d?/, // 0 - 99
        parseTokenOneToThreeDigits = /\d{1,3}/, // 0 - 999
        parseTokenOneToFourDigits = /\d{1,4}/, // 0 - 9999
        parseTokenOneToSixDigits = /[+\-]?\d{1,6}/, // -999,999 - 999,999
        parseTokenDigits = /\d+/, // nonzero number of digits
        parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, // any word (or two) characters or numbers including two/three word month in arabic.
        parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
        parseTokenT = /T/i, // T (ISO separator)
        parseTokenOffsetMs = /[\+\-]?\d+/, // 1234567890123
        parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123

        //strict parsing regexes
        parseTokenOneDigit = /\d/, // 0 - 9
        parseTokenTwoDigits = /\d\d/, // 00 - 99
        parseTokenThreeDigits = /\d{3}/, // 000 - 999
        parseTokenFourDigits = /\d{4}/, // 0000 - 9999
        parseTokenSixDigits = /[+-]?\d{6}/, // -999,999 - 999,999
        parseTokenSignedNumber = /[+-]?\d+/, // -inf - inf

        // iso 8601 regex
        // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
        isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,

        isoFormat = 'YYYY-MM-DDTHH:mm:ssZ',

        isoDates = [
            ['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/],
            ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/],
            ['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/],
            ['GGGG-[W]WW', /\d{4}-W\d{2}/],
            ['YYYY-DDD', /\d{4}-\d{3}/]
        ],

        // iso time formats and regexes
        isoTimes = [
            ['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/],
            ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
            ['HH:mm', /(T| )\d\d:\d\d/],
            ['HH', /(T| )\d\d/]
        ],

        // timezone chunker '+10:00' > ['10', '00'] or '-1530' > ['-', '15', '30']
        parseTimezoneChunker = /([\+\-]|\d\d)/gi,

        // getter and setter names
        proxyGettersAndSetters = 'Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),
        unitMillisecondFactors = {
            'Milliseconds' : 1,
            'Seconds' : 1e3,
            'Minutes' : 6e4,
            'Hours' : 36e5,
            'Days' : 864e5,
            'Months' : 2592e6,
            'Years' : 31536e6
        },

        unitAliases = {
            ms : 'millisecond',
            s : 'second',
            m : 'minute',
            h : 'hour',
            d : 'day',
            D : 'date',
            w : 'week',
            W : 'isoWeek',
            M : 'month',
            Q : 'quarter',
            y : 'year',
            DDD : 'dayOfYear',
            e : 'weekday',
            E : 'isoWeekday',
            gg: 'weekYear',
            GG: 'isoWeekYear'
        },

        camelFunctions = {
            dayofyear : 'dayOfYear',
            isoweekday : 'isoWeekday',
            isoweek : 'isoWeek',
            weekyear : 'weekYear',
            isoweekyear : 'isoWeekYear'
        },

        // format function strings
        formatFunctions = {},

        // default relative time thresholds
        relativeTimeThresholds = {
            s: 45,  // seconds to minute
            m: 45,  // minutes to hour
            h: 22,  // hours to day
            d: 26,  // days to month
            M: 11   // months to year
        },

        // tokens to ordinalize and pad
        ordinalizeTokens = 'DDD w W M D d'.split(' '),
        paddedTokens = 'M D H h m s w W'.split(' '),

        formatTokenFunctions = {
            M    : function () {
                return this.month() + 1;
            },
            MMM  : function (format) {
                return this.localeData().monthsShort(this, format);
            },
            MMMM : function (format) {
                return this.localeData().months(this, format);
            },
            D    : function () {
                return this.date();
            },
            DDD  : function () {
                return this.dayOfYear();
            },
            d    : function () {
                return this.day();
            },
            dd   : function (format) {
                return this.localeData().weekdaysMin(this, format);
            },
            ddd  : function (format) {
                return this.localeData().weekdaysShort(this, format);
            },
            dddd : function (format) {
                return this.localeData().weekdays(this, format);
            },
            w    : function () {
                return this.week();
            },
            W    : function () {
                return this.isoWeek();
            },
            YY   : function () {
                return leftZeroFill(this.year() % 100, 2);
            },
            YYYY : function () {
                return leftZeroFill(this.year(), 4);
            },
            YYYYY : function () {
                return leftZeroFill(this.year(), 5);
            },
            YYYYYY : function () {
                var y = this.year(), sign = y >= 0 ? '+' : '-';
                return sign + leftZeroFill(Math.abs(y), 6);
            },
            gg   : function () {
                return leftZeroFill(this.weekYear() % 100, 2);
            },
            gggg : function () {
                return leftZeroFill(this.weekYear(), 4);
            },
            ggggg : function () {
                return leftZeroFill(this.weekYear(), 5);
            },
            GG   : function () {
                return leftZeroFill(this.isoWeekYear() % 100, 2);
            },
            GGGG : function () {
                return leftZeroFill(this.isoWeekYear(), 4);
            },
            GGGGG : function () {
                return leftZeroFill(this.isoWeekYear(), 5);
            },
            e : function () {
                return this.weekday();
            },
            E : function () {
                return this.isoWeekday();
            },
            a    : function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), true);
            },
            A    : function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), false);
            },
            H    : function () {
                return this.hours();
            },
            h    : function () {
                return this.hours() % 12 || 12;
            },
            m    : function () {
                return this.minutes();
            },
            s    : function () {
                return this.seconds();
            },
            S    : function () {
                return toInt(this.milliseconds() / 100);
            },
            SS   : function () {
                return leftZeroFill(toInt(this.milliseconds() / 10), 2);
            },
            SSS  : function () {
                return leftZeroFill(this.milliseconds(), 3);
            },
            SSSS : function () {
                return leftZeroFill(this.milliseconds(), 3);
            },
            Z    : function () {
                var a = this.utcOffset(),
                    b = '+';
                if (a < 0) {
                    a = -a;
                    b = '-';
                }
                return b + leftZeroFill(toInt(a / 60), 2) + ':' + leftZeroFill(toInt(a) % 60, 2);
            },
            ZZ   : function () {
                var a = this.utcOffset(),
                    b = '+';
                if (a < 0) {
                    a = -a;
                    b = '-';
                }
                return b + leftZeroFill(toInt(a / 60), 2) + leftZeroFill(toInt(a) % 60, 2);
            },
            z : function () {
                return this.zoneAbbr();
            },
            zz : function () {
                return this.zoneName();
            },
            x    : function () {
                return this.valueOf();
            },
            X    : function () {
                return this.unix();
            },
            Q : function () {
                return this.quarter();
            }
        },

        deprecations = {},

        lists = ['months', 'monthsShort', 'weekdays', 'weekdaysShort', 'weekdaysMin'],

        updateInProgress = false;

    // Pick the first defined of two or three arguments. dfl comes from
    // default.
    function dfl(a, b, c) {
        switch (arguments.length) {
            case 2: return a != null ? a : b;
            case 3: return a != null ? a : b != null ? b : c;
            default: throw new Error('Implement me');
        }
    }

    function hasOwnProp(a, b) {
        return hasOwnProperty.call(a, b);
    }

    function defaultParsingFlags() {
        // We need to deep clone this object, and es5 standard is not very
        // helpful.
        return {
            empty : false,
            unusedTokens : [],
            unusedInput : [],
            overflow : -2,
            charsLeftOver : 0,
            nullInput : false,
            invalidMonth : null,
            invalidFormat : false,
            userInvalidated : false,
            iso: false
        };
    }

    function printMsg(msg) {
        if (moment.suppressDeprecationWarnings === false &&
                typeof console !== 'undefined' && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;
        return extend(function () {
            if (firstTime) {
                printMsg(msg);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    function deprecateSimple(name, msg) {
        if (!deprecations[name]) {
            printMsg(msg);
            deprecations[name] = true;
        }
    }

    function padToken(func, count) {
        return function (a) {
            return leftZeroFill(func.call(this, a), count);
        };
    }
    function ordinalizeToken(func, period) {
        return function (a) {
            return this.localeData().ordinal(func.call(this, a), period);
        };
    }

    function monthDiff(a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        return -(wholeMonthDiff + adjust);
    }

    while (ordinalizeTokens.length) {
        i = ordinalizeTokens.pop();
        formatTokenFunctions[i + 'o'] = ordinalizeToken(formatTokenFunctions[i], i);
    }
    while (paddedTokens.length) {
        i = paddedTokens.pop();
        formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2);
    }
    formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);


    function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // thie is not supposed to happen
            return hour;
        }
    }

    /************************************
        Constructors
    ************************************/

    function Locale() {
    }

    // Moment prototype object
    function Moment(config, skipOverflow) {
        if (skipOverflow !== false) {
            checkOverflow(config);
        }
        copyConfig(this, config);
        this._d = new Date(+config._d);
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            moment.updateOffset(this);
            updateInProgress = false;
        }
    }

    // Duration Constructor
    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 36e5; // 1000 * 60 * 60
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = moment.localeData();

        this._bubble();
    }

    /************************************
        Helpers
    ************************************/


    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function copyConfig(to, from) {
        var i, prop, val;

        if (typeof from._isAMomentObject !== 'undefined') {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (typeof from._i !== 'undefined') {
            to._i = from._i;
        }
        if (typeof from._f !== 'undefined') {
            to._f = from._f;
        }
        if (typeof from._l !== 'undefined') {
            to._l = from._l;
        }
        if (typeof from._strict !== 'undefined') {
            to._strict = from._strict;
        }
        if (typeof from._tzm !== 'undefined') {
            to._tzm = from._tzm;
        }
        if (typeof from._isUTC !== 'undefined') {
            to._isUTC = from._isUTC;
        }
        if (typeof from._offset !== 'undefined') {
            to._offset = from._offset;
        }
        if (typeof from._pf !== 'undefined') {
            to._pf = from._pf;
        }
        if (typeof from._locale !== 'undefined') {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i in momentProperties) {
                prop = momentProperties[i];
                val = from[prop];
                if (typeof val !== 'undefined') {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    }

    // left zero fill a number
    // see http://jsperf.com/left-zero-filling for performance comparison
    function leftZeroFill(number, targetLength, forceSign) {
        var output = '' + Math.abs(number),
            sign = number >= 0;

        while (output.length < targetLength) {
            output = '0' + output;
        }
        return (sign ? (forceSign ? '+' : '') : '-') + output;
    }

    function positiveMomentsDifference(base, other) {
        var res = {milliseconds: 0, months: 0};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        other = makeAs(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = moment.duration(val, period);
            addOrSubtractDurationFromMoment(this, dur, direction);
            return this;
        };
    }

    function addOrSubtractDurationFromMoment(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = duration._days,
            months = duration._months;
        updateOffset = updateOffset == null ? true : updateOffset;

        if (milliseconds) {
            mom._d.setTime(+mom._d + milliseconds * isAdding);
        }
        if (days) {
            rawSetter(mom, 'Date', rawGetter(mom, 'Date') + days * isAdding);
        }
        if (months) {
            rawMonthSetter(mom, rawGetter(mom, 'Month') + months * isAdding);
        }
        if (updateOffset) {
            moment.updateOffset(mom, days || months);
        }
    }

    // check if is an array
    function isArray(input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    }

    function isDate(input) {
        return Object.prototype.toString.call(input) === '[object Date]' ||
            input instanceof Date;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function normalizeUnits(units) {
        if (units) {
            var lowered = units.toLowerCase().replace(/(.)s$/, '$1');
            units = unitAliases[units] || camelFunctions[lowered] || lowered;
        }
        return units;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    function makeList(field) {
        var count, setter;

        if (field.indexOf('week') === 0) {
            count = 7;
            setter = 'day';
        }
        else if (field.indexOf('month') === 0) {
            count = 12;
            setter = 'month';
        }
        else {
            return;
        }

        moment[field] = function (format, index) {
            var i, getter,
                method = moment._locale[field],
                results = [];

            if (typeof format === 'number') {
                index = format;
                format = undefined;
            }

            getter = function (i) {
                var m = moment().utc().set(setter, i);
                return method.call(moment._locale, m, format || '');
            };

            if (index != null) {
                return getter(index);
            }
            else {
                for (i = 0; i < count; i++) {
                    results.push(getter(i));
                }
                return results;
            }
        };
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            if (coercedNumber >= 0) {
                value = Math.floor(coercedNumber);
            } else {
                value = Math.ceil(coercedNumber);
            }
        }

        return value;
    }

    function daysInMonth(year, month) {
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }

    function weeksInYear(year, dow, doy) {
        return weekOfYear(moment([year, 11, 31 + dow - doy]), dow, doy).week;
    }

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    function checkOverflow(m) {
        var overflow;
        if (m._a && m._pf.overflow === -2) {
            overflow =
                m._a[MONTH] < 0 || m._a[MONTH] > 11 ? MONTH :
                m._a[DATE] < 1 || m._a[DATE] > daysInMonth(m._a[YEAR], m._a[MONTH]) ? DATE :
                m._a[HOUR] < 0 || m._a[HOUR] > 24 ||
                    (m._a[HOUR] === 24 && (m._a[MINUTE] !== 0 ||
                                           m._a[SECOND] !== 0 ||
                                           m._a[MILLISECOND] !== 0)) ? HOUR :
                m._a[MINUTE] < 0 || m._a[MINUTE] > 59 ? MINUTE :
                m._a[SECOND] < 0 || m._a[SECOND] > 59 ? SECOND :
                m._a[MILLISECOND] < 0 || m._a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (m._pf._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }

            m._pf.overflow = overflow;
        }
    }

    function isValid(m) {
        if (m._isValid == null) {
            m._isValid = !isNaN(m._d.getTime()) &&
                m._pf.overflow < 0 &&
                !m._pf.empty &&
                !m._pf.invalidMonth &&
                !m._pf.nullInput &&
                !m._pf.invalidFormat &&
                !m._pf.userInvalidated;

            if (m._strict) {
                m._isValid = m._isValid &&
                    m._pf.charsLeftOver === 0 &&
                    m._pf.unusedTokens.length === 0 &&
                    m._pf.bigHour === undefined;
            }
        }
        return m._isValid;
    }

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return null;
    }

    function loadLocale(name) {
        var oldLocale = null;
        if (!locales[name] && hasModule) {
            try {
                oldLocale = moment.locale();
                require('./locale/' + name);
                // because defineLocale currently also sets the global locale, we want to undo that for lazy loaded locales
                moment.locale(oldLocale);
            } catch (e) { }
        }
        return locales[name];
    }

    // Return a moment from input, that is local/utc/utcOffset equivalent to
    // model.
    function makeAs(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (moment.isMoment(input) || isDate(input) ?
                    +input : +moment(input)) - (+res);
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(+res._d + diff);
            moment.updateOffset(res, false);
            return res;
        } else {
            return moment(input).local();
        }
    }

    /************************************
        Locale
    ************************************/


    extend(Locale.prototype, {

        set : function (config) {
            var prop, i;
            for (i in config) {
                prop = config[i];
                if (typeof prop === 'function') {
                    this[i] = prop;
                } else {
                    this['_' + i] = prop;
                }
            }
            // Lenient ordinal parsing accepts just a number in addition to
            // number + (possibly) stuff coming from _ordinalParseLenient.
            this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + /\d{1,2}/.source);
        },

        _months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        months : function (m) {
            return this._months[m.month()];
        },

        _monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        monthsShort : function (m) {
            return this._monthsShort[m.month()];
        },

        monthsParse : function (monthName, format, strict) {
            var i, mom, regex;

            if (!this._monthsParse) {
                this._monthsParse = [];
                this._longMonthsParse = [];
                this._shortMonthsParse = [];
            }

            for (i = 0; i < 12; i++) {
                // make the regex if we don't have it already
                mom = moment.utc([2000, i]);
                if (strict && !this._longMonthsParse[i]) {
                    this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                    this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
                }
                if (!strict && !this._monthsParse[i]) {
                    regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                    this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                    return i;
                } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                    return i;
                } else if (!strict && this._monthsParse[i].test(monthName)) {
                    return i;
                }
            }
        },

        _weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdays : function (m) {
            return this._weekdays[m.day()];
        },

        _weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysShort : function (m) {
            return this._weekdaysShort[m.day()];
        },

        _weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        weekdaysMin : function (m) {
            return this._weekdaysMin[m.day()];
        },

        weekdaysParse : function (weekdayName) {
            var i, mom, regex;

            if (!this._weekdaysParse) {
                this._weekdaysParse = [];
            }

            for (i = 0; i < 7; i++) {
                // make the regex if we don't have it already
                if (!this._weekdaysParse[i]) {
                    mom = moment([2000, 1]).day(i);
                    regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                    this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (this._weekdaysParse[i].test(weekdayName)) {
                    return i;
                }
            }
        },

        _longDateFormat : {
            LTS : 'h:mm:ss A',
            LT : 'h:mm A',
            L : 'MM/DD/YYYY',
            LL : 'MMMM D, YYYY',
            LLL : 'MMMM D, YYYY LT',
            LLLL : 'dddd, MMMM D, YYYY LT'
        },
        longDateFormat : function (key) {
            var output = this._longDateFormat[key];
            if (!output && this._longDateFormat[key.toUpperCase()]) {
                output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (val) {
                    return val.slice(1);
                });
                this._longDateFormat[key] = output;
            }
            return output;
        },

        isPM : function (input) {
            // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
            // Using charAt should be more compatible.
            return ((input + '').toLowerCase().charAt(0) === 'p');
        },

        _meridiemParse : /[ap]\.?m?\.?/i,
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'pm' : 'PM';
            } else {
                return isLower ? 'am' : 'AM';
            }
        },


        _calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        calendar : function (key, mom, now) {
            var output = this._calendar[key];
            return typeof output === 'function' ? output.apply(mom, [now]) : output;
        },

        _relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },

        relativeTime : function (number, withoutSuffix, string, isFuture) {
            var output = this._relativeTime[string];
            return (typeof output === 'function') ?
                output(number, withoutSuffix, string, isFuture) :
                output.replace(/%d/i, number);
        },

        pastFuture : function (diff, output) {
            var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
            return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
        },

        ordinal : function (number) {
            return this._ordinal.replace('%d', number);
        },
        _ordinal : '%d',
        _ordinalParse : /\d{1,2}/,

        preparse : function (string) {
            return string;
        },

        postformat : function (string) {
            return string;
        },

        week : function (mom) {
            return weekOfYear(mom, this._week.dow, this._week.doy).week;
        },

        _week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        },

        firstDayOfWeek : function () {
            return this._week.dow;
        },

        firstDayOfYear : function () {
            return this._week.doy;
        },

        _invalidDate: 'Invalid date',
        invalidDate: function () {
            return this._invalidDate;
        }
    });

    /************************************
        Formatting
    ************************************/


    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '';
            for (i = 0; i < length; i++) {
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());

        if (!formatFunctions[format]) {
            formatFunctions[format] = makeFormatFunction(format);
        }

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }


    /************************************
        Parsing
    ************************************/


    // get the regex to find the next token
    function getParseRegexForToken(token, config) {
        var a, strict = config._strict;
        switch (token) {
        case 'Q':
            return parseTokenOneDigit;
        case 'DDDD':
            return parseTokenThreeDigits;
        case 'YYYY':
        case 'GGGG':
        case 'gggg':
            return strict ? parseTokenFourDigits : parseTokenOneToFourDigits;
        case 'Y':
        case 'G':
        case 'g':
            return parseTokenSignedNumber;
        case 'YYYYYY':
        case 'YYYYY':
        case 'GGGGG':
        case 'ggggg':
            return strict ? parseTokenSixDigits : parseTokenOneToSixDigits;
        case 'S':
            if (strict) {
                return parseTokenOneDigit;
            }
            /* falls through */
        case 'SS':
            if (strict) {
                return parseTokenTwoDigits;
            }
            /* falls through */
        case 'SSS':
            if (strict) {
                return parseTokenThreeDigits;
            }
            /* falls through */
        case 'DDD':
            return parseTokenOneToThreeDigits;
        case 'MMM':
        case 'MMMM':
        case 'dd':
        case 'ddd':
        case 'dddd':
            return parseTokenWord;
        case 'a':
        case 'A':
            return config._locale._meridiemParse;
        case 'x':
            return parseTokenOffsetMs;
        case 'X':
            return parseTokenTimestampMs;
        case 'Z':
        case 'ZZ':
            return parseTokenTimezone;
        case 'T':
            return parseTokenT;
        case 'SSSS':
            return parseTokenDigits;
        case 'MM':
        case 'DD':
        case 'YY':
        case 'GG':
        case 'gg':
        case 'HH':
        case 'hh':
        case 'mm':
        case 'ss':
        case 'ww':
        case 'WW':
            return strict ? parseTokenTwoDigits : parseTokenOneOrTwoDigits;
        case 'M':
        case 'D':
        case 'd':
        case 'H':
        case 'h':
        case 'm':
        case 's':
        case 'w':
        case 'W':
        case 'e':
        case 'E':
            return parseTokenOneOrTwoDigits;
        case 'Do':
            return strict ? config._locale._ordinalParse : config._locale._ordinalParseLenient;
        default :
            a = new RegExp(regexpEscape(unescapeFormat(token.replace('\\', '')), 'i'));
            return a;
        }
    }

    function utcOffsetFromString(string) {
        string = string || '';
        var possibleTzMatches = (string.match(parseTokenTimezone) || []),
            tzChunk = possibleTzMatches[possibleTzMatches.length - 1] || [],
            parts = (tzChunk + '').match(parseTimezoneChunker) || ['-', 0, 0],
            minutes = +(parts[1] * 60) + toInt(parts[2]);

        return parts[0] === '+' ? minutes : -minutes;
    }

    // function to convert string input to date
    function addTimeToArrayFromToken(token, input, config) {
        var a, datePartArray = config._a;

        switch (token) {
        // QUARTER
        case 'Q':
            if (input != null) {
                datePartArray[MONTH] = (toInt(input) - 1) * 3;
            }
            break;
        // MONTH
        case 'M' : // fall through to MM
        case 'MM' :
            if (input != null) {
                datePartArray[MONTH] = toInt(input) - 1;
            }
            break;
        case 'MMM' : // fall through to MMMM
        case 'MMMM' :
            a = config._locale.monthsParse(input, token, config._strict);
            // if we didn't find a month name, mark the date as invalid.
            if (a != null) {
                datePartArray[MONTH] = a;
            } else {
                config._pf.invalidMonth = input;
            }
            break;
        // DAY OF MONTH
        case 'D' : // fall through to DD
        case 'DD' :
            if (input != null) {
                datePartArray[DATE] = toInt(input);
            }
            break;
        case 'Do' :
            if (input != null) {
                datePartArray[DATE] = toInt(parseInt(
                            input.match(/\d{1,2}/)[0], 10));
            }
            break;
        // DAY OF YEAR
        case 'DDD' : // fall through to DDDD
        case 'DDDD' :
            if (input != null) {
                config._dayOfYear = toInt(input);
            }

            break;
        // YEAR
        case 'YY' :
            datePartArray[YEAR] = moment.parseTwoDigitYear(input);
            break;
        case 'YYYY' :
        case 'YYYYY' :
        case 'YYYYYY' :
            datePartArray[YEAR] = toInt(input);
            break;
        // AM / PM
        case 'a' : // fall through to A
        case 'A' :
            config._meridiem = input;
            // config._isPm = config._locale.isPM(input);
            break;
        // HOUR
        case 'h' : // fall through to hh
        case 'hh' :
            config._pf.bigHour = true;
            /* falls through */
        case 'H' : // fall through to HH
        case 'HH' :
            datePartArray[HOUR] = toInt(input);
            break;
        // MINUTE
        case 'm' : // fall through to mm
        case 'mm' :
            datePartArray[MINUTE] = toInt(input);
            break;
        // SECOND
        case 's' : // fall through to ss
        case 'ss' :
            datePartArray[SECOND] = toInt(input);
            break;
        // MILLISECOND
        case 'S' :
        case 'SS' :
        case 'SSS' :
        case 'SSSS' :
            datePartArray[MILLISECOND] = toInt(('0.' + input) * 1000);
            break;
        // UNIX OFFSET (MILLISECONDS)
        case 'x':
            config._d = new Date(toInt(input));
            break;
        // UNIX TIMESTAMP WITH MS
        case 'X':
            config._d = new Date(parseFloat(input) * 1000);
            break;
        // TIMEZONE
        case 'Z' : // fall through to ZZ
        case 'ZZ' :
            config._useUTC = true;
            config._tzm = utcOffsetFromString(input);
            break;
        // WEEKDAY - human
        case 'dd':
        case 'ddd':
        case 'dddd':
            a = config._locale.weekdaysParse(input);
            // if we didn't get a weekday name, mark the date as invalid
            if (a != null) {
                config._w = config._w || {};
                config._w['d'] = a;
            } else {
                config._pf.invalidWeekday = input;
            }
            break;
        // WEEK, WEEK DAY - numeric
        case 'w':
        case 'ww':
        case 'W':
        case 'WW':
        case 'd':
        case 'e':
        case 'E':
            token = token.substr(0, 1);
            /* falls through */
        case 'gggg':
        case 'GGGG':
        case 'GGGGG':
            token = token.substr(0, 2);
            if (input) {
                config._w = config._w || {};
                config._w[token] = toInt(input);
            }
            break;
        case 'gg':
        case 'GG':
            config._w = config._w || {};
            config._w[token] = moment.parseTwoDigitYear(input);
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = dfl(w.GG, config._a[YEAR], weekOfYear(moment(), 1, 4).year);
            week = dfl(w.W, 1);
            weekday = dfl(w.E, 1);
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            weekYear = dfl(w.gg, config._a[YEAR], weekOfYear(moment(), dow, doy).year);
            week = dfl(w.w, 1);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < dow) {
                    ++week;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
            } else {
                // default to begining of week
                weekday = dow;
            }
        }
        temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);

        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function dateFromConfig(config) {
        var i, date, input = [], currentDate, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear) {
            yearToUse = dfl(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse)) {
                config._pf._overflowDayOfYear = true;
            }

            date = makeUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? makeUTCDate : makeDate).apply(null, input);
        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }
    }

    function dateFromObject(config) {
        var normalizedInput;

        if (config._d) {
            return;
        }

        normalizedInput = normalizeObjectUnits(config._i);
        config._a = [
            normalizedInput.year,
            normalizedInput.month,
            normalizedInput.day || normalizedInput.date,
            normalizedInput.hour,
            normalizedInput.minute,
            normalizedInput.second,
            normalizedInput.millisecond
        ];

        dateFromConfig(config);
    }

    function currentDateArray(config) {
        var now = new Date();
        if (config._useUTC) {
            return [
                now.getUTCFullYear(),
                now.getUTCMonth(),
                now.getUTCDate()
            ];
        } else {
            return [now.getFullYear(), now.getMonth(), now.getDate()];
        }
    }

    // date from string and format string
    function makeDateFromStringAndFormat(config) {
        if (config._f === moment.ISO_8601) {
            parseISO(config);
            return;
        }

        config._a = [];
        config._pf.empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    config._pf.unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    config._pf.empty = false;
                }
                else {
                    config._pf.unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                config._pf.unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        config._pf.charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            config._pf.unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (config._pf.bigHour === true && config._a[HOUR] <= 12) {
            config._pf.bigHour = undefined;
        }
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR],
                config._meridiem);
        dateFromConfig(config);
        checkOverflow(config);
    }

    function unescapeFormat(s) {
        return s.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        });
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function regexpEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    // date from string and array of format strings
    function makeDateFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            config._pf.invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._pf = defaultParsingFlags();
            tempConfig._f = config._f[i];
            makeDateFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += tempConfig._pf.charsLeftOver;

            //or tokens
            currentScore += tempConfig._pf.unusedTokens.length * 10;

            tempConfig._pf.score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    // date from iso format
    function parseISO(config) {
        var i, l,
            string = config._i,
            match = isoRegex.exec(string);

        if (match) {
            config._pf.iso = true;
            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(string)) {
                    // match[5] should be 'T' or undefined
                    config._f = isoDates[i][0] + (match[6] || ' ');
                    break;
                }
            }
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(string)) {
                    config._f += isoTimes[i][0];
                    break;
                }
            }
            if (string.match(parseTokenTimezone)) {
                config._f += 'Z';
            }
            makeDateFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function makeDateFromString(config) {
        parseISO(config);
        if (config._isValid === false) {
            delete config._isValid;
            moment.createFromInputFallback(config);
        }
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function makeDateFromInput(config) {
        var input = config._i, matched;
        if (input === undefined) {
            config._d = new Date();
        } else if (isDate(input)) {
            config._d = new Date(+input);
        } else if ((matched = aspNetJsonRegex.exec(input)) !== null) {
            config._d = new Date(+matched[1]);
        } else if (typeof input === 'string') {
            makeDateFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            dateFromConfig(config);
        } else if (typeof(input) === 'object') {
            dateFromObject(config);
        } else if (typeof(input) === 'number') {
            // from milliseconds
            config._d = new Date(input);
        } else {
            moment.createFromInputFallback(config);
        }
    }

    function makeDate(y, m, d, h, M, s, ms) {
        //can't just apply() to create a date:
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y, m, d, h, M, s, ms);

        //the date constructor doesn't accept years < 1970
        if (y < 1970) {
            date.setFullYear(y);
        }
        return date;
    }

    function makeUTCDate(y) {
        var date = new Date(Date.UTC.apply(null, arguments));
        if (y < 1970) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    function parseWeekday(input, locale) {
        if (typeof input === 'string') {
            if (!isNaN(input)) {
                input = parseInt(input, 10);
            }
            else {
                input = locale.weekdaysParse(input);
                if (typeof input !== 'number') {
                    return null;
                }
            }
        }
        return input;
    }

    /************************************
        Relative Time
    ************************************/


    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime(posNegDuration, withoutSuffix, locale) {
        var duration = moment.duration(posNegDuration).abs(),
            seconds = round(duration.as('s')),
            minutes = round(duration.as('m')),
            hours = round(duration.as('h')),
            days = round(duration.as('d')),
            months = round(duration.as('M')),
            years = round(duration.as('y')),

            args = seconds < relativeTimeThresholds.s && ['s', seconds] ||
                minutes === 1 && ['m'] ||
                minutes < relativeTimeThresholds.m && ['mm', minutes] ||
                hours === 1 && ['h'] ||
                hours < relativeTimeThresholds.h && ['hh', hours] ||
                days === 1 && ['d'] ||
                days < relativeTimeThresholds.d && ['dd', days] ||
                months === 1 && ['M'] ||
                months < relativeTimeThresholds.M && ['MM', months] ||
                years === 1 && ['y'] || ['yy', years];

        args[2] = withoutSuffix;
        args[3] = +posNegDuration > 0;
        args[4] = locale;
        return substituteTimeAgo.apply({}, args);
    }


    /************************************
        Week of Year
    ************************************/


    // firstDayOfWeek       0 = sun, 6 = sat
    //                      the day of the week that starts the week
    //                      (usually sunday or monday)
    // firstDayOfWeekOfYear 0 = sun, 6 = sat
    //                      the first week is the week that contains the first
    //                      of this day of the week
    //                      (eg. ISO weeks use thursday (4))
    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
        var end = firstDayOfWeekOfYear - firstDayOfWeek,
            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
            adjustedMoment;


        if (daysToDayOfWeek > end) {
            daysToDayOfWeek -= 7;
        }

        if (daysToDayOfWeek < end - 7) {
            daysToDayOfWeek += 7;
        }

        adjustedMoment = moment(mom).add(daysToDayOfWeek, 'd');
        return {
            week: Math.ceil(adjustedMoment.dayOfYear() / 7),
            year: adjustedMoment.year()
        };
    }

    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
        var d = makeUTCDate(year, 0, 1).getUTCDay(), daysToAdd, dayOfYear;

        d = d === 0 ? 7 : d;
        weekday = weekday != null ? weekday : firstDayOfWeek;
        daysToAdd = firstDayOfWeek - d + (d > firstDayOfWeekOfYear ? 7 : 0) - (d < firstDayOfWeek ? 7 : 0);
        dayOfYear = 7 * (week - 1) + (weekday - firstDayOfWeek) + daysToAdd + 1;

        return {
            year: dayOfYear > 0 ? year : year - 1,
            dayOfYear: dayOfYear > 0 ?  dayOfYear : daysInYear(year - 1) + dayOfYear
        };
    }

    /************************************
        Top Level Functions
    ************************************/

    function makeMoment(config) {
        var input = config._i,
            format = config._f,
            res;

        config._locale = config._locale || moment.localeData(config._l);

        if (input === null || (format === undefined && input === '')) {
            return moment.invalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (moment.isMoment(input)) {
            return new Moment(input, true);
        } else if (format) {
            if (isArray(format)) {
                makeDateFromStringAndArray(config);
            } else {
                makeDateFromStringAndFormat(config);
            }
        } else {
            makeDateFromInput(config);
        }

        res = new Moment(config);
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    moment = function (input, format, locale, strict) {
        var c;

        if (typeof(locale) === 'boolean') {
            strict = locale;
            locale = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c = {};
        c._isAMomentObject = true;
        c._i = input;
        c._f = format;
        c._l = locale;
        c._strict = strict;
        c._isUTC = false;
        c._pf = defaultParsingFlags();

        return makeMoment(c);
    };

    moment.suppressDeprecationWarnings = false;

    moment.createFromInputFallback = deprecate(
        'moment construction falls back to js Date. This is ' +
        'discouraged and will be removed in upcoming major ' +
        'release. Please refer to ' +
        'https://github.com/moment/moment/issues/1407 for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return moment();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    moment.min = function () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    };

    moment.max = function () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    };

    // creating with utc
    moment.utc = function (input, format, locale, strict) {
        var c;

        if (typeof(locale) === 'boolean') {
            strict = locale;
            locale = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c = {};
        c._isAMomentObject = true;
        c._useUTC = true;
        c._isUTC = true;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;
        c._pf = defaultParsingFlags();

        return makeMoment(c).utc();
    };

    // creating with unix timestamp (in seconds)
    moment.unix = function (input) {
        return moment(input * 1000);
    };

    // duration
    moment.duration = function (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            parseIso,
            diffRes;

        if (moment.isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months
            };
        } else if (typeof input === 'number') {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetTimeSpanJsonRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(match[MILLISECOND]) * sign
            };
        } else if (!!(match = isoDurationRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            parseIso = function (inp) {
                // We'd normally use ~~inp for this, but unfortunately it also
                // converts floats to ints.
                // inp may be undefined, so careful calling replace on it.
                var res = inp && parseFloat(inp.replace(',', '.'));
                // apply sign while we're at it
                return (isNaN(res) ? 0 : res) * sign;
            };
            duration = {
                y: parseIso(match[2]),
                M: parseIso(match[3]),
                d: parseIso(match[4]),
                h: parseIso(match[5]),
                m: parseIso(match[6]),
                s: parseIso(match[7]),
                w: parseIso(match[8])
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' &&
                ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(moment(duration.from), moment(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (moment.isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    };

    // version number
    moment.version = VERSION;

    // default format
    moment.defaultFormat = isoFormat;

    // constant that refers to the ISO standard
    moment.ISO_8601 = function () {};

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    moment.momentProperties = momentProperties;

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    moment.updateOffset = function () {};

    // This function allows you to set a threshold for relative time strings
    moment.relativeTimeThreshold = function (threshold, limit) {
        if (relativeTimeThresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return relativeTimeThresholds[threshold];
        }
        relativeTimeThresholds[threshold] = limit;
        return true;
    };

    moment.lang = deprecate(
        'moment.lang is deprecated. Use moment.locale instead.',
        function (key, value) {
            return moment.locale(key, value);
        }
    );

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    moment.locale = function (key, values) {
        var data;
        if (key) {
            if (typeof(values) !== 'undefined') {
                data = moment.defineLocale(key, values);
            }
            else {
                data = moment.localeData(key);
            }

            if (data) {
                moment.duration._locale = moment._locale = data;
            }
        }

        return moment._locale._abbr;
    };

    moment.defineLocale = function (name, values) {
        if (values !== null) {
            values.abbr = name;
            if (!locales[name]) {
                locales[name] = new Locale();
            }
            locales[name].set(values);

            // backwards compat for now: also set the locale
            moment.locale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    };

    moment.langData = deprecate(
        'moment.langData is deprecated. Use moment.localeData instead.',
        function (key) {
            return moment.localeData(key);
        }
    );

    // returns locale data
    moment.localeData = function (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return moment._locale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    };

    // compare moment object
    moment.isMoment = function (obj) {
        return obj instanceof Moment ||
            (obj != null && hasOwnProp(obj, '_isAMomentObject'));
    };

    // for typechecking Duration objects
    moment.isDuration = function (obj) {
        return obj instanceof Duration;
    };

    for (i = lists.length - 1; i >= 0; --i) {
        makeList(lists[i]);
    }

    moment.normalizeUnits = function (units) {
        return normalizeUnits(units);
    };

    moment.invalid = function (flags) {
        var m = moment.utc(NaN);
        if (flags != null) {
            extend(m._pf, flags);
        }
        else {
            m._pf.userInvalidated = true;
        }

        return m;
    };

    moment.parseZone = function () {
        return moment.apply(null, arguments).parseZone();
    };

    moment.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    moment.isDate = isDate;

    /************************************
        Moment Prototype
    ************************************/


    extend(moment.fn = Moment.prototype, {

        clone : function () {
            return moment(this);
        },

        valueOf : function () {
            return +this._d - ((this._offset || 0) * 60000);
        },

        unix : function () {
            return Math.floor(+this / 1000);
        },

        toString : function () {
            return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
        },

        toDate : function () {
            return this._offset ? new Date(+this) : this._d;
        },

        toISOString : function () {
            var m = moment(this).utc();
            if (0 < m.year() && m.year() <= 9999) {
                if ('function' === typeof Date.prototype.toISOString) {
                    // native implementation is ~50x faster, use it when we can
                    return this.toDate().toISOString();
                } else {
                    return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
                }
            } else {
                return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            }
        },

        toArray : function () {
            var m = this;
            return [
                m.year(),
                m.month(),
                m.date(),
                m.hours(),
                m.minutes(),
                m.seconds(),
                m.milliseconds()
            ];
        },

        isValid : function () {
            return isValid(this);
        },

        isDSTShifted : function () {
            if (this._a) {
                return this.isValid() && compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray()) > 0;
            }

            return false;
        },

        parsingFlags : function () {
            return extend({}, this._pf);
        },

        invalidAt: function () {
            return this._pf.overflow;
        },

        utc : function (keepLocalTime) {
            return this.utcOffset(0, keepLocalTime);
        },

        local : function (keepLocalTime) {
            if (this._isUTC) {
                this.utcOffset(0, keepLocalTime);
                this._isUTC = false;

                if (keepLocalTime) {
                    this.subtract(this._dateUtcOffset(), 'm');
                }
            }
            return this;
        },

        format : function (inputString) {
            var output = formatMoment(this, inputString || moment.defaultFormat);
            return this.localeData().postformat(output);
        },

        add : createAdder(1, 'add'),

        subtract : createAdder(-1, 'subtract'),

        diff : function (input, units, asFloat) {
            var that = makeAs(input, this),
                zoneDiff = (that.utcOffset() - this.utcOffset()) * 6e4,
                anchor, diff, output, daysAdjust;

            units = normalizeUnits(units);

            if (units === 'year' || units === 'month' || units === 'quarter') {
                output = monthDiff(this, that);
                if (units === 'quarter') {
                    output = output / 3;
                } else if (units === 'year') {
                    output = output / 12;
                }
            } else {
                diff = this - that;
                output = units === 'second' ? diff / 1e3 : // 1000
                    units === 'minute' ? diff / 6e4 : // 1000 * 60
                    units === 'hour' ? diff / 36e5 : // 1000 * 60 * 60
                    units === 'day' ? (diff - zoneDiff) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
                    units === 'week' ? (diff - zoneDiff) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
                    diff;
            }
            return asFloat ? output : absRound(output);
        },

        from : function (time, withoutSuffix) {
            return moment.duration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        },

        fromNow : function (withoutSuffix) {
            return this.from(moment(), withoutSuffix);
        },

        calendar : function (time) {
            // We want to compare the start of today, vs this.
            // Getting start-of-today depends on whether we're locat/utc/offset
            // or not.
            var now = time || moment(),
                sod = makeAs(now, this).startOf('day'),
                diff = this.diff(sod, 'days', true),
                format = diff < -6 ? 'sameElse' :
                    diff < -1 ? 'lastWeek' :
                    diff < 0 ? 'lastDay' :
                    diff < 1 ? 'sameDay' :
                    diff < 2 ? 'nextDay' :
                    diff < 7 ? 'nextWeek' : 'sameElse';
            return this.format(this.localeData().calendar(format, this, moment(now)));
        },

        isLeapYear : function () {
            return isLeapYear(this.year());
        },

        isDST : function () {
            return (this.utcOffset() > this.clone().month(0).utcOffset() ||
                this.utcOffset() > this.clone().month(5).utcOffset());
        },

        day : function (input) {
            var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            if (input != null) {
                input = parseWeekday(input, this.localeData());
                return this.add(input - day, 'd');
            } else {
                return day;
            }
        },

        month : makeAccessor('Month', true),

        startOf : function (units) {
            units = normalizeUnits(units);
            // the following switch intentionally omits break keywords
            // to utilize falling through the cases.
            switch (units) {
            case 'year':
                this.month(0);
                /* falls through */
            case 'quarter':
            case 'month':
                this.date(1);
                /* falls through */
            case 'week':
            case 'isoWeek':
            case 'day':
                this.hours(0);
                /* falls through */
            case 'hour':
                this.minutes(0);
                /* falls through */
            case 'minute':
                this.seconds(0);
                /* falls through */
            case 'second':
                this.milliseconds(0);
                /* falls through */
            }

            // weeks are a special case
            if (units === 'week') {
                this.weekday(0);
            } else if (units === 'isoWeek') {
                this.isoWeekday(1);
            }

            // quarters are also special
            if (units === 'quarter') {
                this.month(Math.floor(this.month() / 3) * 3);
            }

            return this;
        },

        endOf: function (units) {
            units = normalizeUnits(units);
            if (units === undefined || units === 'millisecond') {
                return this;
            }
            return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
        },

        isAfter: function (input, units) {
            var inputMs;
            units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
            if (units === 'millisecond') {
                input = moment.isMoment(input) ? input : moment(input);
                return +this > +input;
            } else {
                inputMs = moment.isMoment(input) ? +input : +moment(input);
                return inputMs < +this.clone().startOf(units);
            }
        },

        isBefore: function (input, units) {
            var inputMs;
            units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
            if (units === 'millisecond') {
                input = moment.isMoment(input) ? input : moment(input);
                return +this < +input;
            } else {
                inputMs = moment.isMoment(input) ? +input : +moment(input);
                return +this.clone().endOf(units) < inputMs;
            }
        },

        isBetween: function (from, to, units) {
            return this.isAfter(from, units) && this.isBefore(to, units);
        },

        isSame: function (input, units) {
            var inputMs;
            units = normalizeUnits(units || 'millisecond');
            if (units === 'millisecond') {
                input = moment.isMoment(input) ? input : moment(input);
                return +this === +input;
            } else {
                inputMs = +moment(input);
                return +(this.clone().startOf(units)) <= inputMs && inputMs <= +(this.clone().endOf(units));
            }
        },

        min: deprecate(
                 'moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',
                 function (other) {
                     other = moment.apply(null, arguments);
                     return other < this ? this : other;
                 }
         ),

        max: deprecate(
                'moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',
                function (other) {
                    other = moment.apply(null, arguments);
                    return other > this ? this : other;
                }
        ),

        zone : deprecate(
                'moment().zone is deprecated, use moment().utcOffset instead. ' +
                'https://github.com/moment/moment/issues/1779',
                function (input, keepLocalTime) {
                    if (input != null) {
                        if (typeof input !== 'string') {
                            input = -input;
                        }

                        this.utcOffset(input, keepLocalTime);

                        return this;
                    } else {
                        return -this.utcOffset();
                    }
                }
        ),

        // keepLocalTime = true means only change the timezone, without
        // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
        // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
        // +0200, so we adjust the time as needed, to be valid.
        //
        // Keeping the time actually adds/subtracts (one hour)
        // from the actual represented time. That is why we call updateOffset
        // a second time. In case it wants us to change the offset again
        // _changeInProgress == true case, then we have to adjust, because
        // there is no such time in the given timezone.
        utcOffset : function (input, keepLocalTime) {
            var offset = this._offset || 0,
                localAdjust;
            if (input != null) {
                if (typeof input === 'string') {
                    input = utcOffsetFromString(input);
                }
                if (Math.abs(input) < 16) {
                    input = input * 60;
                }
                if (!this._isUTC && keepLocalTime) {
                    localAdjust = this._dateUtcOffset();
                }
                this._offset = input;
                this._isUTC = true;
                if (localAdjust != null) {
                    this.add(localAdjust, 'm');
                }
                if (offset !== input) {
                    if (!keepLocalTime || this._changeInProgress) {
                        addOrSubtractDurationFromMoment(this,
                                moment.duration(input - offset, 'm'), 1, false);
                    } else if (!this._changeInProgress) {
                        this._changeInProgress = true;
                        moment.updateOffset(this, true);
                        this._changeInProgress = null;
                    }
                }

                return this;
            } else {
                return this._isUTC ? offset : this._dateUtcOffset();
            }
        },

        isLocal : function () {
            return !this._isUTC;
        },

        isUtcOffset : function () {
            return this._isUTC;
        },

        isUtc : function () {
            return this._isUTC && this._offset === 0;
        },

        zoneAbbr : function () {
            return this._isUTC ? 'UTC' : '';
        },

        zoneName : function () {
            return this._isUTC ? 'Coordinated Universal Time' : '';
        },

        parseZone : function () {
            if (this._tzm) {
                this.utcOffset(this._tzm);
            } else if (typeof this._i === 'string') {
                this.utcOffset(utcOffsetFromString(this._i));
            }
            return this;
        },

        hasAlignedHourOffset : function (input) {
            if (!input) {
                input = 0;
            }
            else {
                input = moment(input).utcOffset();
            }

            return (this.utcOffset() - input) % 60 === 0;
        },

        daysInMonth : function () {
            return daysInMonth(this.year(), this.month());
        },

        dayOfYear : function (input) {
            var dayOfYear = round((moment(this).startOf('day') - moment(this).startOf('year')) / 864e5) + 1;
            return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
        },

        quarter : function (input) {
            return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
        },

        weekYear : function (input) {
            var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
            return input == null ? year : this.add((input - year), 'y');
        },

        isoWeekYear : function (input) {
            var year = weekOfYear(this, 1, 4).year;
            return input == null ? year : this.add((input - year), 'y');
        },

        week : function (input) {
            var week = this.localeData().week(this);
            return input == null ? week : this.add((input - week) * 7, 'd');
        },

        isoWeek : function (input) {
            var week = weekOfYear(this, 1, 4).week;
            return input == null ? week : this.add((input - week) * 7, 'd');
        },

        weekday : function (input) {
            var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return input == null ? weekday : this.add(input - weekday, 'd');
        },

        isoWeekday : function (input) {
            // behaves the same as moment#day except
            // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
            // as a setter, sunday should belong to the previous week.
            return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
        },

        isoWeeksInYear : function () {
            return weeksInYear(this.year(), 1, 4);
        },

        weeksInYear : function () {
            var weekInfo = this.localeData()._week;
            return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
        },

        get : function (units) {
            units = normalizeUnits(units);
            return this[units]();
        },

        set : function (units, value) {
            var unit;
            if (typeof units === 'object') {
                for (unit in units) {
                    this.set(unit, units[unit]);
                }
            }
            else {
                units = normalizeUnits(units);
                if (typeof this[units] === 'function') {
                    this[units](value);
                }
            }
            return this;
        },

        // If passed a locale key, it will set the locale for this
        // instance.  Otherwise, it will return the locale configuration
        // variables for this instance.
        locale : function (key) {
            var newLocaleData;

            if (key === undefined) {
                return this._locale._abbr;
            } else {
                newLocaleData = moment.localeData(key);
                if (newLocaleData != null) {
                    this._locale = newLocaleData;
                }
                return this;
            }
        },

        lang : deprecate(
            'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
            function (key) {
                if (key === undefined) {
                    return this.localeData();
                } else {
                    return this.locale(key);
                }
            }
        ),

        localeData : function () {
            return this._locale;
        },

        _dateUtcOffset : function () {
            // On Firefox.24 Date#getTimezoneOffset returns a floating point.
            // https://github.com/moment/moment/pull/1871
            return -Math.round(this._d.getTimezoneOffset() / 15) * 15;
        }

    });

    function rawMonthSetter(mom, value) {
        var dayOfMonth;

        // TODO: Move this out of here!
        if (typeof value === 'string') {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (typeof value !== 'number') {
                return mom;
            }
        }

        dayOfMonth = Math.min(mom.date(),
                daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function rawGetter(mom, unit) {
        return mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]();
    }

    function rawSetter(mom, unit, value) {
        if (unit === 'Month') {
            return rawMonthSetter(mom, value);
        } else {
            return mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }

    function makeAccessor(unit, keepTime) {
        return function (value) {
            if (value != null) {
                rawSetter(this, unit, value);
                moment.updateOffset(this, keepTime);
                return this;
            } else {
                return rawGetter(this, unit);
            }
        };
    }

    moment.fn.millisecond = moment.fn.milliseconds = makeAccessor('Milliseconds', false);
    moment.fn.second = moment.fn.seconds = makeAccessor('Seconds', false);
    moment.fn.minute = moment.fn.minutes = makeAccessor('Minutes', false);
    // Setting the hour should keep the time, because the user explicitly
    // specified which hour he wants. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    moment.fn.hour = moment.fn.hours = makeAccessor('Hours', true);
    // moment.fn.month is defined separately
    moment.fn.date = makeAccessor('Date', true);
    moment.fn.dates = deprecate('dates accessor is deprecated. Use date instead.', makeAccessor('Date', true));
    moment.fn.year = makeAccessor('FullYear', true);
    moment.fn.years = deprecate('years accessor is deprecated. Use year instead.', makeAccessor('FullYear', true));

    // add plural methods
    moment.fn.days = moment.fn.day;
    moment.fn.months = moment.fn.month;
    moment.fn.weeks = moment.fn.week;
    moment.fn.isoWeeks = moment.fn.isoWeek;
    moment.fn.quarters = moment.fn.quarter;

    // add aliased format methods
    moment.fn.toJSON = moment.fn.toISOString;

    // alias isUtc for dev-friendliness
    moment.fn.isUTC = moment.fn.isUtc;

    /************************************
        Duration Prototype
    ************************************/


    function daysToYears (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        return days * 400 / 146097;
    }

    function yearsToDays (years) {
        // years * 365 + absRound(years / 4) -
        //     absRound(years / 100) + absRound(years / 400);
        return years * 146097 / 400;
    }

    extend(moment.duration.fn = Duration.prototype, {

        _bubble : function () {
            var milliseconds = this._milliseconds,
                days = this._days,
                months = this._months,
                data = this._data,
                seconds, minutes, hours, years = 0;

            // The following code bubbles up values, see the tests for
            // examples of what that means.
            data.milliseconds = milliseconds % 1000;

            seconds = absRound(milliseconds / 1000);
            data.seconds = seconds % 60;

            minutes = absRound(seconds / 60);
            data.minutes = minutes % 60;

            hours = absRound(minutes / 60);
            data.hours = hours % 24;

            days += absRound(hours / 24);

            // Accurately convert days to years, assume start from year 0.
            years = absRound(daysToYears(days));
            days -= absRound(yearsToDays(years));

            // 30 days to a month
            // TODO (iskren): Use anchor date (like 1st Jan) to compute this.
            months += absRound(days / 30);
            days %= 30;

            // 12 months -> 1 year
            years += absRound(months / 12);
            months %= 12;

            data.days = days;
            data.months = months;
            data.years = years;
        },

        abs : function () {
            this._milliseconds = Math.abs(this._milliseconds);
            this._days = Math.abs(this._days);
            this._months = Math.abs(this._months);

            this._data.milliseconds = Math.abs(this._data.milliseconds);
            this._data.seconds = Math.abs(this._data.seconds);
            this._data.minutes = Math.abs(this._data.minutes);
            this._data.hours = Math.abs(this._data.hours);
            this._data.months = Math.abs(this._data.months);
            this._data.years = Math.abs(this._data.years);

            return this;
        },

        weeks : function () {
            return absRound(this.days() / 7);
        },

        valueOf : function () {
            return this._milliseconds +
              this._days * 864e5 +
              (this._months % 12) * 2592e6 +
              toInt(this._months / 12) * 31536e6;
        },

        humanize : function (withSuffix) {
            var output = relativeTime(this, !withSuffix, this.localeData());

            if (withSuffix) {
                output = this.localeData().pastFuture(+this, output);
            }

            return this.localeData().postformat(output);
        },

        add : function (input, val) {
            // supports only 2.0-style add(1, 's') or add(moment)
            var dur = moment.duration(input, val);

            this._milliseconds += dur._milliseconds;
            this._days += dur._days;
            this._months += dur._months;

            this._bubble();

            return this;
        },

        subtract : function (input, val) {
            var dur = moment.duration(input, val);

            this._milliseconds -= dur._milliseconds;
            this._days -= dur._days;
            this._months -= dur._months;

            this._bubble();

            return this;
        },

        get : function (units) {
            units = normalizeUnits(units);
            return this[units.toLowerCase() + 's']();
        },

        as : function (units) {
            var days, months;
            units = normalizeUnits(units);

            if (units === 'month' || units === 'year') {
                days = this._days + this._milliseconds / 864e5;
                months = this._months + daysToYears(days) * 12;
                return units === 'month' ? months : months / 12;
            } else {
                // handle milliseconds separately because of floating point math errors (issue #1867)
                days = this._days + Math.round(yearsToDays(this._months / 12));
                switch (units) {
                    case 'week': return days / 7 + this._milliseconds / 6048e5;
                    case 'day': return days + this._milliseconds / 864e5;
                    case 'hour': return days * 24 + this._milliseconds / 36e5;
                    case 'minute': return days * 24 * 60 + this._milliseconds / 6e4;
                    case 'second': return days * 24 * 60 * 60 + this._milliseconds / 1000;
                    // Math.floor prevents floating point math errors here
                    case 'millisecond': return Math.floor(days * 24 * 60 * 60 * 1000) + this._milliseconds;
                    default: throw new Error('Unknown unit ' + units);
                }
            }
        },

        lang : moment.fn.lang,
        locale : moment.fn.locale,

        toIsoString : deprecate(
            'toIsoString() is deprecated. Please use toISOString() instead ' +
            '(notice the capitals)',
            function () {
                return this.toISOString();
            }
        ),

        toISOString : function () {
            // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
            var years = Math.abs(this.years()),
                months = Math.abs(this.months()),
                days = Math.abs(this.days()),
                hours = Math.abs(this.hours()),
                minutes = Math.abs(this.minutes()),
                seconds = Math.abs(this.seconds() + this.milliseconds() / 1000);

            if (!this.asSeconds()) {
                // this is the same as C#'s (Noda) and python (isodate)...
                // but not other JS (goog.date)
                return 'P0D';
            }

            return (this.asSeconds() < 0 ? '-' : '') +
                'P' +
                (years ? years + 'Y' : '') +
                (months ? months + 'M' : '') +
                (days ? days + 'D' : '') +
                ((hours || minutes || seconds) ? 'T' : '') +
                (hours ? hours + 'H' : '') +
                (minutes ? minutes + 'M' : '') +
                (seconds ? seconds + 'S' : '');
        },

        localeData : function () {
            return this._locale;
        },

        toJSON : function () {
            return this.toISOString();
        }
    });

    moment.duration.fn.toString = moment.duration.fn.toISOString;

    function makeDurationGetter(name) {
        moment.duration.fn[name] = function () {
            return this._data[name];
        };
    }

    for (i in unitMillisecondFactors) {
        if (hasOwnProp(unitMillisecondFactors, i)) {
            makeDurationGetter(i.toLowerCase());
        }
    }

    moment.duration.fn.asMilliseconds = function () {
        return this.as('ms');
    };
    moment.duration.fn.asSeconds = function () {
        return this.as('s');
    };
    moment.duration.fn.asMinutes = function () {
        return this.as('m');
    };
    moment.duration.fn.asHours = function () {
        return this.as('h');
    };
    moment.duration.fn.asDays = function () {
        return this.as('d');
    };
    moment.duration.fn.asWeeks = function () {
        return this.as('weeks');
    };
    moment.duration.fn.asMonths = function () {
        return this.as('M');
    };
    moment.duration.fn.asYears = function () {
        return this.as('y');
    };

    /************************************
        Default Locale
    ************************************/


    // Set default locale, other locale will inherit from English.
    moment.locale('en', {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    /* EMBED_LOCALES */

    /************************************
        Exposing Moment
    ************************************/

    function makeGlobal(shouldDeprecate) {
        /*global ender:false */
        if (typeof ender !== 'undefined') {
            return;
        }
        oldGlobalMoment = globalScope.moment;
        if (shouldDeprecate) {
            globalScope.moment = deprecate(
                    'Accessing Moment through the global scope is ' +
                    'deprecated, and will be removed in an upcoming ' +
                    'release.',
                    moment);
        } else {
            globalScope.moment = moment;
        }
    }

    // CommonJS module is defined
    if (hasModule) {
        module.exports = moment;
    } else if (typeof define === 'function' && define.amd) {
        define(function (require, exports, module) {
            if (module.config && module.config() && module.config().noGlobal === true) {
                // release the global variable
                globalScope.moment = oldGlobalMoment;
            }

            return moment;
        });
        makeGlobal(true);
    } else {
        makeGlobal();
    }
}).call(this);

;(function (moduleName, moduleDefinition) {
 
     var compiledModule;
 
     if (typeof define === 'function' && define.amd) {
 
         // AMD
         define(moduleDefinition);
 
     }
     else {
 
         compiledModule         = moduleDefinition();
 
         if (typeof module !== 'undefined' && module.exports) { 
 
             // CommonJS
             module.exports     = compiledModule;
 
         }
         else {
 
             // Attach to global object or some namespace
             this[moduleName]   = compiledModule;
 
         }
 
     }
 
}).call(/*global object*/ Function('return this;')(), /*module name*/ 'faultylabs', /*module definition*/ function () {
 
    /*
    Javascript MD5 library - version 0.4

    Coded (2011) by Luigi Galli - LG@4e71.org - http://faultylabs.com

    Thanks to: Roberto Viola

    The below code is PUBLIC DOMAIN - NO WARRANTY!

    Changelog: 
               Version 0.4   - 2011-06-19
               + added compact version (md5_compact_min.js), this is a slower but smaller version 
                 (more than 4KB lighter before stripping/minification)
               + added preliminary support for Typed Arrays (see: 
                 https://developer.mozilla.org/en/JavaScript_typed_arrays and 
                 http://www.khronos.org/registry/typedarray/specs/latest/)
                 MD5() now accepts input data as ArrayBuffer, Float32Array, Float64Array, 
                 Int16Array, Int32Array, Int8Array, Uint16Array, Uint32Array or Uint8Array 
               - moved unit tests to md5_test.js
               - minor refactoring 

               Version 0.3.* - 2011-06-##
               - Internal dev versions

               Version 0.2 - 2011-05-22 
               ** FIXED: serious integer overflow problems which could cause a wrong MD5 hash being returned

               Version 0.1 - 2011
               -Initial version
   */

   var faultylabs = {};
   
   /*
      MD5()

       Computes the MD5 hash for the given input data

       input :  data as String - (Assumes Unicode code points are encoded as UTF-8. If you 
                                  attempt to digest Unicode strings using other encodings 
                                  you will get incorrect results!)

                data as array of characters - (Assumes Unicode code points are encoded as UTF-8. If you 
                                 attempt to digest Unicode strings using other encodings 
                                 you will get incorrect results!)

                data as array of bytes (plain javascript array of integer numbers)

                data as ArrayBuffer (see: https://developer.mozilla.org/en/JavaScript_typed_arrays)

                data as Float32Array, Float64Array, Int16Array, Int32Array, Int8Array, Uint16Array, Uint32Array or Uint8Array (see: https://developer.mozilla.org/en/JavaScript_typed_arrays)

                (DataView is not supported yet)

      output: MD5 hash (as Hex Uppercase String)
   */

   faultylabs.MD5 = function(data) {

       // convert number to (unsigned) 32 bit hex, zero filled string
       function to_zerofilled_hex(n) {     
           var t1 = (n >>> 0).toString(16)
           return "00000000".substr(0, 8 - t1.length) + t1
       }

       // convert array of chars to array of bytes 
       function chars_to_bytes(ac) {
           var retval = []
           for (var i = 0; i < ac.length; i++) {
               retval = retval.concat(str_to_bytes(ac[i]))
           }
           return retval
       }


       // convert a 64 bit unsigned number to array of bytes. Little endian
       function int64_to_bytes(num) {
           var retval = []
           for (var i = 0; i < 8; i++) {
               retval.push(num & 0xFF)
               num = num >>> 8
           }
           return retval
       }

       //  32 bit left-rotation
       function rol(num, places) {
           return ((num << places) & 0xFFFFFFFF) | (num >>> (32 - places))
       }

       // The 4 MD5 functions
       function fF(b, c, d) {
           return (b & c) | (~b & d)
       }

       function fG(b, c, d) {
           return (d & b) | (~d & c)
       }

       function fH(b, c, d) {
           return b ^ c ^ d
       }

       function fI(b, c, d) {
           return c ^ (b | ~d)
       }

       // pick 4 bytes at specified offset. Little-endian is assumed
       function bytes_to_int32(arr, off) {
           return (arr[off + 3] << 24) | (arr[off + 2] << 16) | (arr[off + 1] << 8) | (arr[off])
       }

       /*
       Conver string to array of bytes in UTF-8 encoding
       See: 
       http://www.dangrossman.info/2007/05/25/handling-utf-8-in-javascript-php-and-non-utf8-databases/
       http://stackoverflow.com/questions/1240408/reading-bytes-from-a-javascript-string
       How about a String.getBytes(<ENCODING>) for Javascript!? Isn't it time to add it?
       */
       function str_to_bytes(str) {
           var retval = [ ]
           for (var i = 0; i < str.length; i++)
               if (str.charCodeAt(i) <= 0x7F) {
                   retval.push(str.charCodeAt(i))
               } else {
                   var tmp = encodeURIComponent(str.charAt(i)).substr(1).split('%')
                   for (var j = 0; j < tmp.length; j++) {
                       retval.push(parseInt(tmp[j], 0x10))
                   }
               }
           return retval
       }


       // convert the 4 32-bit buffers to a 128 bit hex string. (Little-endian is assumed)
       function int128le_to_hex(a, b, c, d) {
           var ra = ""
           var t = 0
           var ta = 0
           for (var i = 3; i >= 0; i--) {
               ta = arguments[i]
               t = (ta & 0xFF)
               ta = ta >>> 8
               t = t << 8
               t = t | (ta & 0xFF)
               ta = ta >>> 8
               t = t << 8
               t = t | (ta & 0xFF)
               ta = ta >>> 8
               t = t << 8
               t = t | ta
               ra = ra + to_zerofilled_hex(t)
           }
           return ra
       }

       // conversion from typed byte array to plain javascript array 
       function typed_to_plain(tarr) {
           var retval = new Array(tarr.length)
           for (var i = 0; i < tarr.length; i++) {
               retval[i] = tarr[i]
           }
           return retval
       }

       // check input data type and perform conversions if needed
       var databytes = null
       // String
       var type_mismatch = null
       if (typeof data == 'string') {
           // convert string to array bytes
           databytes = str_to_bytes(data)
       } else if (data.constructor == Array) {
           if (data.length === 0) {
               // if it's empty, just assume array of bytes
               databytes = data
           } else if (typeof data[0] == 'string') {
               databytes = chars_to_bytes(data)
           } else if (typeof data[0] == 'number') {
               databytes = data
           } else {
               type_mismatch = typeof data[0]
           }
       } else if (typeof ArrayBuffer != 'undefined') {
           if (data instanceof ArrayBuffer) {
               databytes = typed_to_plain(new Uint8Array(data))
           } else if ((data instanceof Uint8Array) || (data instanceof Int8Array)) {
               databytes = typed_to_plain(data)
           } else if ((data instanceof Uint32Array) || (data instanceof Int32Array) || 
                  (data instanceof Uint16Array) || (data instanceof Int16Array) || 
                  (data instanceof Float32Array) || (data instanceof Float64Array)
            ) {
               databytes = typed_to_plain(new Uint8Array(data.buffer))
           } else {
               type_mismatch = typeof data
           }   
       } else {
           type_mismatch = typeof data
       }

       if (type_mismatch) {
           alert('MD5 type mismatch, cannot process ' + type_mismatch)
       }

       function _add(n1, n2) {
           return 0x0FFFFFFFF & (n1 + n2)
       }


       return do_digest()

       function do_digest() {

           // function update partial state for each run
           function updateRun(nf, sin32, dw32, b32) {
               var temp = d
               d = c
               c = b
               //b = b + rol(a + (nf + (sin32 + dw32)), b32)
               b = _add(b, 
                   rol( 
                       _add(a, 
                           _add(nf, _add(sin32, dw32))
                       ), b32
                   )
               )
               a = temp
           }

           // save original length
           var org_len = databytes.length

           // first append the "1" + 7x "0"
           databytes.push(0x80)

           // determine required amount of padding
           var tail = databytes.length % 64
           // no room for msg length?
           if (tail > 56) {
               // pad to next 512 bit block
               for (var i = 0; i < (64 - tail); i++) {
                   databytes.push(0x0)
               }
               tail = databytes.length % 64
           }
           for (i = 0; i < (56 - tail); i++) {
               databytes.push(0x0)
           }
           // message length in bits mod 512 should now be 448
           // append 64 bit, little-endian original msg length (in *bits*!)
           databytes = databytes.concat(int64_to_bytes(org_len * 8))

           // initialize 4x32 bit state
           var h0 = 0x67452301
           var h1 = 0xEFCDAB89
           var h2 = 0x98BADCFE
           var h3 = 0x10325476

           // temp buffers
           var a = 0, b = 0, c = 0, d = 0

           // Digest message
           for (i = 0; i < databytes.length / 64; i++) {
               // initialize run
               a = h0
               b = h1
               c = h2
               d = h3

               var ptr = i * 64

               // do 64 runs
               updateRun(fF(b, c, d), 0xd76aa478, bytes_to_int32(databytes, ptr), 7)
               updateRun(fF(b, c, d), 0xe8c7b756, bytes_to_int32(databytes, ptr + 4), 12)
               updateRun(fF(b, c, d), 0x242070db, bytes_to_int32(databytes, ptr + 8), 17)
               updateRun(fF(b, c, d), 0xc1bdceee, bytes_to_int32(databytes, ptr + 12), 22)
               updateRun(fF(b, c, d), 0xf57c0faf, bytes_to_int32(databytes, ptr + 16), 7)
               updateRun(fF(b, c, d), 0x4787c62a, bytes_to_int32(databytes, ptr + 20), 12)
               updateRun(fF(b, c, d), 0xa8304613, bytes_to_int32(databytes, ptr + 24), 17)
               updateRun(fF(b, c, d), 0xfd469501, bytes_to_int32(databytes, ptr + 28), 22)
               updateRun(fF(b, c, d), 0x698098d8, bytes_to_int32(databytes, ptr + 32), 7)
               updateRun(fF(b, c, d), 0x8b44f7af, bytes_to_int32(databytes, ptr + 36), 12)
               updateRun(fF(b, c, d), 0xffff5bb1, bytes_to_int32(databytes, ptr + 40), 17)
               updateRun(fF(b, c, d), 0x895cd7be, bytes_to_int32(databytes, ptr + 44), 22)
               updateRun(fF(b, c, d), 0x6b901122, bytes_to_int32(databytes, ptr + 48), 7)
               updateRun(fF(b, c, d), 0xfd987193, bytes_to_int32(databytes, ptr + 52), 12)
               updateRun(fF(b, c, d), 0xa679438e, bytes_to_int32(databytes, ptr + 56), 17)
               updateRun(fF(b, c, d), 0x49b40821, bytes_to_int32(databytes, ptr + 60), 22)
               updateRun(fG(b, c, d), 0xf61e2562, bytes_to_int32(databytes, ptr + 4), 5)
               updateRun(fG(b, c, d), 0xc040b340, bytes_to_int32(databytes, ptr + 24), 9)
               updateRun(fG(b, c, d), 0x265e5a51, bytes_to_int32(databytes, ptr + 44), 14)
               updateRun(fG(b, c, d), 0xe9b6c7aa, bytes_to_int32(databytes, ptr), 20)
               updateRun(fG(b, c, d), 0xd62f105d, bytes_to_int32(databytes, ptr + 20), 5)
               updateRun(fG(b, c, d), 0x2441453, bytes_to_int32(databytes, ptr + 40), 9)
               updateRun(fG(b, c, d), 0xd8a1e681, bytes_to_int32(databytes, ptr + 60), 14)
               updateRun(fG(b, c, d), 0xe7d3fbc8, bytes_to_int32(databytes, ptr + 16), 20)
               updateRun(fG(b, c, d), 0x21e1cde6, bytes_to_int32(databytes, ptr + 36), 5)
               updateRun(fG(b, c, d), 0xc33707d6, bytes_to_int32(databytes, ptr + 56), 9)
               updateRun(fG(b, c, d), 0xf4d50d87, bytes_to_int32(databytes, ptr + 12), 14)
               updateRun(fG(b, c, d), 0x455a14ed, bytes_to_int32(databytes, ptr + 32), 20)
               updateRun(fG(b, c, d), 0xa9e3e905, bytes_to_int32(databytes, ptr + 52), 5)
               updateRun(fG(b, c, d), 0xfcefa3f8, bytes_to_int32(databytes, ptr + 8), 9)
               updateRun(fG(b, c, d), 0x676f02d9, bytes_to_int32(databytes, ptr + 28), 14)
               updateRun(fG(b, c, d), 0x8d2a4c8a, bytes_to_int32(databytes, ptr + 48), 20)
               updateRun(fH(b, c, d), 0xfffa3942, bytes_to_int32(databytes, ptr + 20), 4)
               updateRun(fH(b, c, d), 0x8771f681, bytes_to_int32(databytes, ptr + 32), 11)
               updateRun(fH(b, c, d), 0x6d9d6122, bytes_to_int32(databytes, ptr + 44), 16)
               updateRun(fH(b, c, d), 0xfde5380c, bytes_to_int32(databytes, ptr + 56), 23)
               updateRun(fH(b, c, d), 0xa4beea44, bytes_to_int32(databytes, ptr + 4), 4)
               updateRun(fH(b, c, d), 0x4bdecfa9, bytes_to_int32(databytes, ptr + 16), 11)
               updateRun(fH(b, c, d), 0xf6bb4b60, bytes_to_int32(databytes, ptr + 28), 16)
               updateRun(fH(b, c, d), 0xbebfbc70, bytes_to_int32(databytes, ptr + 40), 23)
               updateRun(fH(b, c, d), 0x289b7ec6, bytes_to_int32(databytes, ptr + 52), 4)
               updateRun(fH(b, c, d), 0xeaa127fa, bytes_to_int32(databytes, ptr), 11)
               updateRun(fH(b, c, d), 0xd4ef3085, bytes_to_int32(databytes, ptr + 12), 16)
               updateRun(fH(b, c, d), 0x4881d05, bytes_to_int32(databytes, ptr + 24), 23)
               updateRun(fH(b, c, d), 0xd9d4d039, bytes_to_int32(databytes, ptr + 36), 4)
               updateRun(fH(b, c, d), 0xe6db99e5, bytes_to_int32(databytes, ptr + 48), 11)
               updateRun(fH(b, c, d), 0x1fa27cf8, bytes_to_int32(databytes, ptr + 60), 16)
               updateRun(fH(b, c, d), 0xc4ac5665, bytes_to_int32(databytes, ptr + 8), 23)
               updateRun(fI(b, c, d), 0xf4292244, bytes_to_int32(databytes, ptr), 6)
               updateRun(fI(b, c, d), 0x432aff97, bytes_to_int32(databytes, ptr + 28), 10)
               updateRun(fI(b, c, d), 0xab9423a7, bytes_to_int32(databytes, ptr + 56), 15)
               updateRun(fI(b, c, d), 0xfc93a039, bytes_to_int32(databytes, ptr + 20), 21)
               updateRun(fI(b, c, d), 0x655b59c3, bytes_to_int32(databytes, ptr + 48), 6)
               updateRun(fI(b, c, d), 0x8f0ccc92, bytes_to_int32(databytes, ptr + 12), 10)
               updateRun(fI(b, c, d), 0xffeff47d, bytes_to_int32(databytes, ptr + 40), 15)
               updateRun(fI(b, c, d), 0x85845dd1, bytes_to_int32(databytes, ptr + 4), 21)
               updateRun(fI(b, c, d), 0x6fa87e4f, bytes_to_int32(databytes, ptr + 32), 6)
               updateRun(fI(b, c, d), 0xfe2ce6e0, bytes_to_int32(databytes, ptr + 60), 10)
               updateRun(fI(b, c, d), 0xa3014314, bytes_to_int32(databytes, ptr + 24), 15)
               updateRun(fI(b, c, d), 0x4e0811a1, bytes_to_int32(databytes, ptr + 52), 21)
               updateRun(fI(b, c, d), 0xf7537e82, bytes_to_int32(databytes, ptr + 16), 6)
               updateRun(fI(b, c, d), 0xbd3af235, bytes_to_int32(databytes, ptr + 44), 10)
               updateRun(fI(b, c, d), 0x2ad7d2bb, bytes_to_int32(databytes, ptr + 8), 15)
               updateRun(fI(b, c, d), 0xeb86d391, bytes_to_int32(databytes, ptr + 36), 21)

               // update buffers
               h0 = _add(h0, a)
               h1 = _add(h1, b)
               h2 = _add(h2, c)
               h3 = _add(h3, d)
           }
           // Done! Convert buffers to 128 bit (LE)
           return int128le_to_hex(h3, h2, h1, h0).toUpperCase()
       }


   };
   
   return faultylabs;
 
});
/**
 * @fileoverview    Contains the JavaScript API to the PEAR project.
 * @version         1.0.0
 * @author          Edouard Dorval <edorval@hertz.com>
 */

/**
 * The module bootstraping function. This header enables the module to
 * work on plain brower API, AMD modules as well as CommonJS modules.
 * 
 * @inner
 * 
 * @param {String} moduleName           The module name.
 * @param {Function} moduleDefinition   The function that returns the module API.
 */
;(function (moduleName, moduleDefinition) {
 
    if (typeof define === 'function' && define.amd) {

        // AMD
        define(moduleName, ['jquery', 'moment', 'faultylabs'], moduleDefinition);

    }
    else {
        
        if (typeof module !== 'undefined' && module.exports) { 

            // CommonJS
            module.exports                      = moduleDefinition.call(this, 
                                                                        require("jquery"),
                                                                        require("moment"),
                                                                        require("faultylabs"));

        }
        else {

            // Attach to global object or some namespace
            this[moduleName]                    = moduleDefinition.call(this, jQuery, moment, faultylabs);

        }

    }
 
}).call(/*global object*/ Function('return this;')(), /*module name*/ 'pear', /*module definition*/ function ($, moment, faultylabs) {
    
    // always
    "use strict";
    
    /**
     * @private
     * @type Window
     */ 
    var global                                  = this,
        
        /**
         * @private
         * @type Object 
         */
        config                                  = {
            
            // cms credentials
            username            : 'admin',
            password            : 'admin',
            authenticate        : true,
            
            // api uris
            origin              : '',
            locale              : 'en/US',
            context             : '/content/pear',
            content             : '/jcr:content',
            data                : '/jcr:content',
            users               : '/users',
            tasks               : '/tasks',
            comments            : '/comments',
            projects            : '/projects',
            
            // misc
            usersBaseName       : 'user',
            tasksBaseName       : 'task',
            commentsBaseName    : 'comment',
            projectsBaseName    : 'project'

        },
        
        /**
         * Matches a string that begins with an http or https scheme.
         * @private
         * @type RegExp
         */
        isHttpUrl                               = /^https?:\/\/.*/i,
        
        /**
         * Matches a string ends with a colon follows by one or more
         * digits.
         * 
         * @private
         * @type RegExp
         */
        httpOriginPort                          = /\:([0-9]+)$/,
        
        /**
         * Matches the pertinent item in the content of the ChangeLog div
         * element that is returned by Sling after a request to the 
         * sling POST servlet.
         * 
         * @private
         * @type RegExp
         */
        slingLogProperties                      = /([a-zA-Z][a-zA-Z0-9_-]+)\("([^\)]+)"\)/g,
        
        /**
         * URI to the sling query builder.
         * 
         * @private
         * @type String
         */
        slingQueryBuilder                       = '/bin/querybuilder.json',
                
        /**
         * URI to the sling request combiner.
         * 
         * @private
         * @type String
         */
        slinRequestCombiner                     = '/ect/sling/extension.combined.json',
        
        /**
         * The compiled URLs to the web services.
         * 
         * @see #buildServices
         * @private
         * @type Objects
         */
        services                                = {
            
            /**
             * Absolute URLs to the web services.
             * 
             * @private
             * @type Objects
             */
            absolute : {},
            
            /**
             * Relative URLs (path only) to the web services.
             * 
             * @private
             * @type Objects
             */
            relative : {}
            
        },
        
        /**
         * HTTP methods contants.
         * 
         * @private
         * @type Object
         */
        http                                    = {
            
            POST    : 'POST',
            GET     : 'GET'
            
        },
        
        /**
         * Date format contants.
         * 
         * @private
         * @type Object
         */
        date                                    = {
            
            ISO_8601_2000   : 'YYYY-MM-DDThh:mm:ss.sssTZD'
            
        },
        
        /**
         * The PEAR API.
         * 
         * @field
         * @name pear
         * @namespace <p>The pear namespace is a global object that contains the PEAR
         *            project data access layer API.</p>
         *            <p>PEAR stands for</p>
         *            <p><a href="https://www.polymer-project.org/" target="_blank"><strong>P</strong>:olymer</a></p>
         *            <p><a href="http://emberjs.com/" target="_blank"><strong>E</strong>:mber</a></p>
         *            <p><a href="https://angularjs.org/" target="_blank"><strong>A</strong>:ngular</a></p>
         *            <p><a href="http://facebook.github.io/react/" target="_blank"><strong>R</strong>:eact</a></p>
         *            <p></p>
         *            <p>The 4 main frameworks that have been considered to build the application with.</p>
         *            
         * @type pear
         */
        api                                     = {
            
            /**
             * A shorcut that can be used as "ALL" in the PEAR API
             * select and remove methods.
             * 
             * @field
             * @name ALL
             * @type String
             * @memberOf pear
             * 
             * @example pear.users.select(pear.ALL);
             */
            ALL: "*",
            
            /**
             * <p>Gets or Sets a setting in PEAR API.</p>
             * <p></p>
             * <p>It's properties are:</p>
             * <p></p>
             * <dl>
             *      <p><em>[cms credentials]</em></p>
             *      <dt><strong>authenticate        : true</strong></dt>
             *      <dd>Whether HTTP requests to the web services should be authenticated.</dd><p></p>
             *      
             *      <dt><strong>username            : 'admin'</strong></dt>
             *      <dd>The username to use when authenticating request to the web services.</dd><p></p>
             *      
             *      <dt><strong>password            : 'admin'</strong></dt>
             *      <dd>The password to use when authenticating request to the web services.</dd><p></p>
             *      
             *      <p><em>[api uris]</em></p>
             *      <dt><strong>origin              : ''</strong></dt>
             *      <dd>The origin (scheme + host + [port]) of the web services server (e.g. http://hertzui:4502).</dd><p></p>
             *      
             *      <dt><strong>context             : '/content/pear'</strong></dt>
             *      <dd>The base path where the application data and content are stored in the JCR.</dd><p></p>
             *      
             *      <dt><strong>data                : '/jcr:content'</strong></dt>
             *      <dd>The path where the application data is stored in the JCR relative to the context path.</dd><p></p>
             *      
             *      <dt><strong>content             : '/jcr:content'</strong></dt>
             *      <dd>The path where the application content is stored in the JCR relative to the context and locale paths.</dd><p></p>
             *      
             *      <dt><strong>locale             : 'en/US'</strong></dt>
             *      <dd>The locality of the application content.</dd><p></p>
             *      
             *      <dt><strong>users               : '/users'</strong></dt>
             *      <dd>The path of the users node in the JCR, relative to the data path.</dd><p></p>
             *      
             *      <dt><strong>tasks               : '/tasks'</strong></dt>
             *      <dd>The path of the tasks node in the JCR, relative to the data path.</dd><p></p>
             *      
             *      <dt><strong>comments            : '/comments'</strong></dt>
             *      <dd>The path of the comments node in the JCR, relative to the data path.</dd><p></p>
             *      
             *      <dt><strong>projects            : '/projects'</strong></dt>
             *      <dd>The path of the projects node in the JCR, relative to the data path.</dd><p></p>
             *      
             *      <p><em>[misc]</em></p>
             *      <dt><strong>usersBaseName       : 'user'</strong></dt>
             *      <dd>The name to use as canvas when creating user nodes (e.g. user_0).</dd><p></p>
             *      <dd></dd>
             *      
             *      <dt><strong>tasksBaseName       : 'task'</strong></dt>
             *      <dd>The name to use as canvas when creating task nodes (e.g. task_0).</dd><p></p>
             *      
             *      <dt><strong>commentsBaseName    : 'comment'</strong></dt>
             *      <dd>The name to use as canvas when creating comment nodes (e.g. comment_0).</dd><p></p>
             *      
             *      <dt><strong>projectsBaseName    : 'project'</strong></dt>
             *      <dd>The name to use as canvas when creating project nodes (e.g. project_0).</dd><p></p>
             * </ul>
             * 
             * @memberOf pear
             * @name settings
             * @function
             * 
             * @param {Object} [params]
             * @returns {Object}
             * 
             * @example
             * 
             * // Getter
             * console.log(pear.settings().context);
             * 
             * // Setter
             * console.log(pear.settings({username: 'admin', password: 'admin', origin: 'http://hertzui:4502'}));
             */
            settings: function (params) {
                
                var origin;
                
                if (arguments.length > 0) {
                    
                    // a common mistake is to provide an origin with a trailing slash,
                    // this accounts for this scenario.
                    if (api.utils.is.object(params) && params.hasOwnProperty('origin')) {
                        
                        if (api.utils.str.isNotBlank(params.origin)) {
                            
                            origin              = $.trim(params.origin);

                            if (origin.charAt(origin.length - 1) === '/') {

                                params.origin   = origin.substring(0, origin.length - 1);

                            }
                            
                        }
                        
                    }
                    
                    $.extend(config, params);                    
                    buildServiceURLs();
                    
                }
                
                return config;
                
            },
            
            /**
             * Uses the settings to build and return the
             * application content path, relative to the current locale.
             * 
             * @memberOf pear
             * @name getContentPath
             * @function
             * 
             * @param {String} [rendering]  The rendering to append to the content path
             *                              (e.g. json, infinity.json, xml)
             * @returns {String}
             * 
             * @example
             * pear.ajax(pear.getContentPath('infinity.json')).done(function (content) {
             *     
             *     console.dir(content);
             * 
             * });
             */
            getContentPath: function (rendering) {
                
                var path                        = config.origin
                                                + config.context
                                                + '/'
                                                + config.locale
                                                + config.content;
                                        
                if (api.utils.str.isNotEmpty(rendering)) {
                    
                    if (rendering.indexOf('.') !== 0) {
                        
                        path                   += '.';
                        
                    }
                    
                    path                       += rendering;
                    
                }
                
                return path;
        
            },
            
            /**
             * <p>Perform an asynchronous HTTP (Ajax) request.</p>
             * 
             * <p>This is a mere wrapper around <a href="http://api.jquery.com/jquery.ajax" target="_blank">jQuery.ajax</a> that adds
             * the credentials found in the application settings and additional
             * CORS headers (as needed) to the request.</p>
             * 
             * <p>This method as the signature as jQuery's ajax method and should be 
             * used when sending requests to the content repository.</p>
             * 
             * @memberOf pear
             * @name ajax
             * @function
             * @see <a href="http://api.jquery.com/jquery.ajax" target="_blank">jQuery.ajax</a>
             * 
             * @param {String|Object} urlOrSettings     <p>Can be a string containing the URL to which the request is sent or
             *                                          a set of key/value pairs that configure the Ajax request.</p> 
             * @param {Object} [settings]               A set of key/value pairs that configure the Ajax request.
             * 
             * @returns {String}
             * 
             * @example
             * pear.ajax({
             *      
             *      url     : pear.getContentPath('xml')
             *      
             * }).done(function (result) { 
             * 
             *      console.dir(result); 
             *      
             * });
             */
            ajax: function (urlOrSettings, settings) {
                
                var options;
                
                if (api.utils.str.isNotEmpty(urlOrSettings)) {

                    options                     = $.extend({}, settings, {url: urlOrSettings});

                }
                else {

                    options                     = urlOrSettings;

                }
                
                // attemps to make the URL absolute
                isHttpUrl.lastIndex             = 0;
                
                if (!isHttpUrl.test(options.url)) {
                    
                    options.url                 = config.origin
                                                + options.url;
                    
                }
                
                // is crossdomain (need to install CORS filter in AEM for this to work)
                options.crossDomain             = areCrossOriginUrls(global.location.href, options.url);
                
                // credentials
                if (config.authenticate && api.utils.str.isNotEmpty(config.username) && api.utils.str.isNotEmpty(config.password)) {

                    options.username            = config.username;
                    options.password            = config.password;

                    if (options.crossDomain) {

                        // CORS requirement
                        options.xhrFields       = {

                           withCredentials: true

                        };

                    }

                }
                
                return $.ajax(options);
                
            },
            
            /**
             * <p>Combines multiple potential HTTP requests into a single one
             * and returns all the results at one.</p>
             * 
             * <p>Note that this method is NOT just wrapper around {@see pear.ajax}.
             * It really makes a single HTTP request to the content repository.</p>
             * 
             * <p>It may be used for example to load multiple HTML template
             * files at once.</p>
             * 
             * @memberOf pear
             * @name request
             * @function
             * 
             * @param {String|Object} [...]     <p>Paths of the contents to load from the JCR.</p>
             * @returns {Array}                 <p>The contents loaded from the JCR, with respect to
             *                                  the order of the arguments.</p>
             *                                  <p>Note that JSON contents will not be provided as
             *                                  Strings but rather as JavaScript Objects.</p>
             * 
             * @example
             * pear.request(
             *      
             *      "/content/pear-ember/templates/a.html",
             *      "/content/pear-react/templates/b.json",
             *      
             *      "/content/pear-angular/templates/c.html",
             *      "/content/pear-polymer/templates/d.json"
             *      
             * ).done(function (result) { 
             * 
             *      console.dir(result);
             *      
             *      // outputs something like:
             *      // [
             *      //    "&lt;div&gt;...&lt;/div&gt;",     {String}
             *      //    {...},                {Object}
             *      
             *      //    "&lt;h1&gt;...&lt;/h1&gt;",       {String}
             *      //    {...}                 {Object}
             *      // ]
             *      
             * });
             */
            request: function () {
                
                var options                     = {
                    
                        url                     : config.origin
                                                + slinRequestCombiner,
                                                
                        type                    : http.POST,
                        
                        verbose                 : !!this.verbose,
                        
                        dataType                : 'json',
                        
                        data                    : {

                            schedule            : {

                                'default'       : {

                                    type        : http.GET,
                                    processData : true

                                }

                            }

                        }

                    },
                            
                    argv                        = Array.prototype.slice.call(arguments, 0),
                    size                        = argv.length,
                    i;
                
                for (i = 0; i < size; i += 1) {
                    
                    if (typeof argv[i] === 'string') {
                        
                        argv[i]                 = {url: argv[i]};
                        
                    }
                    
                }
                
                options.data.schedule.requests  = argv;
                options.data.schedule           = JSON.stringify(options.data.schedule);
                
                return api.ajax(options)
                          .pipe(function (combined) {
                                
                                if (options.verbose) {
                                    
                                    return combined;
                                    
                                }
                                
                                var set         = [],
                                    responses,
                                    j;
                                    
                                if (combined.success) {
                                    
                                    responses   = combined.responses;
                                    
                                    for (j = 0; j < size; j += 1) {
                                        
                                        if (responses[j].response.status === 200) {
                                            
                                            set.push(responses[j].response.body);
                                            
                                        }
                                        else {
                                            
                                            set.push(null);
                                            
                                        }
                                        
                                    }
                                    
                                }
                                else {
                                    
                                    for (j = 0; j < size; j += 1) {
                                        
                                        set[j]  = null;
                                        
                                    }
                                    
                                }
                                
                                return set;
                      
                          });
        
            },
            
            /**
             * Contains the sort order methods ASC and DESC that are to be used in conjunction with
             * <code>fetch</code> methods to sort the result sets.
             * 
             * @name orderBy
             * @field
             * @type Object
             * @memberOf pear
             * 
             * @namespace Contains the sort order methods ASC and DESC that are to be used in conjunction with
             *            <code>fetch</code> methods to sort the result sets.
             */
            orderBy: {
                
                /**
                 * Returns a <code>SortOrder</code> Object that can be used with <code>fetch</code> methods
                 * to sort the result sets in an ascending (A-Z) order.
                 * 
                 * @function
                 * @name asc
                 * @memberOf pear.orderBy
                 * 
                 * @param {String} propertyName     The name of the property to use when ordering the results.
                 * 
                 * @return {SortOrder}
                 * 
                 * @example pear.task.fetch(pear.orderBy.asc('taskname'));
                 */
                asc: function (propertyName) {
                    
                    return {
                        
                        'orderby'       : '@' + propertyName, 
                        'orderby.sort'  : 'asc'
            
                    };
                    
                },
                        
                /**
                 * Returns a <code>SortOrder</code> Object that can be used with <code>fetch</code> methods
                 * to sort the result sets in an descending (Z-A) order.
                 * 
                 * @function
                 * @name desc
                 * @memberOf pear.orderBy
                 * 
                 * @param {String} propertyName     The name of the property to use when ordering the results.
                 * 
                 * @return {SortOrder}
                 * 
                 * @example pear.task.fetch(pear.orderBy.desc('taskname'));
                 */
                desc: function (propertyName) {
                    
                    return {
                        
                        'orderby'       : '@' + propertyName, 
                        'orderby.sort'  : 'desc'
            
                    };
                    
                }
        
            },
            
            /**
             * General utilities provided by the PEAR API for rapid development.
             * 
             * @name utils
             * @field
             * @type Object
             * @memberOf pear
             * 
             * @namespace General utilities provided by the PEAR API for rapid development.
             */
            utils: {
                
                /**
                 * A set of useful utility methods for verifying types.
                 * 
                 * @name is
                 * @field
                 * @type Object
                 * @memberOf pear.utils
                 * 
                 * @namespace A set of useful utility methods for verifying types.
                 */
                is: {
                    
                   /**
                    * Tells whether the value is null or undefined.
                    * 
                    * @name isNothing
                    * @function
                    * @memberOf pear.utils.is
                    * 
                    * @param {*} value
                    * @returns {Boolean}
                    * 
                    * @example
                    * pear.utils.is.nothing({});          // false
                    * pear.utils.is.nothing([]);          // false
                    * pear.utils.is.nothing(0);           // false
                    * pear.utils.is.nothing("0");         // false
                    * pear.utils.is.nothing(NaN);         // false
                    * pear.utils.is.nothing("");          // false
                    * pear.utils.is.nothing(" ");         // false
                    * 
                    * pear.utils.is.nothing(null);        // true
                    * pear.utils.is.nothing(undefined);   // true
                    */
                   nothing: function (value) {

                       return value === null || value === void 0;

                   },
                           
                   /**
                    * Tells whether the value is of type <code>object</code>
                    * and not <code>null</code>.
                    * 
                    * @name object
                    * @function
                    * @memberOf pear.utils.is
                    * 
                    * @param {*} value
                    * @returns {Boolean}
                    * 
                    * @example
                    * pear.utils.is.object(null);           // false
                    * pear.utils.is.object(undefined);      // false
                    * pear.utils.is.object([]);             // false
                    * pear.utils.is.object(0);              // false
                    * pear.utils.is.object("0");            // false
                    * pear.utils.is.object(NaN);            // false
                    * pear.utils.is.object("");             // false
                    * pear.utils.is.object(" ");            // false
                    * pear.utils.is.object(String("s"));    // false
                    * 
                    * pear.utils.is.object({});             // true
                    * pear.utils.is.object(new Object());   // true
                    * pear.utils.is.object(new String("")); // true
                    */
                   object: function (value) {
                       
                       return typeof value === 'object' && value !== null;
               
                   },
                   
                   /**
                    * Tells whether the value is an Array.
                    * 
                    * @name array
                    * @function
                    * @memberOf pear.utils.is
                    * 
                    * @param {*} value
                    * @returns {Boolean}
                    * 
                    * @example
                    * pear.utils.is.array({});                      // false
                    * pear.utils.is.array({'0': 'a', '1': 'b'});    // false
                    * 
                    * pear.utils.is.array([]);                      // true
                    * pear.utils.is.array(new Array);               // true
                    */  
                   array: Array.isArray || function (value) {
                    
                        return Object.prototype.toString.call(value) === '[object Array]';
               
                   },
                   
                   /**
                    * Tells whether the value is an instance of the Date function.
                    * 
                    * @name date
                    * @function
                    * @memberOf pear.utils.is
                    * 
                    * @param {*} value
                    * @returns {Boolean}
                    * 
                    * @example
                    * pear.utils.is.date('1/8/2015');               // false
                    * pear.utils.is.date(new Date);                 // true
                    */  
                   date: function (value) {
                        
                        return Object.prototype.toString.call(value) === '[object Date]';
               
                   }
                    
                },
                
                /**
                 * A set of useful utility methods for manipulating strings.
                 * 
                 * @name str
                 * @field
                 * @type Object
                 * @memberOf pear.utils
                 * 
                 * @namespace A set of useful utility methods for manipulating strings.
                 */
                str: {
                    
                    /**
                     * Tells whether the value is null, undefined, NaN or a primitive
                     * string with either no characters or only whitespace
                     * characters.
                     * 
                     * @name isBlank
                     * @function
                     * @memberOf pear.utils.str
                     *                      
                     * @param {*} value
                     * @returns {Boolean}
                     * 
                     * @example
                     * pear.utils.str.isBlank({});          // false
                     * pear.utils.str.isBlank([]);          // false
                     * pear.utils.str.isBlank(0);           // false
                     * pear.utils.str.isBlank("a");         // false
                     * 
                     * pear.utils.str.isBlank(NaN);         // true
                     * pear.utils.str.isBlank(null);        // true
                     * pear.utils.str.isBlank(undefined);   // true
                     * pear.utils.str.isBlank("");          // true
                     * pear.utils.str.isBlank(" ");         // true
                     */
                    isBlank: function (value) {
                        
                        var type;
                        
                        if (api.utils.is.nothing(value)) {
                            
                            return true;
                            
                        }
                        
                        type                    = typeof value;
                        
                        return (type === 'number' && isNaN(value)) || (type === 'string' && $.trim(value).length === 0);

                    },
                            
                    /**
                     * Tells whether the value is NOT null, undefined, NaN or IS a primitive
                     * string with at least one non whitespace character.
                     * 
                     * @name isNotBlank
                     * @function
                     * @memberOf pear.utils.str
                     *                      
                     * @param {*} value
                     * @returns {Boolean}
                     * 
                     * @example
                     * pear.utils.str.isNotBlank({});          // true
                     * pear.utils.str.isNotBlank([]);          // true
                     * pear.utils.str.isNotBlank(0);           // true
                     * pear.utils.str.isNotBlank("a");         // true
                     * 
                     * pear.utils.str.isNotBlank(NaN);         // false
                     * pear.utils.str.isNotBlank(null);        // false
                     * pear.utils.str.isNotBlank(undefined);   // false
                     * pear.utils.str.isNotBlank("");          // false
                     * pear.utils.str.isNotBlank(" ");         // false
                     */
                    isNotBlank: function (value) {

                        return !api.utils.str.isBlank(value);

                    },
                    
                    /**
                     * Tells whether the value is a primitive string with at least
                     * one character.
                     * 
                     * @name isNotEmpty
                     * @function
                     * @memberOf pear.utils.str
                     *                      
                     * @param {*} value
                     * @returns {Boolean}
                     * 
                     * @example
                     * pear.utils.str.isNotEmpty({});          // false
                     * pear.utils.str.isNotEmpty([]);          // false
                     * pear.utils.str.isNotEmpty(0);           // false
                     * pear.utils.str.isNotEmpty("");          // false
                     * pear.utils.str.isNotEmpty(NaN);         // false
                     * pear.utils.str.isNotEmpty(null);        // false
                     * pear.utils.str.isNotEmpty(undefined);   // false
                     * 
                     * pear.utils.str.isNotEmpty(" ");         // true
                     * pear.utils.str.isNotEmpty("0");         // true
                     */
                    isNotEmpty: function (value) {

                        return typeof value === 'string' && value.length > 0;

                    },
                            
                    /**
                     * Tells whether the value is a primitive string with
                     * no characters.
                     * 
                     * @name isEmpty
                     * @function
                     * @memberOf pear.utils.str
                     *                      
                     * @param {*} value
                     * @returns {Boolean}
                     * 
                     * @example
                     * pear.utils.str.isEmpty({});          // false
                     * pear.utils.str.isEmpty([]);          // false
                     * pear.utils.str.isEmpty(" ");         // false
                     * pear.utils.str.isEmpty("0");         // false
                     * pear.utils.str.isEmpty(0);           // false
                     * pear.utils.str.isEmpty(NaN);         // false
                     * pear.utils.str.isEmpty(null);        // false
                     * pear.utils.str.isEmpty(undefined);   // false
                     * 
                     * pear.utils.str.isEmpty("");          // true
                     */
                    isEmpty: function (value) {

                        return typeof value === 'string' && value.length === 0;

                    }
                    
                },
                
                /**
                 * A set of useful utility methods for manipulating objects.
                 * 
                 * @name obj
                 * @field
                 * @type Object
                 * @memberOf pear.utils
                 * 
                 * @namespace A set of useful utility methods for manipulating objects.
                 */
                obj: {
                    
                    /**
                     * <p>Removes the JCR properties (e.g. jcr:primaryType) found in the object.</p>
                     * 
                     * @name removeJcrProperties
                     * @function
                     * @memberOf pear.utils.obj
                     * 
                     * @param {Object} obj              The object whose JCR properties are to be removed.
                     * @returns {obj}
                     * 
                     * @example
                     * pear.utils.obj.keys({'a': 1, 'b': 2, 'c': 3, 'jcr:title': 'test'}); // outputs {'a': 1, 'b': 2, 'c': 3}
                     */
                    removeJcrProperties: function (obj) {

                        for (var i in obj) {

                            if (i.indexOf('jcr:') === 0) {

                                delete obj[i];

                            }

                        }

                        return obj;

                    },

                    /**
                     * <p>Returns the property names found in the object passed as argument.</p>
                     * 
                     * @name keys
                     * @function
                     * @memberOf pear.utils.obj
                     * 
                     * @param {Object} obj              The object whose properties are to be returned.
                     * @param {Boolean} [own=true]      Return the object's own properties only, not properties
                     *                                  that are in its inheritance chain.
                     * @returns {String[]}
                     * 
                     * @example
                     * pear.utils.obj.keys({'a': 1, 'b': 2, 'c': 3}); // outputs ['a', 'b', 'c']
                     */
                    keys: function (obj, own) {

                        var result                  = [],
                            i;

                        for (i in obj) {

                            if (own === false || obj.hasOwnProperty(i)) {

                                result.push(i);

                            }

                        }

                        return result;

                    },

                    /**
                     * <p>Returns the property values found in the object passed as argument.</p>
                     * 
                     * @name values
                     * @function
                     * @memberOf pear.utils.obj
                     * 
                     * @param {Object} obj              The object whose property values are to be returned.
                     * @param {Boolean} [own=true]      Return the object's own property values only, not the property
                     *                                  values that are in its inheritance chain.
                     * @returns {Array}
                     * 
                     * @example
                     * pear.utils.obj.values({'a': 1, 'b': 2, 'c': 3}); // outputs [1,2,3]
                     */
                    values: function (obj, own) {

                        var result                  = [],
                            i;

                        for (i in obj) {

                            if (own === false || obj.hasOwnProperty(i)) {

                                result.push(obj[i]);

                            }

                        }

                        return result;

                    },
                            
                    /**
                     * Returns the number of properties found it the object passed as argument.
                     * 
                     * @name size
                     * @function
                     * @memberOf pear.utils.obj
                     * 
                     * @param {Object} obj              The object whose properties are to be counted.
                     * @param {Boolean} [own=true]      Count the object's own properties only, not properties
                     *                                  that are in its inheritance chain.
                     * @returns {Number}
                     * 
                     * @example
                     * pear.utils.obj.size({'a': 1, 'b': 2, 'c': 3}); // outputs 3
                     */
                    size: function (obj, own) {

                        var i                           = 0,
                            j;

                        for (j in obj) {

                            if (own === false || obj.hasOwnProperty(j)) {

                                ++i;

                            }

                        }

                        return i;

                    }
                    
                }
        
            },
            
            /**
             * An API that provides CRUD access to the users data in found the content repository.
             * 
             * @name users
             * @field
             * @type Object
             * @memberOf pear
             * 
             * @namespace An API that authorizes CRUD operations in the users data in found the content repository.
             */
            users: {
                
                /**
                 * <p>Checks for the existence of a user in the repository.</p>
                 * 
                 * <p>If both userid and password arguments are passed, this method can be
                 * used as an authentication mechanism.</p>
                 * 
                 * @name exists
                 * @function
                 * @memberOf pear.users
                 * 
                 * @param {type} userid         The userid.
                 * @param {type} [password]     The user password in plain text.
                 * 
                 * @returns {jQuery.promise}
                 * 
                 * @see <a href="http://api.jquery.com/promise/" target="_blank">jQuery.promise()</a>
                 * @example 
                 * 
                 * pear.users.exists('edorval', '21Ade$%M')
                 *           .done(function (result) { 
                 *           
                 *              if (result.exists) {
                 *                  
                 *                  console.log('Yay!');
                 *                  console.log(result[':name']);   // The node name of the user
                 *                  console.dir(result.data);       // The user data
                 *                  
                 *              }
                 *              else {
                 *                  
                 *                  console.log('Who are you!?!');
                 *              
                 *              }
                 *           
                 *           })
                 *           .fail(function () { console.log('Nay!') });
                 */
                exists: function (userid, password) {
                    
                    var promise,
                        data                    = {

                            "path"              : services.relative.users,

                            "p.limit"           : 1,
                            "p.hits"            : "full",

                            "1_property"        : "userid",
                            "1_property.value"  : userid

                        };
                        
                    if (api.utils.str.isNotEmpty(password)) {

                        data["2_property"]      = "password";
                        data["2_property.value"]= faultylabs.MD5(password);

                    }
                                
                    promise                     = api.ajax({
                        
                        url         : config.origin
                                    + slingQueryBuilder,
                        type        : http.GET,
                        cache       : false,
                        dataType    : 'json',
                        data        : data

                    }).pipe(function (set) {
                        
                        var result              = {

                            exists  : set.results === 1

                        };
                        
                        if (set.success && result.exists) {
                            
                            result[':name']     = set.hits[0]['jcr:path'].split('/').pop(),
                            result['data']      = set.hits[0];

                        }
                        
                        return result;
                        
                    });

                    return $.extend(promise, api.users);
                    
                },
                
                /**
                 * Creates and saves a new user to the repository. The userid must be unique.
                 * 
                 * @name insert
                 * @function
                 * @memberOf pear.users
                 * 
                 * @param {Object} params      <p>The properties of the user object.</p>
                 *                             <p></p>
                 *                             <code>{</code>
                 *                             <p></p>
                 *                             <dl>
                 *                                 <dt>userid {String} <em>( Required )</em></dt>
                 *                                 <dd>The user id.</dd>
                 *                                 <dt>password {String} <em>( Required )</em></dt>
                 *                                 <dd>The user password in plain text.</dd>
                 *                                 <dt>username {String} <em>( Required )</em></dt>
                 *                                 <dd>The user's real name.</dd>
                 *                                 <dt>:name {String} <em>( Optional )</em></dt>
                 *                                 <dd>The specific, unique name (ID) to use for the user's node.</dd>
                 *                             </dl>
                 *                             <code>}</code>
                 * @returns {jQuery.promise}
                 * 
                 * @see <a href="http://api.jquery.com/promise/" target="_blank">jQuery.promise()</a>
                 * @example 
                 * 
                 * pear.users.insert({username: 'Edouard Dorval', userid: 'edorval', password: '21Ade$%M'})
                 *           .done(function () { console.log('Yay!') })
                 *           .fail(function () { console.log('Nay!') });
                 */
                insert: function (params) {
                    
                    var deferred                = $.Deferred();
                    
                    api.users.exists(params.userid, params.password).done(function (result) {
                        
                        if (result.exists) {
                            
                            deferred.reject({error: 3, message: 'The user ID "' + params.userid + '" already exists!'});
                            
                        }
                        else {
                            
                            insert(api.users, services.absolute.users, config.usersBaseName, hash(params, 'password', true))
                                  .done(deferred.resolve)
                                  .fail(deferred.reject);
                            
                        }
                        
                    });
                    
                    return $.extend(deferred.promise(), api.users);

                },
                
                /**
                 * Updates and saves an existing user's data in the repository.
                 * 
                 * @name update
                 * @function
                 * @memberOf pear.users
                 * 
                 * @param {Object} params      <p>The properties of the user object.</p>
                 *                             <p></p>
                 *                             <code>{</code>
                 *                             <p></p>
                 *                             <dl>
                 *                                 <dt>:name {String} <em>( Required )</em></dt>
                 *                                 <dd>The node name (ID) of the user to update.</dd>
                 *                                 <dt>password {String} in plain text</dt>
                 *                                 <dd>The user password.</dd>
                 *                                 <dt>username {String}</dt>
                 *                                 <dd>The user's real name.</dd>
                 *                             </dl>
                 *                             <code>}</code>
                 * @returns {jQuery.promise}
                 * 
                 * @see <a href="http://api.jquery.com/promise/" target="_blank">jQuery.promise()</a>
                 * 
                 * @example
                 * pear.users.update({':name': 'user_1', username: 'Brian'})
                 *           .done(function () { console.log('Yay!') })
                 *           .fail(function () { console.log('Nay!') });
                 */
                update: function (params) {
                    
                    if (params) {
                        
                        delete params.userid;
                        
                    }
                    
                    return update(api.users, services.absolute.users, hash(params, 'password'));
                    
                },
                
                /**
                 * <p>Removes one or many users from the repository.</p>
                 * <p>One, many or all the users may be deleted with a single call.</p>
                 * 
                 * @name remove
                 * @function 
                 * @memberOf pear.users
                 * 
                 * @param {String|String[]} [allOrIdOrList] <p>The user nodes to remove from the repository.</p>
                 *                                          <p><code>null</code>, <code>undefined</code> or <code>pear.ALL</code>
                 *                                          will remove all the users from the repository at once.</p>
                 *                                          <p>A user node name (ID) may be provided to remove a specific (single) user.</p>
                 *                                          <p>An array of user nodes name (IDs) may be provided to remove a list of (multiple) users.</p>
                 * @returns {jQuery.promise}
                 * 
                 * @see <a href="http://api.jquery.com/promise/" target="_blank">jQuery.promise()</a>
                 * @example 
                 * 
                 * pear.users.remove('user_0')
                 *           .done(function () { console.log('Yay!') })
                 *           .fail(function () { console.log('Nay!') });
                 * 
                 * pear.users.remove(['user_3', 'user_17'])
                 *           .done(function () { console.log('Yay!') })
                 *           .fail(function () { console.log('Nay!') });
                 * 
                 * pear.users.remove(pear.ALL)
                 *           .done(function () { console.log('Yay!') })
                 *           .fail(function () { console.log('Nay!') });
                 */
                remove: function (allOrIdOrList) {
                    
                    return remove(api.users, 
                                  services.absolute.users, 
                                  services.relative.users, 
                                  allOrIdOrList);
                    
                },
                
                /**
                 * Returns one or many user data from the repository as a JSON Object.
                 * 
                 * @name select
                 * @function
                 * @memberOf pear.users
                 * 
                 * @param {String|String[]} [allOrIdOrList] <p>The user data to retrieve from the repository.</p>
                 *                                          <p><code>null</code>, <code>undefined</code> or <code>pear.ALL</code>
                 *                                          will retrieve all the users from the repository at once.</p>
                 *                                          <p>A user node name (ID) may be provided to retrieve a specific (single) user. Wildcard syntax is also supported (e.g. 'user_1*').</p>
                 *                                          <p>An array of user nodes name (IDs) may be provided to retrieve a list of (multiple) users. Wildcard syntax is also supported (e.g. ['user_1*', '*_2*']).</p>
                 *                                          
                 * @param {Boolean} [count=false]           <p><code>true</code> will return the count of the users instead of their data.</p>
                 * @param {Numer|Number[]} [limit]          <p>Identical to MySQL LIMIT. This may be used to limit the number of results returned or to start
                 *                                          at a specific node and return the rest.</p>
                 *                                          <p>LIMIT takes one number or an array of two numeric arguments, which must both be nonnegative integer constants</p>
                 *                                          <p>With two arguments, the first argument specifies the offset of the first node to return,
                 *                                          and the second specifies the maximum number of nodes to return. The offset of the initial row is 0 (not 1):</p>
                 *                                          <p></p>
                 *                                          <p><code>pear.users.select(pear.ALL, false, false, [5,10];  // Retrieve rows 6-15</code></p>
                 *                                          <p></p>
                 *                                          <p>To retrieve all nodes from a certain offset up to the end of the result set, 
                 *                                          you can use some large number for the second parameter. This statement retrieves all 
                 *                                          nodes from the 96th node to the last:</p>
                 *                                          <p></p>
                 *                                          <p><code>pear.users.select(pear.ALL, false, false, [95,9185462315]);</code></p>
                 *                                          <p></p>
                 *                                          <p>With one argument, the value specifies the number of nodes to return from the beginning of the result set:</p>
                 *                                          <p></p>
                 *                                          <p><code>pear.users.select(pear.ALL, false, false, 5);     // Retrieve first 5 nodes</code></p>
                 *                                          <p></p>
                 *                                          <p>In other words, LIMIT {Number} is equivalent to LIMIT [0, {Number}].</p>
                 * @param {Boolean} [infinity=false]        <p><code>true</code> will return the user data along with all their child nodes if any.</p>
                 *                                          
                 * @returns {jQuery.promise}
                 * 
                 * @see <a href="http://api.jquery.com/promise/" target="_blank">jQuery.promise()</a>
                 * @see <a href="http://dev.mysql.com/doc/refman/5.0/en/select.html" target="_blank">MySQL select</a>
                 * @example 
                 * 
                 * // select all
                 * pear.users.select().done(function (result) { console.log(result); });
                 * 
                 * // get the count
                 * pear.users.select(pear.ALL, true).done(function (result) { console.log(result); });
                 * 
                 * // select the first 10
                 * pear.users.select(pear.ALL, false, 10).done(function (result) { console.log(result); });
                 * 
                 * // select the next 10
                 * pear.users.select(pear.ALL, false, [10, 10]).done(function (result) { console.log(result); });
                 * 
                 * // select a specific one
                 * pear.users.select('user_45').done(function (result) { console.log(result); });
                 */
                select: function (allOrIdOrList, count, limit, infinity) {
                    
                    return select(api.users, 
                                  services.absolute.users, 
                                  allOrIdOrList, 
                                  count, 
                                  infinity, 
                                  limit);
                    
                },
                        
                /**
                 * <p>Returns a result set of user objects from the repository.</p>
                 * <p>The method is similar to the {@link pear.users.select} but differs in that:</p>
                 * <p></p>
                 * <ul>
                 *     <li>You may request to sort the returned result set.</li>
                 *     <li>You cannot fetch only a "count". 
                 *         The total number of records (count) is always returned in the result set.</li>
                 *     <li>You cannot fetch a specific item or a group of items. 
                 *         All the matching items are always returned.</li>
                 *     <li>"Infinity" is always on.</li>
                 * </ul>
                 * <p></p>
                 * <p>The returned result set is always formatted as follows:</p>
                 * <p></p>
                 * <code>{</code>
                 * <p></p>
                 * <dl>
                 *    <dt><strong>success: {Boolean}</strong></dt>
                 *    <dd><em>Whether the fetch was successful.</em></dd><p></p>
                 *    
                 *    <dt><strong>results: {Number}</strong></dt>
                 *    <dd><em>A non negative integer indicating the number of user objects returned.</em></dd><p></p>
                 *    
                 *    <dt><strong>total {Number}</strong></dt>
                 *    <dd><em>A non negative integer indicating the total number of existing user objects.</em></dd><p></p>
                 *    
                 *    <dt><strong>offset {Number}</strong></dt>
                 *    <dd><em>A non negative integer indicating the index of the node as of which results have been returned.</em></dd><p></p>
                 *    
                 *    <dt><strong>hits: {Object[]}</strong></dt>
                 *    <dd><em>An array containing the user objects. A property <code>:name</code> is always added to the objects,
                 *    representing the object's node name (ID)</em></dd><p></p>
                 *  </dl>
                 * <code>}</code>
                 * 
                 * 
                 * @name fetch
                 * @function
                 * @memberOf pear.users
                 * 
                 * @param {SortOrder} [orderBy]             <p>An optional <code>SortOrder</code> to apply to the result set.</p>
                 *                                          <p>A <code>SortOrder</code> instance may be obtained by invoking the 
                 *                                          {@link pear.orderBy.asc} or {@link pear.orderBy.desc} methods.</p>
                 * @param {Numer|Number[]} [limit]          <p>Identical to MySQL LIMIT. This may be used to limit the number of results returned or to start
                 *                                          at a specific node and return the rest.</p>
                 *                                          <p>LIMIT takes one number or an array of two numeric arguments, which must both be nonnegative integer constants</p>
                 *                                          <p>With two arguments, the first argument specifies the offset of the first node to return,
                 *                                          and the second specifies the maximum number of nodes to return. The offset of the initial row is 0 (not 1):</p>
                 *                                          <p></p>
                 *                                          <p><code>pear.users.fetch(null, [5,10];  // Retrieve rows 6-15</code></p>
                 *                                          <p></p>
                 *                                          <p>To retrieve all nodes from a certain offset up to the end of the result set, 
                 *                                          you can use some large number for the second parameter. This statement retrieves all 
                 *                                          nodes from the 96th node to the last:</p>
                 *                                          <p></p>
                 *                                          <p><code>pear.users.fetch(null, [95,9185462315]);</code></p>
                 *                                          <p></p>
                 *                                          <p>With one argument, the value specifies the number of nodes to return from the beginning of the result set:</p>
                 *                                          <p></p>
                 *                                          <p><code>pear.users.fetch(null, 5);     // Retrieve first 5 nodes</code></p>
                 *                                          <p></p>
                 *                                          <p>In other words, LIMIT {Number} is equivalent to LIMIT [0, {Number}].</p>
                 *                                          
                 * @returns {jQuery.promise}
                 * 
                 * @see <a href="http://api.jquery.com/promise/" target="_blank">jQuery.promise()</a>
                 * @see <a href="http://dev.mysql.com/doc/refman/5.0/en/select.html" target="_blank">MySQL select</a>
                 * @example 
                 * 
                 * // fetch all
                 * pear.users.fetch().done(function (set) { 
                 *      
                 *      // the count is always returned
                 *      console.log(set.total);
                 *      
                 *      if (set.results > 0) {
                 *          
                 *          console.log(set.hits); 
                 *      
                 *      }
                 *      
                 * });
                 * 
                 * // select the first 10
                 * pear.users.fetch(null, 10).done(function (set) { 
                 *      
                 *      if (set.results > 0) {
                 *      
                 *          console.log(set.hits); 
                 *      
                 *      }
                 *      
                 * });
                 * 
                 * // select the next 10
                 * pear.users.fetch(null, [10, 10]).done(function (set) { 
                 *      
                 *      if (set.results > 0) {
                 *      
                 *          console.log(set.hits); 
                 *      
                 *      }
                 *      
                 * });
                 * 
                 * // select a all, sort by userid descending (Z-A)
                 * pear.users.fetch(pear.orderBy.desc('userid')).done(function (set) { 
                 *      
                 *      if (set.results > 0) {
                 *      
                 *          console.log(set.hits); 
                 *      
                 *      }
                 *      
                 * });
                 * 
                 * // select 10, sort by userid ascending (A-Z)
                 * pear.users.fetch(pear.orderBy.asc('userid'), 10).done(function (set) { 
                 *      
                 *      if (set.results > 0) {
                 *      
                 *          console.log(set.hits); 
                 *      
                 *      }
                 *      
                 * });
                 */
                fetch: function (orderBy, limit) {
                    
                    return fetch(api.users, services.relative.users, orderBy, limit);
                                        
                }
                
            },
            
            /**
             * An API that provides CRUD access to the projects data in found the content repository.
             * 
             * @name projects
             * @field
             * @type Object
             * @memberOf pear
             * 
             * @namespace An API that authorizes CRUD operations in the projects data in found the content repository.
             */
            projects: {
                
                /**
                 * Creates and saves a new project to the repository.
                 * 
                 * @name insert
                 * @function
                 * @memberOf pear.projects
                 * 
                 * @param {Object} params      <p>The properties of the project node.</p>
                 *                             <p></p>
                 *                             <code>{</code>
                 *                             <p></p>
                 *                             <dl>
                 *                                 <dt>projectname {String}</dt>
                 *                                 <dd>The project name.</dd>
                 *                                 <dt>type {String}</dt>
                 *                                 <dd>The project type.</dd>
                 *                                 <dt>summary {String}</dt>
                 *                                 <dd>The project summary.</dd>
                 *                                 <dt>description {String}</dt>
                 *                                 <dd>The project description.</dd>
                 *                                 <dt>:name {String} <em>( Optional )</em></dt>
                 *                                 <dd>The specific, unique name (ID) to use for the project's node.</dd>
                 *                             </dl>
                 *                             <code>}</code>
                 * @returns {jQuery.promise}
                 * 
                 * @see <a href="http://api.jquery.com/promise/" target="_blank">jQuery.promise()</a>
                 * @example 
                 * 
                 * pear.project.insert({projectname: 'test', type: 'tr', summary 'best test ever', description: 'This test will fix everything on the site.'})
                 *             .done(function () { console.log('Yay!') })
                 *             .fail(function () { console.log('Nay!') });
                 */
                insert: function (params) {
                    
                    return insert(api.projects, services.absolute.projects, config.projectsBaseName, params);

                },
                
                /**
                 * Updates and saves an existing project's data in the repository.
                 * 
                 * @name update
                 * @function
                 * @memberOf pear.projects
                 * 
                 * @param {Object} params      <p>The properties of the project node.</p>
                 *                             <p></p>
                 *                             <code>{</code>
                 *                             <p></p>
                 *                             <dl>
                 *                                 <dt>:name {String} <em>( Required )</em></dt>
                 *                                 <dd>The node name (ID) of the project to update.</dd>
                 *                                 <dt>projectname {String}</dt>
                 *                                 <dd>The project name.</dd>
                 *                                 <dt>type {String}</dt>
                 *                                 <dd>The project type.</dd>
                 *                                 <dt>summary {String}</dt>
                 *                                 <dd>The project summary.</dd>
                 *                                 <dt>description {String}</dt>
                 *                                 <dd>The project description.</dd>
                 *                             </dl>
                 *                             <code>}</code>
                 * @returns {jQuery.promise}
                 * 
                 * @see <a href="http://api.jquery.com/promise/" target="_blank">jQuery.promise()</a>
                 * 
                 * pear.project.update({':name': 'project_1', type: 'sr'})
                 *             .done(function () { console.log('Yay!') })
                 *             .fail(function () { console.log('Nay!') })
                 */
                update: function (params) {
                    
                    return update(api.projects, services.absolute.projects, params);
                    
                },
                
                /**
                 * <p>Removes one or many projects from the repository.</p>
                 * <p>One, many or all the projects may be deleted with a single call.</p>
                 * 
                 * @name remove
                 * @function 
                 * @memberOf pear.projects
                 * 
                 * @param {String|String[]} [allOrIdOrList] <p>The project nodes to remove from the repository.</p>
                 *                                          <p><code>null</code>, <code>undefined</code> or <code>pear.ALL</code>
                 *                                          will remove all the projects from the repository at once.</p>
                 *                                          <p>A project node name (ID) may be provided to remove a specific (single) project.</p>
                 *                                          <p>An array of project nodes name (IDs) may be provided to remove a list of (multiple) projects.</p>
                 * @returns {jQuery.promise}
                 * 
                 * @see <a href="http://api.jquery.com/promise/" target="_blank">jQuery.promise()</a>
                 * @example 
                 * 
                 * pear.projects.remove('project_0')
                 *              .done(function () { console.log('Yay!') })
                 *              .fail(function () { console.log('Nay!') });
                 * 
                 * pear.projects.remove(['project_3', 'project_17'])
                 *              .done(function () { console.log('Yay!') })
                 *              .fail(function () { console.log('Nay!') });
                 * 
                 * pear.projects.remove(pear.ALL)
                 *              .done(function () { console.log('Yay!') })
                 *              .fail(function () { console.log('Nay!') });
                 */
                remove: function (allOrIdOrList) {
                    
                    return remove(api.projects, 
                                  services.absolute.projects, 
                                  services.relative.projects, 
                                  allOrIdOrList);
                    
                },
                
                /**
                 * Returns one or many project data from the repository as a JSON Object.
                 * 
                 * @name select
                 * @function
                 * @memberOf pear.projects
                 * 
                 * @param {String|String[]} [allOrIdOrList] <p>The project data to retrieve from the repository.</p>
                 *                                          <p><code>null</code>, <code>undefined</code> or <code>pear.ALL</code>
                 *                                          will retrieve all the projects from the repository at once.</p>
                 *                                          <p>A project node name (ID) may be provided to retrieve a specific (single) project. Wildcard syntax is also supported (e.g. 'project_1*').</p>
                 *                                          <p>An array of project nodes name (IDs) may be provided to retrieve a list of (multiple) projects. Wildcard syntax is also supported (e.g. ['project_1*', '*_2*']).</p>
                 *                                          
                 * @param {Boolean} [count=false]           <p><code>true</code> will return the count of the projects instead of their data.</p>
                 * @param {Numer|Number[]} [limit]          <p>Identical to MySQL LIMIT. This may be used to limit the number of results returned or to start
                 *                                          at a specific node and return the rest.</p>
                 *                                          <p>LIMIT takes one number or an array of two numeric arguments, which must both be nonnegative integer constants</p>
                 *                                          <p>With two arguments, the first argument specifies the offset of the first node to return,
                 *                                          and the second specifies the maximum number of nodes to return. The offset of the initial row is 0 (not 1):</p>
                 *                                          <p></p>
                 *                                          <p><code>pear.projects.select(pear.ALL, false, false, [5,10];  // Retrieve rows 6-15</code></p>
                 *                                          <p></p>
                 *                                          <p>To retrieve all nodes from a certain offset up to the end of the result set, 
                 *                                          you can use some large number for the second parameter. This statement retrieves all 
                 *                                          nodes from the 96th node to the last:</p>
                 *                                          <p></p>
                 *                                          <p><code>pear.projects.select(pear.ALL, false, false, [95,9185462315]);</code></p>
                 *                                          <p></p>
                 *                                          <p>With one argument, the value specifies the number of nodes to return from the beginning of the result set:</p>
                 *                                          <p></p>
                 *                                          <p><code>pear.projects.select(pear.ALL, false, false, 5);     // Retrieve first 5 nodes</code></p>
                 *                                          <p></p>
                 *                                          <p>In other words, LIMIT {Number} is equivalent to LIMIT [0, {Number}].</p>
                 * @param {Boolean} [infinity=false]        <p><code>true</code> will return the project data along with all their child nodes if any.</p>
                 *                                          
                 * @returns {jQuery.promise}
                 * 
                 * @see <a href="http://api.jquery.com/promise/" target="_blank">jQuery.promise()</a>
                 * @see <a href="http://dev.mysql.com/doc/refman/5.0/en/select.html" target="_blank">MySQL select</a>
                 * @example 
                 * 
                 * // select all
                 * pear.projects.select().done(function (result) { console.log(result); });
                 * 
                 * // get the count
                 * pear.projects.select(pear.ALL, true).done(function (result) { console.log(result); });
                 * 
                 * // select the first 10
                 * pear.projects.select(pear.ALL, false, 10).done(function (result) { console.log(result); });
                 * 
                 * // select the next 10
                 * pear.projects.select(pear.ALL, false, [10, 10]).done(function (result) { console.log(result); });
                 * 
                 * // select a specific one
                 * pear.projects.select('project_45').done(function (result) { console.log(result); });
                 */
                select: function (allOrIdOrList, count, limit, infinity) {
                    
                    return select(api.projects, services.absolute.projects, allOrIdOrList, count, infinity, limit);
                    
                },
                        
                /**
                 * <p>Returns a result set of project objects from the repository.</p>
                 * <p>The method is similar to the {@link pear.projects.select} but differs in that:</p>
                 * <p></p>
                 * <ul>
                 *     <li>You may request to sort the returned result set.</li>
                 *     <li>You cannot fetch only a "count". 
                 *         The total number of records (count) is always returned in the result set.</li>
                 *     <li>You cannot fetch a specific item or a group of items. 
                 *         All the matching items are always returned.</li>
                 *     <li>"Infinity" is always on.</li>
                 * </ul>
                 * <p></p>
                 * <p>The returned result set is always formatted as follows:</p>
                 * <p></p>
                 * <code>{</code>
                 * <p></p>
                 * <dl>
                 *    <dt><strong>success: {Boolean}</strong></dt>
                 *    <dd><em>Whether the fetch was successful.</em></dd><p></p>
                 *    
                 *    <dt><strong>results: {Number}</strong></dt>
                 *    <dd><em>A non negative integer indicating the number of project objects returned.</em></dd><p></p>
                 *    
                 *    <dt><strong>total {Number}</strong></dt>
                 *    <dd><em>A non negative integer indicating the total number of existing project objects.</em></dd><p></p>
                 *    
                 *    <dt><strong>offset {Number}</strong></dt>
                 *    <dd><em>A non negative integer indicating the index of the node as of which results have been returned.</em></dd><p></p>
                 *    
                 *    <dt><strong>hits: {Object[]}</strong></dt>
                 *    <dd><em>An array containing the project objects. A property <code>:name</code> is always added to the objects,
                 *    representing the object's node name (ID)</em></dd><p></p>
                 *  </dl>
                 * <code>}</code>
                 * 
                 * 
                 * @name fetch
                 * @function
                 * @memberOf pear.projects
                 * 
                 * @param {SortOrder} [orderBy]             <p>An optional <code>SortOrder</code> to apply to the result set.</p>
                 *                                          <p>A <code>SortOrder</code> instance may be obtained by invoking the 
                 *                                          {@link pear.orderBy.asc} or {@link pear.orderBy.desc} methods.</p>
                 * @param {Numer|Number[]} [limit]          <p>Identical to MySQL LIMIT. This may be used to limit the number of results returned or to start
                 *                                          at a specific node and return the rest.</p>
                 *                                          <p>LIMIT takes one number or an array of two numeric arguments, which must both be nonnegative integer constants</p>
                 *                                          <p>With two arguments, the first argument specifies the offset of the first node to return,
                 *                                          and the second specifies the maximum number of nodes to return. The offset of the initial row is 0 (not 1):</p>
                 *                                          <p></p>
                 *                                          <p><code>pear.projects.fetch(null, [5,10];  // Retrieve rows 6-15</code></p>
                 *                                          <p></p>
                 *                                          <p>To retrieve all nodes from a certain offset up to the end of the result set, 
                 *                                          you can use some large number for the second parameter. This statement retrieves all 
                 *                                          nodes from the 96th node to the last:</p>
                 *                                          <p></p>
                 *                                          <p><code>pear.projects.fetch(null, [95,9185462315]);</code></p>
                 *                                          <p></p>
                 *                                          <p>With one argument, the value specifies the number of nodes to return from the beginning of the result set:</p>
                 *                                          <p></p>
                 *                                          <p><code>pear.projects.fetch(null, 5);     // Retrieve first 5 nodes</code></p>
                 *                                          <p></p>
                 *                                          <p>In other words, LIMIT {Number} is equivalent to LIMIT [0, {Number}].</p>
                 *                                          
                 * @returns {jQuery.promise}
                 * 
                 * @see <a href="http://api.jquery.com/promise/" target="_blank">jQuery.promise()</a>
                 * @see <a href="http://dev.mysql.com/doc/refman/5.0/en/select.html" target="_blank">MySQL select</a>
                 * @example 
                 * 
                 * // fetch all
                 * pear.projects.fetch().done(function (set) { 
                 *      
                 *      // the count is always returned
                 *      console.log(set.total);
                 *      
                 *      if (set.results > 0) {
                 *          
                 *          console.log(set.hits); 
                 *      
                 *      }
                 *      
                 * });
                 * 
                 * // select the first 10
                 * pear.projects.fetch(null, 10).done(function (set) { 
                 *      
                 *      if (set.results > 0) {
                 *      
                 *          console.log(set.hits); 
                 *      
                 *      }
                 *      
                 * });
                 * 
                 * // select the next 10
                 * pear.projects.fetch(null, [10, 10]).done(function (set) { 
                 *      
                 *      if (set.results > 0) {
                 *      
                 *          console.log(set.hits); 
                 *      
                 *      }
                 *      
                 * });
                 * 
                 * // select a all, sort by projectname descending (Z-A)
                 * pear.projects.fetch(pear.orderBy.desc('projectname')).done(function (set) { 
                 *      
                 *      if (set.results > 0) {
                 *      
                 *          console.log(set.hits); 
                 *      
                 *      }
                 *      
                 * });
                 * 
                 * // select 10, sort by projectname ascending (A-Z)
                 * pear.projects.fetch(pear.orderBy.asc('projectname'), 10).done(function (set) { 
                 *      
                 *      if (set.results > 0) {
                 *      
                 *          console.log(set.hits); 
                 *      
                 *      }
                 *      
                 * });
                 */
                fetch: function (orderBy, limit) {
                    
                    return fetch(api.projects, services.relative.projects, orderBy, limit);
                                        
                }
                
            },
            
            /**
             * An API that provides CRUD access to the tasks data in found the content repository.
             * 
             * @name tasks
             * @field
             * @type Object
             * @memberOf pear
             * 
             * @namespace An API that authorizes CRUD operations in the tasks data in found the content repository.
             */
            tasks: {
                
                /**
                 * Creates and saves a new task to the repository.
                 * 
                 * @name insert
                 * @function
                 * @memberOf pear.tasks
                 * 
                 * @param {Object} params      <p>The properties of the task node.</p>
                 *                             <p></p>
                 *                             <code>{</code>
                 *                             <p></p>
                 *                             <dl>
                 *                                 <dt>project {String} <em>( Required )</em></dt>
                 *                                 <dd>The project node name (ID) to which this task pertain to.</dd>
                 *                                 <dt>taskname {String}</dt>
                 *                                 <dd>The task name.</dd>
                 *                                 <dt>summary {String}</dt>
                 *                                 <dd>The task Summary.</dd>
                 *                                 <dt>description {String}</dt>
                 *                                 <dd>The task Description.</dd>
                 *                                 <dt>priority {String}</dt>
                 *                                 <dd>The task Priority (major, critical, blocker, minor).</dd>
                 *                                 <dt>assignee {String}</dt>
                 *                                 <dd>The task Assignee (Node name (ID) of the assigned user).</dd>
                 *                                 <dt>status {String}</dt>
                 *                                 <dd>The task Status (open, development, reopened, qcr, testing, approved).</dd>
                 *                                 <dt>createdBy {String}</dt>
                 *                                 <dd>The task Author (Node name (ID) of the current user).</dd>
                 *                                 <dt>created {Date}</dt>
                 *                                 <dd>The task creation date.</dd>
                 *                                 <dt>due {Date}</dt>
                 *                                 <dd>The task due date.</dd>
                 *                                 <dt>:name {String} <em>( Optional )</em></dt>
                 *                                 <dd>The specific, unique name (ID) to use for the task's node.</dd>
                 *                             </dl>
                 *                             <code>}</code>
                 * @returns {jQuery.promise}
                 * 
                 * @see <a href="http://api.jquery.com/promise/" target="_blank">jQuery.promise()</a>
                 * @example 
                 * 
                 * pear.tasks.insert({
                 *                      project     : 'project_1',
                 *                      taskname    : 'Add close button', 
                 *                      summary     : 'Add close button to the overlay',
                 *                      description : 'Add close button to the overlay so the user can exit',
                 *                      priority    : 'blocker',
                 *                      assignee    : 'user_1',
                 *                      status      : 'development',
                 *                      createdBy   : 'user_3',
                 *                      created     : new Date(),
                 *                      due         : calendar.getSelectedDate(),
                 *            })
                 *           .done(function () { console.log('Yay!') })
                 *           .fail(function () { console.log('Nay!') })
                 */
                insert: function (params) {
                    
                    return insert(api.tasks, 
                                  services.absolute.tasks + '/' + strLookup(params, "project"), 
                                  config.tasksBaseName, 
                                  dateFormat(params, ['created', 'due']));

                },
                
                /**
                 * Updates and saves an existing task's data in the repository.
                 * 
                 * @name update
                 * @function
                 * @memberOf pear.tasks
                 * 
                 * @param {Object} params      <p>The properties of the task object.</p>
                 *                             <p></p>
                 *                             <code>{</code>
                 *                             <p></p>
                 *                             <dl>
                 *                                 <dt>:name {String} <em>( Required )</em></dt>
                 *                                 <dd>The node name (ID) of the task to update.</dd>
                 *                                 <dt>project {String} <em>( Required )</em></dt>
                 *                                 <dd>The project node name (ID) to which this task pertain to.</dd>
                 *                                 <dt>taskname {String}</dt>
                 *                                 <dd>The task name.</dd>
                 *                                 <dt>summary {String}</dt>
                 *                                 <dd>The task Summary.</dd>
                 *                                 <dt>description {String}</dt>
                 *                                 <dd>The task Description.</dd>
                 *                                 <dt>priority {String}</dt>
                 *                                 <dd>The task Priority (major, critical, blocker, minor).</dd>
                 *                                 <dt>assignee {String}</dt>
                 *                                 <dd>The task Assignee (Node name (ID) of the assigned user).</dd>
                 *                                 <dt>status {String}</dt>
                 *                                 <dd>The task Status (open, development, reopened, qcr, testing, approved).</dd>
                 *                                 <dt>due {Date}</dt>
                 *                                 <dd>The task due date.</dd>
                 *                             </dl>
                 *                             <code>}</code>
                 * @returns {jQuery.promise}
                 * 
                 * @see <a href="http://api.jquery.com/promise/" target="_blank">jQuery.promise()</a>
                 * 
                 * @example
                 * pear.tasks.update({
                 *                      ':name'     : 'task_7',
                 *                      project     : 'project_1',
                 *                      assignee    : 'user_3',
                 *                      status      : 'testing',
                 *                      due         : calendar.getSelectedDate(),
                 *            })
                 *           .done(function () { console.log('Yay!') })
                 *           .fail(function () { console.log('Nay!') })
                 */
                update: function (params) {
                    
                    return update(api.tasks, 
                                  services.absolute.tasks + '/' + strLookup(params, "project"), 
                                  dateFormat(params, ['created', 'due']));
                    
                },
                
                /**
                 * <p>Removes one or many tasks from the repository.</p>
                 * <p>One, many or all the tasks may be deleted with a single call.</p>
                 * 
                 * @name remove
                 * @function 
                 * @memberOf pear.tasks
                 * 
                 * @param {String} project                  The node name (ID) of the project to which the tasks to remove pertain to.
                 * 
                 * @param {String|String[]} [allOrIdOrList] <p>The task nodes to remove from the repository.</p>
                 *                                          <p><code>null</code>, <code>undefined</code> or <code>pear.ALL</code>
                 *                                          will remove all the tasks from the repository at once.</p>
                 *                                          <p>A task node name (ID) may be provided to remove a specific (single) task.</p>
                 *                                          <p>An array of task nodes name (IDs) may be provided to remove a list of (multiple) tasks.</p>
                 * @returns {jQuery.promise}
                 * 
                 * @see <a href="http://api.jquery.com/promise/" target="_blank">jQuery.promise()</a>
                 * 
                 * @example 
                 * pear.tasks.remove('project_8', 'task_0')
                 *           .done(function () { console.log('Yay!') })
                 *           .fail(function () { console.log('Nay!') });
                 * 
                 * pear.tasks.remove('project_8', ['task_3', 'task_17'])
                 *           .done(function () { console.log('Yay!') })
                 *           .fail(function () { console.log('Nay!') });
                 * 
                 * pear.tasks.remove('project_8', pear.ALL)
                 *           .done(function () { console.log('Yay!') })
                 *           .fail(function () { console.log('Nay!') });
                 */
                remove: function (project, allOrIdOrList) {
                    
                    return remove(api.tasks, 
                                  services.absolute.tasks  + '/' + project, 
                                  services.relative.tasks  + '/' + project, 
                                  allOrIdOrList);
                    
                },
                
                /**
                 * Returns one or many task data from the repository as a JSON Object.
                 * 
                 * @name select
                 * @function
                 * @memberOf pear.tasks
                 * 
                 * @param {String} project                  The node name (ID) of the project to which the tasks to remove pertain to.
                 * 
                 * @param {String|String[]} [allOrIdOrList] <p>The task data to retrieve from the repository.</p>
                 *                                          <p><code>null</code>, <code>undefined</code> or <code>pear.ALL</code>
                 *                                          will retrieve all the tasks from the repository at once.</p>
                 *                                          <p>A task node name (ID) may be provided to retrieve a specific (single) task. Wildcard syntax is also supported (e.g. 'task_1*').</p>
                 *                                          <p>An array of task nodes name (IDs) may be provided to retrieve a list of (multiple) tasks. Wildcard syntax is also supported (e.g. ['task_1*', '*_2*']).</p>
                 *                                          
                 * @param {Boolean} [count=false]           <p><code>true</code> will return the count of the tasks instead of their data.</p>
                 * @param {Number|Number[]} [limit]          <p>Identical to MySQL LIMIT. This may be used to limit the number of results returned or to start
                 *                                          at a specific node and return the rest.</p>
                 *                                          <p>LIMIT takes one number or an array of two numeric arguments, which must both be non-negative integer constants</p>
                 *                                          <p>With two arguments, the first argument specifies the offset of the first node to return,
                 *                                          and the second specifies the maximum number of nodes to return. The offset of the initial row is 0 (not 1):</p>
                 *                                          <p></p>
                 *                                          <p><code>pear.tasks.select('project_8', pear.ALL, false, false, [5,10];  // Retrieve rows 6-15</code></p>
                 *                                          <p></p>
                 *                                          <p>To retrieve all nodes from a certain offset up to the end of the result set, 
                 *                                          you can use some large number for the second parameter. This statement retrieves all 
                 *                                          nodes from the 96th node to the last:</p>
                 *                                          <p></p>
                 *                                          <p><code>pear.tasks.select('project_8', pear.ALL, false, false, [95,9185462315]);</code></p>
                 *                                          <p></p>
                 *                                          <p>With one argument, the value specifies the number of nodes to return from the beginning of the result set:</p>
                 *                                          <p></p>
                 *                                          <p><code>pear.tasks.select('project_8', pear.ALL, false, false, 5);     // Retrieve first 5 nodes</code></p>
                 *                                          <p></p>
                 *                                          <p>In other words, LIMIT {Number} is equivalent to LIMIT [0, {Number}].</p>
                 * @param {Boolean} [infinity=false]        <p><code>true</code> will return the task data along with all their child nodes if any.</p>
                 *                                          
                 * @returns {jQuery.promise}
                 * 
                 * @see <a href="http://api.jquery.com/promise/" target="_blank">jQuery.promise()</a>
                 * @see <a href="http://dev.mysql.com/doc/refman/5.0/en/select.html" target="_blank">MySQL select</a>
                 * @example 
                 * 
                 * // select all
                 * pear.tasks.select('project_8').done(function (result) { console.log(result); });
                 * 
                 * // get the count
                 * pear.tasks.select('project_8', pear.ALL, true).done(function (result) { console.log(result); });
                 * 
                 * // select the first 10
                 * pear.tasks.select('project_8', pear.ALL, false, 10).done(function (result) { console.log(result); });
                 * 
                 * // select the next 10
                 * pear.tasks.select('project_8', pear.ALL, false, [10, 10]).done(function (result) { console.log(result); });
                 * 
                 * // select a specific one
                 * pear.tasks.select('project_8', 'task_45').done(function (result) { console.log(result); });
                 */
                select: function (project, allOrIdOrList, count, limit, infinity) {
                    
                    return select(api.tasks, 
                                  services.absolute.tasks + '/' + project, 
                                  allOrIdOrList, 
                                  count, 
                                  infinity, 
                                  limit)
                          // convert the date strings to Date objects
                          .pipe(function (result) {
                              
                              var i;
                              
                              if (!count) {
                                  
                                  for (i in result) {
                                      
                                      if (result.hasOwnProperty(i)) {
                                          
                                          dateParse(result[i], ['created', 'due']);
                                          
                                      }
                                      
                                  }

                              }
                              
                              return result;

                          });
                    
                },
                        
                /**
                 * <p>Returns a result set of task objects from the repository.</p>
                 * <p>The method is similar to the {@link pear.tasks.select} but differs in that:</p>
                 * <p></p>
                 * <ul>
                 *     <li>You may request to sort the returned result set.</li>
                 *     <li>You cannot fetch only a "count". 
                 *         The total number of records (count) is always returned in the result set.</li>
                 *     <li>You cannot fetch a specific item or a group of items. 
                 *         All the matching items are always returned.</li>
                 *     <li>"Infinity" is always on.</li>
                 * </ul>
                 * <p></p>
                 * <p>The returned result set is always formatted as follows:</p>
                 * <p></p>
                 * <code>{</code>
                 * <p></p>
                 * <dl>
                 *    <dt><strong>success: {Boolean}</strong></dt>
                 *    <dd><em>Whether the fetch was successful.</em></dd><p></p>
                 *    
                 *    <dt><strong>results: {Number}</strong></dt>
                 *    <dd><em>A non negative integer indicating the number of task objects returned.</em></dd><p></p>
                 *    
                 *    <dt><strong>total {Number}</strong></dt>
                 *    <dd><em>A non negative integer indicating the total number of existing task objects.</em></dd><p></p>
                 *    
                 *    <dt><strong>offset {Number}</strong></dt>
                 *    <dd><em>A non negative integer indicating the index of the node as of which results have been returned.</em></dd><p></p>
                 *    
                 *    <dt><strong>hits: {Object[]}</strong></dt>
                 *    <dd><em>An array containing the task objects. A property <code>:name</code> is always added to the objects,
                 *    representing the object's node name (ID)</em></dd><p></p>
                 *  </dl>
                 * <code>}</code>
                 * 
                 * 
                 * @name fetch
                 * @function
                 * @memberOf pear.tasks
                 * 
                 * @param {String} project                  The node name (ID) of the project to which the tasks to remove pertain to.
                 * @param {SortOrder} [orderBy]             <p>An optional <code>SortOrder</code> to apply to the result set.</p>
                 *                                          <p>A <code>SortOrder</code> instance may be obtained by invoking the 
                 *                                          {@link pear.orderBy.asc} or {@link pear.orderBy.desc} methods.</p>
                 * @param {Numer|Number[]} [limit]          <p>Identical to MySQL LIMIT. This may be used to limit the number of results returned or to start
                 *                                          at a specific node and return the rest.</p>
                 *                                          <p>LIMIT takes one number or an array of two numeric arguments, which must both be nonnegative integer constants</p>
                 *                                          <p>With two arguments, the first argument specifies the offset of the first node to return,
                 *                                          and the second specifies the maximum number of nodes to return. The offset of the initial row is 0 (not 1):</p>
                 *                                          <p></p>
                 *                                          <p><code>pear.tasks.fetch('project_8', null, [5,10];  // Retrieve rows 6-15</code></p>
                 *                                          <p></p>
                 *                                          <p>To retrieve all nodes from a certain offset up to the end of the result set, 
                 *                                          you can use some large number for the second parameter. This statement retrieves all 
                 *                                          nodes from the 96th node to the last:</p>
                 *                                          <p></p>
                 *                                          <p><code>pear.tasks.fetch('project_8', null, [95,9185462315]);</code></p>
                 *                                          <p></p>
                 *                                          <p>With one argument, the value specifies the number of nodes to return from the beginning of the result set:</p>
                 *                                          <p></p>
                 *                                          <p><code>pear.tasks.fetch('project_8', null, 5);     // Retrieve first 5 nodes</code></p>
                 *                                          <p></p>
                 *                                          <p>In other words, LIMIT {Number} is equivalent to LIMIT [0, {Number}].</p>
                 *                                          
                 * @returns {jQuery.promise}
                 * 
                 * @see <a href="http://api.jquery.com/promise/" target="_blank">jQuery.promise()</a>
                 * @see <a href="http://dev.mysql.com/doc/refman/5.0/en/select.html" target="_blank">MySQL select</a>
                 * @example 
                 * 
                 * // fetch all
                 * pear.tasks.fetch('project_8').done(function (set) { 
                 *      
                 *      // the count is always returned
                 *      console.log(set.total);
                 *      
                 *      if (set.results > 0) {
                 *          
                 *          console.log(set.hits); 
                 *      
                 *      }
                 *      
                 * });
                 * 
                 * // select the first 10
                 * pear.tasks.fetch('project_8', null, 10).done(function (set) { 
                 *      
                 *      if (set.results > 0) {
                 *      
                 *          console.log(set.hits); 
                 *      
                 *      }
                 *      
                 * });
                 * 
                 * // select the next 10
                 * pear.tasks.fetch('project_8', null, [10, 10]).done(function (set) { 
                 *      
                 *      if (set.results > 0) {
                 *      
                 *          console.log(set.hits); 
                 *      
                 *      }
                 *      
                 * });
                 * 
                 * // select a all, sort by taskname descending (Z-A)
                 * pear.tasks.fetch('project_8', pear.orderBy.desc('taskname')).done(function (set) { 
                 *      
                 *      if (set.results > 0) {
                 *      
                 *          console.log(set.hits); 
                 *      
                 *      }
                 *      
                 * });
                 * 
                 * // select 10, sort by taskname ascending (A-Z)
                 * pear.tasks.fetch('project_8', pear.orderBy.asc('taskname'), 10).done(function (set) { 
                 *      
                 *      if (set.results > 0) {
                 *      
                 *          console.log(set.hits); 
                 *      
                 *      }
                 *      
                 * });
                 */
                fetch: function (project, orderBy, limit) {
                    
                    return fetch(api.tasks, 
                                 services.relative.tasks + '/' + project,
                                 orderBy, 
                                 limit)
                           // convert the date strings to Date objects
                          .pipe(function (set) {
                              
                              if (set.success) {
                                  
                                  for (var i = 0; i < set.results; i += 1) {
                                    
                                      dateParse(set.hits[i], ['created', 'due']);
                                       
                                  }

                              }
                              
                              return set;

                          });
                                        
                }
                
            },
            
            /**
             * An API that provides CRUD access to the comments data in found the content repository.
             * 
             * @name comments
             * @field
             * @type Object
             * @memberOf pear
             * 
             * @namespace An API that authorizes CRUD operations in the comments data in found the content repository.
             */
            comments: {
                
                /**
                 * Creates and saves a new comment to the repository.
                 * 
                 * @name insert
                 * @function
                 * @memberOf pear.comments
                 * 
                 * @param {Object} params      <p>The properties of the comment object.</p>
                 *                             <p></p>
                 *                             <code>{</code>
                 *                             <p></p>
                 *                             <dl>
                 *                                 <dt>task {String} <em>( Required )</em></dt>
                 *                                 <dd>The task node name (ID) to which this comment pertain to.</dd>
                 *                                 <dt>text {String}</dt>
                 *                                 <dd>The comment.</dd>
                 *                                 <dt>createdBy {String}</dt>
                 *                                 <dd>The creator of the comment (Node name (ID) of the current user).</dd>
                 *                                 <dt>created {Date}</dt>
                 *                                 <dd>The comment creation date.</dd>
                 *                                 <dt>:name {String} <em>( Optional )</em></dt>
                 *                                 <dd>The specific, unique name (ID) to use for the comment's node.</dd>
                 *                             </dl>
                 *                             <code>}</code>
                 * @returns {jQuery.promise}
                 * 
                 * @see <a href="http://api.jquery.com/promise/" target="_blank">jQuery.promise()</a>
                 * @example 
                 * 
                 * pear.comments.insert({
                 *                      task        : 'task_2', 
                 *                      text        : 'Oh what? Really!?!', 
                 *                      createdBy   : 'user_5', 
                 *                      created     : new Date()
                 *              })
                 *             .done(function () { console.log('Yay!') })
                 *             .fail(function () { console.log('Nay!') })
                 */
                insert: function (params) {
                    
                    return insert(api.comments, 
                                  services.absolute.comments + '/' + strLookup(params, "task"), 
                                  config.commentsBaseName, 
                                  dateFormat(params, ['created']));

                },
                
                /**
                 * Updates and saves an existing comment's data in the repository.
                 * 
                 * @name update
                 * @function
                 * @memberOf pear.comments
                 * 
                 * @param {Object} params      <p>The properties of the comment object.</p>
                 *                             <p></p>
                 *                             <code>{</code>
                 *                             <p></p>
                 *                             <dl>
                 *                                 <dt>:name {String} <em>( Required )</em></dt>
                 *                                 <dd>The node name (ID) of the comment to update.</dd>
                 *                                 <dt>task {String} <em>( Required )</em></dt>
                 *                                 <dd>The task node name (ID) to which this comment pertain to.</dd>
                 *                                 <dt>text {String}</dt>
                 *                                 <dd>The comment.</dd>
                 *                             </dl>
                 *                             <code>}</code>
                 * @returns {jQuery.promise}
                 * 
                 * @see <a href="http://api.jquery.com/promise/" target="_blank">jQuery.promise()</a>
                 * 
                 * @example
                 * pear.comments.update({
                 *                      task        : 'task_2', 
                 *                      ':name'     : 'comment_6'
                 *                      text        : 'Common!!!!'
                 *              })
                 *             .done(function () { console.log('Yay!') })
                 *             .fail(function () { console.log('Nay!') })
                 */
                update: function (params) {
                    
                    return update(api.comments, 
                                  services.absolute.comments + '/' + strLookup(params, "task"), 
                                  dateFormat(params, ['created']));
                    
                },
                
                /**
                 * <p>Removes one or many comments from the repository.</p>
                 * <p>One, many or all the comments may be deleted with a single call.</p>
                 * 
                 * @name remove
                 * @function 
                 * @memberOf pear.comments
                 * 
                 * @param {String} task                     The node name (ID) of the task to which the comments to remove pertain to.
                 * 
                 * @param {String|String[]} [allOrIdOrList] <p>The comment nodes to remove from the repository.</p>
                 *                                          <p><code>null</code>, <code>undefined</code> or <code>pear.ALL</code>
                 *                                          will remove all the comments from the repository at once.</p>
                 *                                          <p>A comment node name (ID) may be provided to remove a specific (single) comment.</p>
                 *                                          <p>An array of comment nodes name (IDs) may be provided to remove a list of (multiple) comments.</p>
                 * @returns {jQuery.promise}
                 * 
                 * @see <a href="http://api.jquery.com/promise/" target="_blank">jQuery.promise()</a>
                 * @example 
                 * 
                 * pear.comments.remove('comment_0')
                 *              .done(function () { console.log('Yay!') })
                 *              .fail(function () { console.log('Nay!') });
                 * 
                 * pear.comments.remove(['comment_3', 'comment_17'])
                 *              .done(function () { console.log('Yay!') })
                 *              .fail(function () { console.log('Nay!') });
                 * 
                 * pear.comments.remove(pear.ALL)
                 *              .done(function () { console.log('Yay!') })
                 *              .fail(function () { console.log('Nay!') });
                 */
                remove: function (task, allOrIdOrList) {
                    
                    return remove(api.comments, 
                                  services.absolute.comments + '/' + task, 
                                  services.relative.comments + '/' + task, 
                                  allOrIdOrList);
                    
                },
                
                /**
                 * Returns one or many comment data from the repository as a JSON Object.
                 * 
                 * @name select
                 * @function
                 * @memberOf pear.comments
                 * 
                 * @param {String} task                     The node name (ID) of the task to which the comments to retrieve pertains to.
                 * 
                 * @param {String|String[]} [allOrIdOrList] <p>The comment data to retrieve from the repository.</p>
                 *                                          <p><code>null</code>, <code>undefined</code> or <code>pear.ALL</code>
                 *                                          will retrieve all the comments from the repository at once.</p>
                 *                                          <p>A comment node name (ID) may be provided to retrieve a specific (single) comment. Wildcard syntax is also supported (e.g. 'comment_1*').</p>
                 *                                          <p>An array of comment nodes name (IDs) may be provided to retrieve a list of (multiple) comments. Wildcard syntax is also supported (e.g. ['comment_1*', '*_2*']).</p>
                 *                                          
                 * @param {Boolean} [count=false]           <p><code>true</code> will return the count of the comments instead of their data.</p>
                 * @param {Number|Number[]} [limit]         <p>Identical to MySQL LIMIT. This may be used to limit the number of results returned or to start
                 *                                          at a specific node and return the rest.</p>
                 *                                          <p>LIMIT takes one number or an array of two numeric arguments, which must both be non-negative integer constants</p>
                 *                                          <p>With two arguments, the first argument specifies the offset of the first node to return,
                 *                                          and the second specifies the maximum number of nodes to return. The offset of the initial row is 0 (not 1):</p>
                 *                                          <p></p>
                 *                                          <p><code>pear.comments.select('task_3', pear.ALL, false, false, [5,10];  // Retrieve rows 6-15</code></p>
                 *                                          <p></p>
                 *                                          <p>To retrieve all nodes from a certain offset up to the end of the result set, 
                 *                                          you can use some large number for the second parameter. This statement retrieves all 
                 *                                          nodes from the 96th node to the last:</p>
                 *                                          <p></p>
                 *                                          <p><code>pear.comments.select('task_3', pear.ALL, false, false, [95,9185462315]);</code></p>
                 *                                          <p></p>
                 *                                          <p>With one argument, the value specifies the number of nodes to return from the beginning of the result set:</p>
                 *                                          <p></p>
                 *                                          <p><code>pear.comments.select('task_3', pear.ALL, false, false, 5);     // Retrieve first 5 nodes</code></p>
                 *                                          <p></p>
                 *                                          <p>In other words, LIMIT {Number} is equivalent to LIMIT [0, {Number}].</p>
                 * @param {Boolean} [infinity=false]        <p><code>true</code> will return the comment data along with all their child nodes if any.</p>
                 *                                          
                 * @returns {jQuery.promise}
                 * 
                 * @see <a href="http://api.jquery.com/promise/" target="_blank">jQuery.promise()</a>
                 * @see <a href="http://dev.mysql.com/doc/refman/5.0/en/select.html" target="_blank">MySQL select</a>
                 * @example 
                 * 
                 * // select all
                 * pear.comments.select().done(function (result) { console.log(result); });
                 * 
                 * // get the count
                 * pear.comments.select(pear.ALL, true).done(function (result) { console.log(result); });
                 * 
                 * // select the first 10
                 * pear.comments.select(pear.ALL, false, 10).done(function (result) { console.log(result); });
                 * 
                 * // select the next 10
                 * pear.comments.select(pear.ALL, false, [10, 10]).done(function (result) { console.log(result); });
                 * 
                 * // select a specific one
                 * pear.comments.select('comment_45').done(function (result) { console.log(result); });
                 */
                select: function (task, allOrIdOrList, count, limit, infinity) {
                    
                    return select(api.comments, 
                                  services.absolute.comments + '/' + task, 
                                  allOrIdOrList, 
                                  count, 
                                  infinity, 
                                  limit)
                           // convert the date strings to Date objects
                          .pipe(function (result) {
                              
                              var i;
                              
                              if (!count) {
                                  
                                  for (i in result) {
                                      
                                      if (result.hasOwnProperty(i)) {
                                          
                                          dateParse(result[i], ['created']);
                                          
                                      }
                                      
                                  }

                              }
                              
                              return result;

                          });
                          
                },
                        
                /**
                 * <p>Returns a result set of comment objects from the repository.</p>
                 * <p>The method is similar to the {@link pear.comments.select} but differs in that:</p>
                 * <p></p>
                 * <ul>
                 *     <li>You may request to sort the returned result set.</li>
                 *     <li>You cannot fetch only a "count". 
                 *         The total number of records (count) is always returned in the result set.</li>
                 *     <li>You cannot fetch a specific item or a group of items. 
                 *         All the matching items are always returned.</li>
                 *     <li>"Infinity" is always on.</li>
                 * </ul>
                 * <p></p>
                 * <p>The returned result set is always formatted as follows:</p>
                 * <p></p>
                 * <code>{</code>
                 * <p></p>
                 * <dl>
                 *    <dt><strong>success: {Boolean}</strong></dt>
                 *    <dd><em>Whether the fetch was successful.</em></dd><p></p>
                 *    
                 *    <dt><strong>results: {Number}</strong></dt>
                 *    <dd><em>A non negative integer indicating the number of comment objects returned.</em></dd><p></p>
                 *    
                 *    <dt><strong>total {Number}</strong></dt>
                 *    <dd><em>A non negative integer indicating the total number of existing comment objects.</em></dd><p></p>
                 *    
                 *    <dt><strong>offset {Number}</strong></dt>
                 *    <dd><em>A non negative integer indicating the index of the node as of which results have been returned.</em></dd><p></p>
                 *    
                 *    <dt><strong>hits: {Object[]}</strong></dt>
                 *    <dd><em>An array containing the comment objects. A property <code>:name</code> is always added to the objects,
                 *    representing the object's node name (ID)</em></dd><p></p>
                 *  </dl>
                 * <code>}</code>
                 * 
                 * 
                 * @name fetch
                 * @function
                 * @memberOf pear.comments
                 * 
                 * @param {String} task                     The node name (ID) of the task to which the comments to retrieve pertains to.
                 * 
                 * @param {SortOrder} [orderBy]             <p>An optional <code>SortOrder</code> to apply to the result set.</p>
                 *                                          <p>A <code>SortOrder</code> instance may be obtained by invoking the 
                 *                                          {@link pear.orderBy.asc} or {@link pear.orderBy.desc} methods.</p>
                 * @param {Numer|Number[]} [limit]          <p>Identical to MySQL LIMIT. This may be used to limit the number of results returned or to start
                 *                                          at a specific node and return the rest.</p>
                 *                                          <p>LIMIT takes one number or an array of two numeric arguments, which must both be nonnegative integer constants</p>
                 *                                          <p>With two arguments, the first argument specifies the offset of the first node to return,
                 *                                          and the second specifies the maximum number of nodes to return. The offset of the initial row is 0 (not 1):</p>
                 *                                          <p></p>
                 *                                          <p><code>pear.comments.fetch('task_3', null, [5,10];  // Retrieve rows 6-15</code></p>
                 *                                          <p></p>
                 *                                          <p>To retrieve all nodes from a certain offset up to the end of the result set, 
                 *                                          you can use some large number for the second parameter. This statement retrieves all 
                 *                                          nodes from the 96th node to the last:</p>
                 *                                          <p></p>
                 *                                          <p><code>pear.comments.fetch('task_3', null, [95,9185462315]);</code></p>
                 *                                          <p></p>
                 *                                          <p>With one argument, the value specifies the number of nodes to return from the beginning of the result set:</p>
                 *                                          <p></p>
                 *                                          <p><code>pear.comments.fetch('task_3', null, 5);     // Retrieve first 5 nodes</code></p>
                 *                                          <p></p>
                 *                                          <p>In other words, LIMIT {Number} is equivalent to LIMIT [0, {Number}].</p>
                 *                                          
                 * @returns {jQuery.promise}
                 * 
                 * @see <a href="http://api.jquery.com/promise/" target="_blank">jQuery.promise()</a>
                 * @see <a href="http://dev.mysql.com/doc/refman/5.0/en/select.html" target="_blank">MySQL select</a>
                 * @example 
                 * 
                 * // fetch all
                 * pear.comments.fetch('task_3').done(function (set) { 
                 *      
                 *      // the count is always returned
                 *      console.log(set.total);
                 *      
                 *      if (set.results > 0) {
                 *          
                 *          console.log(set.hits); 
                 *      
                 *      }
                 *      
                 * });
                 * 
                 * // select the first 10
                 * pear.comments.fetch('task_3', null, 10).done(function (set) { 
                 *      
                 *      if (set.results > 0) {
                 *      
                 *          console.log(set.hits); 
                 *      
                 *      }
                 *      
                 * });
                 * 
                 * // select the next 10
                 * pear.comments.fetch('task_3', null, [10, 10]).done(function (set) { 
                 *      
                 *      if (set.results > 0) {
                 *      
                 *          console.log(set.hits); 
                 *      
                 *      }
                 *      
                 * });
                 * 
                 * // select a all, sort by created descending (Z-A)
                 * pear.comments.fetch('task_3', pear.orderBy.desc('created')).done(function (set) { 
                 *      
                 *      if (set.results > 0) {
                 *      
                 *          console.log(set.hits); 
                 *      
                 *      }
                 *      
                 * });
                 * 
                 * // select 10, sort by created ascending (A-Z)
                 * pear.comments.fetch('task_3', pear.orderBy.asc('created'), 10).done(function (set) { 
                 *      
                 *      if (set.results > 0) {
                 *      
                 *          console.log(set.hits); 
                 *      
                 *      }
                 *      
                 * });
                 */
                fetch: function (task, orderBy, limit) {
                    
                    return fetch(api.comments, 
                                 services.relative.comments + '/' + task,
                                 orderBy,
                                 limit)
                           // convert the date strings to Date objects
                          .pipe(function (set) {
                              
                              if (set.success) {
                                  
                                  for (var i = 0; i < set.results; i += 1) {
                                    
                                      dateParse(set.hits[i], ['created']);
                                       
                                  }

                              }
                              
                              return set;

                          });
                                        
                }
                
            }

        };
      
     /**
      * Hashes the string at the given property of the given object
      * and returns that object.
      * 
      * @private
      * 
      * @param {Object} object
      * @param {String} key
      * @param {Boolean} [required=false]
      * 
      * @returns {Object}
      */
     function hash (object, key, required) {
         
         if (api.utils.str.isNotEmpty(object[key])) {
                        
            object[key]                         = faultylabs.MD5(object[key]);
            
        } else if (!!required) {
            
            throw new Error('The property "' + key + '" is required!');
            
        }
        
        return object;
         
     }
     
     /**
      * Returns the non-empty string found at the
      * given property of the given object or throws an exception.
      * 
      * @private
      * 
      * @throws {Error} If the property is not found in the object or is not a non-empty string.
      * 
      * @param {Object} object
      * @param {String} key
      * @returns {String}
      */
     function strLookup (object, key) {
         
         if (api.utils.str.isNotEmpty(object[key])) {
                        
            var str                             = object[key];
            
            delete object[key];
            
            return str;

        }
        
        throw new Error('The property "' + key + '" is required!');
         
     }
     
     /**
      * Stringifies the Date instance at the given property of the given object
      * to a ISO 8601 2000 date string and add a Sling Date typehint for the
      * property in the object.
      * 
      * The conversion will occur if the object has the property and it is a Date instance.
      * If the property does is no defined, nothing will happen. 
      * If the property is defined, but it is a Date instance, an Exception will be thrown.
      * 
      * @private
      * 
      * @throws {Error} If the property is found in the object but is not Date instance.
      * 
      * @param {Object} object
      * @param {String[]} keys
      * 
      * @returns {Object}
      */
     function dateFormat (object, keys) {
         
         var count                              = keys.length,
             key,
             i;
     
         for (i = 0; i < count; i += 1) {
         
            key                                 = keys[i];
            
            if (object.hasOwnProperty(key)) {
                
               if (api.utils.is.date(object[key])) {

                   object[key]                  = moment(object[key])
                                                        .format(date.ISO_8601_2000);

                   object[(key + '@TypeHint')]  = 'Date';

               }
               else {

                   throw new Error('The property "' + key + '" must be a Date instance!');

               }

            }
             
         }
         
         return object;
         
     }
     
     /**
      * Parse the ISO 8601 2000 date string at the given property of the given object
      * to a JavaScript Date instance.
      * 
      * @private
      * 
      * @param {Object} object
      * @param {String[]} keys
      * 
      * @returns {Object}
      */
     function dateParse (object, keys) {
         
         var count                              = keys.length,
             key,
             i;
     
         for (i = 0; i < count; i += 1) {
         
            key                                 = keys[i];
            
            if (api.utils.str.isNotEmpty(object[key])) {
                
                try {
                    
                    object[key]                 = new Date(object[key]);
                    
                }
                catch (e) {}
                
            }
             
         }
         
         return object;
         
     }
     
     /**
      * Creates and saves a new node to the repository.
      * 
      * @private
      * 
      * @param {Object} promiseApi  Additional properties to add to the returned promise object.
      * @param {String} url
      * @param {String} nameHint
      * @param {Object} params
      * 
      * @returns {jQuery.promise}
      */
     function insert (promiseApi, url, nameHint, params) {
                    
        var promise                             = api.ajax({

            url         : url + '/',
            type        : http.POST,
            dataType    : 'text',
            data        : $.extend({
                
                            ":nameHint": nameHint,                
                            "jcr:primaryType" : "nt:unstructured"
                        
                          }, params)                        

        });

        return $.extend(promise.pipe(function (html) {
            
            return parseSlingChangeLog(html) || html;
                
        }), promiseApi);

    }
    
    /**
     * Updates and saves an existing node's data in the repository.
     * 
     * @private
     * 
     * @param {Object} promiseApi  Additional properties to add to the returned promise object.
     * @param {String} url
     * @param {Object} params
     * 
     * @returns {jQuery.promise}
     */
    function update (promiseApi, url, params) {

        var id,
            promise;

        if (params.hasOwnProperty('id')) {

            id                                  = '/' 
                                                + params.id,

            delete params.id;

        }

        if (params.hasOwnProperty(':name')) {

            id                                  = '/' 
                                                + params[':name'],

            delete params[':name'];

        }
        
        if (!id) {
            
            throw new Error('A ":name" property is required!');
            
        }

        promise                                 = api.ajax({

            url         : url.concat(id),
            type        : http.POST,
            dataType    : 'text',
            data        : params

        });

        return $.extend(promise.pipe(function (html) {
            
            return parseSlingChangeLog(html) || html;
                
        }), promiseApi);

    }
    
    /**
     * Removes nodes from the repository.
     * 
     * @private
     * 
     * @param {Object} promiseApi  Additional properties to add to the returned promise object.
     * @param {String} url
     * @param {String} path
     * @param {String|String[]|null|undefined} [idOrList]
     * 
     * @returns {jQuery.promise}
     */
    function remove (promiseApi, url, path, idOrList) {

        var iterator,
            options,
            length,
            notAll                              = !isSelectAll(idOrList);

        if (notAll) {

            if (!api.utils.is.array(idOrList)) {

                idOrList                        = [idOrList];

            }

            length                              = idOrList.length;

        }

        options                                 = {

            url         : url,
            type        : http.POST,
            dataType    : 'text',
            data        : {":operation": "delete"}

        };

        if (notAll) {

            for (iterator = 0; iterator < length; iterator += 1) {

                idOrList[iterator]              = path
                                                + '/'
                                                + idOrList[iterator];

            }

            options.data[":applyTo"]            = idOrList;

        }

        return $.extend(api.ajax(options).pipe(function (html) {
            
            return parseSlingChangeLog(html) || html;
                
        }), promiseApi);

    }
    
    /**
     * Returns one or many nodes from the repository as a JSON Object.
     * 
     * @private
     * 
     * @param {Object} promiseApi  Additional properties to add to the returned promise object.
     * @param {String} url
     * @param {String|String[]|null|undefined} [allOrIdOrList]
     * @param {Boolean} [count]
     * @param {Boolean} [infinity]
     * @param {Number|Number[]} [limit]
     * 
     * @returns {jQuery.promise}
     */
    function select (promiseApi, url, allOrIdOrList, count, infinity, limit) {

        var options                             = {

                url         : url.concat('.children.json'),
                type        : http.GET,
                cache       : false,
                dataType    : 'json'

            },

            query                               = {};

        count                                   = !!count;
        infinity                                = !!infinity;

        if (!isSelectAll(allOrIdOrList)) {

            if (!api.utils.is.array(allOrIdOrList)) {

                allOrIdOrList                   = [allOrIdOrList];

            }

            query["name.pattern"]               = allOrIdOrList.join('|');

        }

        if (infinity) {

            query.deep                          = infinity;

        }

        if (arguments.length > 3) {

            if (api.utils.is.array(limit)) {

                query.limit                     = limit.join(',');

            }
            else {

                query.limit                     = limit;

            }

        }

        if (!!count) {

            options.url                        += '/count';

        }

        options.data                            = query;

        return $.extend(api.ajax(options), promiseApi).pipe(function (result) {

            if (count) {

                return result.count;

            }

            return result;

        });

    }
    
    /**
     * Returns a result set of nodes from the repository.
     * 
     * @private
     * 
     * @param {Object} promiseApi
     * @param {String} path
     * @param {SortOrder} [orderBy]
     * @param {Number|Number[]} [limit]
     * 
     * @returns {jQuery.promise}
     */
    function fetch (promiseApi, path, orderBy, limit) {
            
        var promise,
            data                                = {

                "path"              : path,
                "p.hits"            : "full"

            };

            if (orderBy && !isSelectAll(orderBy)) {

                $.extend(data, orderBy);

            }

            if (api.utils.is.array(limit)) {

                if (limit.length > 1) {

                    data["p.offset"]            = limit[0];
                    data["p.limit"]             = limit[1];

                }
                else {

                    data["p.limit"]             = limit[0];

                }

            }
            else {

                data["p.limit"]                 = limit;

            }

        promise                                 = api.ajax({

            url         : config.origin
                        + slingQueryBuilder,
            type        : http.GET,
            cache       : false,
            dataType    : 'json',
            data        : data

        }).pipe(function (set) {

            var item,
                i;

            if (set.success) {

                for (i = 0; i < set.results; i += 1) {

                    item                        = set.hits[i];
                    item[':name']               = item['jcr:path'].split('/').pop();

                }

            }

            return set;                            

        });

        return $.extend(promise, promiseApi);

    }
    
    /**
     * Tells whether the value is null, undefined or "*".
     * @private
     * 
     * @param {*} value
     * @returns {Boolean}
     */
    function isSelectAll (value) {

         return value === api.ALL || api.utils.is.nothing(value);

    }

    /**
     * Compiles the web services URIs.
     * 
     * @private
     */
    function buildServiceURLs () {

        var base                                = config.context
                                                + config.data,
            i;

         services.relative.users                = base
                                                + config.users;

         services.relative.projects             = base
                                                + config.projects;

         services.relative.tasks                = base
                                                + config.tasks;
                                       
         services.relative.comments             = base
                                                + config.comments;
                                       
         for (i in services.relative) {
             
             if (services.relative.hasOwnProperty(i)) {
                 
                 services.absolute[i]           = config.origin
                                                + services.relative[i];
                 
             }
             
         }
         
    }
    
    /**
     * Checks whether two HTTP URL have different origins.
     * 
     * @private
     * @param {String} baseUrl          The main URL. It must be absolute (e.g. window.location.href)
     * @param {String} urlToCompare     The URL to compare to the main URL.
     *
     * @returns {Boolean}
     */
    function areCrossOriginUrls (baseUrl, urlToCompare) {

       var result                              = false,
           baseOrigin,
           compareOrigin;

       isHttpUrl.lastIndex                     = 0;

       if (isHttpUrl.test(baseUrl)) {

           isHttpUrl.lastIndex                 = 0;

           if (isHttpUrl.test(urlToCompare)) {

               baseOrigin                      = getHttpUrlOrigin(baseUrl);
               compareOrigin                   = getHttpUrlOrigin(urlToCompare);

               result                          =  removeHttpOriginPort(baseOrigin) !== removeHttpOriginPort(compareOrigin)
                                               || getHttpOriginPort(baseOrigin)    !== getHttpOriginPort(compareOrigin);

           }

       }            

       return result;

    }

    /**
     * Returns the origin component of an absolute HTTP URI.
     * 
     * @private
     * @param {String} url The URI
     * @return {String}
     */
    function getHttpUrlOrigin (url) {

       var pathIndex                           = url.indexOf('/', url.indexOf('//') + 2);

       return pathIndex !== -1 ? url.substring(0, pathIndex) : url;

    }

    /**
     * Extracts and returns the port number out of the given HTTP origin
     * even if it does not have an explicit port.
     * 
     * @private
     * @param {String} origin
     * @return {String}
     */
    function getHttpOriginPort (origin) {

       var portMatcher,
           port;

       httpOriginPort.lastIndex                = 0;

       portMatcher                             = httpOriginPort.exec(origin);

       if (portMatcher === null) {

           port                                = origin.toLowerCase().indexOf('http:') === 0 ? 80 : 443;

       }
       else {

           port                                = parseInt(portMatcher[1], 10);

       }

       return port > 0 && port < 65536 ? port : -1;

    }

    /**
     * Returns only the protocol and hostname of an
     * HTTP origin.
     * 
     * @private
     * @param {String} origin
     * @return {String}
     */
    function removeHttpOriginPort (origin) {

                                               // note that this will fail for ipv6 URIs
       var colonIndex                          = origin.indexOf(':', origin.indexOf('://') + 3);

       if (colonIndex === -1) {

           return origin;

       }

       return origin.substring(0, colonIndex);

    }
    
    /**
     * <p>Parses the HTML string returned by the Sling Post 
     * Servlet after a request into a JavaScript Object.</p>
     * 
     * <p>The properties of that object are usually:</p>
     * <p></p>
     * <pre>
     * {
     * 
     *      status          : {Number}, // HTTP Status of the operation
     *      referer         : {String}, // Value of HTTP referer header found in the original request
     *      message         : {String}, // Created|OK
     *      name            : {String}, // The name of node affected by the operation,
     *      path            : {String}, // The absolute path of the node affected by the operation
     *      location        : {String}, // Similar to "path" but, location is a normalized URL path component as opposed to a JCR path
     *      parentLocation  : {String}, // Similar to "location" but, parentLocation is the location of the parent of the affect node
     *      
     *      changeLog       : {Object}  {
     *      
     *          created     : {String|String[]}, // The absolute path of any created node
     *          deleted     : {String|String[]}, // The absolute path of any removed node
     *          modified    : {String|String[]}  // The absolute path of any modified node
     *      
     *      }
     *      
     * }
     * </pre>
     * 
     * @private
     * 
     * @param {String} html     The HTML string returned by the Sling Post Servlet after a request.
     * 
     * @returns {Object|null}   <code>null</code> is returned if the HTML is not parseable 
     *                          (e.g. A Java exception stack was returned);
     */
    function parseSlingChangeLog (html) {
        
        var result                              = null,
            change,
            match,
            index,
            tree,
            log;
        
        if (api.utils.str.isNotBlank(html)) {
            
            index                               = html.indexOf('<body');
            
            if (index !== -1) {
                
                html                            = html.substring(html.indexOf('>', index) + 1);
                html                            = html.substring(0, html.indexOf('</body>'));
                tree                            = $(html);
                
                change                          = {};
                result                          = {};
                
                tree.find('div[id]:not(#ChangeLog),a[id]').each(function () {
                    
                    var elem                    = $(this),
                        text                    = elem.text(),
                        name                    = elem.attr('id');
                                                
                                                // lower case first character only
                    name                        = name.charAt(0)
                                                      .toLowerCase()
                                                      .concat(name.substring(1));
                    
                    result[name]                = $.isNumeric(text) ? parseFloat(text) : text;
                    elem                        = null;
                    
                });
                
                if (result.hasOwnProperty('path')) {
                    
                    result.name                 = result.path.split('/').pop();
                            
                }
                
                log                             = tree.find('#ChangeLog').text();
                
                slingLogProperties.lastIndex    = 0;
                
                while (true) {
                    
                    match                       = slingLogProperties.exec(log);
                    
                    if (match === null) {
                        
                        break;
                        
                    }
                    
                    if (change.hasOwnProperty(match[1])) {
                        
                        if (api.utils.is.array(change[match[1]])) {
                            
                            change[match[1]].push(match[2]);
                            
                        }
                        else {
                            
                            change[match[1]]    = [change[match[1]], match[2]];
                            
                        }
                        
                    }
                    else {
                        
                        change[match[1]]        = match[2];
                        
                    }
                    
                }
                
                result.changeLog                = change;
                
            }
            
        }
        
        return result;
        
    }
    
    buildServiceURLs();
    
    $.ajaxSettings.traditional                  = true;
    
    return api;
 
});
