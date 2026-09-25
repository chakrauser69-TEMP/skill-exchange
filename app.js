var FORM_LINKS = {
  learnMore: "https://forms.gle/REPLACE_WITH_YOUR_FORM_URL",
  register: "https://forms.gle/REPLACE_WITH_YOUR_FORM_URL"
};

document.querySelectorAll("[data-cta]").forEach(function (button) {
  var key = button.getAttribute("data-cta");
  if (!FORM_LINKS[key]) return;
  button.setAttribute("href", FORM_LINKS[key]);
  button.setAttribute("target", "_blank");
  button.setAttribute("rel", "noopener");
});

function trackCta(button) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", "cta_click", {
    cta_name: button.getAttribute("data-cta"),
    cta_location: button.getAttribute("data-cta-location") || "unknown"
  });
}

document.addEventListener("click", function (event) {
  var target = event.target;
  if (!target || typeof target.closest !== "function") return;
  var button = target.closest("[data-cta]");
  if (button) trackCta(button);
});
