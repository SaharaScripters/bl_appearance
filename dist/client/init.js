var i=0,F=e=>{i=e};var G=(e,t)=>{SendNUIMessage({action:e,data:t})},N=e=>new Promise(t=>setTimeout(t,e)),le=async e=>{let t=typeof e=="number"?e:GetHashKey(e);if(!IsModelValid(t))throw exports.bl_bridge.notify()({title:"Invalid model!",type:"error",duration:1e3}),new Error(`attempted to load invalid model '${e}'`);return HasModelLoaded(t)||(RequestModel(t),await new Promise(a=>{let o=setInterval(()=>{HasModelLoaded(t)&&(clearInterval(o),a())},100)})),t},M=GetCurrentResourceName(),ie={},L={};function De(e,t){if(t&&t>0){let r=GetGameTimer();if((ie[e]||0)>r)return!1;ie[e]=r+t}return!0}onNet(`__ox_cb_${M}`,(e,...t)=>{let r=L[e];return r&&r(...t)});function f(e,...t){if(!De(e,0))return;let r;do r=`${e}:${Math.floor(Math.random()*100001)}`;while(L[r]);return emitNet(`__ox_cb_${e}`,M,r,...t),new Promise(a=>{L[r]=a})}function R(e,t){onNet(`__ox_cb_${e}`,async(r,a,...o)=>{let n;try{n=await t(...o)}catch(s){console.error(`an error occurred while handling callback event ${e}`),console.log(`^3${s.stack}^0`)}emitNet(`__ox_cb_${r}`,a,n)})}var ce=e=>new Promise(t=>{let r=()=>{if(RequestResourceFileSet(e)){let a=exports.bl_appearance.config().locale,o=LoadResourceFile(M,`locale/${a}.json`);o||(console.error(`${a}.json not found in locale, please verify!, we used english for now!`),o=LoadResourceFile(M,"locale/en.json")),t(o)}else setTimeout(r,100)};r()});var Ae=exports.bl_bridge,j=()=>Ae.core().getPlayerData(),x=()=>j().cid;var k=!1,m=1.8,g=null,b=0,_=0,h=null,z=null,$=!1,ue=0,pe="head",Me={head:31086,torso:24818,legs:14201},w=e=>Math.cos(e*Math.PI/180),Z=e=>Math.sin(e*Math.PI/180),de=()=>{let e=(w(_)*w(b)+w(b)*w(_))/2*m,t=(Z(_)*w(b)+w(b)*Z(_))/2*m,r=Z(b)*m;return[e,t,r]},Fe=(e,t)=>{if(!k||!h||$)return;e=e??0,t=t??0,_-=e,b+=t,b=Math.min(Math.max(b,0),89);let[r,a,o]=de();SetCamCoord(g,h.x+r,h.y+a,h.z+o),PointCamAtCoord(g,h.x,h.y,h.z)},me=async(e,t)=>{let r=GetEntityHeading(i)+94;t=t??1,$=!0,m=t,_=r;let[a,o,n]=de(),s=CreateCamWithParams("DEFAULT_SCRIPTED_CAMERA",e.x+a,e.y+o,e.z+n,0,0,0,70,!1,0);h=e,$=!1,z=g,g=s,PointCamAtCoord(s,e.x,e.y,e.z),SetCamActiveWithInterp(s,z,250,0,0),await N(250),SetCamUseShallowDofMode(s,!0),SetCamNearDof(s,.4),SetCamFarDof(s,1.2),SetCamDofStrength(s,.3),fe(s),DestroyCam(z,!0)},fe=e=>{DoesCamExist(g)&&e==g&&(SetUseHiDof(),setTimeout(fe,0))},ge=()=>{if(k)return;k=!0,m=1,g=CreateCam("DEFAULT_SCRIPTED_CAMERA",!0);let[e,t,r]=GetPedBoneCoords(i,31086,0,0,0);SetCamCoord(g,e,t,r),RenderScriptCams(!0,!0,1e3,!0,!0),me({x:e,y:t,z:r},m)},he=()=>{k&&(k=!1,RenderScriptCams(!1,!0,250,!0,!1),DestroyCam(g,!0),g=null,h=null)},K=e=>{let t=Me[e];if(pe==e)return;let[r,a,o]=t?GetPedBoneCoords(i,t,0,0,t===14201?.2:0):GetEntityCoords(i,!1);me({x:r,y:a,z:o+0},1),pe=e};RegisterNuiCallback("appearance:camMove",(e,t)=>{t(1);let r=GetEntityHeading(i);ue!=e.x&&(r=e.x>ue?r+5:r-5,SetEntityHeading(i,r))});RegisterNuiCallback("appearance:camScroll",(e,t)=>{switch(e){case 2:K();break;case 1:K("legs");break;case 3:K("head");break}t(1)});RegisterNuiCallback("appearance:camZoom",(e,t)=>{if(e==="down"){let r=m+.05;m=r>=1?1:r}else if(e==="up"){let r=m-.05;m=r<=.35?.35:r}m=m,Fe(),t(1)});var U=["Blemishes","FacialHair","Eyebrows","Ageing","Makeup","Blush","Complexion","SunDamage","Lipstick","MolesFreckles","ChestHair","BodyBlemishes","AddBodyBlemishes","EyeColor"];var q=["Nose_Width","Nose_Peak_Height","Nose_Peak_Lenght","Nose_Bone_Height","Nose_Peak_Lowering","Nose_Bone_Twist","EyeBrown_Height","EyeBrown_Forward","Cheeks_Bone_High","Cheeks_Bone_Width","Cheeks_Width","Eyes_Openning","Lips_Thickness","Jaw_Bone_Width","Jaw_Bone_Back_Lenght","Chin_Bone_Lowering","Chin_Bone_Length","Chin_Bone_Width","Chin_Hole","Neck_Thikness"];var W=["face","masks","hair","torsos","legs","bags","shoes","neck","shirts","vest","decals","jackets"];var J=["hats","glasses","earrings","mouth","lhand","rhand","watches","bracelets"];function Ge(e){return exports.bl_appearance.models().findIndex(a=>GetHashKey(a)===e)}function be(e){return{color:GetPedHairColor(e),highlight:GetPedHairHighlightColor(e)}}function ye(e){let t=new ArrayBuffer(80);global.Citizen.invokeNative("0x2746bd9d88c5c5d0",e,new Uint32Array(t));let{0:r,2:a,4:o,6:n,8:s,18:c,10:u}=new Uint32Array(t),{0:l,2:p,4:d}=new Float32Array(t,48);return{shapeFirst:r,shapeSecond:a,shapeThird:o,skinFirst:n,skinSecond:s,skinThird:u,shapeMix:l,thirdMix:d,skinMix:p,hasParent:!!c}}function xe(e){let t={},r={};for(let a=0;a<U.length;a++){let o=U[a];if(t[o]=GetNumHeadOverlayValues(a),o==="EyeColor")r[o]={id:o,index:a,overlayValue:GetPedEyeColor(e)};else{let[n,s,c,u,l,p]=GetPedHeadOverlayData(e,a+1);r[o]={id:o,index:a,overlayValue:s===255?-1:s,colourType:c,firstColor:u,secondColor:l,overlayOpacity:p}}}return[r,t]}function Pe(e){let t=GetEntityModel(e);if(t!==GetHashKey("mp_m_freemode_01")&&t!==GetHashKey("mp_f_freemode_01"))return;let r={};for(let a=0;a<q.length;a++){let o=q[a];r[o]={id:o,index:a,value:GetPedFaceFeature(e,a)}}return r}function Ce(e){let t={},r={};for(let a=0;a<W.length;a++){let o=W[a],n=GetPedDrawableVariation(e,a);r[o]={id:o,index:a,total:GetNumberOfPedDrawableVariations(e,a),textures:GetNumberOfPedTextureVariations(e,a,n)},t[o]={id:o,index:a,value:GetPedDrawableVariation(e,a),texture:GetPedTextureVariation(e,a)}}return[t,r]}function Te(e){let t={},r={};for(let a=0;a<J.length;a++){let o=J[a],n=GetPedPropIndex(e,a);r[o]={id:o,index:a,total:GetNumberOfPedPropDrawableVariations(e,a),textures:GetNumberOfPedPropTextureVariations(e,a,n)},t[o]={id:o,index:a,value:GetPedPropIndex(e,a),texture:GetPedPropTextureIndex(e,a)}}return[t,r]}async function P(e){let[t,r]=xe(e),[a,o]=Ce(e),[n,s]=Te(e),c=GetEntityModel(e);return{modelIndex:Ge(c),model:c,hairColor:be(e),headBlend:ye(e),headOverlay:t,headOverlayTotal:r,headStructure:Pe(e),drawables:a,props:n,drawTotal:o,propTotal:s,tattoos:[]}}exports("GetAppearance",P);R("bl_appearance:client:getAppearance",()=>P(i));function Ne(e){let[t]=Ce(e),[r]=Te(e),[a]=xe(e);return{headOverlay:a,drawables:t,props:r}}exports("GetPedClothes",Ne);function Ie(e){return{headBlend:ye(e),headStructure:Pe(e),hairColor:be(e),model:GetEntityModel(e)}}exports("GetPedSkin",Ie);function I(){let e=[],[t,r]=exports.bl_appearance.tattoos();for(let o=0;o<r.length;o++){let n=r[o],s=n.zone,c=n.label,u=n.index;e[u]={zone:s,label:c,zoneIndex:u,dlcs:[]};for(let l=0;l<t.length;l++){let p=t[l];e[u].dlcs.push({label:p.dlc,dlcIndex:l,tattoos:[]})}}let a=GetEntityModel(i)===GetHashKey("mp_f_freemode_01");for(let o=0;o<t.length;o++){let n=t[o],{dlc:s,tattoos:c}=n,u=GetHashKey(s);for(let l=0;l<c.length;l++){let p=c[l],d=null,O=p.toLowerCase().includes("_f");(O&&a||!O&&!a)&&(d=p);let y=null,T=-1;d&&(y=GetHashKey(d),T=GetPedDecorationZoneFromHashes(u,y)),T!==-1&&y&&e[T].dlcs[o].tattoos.push({label:d,hash:y,zone:T,dlc:s})}}return e}R("bl_appearance:client:migration:setAppearance",e=>{e.type==="fivem"&&exports["fivem-appearance"].setPlayerAppearance(e.data),e.type==="illenium"&&exports["illenium-appearance"].setPlayerAppearance(e.data)});var E={hats:{type:"prop",index:0},glasses:{type:"prop",index:1},masks:{type:"drawable",index:1,off:0},shirts:{type:"drawable",index:8,off:15,hook:{drawables:[{component:3,variant:15,texture:0,id:"torsos"},{component:11,variant:15,texture:0,id:"jackets"}]}},jackets:{type:"drawable",index:11,off:15,hook:{drawables:[{component:3,variant:15,texture:0,id:"torsos"},{component:8,variant:15,texture:0,id:"shirts"}]}},legs:{type:"drawable",index:4,off:11},shoes:{type:"drawable",index:6,off:13}};function S(e,t){return SetPedComponentVariation(e,t.index,t.value,t.texture,0),GetNumberOfPedTextureVariations(e,t.index,t.value)}function B(e,t){if(t.value===-1){ClearPedProp(e,t.index);return}return SetPedPropIndex(e,t.index,t.value,t.texture,!1),GetNumberOfPedPropTextureVariations(e,t.index,t.value)}var X=async e=>{let t=await le(e);SetPlayerModel(PlayerId(),t),SetModelAsNoLongerNeeded(t);let r=PlayerPedId();F(r),SetPedDefaultComponentVariation(r),t===GetHashKey("mp_m_freemode_01")?SetPedHeadBlendData(i,0,0,0,0,0,0,0,0,0,!1):t===GetHashKey("mp_f_freemode_01")&&SetPedHeadBlendData(i,45,21,0,20,15,0,.3,.1,0,!1)};function Q(e,t){SetPedFaceFeature(e,t.index,t.value+0)}var v=e=>e>=0?e:0;function Y(e,t){let r=v(t.shapeFirst),a=v(t.shapeSecond),o=v(t.shapeThird),n=v(t.skinFirst),s=v(t.skinSecond),c=v(t.skinThird),u=t.shapeMix+0,l=t.skinMix+0,p=t.thirdMix+0,d=t.hasParent;SetPedHeadBlendData(e,r,a,o,n,s,c,u,l,p,d)}function ee(e,t){let r=t.index;if(r===13){SetPedEyeColor(e,t.value);return}let a=t.overlayValue===-1?255:t.overlayValue;if(t.id==="hairColor"){SetPedHairTint(e,t.hairColor,t.hairHighlight);return}SetPedHeadOverlay(e,r,a,t.overlayOpacity+0),SetPedHeadOverlayColor(e,r,1,t.firstColor,t.secondColor)}function we(e){let t=e.drawables,r=e.props;for(let[a,o]of Object.entries(E)){let n=o.type,s=o.index;n==="drawable"&&t[a]?GetPedDrawableVariation(i,s)!==t[a].value&&SetPedComponentVariation(i,s,t[a].value,0,0):n==="prop"&&r[a]&&GetPedPropIndex(i,s)!==r[a].value&&SetPedPropIndex(i,s,r[a].value,0,!1)}}function D(e,t){let r=t.drawables,a=t.props,o=t.headOverlay;for(let n in r){let s=r[n];S(e,s)}for(let n in a){let s=a[n];B(e,s)}for(let n in o){let s=o[n];ee(e,s)}}var te=async e=>{let t=e.headStructure,r=e.headBlend;if(await X(e.model),r&&Y(i,r),t)for(let a in t){let o=t[a];Q(i,o)}};function C(e,t){if(t){ClearPedDecorationsLeaveScars(e);for(let r=0;r<t.length;r++){let a=t[r].tattoo;if(a){let o=GetHashKey(a.dlc),n=a.hash;AddPedDecorationFromHashes(e,o,n)}}}}function re(e,t){let r=t.color,a=t.highlight;SetPedHairColor(e,r,a)}async function ae(e,t){await te(t),D(e,t),re(e,t.hairColor),C(e,t.tattoos)}async function H(e){await te(e),D(i,e),re(i,e.hairColor),C(i,e.tattoos)}exports("SetPedClothes",D);exports("SetPedSkin",te);exports("SetPedTattoos",C);exports("SetPedHairColors",re);RegisterNuiCallback("appearance:cancel",async(e,t)=>{await H(e),oe(),t(1)});RegisterNuiCallback("appearance:save",async(e,t)=>{we(e),await N(100);let r=await P(i);r.tattoos=e.tattoos,f("bl_appearance:server:saveAppearance",x(),r),C(i,r.tattoos),oe(),t(1)});RegisterNuiCallback("appearance:setModel",async(e,t)=>{let r=GetHashKey(e);if(!IsModelInCdimage(r)||!IsModelValid(r))return t(0);await X(r);let a=await P(i);a.tattoos=[],C(i,[]),t(a)});RegisterNuiCallback("appearance:getModelTattoos",async(e,t)=>{let r=I();t(r)});RegisterNuiCallback("appearance:setHeadStructure",async(e,t)=>{Q(i,e),t(1)});RegisterNuiCallback("appearance:setHeadOverlay",async(e,t)=>{ee(i,e),t(1)});RegisterNuiCallback("appearance:setHeadBlend",async(e,t)=>{Y(i,e),t(1)});RegisterNuiCallback("appearance:setTattoos",async(e,t)=>{C(i,e),t(1)});RegisterNuiCallback("appearance:setProp",async(e,t)=>{let r=B(i,e);t(r)});RegisterNuiCallback("appearance:setDrawable",async(e,t)=>{let r=S(i,e);t(r)});RegisterNuiCallback("appearance:toggleItem",async(e,t)=>{let r=E[e.item];if(!r)return t(!1);let a=e.data,o=r.type,n=r.index,s=r.hook,c=e.hookData;if(!a)return t(!1);if(o==="prop")if(GetPedPropIndex(i,n)===-1){B(i,a),t(!1);return}else{ClearPedProp(i,n),t(!0);return}else if(o==="drawable"){let u=GetPedDrawableVariation(i,n);if(a.value===r.off){t(!1);return}if(a.value===u){if(SetPedComponentVariation(i,n,r.off,0,0),s)for(let l=0;l<s.drawables?.length;l++){let p=s.drawables[l];console.log(p),SetPedComponentVariation(i,p.component,p.variant,p.texture,0)}t(!0);return}else{S(i,a);for(let l=0;l<c?.length;l++)S(i,c[l]);t(!1);return}}});RegisterNuiCallback("appearance:saveOutfit",async(e,t)=>{let r=x(),a=await f("bl_appearance:server:saveOutfit",r,e);t(a)});RegisterNuiCallback("appearance:deleteOutfit",async({id:e},t)=>{let r=x(),a=await f("bl_appearance:server:deleteOutfit",r,e);t(a)});RegisterNuiCallback("appearance:renameOutfit",async(e,t)=>{let r=x(),a=await f("bl_appearance:server:renameOutfit",r,e);t(a)});RegisterNuiCallback("appearance:useOutfit",async(e,t)=>{D(i,e),t(1)});var ne=exports.bl_appearance,_e=0,V=null;async function A(e,t=!1){if(e===null)return;let r=PlayerPedId(),a=ne.menus(),o=e.type,n=a[o];if(!n)return;F(r),ge();let s=x();console.log("frameworkdId",s);let c=n.tabs,u=n.allowExit;_e=GetPedArmour(r);let l=[];c.includes("outfits")&&(l=await f("bl_appearance:server:getOutfits",s));let d=[];c.includes("heritage")&&(d=ne.models());let O=c.includes("tattoos"),y;O&&(y=I());let T=Ee(e),se=await P(r);return t&&(V=new Promise(ke=>{let Se=null;Se=AddEventHandler("bl_appearance:client:exit",async Be=>{removeEventListener("bl_appearance:client:exit",()=>{ke(!1)})})}),u=!1),G("appearance:data",{tabs:c,appearance:se,blacklist:T,tattoos:y,outfits:l,models:d,allowExit:u,locale:await ce("locale")}),SetNuiFocus(!0,!0),G("appearance:visible",!0),V&&await V,V=null,!0}function Ee(e){if(!e)return{};let{groupTypes:t,base:r}=ne.blacklist();if(!t)return{};if(!r)return{};let a={...r},o=j();for(let n in t){let s=t[n];for(let c in s){let u=!1;if(n=="jobs"&&e.jobs&&(u=e.jobs.includes(o.job.name)),n=="gangs"&&e.gangs&&(u=e.gangs.includes(o.gang.name)),!u){let l=s[c];a=Object.assign({},a,l,{drawables:Object.assign({},a.drawables,l.drawables)})}}}return a}function oe(){SetPedArmour(i,_e),he(),SetNuiFocus(!1,!1),G("appearance:visible",!1),emitNet("bl_appearance:server:exit")}RegisterCommand("openMenu",()=>{A({type:"appearance",coords:[0,0,0,0]})},!1);exports("SetPedAppearance",async(e,t)=>{await ae(e,t)});exports("SetPlayerPedAppearance",async e=>{let t=await f("bl_appearance:server:getAppearance",e);await H(t)});exports("GetPlayerPedAppearance",async e=>await f("bl_appearance:server:getAppearance",e));exports("InitialCreation",async e=>{await A({type:"appearance",coords:[0,0,0,0]}),e&&e()});on("bl_sprites:client:useZone",e=>{A(e)});onNet("qb-clothing:client:loadPlayerClothing",async(e,t)=>{console.log("loadPlayerClothing",e,t),await ae(t,e)});onNet("qb-clothes:client:CreateFirstCharacter",async()=>{console.log("CreateFirstCharacter"),A({type:"appearance",coords:[0,0,0,0]})});
