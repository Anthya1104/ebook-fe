/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[12],{459:function(Ba,va,r){r.r(va);var oa=r(0),ka=r(1);r.n(ka);var la=r(2),fa=r(153);Ba=r(48);var ea=r(98),ca=r(253),x=r(72),y=r(252);r=r(386);var h=window,e=function(){function f(n,z,w){var da=-1===n.indexOf("?")?"?":"&";switch(z){case x.a.NEVER_CACHE:this.url=n+da+"_="+Object(ka.uniqueId)();break;default:this.url=n}this.ff=w;this.request=new XMLHttpRequest;this.request.open("GET",this.url,!0);this.request.setRequestHeader("X-Requested-With",
"XMLHttpRequest");this.request.overrideMimeType?this.request.overrideMimeType("text/plain; charset=x-user-defined"):this.request.setRequestHeader("Accept-Charset","x-user-defined");this.status=y.a.NOT_STARTED}f.prototype.start=function(n,z){var w=this,da=this,ja=this.request,aa;da.Gx=0;n&&Object.keys(n).forEach(function(ba){w.request.setRequestHeader(ba,n[ba])});z&&(this.request.withCredentials=z);this.BE=setInterval(function(){var ba=0===window.document.URL.indexOf("file:///");ba=200===ja.status||
ba&&0===ja.status;if(ja.readyState!==y.b.DONE||ba){try{ja.responseText}catch(ia){return}da.Gx<ja.responseText.length&&(aa=da.Gia())&&da.trigger(f.Events.DATA,[aa]);0===ja.readyState&&(clearInterval(da.BE),da.trigger(f.Events.DONE))}else clearInterval(da.BE),da.trigger(f.Events.DONE,["Error received return status "+ja.status])},1E3);this.request.send(null);this.status=y.a.STARTED};f.prototype.Gia=function(){var n=this.request,z=n.responseText;if(0!==z.length)if(this.Gx===z.length)clearInterval(this.BE),
this.trigger(f.Events.DONE);else return z=Math.min(this.Gx+3E6,z.length),n=h.QU(n,this.Gx,!0,z),this.Gx=z,n};f.prototype.abort=function(){clearInterval(this.BE);var n=this;this.request.onreadystatechange=function(){Object(la.j)("StreamingRequest aborted");n.status=y.a.ABORTED;return n.trigger(f.Events.ABORTED)};this.request.abort()};f.prototype.finish=function(){var n=this;this.request.onreadystatechange=function(){n.status=y.a.SUCCESS;return n.trigger(f.Events.DONE)};this.request.abort()};f.Events=
{DONE:"done",DATA:"data",ABORTED:"aborted"};return f}();Object(Ba.a)(e);var b;(function(f){f[f.LOCAL_HEADER=0]="LOCAL_HEADER";f[f.FILE=1]="FILE";f[f.CENTRAL_DIR=2]="CENTRAL_DIR"})(b||(b={}));var a=function(f){function n(){var z=f.call(this)||this;z.buffer="";z.state=b.LOCAL_HEADER;z.wN=4;z.im=null;z.Lt=fa.c;z.Nn={};return z}Object(oa.c)(n,f);n.prototype.zia=function(z){var w;for(z=this.buffer+z;z.length>=this.Lt;)switch(this.state){case b.LOCAL_HEADER:this.im=w=this.Kia(z.slice(0,this.Lt));if(w.tu!==
fa.g)throw Error("Wrong signature in local header: "+w.tu);z=z.slice(this.Lt);this.state=b.FILE;this.Lt=w.XH+w.Fq+w.Aw+this.wN;this.trigger(n.Events.HEADER,[w]);break;case b.FILE:this.im.name=z.slice(0,this.im.Fq);this.Nn[this.im.name]=this.im;w=this.Lt-this.wN;var da=z.slice(this.im.Fq+this.im.Aw,w);this.trigger(n.Events.FILE,[this.im.name,da,this.im.mI]);z=z.slice(w);if(z.slice(0,this.wN)===fa.h)this.state=b.LOCAL_HEADER,this.Lt=fa.c;else return this.state=b.CENTRAL_DIR,!0}this.buffer=z;return!1};
n.Events={HEADER:"header",FILE:"file"};return n}(ca.a);Object(Ba.a)(a);Ba=function(f){function n(z,w,da,ja,aa){da=f.call(this,z,da,ja)||this;da.url=z;da.stream=new e(z,w);da.wd=new a;da.WX=window.createPromiseCapability();da.xY={};da.ff=aa;return da}Object(oa.c)(n,f);n.prototype.By=function(z){var w=this;this.request([this.Dj,this.Wk,this.Cj]);this.stream.addEventListener(e.Events.DATA,function(da){try{if(w.wd.zia(da))return w.stream.finish()}catch(ja){throw w.stream.abort(),w.Vp(ja),z(ja),ja;}});
this.stream.addEventListener(e.Events.DONE,function(da){w.cia=!0;w.WX.resolve();da&&(w.Vp(da),z(da))});this.wd.addEventListener(a.Events.HEADER,Object(ka.bind)(this.wY,this));this.wd.addEventListener(a.Events.FILE,Object(ka.bind)(this.$ia,this));return this.stream.start(this.ff,this.withCredentials)};n.prototype.NU=function(z){var w=this;this.WX.promise.then(function(){z(Object.keys(w.wd.Nn))})};n.prototype.zo=function(){return!0};n.prototype.request=function(z){var w=this;this.cia&&z.forEach(function(da){w.xY[da]||
w.Qna(da)})};n.prototype.wY=function(){};n.prototype.abort=function(){this.stream&&this.stream.abort()};n.prototype.Qna=function(z){this.trigger(ea.a.Events.PART_READY,[{$a:z,error:"Requested part not found",Ni:!1,hg:!1}])};n.prototype.$ia=function(z,w,da){this.xY[z]=!0;this.trigger(ea.a.Events.PART_READY,[{$a:z,data:w,Ni:!1,hg:!1,error:null,cd:da}])};return n}(ea.a);Object(r.a)(Ba);Object(r.b)(Ba);va["default"]=Ba}}]);}).call(this || window)
