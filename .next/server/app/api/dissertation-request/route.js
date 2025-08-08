"use strict";(()=>{var e={};e.id=428,e.ids=[428],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9157:(e,o,t)=>{t.r(o),t.d(o,{originalPathname:()=>f,patchFetch:()=>x,requestAsyncStorage:()=>c,routeModule:()=>u,serverHooks:()=>g,staticGenerationAsyncStorage:()=>m});var r={};t.r(r),t.d(r,{GET:()=>p,POST:()=>d});var s=t(3278),i=t(5002),n=t(4877),a=t(1309),l=t(4425);async function d(e){console.log("=== Dissertation Request API Route Called ===");try{let o=await e.json();console.log("Request body received:",o);let{name:t,email:r,message:s}=o;if(!t||!r)return console.log("Missing required fields"),a.NextResponse.json({error:"Name and email are required"},{status:400,headers:{"Content-Type":"application/json"}});if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r))return console.log("Invalid email format"),a.NextResponse.json({error:"Please enter a valid email address"},{status:400,headers:{"Content-Type":"application/json"}});let i=process.env.RESEND_API_KEY;if(console.log("Resend API Key present:",!!i),i)try{console.log("Attempting to send dissertation request via Resend...");let e=new l.R(i),{data:o,error:n}=await e.emails.send({from:"Portfolio Dissertation Request <onboarding@resend.dev>",to:["samuelogunware@gmail.com"],subject:`Dissertation Request from ${t}`,html:`
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
              <div style="background-color: #007BFF; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
                <h1 style="margin: 0; font-size: 24px;">New Dissertation Request</h1>
              </div>
              <div style="background-color: white; padding: 20px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <div style="margin-bottom: 20px;">
                  <h3 style="color: #333; margin-bottom: 10px;">Request Information</h3>
                  <p><strong>Name:</strong> ${t}</p>
                  <p><strong>Email:</strong> ${r}</p>
                  <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
                </div>
                <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                <div style="margin-bottom: 20px;">
                  <h3 style="color: #333; margin-bottom: 10px;">Request Details</h3>
                  <p>This person has requested your cryptocurrency optimisation dissertation from your portfolio website.</p>
                  ${s?`<div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #007BFF; margin-top: 10px;">
                    <h4 style="color: #333; margin-bottom: 5px;">Additional Message:</h4>
                    <p style="margin: 0;">${s.replace(/\n/g,"<br>")}</p>
                  </div>`:""}
                </div>
                <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 5px;">
                  <p style="margin: 0; color: #856404;"><strong>Action Required:</strong> Please send the full 45-page dissertation PDF to ${r}</p>
                </div>
                <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
                  <p>This request was sent from your portfolio dissertation request form.</p>
                </div>
              </div>
            </div>
          `,replyTo:r});if(n)throw console.error("Resend error:",n),Error(`Resend failed: ${n.message}`);return console.log("Dissertation request sent successfully:",o?.id),a.NextResponse.json({success:!0,message:"\uD83C\uDF89 Request sent successfully! I'll email you the dissertation within 24 hours.",automated:!0,emailId:o?.id},{headers:{"Content-Type":"application/json"}})}catch(e){console.error("Resend error:",e)}console.log("Using mailto fallback for dissertation request");let n=`Dissertation Request from ${t}`,d=`Hi Samuel,

I would like to request your cryptocurrency optimisation dissertation. Here are my details:

Name: ${t}
Email: ${r}
Time: ${new Date().toLocaleString()}
${s?`
Message: ${s}`:""}

Please send me the full 45-page dissertation at your earliest convenience.

Thank you!`,p=`mailto:samuelogunware@gmail.com?subject=${encodeURIComponent(n)}&body=${encodeURIComponent(d)}`;return a.NextResponse.json({success:!0,message:"Request prepared! Your email client will open to send it.",automated:!1,mailtoUrl:p},{headers:{"Content-Type":"application/json"}})}catch(e){return console.error("Dissertation request API error:",e),a.NextResponse.json({error:"Server error occurred. Please email me directly at samuelogunware@gmail.com",details:e instanceof Error?e.message:"Unknown error"},{status:500,headers:{"Content-Type":"application/json"}})}}async function p(){return a.NextResponse.json({message:"Dissertation Request API is working"},{headers:{"Content-Type":"application/json"}})}let u=new s.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/dissertation-request/route",pathname:"/api/dissertation-request",filename:"route",bundlePath:"app/api/dissertation-request/route"},resolvedPagePath:"C:\\Users\\Mrmid\\Downloads\\portfolio-website\\app\\api\\dissertation-request\\route.ts",nextConfigOutput:"",userland:r}),{requestAsyncStorage:c,staticGenerationAsyncStorage:m,serverHooks:g}=u,f="/api/dissertation-request/route";function x(){return(0,n.patchFetch)({serverHooks:g,staticGenerationAsyncStorage:m})}}};var o=require("../../../webpack-runtime.js");o.C(e);var t=e=>o(o.s=e),r=o.X(0,[787,756],()=>t(9157));module.exports=r})();