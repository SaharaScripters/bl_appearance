var s=0,G=e=>{s=e};var N=(e,t)=>{SendNUIMessage({action:e,data:t})},I=e=>new Promise(t=>setTimeout(t,e)),ce=async e=>{let t=typeof e=="number"?e:GetHashKey(e);if(!IsModelValid(t))throw exports.bl_bridge.notify()({title:"Invalid model!",type:"error",duration:1e3}),new Error(`attempted to load invalid model '${e}'`);return HasModelLoaded(t)||(RequestModel(t),await new Promise(a=>{let o=setInterval(()=>{HasModelLoaded(t)&&(clearInterval(o),a())},100)})),t},F=GetCurrentResourceName(),le={},R={};function Oe(e,t){if(t&&t>0){let r=GetGameTimer();if((le[e]||0)>r)return!1;le[e]=r+t}return!0}onNet(`__ox_cb_${F}`,(e,...t)=>{let r=R[e];return r&&r(...t)});function m(e,...t){if(!Oe(e,0))return;let r;do r=`${e}:${Math.floor(Math.random()*100001)}`;while(R[r]);return emitNet(`__ox_cb_${e}`,F,r,...t),new Promise(a=>{R[r]=a})}function j(e,t){onNet(`__ox_cb_${e}`,async(r,a,...o)=>{let n;try{n=await t(...o)}catch(i){console.error(`an error occurred while handling callback event ${e}`),console.log(`^3${i.stack}^0`)}emitNet(`__ox_cb_${r}`,a,n)})}var ue=e=>new Promise(t=>{let r=()=>{if(RequestResourceFileSet(e)){let a=exports.bl_appearance.config().locale,o=LoadResourceFile(F,`locale/${a}.json`);o||(console.error(`${a}.json not found in locale, please verify!, we used english for now!`),o=LoadResourceFile(F,"locale/en.json")),t(o)}else setTimeout(r,100)};r()});var E=exports.bl_bridge,z=()=>E.core().getPlayerData(),g=()=>z().cid;function pe(e){return new Promise(t=>setTimeout(t,e))}var S=!1,f=1.8,b=null,y=0,_=0,h=null,Z=null,U=!1,de=0,me="head",Fe={head:31086,torso:24818,legs:14201},T=e=>Math.cos(e*Math.PI/180),K=e=>Math.sin(e*Math.PI/180),fe=()=>{let e=(T(_)*T(y)+T(y)*T(_))/2*f,t=(K(_)*T(y)+T(y)*K(_))/2*f,r=K(y)*f;return[e,t,r]},Ge=(e,t)=>{if(!S||!h||U)return;e=e??0,t=t??0,_-=e,y+=t,y=Math.min(Math.max(y,0),89);let[r,a,o]=fe();SetCamCoord(b,h.x+r,h.y+a,h.z+o),PointCamAtCoord(b,h.x,h.y,h.z)},ge=async(e,t)=>{let r=GetEntityHeading(s)+94;t=t??1,U=!0,f=t,_=r;let[a,o,n]=fe(),i=CreateCamWithParams("DEFAULT_SCRIPTED_CAMERA",e.x+a,e.y+o,e.z+n,0,0,0,70,!1,0);h=e,U=!1,Z=b,b=i,PointCamAtCoord(i,e.x,e.y,e.z),SetCamActiveWithInterp(i,Z,250,0,0),await I(250),SetCamUseShallowDofMode(i,!0),SetCamNearDof(i,.4),SetCamFarDof(i,1.2),SetCamDofStrength(i,.3),be(i),DestroyCam(Z,!0)},be=e=>{DoesCamExist(b)&&e==b&&(SetUseHiDof(),setTimeout(be,0))},he=()=>{if(S)return;S=!0,f=1,b=CreateCam("DEFAULT_SCRIPTED_CAMERA",!0);let[e,t,r]=GetPedBoneCoords(s,31086,0,0,0);SetCamCoord(b,e,t,r),RenderScriptCams(!0,!0,1e3,!0,!0),ge({x:e,y:t,z:r},f)},ye=()=>{S&&(S=!1,RenderScriptCams(!1,!0,250,!0,!1),DestroyCam(b,!0),b=null,h=null)},$=e=>{let t=Fe[e];if(me==e)return;let[r,a,o]=t?GetPedBoneCoords(s,t,0,0,t===14201?.2:0):GetEntityCoords(s,!1);ge({x:r,y:a,z:o+0},1),me=e};RegisterNuiCallback("appearance:camMove",(e,t)=>{t(1);let r=GetEntityHeading(s);de!=e.x&&(r=e.x>de?r+5:r-5,SetEntityHeading(s,r))});RegisterNuiCallback("appearance:camScroll",(e,t)=>{switch(e){case 2:$();break;case 1:$("legs");break;case 3:$("head");break}t(1)});RegisterNuiCallback("appearance:camZoom",(e,t)=>{if(e==="down"){let r=f+.05;f=r>=1?1:r}else if(e==="up"){let r=f-.05;f=r<=.35?.35:r}f=f,Ge(),t(1)});var q=["Blemishes","FacialHair","Eyebrows","Ageing","Makeup","Blush","Complexion","SunDamage","Lipstick","MolesFreckles","ChestHair","BodyBlemishes","AddBodyBlemishes","EyeColor"];var W=["Nose_Width","Nose_Peak_Height","Nose_Peak_Lenght","Nose_Bone_Height","Nose_Peak_Lowering","Nose_Bone_Twist","EyeBrown_Height","EyeBrown_Forward","Cheeks_Bone_High","Cheeks_Bone_Width","Cheeks_Width","Eyes_Openning","Lips_Thickness","Jaw_Bone_Width","Jaw_Bone_Back_Lenght","Chin_Bone_Lowering","Chin_Bone_Length","Chin_Bone_Width","Chin_Hole","Neck_Thikness"];var J=["face","masks","hair","torsos","legs","bags","shoes","neck","shirts","vest","decals","jackets"];var X=["hats","glasses","earrings","mouth","lhand","rhand","watches","bracelets"];function Ne(e){return exports.bl_appearance.models().findIndex(a=>GetHashKey(a)===e)}function xe(e){return{color:GetPedHairColor(e),highlight:GetPedHairHighlightColor(e)}}function Pe(e){let t=new ArrayBuffer(80);global.Citizen.invokeNative("0x2746bd9d88c5c5d0",e,new Uint32Array(t));let{0:r,2:a,4:o,6:n,8:i,18:c,10:u}=new Uint32Array(t),{0:l,2:p,4:d}=new Float32Array(t,48);return{shapeFirst:r,shapeSecond:a,shapeThird:o,skinFirst:n,skinSecond:i,skinThird:u,shapeMix:l,thirdMix:d,skinMix:p,hasParent:!!c}}function Ce(e){let t={},r={};for(let a=0;a<q.length;a++){let o=q[a];if(t[o]=GetNumHeadOverlayValues(a),o==="EyeColor")r[o]={id:o,index:a,overlayValue:GetPedEyeColor(e)};else{let[n,i,c,u,l,p]=GetPedHeadOverlayData(e,a+1);r[o]={id:o,index:a,overlayValue:i===255?-1:i,colourType:c,firstColor:u,secondColor:l,overlayOpacity:p}}}return[r,t]}function we(e){let t=GetEntityModel(e);if(t!==GetHashKey("mp_m_freemode_01")&&t!==GetHashKey("mp_f_freemode_01"))return;let r={};for(let a=0;a<W.length;a++){let o=W[a];r[o]={id:o,index:a,value:GetPedFaceFeature(e,a)}}return r}function Te(e){let t={},r={};for(let a=0;a<J.length;a++){let o=J[a],n=GetPedDrawableVariation(e,a);r[o]={id:o,index:a,total:GetNumberOfPedDrawableVariations(e,a),textures:GetNumberOfPedTextureVariations(e,a,n)},t[o]={id:o,index:a,value:GetPedDrawableVariation(e,a),texture:GetPedTextureVariation(e,a)}}return[t,r]}function _e(e){let t={},r={};for(let a=0;a<X.length;a++){let o=X[a],n=GetPedPropIndex(e,a);r[o]={id:o,index:a,total:GetNumberOfPedPropDrawableVariations(e,a),textures:GetNumberOfPedPropTextureVariations(e,a,n)},t[o]={id:o,index:a,value:GetPedPropIndex(e,a),texture:GetPedPropTextureIndex(e,a)}}return[t,r]}async function P(e){let[t,r]=Ce(e),[a,o]=Te(e),[n,i]=_e(e),c=GetEntityModel(e);return{modelIndex:Ne(c),model:c,hairColor:xe(e),headBlend:Pe(e),headOverlay:t,headOverlayTotal:r,headStructure:we(e),drawables:a,props:n,drawTotal:o,propTotal:i,tattoos:[]}}exports("GetAppearance",P);j("bl_appearance:client:getAppearance",()=>P(s));function Ie(e){let[t]=Te(e),[r]=_e(e),[a]=Ce(e);return{headOverlay:a,drawables:t,props:r}}exports("GetPedClothes",Ie);function Ee(e){return{headBlend:Pe(e),headStructure:we(e),hairColor:xe(e),model:GetEntityModel(e)}}exports("GetPedSkin",Ee);function B(){let e=[],[t,r]=exports.bl_appearance.tattoos();for(let o=0;o<r.length;o++){let n=r[o],i=n.zone,c=n.label,u=n.index;e[u]={zone:i,label:c,zoneIndex:u,dlcs:[]};for(let l=0;l<t.length;l++){let p=t[l];e[u].dlcs.push({label:p.dlc,dlcIndex:l,tattoos:[]})}}let a=GetEntityModel(s)===GetHashKey("mp_f_freemode_01");for(let o=0;o<t.length;o++){let n=t[o],{dlc:i,tattoos:c}=n,u=GetHashKey(i);for(let l=0;l<c.length;l++){let p=c[l],d=null,M=p.toLowerCase().includes("_f");(M&&a||!M&&!a)&&(d=p);let x=null,w=-1;d&&(x=GetHashKey(d),w=GetPedDecorationZoneFromHashes(u,x)),w!==-1&&x&&e[w].dlcs[o].tattoos.push({label:d,hash:x,zone:w,dlc:i})}}return e}j("bl_appearance:client:migration:setAppearance",e=>{e.type==="fivem"&&exports["fivem-appearance"].setPlayerAppearance(e.data),e.type==="illenium"&&exports["illenium-appearance"].setPlayerAppearance(e.data)});var H={hats:{type:"prop",index:0},glasses:{type:"prop",index:1},masks:{type:"drawable",index:1,off:0},shirts:{type:"drawable",index:8,off:15,hook:{drawables:[{component:3,variant:15,texture:0,id:"torsos"},{component:11,variant:15,texture:0,id:"jackets"}]}},jackets:{type:"drawable",index:11,off:15,hook:{drawables:[{component:3,variant:15,texture:0,id:"torsos"},{component:8,variant:15,texture:0,id:"shirts"}]}},legs:{type:"drawable",index:4,off:11},shoes:{type:"drawable",index:6,off:13}};function D(e,t){return SetPedComponentVariation(e,t.index,t.value,t.texture,0),GetNumberOfPedTextureVariations(e,t.index,t.value)}function V(e,t){if(t.value===-1){ClearPedProp(e,t.index);return}return SetPedPropIndex(e,t.index,t.value,t.texture,!1),GetNumberOfPedPropTextureVariations(e,t.index,t.value)}var Q=async e=>{let t=await ce(e);SetPlayerModel(PlayerId(),t),SetModelAsNoLongerNeeded(t);let r=PlayerPedId();G(r),SetPedDefaultComponentVariation(r),t===GetHashKey("mp_m_freemode_01")?SetPedHeadBlendData(s,0,0,0,0,0,0,0,0,0,!1):t===GetHashKey("mp_f_freemode_01")&&SetPedHeadBlendData(s,45,21,0,20,15,0,.3,.1,0,!1)};function Y(e,t){SetPedFaceFeature(e,t.index,t.value+0)}var v=e=>e>=0?e:0;function ee(e,t){let r=v(t.shapeFirst),a=v(t.shapeSecond),o=v(t.shapeThird),n=v(t.skinFirst),i=v(t.skinSecond),c=v(t.skinThird),u=t.shapeMix+0,l=t.skinMix+0,p=t.thirdMix+0,d=t.hasParent;SetPedHeadBlendData(e,r,a,o,n,i,c,u,l,p,d)}function te(e,t){let r=t.index;if(r===13){SetPedEyeColor(e,t.value);return}let a=t.overlayValue===-1?255:t.overlayValue;if(t.id==="hairColor"){SetPedHairTint(e,t.hairColor,t.hairHighlight);return}SetPedHeadOverlay(e,r,a,t.overlayOpacity+0),SetPedHeadOverlayColor(e,r,1,t.firstColor,t.secondColor)}function ve(e){let t=e.drawables,r=e.props;for(let[a,o]of Object.entries(H)){let n=o.type,i=o.index;n==="drawable"&&t[a]?GetPedDrawableVariation(s,i)!==t[a].value&&SetPedComponentVariation(s,i,t[a].value,0,0):n==="prop"&&r[a]&&GetPedPropIndex(s,i)!==r[a].value&&SetPedPropIndex(s,i,r[a].value,0,!1)}}function A(e,t){let r=t.drawables,a=t.props,o=t.headOverlay;for(let n in r){let i=r[n];D(e,i)}for(let n in a){let i=a[n];V(e,i)}for(let n in o){let i=o[n];te(e,i)}}var re=async e=>{let t=e.headStructure,r=e.headBlend;if(await Q(e.model),r&&ee(s,r),t)for(let a in t){let o=t[a];Y(s,o)}};function C(e,t){if(t){ClearPedDecorationsLeaveScars(e);for(let r=0;r<t.length;r++){let a=t[r].tattoo;if(a){let o=GetHashKey(a.dlc),n=a.hash;AddPedDecorationFromHashes(e,o,n)}}}}function ae(e,t){let r=t.color,a=t.highlight;SetPedHairColor(e,r,a)}async function oe(e,t){await re(t),A(e,t),ae(e,t.hairColor),C(e,t.tattoos)}async function k(e){await re(e),A(s,e),ae(s,e.hairColor),C(s,e.tattoos)}exports("SetPedClothes",A);exports("SetPedSkin",re);exports("SetPedTattoos",C);exports("SetPedHairColors",ae);RegisterNuiCallback("appearance:cancel",async(e,t)=>{await k(e),ne(),t(1)});RegisterNuiCallback("appearance:save",async(e,t)=>{ve(e),await I(100);let r=await P(s);r.tattoos=e.tattoos,m("bl_appearance:server:saveAppearance",g(),r),C(s,r.tattoos),ne(),t(1)});RegisterNuiCallback("appearance:setModel",async(e,t)=>{let r=GetHashKey(e);if(!IsModelInCdimage(r)||!IsModelValid(r))return t(0);await Q(r);let a=await P(s);a.tattoos=[],C(s,[]),t(a)});RegisterNuiCallback("appearance:getModelTattoos",async(e,t)=>{let r=B();t(r)});RegisterNuiCallback("appearance:setHeadStructure",async(e,t)=>{Y(s,e),t(1)});RegisterNuiCallback("appearance:setHeadOverlay",async(e,t)=>{te(s,e),t(1)});RegisterNuiCallback("appearance:setHeadBlend",async(e,t)=>{ee(s,e),t(1)});RegisterNuiCallback("appearance:setTattoos",async(e,t)=>{C(s,e),t(1)});RegisterNuiCallback("appearance:setProp",async(e,t)=>{let r=V(s,e);t(r)});RegisterNuiCallback("appearance:setDrawable",async(e,t)=>{let r=D(s,e);t(r)});RegisterNuiCallback("appearance:toggleItem",async(e,t)=>{let r=H[e.item];if(!r)return t(!1);let a=e.data,o=r.type,n=r.index,i=r.hook,c=e.hookData;if(!a)return t(!1);if(o==="prop")if(GetPedPropIndex(s,n)===-1){V(s,a),t(!1);return}else{ClearPedProp(s,n),t(!0);return}else if(o==="drawable"){let u=GetPedDrawableVariation(s,n);if(a.value===r.off){t(!1);return}if(a.value===u){if(SetPedComponentVariation(s,n,r.off,0,0),i)for(let l=0;l<i.drawables?.length;l++){let p=i.drawables[l];SetPedComponentVariation(s,p.component,p.variant,p.texture,0)}t(!0);return}else{D(s,a);for(let l=0;l<c?.length;l++)D(s,c[l]);t(!1);return}}});RegisterNuiCallback("appearance:saveOutfit",async(e,t)=>{let r=g(),a=await m("bl_appearance:server:saveOutfit",r,e);t(a)});RegisterNuiCallback("appearance:deleteOutfit",async({id:e},t)=>{let r=g(),a=await m("bl_appearance:server:deleteOutfit",r,e);t(a)});RegisterNuiCallback("appearance:renameOutfit",async(e,t)=>{let r=g(),a=await m("bl_appearance:server:renameOutfit",r,e);t(a)});RegisterNuiCallback("appearance:useOutfit",async(e,t)=>{A(s,e),t(1)});var se=exports.bl_appearance,ke=0,L=null;async function O(e,t=!1){if(e===null)return;let r=PlayerPedId(),a=se.menus(),o=e.type,n=a[o];if(!n)return;G(r),he();let i=g(),c=n.tabs,u=n.allowExit;ke=GetPedArmour(r);let l=[];c.includes("outfits")&&(l=await m("bl_appearance:server:getOutfits",i));let d=[];c.includes("heritage")&&(d=se.models());let M=c.includes("tattoos"),x;M&&(x=B());let w=Be(e),ie=await P(r);return t&&(L=new Promise(De=>{let Ae=null;Ae=AddEventHandler("bl_appearance:client:exit",async He=>{removeEventListener("bl_appearance:client:exit",()=>{De(!1)})})}),u=!1),N("appearance:data",{tabs:c,appearance:ie,blacklist:w,tattoos:x,outfits:l,models:d,allowExit:u,locale:await ue("locale")}),SetNuiFocus(!0,!0),N("appearance:visible",!0),L&&await L,L=null,!0}function Be(e){if(!e)return{};let{groupTypes:t,base:r}=se.blacklist();if(!t)return{};if(!r)return{};let a={...r},o=z();for(let n in t){let i=t[n];for(let c in i){let u=!1;if(n=="jobs"&&e.jobs&&(u=e.jobs.includes(o.job.name)),n=="gangs"&&e.gangs&&(u=e.gangs.includes(o.gang.name)),!u){let l=i[c];a=Object.assign({},a,l,{drawables:Object.assign({},a.drawables,l.drawables)})}}}return a}function ne(){SetPedArmour(s,ke),ye(),SetNuiFocus(!1,!1),N("appearance:visible",!1),emitNet("bl_appearance:server:exit")}RegisterCommand("openMenu",()=>{O({type:"appearance",coords:[0,0,0,0]})},!1);exports("SetPedAppearance",async(e,t)=>{await oe(e,t)});exports("SetPlayerPedAppearance",async e=>{let t=await m("bl_appearance:server:getAppearance",e);await k(t)});exports("GetPlayerPedAppearance",async e=>await m("bl_appearance:server:getAppearance",e));exports("InitialCreation",async e=>{await O({type:"appearance",coords:[0,0,0,0]}),e&&e()});on("bl_sprites:client:useZone",e=>{O(e)});onNet("qb-clothing:client:loadPlayerClothing",async(e,t)=>{await oe(t,e)});onNet("qb-clothes:client:CreateFirstCharacter",async()=>{O({type:"appearance",coords:[0,0,0,0]})});onNet("bl_bridge:client:playerLoaded",async()=>{for(;!E.core().playerLoaded();)await pe(100);let e=await g(),t=await m("bl_appearance:server:getAppearance",e);await k(t)});onNet("onResourceStart",async e=>{if(e===GetCurrentResourceName()&&E.core().playerLoaded()){let t=await g(),r=await m("bl_appearance:server:getAppearance",t);await k(r)}});
