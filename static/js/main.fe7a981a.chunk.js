(this.webpackJsonpblocktradeapp=this.webpackJsonpblocktradeapp||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/logo.c689c583.png"},23:function(e,t,a){e.exports=a(38)},28:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),l=a.n(o),s=a(6),c=(a(28),a(1)),i=a(9),m=a(10),u=a(12),p=a(11),d=a(17),h=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){if(e.preventDefault(),""!==n.state.email&&""!==n.state.password){var t=n.state.email,a=d(n.state.password);fetch("https://blocktrade-api.herokuapp.com/users").then((function(e){if(e.ok)return e.json();console.log(e)})).then((function(e){var n=e.find((function(e){return e.email===t}));n?a===n.password?(console.log("authenticated!"),console.log(n)):alert("incorrect password"):alert("user doesnt exist")}))}else alert("please fill the form")},n.onEmailInput=function(e){n.setState({email:e.target.value})},n.onPasswordInput=function(e){n.setState({password:e.target.value})},n.state={email:"",password:""},n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Login"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"email",onChange:this.onEmailInput})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"password",onChange:this.onPasswordInput})),r.a.createElement("button",{className:"btn btn-outline-primary"},"Login")),r.a.createElement(s.b,{to:"/signup"},r.a.createElement("p",null,"Not registered? Sign up here!")))}}]),a}(r.a.Component),f=a(21),b=a(17),g=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){if(e.preventDefault(),""!==n.state.name&&""!==n.state.email&&""!==n.state.password&&""!==n.state.publicKey){var t=n.state.name,a=n.state.email,r=b(n.state.password),o=n.state.publicKey;fetch("https://blocktrade-api.herokuapp.com/users").then((function(e){if(e.ok)return e.json();console.log(e)})).then((function(e){var n=e.find((function(e){return e.email===a})),l=e.find((function(e){return e.publicKey===o}));if(n||l)alert("user with these credentials already exists");else{var s={name:t,email:a,password:r,publicKey:o};fetch("https://blocktrade-api.herokuapp.com/users/add",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(s)}).then((function(e){200===e.status?(console.log("user created"),console.log(s)):(alert("server error - failed to create user"),console.log(e))}))}}))}else alert("please complete the form")},n.handleChange=function(e){n.setState(Object(f.a)({},e.target.name,e.target.value))},n.state={name:"",email:"",password:"",publicKey:"",toDashboard:!1},n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Signup"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"name",className:"form-control",name:"name",onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",name:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",name:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"publicKey"},"Public Key"),r.a.createElement("input",{type:"publicKey",className:"form-control",name:"publicKey",onChange:this.handleChange})),r.a.createElement("button",{className:"btn btn-outline-primary"},"Sign Up")),r.a.createElement(s.b,{to:"/"},r.a.createElement("p",null,"Already have an account? Log in here!")))}}]),a}(r.a.Component),E=a(22),v=a.n(E);a(36);var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{id:"wrapper",className:" container d-flex justify-content-center align-items-center"},r.a.createElement("div",{id:"options",className:"d-flex flex-column align-items-center p-5"},r.a.createElement("img",{id:"logo",src:v.a}),r.a.createElement(c.a,{component:h,exact:!0,path:"/"}),r.a.createElement(c.a,{component:g,exact:!0,path:"/signup"}))))};a(37);l.a.render(r.a.createElement(s.a,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.fe7a981a.chunk.js.map