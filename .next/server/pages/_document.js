"use strict";(()=>{var e={};e.id=660,e.ids=[660],e.modules={7645:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var a=r(997),s=r(6689),i=r(6859),n=r.n(i),d=r(6725);class o extends n(){static async getInitialProps(e){return{...await n().getInitialProps(e),isProduction:!0}}render(){let{isProduction:e}=this.props;return(0,a.jsxs)("html",{lang:"en",children:[a.jsx(i.Head,{children:e&&(0,a.jsxs)(s.Fragment,{children:[a.jsx("script",{async:!0,src:`https://www.googletagmanager.com/gtag/js?id=${d.vt}`}),a.jsx("script",{dangerouslySetInnerHTML:{__html:`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${d.vt}', {
                      page_path: window.location.pathname,
                    });
                  `}})]})}),(0,a.jsxs)("body",{children:[a.jsx(i.Main,{}),a.jsx(i.NextScript,{})]})]})}}},6725:(e,t,r)=>{r.d(t,{LV:()=>s,vt:()=>a});let a="UA-114361661-6",s=e=>{window.gtag("config",a,{page_path:e})}},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},997:e=>{e.exports=require("react/jsx-runtime")},1017:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[567,859],()=>r(7645));module.exports=a})();