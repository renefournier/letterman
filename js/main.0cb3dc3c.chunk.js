(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,l){e.exports=l(28)},20:function(e,a,l){},28:function(e,a,l){"use strict";l.r(a);var n=l(0),t=l.n(n),r=l(1),i=l.n(r),o=(l(20),l(21),l(4)),s=l(9),c=l(10),u=l(13),m=l(11),d=l(14),p=function(e){var a=e.label,l=void 0!==a&&a,n=e.name,r=e.type,i=void 0===r?"text":r,o=e.value,s=void 0===o?"":o,c=e.placeholder,u=void 0===c?"":c,m=e.classes,d=void 0===m?"form-control ":m,p=e.autofocus,g=void 0!==p&&p,h=e.helpText,v=e.error,b=e.handleChange;return t.a.createElement(t.a.Fragment,null,l&&t.a.createElement("label",{htmlFor:n},l),t.a.createElement("input",{autoFocus:g,type:i,className:d,id:n,name:n,placeholder:u,value:s,onChange:b}),h&&t.a.createElement("small",{className:"form-text text-muted"},h),v&&t.a.createElement("div",{className:""},t.a.createElement("div",{className:"invalid-feedback d-block"},v)))},g=l(2),h=function(e){var a=e.label,l=e.name,n=e.value,r=e.type,i=void 0===r?"text":r,o=e.placeholder,s=e.classes,c=void 0===s?"form-control ":s,u=e.required,m=e.handleChange;return t.a.createElement("div",null,t.a.createElement("div",{className:"form-group"},t.a.createElement("div",{className:"input-group mb-3"},a&&t.a.createElement("div",{className:"input-group-prepend"},t.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},a)),t.a.createElement("input",{className:c,type:i,id:l,name:l,value:n,required:u,autoComplete:"off",placeholder:o,onChange:m}))))},v=function(e){var a=e.label,l=e.name,n=e.checked,r=e.value,i=void 0===r?"all":r,o=e.classes,s=void 0===o?"  ":o,c=e.handleChange;return t.a.createElement("div",{className:" "},t.a.createElement("input",{type:"checkbox",name:l,className:s,onChange:c,value:i,checked:n})," ",t.a.createElement("label",{className:" "},a))},b={standing:[{value:"STEX",label:"In good standing and is exemplary"},{value:"STGS",label:"In good standing"},{value:"STNE",label:"Needing help/encouragement"},{value:"STUR",label:"Under restrictions"},{value:"STDF",label:"Disfellowshipped"}],appointments:[{value:"PMS",article:"a",label:"Ministerial Servant"},{value:"PEL",article:"an",label:"Elder"},{value:"PRP",article:"a",label:"Regular Pioneer"},{value:"PSP",article:"a",label:"Special Pioneer"}],assignments:[{value:"ALL",label:"Select all"},{value:"NONE",label:"Select none"},{value:"AVC",label:"A/V: Console"},{value:"AVP",label:"A/V: Platform"},{value:"AVM",label:"A/V: Microphones"},{value:"AVA",label:"A/V: Attendant"},{value:"PPR",label:"General: Public prayer"},{value:"LMCHM",label:"Life & Ministry: Chairman"},{value:"LMTRT",label:"Treasures: Talk"},{value:"LMTRG",label:"Treasures: Gems"},{value:"LMTRB",label:"Treasures: Bible reading"},{value:"LMFMD",label:"Field Ministry: Demo"},{value:"LMFMT",label:"Field Ministry: Talk"},{value:"LMLCT",label:"Living as Christians: Talk"},{value:"LMLCD",label:"Living as Christians: Discussion"},{value:"LMLCC",label:"Living as Christians: Congregation Bible Study: Conductor"},{value:"LMLCR",label:"Living as Christians: Congregation Bible Study: Reader"},{value:"PMPTC",label:"Public Talk: Chairman"},{value:"PMPTS",label:"Public Talk: Speaker"},{value:"PMPTO",label:"Public Talk: Outgoing speaker"},{value:"PMWTC",label:"Watchtower: Conductor"},{value:"PMWTR",label:"Watchtower: Reader"},{value:"FSGO",label:"FSGO: Overseer"},{value:"FSGA",label:"FSGO: Assistant"},{value:"PCW",label:"Public (cart) witnessing"}],fruits:[{value:"love",label:"love"},{value:"joy",label:"joy"},{value:"peace",label:"peace"},{value:"patience",label:"patience"},{value:"kindness",label:"kindness"},{value:"goodness",label:"goodness"},{value:"faith",label:"faith"},{value:"mildness",label:"mildness"},{value:"self-control",label:"self-control"}],qualities:[{value:"meeting attendance",label:"meeting attendance"},{value:"participation at meetings",label:"participation at meetings"},{value:"field service activity",label:"field service activity"},{value:"dependability & organization",label:"dependability & organization"},{value:"dignified personal appearance",label:"dignified personal appearance"},{value:"balance in judgment",label:"balance in judgment"},{value:"reasonableness",label:"reasonableness"},{value:"peaceableness",label:"peaceableness"},{value:"accepting counsel",label:"accepting counsel"},{value:"maturity",label:"maturity"},{value:"hospitality",label:"hospitality"},{value:"humility",label:"humility"},{value:"warmth",label:"warmth"},{value:"effective teaching",label:"effective teaching"}],sexes:[{value:"M",label:"Male"},{value:"F",label:"Female"}],samplePeople:[{id:String(1e7*Math.random()),name:"John",age:46,sex:{value:"M",label:"Male"},publisher:!0,enrolled:!0,baptized:!0,standing:{value:"STEX",label:"In good standing and is exemplary"},appointments:[{value:"PEL",article:"an",label:"Elder"}],recommend:!0,assignments:[{value:"PPR",label:"General: Public prayer"},{value:"LMCHM",label:"Life & Ministry: Chairman"},{value:"LMTRT",label:"Treasures: Talk"},{value:"LMTRG",label:"Treasures: Gems"},{value:"LMTRB",label:"Treasures: Bible reading"},{value:"LMLCT",label:"Living as Christians: Talk"},{value:"LMLCD",label:"Living as Christians: Discussion"},{value:"LMLCC",label:"Living as Christians: Congregation Bible Study: Conductor"},{value:"PMPTS",label:"Public Talk: Speaker"},{value:"PMPTO",label:"Public Talk: Outgoing speaker"},{value:"PMWTC",label:"Watchtower: Conductor"},{value:"FSGA",label:"FSGO: Assistant"}],exemplary:[{value:"dependability & organization",label:"dependability & organization"},{value:"balance in judgment",label:"balance in judgment"},{value:"effective teaching",label:"effective teaching"}],workingOn:[],additional:"John is a hard worker and will no doubt be a positive contribution to your congregation."},{id:String(1e7*Math.random()),name:"Susan",age:46,sex:{value:"F",label:"Female"},publisher:!0,enrolled:!0,baptized:!0,standing:{value:"STEX",label:"In good standing and is exemplary"},appointments:[{value:"PRP",article:"a",label:"Regular Pioneer"}],recommend:!0,exemplary:[{value:"hospitality",label:"hospitality"},{value:"meeting attendance",label:"meeting attendance"},{value:"field service activity",label:"field service activity"}],workingOn:[{value:"participation at meetings",label:"participation at meetings"}],additional:"Although Susan is a shy sister, she is working harder at commenting."},{id:String(1e7*Math.random()),name:"Sophia",age:12,sex:{value:"F",label:"Female"},publisher:!0,enrolled:!0,baptized:!0,standing:{value:"STGS",label:"In good standing"},appointments:[]},{id:String(1e7*Math.random()),name:"Caleb",age:8,sex:{value:"M",label:"Male"},publisher:!0,enrolled:!0,baptized:!1,standing:{value:"STGS",label:"In good standing"},assignments:[{value:"AVM",label:"A/V: Microphones"}]}]},E=function(e){var a=e.name,l=void 0===a?"":a,n=e.age,r=void 0===n?"":n,i=e.sex,o=void 0===i?{M:"Male"}:i,s=e.publisher,c=void 0!==s&&s,u=e.enrolled,m=void 0!==u&&u,d=e.baptized,E=void 0!==d&&d,f=e.appointments,y=void 0===f?[]:f,C=e.recommend,M=void 0!==C&&C,S=e.assignments,P=void 0===S?[]:S,w=e.exemplary,k=e.workingOn,N=e.standing,T=e.additional,L=e.handlePersonChange,O=e.handlePersonOptionChange,x=e.deletePerson;return t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("div",{className:"form-group"},t.a.createElement(h,{label:"Name",name:"name",value:l,placeholder:"John",required:!0,handleChange:L}),t.a.createElement("div",{className:""},t.a.createElement(h,{label:"Age",name:"age",type:"number",value:r,placeholder:"25?",required:!0,handleChange:L}),t.a.createElement(g.a,{value:o,options:b.sexes,placeholder:"Male or female?",onChange:function(e){return O("sex",e)}})),t.a.createElement("div",{className:"input-group mt-3 text-right"},t.a.createElement("button",{className:"btn btn-danger",onClick:x},t.a.createElement("i",{className:"fa fa-trash"})," Delete")))),t.a.createElement("td",null,t.a.createElement(v,{label:"Publisher",name:"publisher",checked:c,placeholder:"",required:!0,handleChange:L}),t.a.createElement(v,{label:"In L&M School",name:"enrolled",checked:m,placeholder:"",required:!0,handleChange:L}),t.a.createElement(v,{label:"Baptized",name:"baptized",checked:E,placeholder:"",required:!0,handleChange:L}),t.a.createElement(g.a,{value:N,options:b.standing,isMulti:!1,closeMenuOnSelect:!0,placeholder:"Standing?",className:"mt-2",onChange:function(e){return O("standing",e)}})),t.a.createElement("td",{className:"w-50"},t.a.createElement("table",{className:"table-sm table-borderless w-100"},t.a.createElement("tbody",null,t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement(g.a,{value:y,options:b.appointments,isMulti:!0,closeMenuOnSelect:!1,placeholder:"Appointments...",onChange:function(e){return O("appointments",e)}}))),t.a.createElement("tr",null,t.a.createElement("td",null,y&&y.length>0?t.a.createElement(v,{label:"Recommend reappointment",name:"recommend",checked:M,placeholder:"",required:!0,handleChange:L}):t.a.createElement(t.a.Fragment,null))),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement(g.a,{value:P,options:b.assignments,isMulti:"true",closeMenuOnSelect:!1,placeholder:"Assignments...",onChange:function(e){return O("assignments",e)}}))),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement(g.a,{value:w,options:b.qualities,isMulti:"true",closeMenuOnSelect:!1,placeholder:"Exemplary in...",onChange:function(e){return O("exemplary",e)}}))),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement(g.a,{value:k,options:b.qualities,isMulti:"true",closeMenuOnSelect:!1,placeholder:"Can work on...",onChange:function(e){return O("workingOn",e)}}))),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement(p,{value:T,name:"additional",classes:"form-control mt-2",placeholder:"Additional comments...",handleChange:L})))))))};l(26);function f(e){var a=e.map(function(e){return(e.article?e.article+" ":"")+e.label});return 1===a.length?a[0]:2===a.length?a[0]+" and "+a[1]:a.slice(0,a.length-1).join(", ")+" and "+a[a.length-1]}function y(e){return e.sex?"M"===e.sex.value?"He":"She":e.name}var C=function(e){var a,l=e.surname.trim().length<2,n=e.people.map(function(e){return e.name});return t.a.createElement("div",{className:"  letter ",style:{fontSize:"125%"}},l?t.a.createElement("div",{className:"text-info"}):t.a.createElement("div",null,n.length>0?t.a.createElement("div",null,t.a.createElement("p",null,"Dear Brothers,"),t.a.createElement("p",null,"We are writing to introduce you to"," ",e.people.length<2?t.a.createElement("span",null,e.people[0].name," ",e.surname,"."):t.a.createElement("span",null,"the ",t.a.createElement("strong",null,e.surname)," family, who are joining your congregation. The ",e.surname," family includes"," ",1===(a=n).length?a[0]:2===a.length?a[0]+" and "+a[1]:a.slice(0,a.length-1).join(", ")+" and "+a[a.length-1],".")),e.people.map(function(e,a){return t.a.createElement("div",{key:a},t.a.createElement("p",null,t.a.createElement("strong",null,e.name)," is ",e.age," years old",e.baptized&&e.publisher?" and is a baptized publisher. ":!e.baptized&&e.publisher?" and is an unbaptized publisher. ":e.baptized&&!e.publisher?" and is baptized. ":".",e.enrolled?t.a.createElement("span",null,y(e)," was enrolled in the Life & Ministry school."," "):t.a.createElement("span",null),e.standing?t.a.createElement("span",null,e.name," leaves our congregation"," ",t.a.createElement("strong",null,e.standing.label.toLowerCase()),"."," "):t.a.createElement("span",null),e.appointments&&e.appointments.length>0?t.a.createElement("span",null,e.name," served as ",f(e.appointments),"."," ",e.recommend?t.a.createElement("span",null,"Our body of elders recommends that ",y(e).toLowerCase()," continue serving as ",f(e.appointments),"."," "," "):t.a.createElement("span",null)):t.a.createElement("span",null)),e.assignments&&e.assignments.length>0?t.a.createElement("span",null,t.a.createElement("p",null,"During his time in our congregation, ",e.name," was approved for the following assignments:"),t.a.createElement("ul",null,e.assignments.map(function(e,a){return t.a.createElement("li",{key:a},e.label)}))):t.a.createElement("span",null),e.exemplary&&e.exemplary.length>0?t.a.createElement("span",null,t.a.createElement("p",null,e.name," displays the following good qualities:"),t.a.createElement("ul",null,e.exemplary.map(function(e,a){return t.a.createElement("li",{key:a},e.label)}))):t.a.createElement("span",null),t.a.createElement("p",null,e.workingOn&&e.workingOn.length>0?t.a.createElement("span",null,1===e.workingOn.length?"One area":"Some areas"," ","you may wish to help ",e.name," work on:"," ",f(e.workingOn),"."," "):t.a.createElement("span",null),e.additional&&e.additional.length>0?t.a.createElement("span",null,e.additional):t.a.createElement("span",null)))})):t.a.createElement("div",null),e.concluding&&e.concluding.length>0?t.a.createElement("p",null,e.concluding):t.a.createElement("span",null),t.a.createElement("p",null,"Warm regards,"),t.a.createElement("br",null),t.a.createElement("br",null)))},M=function(e){function a(){var e,l,n;Object(s.a)(this,a);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state=(l={surname:"Smith",people:b.samplePeople,concluding:"The Smith family will be a welcome addition to your congregation."},Object(o.a)(l,"surname",""),Object(o.a)(l,"people",[]),Object(o.a)(l,"concluding",""),l),n.personDefault={id:String(1e7*Math.random())},n.submitForm=function(e){},n.handleChange=function(e){var a=e.target,l=a.name,t="checkbox"===a.type?a.checked:a.value;n.setState(Object(o.a)({},l,t))},n.handleOptionChange=function(e,a){n.setState(Object(o.a)({},e,a))},n.handlePersonChange=function(e,a){var l=a.target,t=l.name,r="checkbox"===l.type?l.checked:l.value,i=n.state.people;i[e][t]=r,n.setState({people:i})},n.handlePersonOptionChange=function(e,a,l){console.log(e,a,l,typeof l);var t=l;if(Array.isArray(t)){var r=l.filter(function(e){return"ALL"===e.value}),i=l.filter(function(e){return"NONE"===e.value});r&&r.length>0&&(t=b[a].slice(2)),i&&i.length>0&&(t=[])}console.log(t);var o=n.state.people;o[e][a]=t,n.setState({people:o})},n.addPerson=function(e){e.preventDefault(),console.log("add+++");var a=n.state.people,l=JSON.parse(JSON.stringify(n.personDefault));l.id=String(Math.round(1e7*Math.random())),a.push(l),n.setState({people:a}),console.log(n.state.people.length)},n.deletePerson=function(e){var a=n.state.people.filter(function(a,l){return l!==e});console.log(a),n.setState({people:a}),console.log(n.state.people.length)},n}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return t.a.createElement("div",null,t.a.createElement("div",{className:"row"},t.a.createElement("div",{className:"col-sm-8"},t.a.createElement("div",{className:"input-group input-group input-group-lg "},t.a.createElement("div",{className:"input-group-prepend"},t.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},"Family")),t.a.createElement(p,{name:"surname",value:this.state.surname,placeholder:"Smith",required:!0,handleChange:this.handleChange})),t.a.createElement("div",null,t.a.createElement("div",{className:"input-group input-group mt-3 "},t.a.createElement("div",{className:"input-group-prepend"},t.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},"Comments")),t.a.createElement(p,{name:"concluding",value:this.state.concluding,placeholder:"The "+this.state.surname+"s are a nice family who will benefit from...",required:!0,handleChange:this.handleChange})))),t.a.createElement("div",{className:"col-sm-4"},t.a.createElement("div",{className:"form-group mb-0"}))),t.a.createElement("div",null,t.a.createElement("table",{className:"table mt-3"},t.a.createElement("thead",{className:""},t.a.createElement("tr",null,t.a.createElement("th",{colSpan:"2"},"Person"),t.a.createElement("th",{className:"text-right"},t.a.createElement("button",{className:"btn btn-info btnd-lg ",name:"addPerson",id:"addPerson",onClick:this.addPerson},t.a.createElement("i",{className:"fa fa-plus"})," Add person")))),this.state.people.length>0?t.a.createElement("tbody",null,this.state.people.map(function(a,l){return t.a.createElement(E,Object.assign({key:a.id},a,{handlePersonChange:function(a){return e.handlePersonChange(l,a)},handlePersonOptionChange:function(a,n){return e.handlePersonOptionChange(l,a,n)},deletePerson:function(){return e.deletePerson(l)}}))})):t.a.createElement("span",null)),this.state.people.length>0?t.a.createElement(C,this.state):t.a.createElement("span",null)),t.a.createElement("br",null),t.a.createElement("br",null),t.a.createElement("br",null),t.a.createElement("br",null))}}]),a}(n.Component);var S=function(){return t.a.createElement("div",{className:"App container"},t.a.createElement("header",{className:"App-header"},t.a.createElement("h2",{className:"my-4"},"Letterman"," ",t.a.createElement("span",{style:{fontSize:"40%",opacity:.5}},t.a.createElement("strike",{style:{opacity:.5}},t.a.createElement("a",{className:"text-nowrap",href:"https://www.youtube.com/watch?v=V-zXT5bIBM0"},"Do you want to build a snowman?"))," ",t.a.createElement("span",{className:"text-nowrap"},"Do you want to write a letter?"))),t.a.createElement(M,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(t.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.0cb3dc3c.chunk.js.map