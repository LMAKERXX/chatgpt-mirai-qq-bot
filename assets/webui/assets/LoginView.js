import{d as _,r as l,o as a,c as n,a as e,w as m,v,t as h,b as g,e as f,u as b}from"./index.js";const w={class:"login-page"},y=["onSubmit"],k=e("h1",{class:"login-title"},"ChatGPT for Bot 控制台",-1),S={class:"form-group"},C=e("label",{for:"password",class:"sr-only"},"Password",-1),V={key:0,class:"error-message"},x=["disabled"],B={key:0},L={key:1},T=_({__name:"LoginView",setup(M){const d=b(),r=l(""),t=l(!1),s=l("");function c(){s.value=""}const u=async()=>{t.value=!0,s.value="";const i=await fetch("/backend-api/v1/login",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({password:r.value})}),o=await i.json();t.value=!1,i.status!=200?s.value=o.error:(localStorage.setItem("token",o.token),d.push("/dashboard"))};return(i,o)=>(a(),n("div",w,[e("form",{class:"login-form",onSubmit:f(u,["prevent"])},[k,e("div",S,[C,m(e("input",{type:"password",id:"password","onUpdate:modelValue":o[0]||(o[0]=p=>r.value=p),placeholder:"Password",required:"",onChange:c},null,544),[[v,r.value]])]),s.value?(a(),n("span",V,h(s.value),1)):g("",!0),e("button",{type:"submit",class:"submit-btn",disabled:t.value},[t.value?(a(),n("span",B,"Loading...")):(a(),n("span",L,"Submit"))],8,x)],40,y)]))}});export{T as default};