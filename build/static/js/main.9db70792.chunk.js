(window["webpackJsonpbasic-frontend-auth"]=window["webpackJsonpbasic-frontend-auth"]||[]).push([[0],{34:function(e,t,n){e.exports=n(63)},39:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(30),l=n.n(o),u=(n(39),n(1)),c=n(2),i=n(4),s=n(3),m=n(5),p=n(7),h=n(13),d=n(31),g=n.n(d),b=new(function(){function e(){Object(u.a)(this,e),this.auth=g.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:""}).BACKEND_DOMAIN,withCredentials:!0})}return Object(c.a)(e,[{key:"signup",value:function(e){var t=e.name,n=e.username,a=e.password;return this.auth.post("/auth/signup",{name:t,username:n,password:a}).then(function(e){return e.data})}},{key:"login",value:function(e){var t=e.username,n=e.password;return this.auth.post("/auth/login",{username:t,password:n}).then(function(e){var t=e.data;return console.log(t),t})}},{key:"logout",value:function(){return this.auth.post("/auth/logout").then(function(e){return e.data})}},{key:"me",value:function(){return this.auth.get("/auth/me").then(function(e){return e.data})}}]),e}()),E=r.a.createContext(),f=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={isLoggedIn:!1,user:{},isLoading:!0},n.userSignup=function(e){return b.signup(e).then(function(){n.setState({isLoggedIn:!0,user:e})})},n.userLogin=function(e){return b.login(e).then(function(e){n.setState({isLoggedIn:!0,user:e})})},n.userLogout=function(){return b.logout().then(function(){n.setState({isLoggedIn:!1,user:{}})})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.me().then(function(t){e.setState({user:t,isLoggedIn:!0,isLoading:!1})}).catch(function(){e.setState({isLoggedIn:!1,user:{},isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.user,n=e.isLoggedIn,a=e.isLoading;return r.a.createElement(r.a.Fragment,null,a?r.a.createElement("p",null,"Loading..."):r.a.createElement(E.Provider,{value:{user:t,isLoggedIn:n,login:this.userLogin,signup:this.userSignup,logout:this.userLogout}},this.props.children))}}]),t}(a.Component),v=function(e){return function(t){function n(){return Object(u.a)(this,n),Object(i.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(m.a)(n,t),Object(c.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement(E.Consumer,null,function(n){var a=n.user,o=n.isLoggedIn,l=n.login,u=n.signup,c=n.logout;return r.a.createElement(e,Object.assign({user:a,isLoggedIn:o,login:l,signup:u,logout:c},t.props))})}}]),n}(a.Component)},O=v(function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.user&&this.setState({isLoading:!1})}},{key:"render",value:function(){return console.log(this.props.user),r.a.createElement("div",null,this.props.isLoggedIn&&!this.state.isLoading?r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:"https://cdn1.iconfinder.com/data/icons/runes-vikings/205/ThorHammer-512.png",alt:"Profile pic",width:"20px",height:"20px"}),r.a.createElement(p.b,{to:"/user/:id"},this.props.user.name),r.a.createElement("p",null,this.props.user.gold),r.a.createElement("button",{onClick:this.props.logout},"Logout")):r.a.createElement(r.a.Fragment,null,r.a.createElement(p.b,{to:"/login"},"Login"),r.a.createElement(p.b,{to:"/signup"},"Signup")))}}]),t}(a.Component)),j=n(15);var w=v(function(e){var t=e.isLoggedIn,n=e.component,a=Object(j.a)(e,["isLoggedIn","component"]);return r.a.createElement(r.a.Fragment,null,t?r.a.createElement(h.a,{to:"/private"}):r.a.createElement(h.b,Object.assign({render:function(){return r.a.createElement(n,null)}},a)))});var y=v(function(e){var t=e.isLoggedIn,n=e.component,a=Object(j.a)(e,["isLoggedIn","component"]);return r.a.createElement(r.a.Fragment,null,t?r.a.createElement(h.b,Object.assign({render:function(){return r.a.createElement(n,null)}},a)):r.a.createElement(h.a,{to:"/login"}))}),L=v(function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.b,{to:"/private"},r.a.createElement("img",{src:"https://www.pngfind.com/pngs/m/179-1795154_round-larp-viking-shield-round-shield-vikings-weapons.png",alt:"Button",weight:"50px",height:"50px",align:"center"})))}}]),t}(a.Component)),C=v(function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h1",null,"Troops")),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{src:"",alt:""}),r.a.createElement("h2",null,"Warrior"),r.a.createElement("p",null,"Warrior description")),r.a.createElement("div",null,r.a.createElement("img",{src:"",alt:""}),r.a.createElement("h2",null,"Archer"),r.a.createElement("p",null,"Archer description")),r.a.createElement("div",null,r.a.createElement("img",{src:"",alt:""}),r.a.createElement("h2",null,"Rider"),r.a.createElement("p",null,"Rider description")),r.a.createElement("div",null,r.a.createElement("img",{src:"",alt:""}),r.a.createElement("h2",null,"Berserker"),r.a.createElement("p",null,"Berserker description"))))}}]),t}(a.Component)),k=n(16),S=v(function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",username:"",password:""},n.handleFormSubmit=function(e){e.preventDefault();var t=n.state.name,a=n.state.username,r=n.state.password;n.props.signup({name:t,username:a,password:r}).then(function(e){console.log(e),n.setState({name:"",username:"",password:""})}).catch(function(e){return console.log(e)})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(k.a)({},a,r))},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.username,a=e.password;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",{htmlFor:"name"},"Name:"),r.a.createElement("input",{id:"name",type:"text",name:"name",value:t,placeholder:"Name and Surname (or feudal title)",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"username"},"Username:"),r.a.createElement("input",{id:"username",type:"text",name:"username",value:n,placeholder:"Username to log in",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement("input",{id:"password",type:"password",name:"password",value:a,placeholder:"Password to log in",onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Signup"})),r.a.createElement("p",null,"Already have account?",r.a.createElement(p.b,{to:"/login"}," Login")))}}]),t}(a.Component)),I=v(function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},n.handleFormSubmit=function(e){e.preventDefault();var t=n.state,a=t.username,r=t.password;n.props.login({username:a,password:r}).then(function(e){console.log(e)}).catch(function(e){return console.log(e)})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(k.a)({},a,r))},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",{htmlFor:"username"},"Username:"),r.a.createElement("input",{id:"username",type:"text",name:"username",value:t,onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement("input",{id:"password",type:"password",name:"password",value:n,onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Login"})),r.a.createElement("p",null,"You don't have an accout yet?",r.a.createElement(p.b,{to:"/signup"}," Signup")))}}]),t}(a.Component)),F=v(function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"New Army"))}}]),t}(a.Component)),A=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"USER PAGE"))}}]),t}(a.Component),x=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Edit User"))}}]),t}(a.Component),N=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Modify Army"))}}]),t}(a.Component),U=(n(62),function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(f,null,r.a.createElement("div",{className:"container"},r.a.createElement(O,null),r.a.createElement(h.d,null,r.a.createElement(w,{path:"/signup",component:S}),r.a.createElement(w,{path:"/login",component:I}),r.a.createElement(y,{path:"/private/modify",component:N}),r.a.createElement(y,{path:"/private/add",exact:!0,component:F}),r.a.createElement(y,{path:"/private",component:C}),r.a.createElement(y,{path:"/user/edit",exact:!0,component:x}),r.a.createElement(y,{path:"/user",component:A})),r.a.createElement(L,null))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.9db70792.chunk.js.map