(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,l){e.exports=l(28)},20:function(e,a,l){},28:function(e,a,l){"use strict";l.r(a);var n=l(0),t=l.n(n),r=l(1),i=l.n(r),o=(l(20),l(21),l(6)),s=l(9),c=l(10),u=l(13),m=l(11),d=l(14),p=function(e){var a=e.label,l=void 0!==a&&a,n=e.name,r=e.type,i=void 0===r?"text":r,o=e.value,s=void 0===o?"":o,c=e.placeholder,u=void 0===c?"":c,m=e.classes,d=void 0===m?"form-control ":m,p=e.autofocus,h=void 0!==p&&p,g=e.helpText,v=e.error,b=e.handleChange;return t.a.createElement(t.a.Fragment,null,l&&t.a.createElement("label",{htmlFor:n},l),t.a.createElement("input",{autoFocus:h,type:i,className:d,id:n,name:n,placeholder:u,value:s,onChange:b}),g&&t.a.createElement("small",{className:"form-text text-muted"},g),v&&t.a.createElement("div",{className:""},t.a.createElement("div",{className:"invalid-feedback d-block"},v)))},h=function(e){var a=e.label,l=void 0!==a&&a,n=e.name,r=e.type,i=void 0===r?"text":r,o=e.value,s=void 0===o?"":o,c=e.placeholder,u=void 0===c?"":c,m=e.classes,d=void 0===m?"form-control ":m,p=e.rows,h=void 0===p?4:p,g=e.autofocus,v=void 0!==g&&g,b=e.helpText,E=e.error,f=e.handleChange;return t.a.createElement(t.a.Fragment,null,l&&t.a.createElement("label",{htmlFor:n},l),t.a.createElement("textarea",{autoFocus:v,type:i,className:d,id:n,name:n,placeholder:u,value:s,rows:h,onChange:f}),b&&t.a.createElement("small",{className:"form-text text-muted"},b),E&&t.a.createElement("div",{className:""},t.a.createElement("div",{className:"invalid-feedback d-block"},E)))},g=l(2),v=function(e){var a=e.label,l=e.name,n=e.value,r=e.type,i=void 0===r?"text":r,o=e.placeholder,s=e.classes,c=void 0===s?"form-control ":s,u=e.required,m=e.handleChange;return t.a.createElement("div",null,t.a.createElement("div",{className:"form-group"},t.a.createElement("div",{className:"input-group mb-3"},a&&t.a.createElement("div",{className:"input-group-prepend"},t.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},a)),t.a.createElement("input",{className:c,type:i,id:l,name:l,value:n,required:u,autoComplete:"off",placeholder:o,onChange:m}))))},b=function(e){var a=e.label,l=e.name,n=e.checked,r=e.value,i=void 0===r?"all":r,o=e.classes,s=void 0===o?"  ":o,c=e.handleChange;return t.a.createElement("div",{className:" "},t.a.createElement("input",{type:"checkbox",name:l,className:s,onChange:c,value:i,checked:n})," ",t.a.createElement("label",{className:" "},a))},E={standing:[{value:"STEX",label:"In good standing and is exemplary"},{value:"STGS",label:"In good standing"},{value:"STNE",label:"Needing help/encouragement"},{value:"STUR",label:"Under restrictions"},{value:"STDF",label:"Disfellowshipped"}],appointments:[{value:"PMS",article:"a",label:"Ministerial Servant"},{value:"PEL",article:"an",label:"Elder"},{value:"PRP",article:"a",label:"Regular Pioneer"},{value:"PSP",article:"a",label:"Special Pioneer"}],assignments:[{value:"ALL",label:"Select all"},{value:"NONE",label:"Select none"},{value:"AVC",label:"A/V: Console"},{value:"AVP",label:"A/V: Platform"},{value:"AVM",label:"A/V: Microphones"},{value:"AVA",label:"A/V: Attendant"},{value:"PPR",label:"General: Public prayer"},{value:"LMCHM",label:"Life & Ministry: Chairman"},{value:"LMTRT",label:"Treasures: Talk"},{value:"LMTRG",label:"Treasures: Gems"},{value:"LMTRB",label:"Treasures: Bible reading"},{value:"LMFMD",label:"Field Ministry: Demo"},{value:"LMFMT",label:"Field Ministry: Talk"},{value:"LMLCT",label:"Living as Christians: Talk"},{value:"LMLCD",label:"Living as Christians: Discussion"},{value:"LMLCC",label:"Living as Christians: Congregation Bible Study: Conductor"},{value:"LMLCR",label:"Living as Christians: Congregation Bible Study: Reader"},{value:"PMPTC",label:"Public Talk: Chairman"},{value:"PMPTS",label:"Public Talk: Speaker"},{value:"PMPTO",label:"Public Talk: Outgoing speaker"},{value:"PMWTC",label:"Watchtower: Conductor"},{value:"PMWTR",label:"Watchtower: Reader"},{value:"FSGO",label:"FSGO: Overseer"},{value:"FSGA",label:"FSGO: Assistant"},{value:"PCW",label:"Public (cart) witnessing"}],fruits:[{value:"love",label:"love"},{value:"joy",label:"joy"},{value:"peace",label:"peace"},{value:"patience",label:"patience"},{value:"kindness",label:"kindness"},{value:"goodness",label:"goodness"},{value:"faith",label:"faith"},{value:"mildness",label:"mildness"},{value:"self-control",label:"self-control"}],qualities:[{value:"meeting attendance",label:"meeting attendance"},{value:"participation at meetings",label:"participation at meetings"},{value:"field service activity",label:"field service activity"},{value:"dependability & organization",label:"dependability & organization"},{value:"dignified personal appearance",label:"dignified personal appearance"},{value:"balance in judgment",label:"balance in judgment"},{value:"reasonableness",label:"reasonableness"},{value:"peaceableness",label:"peaceableness"},{value:"accepting counsel",label:"accepting counsel"},{value:"maturity",label:"maturity"},{value:"hospitality",label:"hospitality"},{value:"humility",label:"humility"},{value:"warmth",label:"warmth"},{value:"effective teaching",label:"effective teaching"}],sexes:[{value:"M",label:"Male"},{value:"F",label:"Female"}],samplePeople:[{id:String(1e7*Math.random()),name:"John",age:46,sex:{value:"M",label:"Male"},publisher:!0,enrolled:!0,baptized:!0,standing:{value:"STEX",label:"In good standing and is exemplary"},appointments:[{value:"PEL",article:"an",label:"Elder"}],recommend:!0,assignments:[{value:"PPR",label:"General: Public prayer"},{value:"LMCHM",label:"Life & Ministry: Chairman"},{value:"LMTRT",label:"Treasures: Talk"},{value:"LMTRG",label:"Treasures: Gems"},{value:"LMTRB",label:"Treasures: Bible reading"},{value:"LMLCT",label:"Living as Christians: Talk"},{value:"LMLCD",label:"Living as Christians: Discussion"},{value:"LMLCC",label:"Living as Christians: Congregation Bible Study: Conductor"},{value:"PMPTS",label:"Public Talk: Speaker"},{value:"PMPTO",label:"Public Talk: Outgoing speaker"},{value:"PMWTC",label:"Watchtower: Conductor"},{value:"FSGA",label:"FSGO: Assistant"}],exemplary:[{value:"dependability & organization",label:"dependability & organization"},{value:"balance in judgment",label:"balance in judgment"},{value:"effective teaching",label:"effective teaching"}],workingOn:[],additional:"John is a hard worker and will no doubt be a positive contribution to your congregation."},{id:String(1e7*Math.random()),name:"Susan",age:46,sex:{value:"F",label:"Female"},publisher:!0,enrolled:!0,baptized:!0,standing:{value:"STEX",label:"In good standing and is exemplary"},appointments:[{value:"PRP",article:"a",label:"Regular Pioneer"}],recommend:!0,assignments:[{value:"PCW",label:"Public (cart) witnessing"}],exemplary:[{value:"hospitality",label:"hospitality"},{value:"meeting attendance",label:"meeting attendance"},{value:"field service activity",label:"field service activity"}],workingOn:[{value:"participation at meetings",label:"participation at meetings"}],additional:"Although Susan is a shy sister, she is working harder at commenting. Susan is coming to your congregation, recently being married to Noah Gerry. Although Susan moved into Rocky Ridge with her family\u2013Boris & Michelle, and Hope (sister), a couple years ago she was actually attending Alabanza (Spanish) congregation. We'd see Susan occasionally, and while always friendly and positive, we can't say a lot about her spiritual state and well-being. Susan has had a troubled youth which caused her to seek professional counselling. It breaks our heart to know this dear sister has been at the receiving end of a series of very unfortunate events. She needs encouragement and love and support\u2013something your congregation can supply in abundance. She has a beautiful personality once you get to know her\u2013this may take time but don't give up on her! We will miss seeing Susan but believe with her marriage mate, and a new congregation, she can put her past behind her and focus on a bright future."},{id:String(1e7*Math.random()),name:"Sophia",age:12,sex:{value:"F",label:"Female"},publisher:!0,enrolled:!0,baptized:!0,standing:{value:"STGS",label:"In good standing"},appointments:[]},{id:String(1e7*Math.random()),name:"Caleb",age:8,sex:{value:"M",label:"Male"},publisher:!0,enrolled:!0,baptized:!1,standing:{value:"STGS",label:"In good standing"},assignments:[{value:"AVM",label:"A/V: Microphones"}]}]},f=function(e){var a=e.name,l=void 0===a?"":a,n=e.age,r=void 0===n?"":n,i=e.sex,o=e.publisher,s=void 0!==o&&o,c=e.enrolled,u=void 0!==c&&c,m=e.baptized,d=void 0!==m&&m,p=e.appointments,f=void 0===p?[]:p,y=e.recommend,C=void 0!==y&&y,w=e.assignments,S=void 0===w?[]:w,M=e.exemplary,P=e.workingOn,k=e.standing,N=e.additional,T=e.handlePersonChange,x=e.handlePersonOptionChange,L=e.deletePerson;return t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("div",{className:"form-group"},t.a.createElement(v,{label:"Name",name:"name",value:l,placeholder:"John",required:!0,handleChange:T}),t.a.createElement("div",{className:""},t.a.createElement(v,{label:"Age",name:"age",type:"number",value:r,placeholder:"25?",required:!0,handleChange:T}),t.a.createElement(g.a,{value:i,options:E.sexes,placeholder:"Male or female?",onChange:function(e){return x("sex",e)}})),t.a.createElement("div",{className:"input-group mt-3 text-right"},t.a.createElement("button",{className:"btn btn-danger",onClick:L},t.a.createElement("i",{className:"fa fa-trash"})," Delete")))),t.a.createElement("td",null,t.a.createElement(b,{label:"Publisher",name:"publisher",checked:s,placeholder:"",required:!0,handleChange:T}),t.a.createElement(b,{label:"In L&M School",name:"enrolled",checked:u,placeholder:"",required:!0,handleChange:T}),t.a.createElement(b,{label:"Baptized",name:"baptized",checked:d,placeholder:"",required:!0,handleChange:T}),t.a.createElement(g.a,{value:k,options:E.standing,isMulti:!1,closeMenuOnSelect:!0,placeholder:"Standing?",className:"mt-2",onChange:function(e){return x("standing",e)}})),t.a.createElement("td",{className:"w-50"},t.a.createElement("table",{className:"table-sm table-borderless w-100"},t.a.createElement("tbody",null,t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement(g.a,{value:f,options:E.appointments,isMulti:!0,closeMenuOnSelect:!1,placeholder:"Appointments...",onChange:function(e){return x("appointments",e)}}))),t.a.createElement("tr",null,t.a.createElement("td",null,f&&f.length>0?t.a.createElement(b,{label:"Recommend reappointment",name:"recommend",checked:C,placeholder:"",required:!0,handleChange:T}):t.a.createElement(t.a.Fragment,null))),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement(g.a,{value:S,options:E.assignments,isMulti:"true",closeMenuOnSelect:!1,placeholder:"Assignments...",onChange:function(e){return x("assignments",e)}}))),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement(g.a,{value:M,options:E.qualities,isMulti:"true",closeMenuOnSelect:!1,placeholder:"Exemplary in...",onChange:function(e){return x("exemplary",e)}}))),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement(g.a,{value:P,options:E.qualities,isMulti:"true",closeMenuOnSelect:!1,placeholder:"Can work on...",onChange:function(e){return x("workingOn",e)}}))),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement(h,{value:N,name:"additional",classes:"form-control mt-2",placeholder:"Additional comments...",handleChange:T})))))))};l(26);function y(e){var a=e.map(function(e){return(e.article?e.article+" ":"")+e.label});return 1===a.length?a[0]:2===a.length?a[0]+" and "+a[1]:a.slice(0,a.length-1).join(", ")+" and "+a[a.length-1]}function C(e){return e.sex?"M"===e.sex.value?"He":"She":e.name}var w=function(e){var a,l=e.surname.trim().length<2,n=e.people.map(function(e){return e.name});return t.a.createElement("div",{className:"  letter ",style:{fontSize:"125%"}},l?t.a.createElement("div",{className:"text-info"}):t.a.createElement("div",null,n.length>0?t.a.createElement("div",null,t.a.createElement("p",null,"Dear Brothers,"),t.a.createElement("p",null,"We are writing to introduce you to"," ",e.people.length<2?t.a.createElement("span",null,e.people[0].name," ",e.surname,"."):t.a.createElement("span",null,"the ",t.a.createElement("strong",null,e.surname)," family, who are joining your congregation. The ",e.surname," family includes"," ",1===(a=n).length?a[0]:2===a.length?a[0]+" and "+a[1]:a.slice(0,a.length-1).join(", ")+" and "+a[a.length-1],".")),e.people.map(function(e,a){return t.a.createElement("div",{key:a},t.a.createElement("p",null,t.a.createElement("strong",null,e.name)," is ",e.age," years old"," ",e.baptized&&e.publisher?" and is a baptized publisher. ":!e.baptized&&e.publisher?" and is an unbaptized publisher. ":e.baptized&&!e.publisher?" and is baptized. ":".",e.enrolled?t.a.createElement("span",null,C(e)," was enrolled in the Life & Ministry school."," "):t.a.createElement("span",null),e.standing?t.a.createElement("span",null,e.name," leaves our congregation"," ",t.a.createElement("strong",null,e.standing.label.toLowerCase()),"."," "):t.a.createElement("span",null),e.appointments&&e.appointments.length>0?t.a.createElement("span",null,e.name," served as ",y(e.appointments),"."," ",e.recommend?t.a.createElement("span",null,"Our body of elders recommends that ",C(e).toLowerCase()," ",t.a.createElement("strong",null,"continue serving")," as ",y(e.appointments),"."," "," "):t.a.createElement("span",null)):t.a.createElement("span",null)),e.assignments&&e.assignments.length>0?t.a.createElement("span",null,t.a.createElement("p",null,"During ",function(e){return e.sex?"M"===e.sex.value?"His":"Her":e.name}(e).toLowerCase()," time in our congregation, ",e.name," was approved for the following assignments:"),t.a.createElement("ul",null,e.assignments.map(function(e,a){return t.a.createElement("li",{key:a},e.label)}))):t.a.createElement("span",null),e.exemplary&&e.exemplary.length>0?t.a.createElement("span",null,t.a.createElement("p",null,e.name," displays the following good qualities:"),t.a.createElement("ul",null,e.exemplary.map(function(e,a){return t.a.createElement("li",{key:a},e.label)}))):t.a.createElement("span",null),t.a.createElement("p",null,e.workingOn&&e.workingOn.length>0?t.a.createElement("span",null,1===e.workingOn.length?"One area":"Some areas"," ","you may wish to help ",e.name," work on:"," ",y(e.workingOn),"."," "):t.a.createElement("span",null),e.additional&&e.additional.length>0?t.a.createElement("span",null,e.additional):t.a.createElement("span",null)))})):t.a.createElement("div",null),e.concluding&&e.concluding.length>0?t.a.createElement("p",null,e.concluding):t.a.createElement("span",null),t.a.createElement("p",null,"Warm regards,"),t.a.createElement("br",null),t.a.createElement("br",null)))},S=function(e){function a(){var e,l;Object(s.a)(this,a);for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return(l=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(t)))).state={surname:"Smith",people:E.samplePeople,concluding:"The Smith family will be a welcome addition to your congregation."},l.personDefault={id:String(1e7*Math.random())},l.submitForm=function(e){},l.handleChange=function(e){var a=e.target,n=a.name,t="checkbox"===a.type?a.checked:a.value;l.setState(Object(o.a)({},n,t))},l.handleOptionChange=function(e,a){l.setState(Object(o.a)({},e,a))},l.handlePersonChange=function(e,a){var n=a.target,t=n.name,r="checkbox"===n.type?n.checked:n.value,i=l.state.people;i[e][t]=r,l.setState({people:i})},l.handlePersonOptionChange=function(e,a,n){console.log(e,a,n,typeof n);var t=n;if(Array.isArray(t)){var r=n.filter(function(e){return"ALL"===e.value}),i=n.filter(function(e){return"NONE"===e.value});r&&r.length>0&&(t=E[a].slice(2)),i&&i.length>0&&(t=[])}console.log(t);var o=l.state.people;o[e][a]=t,l.setState({people:o})},l.addPerson=function(e){e.preventDefault(),console.log("add+++");var a=l.state.people,n=JSON.parse(JSON.stringify(l.personDefault));n.id=String(Math.round(1e7*Math.random())),a.push(n),l.setState({people:a}),console.log(l.state.people.length)},l.deletePerson=function(e){var a=l.state.people.filter(function(a,l){return l!==e});console.log(a),l.setState({people:a}),console.log(l.state.people.length)},l}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return t.a.createElement("div",null,t.a.createElement("div",{className:"row"},t.a.createElement("div",{className:"col-sm-8"},t.a.createElement("div",{className:"input-group input-group input-group-lg "},t.a.createElement("div",{className:"input-group-prepend"},t.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},"Family")),t.a.createElement(p,{name:"surname",value:this.state.surname,placeholder:"Smith",required:!0,handleChange:this.handleChange})),t.a.createElement("div",null,t.a.createElement("div",{className:"input-group input-group mt-3 "},t.a.createElement("div",{className:"input-group-prepend"},t.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},"Comments")),t.a.createElement(h,{name:"concluding",value:this.state.concluding,placeholder:"They are a nice family who will benefit from...",required:!0,handleChange:this.handleChange})))),t.a.createElement("div",{className:"col-sm-4"},t.a.createElement("div",{className:"form-group mb-0"}))),t.a.createElement("div",null,t.a.createElement("table",{className:"table mt-3"},t.a.createElement("thead",{className:""},t.a.createElement("tr",null,t.a.createElement("th",{colSpan:"2"},"Person"),t.a.createElement("th",{className:"text-right"},t.a.createElement("button",{className:"btn btn-info btnd-lg ",name:"addPerson",id:"addPerson",onClick:this.addPerson},t.a.createElement("i",{className:"fa fa-plus"})," Add person")))),this.state.people.length>0?t.a.createElement("tbody",null,this.state.people.map(function(a,l){return t.a.createElement(f,Object.assign({key:a.id},a,{handlePersonChange:function(a){return e.handlePersonChange(l,a)},handlePersonOptionChange:function(a,n){return e.handlePersonOptionChange(l,a,n)},deletePerson:function(){return e.deletePerson(l)}}))})):t.a.createElement("span",null)),this.state.people.length>0?t.a.createElement(w,this.state):t.a.createElement("span",null)),t.a.createElement("br",null),t.a.createElement("br",null),t.a.createElement("br",null),t.a.createElement("br",null))}}]),a}(n.Component);var M=function(){return t.a.createElement("div",{className:"App container"},t.a.createElement("header",{className:"App-header"},t.a.createElement("h2",{className:"my-4"},"Letterman"," ",t.a.createElement("span",{style:{fontSize:"40%",opacity:.5}},t.a.createElement("strike",{style:{opacity:.5}},t.a.createElement("a",{className:"text-nowrap",href:"https://www.youtube.com/watch?v=V-zXT5bIBM0"},"Do you want to build a snowman?"))," ",t.a.createElement("span",{className:"text-nowrap"},"Do you want to write a letter?"))),t.a.createElement(S,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(t.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.2407769d.chunk.js.map