(this.webpackJsonpreactwithharry=this.webpackJsonpreactwithharry||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(17),r=n.n(s),o=(n(25),n(11)),l=n(20),i=(n(26),n(8)),b=n(0);function d(){return Object(b.jsx)("div",{children:Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(i.b,{className:"navbar-brand",to:"/",children:"My Todos App"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/about",children:"About"})})]}),Object(b.jsxs)("form",{className:"d-flex",children:[Object(b.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(b.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})})}function j(e){var t=e.todos,n=e.onDelete;return Object(b.jsxs)("div",{className:"container  text-center my-3",children:[Object(b.jsx)("h4",{children:t.title}),Object(b.jsxs)("p",{children:[" ",t.desc]}),Object(b.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){n(t)},children:"Delete"})]})}function u(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{className:" container text-center",children:"Todos List"}),0===e.todos.length?" No Todo In Display":e.todos.map((function(t){return Object(b.jsx)(j,{todos:t,onDelete:e.onDelete},t.sno)}))]})}var h=function(e){var t=e.addTodo,n=Object(a.useState)(""),c=Object(o.a)(n,2),s=c[0],r=c[1],l=Object(a.useState)(""),i=Object(o.a)(l,2),d=i[0],j=i[1];return Object(b.jsxs)("div",{className:"container py-3",children:[Object(b.jsx)("h3",{className:"text-center",children:"Add Todo"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s&&d?(t(s,d),r(""),j("")):alert("title and desc not blank")},children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"title",className:"form-label",children:"Todo Title"}),Object(b.jsx)("input",{type:"text",value:s,onChange:function(e){r(e.target.value)},className:"form-control",id:"title","aria-describedby":"emailHelp"})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"desc",className:"form-label",children:" Todo Description"}),Object(b.jsx)("input",{type:"text",value:d,onChange:function(e){j(e.target.value)},className:"form-control",id:"desc"})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-sm btn-success",children:"Add Todo"})]})]})};function m(){return Object(b.jsx)("div",{className:"bg-dark text-light style",children:Object(b.jsx)("p",{className:"text-center",children:"Copyright@2021 DesignBy : Hasnain Raza"})})}var x=function(){return Object(b.jsxs)("div",{className:"container text-center",children:[Object(b.jsx)("h1",{children:"This Is An About Component"}),Object(b.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam vero at dolores sed vitae dolor exercitationem accusantium cupiditate atque dicta harum temporibus consequatur repellat quos mollitia, placeat blanditiis quam id."})]})},O=n(2);var p=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){console.log("running succesfully on todos",r),j(r.filter((function(t){return t!=e}))),localStorage.setItem("todos",JSON.stringify(r))},n=function(e,t){console.log("running",t,e);var n={sno:0===r.length?0:r[r.length-1].sno+1,title:e,desc:t};j([].concat(Object(l.a)(r),[n])),console.log(n)},c=Object(a.useState)(e),s=Object(o.a)(c,2),r=s[0],j=s[1];return Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(r))}),[r]),Object(b.jsx)("div",{children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)(d,{}),Object(b.jsxs)(O.c,{children:[Object(b.jsx)(O.a,{exact:!0,path:"/",render:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{addTodo:n}),Object(b.jsx)("hr",{}),Object(b.jsx)(u,{todos:r,onDelete:t})]})}}),Object(b.jsx)(O.a,{exact:!0,path:"/about",children:Object(b.jsx)(x,{})})]}),Object(b.jsx)("hr",{}),Object(b.jsx)(m,{})]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),g()}},[[33,1,2]]]);
//# sourceMappingURL=main.73191735.chunk.js.map