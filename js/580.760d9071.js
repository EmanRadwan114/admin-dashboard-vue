"use strict";(self["webpackChunkbutterfly_shop"]=self["webpackChunkbutterfly_shop"]||[]).push([[580],{1580:function(t,e,s){s.r(e),s.d(e,{default:function(){return y}});var a=s(6768),l=s(4232),o=s(5130);const r={class:"text-center text-blue mb-4 h3 fw-semibold"},i={class:"row g-3 align-items-center mb-3"},n={class:"col-12"},u={class:"col-12"};function d(t,e,s,d,c,m){const h=(0,a.g2)("LoadingScreen");return(0,a.uX)(),(0,a.CE)(a.FK,null,[!t.category.title&&t.$route.fullPath.includes("edit")?((0,a.uX)(),(0,a.Wv)(h,{key:0})):(0,a.Q3)("",!0),(0,a.Lk)("h1",r,(0,l.v_)(t.$route.fullPath.includes("add")?"Add":"Edit")+" New Category ",1),(0,a.Lk)("form",{class:"border-blue p-3 rounded-3",method:"post",onSubmit:e[2]||(e[2]=(0,o.D$)((e=>t.$route.fullPath.includes("edit")?m.editCategory():m.addCategory()),["prevent"]))},[(0,a.Lk)("div",i,[(0,a.Lk)("div",n,[(0,a.bo)((0,a.Lk)("input",{type:"text",class:"form-control form-control-sm",placeholder:"Product Title","aria-label":"Product Title","onUpdate:modelValue":e[0]||(e[0]=t=>c.formValues.title=t)},null,512),[[o.Jo,c.formValues.title,void 0,{lazy:!0,trim:!0}]])]),(0,a.Lk)("div",u,[(0,a.bo)((0,a.Lk)("input",{type:"text",class:"form-control form-control-sm",placeholder:"Product Image Link","aria-label":"Product Image Link","onUpdate:modelValue":e[1]||(e[1]=t=>c.formValues.thumbnail=t)},null,512),[[o.Jo,c.formValues.thumbnail,void 0,{lazy:!0,trim:!0}]])])]),e[4]||(e[4]=(0,a.Lk)("button",{type:"submit",class:"btn btn-sm btn-blue w-100"},"Submit",-1)),(0,a.Lk)("p",{class:"text-success text-center mt-2 mb-0 fw-bold",style:(0,l.Tr)(c.submitted?{display:"block"}:{display:"none"})},e[3]||(e[3]=[(0,a.eW)(" Your data is submitted Successfully "),(0,a.Lk)("i",{class:"fa-solid fa-circle-check"},null,-1)]),4)],32)],64)}var c=s(8660),m=s(4712),h={name:"CategoryForm",components:{LoadingScreen:c.A},mixins:[m.A],data(){return{formValues:{title:"",thumbnail:""},submitted:!1,id:this.$route.params.id}},methods:{resetForm(){this.formValues.title="",this.formValues.thumbnail="",this.submitted=!0},addCategory(){this.addNewCategory(this.formValues),this.resetForm(),this.$emit("refresh")},editCategory(){this.updateCategory(this.category.id,this.formValues),this.submitted=!0}},async created(){this.$route.fullPath.includes("edit")&&(await this.getCategoryById(this.id),this.formValues.title=this.category.title,this.formValues.thumbnail=this.category.thumbnail)}},f=s(1241);const b=(0,f.A)(h,[["render",d]]);var y=b},8660:function(t,e,s){s.d(e,{A:function(){return u}});var a=s(6768);const l={class:"loading-screen d-flex justify-content-center align-items-center min-vh-100"};function o(t,e,s,o,r,i){return(0,a.uX)(),(0,a.CE)("div",l,e[0]||(e[0]=[(0,a.Lk)("span",{class:"loader"},null,-1)]))}var r={name:"LoadingScreen"},i=s(1241);const n=(0,i.A)(r,[["render",o],["__scopeId","data-v-9f0c320a"]]);var u=n}}]);
//# sourceMappingURL=580.760d9071.js.map