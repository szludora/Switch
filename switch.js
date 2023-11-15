$(function () {
  let body = $("body");
  let header = $("header")
  let swC = $(".switchContainer");
  let swB = $(".switchButton");
  let rocket = $(".rocket");
  let astronaut = $(".astronaut");

  swB.on("click", () => {
    setTimeout(() => {
      body.toggleClass("bodyOff");
      header.toggleClass("headerDark")
      swB.toggleClass("off");
      rocket.toggleClass("Rup");
      astronaut.toggleClass("Aup");
      swC.toggleClass("containerOff");
    }, 300);
  });
});
