function toggleMenu(){document.getElementById("links").classList.toggle("open")}
document.querySelectorAll(".links a").forEach(a=>a.addEventListener("click",()=>document.getElementById("links").classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
function sendMessage(e){
  e.preventDefault();
  const name=document.getElementById("name").value;
  document.getElementById("formStatus").textContent="ধন্যবাদ "+name+"! আপনার মেসেজ গ্রহণ করা হয়েছে।";
  e.target.reset();
}