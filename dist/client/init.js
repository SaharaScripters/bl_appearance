var n=0,Z=e=>{n=e};var q=(e,t)=>{SendNUIMessage({action:e,data:t})},A=e=>new Promise(t=>setTimeout(t,e)),ve=async e=>{let t=typeof e=="number"?e:GetHashKey(e);if(!IsModelValid(t))throw exports.bl_bridge.notify()({title:"Invalid model!",type:"error",duration:1e3}),new Error(`attempted to load invalid model '${e}'`);return HasModelLoaded(t)||(RequestModel(t),await new Promise(a=>{let o=setInterval(()=>{HasModelLoaded(t)&&(clearInterval(o),a())},100)})),t},z=GetCurrentResourceName(),ke={},ne={};function Ze(e,t){if(t&&t>0){let r=GetGameTimer();if((ke[e]||0)>r)return!1;ke[e]=r+t}return!0}onNet(`_bl_cb_${z}`,(e,...t)=>{let r=ne[e];return r&&r(...t)});function m(e,...t){if(!Ze(e,0))return;let r;do r=`${e}:${Math.floor(Math.random()*100001)}`;while(ne[r]);return emitNet(`_bl_cb_${e}`,z,r,...t),new Promise(a=>{ne[r]=a})}function se(e,t){onNet(`_bl_cb_${e}`,async(r,a,...o)=>{let s;try{s=await t(...o)}catch(i){console.error(`an error occurred while handling callback event ${e}`),console.log(`^3${i.stack}^0`)}emitNet(`_bl_cb_${r}`,a,s)})}var Se=e=>new Promise(t=>{let r=()=>{if(RequestResourceFileSet(e)){let a=exports.bl_appearance.config().locale,o=LoadResourceFile(z,`locale/${a}.json`);o||(console.error(`${a}.json not found in locale, please verify!, we used english for now!`),o=LoadResourceFile(z,"locale/en.json")),t(o)}else setTimeout(r,100)};r()});var H=exports.bl_bridge,I=()=>H.core().getPlayerData(),b=()=>I().cid,Ae=()=>I().gender==="male"?"mp_m_freemode_01":"mp_f_freemode_01";function Oe(e){return new Promise(t=>setTimeout(t,e))}function De(e){return e.includes("'")?e.replace(/'/g,""):e}function Me(){let e=I().job;return{name:e.name,isBoss:e.isBoss}}var ue=2,ce=1,E=!1,g=1.8,y=null,T=0,M=0,h=null,ie=null,pe=!1;var B="head",Ke={whole:0,head:31086,torso:24818,legs:[16335,46078],shoes:[14201,52301]},O=e=>Math.cos(e*Math.PI/180),le=e=>Math.sin(e*Math.PI/180),Ne=()=>{let e=(O(M)*O(T)+O(T)*O(M))/2*g,t=(le(M)*O(T)+O(T)*le(M))/2*g,r=le(T)*g;return[e,t,r]},de=(e,t)=>{if(!E||!h||pe)return;e=e??0,t=t??0,M-=e,T+=t;let a=B==="whole"||B==="head"?89:70;T=Math.min(Math.max(T,B==="shoes"?5:-20),a);let[i,c,p]=Ne();SetCamCoord(y,h.x+i,h.y+c,h.z+p),PointCamAtCoord(y,h.x,h.y,h.z)},Fe=async(e,t)=>{let r=GetEntityHeading(n)+94;t=t??1,pe=!0,g=t,M=r;let[a,o,s]=Ne(),i=CreateCamWithParams("DEFAULT_SCRIPTED_CAMERA",e.x+a,e.y+o,e.z+s,0,0,0,70,!1,0);h=e,pe=!1,ie=y,y=i,PointCamAtCoord(i,e.x,e.y,e.z),SetCamActiveWithInterp(i,ie,250,0,0),await A(250),SetCamUseShallowDofMode(i,!0),SetCamNearDof(i,.4),SetCamFarDof(i,1.2),SetCamDofStrength(i,.3),Ge(i),DestroyCam(ie,!0)},Ge=e=>{DoesCamExist(y)&&e==y&&(SetUseHiDof(),setTimeout(Ge,0))},He=()=>{if(E)return;E=!0,g=ue,y=CreateCam("DEFAULT_SCRIPTED_CAMERA",!0);let[e,t,r]=GetPedBoneCoords(n,31086,0,0,0);SetCamCoord(y,e,t,r),RenderScriptCams(!0,!0,1e3,!0,!0),D("whole",g)},Ie=()=>{E&&(E=!1,RenderScriptCams(!1,!0,250,!0,!1),DestroyCam(y,!0),y=null,h=null)},D=(e,t=g)=>{let r=Ke[e],a=Array.isArray(r);if(B=e,!a&&r===0){let[c,p,l]=GetEntityCoords(n,!1);Fe({x:c,y:p,z:l+0},t);return}if(t>ce&&(t=ce),a){let[c,p,l]=GetPedBoneCoords(n,r[0],0,0,0),[d,f,ae]=GetPedBoneCoords(n,r[1],0,0,0);var o=(c+d)/2,s=(p+f)/2,i=(l+ae)/2}else var[o,s,i]=GetPedBoneCoords(n,r,0,0,0);Fe({x:o,y:s,z:i+0},t)};RegisterNuiCallback("appearance:camMove",(e,t)=>{de(e.x,e.y),t(1)});RegisterNuiCallback("appearance:camSection",(e,t)=>{switch(e){case"whole":D("whole",ue);break;case"head":D("head");break;case"torso":D("torso");break;case"legs":D("legs");break;case"shoes":D("shoes"),de();break}t(1)});RegisterNuiCallback("appearance:camZoom",(e,t)=>{if(e==="down"){let r=B==="whole"?ue:ce,a=g+.05;g=a>=r?r:a}else if(e==="up"){let r=g-.05;g=r<=.3?.3:r}g=g,de(),t(1)});var me=["Blemishes","FacialHair","Eyebrows","Ageing","Makeup","Blush","Complexion","SunDamage","Lipstick","MolesFreckles","ChestHair","BodyBlemishes","AddBodyBlemishes","EyeColor"];var fe=["Nose_Width","Nose_Peak_Height","Nose_Peak_Lenght","Nose_Bone_Height","Nose_Peak_Lowering","Nose_Bone_Twist","EyeBrown_Height","EyeBrown_Forward","Cheeks_Bone_High","Cheeks_Bone_Width","Cheeks_Width","Eyes_Openning","Lips_Thickness","Jaw_Bone_Width","Jaw_Bone_Back_Lenght","Chin_Bone_Lowering","Chin_Bone_Length","Chin_Bone_Width","Chin_Hole","Neck_Thikness"];var be=["face","masks","hair","torsos","legs","bags","shoes","neck","shirts","vest","decals","jackets"];var ge=["hats","glasses","earrings","mouth","lhand","rhand","watches","bracelets"];function Ue(e){return exports.bl_appearance.models().findIndex(a=>GetHashKey(a)===e)}function K(e){return{color:GetPedHairColor(e),highlight:GetPedHairHighlightColor(e)}}function U(e){let t=new ArrayBuffer(80);global.Citizen.invokeNative("0x2746bd9d88c5c5d0",e,new Uint32Array(t));let{0:r,2:a,4:o,6:s,8:i,18:c,10:p}=new Uint32Array(t),{0:l,2:d,4:f}=new Float32Array(t,48);return{shapeFirst:r,shapeSecond:a,shapeThird:o,skinFirst:s,skinSecond:i,skinThird:p,shapeMix:l,thirdMix:f,skinMix:d,hasParent:!!c}}function W(e){let t={},r={};for(let a=0;a<me.length;a++){let o=me[a];if(t[o]=GetNumHeadOverlayValues(a),o==="EyeColor")r[o]={id:o,index:a,overlayValue:GetPedEyeColor(e)};else{let[s,i,c,p,l,d]=GetPedHeadOverlayData(e,a);r[o]={id:o,index:a,overlayValue:i===255?-1:i,colourType:c,firstColor:p,secondColor:l,overlayOpacity:d}}}return[r,t]}function $(e){let t=GetEntityModel(e);if(t!==GetHashKey("mp_m_freemode_01")&&t!==GetHashKey("mp_f_freemode_01"))return;let r={};for(let a=0;a<fe.length;a++){let o=fe[a];r[o]={id:o,index:a,value:GetPedFaceFeature(e,a)}}return r}function X(e){let t={},r={};for(let a=0;a<be.length;a++){let o=be[a],s=GetPedDrawableVariation(e,a);r[o]={id:o,index:a,total:GetNumberOfPedDrawableVariations(e,a),textures:GetNumberOfPedTextureVariations(e,a,s)},t[o]={id:o,index:a,value:GetPedDrawableVariation(e,a),texture:GetPedTextureVariation(e,a)}}return[t,r]}function J(e){let t={},r={};for(let a=0;a<ge.length;a++){let o=ge[a],s=GetPedPropIndex(e,a);r[o]={id:o,index:a,total:GetNumberOfPedPropDrawableVariations(e,a),textures:GetNumberOfPedPropTextureVariations(e,a,s)},t[o]={id:o,index:a,value:GetPedPropIndex(e,a),texture:GetPedPropTextureIndex(e,a)}}return[t,r]}async function x(e){let[t,r]=W(e),[a,o]=X(e),[s,i]=J(e),c=GetEntityModel(e);return{modelIndex:Ue(c),model:c,hairColor:K(e),headBlend:U(e),headOverlay:t,headOverlayTotal:r,headStructure:$(e),drawables:a,props:s,drawTotal:o,propTotal:i,tattoos:[]}}exports("GetAppearance",x);se("bl_appearance:client:getAppearance",()=>x(n));function We(e){let[t]=X(e),[r]=J(e),[a]=W(e);return{headOverlay:a,drawables:t,props:r}}exports("GetPedClothes",We);function $e(e){return{headBlend:U(e),headStructure:$(e),hairColor:K(e),model:GetEntityModel(e)}}exports("GetPedSkin",$e);function Q(){let e=[],[t,r]=exports.bl_appearance.tattoos();for(let o=0;o<r.length;o++){let s=r[o],i=s.zone,c=s.label,p=s.index;e[p]={zone:i,label:c,zoneIndex:p,dlcs:[]};for(let l=0;l<t.length;l++){let d=t[l];e[p].dlcs.push({label:d.dlc,dlcIndex:l,tattoos:[]})}}let a=GetEntityModel(n)===GetHashKey("mp_f_freemode_01");for(let o=0;o<t.length;o++){let s=t[o],{dlc:i,tattoos:c}=s,p=GetHashKey(i);for(let l=0;l<c.length;l++){let d=c[l],f=null,j=d.toLowerCase().includes("_f");(j&&a||!j&&!a)&&(f=d);let k=null,S=-1;f&&(k=GetHashKey(f),S=GetPedDecorationZoneFromHashes(p,k)),S!==-1&&k&&e[S].dlcs[o].tattoos.push({label:f,hash:k,zone:S,dlc:i})}}return e}se("bl_appearance:client:migration:setAppearance",e=>{e.type==="fivem"&&exports["fivem-appearance"].setPlayerAppearance(e.data),e.type==="illenium"&&exports["illenium-appearance"].setPlayerAppearance(e.data)});var Y={hats:{type:"prop",index:0},glasses:{type:"prop",index:1},masks:{type:"drawable",index:1,off:0},shirts:{type:"drawable",index:8,off:15,hook:{drawables:[{component:3,variant:15,texture:0,id:"torsos"},{component:8,variant:15,texture:0,id:"shirts"}]}},jackets:{type:"drawable",index:11,off:15,hook:{drawables:[{component:3,variant:15,texture:0,id:"torsos"},{component:11,variant:15,texture:0,id:"jackets"}]}},vest:{type:"drawable",index:9,off:15},legs:{type:"drawable",index:4,off:11},shoes:{type:"drawable",index:6,off:13}};function P(e,t){return SetPedComponentVariation(e,t.index,t.value,t.texture,0),GetNumberOfPedTextureVariations(e,t.index,t.value)}function ee(e,t){if(t.value===-1){ClearPedProp(e,t.index);return}return SetPedPropIndex(e,t.index,t.value,t.texture,!1),GetNumberOfPedPropTextureVariations(e,t.index,t.value)}var v=async e=>{let t=await ve(e);SetPlayerModel(PlayerId(),t),SetModelAsNoLongerNeeded(t);let r=PlayerPedId();Z(r),SetPedDefaultComponentVariation(r),t===GetHashKey("mp_m_freemode_01")?SetPedHeadBlendData(n,0,0,0,0,0,0,0,0,0,!1):t===GetHashKey("mp_f_freemode_01")&&SetPedHeadBlendData(n,45,21,0,20,15,0,.3,.1,0,!1)};function ye(e,t){SetPedFaceFeature(e,t.index,t.value+0)}var F=e=>e>=0?e:0;function V(e,t){let r=F(t.shapeFirst),a=F(t.shapeSecond),o=F(t.shapeThird),s=F(t.skinFirst),i=F(t.skinSecond),c=F(t.skinThird),p=t.shapeMix+0,l=t.skinMix+0,d=t.thirdMix+0,f=t.hasParent;SetPedHeadBlendData(e,r,a,o,s,i,c,p,l,d,f)}function L(e,t){let r=t.index;if(r===13){SetPedEyeColor(e,t.value);return}let a=t.overlayValue;if(t.id==="hairColor"){SetPedHairTint(e,t.hairColor,t.hairHighlight);return}SetPedHeadOverlay(e,r,a,t.overlayOpacity+0),SetPedHeadOverlayColor(e,r,1,t.firstColor,t.secondColor)}function Be(e){let t=e.drawables,r=e.props;for(let[a,o]of Object.entries(Y)){let s=o.type,i=o.index;s==="drawable"&&t[a]?GetPedDrawableVariation(n,i)!==t[a].value&&SetPedComponentVariation(n,i,t[a].value,0,0):s==="prop"&&r[a]&&GetPedPropIndex(n,i)!==r[a].value&&SetPedPropIndex(n,i,r[a].value,0,!1)}}function N(e,t){let r=t.drawables,a=t.props,o=t.headOverlay;for(let s in r){let i=r[s];P(e,i)}for(let s in a){let i=a[s];ee(e,i)}for(let s in o){let i=o[s];L(e,i)}}var he=async e=>{let t=e.headStructure,r=e.headBlend;if(await v(e.model),r&&V(n,r),t)for(let a in t){let o=t[a];ye(n,o)}};function w(e,t){if(t){ClearPedDecorationsLeaveScars(e);for(let r=0;r<t.length;r++){let a=t[r].tattoo;if(a){let o=GetHashKey(a.dlc),s=a.hash;AddPedDecorationFromHashes(e,o,s)}}}}function R(e,t){let r=t.color,a=t.highlight;SetPedHairColor(e,r,a)}async function _(e,t){await he(t),N(e,t),R(e,t.hairColor),w(e,t.tattoos)}async function C(e){await he(e),N(n,e),R(n,e.hairColor),w(n,e.tattoos)}exports("SetPedClothes",N);exports("SetPedSkin",he);exports("SetPedTattoos",w);exports("SetPedHairColors",R);RegisterNuiCallback("appearance:cancel",async(e,t)=>{await C(e),xe(),t(1)});RegisterNuiCallback("appearance:save",async(e,t)=>{Be(e),await A(100);let r=await x(n);r.tattoos=e.tattoos,m("bl_appearance:server:saveAppearance",b(),r),w(n,r.tattoos),xe(),t(1)});RegisterNuiCallback("appearance:setModel",async(e,t)=>{let r=GetHashKey(e);if(!IsModelInCdimage(r)||!IsModelValid(r))return t(0);await v(r);let a=await x(n);a.tattoos=[],w(n,[]),t(a)});RegisterNuiCallback("appearance:getModelTattoos",async(e,t)=>{let r=Q();t(r)});RegisterNuiCallback("appearance:setHeadStructure",async(e,t)=>{ye(n,e),t(1)});RegisterNuiCallback("appearance:setHeadOverlay",async(e,t)=>{L(n,e),t(1)});RegisterNuiCallback("appearance:setHeadBlend",async(e,t)=>{V(n,e),t(1)});RegisterNuiCallback("appearance:setTattoos",async(e,t)=>{w(n,e),t(1)});RegisterNuiCallback("appearance:setProp",async(e,t)=>{let r=ee(n,e);t(r)});RegisterNuiCallback("appearance:setDrawable",async(e,t)=>{let r=P(n,e);t(r)});RegisterNuiCallback("appearance:toggleItem",async(e,t)=>{let r=Y[e.item];if(!r)return t(!1);let a=e.data,o=r.type,s=r.index,i=r.hook,c=e.hookData;if(!a)return t(!1);if(o==="prop")if(GetPedPropIndex(n,s)===-1){ee(n,a),t(!1);return}else{ClearPedProp(n,s),t(!0);return}else if(o==="drawable"){let p=GetPedDrawableVariation(n,s);if(a.value===r.off){t(!1);return}if(a.value===p){if(SetPedComponentVariation(n,s,r.off,0,0),i)for(let l=0;l<i.drawables?.length;l++){let d=i.drawables[l];SetPedComponentVariation(n,d.component,d.variant,d.texture,0)}t(!0);return}else{P(n,a);for(let l=0;l<c?.length;l++)P(n,c[l]);t(!1);return}}});RegisterNuiCallback("appearance:saveOutfit",async(e,t)=>{let r=b(),a=await m("bl_appearance:server:saveOutfit",r,e);t(a)});RegisterNuiCallback("appearance:deleteOutfit",async({id:e},t)=>{let r=b(),a=await m("bl_appearance:server:deleteOutfit",r,e);t(a)});RegisterNuiCallback("appearance:renameOutfit",async(e,t)=>{let r=b(),a=await m("bl_appearance:server:renameOutfit",r,e);t(a)});RegisterNuiCallback("appearance:useOutfit",async(e,t)=>{N(n,e),t(1)});RegisterNuiCallback("appearance:importOutfit",async({id:e,outfitName:t},r)=>{let a=b(),o=await m("bl_appearance:server:importOutfit",a,e,t);r(o)});RegisterNuiCallback("appearance:grabOutfit",async({id:e},t)=>{let r=await m("bl_appearance:server:grabOutfit",e);t(r)});RegisterNuiCallback("appearance:itemOutfit",async(e,t)=>{let r=await m("bl_appearance:server:itemOutfit",e);t(r)});onNet("bl_appearance:server:useOutfit",e=>{N(n,e)});var Pe=exports.bl_appearance,Ee=0,we=!1,re=null,te=null;async function G(e,t=!1){if(e===null||we)return;let r=PlayerPedId(),a=Pe.menus(),o=e.type,s=a[o];if(!s)return;Z(r),He();let i=b(),c=s.tabs,p=t?!1:s.allowExit;Ee=GetPedArmour(r);let l=[];c.includes("outfits")&&(l=await m("bl_appearance:server:getOutfits",i));let f=[];c.includes("heritage")&&(f=Pe.models());let j=c.includes("tattoos"),k;j&&(k=Q());let S=Xe(e),oe=await x(r);if(t){let _e=GetHashKey(Ae());await v(_e),oe.model=_e,emitNet("bl_appearance:server:setroutingbucket"),te=new Promise(ze=>{re=ze})}return q("appearance:data",{tabs:c,appearance:oe,blacklist:S,tattoos:k,outfits:l,models:f,allowExit:p,job:Me(),locale:await Se("locale")}),SetNuiFocus(!0,!0),q("appearance:visible",!0),we=!0,Ce(!0),te&&(await te,emitNet("bl_appearance:server:resetroutingbucket")),te=null,re=null,!0}exports("openMenu",G);function Xe(e){if(!e)return{};let{groupTypes:t,base:r}=Pe.blacklist();if(!t)return{};if(!r)return{};let a={...r},o=I();for(let s in t){let i=t[s];for(let c in i){let p=!1;if(s=="jobs"&&e.jobs&&(p=e.jobs.includes(o.job.name)),s=="gangs"&&e.gangs&&(p=e.gangs.includes(o.gang.name)),!p){let l=i[c];a=Object.assign({},a,l,{drawables:Object.assign({},a.drawables,l.drawables)})}}}return a}function xe(){SetPedArmour(n,Ee),Ie(),SetNuiFocus(!1,!1),q("appearance:visible",!1),Ce(!1),re&&re(),we=!1}function Ve(){onNet("qb-clothing:client:loadPlayerClothing",async(e,t)=>{await _(t,e)}),onNet("qb-clothes:client:CreateFirstCharacter",()=>{exports.bl_appearance.InitialCreation()}),onNet("qb-clothing:client:openOutfitMenu",()=>{G({type:"outfits",coords:[0,0,0,0]})})}function Le(){let e=!1;on("esx_skin:resetFirstSpawn",()=>{e=!0}),on("esx_skin:playerRegistered",()=>{e&&exports.bl_appearance.InitialCreation()}),onNet("skinchanger:loadSkin2",async(t,r)=>{await _(r,t)}),onNet("skinchanger:getSkin",async t=>{let r=await b(),a=await m("bl_appearance:server:getAppearance",r);t(a)}),onNet("skinchanger:loadSkin",async(t,r)=>{await C(t),r&&r()}),onNet("esx_skin:openSaveableMenu",async t=>{exports.bl_appearance.InitialCreation(t)})}function u(e,t){on("__cfx_export_illenium-appearance_"+e,r=>{r(t)})}function Re(){u("startPlayerCustomization",()=>{exports.bl_appearance.InitialCreation()}),u("getPedModel",e=>GetEntityModel(e)),u("getPedComponents",e=>X(e)),u("getPedProps",e=>J(e)),u("getPedHeadBlend",e=>U(e)),u("getPedFaceFeatures",e=>$(e)),u("getPedHeadOverlays",e=>W(e)),u("getPedHair",e=>K(e)),u("getPedAppearance",e=>x(e)),u("setPlayerModel",e=>{v(e)}),u("setPedHeadBlend",(e,t)=>{V(e,t)}),u("setPedFaceFeatures",()=>console.warn("Xirvin will implement")),u("setPedHeadOverlays",(e,t)=>{L(e,t)}),u("setPedHair",async(e,t,r)=>{await R(e,t)}),u("setPedEyeColor",()=>console.warn("Xirvin will implement")),u("setPedComponent",(e,t)=>{let r={index:t.component_id,value:t.drawable,texture:t.texture};P(e,r)}),u("setPedComponents",(e,t)=>{for(let r of t){let a={index:r.component_id,value:r.drawable,texture:r.texture};P(e,a)}}),u("setPedProp",(e,t)=>{let r={index:t.prop_id,value:t.drawable,texture:t.texture};P(e,r)}),u("setPedProps",(e,t)=>console.warn("Xirvin will implement")),u("setPlayerAppearance",()=>console.warn("Need to be implemented")),u("setPedAppearance",(e,t)=>{_(e,t)}),u("setPedTattoos",(e,t)=>{w(e,t)})}RegisterCommand("openMenu",async()=>{exports.bl_appearance.InitialCreation()},!1);exports("SetPedAppearance",async(e,t)=>{await _(e,t)});exports("SetPlayerPedAppearance",async e=>{let t=await m("bl_appearance:server:getAppearance",e);if(!t)throw new Error("No appearance found");await C(t)});exports("GetPlayerPedAppearance",async e=>await m("bl_appearance:server:getAppearance",e));exports("InitialCreation",async e=>{await G({type:"appearance",coords:[0,0,0,0]},!0),e&&e()});on("bl_sprites:client:useZone",e=>{G(e)});onNet("bl_bridge:client:playerLoaded",async()=>{for(;!H.core().playerLoaded();)await Oe(100);let e=await b(),t=await m("bl_appearance:server:getAppearance",e);t&&await C(t)});onNet("onResourceStart",async e=>{if(e===GetCurrentResourceName()&&H.core().playerLoaded()){let t=await b(),r=await m("bl_appearance:server:getAppearance",t);if(!r)return;await C(r)}});var je=H.getFramework("core"),Te=De(GetConvar("bl:framework","qb"));Te=="qb"||Te=="qbx"&&GetResourceState(je)=="started"?Ve():Te=="esx"&&GetResourceState(je)=="started"&&Le();Re();RegisterCommand("reloadskin",async()=>{let e=await b(),t=GetEntityHealth(n),r=GetEntityMaxHealth(n),a=GetPedArmour(n),o=await m("bl_appearance:server:getAppearance",e);o&&(await C(o),SetPedMaxHealth(n,r),A(1e3),SetEntityHealth(n,t),SetPedArmour(n,a))},!1);var Ce=(e=!0)=>{exports.bl_appearance.hideHud(e)};export{Ce as HideHud};
