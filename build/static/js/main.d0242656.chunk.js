(window["webpackJsonpbasic-frontend-auth"]=window["webpackJsonpbasic-frontend-auth"]||[]).push([[0],{36:function(e,t,a){e.exports=a(66)},41:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),i=a.n(c),o=(a(41),a(1)),l=a(2),s=a(4),u=a(3),m=a(5),p=a(7),h=a(12),d=a(16),g=a.n(d),f=new(function(){function e(){Object(o.a)(this,e),this.auth=g.a.create({baseURL:"https://blot-backend.herokuapp.com",withCredentials:!0})}return Object(l.a)(e,[{key:"signup",value:function(e){var t=e.name,a=e.username,n=e.password;return this.auth.post("/auth/signup",{name:t,username:a,password:n}).then(function(e){return e.data})}},{key:"login",value:function(e){var t=e.username,a=e.password;return this.auth.post("/auth/login",{username:t,password:a}).then(function(e){return e.data})}},{key:"logout",value:function(){return this.auth.post("/auth/logout").then(function(e){return e.data})}},{key:"me",value:function(){return this.auth.get("/auth/me").then(function(e){return e.data})}}]),e}()),b=r.a.createContext(),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isLoggedIn:!1,user:{},isLoading:!0},a.userSignup=function(e){return f.signup(e).then(function(e){a.setState({isLoggedIn:!0,user:e})})},a.userLogin=function(e){return f.login(e).then(function(e){a.setState({isLoggedIn:!0,user:e})})},a.userLogout=function(){return f.logout().then(function(){a.setState({isLoggedIn:!1,user:{}})})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.me().then(function(t){e.setState({user:t,isLoggedIn:!0,isLoading:!1})}).catch(function(){e.setState({isLoggedIn:!1,user:{},isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.user,a=e.isLoggedIn,n=e.isLoading;return r.a.createElement(r.a.Fragment,null,n?r.a.createElement("p",null,"Loading..."):r.a.createElement(b.Provider,{value:{user:t,isLoggedIn:a,login:this.userLogin,signup:this.userSignup,logout:this.userLogout}},this.props.children))}}]),t}(n.Component),v=function(e){return function(t){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,t),Object(l.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement(b.Consumer,null,function(a){var n=a.user,c=a.isLoggedIn,i=a.login,o=a.signup,l=a.logout;return r.a.createElement(e,Object.assign({user:n,isLoggedIn:c,login:i,signup:o,logout:l},t.props))})}}]),a}(n.Component)},y=v(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.user&&this.setState({isLoading:!1})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Navbar"},this.props.isLoggedIn&&!this.state.isLoading?r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:this.props.user.profileImg,alt:"Profile pic",width:"40px",height:"40px"}),r.a.createElement(p.b,{to:"/user/".concat(this.props.user._id)},this.props.user.name),r.a.createElement("div",{className:"gold-container"},r.a.createElement("img",{src:this.props.user.goldImg,alt:"Gold",width:"20%",height:"100%"}),r.a.createElement("p",{className:"p-maxgold"},this.props.user.gold)),r.a.createElement("button",{className:"logout-button",onClick:this.props.logout},"Logout")):r.a.createElement(r.a.Fragment,null,r.a.createElement(p.b,{to:"/login"},"Login"),r.a.createElement(p.b,{to:"/signup"},"Signup")))}}]),t}(n.Component)),j=a(17);var w=v(function(e){var t=e.isLoggedIn,a=e.component,n=Object(j.a)(e,["isLoggedIn","component"]);return r.a.createElement(r.a.Fragment,null,t?r.a.createElement(h.a,{to:"/private"}):r.a.createElement(h.b,Object.assign({render:function(){return r.a.createElement(a,null)}},n)))});var O=v(function(e){var t=e.isLoggedIn,a=e.component,n=Object(j.a)(e,["isLoggedIn","component"]);return r.a.createElement(r.a.Fragment,null,t?r.a.createElement(h.b,Object.assign({render:function(){return r.a.createElement(a,null)}},n)):r.a.createElement(h.a,{to:"/login"}))}),k=function(e){var t=e.image,a={backgroundImage:"url(".concat(t,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"50% 60%"};return r.a.createElement("div",{className:"slide",style:a})},S=function(e){return r.a.createElement("div",{className:"backArrow",onClick:e.goToPrevSlide},r.a.createElement("i",{className:"fa fa-arrow-left fa-2x","aria-hidden":"true"}))},C=function(e){return r.a.createElement("div",{className:"nextArrow",onClick:e.goToNextSlide},r.a.createElement("i",{className:"fa fa-arrow-right fa-2x","aria-hidden":"true"}))},x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).goToPrevSlide=function(){a.setState(function(e){return{currentIndex:e.currentIndex-1}})},a.goToNextSlide=function(){if(a.state.currentIndex===a.state.images.length-1)return a.setState({currentIndex:0,translateValue:0})},a.state={images:["https://romanmilitary.net/images/sixform.png","http://www.piusxbns.ie/creative_html/0518/darac/battletactic.png","https://romanmilitary.net/images/secform.png"],currentIndex:0,translateValue:0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"slider"},r.a.createElement("div",{className:"slider-wrapper",style:{transform:"translateX(".concat(this.state.translateValue,"px)"),transition:"transform ease-out 0.45s"}},this.state.images.map(function(e,t){return r.a.createElement(k,{key:t,image:e})})),r.a.createElement(S,{goToPrevSlide:this.goToPrevSlide}),r.a.createElement(C,{goToNextSlide:this.goToNextSlide}))}}]),t}(n.Component),N=new(function(){function e(){Object(o.a)(this,e),this.army=g.a.create({baseURL:"https://blot-backend.herokuapp.com",withCredentials:!0})}return Object(l.a)(e,[{key:"createArmy",value:function(){return this.army.post("/army/create").then(function(e){return e.data})}},{key:"getArmy",value:function(e){return this.army.get("/army/".concat(e,"/get")).then(function(e){return e.data})}},{key:"getPopulatedArmy",value:function(){return this.army.get("/army/populate").then(function(e){return e.data})}},{key:"editArmy",value:function(e){return this.army.put("/army/edit",e).then(function(e){return e.data})}}]),e}()),A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={redirect:!1,armyId:""},a.createArmy=function(e){e.preventDefault(),N.createArmy().then(function(e){a.setState({redirect:!0,armyId:e._id})})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.redirect,a=e.armyId;return!1===t?r.a.createElement("div",null,r.a.createElement("button",{onClick:this.createArmy,className:"button-create"},r.a.createElement("img",{src:"https://cdn.shopify.com/s/files/1/0478/9073/products/300_rotated_1024x1024.jpg?v=1546971612",alt:"Button",weight:"50px",height:"50px",align:"center"}),r.a.createElement("p",{className:"p-special"},"+"))):r.a.createElement(h.a,{to:"/private/".concat(a,"/")})}}]),t}(n.Component),L=v(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.user&&this.setState({isLoading:!1})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Footer"},this.props.isLoggedIn&&!this.state.isLoading?r.a.createElement(r.a.Fragment,null,r.a.createElement(p.b,{to:"/private"},r.a.createElement("img",{src:"https://www.pngfind.com/pngs/m/413-4138637_game-of-thrones-game-of-thrones-shield-png.png",alt:"Button",weight:"50px",height:"50px",align:"center"})),r.a.createElement(A,null)):r.a.createElement("p",null))}}]),t}(n.Component)),I=v(function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h1",null,"Available troops")),r.a.createElement("div",{className:"troops-wrapper"},r.a.createElement("div",{className:"troops"},r.a.createElement("img",{src:"https://fireemblemwiki.org/w/images/0/0c/Bs_fe08_innes_sniper_bow.png",alt:"Archer Unit"}),r.a.createElement("h2",null,"Archer"),r.a.createElement("p",{className:"p-troops"},"Agile and ranged soldiers that will drown enemies troops with arrows. ",r.a.createElement("br",null),r.a.createElement("b",null,"Effective against Swordmen."))),r.a.createElement("div",{className:"troops"},r.a.createElement("img",{src:"https://fireemblemwiki.org/w/images/6/68/Bs_fe08_ephraim_great_lord_lance.png",alt:"Rider Unit"}),r.a.createElement("h2",null,"Rider"),r.a.createElement("p",{className:"p-troops"},"Fast and lethal soldiers that will placate even the far away soldiers. ",r.a.createElement("br",null),r.a.createElement("b",null,"Effective against Archers."))),r.a.createElement("div",{className:"troops"},r.a.createElement("img",{src:"https://fireemblemwiki.org/w/images/4/4a/Bs_fe08_ross_warrior_axe.png",alt:"Axemen Unit"}),r.a.createElement("h2",null,"Axemen"),r.a.createElement("p",{className:"p-troops"},"Brave and aggressive soldiers that will knock down even the biggest enemies. ",r.a.createElement("br",null),r.a.createElement("b",null,"Effective against Riders."))),r.a.createElement("div",{className:"troops"},r.a.createElement("img",{src:"https://fireemblemwiki.org/w/images/4/46/Bs_fe08_gerik_mercenary_sword.png",alt:"Swordmen Unit"}),r.a.createElement("h2",null,"Swordmen"),r.a.createElement("p",{className:"p-troops"},"Tenacious and honorable soldiers that fight with their heart and mind. ",r.a.createElement("br",null),r.a.createElement("b",null,"Effective against Axemen."))),r.a.createElement(x,null)),r.a.createElement(L,null))}}]),t}(n.Component)),_=a(13),F=v(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",username:"",password:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state.name,n=a.state.username,r=a.state.password;a.props.signup({name:t,username:n,password:r}).then(function(e){a.setState({name:"",username:"",password:""})}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(_.a)({},n,r))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.username,n=e.password;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",{htmlFor:"name"},"Name:"),r.a.createElement("input",{id:"name",type:"text",name:"name",value:t,placeholder:"Name and Surname (or feudal title)",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"username"},"Username:"),r.a.createElement("input",{id:"username",type:"text",name:"username",value:a,placeholder:"Username to log in",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement("input",{id:"password",type:"password",name:"password",value:n,placeholder:"Password to log in",onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Signup"})),r.a.createElement("p",null,"Already have account?",r.a.createElement(p.b,{to:"/login"}," Login")))}}]),t}(n.Component)),U=v(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.password;a.props.login({username:n,password:r}).then(function(e){}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(_.a)({},n,r))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",{htmlFor:"username"},"Username:"),r.a.createElement("input",{id:"username",type:"text",name:"username",value:t,onChange:this.handleChange,placeholder:"Username"}),r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement("input",{id:"password",type:"password",name:"password",value:a,onChange:this.handleChange,placeholder:"Password"}),r.a.createElement("input",{type:"submit",value:"Login"})),r.a.createElement("p",null,"You don't have an accout yet?",r.a.createElement(p.b,{to:"/signup"}," Signup")))}}]),t}(n.Component)),q={handleError:function(e){var t=!1,a=!1;switch(e.response.data.error){case"username-not-unique":a=!0;break;default:t=!0}return{isAlreadyUsed:a,isCampEmpty:t}},validationUserInfo:function(e){return""===e.name||""===e.username||""===e.password?"This camp is empty":null},handleArmyCreation:function(e){switch(e){case"newArmy":return{soldiers:[],maxGold:400};default:return{soldiers:[]}}}},P=a(21),T=a.n(P),G=a(35),D=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={armies:[],quantity0:0,quantity1:0,quantity2:0,quantity3:0,message:!1,initialGold:a.props.currentGold},a.handleChange=function(){var e=Object(G.a)(T.a.mark(function e(t){return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState(Object(_.a)({},t.target.name,t.target.value));case 2:return e.next=4,a.changeGold();case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.changeGold=function(){var e=a.state,t=e.quantity0,n=e.quantity1,r=e.quantity2,c=e.quantity3,i=e.initialGold-30*t-40*n-40*r-30*c;i<0?(a.setState({message:!0}),a.props.changeState(0)):a.props.changeState(i)},a.handleSubmit=function(e){e.preventDefault()},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.getArmy(this.props.armyId).then(function(t){e.setState({armies:t.soldiers})})}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this,t=this.state,a=t.armies;t.message;return r.a.createElement("div",{className:"army-container-wrapper"},a.length>0?a.map(function(t,a){return r.a.createElement("article",{key:t._id,className:"army-container"},r.a.createElement("form",null,r.a.createElement("p",null,r.a.createElement("img",{src:t.img,alt:"Unit icon"})),r.a.createElement("h3",null,t.name),r.a.createElement("p",{className:"gold-card"},t.price),r.a.createElement("p",{className:"p-card"},t.description),r.a.createElement("input",{type:"number",name:"quantity".concat(a),id:"quantity",value:e.state.quantity,onChange:e.handleChange,placeholder:"Quantity"})))}):r.a.createElement("p",null,"Loading..."))}}]),t}(n.Component),B=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",quantity:"",armyId:a.props.match.params.id,currentGold:300},a.handleAddSoldiers=function(e,t,n){var r={quantity:e=Math.round(100*e)/100,soldierId:n};(0,a.props.handleAddToArmy)(r,t)},a.handleChange=function(e){a.state(Object(_.a)({},e.target.name,e.target.value))},a.changeState=function(e){a.setState({currentGold:e})},a.handleSubmit=function(e){e.preventDefault();var t=a.state.inputValue;if(""===t)a.setState({emptyField:!0});else{var n=q.handleArmyCreation(t);n.soldiers=[],N.editArmy(n).then(function(e){(0,a.props.setUser)(e),a.props.history.push("/user")}).catch(function(e){console.log(e),a.setState({inputValue:""})})}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.handleChange,a=e.handleSubmit,n=e.armyId,c=e.currentGold;return r.a.createElement("div",null,r.a.createElement("h1",null,"Modify the army"),r.a.createElement("h1",{className:"h1-currentgold"},c),r.a.createElement("form",{onChange:a},r.a.createElement("label",{className:"army-name"},"Army name"),r.a.createElement("input",{type:"text",name:"name",id:"name",onChange:t,placeholder:"Army name"}),r.a.createElement(D,{changeState:this.changeState,armyId:n,currentGold:c})),r.a.createElement(L,null))}}]),t}(n.Component),M=Object(h.g)(v(B)),R=v(function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,this.props.user.name),r.a.createElement("img",{src:"https://cdn1.iconfinder.com/data/icons/runes-vikings/205/ThorHammer-512.png",alt:"ProfilePic",width:"50%",height:"50%"}),r.a.createElement(L,null))}}]),t}(n.Component)),V=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Edit User"),r.a.createElement(L,null))}}]),t}(n.Component),J=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Modify Army"),r.a.createElement(L,null))}}]),t}(n.Component),W=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404 - Not Found"),r.a.createElement(L,null))}}]),t}(n.Component),z=(a(65),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(E,null,r.a.createElement("div",{className:"container"},r.a.createElement(y,null),r.a.createElement("div",{className:"background"},r.a.createElement(h.d,null,r.a.createElement(w,{path:"/",exact:!0,component:F}),r.a.createElement(w,{path:"/signup",exact:!0,component:F}),r.a.createElement(w,{path:"/login",exact:!0,component:U}),r.a.createElement(O,{path:"/private",exact:!0,component:I}),r.a.createElement(O,{path:"/private/:id",exact:!0,component:M}),r.a.createElement(O,{path:"/private/modify",exact:!0,component:J}),r.a.createElement(O,{path:"/user/edit",exact:!0,component:V}),r.a.createElement(O,{path:"/user/:id",exact:!0,component:R}),r.a.createElement(h.b,{component:W}))))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.d0242656.chunk.js.map