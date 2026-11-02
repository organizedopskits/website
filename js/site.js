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
/* Cyber Specials banner: shows Nov 23 to Dec 1, 2026 (Eastern), then turns itself off */
(function(){
  var now=Date.now(), start=Date.parse('2026-11-23T00:00:00-05:00'), end=Date.parse('2026-12-01T23:59:59-05:00');
  var bar=document.querySelector('.bar');
  if(!bar || now<start || now>end) return;
  var last = now > Date.parse('2026-12-01T00:00:00-05:00');
  bar.classList.add('sale');
  bar.innerHTML = (last ? 'Last day: ' : 'Cyber Specials: ') + '30% off every template through Dec 1 · <a href="https://www.etsy.com/shop/OrganizedOpsKits">Shop on Etsy</a>';
})();
