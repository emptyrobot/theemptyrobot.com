(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),o=r(a("VbXa")),s=r(a("8OQS")),u=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),l=function(e){var t=(0,u.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=T([].concat(t.fluid))),t.fixed&&(t.fixed=T([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(w&&!!window.matchMedia(t).matches)},h=function(e){var t=e.fluid,a=e.fixed,r=m(t||a||[]);return r&&r.src},m=function(e){if(w&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),p=function(e){var t=l(e),a=h(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,w="undefined"!=typeof window,v=w&&window.IntersectionObserver,y=new WeakMap;function x(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),a&&d.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function T(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function C(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function M(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",u=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?M(e,!0):"")+M(e)})).join("")+"<img "+d+o+s+a+r+t+i+n+u+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},P=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=d.default.createElement(E,(0,u.default)({ref:t,src:a},i,{ariaHidden:o}));return r.length>1?d.default.createElement("picture",null,n(r),s):s})),E=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,o=e.onLoad,c=e.onError,l=e.loading,f=e.draggable,h=e.ariaHidden,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,u.default)({"aria-hidden":h,sizes:a,srcSet:r,src:n},m,{onLoad:o,onError:c,ref:t,loading:l,draggable:f,style:(0,u.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));E.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var D=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=w&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||w&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=l(e),(a=h(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=l(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,h=e.placeholderClassName,g=e.fluid,p=e.fixed,b=e.backgroundColor,w=e.durationFadeIn,v=e.Tag,y=e.itemProp,T=e.loading,M=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,D=!0===this.state.fadeIn&&!this.state.imgCached,W=(0,u.default)({opacity:O?1:0,transition:D?"opacity "+w+"ms":"none"},s),j="boolean"==typeof b?"lightgray":b,U={transitionDelay:w+"ms"},L=(0,u.default)({opacity:this.state.imgLoaded?0:1},D&&U,s,f),z={title:t,alt:this.state.isVisible?"":a,style:L,className:h,itemProp:y};if(g){var N=g,q=m(g);return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,u.default)({position:"relative",overflow:"hidden",maxWidth:q.maxWidth?q.maxWidth+"px":null,maxHeight:q.maxHeight?q.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),j&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,u.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},D&&U)}),q.base64&&d.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:z,imageVariants:N,generateSources:C}),q.tracedSVG&&d.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:z,imageVariants:N,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,x(N),d.default.createElement(E,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:W,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:T,draggable:M})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,u.default)({alt:a,title:t,loading:T},q,{imageVariants:N}))}}))}if(p){var R=p,Y=m(p),H=(0,u.default)({position:"relative",overflow:"hidden",display:"inline-block",width:Y.width,height:Y.height},i);return"inherit"===i.display&&delete H.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(Y.srcSet)},j&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,u.default)({backgroundColor:j,width:Y.width,opacity:this.state.imgLoaded?0:1,height:Y.height},D&&U)}),Y.base64&&d.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:Y.base64,spreadProps:z,imageVariants:R,generateSources:C}),Y.tracedSVG&&d.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:Y.tracedSVG,spreadProps:z,imageVariants:R,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,x(R),d.default.createElement(E,{alt:a,title:t,width:Y.width,height:Y.height,sizes:Y.sizes,src:Y.src,crossOrigin:this.props.crossOrigin,srcSet:Y.srcSet,style:W,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:T,draggable:M})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,u.default)({alt:a,title:t,loading:T},Y,{imageVariants:R}))}}))}return null},t}(d.default.Component);D.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var W=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),j=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function U(e){return function(t,a,r){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((n={})[a]=e,n),t,"prop",r)}}D.propTypes={resolutions:W,sizes:j,fixed:U(c.default.oneOfType([W,c.default.arrayOf(W)])),fluid:U(c.default.oneOfType([j,c.default.arrayOf(j)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var L=D;t.default=L},j8Pq:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var r=a("iYmT"),n=a("wTIg"),i=a("sWYD"),o=a("Wbzz"),s=a("9eSz"),u=a.n(s),d=a("ufqH"),c=(a("q1tI"),a("qKvR")),l=a("LuW/");const f=({post:e,large:t=!1})=>{var a,n,s;const d=new Date(e.frontmatter.date),l=(Object(i.a)(d,"yyyy-MM-dd"),Object(i.a)(d,"dd LLL yyyy"),t?m:"");return Object(c.d)(o.a,{to:e.fields.slug,className:`post-card ${e.frontmatter.image?"":"no-image"} ${t?"post-card-large":""}`,css:Object(r.a)([h,t&&m])},Object(c.d)("article",{css:l},e.frontmatter.picture&&Object(c.d)("div",{className:"post-card-image-link",css:g},Object(c.d)(p,{className:"post-card-image"},(null===(a=e.frontmatter)||void 0===a||null===(n=a.picture)||void 0===n||null===(s=n.childImageSharp)||void 0===s?void 0:s.fixed)&&Object(c.d)(u.a,{alt:e.frontmatter.title+" cover image",style:{height:"100%"},fluid:e.frontmatter.picture.childImageSharp.fixed}))),Object(c.d)(b,{className:"post-card-content"},Object(c.d)("div",{className:"post-card-content-link",css:w},Object(c.d)(x,{className:"post-card-header"},Object(c.d)(v,{className:"post-card-title"},e.frontmatter.title)),Object(c.d)(y,{className:"post-card-excerpt"},Object(c.d)("p",null,e.frontmatter.excerpt||e.excerpt))))))},h={name:"1i87saz",styles:":hover{text-decoration:none;}position:relative;flex:1 1 301px;display:flex;flex-direction:column;overflow:hidden;min-height:220px;background-size:cover;padding:20px 20px 20px;margin:20px 20px 20px;@media (max-width:795px){margin:20px 0px 20px;}border-radius:10px;background:rgba(0,0,0,0.9);"},m={name:"pcmx47",styles:"@media (min-width:795px){display:flex;flex:1 1 100%;flex-direction:row;min-height:280px;border-top:0;:not(.no-image) .post-card-header{margin-top:0;}:not(.no-image) .post-card-content{margin-left:40px;}.post-card-image-link{position:relative;flex:1 1 auto;margin-bottom:0;min-height:380px;}.post-card-image{position:absolute;width:100%;height:100%;}.post-card-content{flex:0 1 361px;justify-content:center;}.post-card-title{margin-top:0;font-size:3.2rem;}.post-card-content-link{}.post-card-meta{padding:0 0 0 40px;}.post-card-excerpt p{margin-bottom:1.5em;font-size:1.8rem;line-height:1.5em;}}"},g={name:"kufnxr",styles:"position:relative;display:block;overflow:hidden;border-radius:5px 5px 0 0;"},p=Object(n.a)("div",{target:"e1e1bfvm0"})("width:auto;height:200px;background:",l.a.black," no-repeat center center;background-size:cover;.gatsby-image-wrapper{picture{img{object-fit:contain !important;filter:brightness(75%) !important;}}}"),b=Object(n.a)("div",{target:"e1e1bfvm1"})({name:"1dpoeqd",styles:"flex-grow:1;display:flex;flex-direction:column;padding:0 20px;"}),w=Object(c.c)("position:relative;display:block;color:",l.a.darkgrey,";:hover{text-decoration:none;}"),v=(Object(n.a)("div",{target:"e1e1bfvm2"})("margin:0 0 0.2em;color:",l.a.blue,";font-size:1.2rem;font-weight:500;letter-spacing:0.2px;text-transform:uppercase;"),Object(n.a)("h2",{target:"e1e1bfvm3"})({name:"1ew57e0",styles:"margin:0 0 0.4em;line-height:1.15em;transition:color 0.2s ease-in-out;color:rgba(255,255,255,0.85);"})),y=Object(n.a)("section",{target:"e1e1bfvm4"})("font-family:Georgia,serif;color:",Object(d.b)("0.1",l.a.midgrey)," !important;"),x=(Object(n.a)("footer",{target:"e1e1bfvm5"})({name:"al5rng",styles:"display:flex;align-items:flex-start;padding:0;"}),Object(n.a)("div",{target:"e1e1bfvm6"})("flex:1 1 50%;display:flex;flex-direction:column;margin:4px 0 0 10px;color:",Object(d.b)("0.1",l.a.midgrey),";font-size:1.2rem;line-height:1.4em;font-weight:400;letter-spacing:0.2px;text-transform:uppercase;span{margin:0;}a{color:",Object(d.b)("0.2",l.a.darkgrey),";font-weight:600;}a{color:rgba(255,255,255,0.75);}"),Object(n.a)("header",{target:"e1e1bfvm7"})({name:"9htq4g",styles:"margin:15px 0 0;"}));Object(d.b)("0.02",l.a.darkgrey),Object(d.b)("0.1",l.a.lightgrey),l.a.darkmode},sWYD:function(e,t,a){"use strict";function r(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function n(e){r(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function i(e){r(1,arguments);var t=n(e);return!isNaN(t)}a.d(t,"a",(function(){return _}));var o={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function s(e){return function(t){var a=t||{},r=a.width?String(a.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}var u={date:s({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:s({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:s({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},d={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function c(e){return function(t,a){var r,n=a||{};if("formatting"===(n.context?String(n.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=n.width?String(n.width):i;r=e.formattingValues[o]||e.formattingValues[i]}else{var s=e.defaultWidth,u=n.width?String(n.width):e.defaultWidth;r=e.values[u]||e.values[s]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function l(e){return function(t,a){var r=String(t),n=a||{},i=n.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],s=r.match(o);if(!s)return null;var u,d=s[0],c=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return u="[object Array]"===Object.prototype.toString.call(c)?function(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}(c,(function(e){return e.test(d)})):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}(c,(function(e){return e.test(d)})),u=e.valueCallback?e.valueCallback(u):u,{value:u=n.valueCallback?n.valueCallback(u):u,rest:r.slice(d.length)}}}var f,h={code:"en-US",formatDistance:function(e,t,a){var r;return a=a||{},r="string"==typeof o[e]?o[e]:1===t?o[e].one:o[e].other.replace("{{count}}",t),a.addSuffix?a.comparison>0?"in "+r:r+" ago":r},formatLong:u,formatRelative:function(e,t,a,r){return d[e]},localize:{ordinalNumber:function(e,t){var a=Number(e),r=a%100;if(r>20||r<10)switch(r%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},era:c({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:c({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:c({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:c({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:c({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(f={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var a=String(e),r=t||{},n=a.match(f.matchPattern);if(!n)return null;var i=n[0],o=a.match(f.parsePattern);if(!o)return null;var s=f.valueCallback?f.valueCallback(o[0]):o[0];return{value:s=r.valueCallback?r.valueCallback(s):s,rest:a.slice(i.length)}}),era:l({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:l({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:l({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:l({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:l({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function m(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function g(e,t){r(2,arguments);var a=n(e).getTime(),i=m(t);return new Date(a+i)}function p(e,t){r(2,arguments);var a=m(t);return g(e,-a)}function b(e,t){for(var a=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return a+r}var w={y:function(e,t){var a=e.getUTCFullYear(),r=a>0?a:1-a;return b("yy"===t?r%100:r,t.length)},M:function(e,t){var a=e.getUTCMonth();return"M"===t?String(a+1):b(a+1,2)},d:function(e,t){return b(e.getUTCDate(),t.length)},a:function(e,t){var a=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return a.toUpperCase();case"aaaaa":return a[0];case"aaaa":default:return"am"===a?"a.m.":"p.m."}},h:function(e,t){return b(e.getUTCHours()%12||12,t.length)},H:function(e,t){return b(e.getUTCHours(),t.length)},m:function(e,t){return b(e.getUTCMinutes(),t.length)},s:function(e,t){return b(e.getUTCSeconds(),t.length)},S:function(e,t){var a=t.length,r=e.getUTCMilliseconds();return b(Math.floor(r*Math.pow(10,a-3)),t.length)}};function v(e){r(1,arguments);var t=1,a=n(e),i=a.getUTCDay(),o=(i<t?7:0)+i-t;return a.setUTCDate(a.getUTCDate()-o),a.setUTCHours(0,0,0,0),a}function y(e){r(1,arguments);var t=n(e),a=t.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(a+1,0,4),i.setUTCHours(0,0,0,0);var o=v(i),s=new Date(0);s.setUTCFullYear(a,0,4),s.setUTCHours(0,0,0,0);var u=v(s);return t.getTime()>=o.getTime()?a+1:t.getTime()>=u.getTime()?a:a-1}function x(e){r(1,arguments);var t=y(e),a=new Date(0);a.setUTCFullYear(t,0,4),a.setUTCHours(0,0,0,0);var n=v(a);return n}function T(e,t){r(1,arguments);var a=t||{},i=a.locale,o=i&&i.options&&i.options.weekStartsOn,s=null==o?0:m(o),u=null==a.weekStartsOn?s:m(a.weekStartsOn);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=n(e),c=d.getUTCDay(),l=(c<u?7:0)+c-u;return d.setUTCDate(d.getUTCDate()-l),d.setUTCHours(0,0,0,0),d}function S(e,t){r(1,arguments);var a=n(e,t),i=a.getUTCFullYear(),o=t||{},s=o.locale,u=s&&s.options&&s.options.firstWeekContainsDate,d=null==u?1:m(u),c=null==o.firstWeekContainsDate?d:m(o.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(i+1,0,c),l.setUTCHours(0,0,0,0);var f=T(l,t),h=new Date(0);h.setUTCFullYear(i,0,c),h.setUTCHours(0,0,0,0);var g=T(h,t);return a.getTime()>=f.getTime()?i+1:a.getTime()>=g.getTime()?i:i-1}function C(e,t){r(1,arguments);var a=t||{},n=a.locale,i=n&&n.options&&n.options.firstWeekContainsDate,o=null==i?1:m(i),s=null==a.firstWeekContainsDate?o:m(a.firstWeekContainsDate),u=S(e,t),d=new Date(0);d.setUTCFullYear(u,0,s),d.setUTCHours(0,0,0,0);var c=T(d,t);return c}var M="midnight",O="noon",k="morning",P="afternoon",E="evening",D="night";function W(e,t){var a=e>0?"-":"+",r=Math.abs(e),n=Math.floor(r/60),i=r%60;if(0===i)return a+String(n);var o=t||"";return a+String(n)+o+b(i,2)}function j(e,t){return e%60==0?(e>0?"-":"+")+b(Math.abs(e)/60,2):U(e,t)}function U(e,t){var a=t||"",r=e>0?"-":"+",n=Math.abs(e);return r+b(Math.floor(n/60),2)+a+b(n%60,2)}var L={G:function(e,t,a){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return a.era(r,{width:"abbreviated"});case"GGGGG":return a.era(r,{width:"narrow"});case"GGGG":default:return a.era(r,{width:"wide"})}},y:function(e,t,a){if("yo"===t){var r=e.getUTCFullYear(),n=r>0?r:1-r;return a.ordinalNumber(n,{unit:"year"})}return w.y(e,t)},Y:function(e,t,a,r){var n=S(e,r),i=n>0?n:1-n;return"YY"===t?b(i%100,2):"Yo"===t?a.ordinalNumber(i,{unit:"year"}):b(i,t.length)},R:function(e,t){return b(y(e),t.length)},u:function(e,t){return b(e.getUTCFullYear(),t.length)},Q:function(e,t,a){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return b(r,2);case"Qo":return a.ordinalNumber(r,{unit:"quarter"});case"QQQ":return a.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,a){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return b(r,2);case"qo":return a.ordinalNumber(r,{unit:"quarter"});case"qqq":return a.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,a){var r=e.getUTCMonth();switch(t){case"M":case"MM":return w.M(e,t);case"Mo":return a.ordinalNumber(r+1,{unit:"month"});case"MMM":return a.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,a){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return b(r+1,2);case"Lo":return a.ordinalNumber(r+1,{unit:"month"});case"LLL":return a.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,a,i){var o=function(e,t){r(1,arguments);var a=n(e),i=T(a,t).getTime()-C(a,t).getTime();return Math.round(i/6048e5)+1}(e,i);return"wo"===t?a.ordinalNumber(o,{unit:"week"}):b(o,t.length)},I:function(e,t,a){var i=function(e){r(1,arguments);var t=n(e),a=v(t).getTime()-x(t).getTime();return Math.round(a/6048e5)+1}(e);return"Io"===t?a.ordinalNumber(i,{unit:"week"}):b(i,t.length)},d:function(e,t,a){return"do"===t?a.ordinalNumber(e.getUTCDate(),{unit:"date"}):w.d(e,t)},D:function(e,t,a){var i=function(e){r(1,arguments);var t=n(e),a=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var i=t.getTime(),o=a-i;return Math.floor(o/864e5)+1}(e);return"Do"===t?a.ordinalNumber(i,{unit:"dayOfYear"}):b(i,t.length)},E:function(e,t,a){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return a.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(r,{width:"short",context:"formatting"});case"EEEE":default:return a.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,a,r){var n=e.getUTCDay(),i=(n-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return b(i,2);case"eo":return a.ordinalNumber(i,{unit:"day"});case"eee":return a.day(n,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(n,{width:"short",context:"formatting"});case"eeee":default:return a.day(n,{width:"wide",context:"formatting"})}},c:function(e,t,a,r){var n=e.getUTCDay(),i=(n-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return b(i,t.length);case"co":return a.ordinalNumber(i,{unit:"day"});case"ccc":return a.day(n,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(n,{width:"narrow",context:"standalone"});case"cccccc":return a.day(n,{width:"short",context:"standalone"});case"cccc":default:return a.day(n,{width:"wide",context:"standalone"})}},i:function(e,t,a){var r=e.getUTCDay(),n=0===r?7:r;switch(t){case"i":return String(n);case"ii":return b(n,t.length);case"io":return a.ordinalNumber(n,{unit:"day"});case"iii":return a.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(r,{width:"short",context:"formatting"});case"iiii":default:return a.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,a){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,a){var r,n=e.getUTCHours();switch(r=12===n?O:0===n?M:n/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,a){var r,n=e.getUTCHours();switch(r=n>=17?E:n>=12?P:n>=4?k:D,t){case"B":case"BB":case"BBB":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,a){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),a.ordinalNumber(r,{unit:"hour"})}return w.h(e,t)},H:function(e,t,a){return"Ho"===t?a.ordinalNumber(e.getUTCHours(),{unit:"hour"}):w.H(e,t)},K:function(e,t,a){var r=e.getUTCHours()%12;return"Ko"===t?a.ordinalNumber(r,{unit:"hour"}):b(r,t.length)},k:function(e,t,a){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?a.ordinalNumber(r,{unit:"hour"}):b(r,t.length)},m:function(e,t,a){return"mo"===t?a.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):w.m(e,t)},s:function(e,t,a){return"so"===t?a.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):w.s(e,t)},S:function(e,t){return w.S(e,t)},X:function(e,t,a,r){var n=(r._originalDate||e).getTimezoneOffset();if(0===n)return"Z";switch(t){case"X":return j(n);case"XXXX":case"XX":return U(n);case"XXXXX":case"XXX":default:return U(n,":")}},x:function(e,t,a,r){var n=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return j(n);case"xxxx":case"xx":return U(n);case"xxxxx":case"xxx":default:return U(n,":")}},O:function(e,t,a,r){var n=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+W(n,":");case"OOOO":default:return"GMT"+U(n,":")}},z:function(e,t,a,r){var n=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+W(n,":");case"zzzz":default:return"GMT"+U(n,":")}},t:function(e,t,a,r){var n=r._originalDate||e;return b(Math.floor(n.getTime()/1e3),t.length)},T:function(e,t,a,r){return b((r._originalDate||e).getTime(),t.length)}};function z(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function N(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var q={p:N,P:function(e,t){var a,r=e.match(/(P+)(p+)?/),n=r[1],i=r[2];if(!i)return z(e,t);switch(n){case"P":a=t.dateTime({width:"short"});break;case"PP":a=t.dateTime({width:"medium"});break;case"PPP":a=t.dateTime({width:"long"});break;case"PPPP":default:a=t.dateTime({width:"full"})}return a.replace("{{date}}",z(n,t)).replace("{{time}}",N(i,t))}};function R(e){return e.getTime()%6e4}function Y(e){var t=new Date(e.getTime()),a=Math.ceil(t.getTimezoneOffset());return t.setSeconds(0,0),6e4*a+(a>0?(6e4+R(t))%6e4:R(t))}var H=["D","DD"],I=["YY","YYYY"];function G(e){return-1!==H.indexOf(e)}function V(e){return-1!==I.indexOf(e)}function F(e,t,a){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(a,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(a,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(a,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(a,"`; see: https://git.io/fxCyr"))}var X=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,B=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Q=/^'([^]*?)'?$/,A=/''/g,J=/[a-zA-Z]/;function _(e,t,a){r(2,arguments);var o=String(t),s=a||{},u=s.locale||h,d=u.options&&u.options.firstWeekContainsDate,c=null==d?1:m(d),l=null==s.firstWeekContainsDate?c:m(s.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=u.options&&u.options.weekStartsOn,g=null==f?0:m(f),b=null==s.weekStartsOn?g:m(s.weekStartsOn);if(!(b>=0&&b<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!u.localize)throw new RangeError("locale must contain localize property");if(!u.formatLong)throw new RangeError("locale must contain formatLong property");var w=n(e);if(!i(w))throw new RangeError("Invalid time value");var v=Y(w),y=p(w,v),x={firstWeekContainsDate:l,weekStartsOn:b,locale:u,_originalDate:w},T=o.match(B).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,q[t])(e,u.formatLong,x):e})).join("").match(X).map((function(a){if("''"===a)return"'";var r=a[0];if("'"===r)return $(a);var n=L[r];if(n)return!s.useAdditionalWeekYearTokens&&V(a)&&F(a,t,e),!s.useAdditionalDayOfYearTokens&&G(a)&&F(a,t,e),n(y,a,u.localize,x);if(r.match(J))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return a})).join("");return T}function $(e){return e.match(Q)[1].replace(A,"'")}}}]);
//# sourceMappingURL=69d88b842b20ddeedd2f3f4a509f97db14de8783-0d5c64061ba1481983cf.js.map