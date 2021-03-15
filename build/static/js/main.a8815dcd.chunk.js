(this["webpackJsonpvidly-app"]=this["webpackJsonpvidly-app"]||[]).push([[0],{15:function(e){e.exports=JSON.parse('{"apiEndpoint":"http://localhost:3900/api"}')},25:function(e,t,a){},29:function(e,t,a){},53:function(e,t,a){e.exports=a(88)},58:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),o=a.n(c),i=(a(58),a(1)),l=a(4),s=a(3),u=a(2),m=a(6),p=a(21),d=a(7),h=a.n(d),v=a(11),b=a(34);var f=a(17),g=a(15),E=a(20),y=a.n(E);y.a.interceptors.response.use(null,(function(e){return e.response&&e.response>=400&&e.response<500||(console.log("Logging the error",e),p.b.error("An unexpected error occurred.")),Promise.response(e)}));var k={get:y.a.get,post:y.a.post,put:y.a.put,delete:y.a.delete};function O(e){return j.apply(this,arguments)}function j(){return(j=Object(v.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=7;break}return e.next=4,k.get("".concat(g.apiEndpoint,"/movies/").concat(t));case 4:return e.abrupt("return",e.sent);case 7:throw Error;case 8:e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",{});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function w(e){var t=Object(f.a)({},e);return delete t.id,e.id?k.put("".concat(g.apiEndpoint,"/movies/").concat(e.id),t):k.post("".concat(g.apiEndpoint,"/movies"),t)}function N(e){return k.delete("".concat(g.apiEndpoint,"/movies/").concat(e))}var S=a(18),x=a.n(S),C=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=Math.ceil(this.props.listLength/this.props.listNum),a=x.a.range(1,t+1);return r.a.createElement("nav",{style:{margin:"2em"},"aria-label":"Page navigation example"},r.a.createElement("ul",{className:"pagination"},a.map((function(t){return r.a.createElement("li",{onClick:function(){return e.props.pageHandler(t)},key:t,className:e.props.currentPage===t?"page-item active":"page-item "},r.a.createElement("a",{href:"#/",className:"page-link"},t))}))))}}]),a}(n.Component),R=function(e){var t=e.genre,a=e.genreHandler,n=e.active;return r.a.createElement("ul",{className:"list-group click"},t.map((function(e){return r.a.createElement("li",{key:e.name,onClick:function(){return a(e)},className:n===e?"list-group-item active":"list-group-item"},e.name)})))},I=a(30),L=a(47),P=a(48),M=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return this.props.likes?r.a.createElement(I.a,{className:"click",onClick:this.props.onClick,icon:L.a}):r.a.createElement(I.a,{className:"click",onClick:this.props.onClick,icon:P.a})}}]),a}(n.Component),T=(a(29),function(e){var t=e.head,a=e.sorting,n=e.movies;return r.a.createElement("thead",null,r.a.createElement("tr",{key:Math.random()},t.map((function(e){return r.a.createElement("th",{key:e.path,onClick:function(){return a(n,e.path)}},e.label)}))))}),B=a(9),G=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).renderList=function(e,t){return t.label?x.a.get(e,t.path):t.content(e)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.paginatedList,n=t.head;return r.a.createElement("tbody",null,a.map((function(t){return r.a.createElement("tr",{key:t._id},n.map((function(a){return"title"===a.path?r.a.createElement("td",{key:a.path||a.key},r.a.createElement(B.b,{to:"/movies/".concat(t._id)},e.renderList(t,a))):r.a.createElement("td",{key:a.path||a.key},e.renderList(t,a))})))})))}}]),a}(n.Component),q=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.filterMovies,n=t.paginatedList,c=t.deleteMovie,o=t.sorting,i=t.heart,l=[{path:"title",label:"Title"},{path:"genre.name",label:"Name"},{path:"numberInStock",label:"Stock"},{path:"dailyRentalRate",label:"Rate"},{key:"Like",content:function(e){return r.a.createElement(M,{likes:e.liked,onClick:function(){return i(e)}})}},{key:"delete",content:function(t){return r.a.createElement("button",{onClick:c.bind(e,t._id),className:"btn click",style:{border:"transparent",borderRadius:"5px",backgroundColor:"red",color:"white"}},"Delete")}}];return r.a.createElement("table",null,r.a.createElement(T,{head:l,sorting:o,movies:a}),r.a.createElement(G,{paginatedList:n,head:l}))}}]),a}(n.Component),A=(a(25),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"add"},r.a.createElement(B.b,{to:"/movies/add"},r.a.createElement("p",{className:"btn btn-primary btn-lg btn-block"},"New Movie")))}}]),a}(n.Component));function D(){return k.get("".concat(g.apiEndpoint,"/genres"))}a(46);var _,U=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={count:[],genre:[],listNum:4,currentPage:1,currentGenre:null},e.liked=function(t){var a=Object(b.a)(e.state.count),n=a.indexOf(t);a[n].liked=!t.liked,e.setState({count:a})},e.sortTitle=function(t,a){var n=x.a.orderBy(t,[a],["asc"]);JSON.stringify(n)!==JSON.stringify(t)||(n=x.a.orderBy(t,[a],["desc"])),e.setState({count:n})},e.getPage=function(t){e.setState({currentPage:t})},e.delete=function(){var t=Object(v.a)(h.a.mark((function t(a){var n,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.count,r=n.filter((function(e){return e._id!==a})),e.setState({count:r}),t.prev=3,t.next=6,N(a);case 6:t.next=12;break;case 8:t.prev=8,t.t0=t.catch(3),t.t0.response&&404===t.t0.response&&p.b.error("This movie has already deleted"),e.setState({count:n});case 12:case"end":return t.stop()}}),t,null,[[3,8]])})));return function(e){return t.apply(this,arguments)}}(),e.getGenre=function(t){e.setState({currentGenre:t,currentPage:1})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state.currentGenre&&this.state.currentGenre._id?this.state.count.filter((function(t){return t.genre.name===e.state.currentGenre.name})):this.state.count,a=function(e,t,a,n){var r=4*(a-1);return n.slice(r,r+4)}(this.state.listNum,t.length,this.state.currentPage,t),n=this.props.user;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("span",{className:"message"},"Movies: ",this.numbering(t)),r.a.createElement("span",{className:"group"},r.a.createElement(R,{genre:this.state.genre,genreHandler:this.getGenre,active:this.state.currentGenre}),n&&r.a.createElement(A,null)),r.a.createElement(q,{filterMovies:t,genres:this.state.genre,paginatedList:a,deleteMovie:this.delete,sorting:this.sortTitle,heart:this.liked}),r.a.createElement("span",{className:"pagi"},r.a.createElement(C,{listNum:this.state.listNum,listLength:t.length,currentPage:this.state.currentPage,pageHandler:this.getPage})))}},{key:"componentDidMount",value:function(){var e=Object(v.a)(h.a.mark((function e(){var t,a,n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:return t=e.sent,a=t.data,e.next=6,k.get("".concat(g.apiEndpoint,"/movies"));case 6:n=e.sent,r=n.data,this.setState({count:r,genre:[{name:"All"}].concat(Object(b.a)(a))});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"numbering",value:function(e){var t=e.length;return t=0===e.length?"No ":t}}]),a}(n.Component),F=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.user;return r.a.createElement("div",{className:"navbar"},r.a.createElement("span",{className:"title"},r.a.createElement("p",{className:"logo"}," Vidly"),r.a.createElement("p",null,r.a.createElement(B.c,{to:"/movies",className:"inactive",activeStyle:{color:"Black"}},"Movies")),r.a.createElement("p",null,r.a.createElement(B.c,{to:"/customers",className:"inactive",activeStyle:{color:"Black"}},"Customers")),r.a.createElement("p",null,r.a.createElement(B.c,{to:"/rentals",className:"inactive",activeStyle:{color:"Black"}},"Rentals")),e&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement(B.c,{to:"/",className:"inactive",activeStyle:{color:"Black"}},e.name)),r.a.createElement("p",null,r.a.createElement(B.c,{to:"/logout",className:"inactive",activeStyle:{color:"Black"}},"logout"))),!e&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement(B.c,{to:"/login",className:"inactive",activeStyle:{color:"Black"}},"login")),r.a.createElement("p",null,r.a.createElement(B.c,{to:"/register",className:"inactive",activeStyle:{color:"Black"}},"Register")))))}}]),a}(n.Component),J=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Customer"))}}]),a}(n.Component),H=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Rental"))}}]),a}(n.Component),W=a(10),V=a.n(W),K=a(24),Y=a(50),$=function(e){var t=e.name,a=e.label,n=e.value,c=e.onChange,o=e.error;return null==o&&(o={}),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{type:"text",className:"form-control",id:t,placeholder:a,value:n,onChange:c}),o[t]&&r.a.createElement("div",{className:"alert alert-danger"},o[t]))},z=function(e){var t=e.name,a=e.label,n=e.value,c=e.onChange,o=e.error,i=e.option;return null==o&&(o={}),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("select",{className:"form-control",id:t,value:n,onChange:c,placeholder:a},i.map((function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.name)}))),o[t]&&r.a.createElement("div",{className:"alert alert-danger"},o[t]))},Q=function(e){e.link;var t=e.label,a=(e.history,e.disabled),n=e.submit;return r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:"btn btn-primary",style:{marginTop:"1em"},onClick:n,disabled:a},t))},X=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={data:{},error:{}},e.validate=function(){var t=V.a.validate(e.state.data,e.schema,{abortEarly:!1});if(!t.error)return null;var a,n=Object(f.a)({},e.state.error),r=Object(Y.a)(t.error.details);try{for(r.s();!(a=r.n()).done;){var c=a.value;n[c.path[0]]=c.message}}catch(o){r.e(o)}finally{r.f()}return n},e.validateProperty=function(t){var a=t.id,n=t.value,r=Object(K.a)({},a,n),c=Object(K.a)({},a,e.schema[a]),o=V.a.validate(r,c);return o.error?o.error.details[0].message:null},e.handleSubmit=function(t){t.preventDefault();var a=e.validate();e.setState({error:a}),a||e.doSubmit()},e.handleLogin=function(t){var a=Object(f.a)({},e.state.error),n=e.validateProperty(t.currentTarget);n?a[t.currentTarget.id]=n:delete a[t.currentTarget.id];var r=Object(f.a)({},e.state.data);r[t.currentTarget.id]=t.currentTarget.value,e.setState({data:r,error:a})},e.input=function(t,a,n,c){return r.a.createElement($,{name:t,label:a,value:n,error:c,onChange:e.handleLogin})},e.select=function(t,a,n,c,o){return r.a.createElement(z,{name:t,label:a,value:n,error:c,option:o,onChange:e.handleLogin})},e.button=function(t,a,n){return r.a.createElement(Q,{submit:e.handleSubmit,link:t,label:a,history:n,disabled:e.validate()})},e}return a}(n.Component),Z=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{id:null,title:"",genreId:"",numberInStock:"",dailyRentalRate:""},error:{},genres:[]},e.schema={id:V.a.any(),title:V.a.string().required().label("Title"),genreId:V.a.string().required().label("Genre"),numberInStock:V.a.number().integer().min(0).required().label("Number In Stock"),dailyRentalRate:V.a.number().min(0).less(11).required().label("Rate")},e.doSubmit=Object(v.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(e.state.data);case 2:console.log("Submitted"),e.props.history.push("/movies");case 4:case"end":return t.stop()}}),t)}))),e.updateMovieData=function(e){return{id:e._id,title:e.title,genreId:e.genre._id,numberInStock:e.numberInStock,dailyRentalRate:e.dailyRentalRate}},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.data,a=e.error,n=e.genres,c=this.props.history;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"formStyle"},"Movie Form"),r.a.createElement("form",null,this.input("title","Title",t.title,a),this.select("genreId","Genre",t.genreId,a,n),this.input("numberInStock","Number In Stock",t.numberInStock,a),this.input("dailyRentalRate","Rate",t.dailyRentalRate,a),this.button("/movies","Save",c)))}},{key:"componentDidMount",value:function(){var e=Object(v.a)(h.a.mark((function e(){var t,a,n,r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:if(t=e.sent,a=t.data,this.setState({genres:a}),"add"!==(n=this.props.id)){e.next=8;break}return e.abrupt("return",null);case 8:return e.next=10,O(n);case 10:r=e.sent,c=r.data,console.log(c),c||(window.location="/no-found"),this.setState({data:this.updateMovieData(c)});case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),a}(X),ee=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.match,a=e.history,n=t.params.id;return r.a.createElement("div",null,r.a.createElement(Z,{id:n,history:a}))}}]),a}(n.Component),te=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"NO Found"))}}]),a}(n.Component),ae=a(51),ne=a.n(ae);function re(){return(re=Object(v.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.post("".concat(g.apiEndpoint,"/auth"),{email:t.username,password:t.password});case 2:a=e.sent,n=a.data,localStorage.setItem("token",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}_=localStorage.getItem("token"),y.a.defaults.headers.common["x-auth-token"]=_;var ce={login:function(e){return re.apply(this,arguments)},logout:function(){localStorage.removeItem("token")},getUser:function(){try{var e=localStorage.getItem("token");return ne()(e)}catch(t){return null}},loginWithJwt:function(e){localStorage.setItem("token",e)}},oe=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{username:"",password:""},error:{}},e.schema={username:V.a.string().required().label("Username"),password:V.a.string().required().label("Password")},e.doSubmit=Object(v.a)(h.a.mark((function t(){var a,n,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=e.state.data,t.next=4,ce.login(a);case 4:n=e.props.location.state,window.location=n?n.from.pathname:"/",t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0.response&&400===t.t0.response&&((r=Object(f.a)({},e.state.error)).username=t.t0.response,e.setState({error:r}));case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(l.a)(a,[{key:"render",value:function(){if(ce.getUser())return r.a.createElement(m.a,{to:"/"});var e=this.state,t=e.data,a=e.error,n=this.props.history;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"formStyle"},"Login"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.input("username","Username",t.username,a),this.input("password","Password",t.password,a),this.button("/movies","Login",n)))}}]),a}(X),ie=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){ce.logout(),window.location="/"}},{key:"render",value:function(){return null}}]),a}(n.Component);function le(e){return k.post("".concat(g.apiEndpoint,"/users"),{email:e.username,password:e.password,name:e.name})}var se=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{username:"",password:"",name:""},error:{}},e.schema={username:V.a.string().required().label("Username").email(),password:V.a.string().required().label("Password").min(5),name:V.a.string().required().label("Name")},e.doSubmit=Object(v.a)(h.a.mark((function t(){var a,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,le(e.state.data);case 3:a=t.sent,ce.loginWithJwt(a.headers["x-auth-token"]),window.location="/",t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0.response&&400===t.t0.response&&((n=Object(f.a)({},e.state.error)).username=t.t0.response.data,e.setState({error:n})),console.log(e.state.error);case 12:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.data,a=e.error,n=this.props.history;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"formStyle"},"Register"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.input("username","Username",t.username,a),this.input("password","Password",t.password,a),this.input("name","Name",t.name,a),this.button("/movies","Register",n)))}}]),a}(X),ue=a(52),me=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=ce.getUser(),t=this.props,a=t.path,n=t.component,c=t.render,o=Object(ue.a)(t,["path","component","render"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.b,Object.assign({path:a},o,{render:function(t){return e?n?r.a.createElement(n,t):c(t):r.a.createElement(m.a,{to:{pathname:"/login",state:{from:t.location}}})}})))}}]),a}(n.Component),pe=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){try{var e=ce.getUser();this.setState({user:e})}catch(t){}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(p.a,null),r.a.createElement(F,{user:this.state.user}),r.a.createElement("div",null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/movies",exact:!0,render:function(t){return r.a.createElement(U,Object.assign({},t,{user:e.state.user}))}}),r.a.createElement(me,{path:"/movies/:id?",component:ee}),r.a.createElement(m.b,{path:"/customers",component:J}),r.a.createElement(m.b,{path:"/rentals",component:H}),r.a.createElement(m.b,{path:"/register",component:se}),r.a.createElement(m.b,{path:"/login",render:function(e){return r.a.createElement(oe,e)}}),r.a.createElement(m.b,{path:"/logout",component:ie}),r.a.createElement(m.b,{path:"/no-found",component:te}),r.a.createElement(m.a,{from:"/",exact:!0,to:"/movies"}),r.a.createElement(m.a,{to:"/no-found"}))))}}]),a}(n.Component);var de=function(){return r.a.createElement("div",null,r.a.createElement(pe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(86),a(87);console.log("Kal-el","VIDLY under developement"),o.a.render(r.a.createElement(B.a,null,r.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.a8815dcd.chunk.js.map