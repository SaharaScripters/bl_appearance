function m(s,r){let e=GetResourceMetadata(s,"version",0);if(e=e&&e?.match(/\d+\.\d+\.\d+/)?.[0]||"unknown",e!=r){let c=e.split("."),o=r.split("."),u=`^1${GetInvokingResource()||GetCurrentResourceName()} requires version '${r}' of '${s}' (current version: ${e})^0`;for(let n=0;n<c.length;n++){let t=Number(c[n]),i=Number(o[n]);if(t!==i)if(isNaN(t)||t<i){console.error(u);break}else break}}}m("bl_bridge","1.2.5");
