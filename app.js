const menu=document.querySelector(".menu"),nav=document.querySelector(".navbar nav");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
document.querySelectorAll(".timeline-item").forEach(item=>item.addEventListener("mouseenter",()=>{document.querySelectorAll(".timeline-item").forEach(x=>x.classList.remove("active"));item.classList.add("active")}));
