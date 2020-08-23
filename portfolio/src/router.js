import Vue from "Vue";
 import Router from "Router";
 import Home from "./views/home";


 Vue.use(Router);

 export default new Router({
   routes: [
     {
       path:"/",
       name: "home",
       component: "Home"
     },
   ]
 }) 