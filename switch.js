$(function () {
  let swC = $(".switchContainer");
  let sw = $(".switch");
  sw.on("click", () => {
    sw.toggleClass("off");
    swC.toggleClass("containerOff");
  });
});
