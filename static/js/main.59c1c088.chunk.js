(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],{111:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(26),i=n.n(o),c=n(21),l=n(13),u=n(30),s=n(60),d=(n(90),n(6)),p=n(7),h=n(9),m=n(8),g=n(10),f=n(27),b=function(e){return e.children},E=n(61),v=n.n(E),_=n(34),C=n.n(_),O=n(62),y=n.n(O),k=n(63),I=n.n(k),S=function(e){return r.a.createElement("div",{className:I.a.Logo},r.a.createElement("img",{src:y.a,alt:"MyBurger"}))},j=n(64),T=n.n(j),N=n(41),A=n.n(N),D=function(e){return r.a.createElement("li",{className:A.a.NavigationItem},r.a.createElement(c.b,{to:e.link,exact:e.exact,activeClassName:A.a.active},e.children))},B=function(e){return r.a.createElement("ul",{className:T.a.NavigationItems,onClick:e.closeDrawer},r.a.createElement(D,{link:"/",exact:!0},"Burger Builder"),e.isAuthenticated?r.a.createElement(D,{link:"/orders"},"Orders"):null,e.isAuthenticated?r.a.createElement(D,{link:"/logout"},"Logout"):r.a.createElement(D,{link:"/auth"},"Authenticate"))},w=n(131),R=n(66),x=n.n(R),H=n(44),L=n.n(H),U=function(e){return r.a.createElement("div",{className:L.a.DrawerToggle},r.a.createElement(w.a,{edge:"start",className:L.a.menuButton,color:"inherit","aria-label":"menu",onClick:e.clicked},r.a.createElement(x.a,null)))},P=n(135),M=n(132),F=function(e){return r.a.createElement("header",{className:C.a.Toolbar},r.a.createElement(P.a,{position:"static"},r.a.createElement(M.a,{className:C.a.Toolbar},r.a.createElement(U,{clicked:e.drawerToggleClicked}),r.a.createElement("div",{className:C.a.Logo},r.a.createElement(S,null)),r.a.createElement("nav",{className:C.a.DesktopOnly},r.a.createElement(B,{isAuthenticated:e.isAuth})))))},G=n(32),q=n.n(G),V=n(67),z=n.n(V),K=function(e){return e.show?r.a.createElement("div",{className:z.a.Backdrop,onClick:e.clicked}):null},Y=function(e){var t=[q.a.SideDrawer,q.a.Close];return e.open&&(t=[q.a.SideDrawer,q.a.Open]),r.a.createElement(b,null,r.a.createElement(K,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:q.a.Logo},r.a.createElement(S,null)),r.a.createElement("nav",null,r.a.createElement(B,{isAuthenticated:e.isAuth,closeDrawer:e.closed}))))},W=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},n.sideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawerToggleHandler=function(){n.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(b,null,r.a.createElement(F,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(Y,{isAuth:this.props.isAuthenticated,open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:v.a.Content},this.props.children))}}]),t}(a.Component),X=Object(l.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))(W),J=n(3),Z=n(37),$=n.n(Z),Q="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDGrehEXGxd4oqiIaL57izG9fuQ8fWpS1k",ee="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDGrehEXGxd4oqiIaL57izG9fuQ8fWpS1k",te=$.a.create({baseURL:"https://vuejs-stocktrader-3ba86.firebaseio.com/"}),ne=n(79),ae=n(68),re=n.n(ae),oe=n(24),ie=n.n(oe),ce=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:ie.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:ie.a.BreadTop},r.a.createElement("div",{className:ie.a.Seeds1}),r.a.createElement("div",{className:ie.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:ie.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:ie.a.Cheese});break;case"bacon":e=r.a.createElement("div",{className:ie.a.Bacon});break;case"salad":e=r.a.createElement("div",{className:ie.a.Salad});break;default:e=null}return e}}]),t}(a.Component),le=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(ne.a)(Array(e.ingredients[t])).map((function(e,n){return r.a.createElement(ce,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients!")),r.a.createElement("div",{className:re.a.Burger},r.a.createElement(ce,{type:"bread-top"}),t,r.a.createElement(ce,{type:"bread-bottom"}))},ue=n(22),se=n(134),de=n(12),pe=n(133),he=n(70),me=n.n(he),ge=n(69),fe=n.n(ge),be=n(45),Ee=n.n(be),ve=function(e){return r.a.createElement("div",{className:Ee.a.BuildControl},r.a.createElement("div",{className:Ee.a.Label},e.label),r.a.createElement(pe.a,{disabled:e.disabled,style:{backgroundColor:"".concat(e.disabled?"#AC9980":"#d0b497"),color:"".concat(e.disabled?"#bb662da1":"#E27b36")},"aria-label":"remove",onClick:e.removed},r.a.createElement(fe.a,null)),r.a.createElement(pe.a,{style:{backgroundColor:"#e27b36",color:"#f5da8d"},"aria-label":"add",onClick:e.added},r.a.createElement(me.a,null)))},_e=n(71),Ce=n.n(_e),Oe=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],ye=Object(de.a)((function(e){return{root:Object(ue.a)({backgroundColor:"#d2bda7",outline:"none",cursor:"pointer",border:"1px solid #966909",color:"#966909",fontFamily:"inherit",padding:"15px 30px",marginTop:"30px",boxShadow:"2px 2px 2px #966909","&:disabled":{boxShadow:"none",backgroundColor:"inherit",borderColor:"#af7d4f"},"&:hover, &:active":{backgroundColor:"#efdba4",border:"1px solid #966909",color:"#966909"}},e.breakpoints.down(459),{padding:"15px 15px",marginTop:"10px"})}}))(se.a),ke=function(e){return r.a.createElement("div",{className:Ce.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2))),Oe.map((function(t){return r.a.createElement(ve,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement(ye,{variant:e.purchasable?"contained":"outlined",disabled:!e.purchasable,onClick:e.ordered},e.isAuth?"ORDER NOW":"SIGN UP TO ORDER"))},Ie=n(72),Se=n.n(Ie),je=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return r.a.createElement(b,null,r.a.createElement(K,{show:this.props.show,clicked:this.props.modalClosed}),r.a.createElement("div",{className:Se.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(a.Component),Te=n(46),Ne=n.n(Te),Ae=function(e){return r.a.createElement("button",{className:[Ne.a.Button,Ne.a[e.btnType]].join(" "),onClick:e.clicked,disabled:e.disabled},e.children)},De=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}}," ",t),": ",e.props.ingredients[t])}));return r.a.createElement(b,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: ",this.props.price.toFixed(2))),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(Ae,{btnType:"Danger",clicked:this.props.purchaseCancelled},"CANCEL"),r.a.createElement(Ae,{btnType:"Success",clicked:this.props.purchaseContinued},"CONTINUE"))}}]),t}(a.Component),Be=n(73),we=n.n(Be),Re=function(){return r.a.createElement("div",{className:we.a.Loader},"Loading...")},xe=function(e,t){return function(n){function a(e){var n;return Object(d.a)(this,a),(n=Object(h.a)(this,Object(m.a)(a).call(this,e))).errorConfirmeHandler=function(){n.setState({error:null})},n.state={error:null},n.reqInterceptor=t.interceptors.response.use((function(e){return n.setState({error:null}),e})),n.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(e){n.setState({error:e})})),n}return Object(g.a)(a,n),Object(p.a)(a,[{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return r.a.createElement(b,null,r.a.createElement(je,{show:this.state.error,modalClosed:this.errorConfirmeHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),a}(a.Component)},He=n(74),Le=n.n(He),Ue=function(e,t){return{type:"AUTH_SUCCESS",idToken:e,userId:t}},Pe=function(e){return{type:"AUTH_FAILED",error:e}},Me=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:"AUTH_LOGOUT"}},Fe=function(e){return function(t){setTimeout((function(){t(Me())}),1e3*e)}},Ge=function(e){return{type:"SET_AUTH_REDIRECT_PATH",path:e}},qe=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={purchasing:!1},n.isPurchaseable=function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0},n.purchaseHandler=function(){n.props.isAuthenticated?n.setState({purchasing:!0}):(n.props.onSetAuthRedirectPath("/checkout"),n.props.history.push("/auth"))},n.purchaseCancelHandler=function(){n.setState({purchasing:!1})},n.purchaseContinueHandler=function(){n.props.onInitPurchase(),n.props.history.push("/checkout")},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"render",value:function(){var e=Object(J.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,a=this.props.error?r.a.createElement("p",null,"Ingredients could not be loaded!"):r.a.createElement(Re,null);return this.props.ings&&(a=r.a.createElement("div",{className:Le.a.BurgerBuilder},r.a.createElement(le,{ingredients:this.props.ings}),r.a.createElement(ke,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:e,purchasable:this.isPurchaseable(this.props.ings),ordered:this.purchaseHandler,isAuth:this.props.isAuthenticated,price:this.props.price})),n=r.a.createElement(De,{ingredients:this.props.ings,price:this.props.price,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),r.a.createElement(b,null,r.a.createElement(je,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),a)}}]),t}(a.Component),Ve=Object(l.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!=e.auth.token}}),(function(e){return{onIngredientAdded:function(t){return e({type:"ADD_INGREDIENT",ingredientName:t})},onIngredientRemoved:function(t){return e({type:"REMOVE_INGREDIENT",ingredientName:t})},onInitIngredients:function(){return e((function(e){te.get("ingredients.json").then((function(t){e({type:"SET_INGREDIENTS",ingredients:t.data})})).catch((function(t){e({type:"FETCH_INGREDIENTS_FAILED"})}))}))},onInitPurchase:function(){return e({type:"PURCHASE_INIT"})},onSetAuthRedirectPath:function(t){return e(Ge(t))}}}))(xe(qe,te)),ze=n(75),Ke=n.n(ze),Ye=function(e){return r.a.createElement("div",{className:Ke.a.CheckoutSummary},r.a.createElement("h1",null,"We hope it tastes well!"),r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(le,{ingredients:e.ingredients})),r.a.createElement(Ae,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),r.a.createElement(Ae,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUE"))},We=n(76),Xe=n.n(We),Je=n(33),Ze=n.n(Je),$e=function(e){var t=null,n=[Ze.a.InputElement],a=null;switch(e.invalid&&e.shouldValidate&&e.touched&&(n.push(Ze.a.Invalid),a=r.a.createElement("p",{className:Ze.a.ValidationMessage},e.errorMessage)),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{className:n.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=r.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return r.a.createElement("div",null,r.a.createElement("label",{className:Ze.a.Label},e.label),r.a.createElement("div",{className:Ze.a.InputContainer},t,a))},Qe=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n},et=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,errorMessage:"This field is required",touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,errorMessage:"This field is required",touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP Code"},value:"",validation:{required:!0,minLength:5,maxLength:5},valid:!1,errorMessage:"Enter a valid ZIP Code",touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,errorMessage:"This field is required",touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-mail"},value:"",validation:{required:!0,isEmail:!0},valid:!1,errorMessage:"Enter a valid e-mail",touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",valid:!0}},formIsValid:!1},n.orderHandler=function(e){e.preventDefault();var t={};for(var a in n.state.orderForm)t[a]=n.state.orderForm[a].value;var r={ingredients:n.props.ings,price:n.props.price,orderData:t,userId:n.props.userId};n.props.onOrderBurger(r,n.props.token)},n.inputChangedHandler=function(e,t){var a=Object(J.a)({},n.state.orderForm),r=Object(J.a)({},a[t]);r.value=e.target.value,r.valid=Qe(r.value,r.validation),r.touched=!0,a[t]=r;var o=!0;for(var i in a)o=a[i].valid&&o;n.setState({orderForm:a,formIsValid:o})},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var a=r.a.createElement("form",{onSubmit:this.orderHandler},t.map((function(t){return r.a.createElement($e,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,errorMessage:t.config.errorMessage,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})})),r.a.createElement(Ae,{btnType:"Success",disabled:!this.state.formIsValid},"ORDER"));return this.props.loading&&(a=r.a.createElement(Re,null)),r.a.createElement("div",{className:Xe.a.ContactData},r.a.createElement("h4",null,"Enter your Contact Data"),a)}}]),t}(a.Component),tt=Object(l.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onOrderBurger:function(t,n){return e(function(e,t){return function(n){n({type:"PURCHASE_BURGER_START"}),te.post("/orders.json?auth="+t,e).then((function(t){n(function(e,t){return{type:"PURCHASE_BURGER_SUCCESS",id:e,orderData:t}}(t.data.name,e))})).catch((function(e){n(function(e){return{type:"PURCHASE_BURGER_FAILED",error:e}}(e))}))}}(t,n))}}}))(Object(f.g)(xe(et,te))),nt=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).checkoutCancelledHandler=function(){n.props.history.goBack()},n.checkoutContinuedHandler=function(){n.props.history.replace("/checkout/contact-data")},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=r.a.createElement(f.a,{to:"/"});if(this.props.ings){var t=this.props.purchased?r.a.createElement(f.a,{to:"/"}):null;e=r.a.createElement("div",null,t,r.a.createElement(Ye,{ingredients:this.props.ings,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),r.a.createElement(f.b,{path:this.props.match.path+"/contact-data",component:tt}))}return e}}]),t}(a.Component),at=Object(l.b)((function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}}))(nt),rt=n(77),ot=n.n(rt),it=function(e){var t=[];for(var n in e.ingredients)t.push({name:n,amount:e.ingredients[n]});var a=t.map((function(e){return r.a.createElement("span",{style:{textTranform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.amount,")")}));return r.a.createElement("div",{className:ot.a.Order},r.a.createElement("p",null,"Ingredients: ",a),r.a.createElement("p",null,"Price: ",r.a.createElement("strong",null,"USD ",Number.parseFloat(e.price).toFixed(2))))},ct=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=r.a.createElement(Re,null);return this.props.loading||(e=this.props.orders.map((function(e){return r.a.createElement(it,{key:e.id,ingredients:e.ingredients,price:e.price})}))),r.a.createElement("div",null,e)}}]),t}(a.Component),lt=Object(l.b)((function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onFetchOrders:function(t,n){return e(function(e,t){return function(n){n({type:"PURCHASE_BURGER_START"});var a="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';te.get("orders.json"+a).then((function(e){var t=[];for(var a in e.data)t.push(Object(J.a)({},e.data[a],{id:a}));n({type:"FETCH_ORDERS_SUCCESS",orders:t})})).catch((function(e){n(function(e){return{type:"FETCH_ORDERS_FAILED",error:e}}(e))}))}}(t,n))}}}))(xe(ct,te)),ut=n(78),st=n.n(ut),dt=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"E-mail address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,errorMessage:"Please enter a valid e-mail address",touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,errorMessage:"At least 6 characters",touched:!1}},isSignup:!0},n.inputChangedHandler=function(e,t){var a=Object(J.a)({},n.state.controls,Object(ue.a)({},t,Object(J.a)({},n.state.controls[t],{value:e.target.value,valid:Qe(e.target.value,n.state.controls[t].validation),touched:!0})));n.setState({controls:a})},n.submitHandler=function(e){e.preventDefault(),n.props.onAuth(n.state.controls.email.value,n.state.controls.password.value,n.state.isSignup)},n.switchAuthModeHandler=function(){n.setState((function(e){return{isSignup:!e.isSignup}}))},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var a=t.map((function(t){return r.a.createElement($e,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,errorMessage:t.config.errorMessage,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})}));this.props.loading&&(a=r.a.createElement(Re,null));var o=this.props.error?r.a.createElement("p",null,this.props.error.message):null,i=this.props.isAuthenticated?r.a.createElement(f.a,{to:this.props.authRedirectPath}):null;return r.a.createElement("div",{className:st.a.Auth},i,r.a.createElement("h3",null,this.state.isSignup?"SIGN UP":"SIGN IN"),r.a.createElement("form",{onSubmit:this.submitHandler},a,r.a.createElement(Ae,{btnType:"Success"},"SUBMIT")),o,r.a.createElement(Ae,{btnType:"Danger",clicked:this.switchAuthModeHandler},"SWITCH TO ",this.state.isSignup?"SIGN IN":"SIGN UP"))}}]),t}(a.Component),pt=Object(l.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!=e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{onAuth:function(t,n,a){return e(function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return function(a){a({type:"AUTH_START"});var r={email:e,password:t,returnSecureToken:!0},o=n?Q:ee;$.a.post(o,r).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),a(Ue(e.data.idToken,e.data.localId)),a(Fe(e.data.expiresIn))})).catch((function(e){a(Pe(e.response.data.error))}))}}(t,n,a))},onSetAuthRedirectPath:function(){return e(Ge("/"))}}}))(dt),ht=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return r.a.createElement(f.a,{to:"/"})}}]),t}(a.Component),mt=Object(l.b)(null,(function(e){return{onLogout:function(){return e(Me())}}}))(ht),gt=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignUp()}},{key:"render",value:function(){var e=r.a.createElement(f.d,null,r.a.createElement(f.b,{path:"/auth",component:pt}),r.a.createElement(f.b,{path:"/",exact:!0,component:Ve}),r.a.createElement(f.a,{to:"/"}));return this.props.isAuthenticated&&(e=r.a.createElement(f.d,null,r.a.createElement(f.b,{path:"/checkout",component:at}),r.a.createElement(f.b,{path:"/orders",component:lt}),r.a.createElement(f.b,{path:"/logout",component:mt}),r.a.createElement(f.b,{path:"/auth",component:pt}),r.a.createElement(f.b,{path:"/",exact:!0,component:Ve}),r.a.createElement(f.a,{to:"/"}))),r.a.createElement("div",null,r.a.createElement(X,null,e))}}]),t}(a.Component),ft=Object(f.g)(Object(l.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{onTryAutoSignUp:function(){return e((function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(new Date>n)e(Me());else{var a=localStorage.getItem("userId"),r=(n.getTime()-(new Date).getTime())/1e3;e(Ue(t,a)),e(Fe(r))}}else e(Me())}))}}}))(gt));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var bt={ingredients:null,totalPrice:4,error:!1,building:!1},Et={salad:.3,cheese:.4,meat:1.3,bacon:.7},vt=function(e,t){return Object(J.a)({},e,{ingredients:Object(J.a)({},e.ingredients,Object(ue.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1)),totalPrice:e.totalPrice+Et[t.ingredientName],building:!0})},_t=function(e,t){return Object(J.a)({},e,{ingredients:Object(J.a)({},e.ingredients,Object(ue.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1)),totalPrice:e.totalPrice-Et[t.ingredientName],building:!0})},Ct=function(e,t){return Object(J.a)({},e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},totalPrice:4,error:!1,building:!1})},Ot=function(e,t){return Object(J.a)({},e,{error:!0})},yt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INGREDIENT":return vt(e,t);case"REMOVE_INGREDIENT":return _t(e,t);case"SET_INGREDIENTS":return Ct(e,t);case"FETCH_INGREDIENTS_FAILED":return Ot(e);default:return e}},kt={orders:[],loading:!1,purchased:!1},It=function(e,t){return Object(J.a)({},e,{purchased:!1})},St=function(e,t){return Object(J.a)({},e,{loading:!0})},jt=function(e,t){var n=Object(J.a)({},t.orderData,{id:t.orderId});return Object(J.a)({},e,{loading:!1,purchased:!0,orders:e.orders.concat(n)})},Tt=function(e,t){return Object(J.a)({},e,{loading:!1})},Nt=function(e,t){return Object(J.a)({},e,{loading:!0})},At=function(e,t){return Object(J.a)({},e,{orders:t.orders,loading:!1})},Dt=function(e,t){return Object(J.a)({},e,{loading:!1})},Bt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:kt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PURCHASE_INIT":return It(e);case"PURCHASE_BURGER_START":return St(e);case"PURCHASE_BURGER_SUCCESS":return jt(e,t);case"PURCHASE_BURGER_FAILED":return Tt(e);case"FETCH_ORDERS_START":return Nt(e);case"FETCH_ORDERS_SUCCESS":return At(e,t);case"FETCH_ORDERS_FAILED":return Dt(e);default:return e}},wt={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},Rt=function(e,t){return Object(J.a)({},e,{error:null,loading:!0})},xt=function(e,t){return Object(J.a)({},e,{token:t.idToken,userId:t.userId,error:null,loading:!1})},Ht=function(e,t){return Object(J.a)({},e,{error:t.error,loading:!1})},Lt=function(e,t){return Object(J.a)({},e,{token:null,userId:null})},Ut=function(e,t){return Object(J.a)({},e,{authRedirectPath:t.path})},Pt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return Rt(e);case"AUTH_SUCCESS":return xt(e,t);case"AUTH_FAILED":return Ht(e,t);case"AUTH_LOGOUT":return Lt(e);case"SET_AUTH_REDIRECT_PATH":return Ut(e,t);default:return e}},Mt=u.d,Ft=Object(u.c)({burgerBuilder:yt,order:Bt,auth:Pt}),Gt=Object(u.e)(Ft,Mt(Object(u.a)(s.a))),qt=r.a.createElement(l.a,{store:Gt},r.a.createElement(c.a,null,r.a.createElement(ft,null)));i.a.render(qt,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},24:function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2US69",BreadTop:"BurgerIngredient_BreadTop__3Y4-R",Seeds1:"BurgerIngredient_Seeds1__J6vUJ",Seeds2:"BurgerIngredient_Seeds2__2Ylex",Meat:"BurgerIngredient_Meat__3flwI",Cheese:"BurgerIngredient_Cheese__3rOTJ",Salad:"BurgerIngredient_Salad__KLnhy",Bacon:"BurgerIngredient_Bacon__1KK6n"}},32:function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-",Logo:"SideDrawer_Logo__3voUv"}},33:function(e,t,n){e.exports={Input:"Input_Input__3r5Ke",Label:"Input_Label__1qyHr",InputElement:"Input_InputElement__2m88K",Invalid:"Input_Invalid__16Mis",InputContainer:"Input_InputContainer__1ZbKb",ValidationMessage:"Input_ValidationMessage__3C6jh"}},34:function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",Logo:"Toolbar_Logo__3Lk47",DesktopOnly:"Toolbar_DesktopOnly__LuPaL"}},41:function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},44:function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__m405X"}},45:function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__O8649","MuiFab-root":"BuildControl_MuiFab-root__jCmXD","Mui-disabled":"BuildControl_Mui-disabled__1npGj",Label:"BuildControl_Label__TQkTk",Less:"BuildControl_Less__3Ttg8",More:"BuildControl_More__1MY7B"}},46:function(e,t,n){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},61:function(e,t,n){},62:function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},63:function(e,t,n){e.exports={Logo:"Logo_Logo__1N0xH"}},64:function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},67:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},68:function(e,t,n){e.exports={Burger:"Burger_Burger__10T8F"}},71:function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__1YmbS",OrderButton:"BuildControls_OrderButton___M-Du",enable:"BuildControls_enable__9xLsD"}},72:function(e,t,n){e.exports={Modal:"Modal_Modal__1-5dN"}},73:function(e,t,n){e.exports={Loader:"Spinner_Loader__1twK-",load3:"Spinner_load3__3VkKK"}},74:function(e,t,n){e.exports={BurgerBuilder:"BurgerBuilder_BurgerBuilder__3b-uD"}},75:function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__3PsXi"}},76:function(e,t,n){e.exports={ContactData:"ContactData_ContactData__20AK_"}},77:function(e,t,n){e.exports={Order:"Order_Order__3kYZJ"}},78:function(e,t,n){e.exports={Auth:"Auth_Auth__1Zul_"}},81:function(e,t,n){e.exports=n(111)},90:function(e,t,n){}},[[81,1,2]]]);
//# sourceMappingURL=main.59c1c088.chunk.js.map