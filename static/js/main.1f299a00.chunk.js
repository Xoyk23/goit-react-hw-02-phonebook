(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"ContactForm_form__I1_av",label:"ContactForm_label__2N9so",input:"ContactForm_input__1Mz2U",example:"ContactForm_example__151W3",button:"ContactForm_button__1TCJl"}},,,,,,function(t,e,n){t.exports={list:"ContactsList_list__1ZNde",item:"ContactsList_item__3NBpR",button:"ContactsList_button__3aI2A"}},function(t,e,n){t.exports={container:"Filter_container___PF0J",label:"Filter_label__lQ7Jv",input:"Filter_input__2SJ7N"}},function(t,e,n){t.exports={container:"App_container__1u7nj",title:"App_title__mABQf"}},,,,function(t,e,n){t.exports={contact:"ContactItem_contact__2S8vc"}},,,,,,function(t,e,n){},,,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),o=n.n(r),s=(n(20),n(15)),i=n(3),l=n(4),u=n(7),m=n(6),b=n(13),d=n(5),j=n(25),h=n(2),p=n.n(h),f=n(0),_=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.heandleInput=function(e){t.setState(Object(d.a)({},e.currentTarget.name,e.currentTarget.value))},t.addNewContact=function(e){e.preventDefault(),t.props.onSubmit(Object(b.a)({id:Object(j.a)()},t.state)),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:p.a.form,onSubmit:this.addNewContact,children:[Object(f.jsxs)("label",{className:p.a.label,children:["Name:",Object(f.jsx)("input",{className:p.a.input,name:"name",type:"text",value:this.state.name,onChange:this.heandleInput})]}),Object(f.jsxs)("label",{className:p.a.label,children:["Phone number",Object(f.jsx)("span",{className:p.a.example,children:"(000-00-00)"}),":",Object(f.jsx)("input",{className:p.a.input,name:"number",type:"tel",pattern:"[0-9]{3}-[0-9]{2}-[0-9]{2}",value:this.state.number,onChange:this.heandleInput})]}),Object(f.jsx)("button",{className:p.a.button,type:"submit",children:"Add Contact"})]})}}]),n}(a.Component),C=n(14),O=n.n(C),x=function(t){var e=t.name,n=t.number;return Object(f.jsxs)("div",{className:O.a.contact,children:[Object(f.jsx)("span",{children:e}),Object(f.jsx)("span",{children:n})]})},v=n(8),N=n.n(v),w=function(t){var e=t.contacts,n=t.deleteOnClick;return Object(f.jsx)("ul",{className:N.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(f.jsxs)("li",{className:N.a.item,children:[Object(f.jsx)(x,{name:a,number:c}),Object(f.jsx)("button",{className:N.a.button,id:e,onClick:n,children:"Delete"})]},e)}))})},g=n(9),S=n.n(g),y=function(t){var e=t.value,n=t.onChange;return Object(f.jsx)("div",{className:S.a.container,children:Object(f.jsxs)("label",{className:S.a.label,children:["Filter:",Object(f.jsx)("input",{className:S.a.input,type:"text",value:e,onChange:n})]})})},F=n(10),k=n.n(F),A=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addNewContact=function(e){var n=e.id,a=e.name,c=e.number;t.passNewContact(a,c)&&t.setState((function(t){var e=t.contacts;return{contacts:[].concat(Object(s.a)(e),[{id:n,name:a,number:c}])}}))},t.deleteContact=function(e){var n=e.currentTarget.id;t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==n}))}}))},t.passNewContact=function(e,n){var a=!0;return t.state.contacts.forEach((function(t){var n=t.name;n.toLowerCase()===e.toLowerCase()&&(alert("".concat(n," is already in your contacts list")),a=!1)})),""!==e&&""!==n||(alert("Please whrite all info"),a=!1),a},t.handleChangeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getContactsToShow=function(){var e=t.state,n=e.filter;return e.contacts.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getContactsToShow();return Object(f.jsxs)("div",{className:k.a.container,children:[Object(f.jsx)("h1",{className:k.a.title,children:"Phonebook"}),Object(f.jsx)(_,{onSubmit:this.addNewContact}),Object(f.jsx)("h2",{className:k.a.title,children:"Contacts"}),Object(f.jsx)(y,{value:t,onChange:this.handleChangeFilter}),Object(f.jsx)(w,{contacts:e,deleteOnClick:this.deleteContact})]})}}]),n}(a.Component);n(22);o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(A,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.1f299a00.chunk.js.map