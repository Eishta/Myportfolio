(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{32:function(e,t,n){"use strict";n.r(t);var a=n(5),s=n(6),i=n(8),r=n(7),c=n(9),o=n(0),u=n.n(o),p=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(r.a)(t).call(this,e))).setSpans=function(){var e=n.imageRef.current.clientHeight/20;n.setState({spans:e})},n.state={spans:0},n.imageRef=u.a.createRef(),n}return Object(c.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var e=this.props.image,t=e.description,n=e.urls;return u.a.createElement("div",{style:{gridRowEnd:"span ".concat(this.state.spans)}},u.a.createElement("img",{ref:this.imageRef,src:n.regular,alt:t}))}}]),t}(u.a.Component);t.default=p}}]);
//# sourceMappingURL=23.b3ed56d3.chunk.js.map