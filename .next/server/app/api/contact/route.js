"use strict";(()=>{var e={};e.id=386,e.ids=[386],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},5924:(e,o,t)=>{t.r(o),t.d(o,{originalPathname:()=>f,patchFetch:()=>x,requestAsyncStorage:()=>u,routeModule:()=>c,serverHooks:()=>g,staticGenerationAsyncStorage:()=>m});var r={};t.r(r),t.d(r,{GET:()=>p,POST:()=>d});var s=t(3278),n=t(5002),a=t(4877),i=t(1309),l=t(4425);async function d(e){console.log("=== Contact API Route Called ===");try{let o=await e.json();console.log("Request body received:",o);let{name:t,email:r,message:s}=o;if(!t||!r||!s)return console.log("Missing required fields"),i.NextResponse.json({error:"All fields are required"},{status:400,headers:{"Content-Type":"application/json"}});if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r))return console.log("Invalid email format"),i.NextResponse.json({error:"Please enter a valid email address"},{status:400,headers:{"Content-Type":"application/json"}});let n=process.env.RESEND_API_KEY;if(console.log("Resend API Key present:",!!n),n)try{console.log("Attempting to send email via Resend...");let e=new l.R(n),{data:o,error:a}=await e.emails.send({from:"Portfolio Contact <onboarding@resend.dev>",to:["samuelogunware@gmail.com"],subject:`Portfolio Contact from ${t}`,html:`
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
              <div style="background-color: #007BFF; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
                <h1 style="margin: 0; font-size: 24px;">New Portfolio Contact</h1>
              </div>
              <div style="background-color: white; padding: 20px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <div style="margin-bottom: 20px;">
                  <h3 style="color: #333; margin-bottom: 10px;">Contact Information</h3>
                  <p><strong>Name:</strong> ${t}</p>
                  <p><strong>Email:</strong> ${r}</p>
                  <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
                </div>
                <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                <div>
                  <h3 style="color: #333; margin-bottom: 10px;">Message</h3>
                  <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #007BFF;">
                    ${s.replace(/\n/g,"<br>")}
                  </div>
                </div>
                <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
                  <p>This message was sent from your portfolio contact form.</p>
                </div>
              </div>
            </div>
          `,replyTo:r});if(a)throw console.error("Resend error:",a),Error(`Resend failed: ${a.message}`);return console.log("Email sent successfully:",o?.id),i.NextResponse.json({success:!0,message:"\uD83C\uDF89 Message sent successfully! I'll respond within 24 hours.",automated:!0,emailId:o?.id},{headers:{"Content-Type":"application/json"}})}catch(e){console.error("Resend error:",e)}console.log("Using mailto fallback");let a=`Portfolio Contact from ${t}`,d=`Name: ${t}
Email: ${r}
Time: ${new Date().toLocaleString()}

Message:
${s}`,p=`mailto:samuelogunware@gmail.com?subject=${encodeURIComponent(a)}&body=${encodeURIComponent(d)}`;return i.NextResponse.json({success:!0,message:"Message prepared! Your email client will open to send it.",automated:!1,mailtoUrl:p},{headers:{"Content-Type":"application/json"}})}catch(e){return console.error("API route error:",e),i.NextResponse.json({error:"Server error occurred. Please email me directly at samuelogunware@gmail.com",details:e instanceof Error?e.message:"Unknown error"},{status:500,headers:{"Content-Type":"application/json"}})}}async function p(){return i.NextResponse.json({message:"Contact API is working"},{headers:{"Content-Type":"application/json"}})}let c=new s.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/contact/route",pathname:"/api/contact",filename:"route",bundlePath:"app/api/contact/route"},resolvedPagePath:"C:\\Users\\Mrmid\\Downloads\\portfolio-website\\app\\api\\contact\\route.ts",nextConfigOutput:"",userland:r}),{requestAsyncStorage:u,staticGenerationAsyncStorage:m,serverHooks:g}=c,f="/api/contact/route";function x(){return(0,a.patchFetch)({serverHooks:g,staticGenerationAsyncStorage:m})}}};var o=require("../../../webpack-runtime.js");o.C(e);var t=e=>o(o.s=e),r=o.X(0,[787,756],()=>t(5924));module.exports=r})();