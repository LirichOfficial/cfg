(()=>{"use strict";var e,o={8636:(e,o,t)=>{var i=t(7130),n=t(1927),a=t(2359),r=t(8085);const c=Object.fromEntries(Object.entries({browsecHasBeenInstalled:"browsec_has_been_installed",clickAndThen1:"click_and_then_1",clickAndThen2:"click_and_then_2",pinTheBrowsecExtension:"pin_the_browsec_extension",youMayNowOpenTheExtension:"you_may_now_open_the_extension",subscriberText:"subscriber_text"}).map((([e,o])=>[e,(0,i.A)(o)])));let s;const u=(0,r.getBrowserAPI)().i18n.getUILanguage();function l(){a.A.track("congrats_tab_tgclick")}function p(){return n.qy`
  <style>
  :host{
    display: block;
  }
  :host > .In{
    padding: 27px 0 0;
    position: relative;
  }

  .Plate{
    background: #262829;
    width: 610px;
    padding: 25px 35px 15px;
    margin: 0 auto;
  }

  .BrowsecInstalled{
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }
  .BrowsecInstalled::before{
    content: '';
    display:block;
    width:85px;
    padding-top: 86px;
    height:0;
    background: url( '/images/checked_2.svg' );
    margin: 0 auto 20px;
  }

  .Decription{
    padding: 20px 0 30px;
    text-align: center;
  }

  .Image{
    margin: 0 -16px;
    padding: 10px 0 40px;
  }

  .Pointer{
    position: absolute;
    top: 0;
    right: 132px;
    width: 190px;
    font-size: 18px;
  }
  .Pointer.withScroll{
    right: 115px;
  }
  .Pointer::before{
    content: '';
    display: block;
    background: rgba(28, 30, 31, 0.6);
    position: absolute;
    top: 0;
    right: -25px;
    left: -25px;
    bottom: -10px;
  }
  .Pointer > .In{
    position: relative;
    padding: 110px 0 0;
  }
  .Pointer_Arrow{
    position: absolute;
    height: 65px;
    top: 30px;
    right: 0;
    left: 0;
    border: 1px solid #fff;
    border-width: 0 1px 1px 0;
    border-radius: 0 0 8px 0;
  }
  .Pointer_Arrow::before,
  .Pointer_Arrow::after{
    content: '';
    display: block;
    height: 17px;
    width: 1px;
    background: #fff;
    position: absolute;
    top:0;
    right:-1px;
  }
  .Pointer_Arrow::before{
    transform-origin: top left;
    transform: rotate(-45deg);
  }
  .Pointer_Arrow::after{
    transform-origin: top right;
    transform: rotate(45deg);
  }
  .Pointer_Title{
    text-align: center;
  }
  .Pointer_Text{
    text-align: center;
    padding: 17px 0 0;
    margin: 0 -20px;
  }

  .Pointer_Icon{
    display: inline-block;
    vertical-align: bottom;
    margin: 0 2px;
  }
  .Pointer_Icon.extensions{
    background: url( '/images/congratulations/extensions_icon_3.svg' );
    background-size: contain;
    background-repeat: no-repeat;
    width: 31px;
    height: 30px;
  }
  .Pointer_Icon.pin{
    background: url( '/images/congratulations/pin.svg' );
    background-size: contain;
    background-repeat: no-repeat;
    width: 22px;
    height: 29px;
  }

  .Subscriber {
    border-radius: 8px;
    overflow: hidden;
    display: block;
    text-decoration: none;
  }

  .Subscriber > .In {
    padding: 10px;
    background: #F8F8F8;
    color: #222;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    font-size: 14px;
    transition: background 0.3s;
    gap: 20px;
  }

  .Subscriber:hover > .In {
    background:rgb(217, 217, 217);
  }

  .Subscriber .Subscriber_Text {
    order: 2;
  }

  .Subscriber .Subscriber_Img {
    background: url('/images/congratulations/telegram-logo.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 36px;
    height: 36px;
  }

  @media (min-width: 1410px) {
    .Subscriber {
      position: absolute;
      top: 300px;
      right: 60px;
      width: 290px;
    }

    .Subscriber > .In {
      flex-direction: column;
      gap: 0;
    }

    .Subscriber .Subscriber_Text {
      order: 0;
      margin-bottom: 10px;
    }
  }
  </style>

  <div class="In">
    <div class="Plate">
      <div class="BrowsecInstalled">${c.browsecHasBeenInstalled}</div>
      <div class="Decription">${c.youMayNowOpenTheExtension}</div>

      <a class="Subscriber" href="${s}" target="_blank" rel="noopener" @click="${l}">
        <div class="In">
          <div class="Subscriber_Text">${c.subscriberText}</div>
          <div class="Subscriber_Img"></div>
        </div>
      </a>

      <div class="Image">
        <use-animation></use-animation>
      </div>
    </div>

    <div class="Pointer ${this.withScroll?"withScroll":""}">
      <div class="In">
        <div class="Pointer_Arrow"></div>
        <div class="Pointer_Title">${c.pinTheBrowsecExtension}</div>
        <div class="Pointer_Text">
          ${c.clickAndThen1}
          <div class="Pointer_Icon extensions"></div>
          ${c.clickAndThen2}
          <div class="Pointer_Icon pin"></div>
        </div>
      </div>
    </div>
  </div>`}s="ru"===u?"https://t.me/BrowsecVPNru":"https://t.me/BrowsecVPNofficial";var d=t(8987),g=t(4712);const m=class{constructor(e){if(!e)throw new Error("AnimationElement argument is not Element");this.element=e}set value(e){e!==this._oldValue&&(this._oldValue=e,this.element.style.cssText=e)}},_=[1e3,400,1250,200,300,1250,200,400,1250,200,400,750,200,400,1250,200,400,1250],v=_.reduce(((e,o)=>e+o),0),w=_.map((e=>e/v)),b=w.map(((e,o)=>w.slice(0,o+1).reduce(((e,o)=>e+o),0))),h=[1250,200,400,1250,200,400,750,200,400,1250,200,400,1250],A=h.reduce(((e,o)=>e+o),0),y=h.map((e=>e/A)),P=y.map(((e,o)=>y.slice(0,o+1).reduce(((e,o)=>e+o),0))),{userAgent:f}=navigator,k=(0,r.isChromium)()&&f.includes("Chrome")&&["Edg","Edge"].every((e=>!f.includes(e)));let x;if(k)try{x=Number(f.match(/Chrome\/\d+/)[0].split("/")[1])}catch(e){}const S=Boolean(k&&x&&x>=84);function B(){const e=window.language;return n.qy`
  <style>
  .Animation{
    width: 642px;
    height: 542px;
    position: relative;
    margin: 0 auto;
    overflow: hidden;
    transition: filter 0.4s;
  }
  
  .Animation_Bg{
    background: url( '/images/congratulations/${S?"chrome":"others"}/background.svg' ) 50% 50% no-repeat;
    background-size: 100% auto;
    width: 100%;
    height: 100%;
  }
  .Animation_Search{
    opacity: 0;
    background: url( '/images/congratulations/panel_with_browsec.svg' ) 50% 50% no-repeat;
    background-size: 100% auto;
    width: calc( 100% * 610 / 642 );
    height: calc( 100% * 35 / 542 );
    position: absolute;
    left: calc( 100% * 16 / 642 );
    top: calc( 100% * 8 / 542 );
    border-radius: 0 8px 0 0;
  }
  .Animation_Cursor{
    background: url( '/images/congratulations/cursor.svg' ) 50% 50% no-repeat;
    background-size: 100% auto;
    width: calc( 100% * 55 / 642 );
    height: calc( 100% * 59 / 542 );
    position: absolute;
    top: -5000px;
    left: -5000px;
  }
  .Animation_ExtensionsIcon{
    background: url( '/images/congratulations/extensions_icon.svg' ) 50% 50% no-repeat;
    background-size: 100% auto;
    width: calc( 100% * 27 / 642 );
    height: calc( 100% * 27 / 542 );
    position: absolute;
    top: calc( 100% * 12 / 542 );
    left: calc( 100% * 525 / 642 );
  }
  .Animation_BrowsecIcon,
  .Animation_BrowsecIconUk,
  .Animation_BrowsecIconUs{
    opacity: 0;
    width: calc( 100% * 27 / 642 );
    height: calc( 100% * 27 / 542 );
    position: absolute;
    top: calc( 100% * 11 / 542 );
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
  .Animation.chrome .Animation_BrowsecIcon,
  .Animation.chrome .Animation_BrowsecIconUk,
  .Animation.chrome .Animation_BrowsecIconUs{
    left: calc( 100% * 495 / 642 );
  }
  .Animation.others .Animation_BrowsecIcon,
  .Animation.others .Animation_BrowsecIconUk,
  .Animation.others .Animation_BrowsecIconUs{
    left: calc( 100% * 559 / 642 );
  }
  .Animation_BrowsecIcon{
    background-image: url( '/images/congratulations/browsec_icon.svg' );
  }
  .Animation_BrowsecIconUk{
    background-image: url( '/images/congratulations/browsec_icon_uk.svg' );
  }
  .Animation_BrowsecIconUs{
    background-image: url( '/images/congratulations/browsec_icon_us.svg' );
  }
  .Animation_PinEnabled,
  .Animation_PinEnabledHover{
    opacity: 0;
    width: calc( 100% * 40 / 642 );
    height: calc( 100% * 40 / 542 );
    position: absolute;
    left: calc( 100% * 473 / 642 );
    top: calc( 100% * 148 / 542 );
  }
  .Animation_PinEnabled{
    background: url( '/images/congratulations/pin_enabled.svg' ) 50% 50% no-repeat;
    background-size: 100% auto;
  }
  .Animation_PinEnabledHover{
    background: url( '/images/congratulations/pin_enabled_hovered.svg' ) 50% 50% no-repeat;
    background-size: 100% auto;
  }
  .Animation_ExtensionsPopup{
    opacity: 0;
    background: url( '/images/congratulations/extensions_popup.svg' ) 50% 50% no-repeat;
    background-size: 100% auto;
    width: calc( 100% * 328 / 642 );
    height: calc( 100% * 199 / 542 );
    position: absolute;
    left: calc( 100% * 229 / 642 );
    top: calc( 100% * 36 / 542 );
  }
  .Animation.langRu .Animation_ExtensionsPopup{
    background-image: url( '/images/congratulations/extensions_popup_ru.svg' );
  }

  .Animation_BrowsecPopup{
    opacity: 0;
    background: url( '/images/congratulations/popup_bg.svg#en' ) 50% 50% no-repeat;
    background-size: 100% auto;
    width: calc( 100% * 408 / 642 );
    height: calc( 100% * 424 / 542 );
    position: absolute;
    top: calc( 100% * 37 / 542 );
  }
  .Animation.langRu .Animation_BrowsecPopup{
    background-image: url( '/images/congratulations/popup_bg.svg#ru' );
  }
  .Animation.chrome .Animation_BrowsecPopup{
    left: calc( 100% * 118 / 642 );
  }
  .Animation.others .Animation_BrowsecPopup{
    left: calc( 100% * 182 / 642 );
  }

  .Animation_SwitchOn,
  .Animation_SwitchOff{
    opacity: 0;
    width: calc( 100% * 61 / 408 );
    height: calc( 100% * 26 / 424 );
    position: absolute;
    bottom: calc( 100% * 11 / 424 );
    right: calc( 100% * 14 / 408 );
  }
  .Animation_SwitchOff{
    background: url( '/images/congratulations/switch_off.svg' ) 50% 50% no-repeat;
    background-size: 100% auto;
  }
  .Animation.langRu .Animation_SwitchOff{
    background-image: url( '/images/congratulations/switch_off_ru.svg' );
  }
  .Animation_SwitchOn{
    background: url( '/images/congratulations/switch_on.svg' ) 50% 50% no-repeat;
    background-size: 100% auto;
  }
  .Animation.langRu .Animation_SwitchOn{
    background-image: url( '/images/congratulations/switch_on_ru.svg' );
  }
  .Animation_BrowsecPopup_NoProtection{
    opacity: 0;
    background: url( '/images/congratulations/popup_disabled.svg' ) 50% 50% no-repeat;
    background-size: 100% auto;
    width: calc( 100% * 336 / 408 );
    height: calc( 100% * 269 / 424 );
    position: absolute;
    left: calc( 100% * 48 / 408 );
    top: calc( 100% * 78 / 424 );
  }
  .Animation.langRu .Animation_BrowsecPopup_NoProtection{
    background-image: url( '/images/congratulations/popup_disabled_ru.svg' );
    width: calc( 100% * 366 / 408 );
    left: calc( 100% * 21 / 408 );
  }
  .Animation_BrowsecPopup_Protection,
  .Animation_BrowsecPopup_Protection_Hover,
  .Animation_BrowsecPopup_ProtectionUs,
  .Animation_BrowsecPopup_ProtectionUs_Hover{
    opacity: 0;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 100% auto;
    width: calc( 100% * 361 / 408 );
    height: calc( 100% * 263 / 424 );
    position: absolute;
    left: calc( 100% * 24 / 408 );
    top: calc( 100% * 78 / 424 );
  }
  .Animation_BrowsecPopup_Protection{
    background-image: url( '/images/congratulations/popup_enabled.svg#uk' );
  }
  .Animation.langRu .Animation_BrowsecPopup_Protection{
    background-image: url( '/images/congratulations/popup_enabled_ru.svg#uk' );
  }
  .Animation_BrowsecPopup_Protection_Hover{
    background-image: url( '/images/congratulations/popup_enabled.svg#uk_hover' );
  }
  .Animation.langRu .Animation_BrowsecPopup_Protection_Hover{
    background-image: url( '/images/congratulations/popup_enabled_ru.svg#uk_hover' );
  }
  .Animation_BrowsecPopup_ProtectionUs{
    background-image: url( '/images/congratulations/popup_enabled.svg#us' );
  }
  .Animation.langRu .Animation_BrowsecPopup_ProtectionUs{
    background-image: url( '/images/congratulations/popup_enabled_ru.svg#us' );
  }
  .Animation_BrowsecPopup_ProtectionUs_Hover{
    background-image: url( '/images/congratulations/popup_enabled.svg#us_hover' );
  }
  .Animation.langRu .Animation_BrowsecPopup_ProtectionUs_Hover{
    background-image: url( '/images/congratulations/popup_enabled_ru.svg#us_hover' );
  }
  .Animation_BrowsecPopup_SmartSettings,
  .Animation_BrowsecPopup_SmartSettingsHover{
    opacity: 0;
    width: calc( 100% * 392 / 408 );
    height: calc( 100% * 321 / 424 );
    position: absolute;
    left: calc( 100% * 14 / 408 );
    top: calc( 100% * 58 / 424 );
  }
  .Animation_BrowsecPopup_SmartSettings{
    background: url( '/images/congratulations/popup_smart_settings.svg#base' ) 50% 50% no-repeat;
    background-size: 100% auto;
  }
  .Animation.langRu .Animation_BrowsecPopup_SmartSettings{
    background-image: url( '/images/congratulations/popup_smart_settings_ru.svg#base' );
  }
  .Animation_BrowsecPopup_SmartSettingsHover{
    background: url( '/images/congratulations/popup_smart_settings.svg#hover' ) 50% 50% no-repeat;
    background-size: 100% auto;
  }
  .Animation.langRu .Animation_BrowsecPopup_SmartSettingsHover{
    background-image: url( '/images/congratulations/popup_smart_settings_ru.svg#hover' );
  }
  </style>

  <div class="Animation ${S?"chrome":"others"} ${"ru"===e?"langRu":""}">
    <div class="Animation_Bg"></div>
    <div class="Animation_Search"></div>

    <div class="Animation_ExtensionsIcon"></div>
    <div class="Animation_BrowsecIcon"></div>
    <div class="Animation_BrowsecIconUk"></div>
    <div class="Animation_BrowsecIconUs"></div>

    <div class="Animation_ExtensionsPopup"></div>
    <div class="Animation_PinEnabledHover"></div>
    <div class="Animation_PinEnabled"></div>

    <div class="Animation_BrowsecPopup">
      <div class="Animation_SwitchOff"></div>
      <div class="Animation_SwitchOn"></div>
      <div class="Animation_BrowsecPopup_NoProtection"></div>
      <div class="Animation_BrowsecPopup_Protection"></div>
      <div class="Animation_BrowsecPopup_Protection_Hover"></div>
      <div class="Animation_BrowsecPopup_ProtectionUs"></div>
      <div class="Animation_BrowsecPopup_ProtectionUs_Hover"></div>
      <div class="Animation_BrowsecPopup_SmartSettings"></div>
      <div class="Animation_BrowsecPopup_SmartSettingsHover"></div>
    </div>

    <div class="Animation_Cursor"></div>
  </div>`}class I extends n.WF{render(){return B.call(this)}async firstUpdated(e){super.firstUpdated(e);const o=this.shadowRoot;if(!o)throw new Error("Shadow root not found");const t=o.querySelector("div.Animation");if(!t)throw new Error("Animation element not found");const i=S?(e=>{let o=new m(e.querySelector("div.Animation_Search")),t=new m(e.querySelector("div.Animation_Cursor")),i=new m(e.querySelector("div.Animation_ExtensionsIcon")),n=new m(e.querySelector("div.Animation_BrowsecIcon")),a=new m(e.querySelector("div.Animation_BrowsecIconUk")),r=new m(e.querySelector("div.Animation_BrowsecIconUs")),c=new m(e.querySelector("div.Animation_ExtensionsPopup")),s=new m(e.querySelector("div.Animation_PinEnabled")),u=new m(e.querySelector("div.Animation_PinEnabledHover")),l=new m(e.querySelector("div.Animation_BrowsecPopup")),p=new m(e.querySelector("div.Animation_SwitchOn")),d=new m(e.querySelector("div.Animation_SwitchOff")),g=new m(e.querySelector("div.Animation_BrowsecPopup_NoProtection")),_=new m(e.querySelector("div.Animation_BrowsecPopup_Protection")),h=new m(e.querySelector("div.Animation_BrowsecPopup_Protection_Hover")),A=new m(e.querySelector("div.Animation_BrowsecPopup_ProtectionUs")),y=new m(e.querySelector("div.Animation_BrowsecPopup_SmartSettings")),P=new m(e.querySelector("div.Animation_BrowsecPopup_SmartSettingsHover"));return{start:()=>new Promise((e=>{let m,f=k=>{void 0===m&&(m=k);let x=k-m;if(x>v)return void e();const S=(()=>{let e=Math.floor(x/v);return x-e*v})()/v;{let e=(()=>{switch(!0){case S<=b[1]:return 532;case S<=b[2]:return 487+45*(1-(S-b[1])/w[2]);case S<=b[4]:return 487;case S<=b[5]:return 487+(S-b[4])/w[5]*13;case S<=b[7]:return 500;case S<=b[8]:return 500+(S-b[7])/w[8]*-180;case S<=b[10]:return 320;case S<=b[11]:return 320+(S-b[10])/w[11]*124;case S<=b[13]:return 444;case S<=b[14]:return 444+(S-b[13])/w[14]*-120;default:return 324}})(),o=(()=>{switch(!0){case S<=w[0]:return 19+164*(1-S/w[0]);case S<=b[1]:return 19;case S<=b[2]:return 19+(S-b[1])/w[2]*144;case S<=b[4]:return 163;case S<=b[5]:return 19+144*(1-(S-b[4])/w[5]);case S<=b[7]:return 19;case S<=b[8]:return 19+(S-b[7])/w[8]*336;case S<=b[10]:return 355;case S<=b[11]:return 355+(S-b[10])/w[11]*-11;case S<=b[13]:return 344;case S<=b[14]:return 344+(S-b[13])/w[14]*-47;default:return 297}})();t.value=`left:${e}px;top:${o}px;`}i.value=S<=w[0]?"opacity:0;":S<=b[6]?"opacity:1;":"opacity:0;";{let e=S<=w[0]?0:S<=b[1]?(S-w[0])/w[1]:S<=b[6]?1:0;c.value=`opacity:${e};`}u.value=S<=b[3]?"opacity:0":S<=b[4]?"opacity:1":"opacity:0",s.value=S<=b[4]?"opacity:0":S<=b[6]?"opacity:1":"opacity:0",o.value=S<=b[3]?"opacity:0":"opacity:1",n.value=S<=b[6]?"opacity:0;":S<=b[9]?"opacity:1;":"opacity:0;",a.value=S<=b[9]?"opacity:0;":S<=b[15]?"opacity:1;":"opacity:0;",r.value=S<=b[15]?"opacity:0":(b[16],"opacity:1"),l.value=S<=b[6]?"":S<=b[7]?`opacity:${(S-b[6])/w[7]};`:"opacity:1;";{let e=S<=b[6]?0:S<=b[9]?1:S<=b[10]?1-(S-b[9])/w[10]:0;d.value=`opacity:${e};`}{let e=S<=b[9]?0:S<=b[10]?(S-b[9])/w[10]:1;p.value=`opacity:${e};`}g.value=S<=b[6]?"":S<=b[9]?"opacity:1;":S<=b[10]?`opacity:${1-(S-b[9])/w[10]};`:"",_.value=S<=b[9]?"":S<=b[10]?`opacity:${(S-b[9])/w[10]};`:S<=b[11]&&(S-b[10])/w[11]<.7?"opacity:1;":"",h.value=S<=b[10]?"":S<=b[11]?(S-b[10])/w[11]<.7?"":"opacity:1;":S<=b[13]?`opacity:${1-(S-b[12])/w[13]};`:"",y.value=S<=b[12]?"":S<=b[13]?`opacity:${(S-b[12])/w[13]};`:S<=b[14]?(S-b[13])/w[14]>.7?"":"opacity:1":"",P.value=S<=b[13]?"":S<=b[14]?(S-b[13])/w[14]>.7?"opacity:1":"":S<=b[15]?"opacity:1;":S<=b[16]?`opacity:${1-(S-b[15])/w[16]};`:"",A.value=S<=b[15]?"":S<=b[16]?`opacity:${(S-b[15])/w[16]};`:"opacity:1;",self.requestAnimationFrame(f)};self.requestAnimationFrame(f)}))}})(t):(e=>{let o=new m(e.querySelector("div.Animation_Cursor")),t=new m(e.querySelector("div.Animation_BrowsecIcon")),i=new m(e.querySelector("div.Animation_BrowsecIconUk")),n=new m(e.querySelector("div.Animation_BrowsecIconUs")),a=new m(e.querySelector("div.Animation_BrowsecPopup")),r=new m(e.querySelector("div.Animation_SwitchOn")),c=new m(e.querySelector("div.Animation_SwitchOff")),s=new m(e.querySelector("div.Animation_BrowsecPopup_NoProtection")),u=new m(e.querySelector("div.Animation_BrowsecPopup_Protection")),l=new m(e.querySelector("div.Animation_BrowsecPopup_Protection_Hover")),p=new m(e.querySelector("div.Animation_BrowsecPopup_ProtectionUs")),d=new m(e.querySelector("div.Animation_BrowsecPopup_SmartSettings")),g=new m(e.querySelector("div.Animation_BrowsecPopup_SmartSettingsHover"));return{start:()=>new Promise((e=>{let m,_=v=>{void 0===m&&(m=v);let w=v-m;if(w>A)return void e();const b=(()=>{let e=Math.floor(w/A);return w-e*A})()/A;{let e=(()=>{switch(!0){case b<=y[0]:case b<=P[2]:return 564;case b<=P[3]:return 564+(b-P[2])/y[3]*-194;case b<=P[5]:return 370;case b<=P[6]:return 370+(b-P[5])/y[6]*138;case b<=P[8]:return 508;case b<=P[9]:return 508+(b-P[8])/y[9]*-120;default:return 388}})(),t=(()=>{switch(!0){case b<=y[0]:return 19+144*(1-b/y[0]);case b<=P[2]:return 19;case b<=P[3]:return 19+(b-P[2])/y[3]*336;case b<=P[5]:return 355;case b<=P[6]:return 355+(b-P[5])/y[6]*-11;case b<=P[8]:return 344;case b<=P[9]:return 344+(b-P[8])/y[9]*-47;default:return 297}})();o.value=`left:${e}px;top:${t}px;`}a.value=b<=P[1]?"":b<=P[2]?`opacity:${(b-P[1])/y[2]};`:"opacity:1;",t.value=b<=P[1]?"opacity:0;":b<=P[4]?"opacity:1;":"opacity:0;",i.value=b<=P[4]?"opacity:0;":b<=P[10]?"opacity:1;":"opacity:0;",n.value=b<=P[10]?"opacity:0":(P[11],"opacity:1");{let e=b<=P[1]?0:b<=P[4]?1:b<=P[5]?1-(b-P[4])/y[5]:0;c.value=`opacity:${e};`}{let e=b<=P[4]?0:b<=P[5]?(b-P[4])/y[5]:1;r.value=`opacity:${e};`}s.value=b<=P[1]?"":b<=P[4]?"opacity:1;":b<=P[5]?`opacity:${1-(b-P[4])/y[5]};`:"",u.value=b<=P[4]?"":b<=P[5]?`opacity:${(b-P[4])/y[5]};`:b<=P[6]&&(b-P[5])/y[6]<.7?"opacity:1;":"",l.value=b<=P[5]?"":b<=P[6]?(b-P[5])/y[6]<.7?"":"opacity:1;":b<=P[8]?`opacity:${1-(b-P[7])/y[8]};`:"",d.value=b<=P[7]?"":b<=P[8]?`opacity:${(b-P[7])/y[8]};`:b<=P[9]?(b-P[8])/y[9]>.7?"":"opacity:1":"",g.value=b<=P[8]?"":b<=P[9]?(b-P[8])/y[9]>.7?"opacity:1":"":b<=P[10]?"opacity:1;":b<=P[11]?`opacity:${1-(b-P[10])/y[11]};`:"",p.value=b<=P[10]?"":b<=P[11]?`opacity:${(b-P[10])/y[11]};`:"opacity:1;",self.requestAnimationFrame(_)};self.requestAnimationFrame(_)}))}})(t),n=async()=>{await i.start(),n()};n()}}customElements.define("use-animation",I);class q extends((0,g.N)(d.A)(n.WF)){render(){return p.call(this)}static get properties(){return{withScroll:{type:Boolean}}}constructor(){super(),this.withScroll=document.documentElement.scrollHeight>document.documentElement.clientHeight,window.addEventListener("resize",(()=>{const e=document.documentElement.scrollHeight>document.documentElement.clientHeight;e!==this.withScroll&&(this.withScroll=e)}))}}customElements.define("main-block-modern",q);var E=t(1743),$=t(8131);document.title=(0,i.A)("you_just_installed_browsec"),(async()=>{let e=await $.A.get("congrats_number")||0;e++,a.A.track("congrats_tab_open",{congrats_number:e.toString()}),await $.A.set("congrats_number",e)})();const O=new Promise((e=>{window.addEventListener("DOMContentLoaded",(()=>{e()}))}));(async e=>{const o=(0,E.A)();window.language=o,"ru"===o&&document.documentElement.setAttribute("lang","ru"),await O;const t=document.querySelector("div.Main > div.In");null==t||null===(e=t.append)||void 0===e||e.call(t,document.createElement("main-block-modern"))})()}},t={};function i(e){var n=t[e];if(void 0!==n)return n.exports;var a=t[e]={id:e,loaded:!1,exports:{}};return o[e].call(a.exports,a,a.exports,i),a.loaded=!0,a.exports}i.m=o,e=[],i.O=(o,t,n,a)=>{if(!t){var r=1/0;for(l=0;l<e.length;l++){for(var[t,n,a]=e[l],c=!0,s=0;s<t.length;s++)(!1&a||r>=a)&&Object.keys(i.O).every((e=>i.O[e](t[s])))?t.splice(s--,1):(c=!1,a<r&&(r=a));if(c){e.splice(l--,1);var u=n();void 0!==u&&(o=u)}}return o}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[t,n,a]},i.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return i.d(o,{a:o}),o},i.d=(e,o)=>{for(var t in o)i.o(o,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),i.j=556,(()=>{var e={556:0};i.O.j=o=>0===e[o];var o=(o,t)=>{var n,a,[r,c,s]=t,u=0;if(r.some((o=>0!==e[o]))){for(n in c)i.o(c,n)&&(i.m[n]=c[n]);if(s)var l=s(i)}for(o&&o(t);u<r.length;u++)a=r[u],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(l)},t=self.webpackChunkbrowsec_extension=self.webpackChunkbrowsec_extension||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})();var n=i.O(void 0,[76],(()=>i(8636)));n=i.O(n)})();