(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,t,n){e.exports=n(66)},66:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(21),i=n.n(c),l=n(24),o=n(13),s=n(42),u=(n(56),n(43)),C=n(15),m=n(8),p=n.n(m),f=n(34),E=n(35),d=n(36),g=n(44),h=n(37),L=n(45),S=n(4),O=n(23),b=n.n(O),v=n(41),_=n(5);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var F=a.a.createElement("title",null,"Group 4"),T=a.a.createElement("desc",null,"Created with Sketch."),j=a.a.createElement("g",{id:"Description",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},a.a.createElement("g",{id:"Group-4"},a.a.createElement("path",{d:"M14.7832571,10.5578395 L14.7832571,10.5578395 C15.7075431,10.5543296 16.4596703,11.3007661 16.4631802,12.2250521 C16.4632191,12.2352993 16.4631639,12.2455466 16.4630146,12.2557928 L16.3652749,18.9629733 C16.3516141,19.9004155 15.5930625,20.6560322 14.6555744,20.6660588 L14.6555744,20.6660588 C13.7445914,20.6758019 12.9981953,19.9452027 12.9884522,19.0342196 C12.9883264,19.022459 12.9883264,19.0106973 12.9884522,18.9989366 L13.060432,12.2688224 C13.0705427,11.3234782 13.8378657,10.5614295 14.7832571,10.5578395 Z",id:"Rectangle",fill:"#7C7B7B",transform:"translate(14.725775, 15.611991) rotate(-45.000000) translate(-14.725775, -15.611991) "}),a.a.createElement("ellipse",{id:"Oval",stroke:"#7C7B7B",strokeWidth:2.75862069,cx:7.24137931,cy:7.35,rx:5.86206897,ry:5.97068966}))),w=function(e){var t=e.svgRef,n=x(e,["svgRef"]);return a.a.createElement("svg",y({width:"19px",height:"20px",viewBox:"0 0 19 20",ref:t},n),F,T,j)},k=a.a.forwardRef(function(e,t){return a.a.createElement(w,y({svgRef:t},e))});n.p;function R(){var e=Object(S.a)(["\n  margin-left: 10px;\n"]);return R=function(){return e},e}var D=_.b.div(R()),P=function(){return a.a.createElement(D,null,a.a.createElement(k,null))};function A(){var e=Object(S.a)(["\n  color: #191414;\n  background-color: #f4f2f2;\n  font-size: 1.6rem;\n  border: none;\n  padding: 1rem 4rem;\n  border-radius: 10rem;\n  width: 35%;\n  transition: all .2s;\n  margin-right: -5rem;\n\n  &:focus {\n    outline: none;\n    width: 45%;\n    background-color: #f0eeee;\n  }\n\n  &::-web-kit-input-placeholder {\n    font-weight: 100;\n    color: #ccc;\n  }\n"]);return A=function(){return e},e}function G(){var e=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 5rem;\n\n  @media (max-width: 37.5em) {\n    margin-top: 10rem;\n  }\n"]);return G=function(){return e},e}var N=_.b.div(G()),I=_.b.input(A()),H=function(e){var t=e.handleSearch,n=Object(r.useState)(""),c=Object(v.a)(n,2),i=c[0],l=c[1];return a.a.createElement(N,null,a.a.createElement(I,{type:"text",value:i,placeholder:"Search an artist or song ...",onChange:function(e){return n=e.target.value,l(n),void t(n);var n}}),a.a.createElement(P,null))};function M(){var e=Object(S.a)(["\n  margin: 1rem .5rem;\n"]);return M=function(){return e},e}function U(){var e=Object(S.a)(["\n  border-radius: 15rem;\n  margin-bottom: .5rem;\n  height: 8rem;\n\n  @media only screen and (max-width: 37.5em) {  \n    height: 6rem;\n  }\n"]);return U=function(){return e},e}function Y(){var e=Object(S.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 15rem;\n  text-align: center;\n\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n    transition: .2s all;\n  }\n\n  &:active {\n    transform: translateY(-1rem);\n  }\n"]);return Y=function(){return e},e}function Z(){var e=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  font-size: 1.2rem;\n  margin-top: 5rem;\n\n  @media only screen and (max-width: 37.5em) {  \n    flex-wrap: wrap;\n  }\n"]);return Z=function(){return e},e}function B(){var e=Object(S.a)(["\n  height: 25vh;\n"]);return B=function(){return e},e}var W=_.b.div(B()),K=_.b.ul(Z()),z=_.b.div(Y()),X=_.b.img(U()),V=_.b.li(M()),J=function(e){var t=e.songs,n=e.addToPlay;return a.a.createElement(W,null,a.a.createElement(K,null,t.map(function(e){return a.a.createElement(z,{onClick:function(){return n(e)}},a.a.createElement(X,{src:e.album.images[1].url,alt:"albumimg"}),a.a.createElement(V,{key:e.id},e.name," - ",e.artists[0].name))})))};function q(){var e=Object(S.a)(["\n  position: relative;\n  ","\n"]);return q=function(){return e},e}function Q(){var e=Object(S.a)(["\n  animation: "," 2s infinite;\n"]);return Q=function(){return e},e}function $(){var e=Object(S.a)(["\n  0%, 20%, 50%, 80%, 100% { transform: translateY(0); };\n  40% { transform: translateY(-3rem); };\n  60% { transform: translateY(-1.5rem); };\n"]);return $=function(){return e},e}function ee(){var e=Object(S.a)(["\n  border-radius: 10rem;\n  margin: 1rem .5rem;\n  height: 10rem;\n"]);return ee=function(){return e},e}function te(){var e=Object(S.a)(["\n  &:hover + "," {\n    opacity: 1;\n    position: absolute;\n    top: -1rem;\n    left: 50%;\n    transform: translate(-50%);\n    transition: all .2s;\n  }\n"]);return te=function(){return e},e}function ne(){var e=Object(S.a)(["\n  opacity: 0;\n  font-size: 1.2rem;\n  font-weight: 300;\n  position: absolute;\n  top: -.5rem;\n  left: 5%;\n  transform: translateX(-50%);\n"]);return ne=function(){return e},e}var re=_.b.span(ne()),ae=_.b.div(te(),re),ce=_.b.img(ee()),ie=Object(_.c)($()),le=Object(_.a)(Q(),ie),oe=_.b.div(q(),function(e){return e.currentSong&&le}),se=function(e){var t=e.id,n=e.albumImg,r=e.artist,c=e.title,i=e.currentSong;return a.a.createElement(oe,{currentSong:i&&i.id===t},a.a.createElement(ae,{id:t},a.a.createElement(ce,{src:n,alt:"albumimg"})),a.a.createElement(re,null," ",r," - ",c," "))};function ue(){var e=Object(S.a)(["\n  display: flex;\n  overflow-x: scroll;\n  white-space: nowrap;\n  justify-content: center;\n  width: 100vw;\n  padding: 2vh;\n  padding-top: 5vh;\n"]);return ue=function(){return e},e}var Ce=_.b.div(ue()),me=function(e){var t=e.playlist,n=e.currentSong;return t?a.a.createElement(Ce,null,t.map(function(e){return a.a.createElement(se,{id:e.id,key:e.id,title:e.name,artist:e.artists[0].name,albumImg:e.album.images[1].url,currentSong:n})})):null},pe=n(29),fe=n.n(pe),Ee=n(25),de={FETCH_CURRENT_SONG:"FETCH_CURRENT_SONG",FETCH_CURRENT_SONG_SUCCEEDED:"FETCH_CURRENT_SONG_SUCCEEDED",FETCH_CURRENT_SONG_FAILED:"FETCH_CURRENT_SONG_FAILED",FETCH_SONGS_FROM_PLAYLIST:"FETCH_SONGS_FROM_PLAYLIST",FETCH_SONGS_FROM_PLAYLIST_SUCCEEDED:"FETCH_SONGS_FROM_PLAYLIST_SUCCEEDED",FETCH_SONGS_FROM_PLAYLIST_FAILED:"FETCH_SONGS_FROM_PLAYLIST_FAILED",FETCH_SONGS_SEARCH:"FETCH_SONGS_SEARCH",FETCH_SONGS_SEARCH_SUCCEEDED:"FETCH_SONGS_SEARCH_SUCCEEDED",FETCH_SONGS_SEARCH_FAILED:"FETCH_SONGS_SEARCH_FAILED",CLEAR_SEARCH:"CLEAR_SEARCH",ADD_SONG_TO_PLAYLIST:"ADD_SONG_TO_PLAYLIST",ADD_SONG_TO_PLAYLIST_SUCCEEDED:"ADD_SONG_TO_PLAYLIST_SUCCEEDED",ADD_SONG_TO_PLAYLIST_FAILED:"ADD_SONG_TO_PLAYLIST_FAILED",SKIP_NEXT:"SKIP_NEXT",SKIP_PREVIOUS:"SKIP_PREVIOUS",TOGGLE_PLAY:"TOGGLE_PLAY"},ge={currentSong:"",searchList:[],playlist:[],playlistUri:""},he={fetchCurrentSong:function(){return{type:de.FETCH_CURRENT_SONG}},fetchSongsFromPlaylist:function(){return{type:de.FETCH_SONGS_FROM_PLAYLIST}},searchSongs:function(e){return{type:de.FETCH_SONGS_SEARCH,term:e}},addSongToPlaylist:function(e){return{type:de.ADD_SONG_TO_PLAYLIST,song:e}},skipNext:function(){return{type:de.SKIP_NEXT}},skipPrevious:function(){return{type:de.SKIP_PREVIOUS}},togglePlay:function(e){return{type:de.TOGGLE_PLAY,playing:e}}};function Le(){var e=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transform: scale(0.5);\n  margin-top: 5rem;\n"]);return Le=function(){return e},e}var Se=_.b.div(Le()),Oe=function(){return a.a.createElement(Se,null,a.a.createElement("svg",{width:"619px",height:"105px",viewBox:"0 0 619 105",version:"1.1"},a.a.createElement("title",null,"Group 3"),a.a.createElement("desc",null,"Created with Sketch."),a.a.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},a.a.createElement("g",{id:"Group-3"},a.a.createElement("g",{id:"sagaplaylist",transform:"translate(72.103516, 0.553711)","fill-rule":"nonzero"},a.a.createElement("path",{d:"M8.05566406,62.9555664 C12.7272369,67.8478435 18.7597287,70.2939453 26.1533203,70.2939453 C29.4638837,70.2939453 32.16747,69.6502343 34.2641602,68.362793 C36.3608503,67.0753516 37.4091797,65.2729608 37.4091797,62.9555664 C37.4091797,60.8956603 36.7838604,59.4611043 35.5332031,58.6518555 C34.2457618,57.8058226 32.5353297,57.346029 30.4018555,57.2724609 L20.2495117,56.3896484 C15.4308027,55.94824 11.5133614,54.3297666 8.49707031,51.5341797 C5.40721111,48.8121609 3.8255212,45.00507 3.75195312,40.112793 C3.8255212,34.2273469 5.90378818,29.8133285 9.98681641,26.8706055 C13.9594925,23.9278824 18.9988301,22.456543 25.1049805,22.456543 C27.7534312,22.456543 30.1259661,22.6220687 32.2226562,22.953125 C34.3193464,23.3209654 36.2872629,23.8359342 38.1264648,24.4980469 C41.6577325,25.9326244 44.8211123,27.8637574 47.6166992,30.2915039 L40.4990234,38.6230469 C38.2919812,37.0413332 35.9562298,35.7355195 33.4916992,34.7055664 C31.0639527,33.7859655 28.2684077,33.3261719 25.1049805,33.3261719 C21.5001447,33.3261719 18.9804759,33.9698829 17.5458984,35.2573242 C16.0377529,36.5447656 15.2836914,38.2000224 15.2836914,40.2231445 C15.2101233,41.5105859 15.7802674,42.6324822 16.9941406,43.5888672 C18.0976618,44.6556043 20.0471865,45.3360988 22.8427734,45.6303711 L32.3330078,46.3476563 C38.292022,46.7890647 42.5956899,48.5914555 45.2441406,51.7548828 C47.7086712,54.844742 48.940918,58.7621833 48.940918,63.5073242 C48.8673499,69.061714 46.6051655,73.3469901 42.1542969,76.3632813 C37.7402123,79.4531404 32.0939472,81.0348304 25.215332,81.1083984 C15.8721864,81.1083984 7.46715973,77.6875342 0,70.8457031 L8.05566406,62.9555664 Z M89.6538086,75.3701172 L89.4331055,75.3701172 C88.3663684,77.3196712 86.7111115,78.7542272 84.4672852,79.6738281 C82.2602429,80.6302131 79.2072135,81.1083984 75.3081055,81.1083984 C68.9076828,81.0348304 63.9786957,79.34279 60.5209961,76.0322266 C56.8793763,72.7952312 55.0585938,68.657089 55.0585938,63.6176758 C55.0585938,58.7989668 56.6402837,54.8079585 59.8037109,51.6445313 C62.9671382,48.4075359 67.6018575,46.752279 73.7080078,46.6787109 L89.6538086,46.6787109 L89.6538086,40.6645508 C89.7273767,35.6251376 85.8099354,33.1790357 77.9013672,33.3261719 C75.0322122,33.3261719 72.7700278,33.6204398 71.1147461,34.2089844 C69.3858963,34.9078811 68.0249073,36.0849527 67.0317383,37.7402344 L57.9829102,30.8432617 C62.3602107,25.1049518 68.8157125,22.3094068 77.3496094,22.456543 C84.5592808,22.3829749 90.3158965,23.7439639 94.6196289,26.5395508 C98.9233614,29.4087058 101.111979,34.3376929 101.185547,41.3266602 L101.185547,80.4462891 L89.6538086,80.4462891 L89.6538086,75.3701172 Z M89.6538086,56.1689453 L75.8598633,56.1689453 C69.1651683,56.3160815 65.8546546,58.6150494 65.9282227,63.065918 C65.9282227,65.015472 66.7926346,66.6707289 68.5214844,68.0317383 C70.1767661,69.5398838 72.9171358,70.2939453 76.7426758,70.2939453 C81.5613848,70.3675134 84.9638573,69.7973694 86.9501953,68.5834961 C88.7526132,67.3696228 89.6538086,64.6108614 89.6538086,60.3071289 L89.6538086,56.1689453 Z M147.305664,74.4321289 C143.516908,78.7358614 138.587921,80.9612623 132.518555,81.1083984 C128.803367,81.0348304 125.713554,80.2439854 123.249023,78.7358398 C120.674141,77.3012624 118.706224,75.7563559 117.345215,74.1010742 C115.837069,72.2250883 114.751956,69.9261204 114.089844,67.2041016 C113.390947,64.5188668 113.041504,59.4059622 113.041504,51.8652344 C113.041504,44.1773704 113.390947,38.9725071 114.089844,36.2504883 C114.751956,33.5652535 115.837069,31.3030691 117.345215,29.4638672 C118.706224,27.6614493 120.674141,26.0429759 123.249023,24.6083984 C125.713554,23.247389 128.803367,22.530111 132.518555,22.456543 C138.220081,22.456543 143.149068,24.7187274 147.305664,29.2431641 L147.305664,23.1738281 L158.837402,23.1738281 L158.837402,79.0668945 C158.690266,87.6743594 156.207381,94.0011191 151.388672,98.0473633 C146.533179,102.20396 140.721388,104.282227 133.953125,104.282227 C126.191693,104.13509 119.570665,100.934927 114.089844,94.6816406 L123.02832,87.5639648 C124.499682,88.9249743 126.191722,90.0836541 128.104492,91.0400391 C130.054046,92.1067762 132.077138,92.6769202 134.173828,92.7504883 C138.10972,92.7504883 141.2731,91.6653754 143.664062,89.4951172 C146.018241,87.2880749 147.232096,84.2350455 147.305664,80.3359375 L147.305664,74.4321289 Z M124.573242,51.8652344 C124.573242,56.2425349 124.720376,59.2587808 125.014648,60.9140625 C125.272137,62.6429123 125.879064,64.0774683 126.835449,65.2177734 C127.607914,66.2477265 128.784986,67.1857054 130.366699,68.0317383 C131.874845,69.0616913 133.750803,69.5766602 135.994629,69.5766602 C138.238455,69.5766602 140.114413,69.0616913 141.622559,68.0317383 C143.130704,67.1857054 144.270992,66.2477265 145.043457,65.2177734 C145.999842,64.0774683 146.643553,62.6429123 146.974609,60.9140625 C147.195314,59.2587808 147.305664,56.2425349 147.305664,51.8652344 C147.305664,47.4143658 147.195314,44.3245529 146.974609,42.5957031 C146.643553,40.8668533 145.999842,39.4690809 145.043457,38.4023438 C144.270992,37.3723907 143.130704,36.3608448 141.622559,35.3676758 C140.114413,34.5216429 138.238455,34.0618493 135.994629,33.9882813 C133.750803,34.0618493 131.874845,34.5216429 130.366699,35.3676758 C128.784986,36.3608448 127.607914,37.3723907 126.835449,38.4023438 C125.879064,39.4690809 125.272137,40.8668533 125.014648,42.5957031 C124.720376,44.3245529 124.573242,47.4143658 124.573242,51.8652344 Z M202.805664,75.3701172 L202.584961,75.3701172 C201.518224,77.3196712 199.862967,78.7542272 197.619141,79.6738281 C195.412098,80.6302131 192.359069,81.1083984 188.459961,81.1083984 C182.059538,81.0348304 177.130551,79.34279 173.672852,76.0322266 C170.031232,72.7952312 168.210449,68.657089 168.210449,63.6176758 C168.210449,58.7989668 169.792139,54.8079585 172.955566,51.6445313 C176.118994,48.4075359 180.753713,46.752279 186.859863,46.6787109 L202.805664,46.6787109 L202.805664,40.6645508 C202.879232,35.6251376 198.961791,33.1790357 191.053223,33.3261719 C188.184068,33.3261719 185.921883,33.6204398 184.266602,34.2089844 C182.537752,34.9078811 181.176763,36.0849527 180.183594,37.7402344 L171.134766,30.8432617 C175.512066,25.1049518 181.967568,22.3094068 190.501465,22.456543 C197.711136,22.3829749 203.467752,23.7439639 207.771484,26.5395508 C212.075217,29.4087058 214.263834,34.3376929 214.337402,41.3266602 L214.337402,80.4462891 L202.805664,80.4462891 L202.805664,75.3701172 Z M202.805664,56.1689453 L189.011719,56.1689453 C182.317024,56.3160815 179.00651,58.6150494 179.080078,63.065918 C179.080078,65.015472 179.94449,66.6707289 181.67334,68.0317383 C183.328622,69.5398838 186.068991,70.2939453 189.894531,70.2939453 C194.71324,70.3675134 198.115713,69.7973694 200.102051,68.5834961 C201.904469,67.3696228 202.805664,64.6108614 202.805664,60.3071289 L202.805664,56.1689453 Z",id:"saga",fill:"#FFFFFF"}),a.a.createElement("path",{d:"M228.234863,23.1738281 L239.766602,23.1738281 L239.766602,29.1328125 C243.592142,24.8658641 248.521129,22.6404632 254.553711,22.456543 C261.579462,22.6404632 266.710759,25.1417402 269.947754,29.9604492 C271.529468,31.7628671 272.61458,34.135402 273.203125,37.078125 C273.754886,39.984064 274.030762,44.9130512 274.030762,51.8652344 C274.030762,58.6334974 273.754886,63.4889176 273.203125,66.4316406 C272.61458,69.3743637 271.529468,71.783682 269.947754,73.659668 C268.36604,75.8667103 266.287773,77.6323176 263.712891,78.956543 C261.174792,80.3175524 258.121763,81.0348304 254.553711,81.1083984 C251.610988,81.1083984 248.980969,80.4646874 246.663574,79.1772461 C244.16226,78.0001569 241.863292,76.3816835 239.766602,74.3217773 L239.766602,103.620117 L228.234863,103.620117 L228.234863,23.1738281 Z M251.077637,69.5766602 C253.799656,69.5766602 255.951489,69.0616913 257.533203,68.0317383 C259.114917,66.9650012 260.236813,65.6040122 260.898926,63.9487305 C261.634607,62.2198807 262.131184,60.3071394 262.388672,58.2104492 C262.46224,56.1505431 262.499023,54.0354926 262.499023,51.8652344 C262.499023,49.584624 262.46224,47.3592231 262.388672,45.1889648 C262.131184,43.0187066 261.634607,41.1059653 260.898926,39.4506836 C260.236813,37.7218338 259.114917,36.3608448 257.533203,35.3676758 C255.951489,34.4480748 253.799656,33.9882812 251.077637,33.9882812 C248.502754,33.9882812 246.461271,34.5216418 244.953125,35.5883789 C243.371411,36.655116 242.212732,38.0528885 241.477051,39.7817383 C240.778154,41.5105881 240.31836,43.3865459 240.097656,45.409668 C239.876952,47.5431422 239.766602,49.6949761 239.766602,51.8652344 C239.766602,53.8883565 239.876952,55.9114482 240.097656,57.9345703 C240.31836,60.0680445 240.778154,61.9991776 241.477051,63.7280273 C242.212732,65.4568771 243.371411,66.8546496 244.953125,67.9213867 C246.461271,69.0249079 248.502754,69.5766602 251.077637,69.5766602 Z M285.886719,0 L297.418457,0 L297.418457,65.6591797 C297.418457,68.2708464 298.853013,69.5766602 301.722168,69.5766602 L305.694824,69.5766602 L305.694824,80.4462891 L300.563477,80.4462891 C296.370096,80.4462891 292.912449,79.3979597 290.19043,77.3012695 C287.321275,75.1677953 285.886719,71.5814054 285.886719,66.5419922 L285.886719,0 Z M344.090332,75.3701172 L343.869629,75.3701172 C342.802892,77.3196712 341.147635,78.7542272 338.903809,79.6738281 C336.696766,80.6302131 333.643737,81.1083984 329.744629,81.1083984 C323.344206,81.0348304 318.415219,79.34279 314.95752,76.0322266 C311.3159,72.7952312 309.495117,68.657089 309.495117,63.6176758 C309.495117,58.7989668 311.076807,54.8079585 314.240234,51.6445312 C317.403662,48.4075359 322.038381,46.752279 328.144531,46.6787109 L344.090332,46.6787109 L344.090332,40.6645508 C344.1639,35.6251376 340.246459,33.1790357 332.337891,33.3261719 C329.468736,33.3261719 327.206551,33.6204398 325.55127,34.2089844 C323.82242,34.9078811 322.461431,36.0849527 321.468262,37.7402344 L312.419434,30.8432617 C316.796734,25.1049518 323.252236,22.3094068 331.786133,22.456543 C338.995804,22.3829749 344.75242,23.7439639 349.056152,26.5395508 C353.359885,29.4087058 355.548502,34.3376929 355.62207,41.3266602 L355.62207,80.4462891 L344.090332,80.4462891 L344.090332,75.3701172 Z M344.090332,56.1689453 L330.296387,56.1689453 C323.601692,56.3160815 320.291178,58.6150494 320.364746,63.065918 C320.364746,65.015472 321.229158,66.6707289 322.958008,68.0317383 C324.61329,69.5398838 327.353659,70.2939453 331.179199,70.2939453 C335.997908,70.3675134 339.400381,69.7973694 341.386719,68.5834961 C343.189137,67.3696228 344.090332,64.6108614 344.090332,60.3071289 L344.090332,56.1689453 Z M360.63623,23.1738281 L372.830078,23.1738281 L386.40332,63.2866211 L386.624023,63.2866211 L400.14209,23.1738281 L412.391113,23.1738281 L387.727539,92.309082 C386.145825,96.6128145 383.957208,99.5922769 381.161621,101.247559 C378.32925,102.829272 375.129087,103.620117 371.561035,103.620117 L367.753906,103.620117 L367.753906,92.7504883 L371.119629,92.7504883 C372.627774,92.7504883 374.025547,92.3458699 375.312988,91.5366211 C376.60043,90.6905882 377.501625,89.4399497 378.016602,87.784668 L381.161621,78.184082 L360.63623,23.1738281 Z M418.012207,0 L429.543945,0 L429.543945,65.6591797 C429.543945,68.2708464 430.978501,69.5766602 433.847656,69.5766602 L437.820312,69.5766602 L437.820312,80.4462891 L432.688965,80.4462891 C428.495585,80.4462891 425.037937,79.3979597 422.315918,77.3012695 C419.446763,75.1677953 418.012207,71.5814054 418.012207,66.5419922 L418.012207,0 Z M446.476074,23.1738281 L458.007812,23.1738281 L458.007812,80.4462891 L446.476074,80.4462891 L446.476074,23.1738281 Z M446.476074,0 L458.007812,0 L458.007812,11.5317383 L446.476074,11.5317383 L446.476074,0 Z M473.946777,62.9555664 C478.61835,67.8478435 484.650842,70.2939453 492.044434,70.2939453 C495.354997,70.2939453 498.058583,69.6502343 500.155273,68.362793 C502.251964,67.0753516 503.300293,65.2729608 503.300293,62.9555664 C503.300293,60.8956603 502.674974,59.4611043 501.424316,58.6518555 C500.136875,57.8058226 498.426443,57.346029 496.292969,57.2724609 L486.140625,56.3896484 C481.321916,55.94824 477.404475,54.3297666 474.388184,51.5341797 C471.298324,48.8121609 469.716634,45.00507 469.643066,40.112793 C469.716634,34.2273469 471.794901,29.8133285 475.87793,26.8706055 C479.850606,23.9278824 484.889943,22.456543 490.996094,22.456543 C493.644544,22.456543 496.017079,22.6220687 498.11377,22.953125 C500.21046,23.3209654 502.178376,23.8359342 504.017578,24.4980469 C507.548846,25.9326244 510.712226,27.8637574 513.507812,30.2915039 L506.390137,38.6230469 C504.183094,37.0413332 501.847343,35.7355195 499.382812,34.7055664 C496.955066,33.7859655 494.159521,33.3261719 490.996094,33.3261719 C487.391258,33.3261719 484.871589,33.9698829 483.437012,35.2573242 C481.928866,36.5447656 481.174805,38.2000224 481.174805,40.2231445 C481.101237,41.5105859 481.671381,42.6324822 482.885254,43.5888672 C483.988775,44.6556043 485.9383,45.3360988 488.733887,45.6303711 L498.224121,46.3476562 C504.183135,46.7890647 508.486803,48.5914555 511.135254,51.7548828 C513.599784,54.844742 514.832031,58.7621833 514.832031,63.5073242 C514.758463,69.061714 512.496279,73.3469901 508.04541,76.3632812 C503.631326,79.4531404 497.98506,81.0348304 491.106445,81.1083984 C481.7633,81.1083984 473.358273,77.6875342 465.891113,70.8457031 L473.946777,62.9555664 Z M526.13623,5.73828125 L537.667969,5.73828125 L537.667969,23.1738281 L546.054688,23.1738281 L546.054688,31.9467773 L537.667969,31.9467773 L537.667969,65.328125 C537.594401,68.234064 538.95539,69.6502282 541.750977,69.5766602 L546.054688,69.5766602 L546.054688,80.4462891 L540.040527,80.4462891 C535.994283,80.4462891 532.683769,79.1956505 530.108887,76.6943359 C527.460436,74.3033735 526.13623,70.8457257 526.13623,66.3212891 L526.13623,31.9467773 L520.397949,31.9467773 L520.397949,23.1738281 L526.13623,23.1738281 L526.13623,5.73828125 Z",id:"playlist",fill:"#FFA500"})),a.a.createElement("g",{id:"Group-2",transform:"translate(0.000000, 28.000000)",fill:"#FFFFFF"},a.a.createElement("g",{id:"Group"},a.a.createElement("rect",{id:"Rectangle",x:"0",y:"0",width:"12",height:"11"}),a.a.createElement("rect",{id:"Rectangle-Copy-5",x:"17",y:"0",width:"47",height:"11"}),a.a.createElement("rect",{id:"Rectangle-Copy",x:"0",y:"20",width:"12",height:"11"}),a.a.createElement("rect",{id:"Rectangle-Copy-4",x:"17",y:"20",width:"37",height:"11"}),a.a.createElement("rect",{id:"Rectangle-Copy-2",x:"0",y:"40",width:"12",height:"11"}),a.a.createElement("rect",{id:"Rectangle-Copy-3",x:"17",y:"40",width:"24",height:"11"})))))))};function be(){var e=Object(S.a)(["\n  &:hover {\n    fill: #1DB954;\n    cursor: pointer;\n    transition: all .1s;\n  }\n"]);return be=function(){return e},e}var ve=_.b.div(be()),_e=function(e){var t=e.clickNext;return a.a.createElement(ve,{onClick:t},a.a.createElement("svg",{width:"30px",height:"29px",viewBox:"0 0 30 29"},a.a.createElement("title",null,"Next"),a.a.createElement("desc",null,"Created with Sketch."),a.a.createElement("g",{id:"Description",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},a.a.createElement("g",{id:"Group",fill:"#FFFFFF"},a.a.createElement("path",{d:"M13.380043,2.8427565 L26.6310856,25.1356413 C26.9132788,25.610389 26.7571826,26.224011 26.2824349,26.5062042 C26.1278394,26.5980969 25.9513233,26.6465974 25.7714788,26.6465974 L-0.730606279,26.6465974 C-1.28289103,26.6465974 -1.73060628,26.1988822 -1.73060628,25.6465974 C-1.73060628,25.466753 -1.68210571,25.2902369 -1.59021307,25.1356413 L11.6608295,2.8427565 C11.9430227,2.36800878 12.5566447,2.21191256 13.0313924,2.49410584 C13.174888,2.57940062 13.2947483,2.69926085 13.380043,2.8427565 Z",id:"Triangle-Copy",transform:"translate(12.520514, 14.500078) rotate(-270.000000) translate(-12.520514, -14.500078) "}),a.a.createElement("rect",{id:"Rectangle",x:"24.8739938",y:"0",width:"5",height:"29"})))))};function ye(){var e=Object(S.a)(["\n  &:hover {\n    fill: #1DB954;\n    cursor: pointer;\n    transition: all .1s;\n  }\n"]);return ye=function(){return e},e}var xe=_.b.div(ye()),Fe=function(e){var t=e.clickPrevious;return a.a.createElement(xe,{onClick:t},a.a.createElement("svg",{width:"30px",height:"29px",viewBox:"0 0 30 29"},a.a.createElement("title",null,"Previous"),a.a.createElement("desc",null,"Created with Sketch."),a.a.createElement("g",{id:"Description",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},a.a.createElement("g",{id:"Group-Copy",transform:"translate(15.000000, 14.500000) rotate(-180.000000) translate(-15.000000, -14.500000) ",fill:"#FFFFFF"},a.a.createElement("path",{d:"M13.380043,2.8427565 L26.6310856,25.1356413 C26.9132788,25.610389 26.7571826,26.224011 26.2824349,26.5062042 C26.1278394,26.5980969 25.9513233,26.6465974 25.7714788,26.6465974 L-0.730606279,26.6465974 C-1.28289103,26.6465974 -1.73060628,26.1988822 -1.73060628,25.6465974 C-1.73060628,25.466753 -1.68210571,25.2902369 -1.59021307,25.1356413 L11.6608295,2.8427565 C11.9430227,2.36800878 12.5566447,2.21191256 13.0313924,2.49410584 C13.174888,2.57940062 13.2947483,2.69926085 13.380043,2.8427565 Z",id:"Triangle-Copy-2",transform:"translate(12.520514, 14.500078) rotate(-270.000000) translate(-12.520514, -14.500078) "}),a.a.createElement("rect",{id:"Rectangle",x:"24.8739938",y:"0",width:"5",height:"29"})))))};function Te(){var e=Object(S.a)(["\n  &:hover {\n    fill: #1DB954;\n    cursor: pointer;\n    transition: all .1s;\n  }\n"]);return Te=function(){return e},e}var je=_.b.div(Te()),we=function(e){var t=e.isPlaying,n=e.playSong;return t?a.a.createElement(je,{onClick:n},a.a.createElement("svg",{width:"56px",height:"56px",viewBox:"0 0 56 56"},a.a.createElement("title",null,"Group 2"),a.a.createElement("desc",null,"Created with Sketch."),a.a.createElement("g",{id:"Description",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},a.a.createElement("g",{id:"Group-6"},a.a.createElement("g",{id:"Group-2",stroke:"#FFFFFF",strokeWidth:"2"},a.a.createElement("circle",{id:"Oval",cx:"28",cy:"28",r:"27"})),a.a.createElement("g",{id:"Group-5",transform:"translate(20.000000, 14.000000)",fill:"#FFFFFF"},a.a.createElement("rect",{id:"Rectangle",x:"0",y:"0",width:"5",height:"29"}),a.a.createElement("rect",{id:"Rectangle-Copy",x:"10",y:"0",width:"5",height:"29"})))))):a.a.createElement(je,{onClick:n},a.a.createElement("svg",{width:"56px",height:"56px",viewBox:"0 0 56 56"},a.a.createElement("title",null,"Group 2"),a.a.createElement("desc",null,"Created with Sketch."),a.a.createElement("g",{id:"Description",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},a.a.createElement("g",{id:"Group-2"},a.a.createElement("circle",{id:"Oval",stroke:"#FFFFFF",strokeWidth:"2",cx:"28",cy:"28",r:"27"}),a.a.createElement("path",{d:"M31.9246646,15.5313589 L45.8542333,39.3892467 C46.1524238,39.8999728 45.9801296,40.5557293 45.4694035,40.8539197 C45.3055497,40.9495867 45.1192192,41 44.9294819,41 L17.0703444,41 C16.4789404,41 15.9995127,40.5205723 15.9995127,39.9291683 C15.9995127,39.739431 16.049926,39.5531005 16.145593,39.3892467 L30.0751617,15.5313589 C30.3733522,15.0206328 31.0291086,14.8483386 31.5398348,15.1465291 C31.6991119,15.239524 31.8316697,15.3720817 31.9246646,15.5313589 Z",id:"Triangle-Copy",fill:"#FFFFFF",transform:"translate(31.000000, 28.000000) rotate(-270.000000) translate(-31.000000, -28.000000) "})))))},ke=n(11),Re=Object(ke.a)({basename:""});function De(){var e=Object(S.a)(["\n  margin-top: 5rem;\n  font-size: 2rem;\n  text-decoration: none;\n  background-color: #1db954;\n  color: white;\n  padding: 1rem 6rem;\n  border-radius: 5rem;\n\n  &:hover {\n    transform: translateY(-.2rem);\n    transition: all .2s;\n  }\n"]);return De=function(){return e},e}function Pe(){var e=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 2rem;\n  font-weight: 300;\n  font-family: 'Roboto', sans-serif;\n  color: white;\n  height: 100vh;\n"]);return Pe=function(){return e},e}function Ae(){var e=Object(S.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 50%;\n"]);return Ae=function(){return e},e}function Ge(){var e=Object(S.a)(["\n  display: flex;\n  flex-basis: 100%;\n  justify-content: center;\n  margin: 5rem;\n  font-weight: 300;\n  font-size: 1.6rem;\n"]);return Ge=function(){return e},e}function Ne(){var e=Object(S.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  background-color: #141919;\n"]);return Ne=function(){return e},e}function Ie(){var e=Object(S.a)(["\n  padding: 0;\n  font-family: 'Roboto', sans-serif;\n  color: white;\n"]);return Ie=function(){return e},e}var He=new b.a,Me=_.b.div(Ie()),Ue=_.b.div(Ne()),Ye=_.b.div(Ge()),Ze=_.b.div(Ae()),Be=_.b.div(Pe()),We=_.b.a(De()),Ke=function(e){function t(){var e;Object(E.a)(this,t),(e=Object(g.a)(this,Object(h.a)(t).call(this))).componentDidMount=function(){e.props.fetchSongsFromPlaylist(),e.timer=setInterval(function(){e.props.fetchCurrentSong(),e.playSong()},3e3)},e.nowPlaying=function(){var t=e.props.currentSong;return fe.a.isEmpty(t)?null:a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null," ",t.artists[0].name," - ",t.name," "))},e.playSong=function(){var t=Object(f.a)(p.a.mark(function t(n){return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,He.getMyCurrentPlaybackState();case 2:t.sent.is_playing?e.setState({isPlaying:!0}):e.setState({isPlaying:!1});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();var n=e.getHashParams().access_token;return n&&He.setAccessToken(n),e.state={loggedIn:!!n,isPlaying:!0},Re.replace("/"),e}return Object(L.a)(t,e),Object(d.a)(t,[{key:"getHashParams",value:function(){var e,t={},n=/([^&;=]+)=?([^&;]*)/g,r=window.location.hash.substring(1);for(e=n.exec(r);e;)t[e[1]]=decodeURIComponent(e[2]),e=n.exec(r);return t}},{key:"render",value:function(){var e=this,t=fe.a.debounce(function(t){e.props.searchSongs(t)},500),n=this.props.currentSong;return this.state.loggedIn?a.a.createElement(Me,null,a.a.createElement(Oe,null),a.a.createElement(H,{handleSearch:t}),a.a.createElement(J,{songs:this.props.searchList,addToPlay:this.props.addSongToPlaylist}),a.a.createElement(Ue,null,a.a.createElement(Ye,null,this.nowPlaying()),a.a.createElement(Ze,null,a.a.createElement(Fe,{clickPrevious:this.props.skipPrevious}),a.a.createElement(we,{isPlaying:this.state.isPlaying,playSong:function(){return e.props.togglePlay(e.state.isPlaying)}}),a.a.createElement(_e,{clickNext:this.props.skipNext})),a.a.createElement(me,{playlist:this.props.playlist,currentSong:n||null}))):a.a.createElement(Be,null,a.a.createElement("div",null,"Please make sure you are playing one of your playlists in Spotify on any device"),a.a.createElement(We,{href:"https://sagaplaylist.lkameya.com/api/login"},"Continue"))}}]),t}(r.Component),ze=Object(l.b)(function(e){return{currentSong:e.songs.currentSong,playlist:e.songs.playlist,searchList:e.songs.searchList,playlistId:e.songs.playlistId}},function(e){return Object(o.b)(Object(C.a)({},he),e)})(Ke),Xe=Object(o.c)({songs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case de.FETCH_CURRENT_SONG_SUCCEEDED:return Object(C.a)({},e,{currentSong:t.currentSong});case de.FETCH_SONGS_SEARCH_SUCCEEDED:return Object(C.a)({},e,{searchList:t.songResults});case de.CLEAR_SEARCH:return Object(C.a)({},e,{searchList:[]});case de.FETCH_SONGS_FROM_PLAYLIST_SUCCEEDED:return Object(C.a)({},e,{playlist:t.songs,playlistId:t.playlistId});case de.ADD_SONG_TO_PLAYLIST_SUCCEEDED:return Object(C.a)({},e,{playlist:[].concat(Object(Ee.a)(e.playlist),[t.newSong])});default:return e}}}),Ve=n(7),Je=p.a.mark(at),qe=p.a.mark(ct),Qe=p.a.mark(it),$e=p.a.mark(lt),et=p.a.mark(ot),tt=p.a.mark(st),nt=p.a.mark(ut),rt=new b.a;function at(){var e;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Ve.b)(rt.getMyCurrentPlaybackState);case 3:return e=t.sent,t.next=6,Object(Ve.c)({type:de.FETCH_CURRENT_SONG_SUCCEEDED,currentSong:e.item});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(Ve.c)({type:de.FETCH_CURRENT_SONG_FAILED,message:t.t0.message});case 12:case"end":return t.stop()}},Je,null,[[0,8]])}function ct(){var e,t,n,r,a;return p.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(Ve.b)(rt.getMyCurrentPlayingTrack);case 3:return e=c.sent,t=e.context.uri.split(":"),n=t[t.length-1],c.next=8,Object(Ve.b)([rt,"getPlaylistTracks"],n);case 8:return r=c.sent,a=r.items.map(function(e){return e.track}),c.next=12,Object(Ve.c)({type:de.FETCH_SONGS_FROM_PLAYLIST_SUCCEEDED,songs:a,playlistId:n});case 12:c.next=18;break;case 14:return c.prev=14,c.t0=c.catch(0),c.next=18,Object(Ve.c)({type:de.FETCH_SONGS_FROM_PLAYLIST_FAILED,message:c.t0.message});case 18:case"end":return c.stop()}},qe,null,[[0,14]])}function it(e){var t,n;return p.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(t=e.term,r.prev=1,""===t){r.next=10;break}return r.next=5,Object(Ve.b)([rt,"searchTracks"],t,{limit:5});case 5:return n=r.sent,r.next=8,Object(Ve.c)({type:de.FETCH_SONGS_SEARCH_SUCCEEDED,songResults:n.tracks.items});case 8:r.next=12;break;case 10:return r.next=12,Object(Ve.c)({type:de.CLEAR_SEARCH});case 12:r.next=18;break;case 14:return r.prev=14,r.t0=r.catch(1),r.next=18,Object(Ve.c)({type:de.FETCH_SONGS_SEARCH_FAILED,message:r.t0.message});case 18:case"end":return r.stop()}},Qe,null,[[1,14]])}function lt(e){var t,n,r,a;return p.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.song,c.prev=1,c.next=4,Object(Ve.b)(rt.getMyCurrentPlayingTrack);case 4:return n=c.sent,r=n.context.uri.split(":"),a=r[r.length-1],c.next=9,Object(Ve.b)([rt,"addTracksToPlaylist"],a,[t.uri]);case 9:return c.next=11,Object(Ve.c)({type:de.ADD_SONG_TO_PLAYLIST_SUCCEEDED,newSong:t});case 11:c.next=17;break;case 13:return c.prev=13,c.t0=c.catch(1),c.next=17,Object(Ve.c)({type:de.ADD_SONG_TO_PLAYLIST_FAILED,newSong:t});case 17:case"end":return c.stop()}},$e,null,[[1,13]])}function ot(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Ve.b)([rt,"skipToNext"]);case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),e.next=9,null;case 9:case"end":return e.stop()}},et,null,[[0,5]])}function st(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Ve.b)([rt,"skipPrevious"]);case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),e.next=9,null;case 9:case"end":return e.stop()}},tt,null,[[0,5]])}function ut(e){var t;return p.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.playing,n.prev=1,!t){n.next=7;break}return n.next=5,Object(Ve.b)([rt,"pause"]);case 5:n.next=9;break;case 7:return n.next=9,Object(Ve.b)([rt,"play"]);case 9:n.next=15;break;case 11:return n.prev=11,n.t0=n.catch(1),n.next=15,null;case 15:case"end":return n.stop()}},nt,null,[[1,11]])}var Ct=[Object(Ve.d)(de.FETCH_CURRENT_SONG,at),Object(Ve.d)(de.FETCH_SONGS_FROM_PLAYLIST,ct),Object(Ve.d)(de.FETCH_SONGS_SEARCH,it),Object(Ve.d)(de.ADD_SONG_TO_PLAYLIST,lt),Object(Ve.d)(de.SKIP_NEXT,ot),Object(Ve.d)(de.SKIP_PREVIOUS,st),Object(Ve.d)(de.TOGGLE_PLAY,ut)],mt=p.a.mark(pt);function pt(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ve.a)(Object(Ee.a)(Ct));case 2:case"end":return e.stop()}},mt)}var ft=Object(s.a)(),Et=Object(o.e)(Xe,Object(o.a)(ft));ft.run(pt),i.a.render(a.a.createElement(l.a,{store:Et},a.a.createElement(u.a,null,a.a.createElement(ze,null))),document.getElementById("root"))}},[[47,1,2]]]);