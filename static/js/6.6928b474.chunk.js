(window.webpackJsonp=window.webpackJsonp||[]).push([[6,14,16,17,25],{14:function(e,t,r){"use strict";r.r(t);var a=r(3),n=r(4),u=r(6),c=r(5),i=r(7),s=r(0),o=r.n(s),l=(r(61),r(34)),d=r(35),h=r(122),f=r(121),b=Object(h.a)(f.a,{}),p=function(e){function t(e){var r;return Object(a.a)(this,t),(r=Object(u.a)(this,Object(c.a)(t).call(this,e))).handleClick=function(e){switch(e){case"=":var t=r.state.output;if(Number.isNaN(Number(t.slice(-1,t.length))))break;var a=b.evaluate(r.state.output);r.setState({output:a});break;case"C":r.setState({output:""});break;case"<=":r.setState(function(e){return{output:e.output.substring(0,e.output.length-1)}});break;case".":case"+":case"-":case"*":case"/":case"%":var n=r.state.output;if(Number.isNaN(Number(n.slice(-1,n.length))))break;r.setState(function(t){return{output:t.output.concat(e)}});break;default:r.setState(function(t){return{output:t.output.concat(e)}})}},r.state={output:""},r}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container",id:"background"},o.a.createElement("div",null,o.a.createElement(d.default,{value:this.state.output}),o.a.createElement(l.default,{onClick:function(t){e.handleClick(t)}})))}}]),t}(o.a.Component);t.default=p},31:function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return u});var a=r(0),n=r.n(a);function u(e){return n.a.createElement("button",{className:"buttonKey",onClick:e.onClick},e.value)}},34:function(e,t,r){"use strict";r.r(t);var a=r(3),n=r(4),u=r(6),c=r(5),i=r(7),s=r(0),o=r.n(s),l=r(31),d=function(e){function t(){return Object(a.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"renderSqaure",value:function(e){var t=this;return o.a.createElement(l.default,{onClick:function(){return t.props.onClick(e)},value:e})}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,this.renderSqaure("C"),this.renderSqaure("<="),this.renderSqaure("%"),this.renderSqaure("/"),this.renderSqaure(7),this.renderSqaure(8),this.renderSqaure(9),this.renderSqaure("*"),this.renderSqaure(4),this.renderSqaure(5),this.renderSqaure(6),this.renderSqaure("-"),this.renderSqaure(1),this.renderSqaure(2),this.renderSqaure(3),this.renderSqaure("+"),this.renderSqaure("."),this.renderSqaure(0),this.renderSqaure("="))}}]),t}(o.a.Component);t.default=d},35:function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return u});var a=r(0),n=r.n(a);function u(e){return n.a.createElement("input",{type:"text",className:"result",name:"answer",value:e.value})}},61:function(e,t,r){}}]);
//# sourceMappingURL=6.6928b474.chunk.js.map