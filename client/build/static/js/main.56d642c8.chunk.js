(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports={search:"SearchBar_search__n59Gu",input:"SearchBar_input__3NKny",button:"SearchBar_button__19UVj",searchBar:"SearchBar_searchBar__1KcZ4"}},24:function(e,t,n){e.exports={playButton:"PlayButton_playButton__fhZmQ"}},29:function(e,t,n){e.exports={searchButton:"SearchButton_searchButton__2lsC_"}},3:function(e,t,n){e.exports={app:"App_app__3RXG4",loginScreen:"App_loginScreen__H2NQE",nowPlaying:"App_nowPlaying__3vYk7",buttons:"App_buttons__1Osvu",bounce:"App_bounce__3ulwR",row:"App_row__24PRm",loginButton:"App_loginButton__2ucxC"}},30:function(e,t,n){e.exports={playlist:"Playlist_playlist__kFWgs"}},31:function(e,t,n){e.exports={nextButton:"NextButton_nextButton__1x7WA"}},32:function(e,t,n){e.exports={previousButton:"PreviousButton_previousButton__2GQoH"}},35:function(e,t,n){e.exports=n(48)},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(26),s=n.n(c),i=n(15),l=n(4),o=n(28),u=(n(44),n(1)),p=n.n(u),m=n(2),d=n(11),h=n(12),g=n(16),y=n(13),f=n(17),_=n(14),E=n.n(_),v=n(33),S=n(22),k=n.n(S),b=n(29),C=n.n(b),x=function(e){return r.a.createElement("div",{className:C.a.searchButton},r.a.createElement("svg",{width:"19px",height:"20px",viewBox:"0 0 19 20"},r.a.createElement("title",null,"Group 4"),r.a.createElement("desc",null,"Created with Sketch."),r.a.createElement("g",{id:"Description",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Group-4"},r.a.createElement("path",{d:"M14.7832571,10.5578395 L14.7832571,10.5578395 C15.7075431,10.5543296 16.4596703,11.3007661 16.4631802,12.2250521 C16.4632191,12.2352993 16.4631639,12.2455466 16.4630146,12.2557928 L16.3652749,18.9629733 C16.3516141,19.9004155 15.5930625,20.6560322 14.6555744,20.6660588 L14.6555744,20.6660588 C13.7445914,20.6758019 12.9981953,19.9452027 12.9884522,19.0342196 C12.9883264,19.022459 12.9883264,19.0106973 12.9884522,18.9989366 L13.060432,12.2688224 C13.0705427,11.3234782 13.8378657,10.5614295 14.7832571,10.5578395 Z",id:"Rectangle",fill:"#7C7B7B",transform:"translate(14.725775, 15.611991) rotate(-45.000000) translate(-14.725775, -15.611991) "}),r.a.createElement("ellipse",{id:"Oval",stroke:"#7C7B7B",strokeWidth:"2.75862069",cx:"7.24137931",cy:"7.35",rx:"5.86206897",ry:"5.97068966"})))))},w=function(e){var t=Object(a.useState)(""),n=Object(v.a)(t,2),c=n[0],s=n[1];return r.a.createElement("div",{className:k.a.searchBar},r.a.createElement("input",{type:"text",className:k.a.input,value:c,placeholder:"Search an artist or song ...",onChange:function(t){return n=t.target.value,s(n),void e.handleSearch(n);var n}}),r.a.createElement(x,null))},F=n(7),O=n.n(F),P=function(e){return r.a.createElement("div",{className:O.a.searchList},r.a.createElement("ul",{className:O.a.list},e.songs.map(function(t){return r.a.createElement("div",{className:O.a.track,onClick:function(){return e.addToPlay(t)}},r.a.createElement("img",{src:t.album.images[1].url,alt:"albumimg",className:O.a.albumImage}),r.a.createElement("li",{className:O.a.listItem,key:t.id},t.name," - ",t.artists[0].name))})))},N=n(9),B=n.n(N),L=function(e){return r.a.createElement("div",{className:B.a.playlistItem},r.a.createElement("div",{className:B.a.albumImage,id:e.id},r.a.createElement("img",{src:e.albumImg,alt:"albumimg",className:B.a.albumImage})),r.a.createElement("span",{className:B.a.labelTrack},e.artist," - ",e.title))},R=n(30),I=n.n(R),T=function(e){function t(){return Object(d.a)(this,t),Object(g.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return this.props.playlist?r.a.createElement("div",{className:I.a.playlist,id:"playlist"},this.props.playlist.map(function(e){return r.a.createElement(L,{id:e.id,key:e.id,title:e.name,artist:e.artists[0].name,albumImg:e.album.images[1].url})})):null}}]),t}(a.Component),j=n(23),A=n.n(j),G=n(3),H=n.n(G),W=new E.a,D=n(31),M=n.n(D),U=function(e){return r.a.createElement("div",{onClick:e.clickNext},r.a.createElement("svg",{width:"30px",height:"29px",viewBox:"0 0 30 29"},r.a.createElement("title",null,"Next"),r.a.createElement("desc",null,"Created with Sketch."),r.a.createElement("g",{id:"Description",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},r.a.createElement("g",{className:M.a.nextButton,id:"Group",fill:"#FFFFFF"},r.a.createElement("path",{d:"M13.380043,2.8427565 L26.6310856,25.1356413 C26.9132788,25.610389 26.7571826,26.224011 26.2824349,26.5062042 C26.1278394,26.5980969 25.9513233,26.6465974 25.7714788,26.6465974 L-0.730606279,26.6465974 C-1.28289103,26.6465974 -1.73060628,26.1988822 -1.73060628,25.6465974 C-1.73060628,25.466753 -1.68210571,25.2902369 -1.59021307,25.1356413 L11.6608295,2.8427565 C11.9430227,2.36800878 12.5566447,2.21191256 13.0313924,2.49410584 C13.174888,2.57940062 13.2947483,2.69926085 13.380043,2.8427565 Z",id:"Triangle-Copy",transform:"translate(12.520514, 14.500078) rotate(-270.000000) translate(-12.520514, -14.500078) "}),r.a.createElement("rect",{id:"Rectangle",x:"24.8739938",y:"0",width:"5",height:"29"})))))},Z=n(32),Y=n.n(Z),Q=function(e){return r.a.createElement("div",{onClick:e.clickPrevious},r.a.createElement("svg",{width:"30px",height:"29px",viewBox:"0 0 30 29"},r.a.createElement("title",null,"Previous"),r.a.createElement("desc",null,"Created with Sketch."),r.a.createElement("g",{id:"Description",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},r.a.createElement("g",{className:Y.a.previousButton,id:"Group-Copy",transform:"translate(15.000000, 14.500000) rotate(-180.000000) translate(-15.000000, -14.500000) ",fill:"#FFFFFF"},r.a.createElement("path",{d:"M13.380043,2.8427565 L26.6310856,25.1356413 C26.9132788,25.610389 26.7571826,26.224011 26.2824349,26.5062042 C26.1278394,26.5980969 25.9513233,26.6465974 25.7714788,26.6465974 L-0.730606279,26.6465974 C-1.28289103,26.6465974 -1.73060628,26.1988822 -1.73060628,25.6465974 C-1.73060628,25.466753 -1.68210571,25.2902369 -1.59021307,25.1356413 L11.6608295,2.8427565 C11.9430227,2.36800878 12.5566447,2.21191256 13.0313924,2.49410584 C13.174888,2.57940062 13.2947483,2.69926085 13.380043,2.8427565 Z",id:"Triangle-Copy-2",transform:"translate(12.520514, 14.500078) rotate(-270.000000) translate(-12.520514, -14.500078) "}),r.a.createElement("rect",{id:"Rectangle",x:"24.8739938",y:"0",width:"5",height:"29"})))))},J=n(24),K=n.n(J),q=function(e){return e.isPlaying?r.a.createElement("div",{onClick:e.playSong},r.a.createElement("svg",{width:"56px",height:"56px",viewBox:"0 0 56 56"},r.a.createElement("title",null,"Group 2"),r.a.createElement("desc",null,"Created with Sketch."),r.a.createElement("g",{id:"Description",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Group-6"},r.a.createElement("g",{id:"Group-2",stroke:"#FFFFFF",strokeWidth:"2",className:K.a.playButton},r.a.createElement("circle",{id:"Oval",cx:"28",cy:"28",r:"27"})),r.a.createElement("g",{id:"Group-5",transform:"translate(20.000000, 14.000000)",fill:"#FFFFFF"},r.a.createElement("rect",{id:"Rectangle",x:"0",y:"0",width:"5",height:"29"}),r.a.createElement("rect",{id:"Rectangle-Copy",x:"10",y:"0",width:"5",height:"29"})))))):r.a.createElement("div",{onClick:e.playSong},r.a.createElement("svg",{width:"56px",height:"56px",viewBox:"0 0 56 56"},r.a.createElement("title",null,"Group 2"),r.a.createElement("desc",null,"Created with Sketch."),r.a.createElement("g",{id:"Description",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Group-2",className:K.a.playButton},r.a.createElement("circle",{id:"Oval",stroke:"#FFFFFF",strokeWidth:"2",cx:"28",cy:"28",r:"27"}),r.a.createElement("path",{d:"M31.9246646,15.5313589 L45.8542333,39.3892467 C46.1524238,39.8999728 45.9801296,40.5557293 45.4694035,40.8539197 C45.3055497,40.9495867 45.1192192,41 44.9294819,41 L17.0703444,41 C16.4789404,41 15.9995127,40.5205723 15.9995127,39.9291683 C15.9995127,39.739431 16.049926,39.5531005 16.145593,39.3892467 L30.0751617,15.5313589 C30.3733522,15.0206328 31.0291086,14.8483386 31.5398348,15.1465291 C31.6991119,15.239524 31.8316697,15.3720817 31.9246646,15.5313589 Z",id:"Triangle-Copy",fill:"#FFFFFF",transform:"translate(31.000000, 28.000000) rotate(-270.000000) translate(-31.000000, -28.000000) "})))))},V=new E.a,X=function(e){function t(){var e;Object(d.a)(this,t),(e=Object(g.a)(this,Object(y.a)(t).call(this))).componentDidMount=function(){e.props.onFetchUserPlaylist(),e.timer=setInterval(function(){e.props.onFetchCurrentSong(),e.playSong()},3e3)},e.nowPlaying=function(){var t=e.props.currentSong;return A.a.isEmpty(t)?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null," ",t.artists[0].name," - ",t.name," "))},e.playSong=function(){var t=Object(m.a)(p.a.mark(function t(n){return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V.getMyCurrentPlaybackState();case 2:t.sent.is_playing?e.setState({isPlaying:!0}):e.setState({isPlaying:!1});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();var n=e.getHashParams().access_token;return n&&V.setAccessToken(n),e.state={loggedIn:!!n,isPlaying:!0},e}return Object(f.a)(t,e),Object(h.a)(t,[{key:"getHashParams",value:function(){var e,t={},n=/([^&;=]+)=?([^&;]*)/g,a=window.location.hash.substring(1);for(e=n.exec(a);e;)t[e[1]]=decodeURIComponent(e[2]),e=n.exec(a);return t}},{key:"render",value:function(){var e=this,t=A.a.debounce(function(t){e.props.onSearchSongs(t)},500),n=null;return this.props.currentSong&&(n=document.getElementById(this.props.currentSong.id),this.props.playlist.map(function(t){if(t.id!==e.props.currentSong.id){var n=document.getElementById(t.id);n&&n.classList.remove(H.a.bounce)}return!0}),n&&n.classList.add(H.a.bounce)),this.state.loggedIn?r.a.createElement("div",{className:H.a.app},r.a.createElement(w,{handleSearch:t}),r.a.createElement(P,{songs:this.props.searchList,addToPlay:this.props.onAddSongToPlaylist}),r.a.createElement("div",{className:H.a.row},r.a.createElement("div",{className:H.a.nowPlaying},this.nowPlaying()),r.a.createElement("div",{className:H.a.buttons},r.a.createElement(Q,{clickPrevious:this.props.onPreviousSong}),r.a.createElement(q,{clickPrevious:this.props.onPreviousSong,isPlaying:this.state.isPlaying,playSong:function(){return e.props.onTogglePlay(e.state.isPlaying)}}),r.a.createElement(U,{clickNext:this.props.onNextSong}))),r.a.createElement(T,{playlist:this.props.playlist,playSong:this.playSong})):r.a.createElement("div",{className:H.a.loginScreen},r.a.createElement("p",null,"Welcome to my custom playlist. In order to make this app work properly, you need to create a new playlist in your Spotify Account and start playing a song."),r.a.createElement("br",null),r.a.createElement("div",null,"After listening to your music click on the button below to start using the app."),r.a.createElement("a",{className:H.a.loginButton,href:"https://quiet-castle-21882.herokuapp.com/api/login"}," Connect to Spotify "))}}]),t}(a.Component),z=Object(i.b)(function(e){return{currentSong:e.songs.currentSong,playlist:e.songs.playlist,searchList:e.songs.searchList,playlistId:e.songs.playlistId}},function(e){return{onFetchCurrentSong:function(){return e(function(){var e=Object(m.a)(p.a.mark(function e(t){var n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.getMyCurrentPlaybackState();case 3:n=e.sent,t({type:"FETCH_CURRENT_SONG",currentSong:n.item}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:"FETCH_ERROR",error:e.t0});case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}())},onFetchUserPlaylist:function(){return e(function(){var e=Object(m.a)(p.a.mark(function e(t){var n,a,r,c;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.getUserPlaylists();case 3:return n=e.sent,a=n.items[0].id,e.next=7,W.getPlaylistTracks(a);case 7:r=e.sent,c=r.items.map(function(e){return e.track}),t({type:"FETCH_SONGS_FROM_PLAYLIST",songs:c,playlistId:a}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),t({type:"FETCH_ERROR",error:e.t0});case 15:case"end":return e.stop()}},e,null,[[0,12]])}));return function(t){return e.apply(this,arguments)}}())},onSearchSongs:function(t){return e(function(e){return function(){var t=Object(m.a)(p.a.mark(function t(n){var a;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(""===e){t.next=7;break}return t.next=3,W.searchTracks(e,{limit:5});case 3:a=t.sent,n({type:"FETCH_SONGS_SEARCH",songResults:a.tracks.items}),t.next=8;break;case 7:n({type:"CLEAR_SEARCH"});case 8:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}(t))},onAddSongToPlaylist:function(t){return e(function(e){return function(){var t=Object(m.a)(p.a.mark(function t(n){var a;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W.getUserPlaylists();case 2:a=t.sent,W.addTracksToPlaylist(a.items[0].id,[e.uri]),n({type:"ADD_SONG_TO_PLAYLIST",newSong:e});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}(t))},onNextSong:function(){return e(function(){var e=Object(m.a)(p.a.mark(function e(t){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:W.skipToNext();case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},onPreviousSong:function(){return e(function(){var e=Object(m.a)(p.a.mark(function e(t){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:W.skipToPrevious();case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},onTogglePlay:function(t){return e(function(e){return function(){var t=Object(m.a)(p.a.mark(function t(n){return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e?W.pause():W.play();case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}(t))}}})(X),$=n(34),ee=n(8),te={currentSong:"",searchList:[],playlist:[],playlistUri:""},ne=Object(l.c)({songs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CURRENT_SONG":return Object(ee.a)({},e,{currentSong:t.currentSong});case"FETCH_SONGS_SEARCH":return Object(ee.a)({},e,{searchList:t.songResults});case"CLEAR_SEARCH":return Object(ee.a)({},e,{searchList:[]});case"FETCH_SONGS_FROM_PLAYLIST":return Object(ee.a)({},e,{playlist:t.songs,playlistId:t.playlistId});case"ADD_SONG_TO_PLAYLIST":return Object(ee.a)({},e,{playlist:[].concat(Object($.a)(e.playlist),[t.newSong])});default:return e}}}),ae=Object(l.d)(ne,Object(l.a)(o.a));s.a.render(r.a.createElement(i.a,{store:ae},r.a.createElement(z,null)),document.getElementById("root"))},7:function(e,t,n){e.exports={searchList:"SearchList_searchList__4-7i1",list:"SearchList_list__7R1Fl",listItem:"SearchList_listItem__N9DC4",track:"SearchList_track__2_7CO",albumImage:"SearchList_albumImage__24kuW"}},9:function(e,t,n){e.exports={albumImage:"PlaylistItem_albumImage__eRC4b",labelTrack:"PlaylistItem_labelTrack__3icbk",playlistItem:"PlaylistItem_playlistItem__24u9c"}}},[[35,1,2]]]);