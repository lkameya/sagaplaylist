(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,n,t){e.exports=t(66)},66:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(17),o=t.n(i),c=t(20),l=t(11),u=t(30),s=(t(53),t(40)),f=t(4),p=t.n(f),m=t(9),d=t(31),g=t(32),h=t(41),v=t(33),y=t(42),b=t(1),E=t(19),w=t.n(E),O=t(39),x=t(2);function k(){return(k=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function S(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var C=a.a.createElement("title",null,"Group 4"),j=a.a.createElement("desc",null,"Created with Sketch."),F=a.a.createElement("g",{id:"Description",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},a.a.createElement("g",{id:"Group-4"},a.a.createElement("path",{d:"M14.7832571,10.5578395 L14.7832571,10.5578395 C15.7075431,10.5543296 16.4596703,11.3007661 16.4631802,12.2250521 C16.4632191,12.2352993 16.4631639,12.2455466 16.4630146,12.2557928 L16.3652749,18.9629733 C16.3516141,19.9004155 15.5930625,20.6560322 14.6555744,20.6660588 L14.6555744,20.6660588 C13.7445914,20.6758019 12.9981953,19.9452027 12.9884522,19.0342196 C12.9883264,19.022459 12.9883264,19.0106973 12.9884522,18.9989366 L13.060432,12.2688224 C13.0705427,11.3234782 13.8378657,10.5614295 14.7832571,10.5578395 Z",id:"Rectangle",fill:"#7C7B7B",transform:"translate(14.725775, 15.611991) rotate(-45.000000) translate(-14.725775, -15.611991) "}),a.a.createElement("ellipse",{id:"Oval",stroke:"#7C7B7B",strokeWidth:2.75862069,cx:7.24137931,cy:7.35,rx:5.86206897,ry:5.97068966}))),P=function(e){var n=e.svgRef,t=S(e,["svgRef"]);return a.a.createElement("svg",k({width:"19px",height:"20px",viewBox:"0 0 19 20",ref:n},t),C,j,F)},R=a.a.forwardRef(function(e,n){return a.a.createElement(P,k({svgRef:n},e))});t.p;function T(){var e=Object(b.a)(["\n  margin-left: 10px;\n"]);return T=function(){return e},e}var L=x.b.div(T()),_=function(){return a.a.createElement(L,null,a.a.createElement(R,null))};function G(){var e=Object(b.a)(["\n  color: #191414;\n  background-color: #f4f2f2;\n  font-size: 1.6rem;\n  border: none;\n  padding: 1rem 4rem;\n  border-radius: 10rem;\n  width: 35%;\n  transition: all .2s;\n  margin-right: -5rem;\n\n  &:focus {\n    outline: none;\n    width: 45%;\n    background-color: #f0eeee;\n  }\n\n  &::-web-kit-input-placeholder {\n    font-weight: 100;\n    color: #ccc;\n  }\n"]);return G=function(){return e},e}function I(){var e=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 18rem;\n\n  @media (max-width: 37.5em) {\n    margin-top: 10rem;\n  }\n"]);return I=function(){return e},e}var N=x.b.div(I()),A=x.b.input(G()),H=function(e){var n=e.handleSearch,t=Object(r.useState)(""),i=Object(O.a)(t,2),o=i[0],c=i[1];return a.a.createElement(N,null,a.a.createElement(A,{type:"text",value:o,placeholder:"Search an artist or song ...",onChange:function(e){return t=e.target.value,c(t),void n(t);var t}}),a.a.createElement(_,null))};function B(){var e=Object(b.a)(["\n  margin: 1rem .5rem;\n"]);return B=function(){return e},e}function D(){var e=Object(b.a)(["\n  border-radius: 15rem;\n  margin-bottom: .5rem;\n  height: 8rem;\n\n  @media only screen and (max-width: 37.5em) {  \n    height: 6rem;\n  }\n"]);return D=function(){return e},e}function M(){var e=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 15rem;\n  text-align: center;\n\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n    transition: .2s all;\n  }\n\n  &:active {\n    transform: translateY(-1rem);\n  }\n"]);return M=function(){return e},e}function Y(){var e=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  font-size: 1.2rem;\n  margin-top: 5rem;\n\n  @media only screen and (max-width: 37.5em) {  \n    flex-wrap: wrap;\n  }\n"]);return Y=function(){return e},e}function W(){var e=Object(b.a)(["\n  height: 25vh;\n"]);return W=function(){return e},e}var z=x.b.div(W()),U=x.b.ul(Y()),Z=x.b.div(M()),J=x.b.img(D()),q=x.b.li(B()),X=function(e){var n=e.songs,t=e.addToPlay;return a.a.createElement(z,null,a.a.createElement(U,null,n.map(function(e){return a.a.createElement(Z,{onClick:function(){return t(e)}},a.a.createElement(J,{src:e.album.images[1].url,alt:"albumimg"}),a.a.createElement(q,{key:e.id},e.name," - ",e.artists[0].name))})))};function K(){var e=Object(b.a)(["\n  position: relative;\n  ","\n"]);return K=function(){return e},e}function Q(){var e=Object(b.a)(["\n  animation: "," 2s infinite;\n"]);return Q=function(){return e},e}function V(){var e=Object(b.a)(["\n  0%, 20%, 50%, 80%, 100% { transform: translateY(0); };\n  40% { transform: translateY(-3rem); };\n  60% { transform: translateY(-1.5rem); };\n"]);return V=function(){return e},e}function $(){var e=Object(b.a)(["\n  border-radius: 10rem;\n  margin: 1rem .5rem;\n  height: 10rem;\n"]);return $=function(){return e},e}function ee(){var e=Object(b.a)(["\n  &:hover + "," {\n    opacity: 1;\n    position: absolute;\n    top: -1rem;\n    left: 50%;\n    transform: translate(-50%);\n    transition: all .2s;\n  }\n"]);return ee=function(){return e},e}function ne(){var e=Object(b.a)(["\n  opacity: 0;\n  font-size: 1.2rem;\n  font-weight: 300;\n  position: absolute;\n  top: -.5rem;\n  left: 5%;\n  transform: translateX(-50%);\n"]);return ne=function(){return e},e}var te=x.b.span(ne()),re=x.b.div(ee(),te),ae=x.b.img($()),ie=Object(x.c)(V()),oe=Object(x.a)(Q(),ie),ce=x.b.div(K(),function(e){return e.currentSong&&oe}),le=function(e){var n=e.id,t=e.albumImg,r=e.artist,i=e.title,o=e.currentSong;return a.a.createElement(ce,{currentSong:o&&o.id===n},a.a.createElement(re,{id:n},a.a.createElement(ae,{src:t,alt:"albumimg"})),a.a.createElement(te,null," ",r," - ",i," "))};function ue(){var e=Object(b.a)(["\n  display: flex;\n  overflow-x: scroll;\n  white-space: nowrap;\n  justify-content: center;\n  width: 100vw;\n  padding: 2vh;\n  padding-top: 5vh;\n"]);return ue=function(){return e},e}var se=x.b.div(ue()),fe=function(e){var n=e.playlist,t=e.currentSong;return n?a.a.createElement(se,null,n.map(function(e){return a.a.createElement(le,{id:e.id,key:e.id,title:e.name,artist:e.artists[0].name,albumImg:e.album.images[1].url,currentSong:t})})):null},pe=t(26),me=t.n(pe),de=new w.a;function ge(){var e=Object(b.a)(["\n  &:hover {\n    fill: #1DB954;\n    cursor: pointer;\n    transition: all .1s;\n  }\n"]);return ge=function(){return e},e}var he=x.b.div(ge()),ve=function(e){var n=e.clickNext;return a.a.createElement(he,{onClick:n},a.a.createElement("svg",{width:"30px",height:"29px",viewBox:"0 0 30 29"},a.a.createElement("title",null,"Next"),a.a.createElement("desc",null,"Created with Sketch."),a.a.createElement("g",{id:"Description",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},a.a.createElement("g",{id:"Group",fill:"#FFFFFF"},a.a.createElement("path",{d:"M13.380043,2.8427565 L26.6310856,25.1356413 C26.9132788,25.610389 26.7571826,26.224011 26.2824349,26.5062042 C26.1278394,26.5980969 25.9513233,26.6465974 25.7714788,26.6465974 L-0.730606279,26.6465974 C-1.28289103,26.6465974 -1.73060628,26.1988822 -1.73060628,25.6465974 C-1.73060628,25.466753 -1.68210571,25.2902369 -1.59021307,25.1356413 L11.6608295,2.8427565 C11.9430227,2.36800878 12.5566447,2.21191256 13.0313924,2.49410584 C13.174888,2.57940062 13.2947483,2.69926085 13.380043,2.8427565 Z",id:"Triangle-Copy",transform:"translate(12.520514, 14.500078) rotate(-270.000000) translate(-12.520514, -14.500078) "}),a.a.createElement("rect",{id:"Rectangle",x:"24.8739938",y:"0",width:"5",height:"29"})))))};function ye(){var e=Object(b.a)(["\n  &:hover {\n    fill: #1DB954;\n    cursor: pointer;\n    transition: all .1s;\n  }\n"]);return ye=function(){return e},e}var be=x.b.div(ye()),Ee=function(e){var n=e.clickPrevious;return a.a.createElement(be,{onClick:n},a.a.createElement("svg",{width:"30px",height:"29px",viewBox:"0 0 30 29"},a.a.createElement("title",null,"Previous"),a.a.createElement("desc",null,"Created with Sketch."),a.a.createElement("g",{id:"Description",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},a.a.createElement("g",{id:"Group-Copy",transform:"translate(15.000000, 14.500000) rotate(-180.000000) translate(-15.000000, -14.500000) ",fill:"#FFFFFF"},a.a.createElement("path",{d:"M13.380043,2.8427565 L26.6310856,25.1356413 C26.9132788,25.610389 26.7571826,26.224011 26.2824349,26.5062042 C26.1278394,26.5980969 25.9513233,26.6465974 25.7714788,26.6465974 L-0.730606279,26.6465974 C-1.28289103,26.6465974 -1.73060628,26.1988822 -1.73060628,25.6465974 C-1.73060628,25.466753 -1.68210571,25.2902369 -1.59021307,25.1356413 L11.6608295,2.8427565 C11.9430227,2.36800878 12.5566447,2.21191256 13.0313924,2.49410584 C13.174888,2.57940062 13.2947483,2.69926085 13.380043,2.8427565 Z",id:"Triangle-Copy-2",transform:"translate(12.520514, 14.500078) rotate(-270.000000) translate(-12.520514, -14.500078) "}),a.a.createElement("rect",{id:"Rectangle",x:"24.8739938",y:"0",width:"5",height:"29"})))))};function we(){var e=Object(b.a)(["\n  &:hover {\n    fill: #1DB954;\n    cursor: pointer;\n    transition: all .1s;\n  }\n"]);return we=function(){return e},e}var Oe=x.b.div(we()),xe=function(e){var n=e.isPlaying,t=e.playSong;return n?a.a.createElement(Oe,{onClick:t},a.a.createElement("svg",{width:"56px",height:"56px",viewBox:"0 0 56 56"},a.a.createElement("title",null,"Group 2"),a.a.createElement("desc",null,"Created with Sketch."),a.a.createElement("g",{id:"Description",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},a.a.createElement("g",{id:"Group-6"},a.a.createElement("g",{id:"Group-2",stroke:"#FFFFFF",strokeWidth:"2"},a.a.createElement("circle",{id:"Oval",cx:"28",cy:"28",r:"27"})),a.a.createElement("g",{id:"Group-5",transform:"translate(20.000000, 14.000000)",fill:"#FFFFFF"},a.a.createElement("rect",{id:"Rectangle",x:"0",y:"0",width:"5",height:"29"}),a.a.createElement("rect",{id:"Rectangle-Copy",x:"10",y:"0",width:"5",height:"29"})))))):a.a.createElement(Oe,{onClick:t},a.a.createElement("svg",{width:"56px",height:"56px",viewBox:"0 0 56 56"},a.a.createElement("title",null,"Group 2"),a.a.createElement("desc",null,"Created with Sketch."),a.a.createElement("g",{id:"Description",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},a.a.createElement("g",{id:"Group-2"},a.a.createElement("circle",{id:"Oval",stroke:"#FFFFFF",strokeWidth:"2",cx:"28",cy:"28",r:"27"}),a.a.createElement("path",{d:"M31.9246646,15.5313589 L45.8542333,39.3892467 C46.1524238,39.8999728 45.9801296,40.5557293 45.4694035,40.8539197 C45.3055497,40.9495867 45.1192192,41 44.9294819,41 L17.0703444,41 C16.4789404,41 15.9995127,40.5205723 15.9995127,39.9291683 C15.9995127,39.739431 16.049926,39.5531005 16.145593,39.3892467 L30.0751617,15.5313589 C30.3733522,15.0206328 31.0291086,14.8483386 31.5398348,15.1465291 C31.6991119,15.239524 31.8316697,15.3720817 31.9246646,15.5313589 Z",id:"Triangle-Copy",fill:"#FFFFFF",transform:"translate(31.000000, 28.000000) rotate(-270.000000) translate(-31.000000, -28.000000) "})))))},ke=t(36),Se=t.n(ke)()({basename:""});function Ce(){var e=Object(b.a)(["\n  margin-top: 5rem;\n  font-size: 2rem;\n  text-decoration: none;\n  background-color: #1db954;\n  color: white;\n  padding: 1rem 6rem;\n  border-radius: 5rem;\n\n  &:hover {\n    transform: translateY(-.2rem);\n    transition: all .2s;\n  }\n"]);return Ce=function(){return e},e}function je(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 2rem;\n  font-weight: 300;\n  font-family: 'Roboto', sans-serif;\n  color: white;\n  height: 100vh;\n"]);return je=function(){return e},e}function Fe(){var e=Object(b.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 50%;\n"]);return Fe=function(){return e},e}function Pe(){var e=Object(b.a)(["\n  display: flex;\n  flex-basis: 100%;\n  justify-content: center;\n  margin: 5rem;\n  font-weight: 300;\n  font-size: 1.6rem;\n"]);return Pe=function(){return e},e}function Re(){var e=Object(b.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  background-color: #141919;\n"]);return Re=function(){return e},e}function Te(){var e=Object(b.a)(["\n  padding: 0;\n  font-family: 'Roboto', sans-serif;\n  color: white;\n"]);return Te=function(){return e},e}var Le=new w.a,_e=x.b.div(Te()),Ge=x.b.div(Re()),Ie=x.b.div(Pe()),Ne=x.b.div(Fe()),Ae=x.b.div(je()),He=x.b.a(Ce()),Be=function(e){function n(){var e;Object(d.a)(this,n),(e=Object(h.a)(this,Object(v.a)(n).call(this))).componentDidMount=function(){e.props.onFetchUserPlaylist(),e.timer=setInterval(function(){e.props.onFetchCurrentSong(),e.playSong()},3e3)},e.nowPlaying=function(){var n=e.props.currentSong;return me.a.isEmpty(n)?null:a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null," ",n.artists[0].name," - ",n.name," "))},e.playSong=function(){var n=Object(m.a)(p.a.mark(function n(t){return p.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Le.getMyCurrentPlaybackState();case 2:n.sent.is_playing?e.setState({isPlaying:!0}):e.setState({isPlaying:!1});case 4:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}();var t=e.getHashParams().access_token;return t&&Le.setAccessToken(t),e.state={loggedIn:!!t,isPlaying:!0},Se.replace("/"),e}return Object(y.a)(n,e),Object(g.a)(n,[{key:"getHashParams",value:function(){var e,n={},t=/([^&;=]+)=?([^&;]*)/g,r=window.location.hash.substring(1);for(e=t.exec(r);e;)n[e[1]]=decodeURIComponent(e[2]),e=t.exec(r);return n}},{key:"render",value:function(){var e=this,n=me.a.debounce(function(n){e.props.onSearchSongs(n)},500),t=this.props.currentSong;return this.state.loggedIn?a.a.createElement(_e,null,a.a.createElement(H,{handleSearch:n}),a.a.createElement(X,{songs:this.props.searchList,addToPlay:this.props.onAddSongToPlaylist}),a.a.createElement(Ge,null,a.a.createElement(Ie,null,this.nowPlaying()),a.a.createElement(Ne,null,a.a.createElement(Ee,{clickPrevious:this.props.onPreviousSong}),a.a.createElement(xe,{clickPrevious:this.props.onPreviousSong,isPlaying:this.state.isPlaying,playSong:function(){return e.props.onTogglePlay(e.state.isPlaying)}}),a.a.createElement(ve,{clickNext:this.props.onNextSong})),a.a.createElement(fe,{playlist:this.props.playlist,currentSong:t||null}))):a.a.createElement(Ae,null,a.a.createElement("div",null,"Please make sure you are playing one of your playlists in Spotify on any device."),a.a.createElement(He,{href:"https://quiet-castle-21882.herokuapp.com/api/login"},"Continue"))}}]),n}(r.Component),De=Object(c.b)(function(e){return{currentSong:e.songs.currentSong,playlist:e.songs.playlist,searchList:e.songs.searchList,playlistId:e.songs.playlistId}},function(e){return{onFetchCurrentSong:function(){return e(function(){var e=Object(m.a)(p.a.mark(function e(n){var t;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,de.getMyCurrentPlaybackState();case 3:t=e.sent,n({type:"FETCH_CURRENT_SONG",currentSong:t.item}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),n({type:"FETCH_ERROR",error:e.t0});case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(n){return e.apply(this,arguments)}}())},onFetchUserPlaylist:function(){return e(function(){var e=Object(m.a)(p.a.mark(function e(n){var t,r,a,i,o;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,de.getMyCurrentPlayingTrack();case 3:return t=e.sent,r=t.context.uri.split(":"),a=r[r.length-1],e.next=8,de.getPlaylistTracks(a);case 8:i=e.sent,o=i.items.map(function(e){return e.track}),n({type:"FETCH_SONGS_FROM_PLAYLIST",songs:o,playlistId:a}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),n({type:"FETCH_ERROR",error:e.t0});case 16:case"end":return e.stop()}},e,null,[[0,13]])}));return function(n){return e.apply(this,arguments)}}())},onSearchSongs:function(n){return e(function(e){return function(){var n=Object(m.a)(p.a.mark(function n(t){var r;return p.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(""===e){n.next=7;break}return n.next=3,de.searchTracks(e,{limit:5});case 3:r=n.sent,t({type:"FETCH_SONGS_SEARCH",songResults:r.tracks.items}),n.next=8;break;case 7:t({type:"CLEAR_SEARCH"});case 8:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}(n))},onAddSongToPlaylist:function(n){return e(function(e){return function(){var n=Object(m.a)(p.a.mark(function n(t){var r,a,i;return p.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,de.getMyCurrentPlayingTrack();case 2:r=n.sent,a=r.context.uri.split(":"),i=a[a.length-1],de.addTracksToPlaylist(i,[e.uri]),t({type:"ADD_SONG_TO_PLAYLIST",newSong:e});case 7:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}(n))},onNextSong:function(){return e(function(){var e=Object(m.a)(p.a.mark(function e(n){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:de.skipToNext();case 1:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}())},onPreviousSong:function(){return e(function(){var e=Object(m.a)(p.a.mark(function e(n){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:de.skipToPrevious();case 1:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}())},onTogglePlay:function(n){return e(function(e){return function(){var n=Object(m.a)(p.a.mark(function n(t){return p.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e?de.pause():de.play();case 1:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}(n))}}})(Be),Me=t(38),Ye=t(13),We={currentSong:"",searchList:[],playlist:[],playlistUri:""},ze=Object(l.c)({songs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FETCH_CURRENT_SONG":return Object(Ye.a)({},e,{currentSong:n.currentSong});case"FETCH_SONGS_SEARCH":return Object(Ye.a)({},e,{searchList:n.songResults});case"CLEAR_SEARCH":return Object(Ye.a)({},e,{searchList:[]});case"FETCH_SONGS_FROM_PLAYLIST":return Object(Ye.a)({},e,{playlist:n.songs,playlistId:n.playlistId});case"ADD_SONG_TO_PLAYLIST":return Object(Ye.a)({},e,{playlist:[].concat(Object(Me.a)(e.playlist),[n.newSong])});default:return e}}}),Ue=Object(l.d)(ze,Object(l.a)(u.a));o.a.render(a.a.createElement(c.a,{store:Ue},a.a.createElement(s.a,null,a.a.createElement(De,null))),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.c0f40ff7.chunk.js.map