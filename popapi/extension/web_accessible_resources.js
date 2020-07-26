window.kani3 = {
  helloWorld: function () {
    alert("Hello kani3 World!");
  },
  payment: function () {
    window.postMessage("message", "*");
  },
};
