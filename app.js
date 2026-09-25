var FORM_LINKS = {
  learnMore: "https://forms.gle/REPLACE_WITH_LEARN_MORE_PREFILLED_URL",
  register: "https://forms.gle/REPLACE_WITH_REGISTER_PREFILLED_URL"
};

document.querySelectorAll("[data-cta]").forEach(function (button) {
  var key = button.getAttribute("data-cta");
  if (!FORM_LINKS[key]) return;
  button.setAttribute("href", FORM_LINKS[key]);
  button.setAttribute("target", "_blank");
  button.setAttribute("rel", "noopener");
});
function trackClick(buttonName){
  const formURL = 'https://docs.google.com/forms/d/e/1FAIpQLSecBdEbKUDM6RMPXcwj2wJFXDaWkdJoXtOPjwMA2vg04R3UEg/viewform?usp=publish-editor'
}