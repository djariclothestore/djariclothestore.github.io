"use strict";(self["webpackChunkdjari_clothe"]=self["webpackChunkdjari_clothe"]||[]).push([[41],{9041:function(s,a,e){e.r(a),e.d(a,{default:function(){return f}});var t=e(6252),o=e(3577);const d=s=>((0,t.dD)("data-v-b1de573e"),s=s(),(0,t.Cn)(),s),n={id:"board"},r=d((()=>(0,t._)("h2",null,"Ingresa una Nueva Contraseña",-1))),l={id:"msgPasswd"},i=(0,t.uE)('<div class="form-floating" data-v-b1de573e><input type="password" name="password" class="form-control" id="floatingPassword" placeholder="Password" data-v-b1de573e><label for="floatingRePassword" data-v-b1de573e>Nueva Contraseña</label></div><div class="form-floating" data-v-b1de573e><input type="password" name="confirmation_password" class="form-control" id="floatingRePassword" placeholder="Password" data-v-b1de573e><label for="floatingRePassword" data-v-b1de573e>Confirmar Contraseña </label></div>',2);function m(s,a,e,d,m,c){return(0,t.wg)(),(0,t.iD)("div",n,[r,(0,t._)("div",l,(0,o.zw)(m.msg_passwd),1),(0,t._)("form",{id:"form-passwd",onClick:a[1]||(a[1]=(...s)=>c.msgDisplay&&c.msgDisplay(...s))},[i,(0,t._)("button",{type:"button",class:"btn-send btn btn-primary mt-4",onClick:a[0]||(a[0]=(...s)=>c.sendPasswd&&c.sendPasswd(...s))},"Enviar")])])}var c=e(9669),g=e.n(c),w={name:"MyPasswdRecover",data(){return{msg_passwd:""}},mounted(){this.msgDisplay()},methods:{sendPasswd(){const s=this.$route.params.id,a=document.getElementById("form-passwd"),e=new FormData(a);for(var t of e.entries())console.log(t[0]+", "+t[1]);g().put("/api/ForgotPassword/newPassword/"+s,e,{headers:{"Content-Type":"multipart/form-data"}}).then((s=>{this.msg=s.data,"ResetPassword"in this.msg?(this.msg_passwd="Se cambio su contraseña exitosamente",console.log(this.msg.ResetPassword),document.getElementById("msgPasswd").style.backgroundColor="#A3DDCB",document.getElementById("msgPasswd").style.display="block",location.href="/login"):(this.msg_passwd="Error: "+this.msg.msj,document.getElementById("msgPasswd").style.backgroundColor="#DBE2EF",document.getElementById("msgPasswd").style.display="block")})).catch((s=>{console.log("Error: ",s)}))},msgDisplay(){document.getElementById("msgPasswd").style.display="none"}}},p=e(3744);const u=(0,p.Z)(w,[["render",m],["__scopeId","data-v-b1de573e"]]);var f=u}}]);
//# sourceMappingURL=41.f2b2403e.js.map