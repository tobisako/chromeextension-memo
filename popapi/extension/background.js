var popflg = false;

chrome.extension.onConnect.addListener(function (port) {
  if (port.name == "CtoB") {
    console.log("bg - connect!");
    port.onMessage.addListener(function (msg) {
      console.log("bg - receie!");
      if (msg.action == "open") {
        console.log("bg - receie! -> open");
        if (popflg == false) {
          chrome.windows.create(
            { url: "pay.html", type: "popup", width: 360, height: 520 },
          );
          popflg = true;
        }
      }
    });
  }
  return true;
});

console.log("BG - END");
