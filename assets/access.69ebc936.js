import{n as e}from"./index.7aaae4e9.js";const o={name:"Landing",data:()=>({password:""}),mounted(){const s=document.querySelector("body");s.classList.add("landing-page"),s.classList.add("no-skin-config")},methods:{onSubmit(s){this.password=="Mpt2T@Q!#ly13.y31T1jao"&&(localStorage.setItem("access","Mpt2T@Q!#ly13.y31T1jao"),window.location.href=`${window.location.origin}/admin`)}}};var r=function(){var t=this,a=t._self._c;return a("div",{staticClass:"gray-bg h-100"},[a("div",{staticClass:"middle-box text-center loginscreen animated fadeInDown"},[a("div",[a("h3",[t._v("Selamat Datang")]),a("p",[t._v("Silahkan Masukan Kata Sandi")]),a("form",{staticClass:"m-t",attrs:{role:"form",action:""},on:{submit:function(n){return n.preventDefault(),t.onSubmit.apply(null,arguments)}}},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Kata Sandi",required:""},domProps:{value:t.password},on:{input:function(n){n.target.composing||(t.password=n.target.value)}}})]),a("button",{staticClass:"btn btn-primary block full-width m-b",attrs:{type:"submit"}},[t._v("Masuk")])])])])])},i=[],l=e(o,r,i,!1,null,null,null,null);const c=l.exports;export{c as default};
