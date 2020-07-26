//web_accessible_resources -> content_scripts
window.addEventListener("message", (e) => {
  // content_scripts -> background
  const port = chrome.extension.connect({ name: "CtoB" });
  port.postMessage({ name: "CtoB", action: "open" });
  return true;
});

// inject
var injectScript;
injectScript = function (file, node) {
  var s, th;
  th = document.getElementsByTagName(node)[0];
  s = document.createElement("script");
  s.setAttribute("type", "text/javascript");
  s.setAttribute("src", file);
  return th.appendChild(s);
};
injectScript(chrome.extension.getURL("/web_accessible_resources.js"), "body");
