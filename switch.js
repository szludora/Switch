$(function () {
  let swC = $(".switchContainer");
  let sw = $(".switch");

  sw.on("click", () => {
    setTimeout(() => {
      sw.toggleClass("off");
      swC.toggleClass("containerOff");
    }, 300);
  });
});
