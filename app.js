
document.querySelectorAll("[data-cta]").forEach(function (button) {
  var key = button.getAttribute("data-cta");
  if (!FORM_LINKS[key]) return;
  button.setAttribute("href", FORM_LINKS[key]);
  button.setAttribute("target", "_blank");
  button.setAttribute("rel", "noopener");
});
function trackClick(buttonName){
  const formURL = 'https://docs.google.com/forms/d/e/1FAIpQLSecBdEbKUDM6RMPXcwj2wJFXDaWkdJoXtOPjwMA2vg04R3UEg/viewform?usp=publish-editor';
  const formData = new formData();
  formData.append('entry.215850049=yes', buttonName);
  navigator.sendBeacon(formURL, formData);
}
