(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[713],{18684:(e,t,a)=>{"use strict";a.d(t,{k:()=>c});var n=a(27378),s=a.n(n),i=a(53177);const r="x-copyrights-copyrights",c=({copyrights:e})=>{const t=(e||[]).map(((e,t)=>{const a=e.text.replace(/^(\(C\)\s+)/,"").replace(/^(\(P\)\s+)/,"").replace(/^(©\s+)/,"").replace(/^(℗\s+)/,"");let n;return n="C"===e.type?"©":"P"===e.type?"℗":`(${e.type})`,s().createElement(i.Dy,{as:"p",variant:i.Dy.finale,key:t,dir:"auto"},`${n} ${a}`)}));return s().createElement("div",{className:r},t)}},33430:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Show:()=>Ne,default:()=>De});var n=a(27378),s=a.n(n),i=a(11700),r=a(41056),c=a(79308),o=a(80406),l=a(61043),d=a(18684),m=a(1292),u=a(15941),f=a(23301),p=a(26713),g=a(71338),b=a(11111),y=a(56958),E=a(60042),h=a.n(E),v=a(40079),w=a(67625),k=a(42271),x=a(34907),C=a(41113),O=a(43031),I=a(91030),P=a(19369),S=a(39551),N=a(37539);const D={xs:"(min-width: 0px)",xsOnly:"(min-width: 0px) and (max-width: 767px)",sm:"(min-width: 768px)",smOnly:"(min-width: 768px) and (max-width: 1023px)",md:"(min-width: 1024px)",mdOnly:"(min-width: 1024px) and (max-width: 1279px)",lg:"(min-width: 1280px)",lgOnly:"(min-width: 1280px) and (max-width: 1919px)",xl:"(min-width: 1920px)",container:"show-showEntityHeader-container",smallHeader:"show-showEntityHeader-smallHeader",imageContainer:"show-showEntityHeader-imageContainer",headerText:"show-showEntityHeader-headerText"};var M=a(53177),B=a(81105);const _=e=>{switch(e){case O.f.MOBILE:return C.m$.SIZE_112;case O.f.SMALL:return C.m$.SIZE_200;default:return C.m$.SIZE_232}},A=({uri:e,backgroundColor:t,backgroundImages:a,size:i,data:r,onPlayClick:c,isPlaying:o,isPlayDisabled:l=!1,actionBarHeader:d,actionBarButtons:m,playButtonWrapper:u=null,contextMenuWrapper:f=B.j})=>{const p=(0,n.useRef)(null),{imageUrl:g}=(0,v.f)(a,p),b=s().createElement(S.JM,{size:S.qE.lg,onClick:c,isPlaying:o}),y=u?u(b):b;return s().createElement(s().Fragment,null,s().createElement("div",{"data-testid":"header",ref:p,style:{backgroundColor:t},className:h()(N.Z.container,D.container,N.Z.overlay,D.overlay,{[N.Z.withBackgroundImage]:g,[N.Z.smallHeader]:i===O.f.MOBILE,[D.smallHeader]:i===O.f.MOBILE})},s().createElement(w.Du,null,s().createElement(S.JM,{size:S.qE.sm,onClick:c,isPlaying:o,disabled:l}),s().createElement(w.yZ,{text:r.title})),s().createElement(f,{uri:e,contextUri:e},s().createElement(x.O,{size:_(i),type:r.type,images:r.images,title:r.title,shape:x.K.ROUNDED_CORNERS,className:D.imageContainer})),s().createElement("div",{className:D.headerText},i!==O.f.MOBILE&&s().createElement(M.Dy.p,{variant:M.$e.minuetBold},r.displayType),s().createElement(f,{uri:e,contextUri:e},s().createElement(k.xd,{size:i===O.f.MOBILE?P.Jj.SMALL:P.Jj.LARGE},r.title)),s().createElement(k.dy,{medium:i===O.f.SMALL,large:i===O.f.LARGE,bold:i!==O.f.MOBILE},r.subtitle))),s().createElement(I.o,{backgroundColor:t,size:i===O.f.MOBILE?I.m.SMALL:I.m.LARGE,playButton:i===O.f.MOBILE?null:y,header:d,secondaryActionButtons:m}))};var L=a(60858),U=a(87126),R=a(92416),Z=a(96415),$=a(7593),z=a(65526),j=a.n(z),T=a(66583),G=a(76638),W=a(42658),H=a(53877),q=a(57262),F=a(80296),J=a(70568),K=a(60725),X=a(65296),V=a(66917),Y=a.n(V),Q=a(8557),ee=a(21114),te=a(82075),ae=a(2146);var ne=a(51707),se=a(65288),ie=a(54753),re=a(27599);function ce(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function oe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(a),!0).forEach((function(t){j()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ce(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const le=s().memo((({index:e,uid:t,showName:a,showUri:i,episode:r,sortedBy:o,filteredBy:l})=>{var d,m,u,f;const p=null===(d=(0,c.oR)().getState().platform)||void 0===d?void 0:d.isBrowser,g=1e3*r.playedState.playPosition,y=r.uri,E={uid:t,uri:y,contextUri:i},[h,v]=(0,n.useState)(r.playedState.state===G.sY.Completed),w=(0,T.O1)(),k=(0,c.v9)(ae.Gg).isAnonymous,x=(0,se.jh)(),C=(0,b.o)(),O=(0,H.cq)(oe(oe({},E),{},{index:e,sortedBy:o,filteredBy:l})),I=(0,H.wD)(E,(0,q.wm)(r)),P=(0,n.useCallback)((e=>{if(r.type===G.Wf.Episode&&p)return void Q.y.set((()=>({triggerId:`activation-trigger-mme${r.uri}`,triggerAction:null})));const t={interactionType:"click",onLogInteraction:C};k?I(e,t):O(e,t)}),[I,O,C,k,r,p]),S=(0,n.useCallback)((()=>{C({type:"click",targetUri:y,intent:"navigate"})}),[y,C]),N=(0,c.v9)(H.Ys),D=!(0,c.v9)(H.Me),M=(0,c.v9)(H.fL),{badges:B}=(0,F.r)({contentRating:null===(m=r.contentRating)||void 0===m?void 0:m.label}),_=(0,n.useCallback)((e=>r.type!==G.Wf.Episode&&p?e:s().createElement(X.c,{id:`activation-trigger-mme${y}`,targetURI:Y().from(y)},e)),[y,r.type,p]);return s().createElement($.ZP,{value:"row",index:e},s().createElement(ee._,{menu:s().createElement(te.k,{uri:y,showUri:i,sharingInfo:r.sharingInfo,isPlayed:h,onMarkAsPlayed:v})},s().createElement(W.X,{index:e,uri:y,uid:t,size:x,images:(null===(u=r.coverArt)||void 0===u?void 0:u.sources)||[],name:r.name,description:r.description,isPlayable:r.playability.playable,fullyPlayed:h,durationMs:r.duration.totalMilliseconds,releaseDate:(null===(f=r.releaseDate)||void 0===f?void 0:f.isoString)||"",resumePositionMs:g,handleDragStart:e=>{if(e.target!==e.currentTarget)return;const t=`${r.name} · ${a}`;w(e,[y],t,i)},handlePlaybackClick:P,handleClick:S,activeTrackUri:N,isPlaying:D,position:M,badges:s().createElement(s().Fragment,null,B.explicit&&s().createElement(J.N,null),B.nineteen&&s().createElement(K.X,{size:16})),playButtonWrapper:_,actionButtons:s().createElement(ne.K,{episodeUri:y,showUri:i,sharingInfo:r.sharingInfo}),topActionButtons:s().createElement(re.y,{menu:s().createElement(te.k,{uri:y,showUri:i,sharingInfo:r.sharingInfo,isPlayed:h,onMarkAsPlayed:v})},s().createElement(ie.z,null))})))}));var de=a(40893),me=a(32306);const ue=s().memo((({showName:e,showUri:t,sortedBy:a,filteredBy:i})=>{const r=(0,me.ZM)(t),c=(0,n.useCallback)((({uid:n,episode:r},c)=>s().createElement(le,{key:`${r.uri}/${c}`,index:c,uid:n,episode:r,showName:e,showUri:t,sortedBy:a,filteredBy:i})),[e,t,a,i]),{ref:o,breakpoint:l}=(0,se.Db)({[se.Uo.MEDIUM]:510,[se.Uo.LARGE]:600});return s().createElement(se.ZU.Provider,{value:l},s().createElement($.ZP,{value:"track-list"},s().createElement(de.k,{showUri:t,ref:o,renderRow:c,fetchEpisodes:r})))}));var fe=a(2031);const pe={container:"show-trailer-container",isActive:"show-trailer-isActive",title:"show-trailer-title",main:"show-trailer-main",titleContainer:"show-trailer-titleContainer",duration:"show-trailer-duration",trailerContainer:"show-trailer-trailerContainer",image:"show-trailer-image",imageContainer:"show-trailer-imageContainer",playButton:"show-trailer-playButton",entityImageLarge:"show-trailer-entityImageLarge",entityImageSmall:"show-trailer-entityImageSmall"};var ge=a(43186),be=a(29660);let ye;!function(e){e.SMALL="small",e.LARGE="large"}(ye||(ye={}));const Ee=({images:e,title:t,contentRating:a,duration:n,moreButton:i,onClick:r,onContextMenu:c,onTouchStart:o,onTouchEnd:d,isPlaying:m,isActive:u,size:f,className:p})=>{const g=f===ye.LARGE?S.qE.md:S.qE.sm,{badges:b}=(0,F.r)({contentRating:a});return s().createElement("div",{"data-testid":"trailer-component",className:h()(pe.container,p,{[pe.isActive]:u}),onContextMenu:c,onTouchStart:o,onTouchEnd:d},s().createElement("div",{className:pe.main},s().createElement("div",{className:pe.imageContainer},s().createElement(x.O,{type:fe.p.EPISODE,title:t,className:h()(pe.image,{[pe.entityImageSmall]:f===ye.SMALL,[pe.entityImageLarge]:f===ye.LARGE}),size:C.m$.SIZE_56,images:e,shape:x.K.ROUNDED_CORNERS}),s().createElement("div",{className:pe.playButton},s().createElement(S.JM,{"data-testid":"trailer-play-button",version:S.ul.transparent,size:g,isPlaying:m,onClick:r}))),s().createElement("div",{className:pe.metadata},s().createElement("div",{className:pe.titleContainer},s().createElement(M.Dy,{dir:"auto",className:pe.title,variant:M.$e.balladBold},t)),s().createElement("div",{className:pe.trailerContainer},s().createElement(be.V,{text:l.ag.get("track-trailer")}),b.explicit&&s().createElement(J.N,null),b.nineteen&&s().createElement(K.X,null),s().createElement(M.Dy,{dir:"auto",variant:M.$e.mesto},s().createElement(ge.n,{durationMs:n}))))),i)};var he=a(45572),ve=a(82385),we=a(53267),ke=a(30788),xe=a(48578);const Ce=s().memo((e=>{const{uri:t}=e,{sortParamMap:a,getSortParam:i,setSortParam:r}=(0,me.uM)(t),c=i(),o=Array.from(a.values()),l=Array.from(a.keys()),d=(0,n.useCallback)((e=>{const t=l.find((t=>{var n;return(null===(n=a.get(t))||void 0===n?void 0:n.key)===e}));t&&r(t)}),[r,l,a]);if(!a.size||!c)return null;const m=Array.from(a.keys()).find((e=>e.field===c.field&&e.order===c.order)),u=a.get(m);return s().createElement(xe.A,{options:o,onSelect:e=>d(e),selected:u})}));var Oe=a(46027);const Ie=({children:e,uri:t})=>s().createElement(ee._,{menu:s().createElement(he.M,{uri:t})},e),Pe=(0,o.P1)(R.MQ,((e,t)=>t),((e,t)=>e[t])),Se=(0,o.P1)(R.$J,((e,t)=>t),((e,t)=>e[t])),Ne=e=>{var t,a,r,o;const{uri:E,showId:h}=e,v=(0,c.I0)(),w=(0,b.o)(),k=!(0,y.k)(),x=(0,c.v9)((e=>Pe(e,E))),C=(0,c.v9)((e=>Se(e,E))),{canSort:I}=(0,me.uM)(E),{playerSort:P,playerFilter:S,showFirstEpisode:N}=(0,me.x3)(E),D=(0,c.v9)(Z.dO),B=D.isPlaying&&D.contextURI===E,_=null==x||null===(t=x.images)||void 0===t||null===(a=t[0])||void 0===a?void 0:a.url,R=(0,ve.Z)(_||null);(0,n.useEffect)((()=>{if(!x||(0,ke.YK)(x))return void v((0,u.AN)(h));const{name:e}=x;v((0,g.Dk)(l.ag.get("podcasts.show.seo.title",{name:e})))}),[v,x,h]),(0,n.useEffect)((()=>{"boolean"!=typeof C&&v((0,u.PA)(E))}),[v,E,C]);const $=(0,n.useCallback)((()=>{w({targetUri:E,intent:C?"unsave":"save",type:"click"}),v(C?(0,p.Bn)(E):(0,p.PJ)(E))}),[v,w,E,C]),z=(0,n.useCallback)((()=>{w({intent:"expand-description",type:"click"})}),[w]),j=null===(r=(0,c.oR)().getState().platform)||void 0===r?void 0:r.isBrowser,T=(null==x?void 0:x.trailer)||null,G=(0,n.useCallback)((()=>{w({targetUri:E,intent:B?"pause":"play",type:"click",itemIdSuffix:"button"}),"SHOW"===(null==x?void 0:x.showType)&&j?Q.y.set((()=>({triggerId:`activation-trigger-mme${E}`,triggerAction:null}))):v((0,f.uR)(E,N?(0,q.wm)(N):void 0,P,S))}),[v,w,E,B,null==x?void 0:x.showType,j,N,P,S]),W=(null==x||null===(o=x.episodes)||void 0===o?void 0:o.total)||0,F=D.trackURI===(null==T?void 0:T.uri),J=D.isPlaying&&F,K=0===W,V=(0,H.cq)({contextUri:null==x?void 0:x.uri,uri:(null==T?void 0:T.uri)||E}),ae=(0,n.useCallback)((e=>{V(e,{interactionType:"click",onLogInteraction:w})}),[V,w]),ne=(0,n.useMemo)((()=>({title:null==x?void 0:x.name,subtitle:null==x?void 0:x.publisher,images:null==x?void 0:x.images,type:fe.p.SHOW,displayType:"SHOW"===(null==x?void 0:x.showType)?l.ag.get("type.show"):l.ag.get("type.podcast")})),[x]),{isXSOnly:se,isSMOnly:ce}=(0,we.e)(),oe=se||ce,le=(0,n.useMemo)((()=>x?s().createElement(d.k,{copyrights:x.copyrights||[]}):null),[x]),de=(0,n.useCallback)((e=>"SHOW"===(null==x?void 0:x.showType)||j?s().createElement(X.c,{id:`activation-trigger-mme${null==x?void 0:x.uri}`,targetURI:Y().from(null==x?void 0:x.uri)},e):e),[null==x?void 0:x.uri,null==x?void 0:x.showType,j]),pe=(0,n.useMemo)((()=>x?s().createElement(A,{uri:x.uri,backgroundColor:R,data:ne,size:oe?O.f.SMALL:O.f.LARGE,onPlayClick:G,isPlaying:B,isPlayDisabled:K,playButtonWrapper:de,contextMenuWrapper:Ie,actionBarButtons:[s().createElement(Oe.r,{key:"follow-button"},s().createElement(m.e,{isFollowing:C,onClick:$,disabled:k})),s().createElement(re.y,{key:"more-button",menu:s().createElement(he.M,{uri:E,sharingInfo:x.sharingInfo})},s().createElement(ie.z,null))]}):null),[x,R,ne,G,$,C,k,B,oe,K,E,de]),ge=(0,n.useCallback)((e=>s().createElement("section",{className:i.Z.ShowPage},pe,s().createElement("div",{className:i.Z.ShowContent},s().createElement("div",{className:i.Z.metadata},x&&x.description&&s().createElement(s().Fragment,null,s().createElement(M.Dy,{as:"h3",variant:M.$e.canon,color:"var(--spice-text)",className:i.Z.sectionTitle},l.ag.get("artist.about")),s().createElement(U.o,{className:i.Z.contentDescription,maxLines:4,content:(x.description||"").trim(),onExpanded:z})),T&&s().createElement(ee._,{menu:s().createElement(te.k,{uri:T.uri,showUri:x.uri,sharingInfo:T.sharingInfo})},s().createElement(Ee,{className:i.Z.trailer,images:T.images,title:T.name,duration:T.duration_ms,moreButton:s().createElement(re.y,{menu:s().createElement(te.k,{uri:T.uri,sharingInfo:T.sharingInfo,showUri:x.uri})},s().createElement(ie.z,null)),onClick:ae,isPlaying:J,isActive:F,size:ye.LARGE,contentRating:T.contentRating}))),s().createElement("div",{className:i.Z.episodes,"data-testid":"show-all-episode-list"},s().createElement("div",{className:i.Z.episodesHeader},s().createElement(M.Dy,{as:"h3",variant:M.$e.canon,color:"var(--spice-text)",className:i.Z.sectionTitle},l.ag.get("mwp.podcast.all.episodes")),I&&s().createElement("div",{className:i.Z.episodesSort},s().createElement(Ce,{uri:E}))),e),le))),[x,T,pe,le,F,J,z,ae,I,E]);return x?ge(s().createElement(ue,{showName:x.name,showUri:x.uri,sortedBy:P,filteredBy:S})):s().createElement(L.h,{errorMessage:l.ag.get("error.not_found.title.podcast")})},De=s().memo((()=>{const{showId:e}=(0,r.UO)(),t=`spotify:show:${e}`;return s().createElement(Ne,{uri:t,showId:e})}))},51707:(e,t,a)=>{"use strict";a.d(t,{K:()=>w});var n=a(27378),s=a.n(n),i=a(60042),r=a.n(i),c=a(11700);const o="show-shareButton-button";var l=a(61043),d=a(73631),m=a(75222),u=a(30592),f=a(62351);const p=s().memo((({onClick:e=(()=>{}),size:t=24,className:a,uri:i,sharingInfo:c,interactionData:p})=>{const{onCopyLink:g}=(0,u.y)({sharingInfo:c,uri:i,interactionData:p}),b=(0,n.useCallback)((()=>{g(),e()}),[e,g]);return s().createElement(f.u,{label:l.ag.get("mwp.list.item.share")},s().createElement(m.E,{ariaLabel:l.ag.get("mwp.list.item.share"),size:t,onClick:b,className:r()(o,a)},s().createElement(d.M,{iconSize:t})))}));var g=a(17113),b=a(14105),y=a(40980),E=a(85349),h=a(48896);const v={intent:"share",type:"click",itemIdSuffix:"contextmenu/episode/share"},w=s().memo((({episodeUri:e,showUri:t,sharingInfo:a})=>{const{useDownloading:i}=(0,n.useContext)(y.I),{currentAvailability:o}=i(e),l=[E.V8.YES,E.V8.DOWNLOADING,E.V8.WAITING].includes(o),d=(0,n.useMemo)((()=>s().createElement(b.p,{uri:e,showUri:t,className:r()({[c.Z.visibleDownloadButton]:l})})),[e,t,l]),m=(0,n.useMemo)((()=>s().createElement(p,{uri:e,sharingInfo:a,interactionData:v})),[e,a]),u=(0,n.useMemo)((()=>s().createElement(g.w,{uri:e,size:h.q.md,className:c.Z.saveButton})),[e]);return s().createElement(s().Fragment,null,m,d,u)}))},48578:(e,t,a)=>{"use strict";a.d(t,{A:()=>f});var n=a(27378),s=a.n(n),i=a(60042),r=a.n(i);const c={sortDropdown:"x-sortBox-sortDropdown",sortDropdownChanged:"x-sortBox-sortDropdownChanged",dropdownItem:"_412c9016173a00119079f27f88da89ea-scss",dropdownItemSelected:"_56266c60cafad920f6b3f6fc18ba30ed-scss"};var o=a(1041),l=a(53177),d=a(55357),m=a(84638),u=a(78052);const f=({options:e,selected:t,onSelect:a,isSelectionChanged:n})=>{const[i]=e,f=e.map((({key:e,value:n})=>{const i=e===t.key;return s().createElement(o.hP,{className:r()(c.dropdownItem,{[c.dropdownItemSelected]:i}),key:e,onClick:()=>a(e)},s().createElement(l.Dy,{variant:l.Dy.mesto},n),i&&s().createElement(d.R,{iconSize:16}))})),p=n?n(t):t!==i;return s().createElement(o.Lt,{items:f,render:(e,a)=>s().createElement("button",{className:r()(c.sortDropdown,{[c.sortDropdownChanged]:p,[c.boxActive]:e}),type:"button",onClick:a,"aria-expanded":e},s().createElement(l.Dy,{variant:l.Dy.mesto},t.value),e?s().createElement(m.q,{iconSize:16}):s().createElement(u.m,{iconSize:16}))})}},1292:(e,t,a)=>{"use strict";a.d(t,{e:()=>m});var n=a(27378),s=a.n(n),i=a(61043),r=a(60042),c=a.n(r);const o="show-followButton-button",l="show-followButton-isFollowing",d="show-followButton-disabled",m=s().memo((({isFollowing:e,onClick:t,disabled:a=!1})=>{const n=e?i.ag.get("following"):i.ag.get("follow");return s().createElement("button",{type:"button",className:c()(o,{[l]:e,[d]:a}),onClick:t},n)}))},42658:(e,t,a)=>{"use strict";a.d(t,{X:()=>h});var n=a(27378),s=a.n(n),i=a(60247),r=a(41056),c=a(66917),o=a.n(c),l=a(60042),d=a.n(l);const m={episodeBlock:"show-episodeBlock-episodeBlock",isActive:"show-episodeBlock-isActive",title:"show-episodeBlock-title",titleLink:"show-episodeBlock-titleLink",selected:"show-episodeBlock-selected",topActions:"show-episodeBlock-topActions",actions:"show-episodeBlock-actions",noHover:"show-episodeBlock-noHover",imageContainer:"show-episodeBlock-imageContainer",showImage:"show-episodeBlock-showImage",description:"show-episodeBlock-description",metadata:"show-episodeBlock-metadata",badges:"show-episodeBlock-badges",medium:"show-episodeBlock-medium",large:"show-episodeBlock-large",header:"show-episodeBlock-header",descriptionContainer:"show-episodeBlock-descriptionContainer",playerActions:"show-episodeBlock-playerActions"};var u=a(39551),f=a(53177),p=a(52110),g=a(2031),b=a(34907),y=a(41113),E=a(65288);const h=s().memo((({uri:e,name:t,size:a,description:c,durationMs:l,images:h,badges:v,fullyPlayed:w,releaseDate:k,resumePositionMs:x,activeTrackUri:C,isPlaying:O,actionButtons:I,topActionButtons:P,onContextMenu:S,onTouchStart:N,onTouchEnd:D,handlePlaybackClick:M,handleDragStart:B,handleClick:_,position:A,index:L,isPlayable:U,playButtonWrapper:R=null})=>{const Z=(0,r.k6)(),$=C===e,z=$&&O,j=o().from(e).toURLPath(!0),T=(0,n.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),Z.push(j),_&&_(e)}),[j,Z,_]),G=(0,n.useCallback)((e=>{e.stopPropagation(),M(e)}),[M]),W=e=>{e.stopPropagation()},H=s().createElement(u.JM,{size:u.qE.xs,version:u.ul.secondary,onClick:G,isPlaying:z,disabled:!U}),q=R?R(H):H;return s().createElement("div",{className:d()(m.episodeBlock,{[m.isActive]:$,[m.medium]:a===E.Uo.MEDIUM,[m.large]:a===E.Uo.LARGE,[m.noHover]:a===E.Uo.XSMALL}),"data-testid":`episode-${L}`,draggable:!!B,onDragStart:B,onClick:T,onContextMenu:S,onTouchStart:N,onTouchEnd:D},s().createElement("div",{className:m.imageContainer},s().createElement(b.O,{className:d()(m.entityImage,m.showImage),type:g.p.EPISODE,size:(e=>{switch(e){case E.Uo.LARGE:return y.m$.SIZE_112;case E.Uo.MEDIUM:return y.m$.SIZE_64;default:return y.m$.SIZE_48}})(a),title:t,shape:b.K.ROUNDED_CORNERS,images:h})),s().createElement("div",{className:m.header},s().createElement(i.rU,{className:m.titleLink,to:j,onClick:T},s().createElement(f.Dy.h4,{variant:f.Dy.balladBold,className:m.title},t)),s().createElement("div",{className:m.badges},v)),s().createElement("div",{className:m.descriptionContainer},s().createElement(f.Dy.p,{variant:f.Dy.mesto,className:m.description},c)),s().createElement("div",{className:m.metadata},s().createElement(p.E,{isPlaying:z,fullyPlayed:w,durationMs:l,releaseDate:k,resumePositionMs:x,position:$?A:void 0})),P&&s().createElement("div",{onClick:W,className:m.topActions},P),s().createElement("div",{onClick:W,className:m.actions},I),s().createElement("div",{className:m.playerActions},q))}))},40893:(e,t,a)=>{"use strict";a.d(t,{k:()=>f});var n=a(65526),s=a.n(n),i=a(27378),r=a.n(i);const c="show-episodeList-divider",o="show-episodeList-row";var l=a(93512),d=a(4050);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){s()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const f=r().memo(r().forwardRef(((e,t)=>{const{fetchEpisodes:a,renderRow:n,limit:s=50,showUri:m}=e,[f,p]=(0,i.useState)(d.d),g=(0,i.useRef)(!1),b=(0,i.useCallback)((()=>{if(!a)return;const e=f.pagingInfo.nextOffset;if(null===e)return;const t=0===f.totalCount?s:Math.min(f.totalCount-e,s);g.current||(g.current=!0,a(e,t).then((t=>{p((a=>{const n=[...a.items];return n.splice(e,t.items.length,...t.items),u(u({},t),{},{items:n})})),g.current=!1})))}),[a,f.pagingInfo.nextOffset,f.totalCount,s]);return(0,i.useEffect)((()=>{p(d.d)}),[m,a]),(0,i.useEffect)((()=>{0===f.pagingInfo.nextOffset&&b()}),[b,f.pagingInfo.nextOffset]),r().createElement("div",{ref:t},r().createElement(l.C,{onReachBottom:b,triggerOnInitialLoad:!0},f.items.map(((e,t)=>r().createElement("div",{className:o,key:`${t}${e.uid}`},r().createElement("hr",{className:c,"aria-hidden":!0}),n(e,t))))))})))},11700:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n={xs:"(min-width: 0px)",xsOnly:"(min-width: 0px) and (max-width: 767px)",sm:"(min-width: 768px)",smOnly:"(min-width: 768px) and (max-width: 1023px)",md:"(min-width: 1024px)",mdOnly:"(min-width: 1024px) and (max-width: 1279px)",lg:"(min-width: 1280px)",lgOnly:"(min-width: 1280px) and (max-width: 1919px)",xl:"(min-width: 1920px)",ShowPage:"show-show-ShowPage",ShowContent:"show-show-ShowContent",metadata:"show-show-metadata",episodes:"show-show-episodes",episodesHeader:"show-show-episodesHeader",episodesSort:"show-show-episodesSort",subtitle:"show-show-subtitle",sectionTitle:"show-show-sectionTitle",trailer:"show-show-trailer",visibleDownloadButton:"show-show-visibleDownloadButton",moreButton:"show-show-moreButton",saveButton:"show-show-saveButton"}}}]);