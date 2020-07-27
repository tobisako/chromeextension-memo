import "../img/kani_128.png";

const init = async () => {
  import("../crate/pkg").then((module) => {
    console.log("then!");
    var res = module.greet();
    console.log("res = " + res);
  });
};

const main = async () => {
  await init();
};
main();
