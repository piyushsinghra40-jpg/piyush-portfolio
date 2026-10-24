(function(){
"use strict";
var I={
rocket:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
user:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
cal:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>',
bot:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 8V4M9 14h.01M15 14h.01"/></svg>',
crm:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
yt:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5 3-5 3z"/></svg>'};
var P=[
{t:"Edutech Experts IFP Landing Page",d:"An interactive flat panel landing page for Edutech Experts, focused on smart classrooms and product enquiries.",g:["Landing Page","Smart Classroom","Vercel"],u:"https://edutech-blue.vercel.app/",s:"Live",k:"",c:"#0a84ff,#ff7a1a",i:I.rocket},
{t:"Vishal02 Website",d:"A personal website project.",g:["Website","Personal Site","Vercel"],u:"https://vishal02-tau.vercel.app/",s:"Live",k:"",c:"#111827,#c9a227",i:I.user},
{t:"Edutech Experts Attendance System",d:"An attendance web application project for Edutech Experts.",g:["Web App","Supabase","Vercel"],u:"https://edutech-attendance.vercel.app/",s:"Live",k:"",c:"#0a84ff,#2fd2b4",i:I.cal},
{t:"Personal AI Assistant",d:"A personal AI assistant project inspired by futuristic digital assistants.",g:["AI","Automation"],s:"In Development",k:"d",c:"#6a3df0,#0a84ff",i:I.bot},
{t:"Business CRM",d:"A business CRM project intended to organize company workflows and lead management.",g:["CRM","Lead Management"],s:"In Progress",k:"d",c:"#0a58c4,#2fd2b4",i:I.crm},
{t:"YouTube Channel",d:"Channel: edutechexperts480. Topics include interactive flat panels, smart classrooms, and related educational technology.",g:["YouTube","Content"],s:"Content",k:"n",c:"#7a1020,#1b1b1b",i:I.yt}];
function esc(x){return String(x).replace(/&/g,"&amp;").replace(/</g,"&lt;")}
var pg=document.getElementById("pg");
if(pg)pg.innerHTML=P.map(function(p){var c=p.c.split(",");
return '<article class="pc rv"><div class="pv" style="background:linear-gradient(135deg,'+c[0]+','+c[1]+')"><span class="st-l '+p.k+'">'+p.s+'</span>'+p.i+'</div><h3>'+esc(p.t)+'</h3><p>'+esc(p.d)+'</p><div class="pt">'+p.g.map(function(x){return"<span>"+esc(x)+"</span>"}).join("")+'</div><div class="pb">'+(p.u?'<a href="'+p.u+'" target="_blank" rel="noopener noreferrer">View Live Project ↗</a>':'<span class="n">'+(p.k==="d"?"Not publicly available yet":"Channel link will be added")+'</span>')+'</div></article>'}).join("");
var mq=document.getElementById("mq");
if(mq){var w=["Social Media","Content Planning","Digital Content","Campaign Concepts","Landing Pages","AI-Assisted Workflows"];mq.innerHTML=w.map(function(x){return"<span>"+x+" <i>✦</i></span>"}).join("").repeat(2)}
var yr=document.getElementById("yr");if(yr)yr.textContent=new Date().getFullYear();
var lk=document.getElementById("lk"),mb=document.getElementById("mb");
mb.addEventListener("click",function(){var o=lk.classList.toggle("o");mb.setAttribute("aria-expanded",o)});
lk.querySelectorAll("a").forEach(function(a){a.addEventListener("click",function(){lk.classList.remove("o");mb.setAttribute("aria-expanded","false")})});
var rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
var rv=document.querySelectorAll(".rv");
if("IntersectionObserver" in window){var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}})},{threshold:.12});
rv.forEach(function(e,i){e.style.transitionDelay=(i%4)*80+"ms";io.observe(e)})}else rv.forEach(function(e){e.classList.add("in")});
if(rm)return;
var el=document.getElementById("ty"),tw=["Marketing Head","Content Creator","Web Explorer"],i=0,j=0,del=0;
if(el)(function t(){var s=tw[i];j+=del?-1:1;el.textContent=s.slice(0,j);var d=del?40:90;if(!del&&j===s.length){del=1;d=1500}else if(del&&j===0){del=0;i=(i+1)%tw.length;d=300}setTimeout(t,d)})();
if(matchMedia("(hover:hover)").matches){
var ph=document.getElementById("ph");
document.addEventListener("mousemove",function(e){var x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;ph.querySelectorAll("[data-d]").forEach(function(n){var d=+n.dataset.d;n.style.transform="translate("+x*d+"px,"+y*d+"px)"})});
document.querySelectorAll(".pc").forEach(function(c){c.addEventListener("mousemove",function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform="perspective(800px) rotateY("+x*8+"deg) rotateX("+(-y*8)+"deg) translateY(-6px)"});c.addEventListener("mouseleave",function(){c.style.transform=""})});
document.querySelectorAll(".cb").forEach(function(c){c.addEventListener("mousemove",function(e){var r=c.getBoundingClientRect();c.style.setProperty("--x",(e.clientX-r.left)+"px");c.style.setProperty("--y",(e.clientY-r.top)+"px")})})}
})();
