// 提供されたAPIを使う
const onButton = () => {
  console.log("BUTTON!");
  const ele = document.getElementById("test-btn");
  ele.disabled = true;
  window.kani3.payment();
};
const ele_btn = document.getElementById("test-btn");
ele_btn.onclick = onButton;
