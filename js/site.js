var hdr = document.querySelector("header"), mb = document.querySelector(".menu-btn");
mb.addEventListener("click", function(){ var o = hdr.classList.toggle("open"); mb.setAttribute("aria-expanded", o ? "true" : "false"); });
document.querySelectorAll("#main-nav a").forEach(function(a){ a.addEventListener("click", function(){ hdr.classList.remove("open"); mb.setAttribute("aria-expanded","false"); }); });
function setTheme(t){
  document.documentElement.setAttribute("data-theme", t);
  document.querySelectorAll(".switch button").forEach(function(b){ b.setAttribute("aria-pressed", b.dataset.set === t ? "true" : "false"); });
  try { localStorage.setItem("ook-theme", t); } catch(e) {}
}
document.querySelectorAll(".switch button").forEach(function(b){ b.addEventListener("click", function(){ setTheme(b.dataset.set); }); });
try { var saved = localStorage.getItem("ook-theme"); if (saved === "jobsite" || saved === "cozy") setTheme(saved); } catch(e) {}
