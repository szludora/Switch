$(function () {
  let swC = $(".switchContainer");
  let swB = $(".switchButton");
  let rocket = $(".rocket")
  let astronaut = $(".astronaut")

  swB.on("click", () => {
    setTimeout(() => {
      swB.toggleClass("off");
      rocket.toggleClass("Rup");
      astronaut.toggleClass("Aup");
      swC.toggleClass("containerOff");
    }, 300);
  });
});
