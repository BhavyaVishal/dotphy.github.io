let action = document.querySelector("#action");
let reset = document.querySelector("#reset");

let velocityInp = document.querySelector("#velocity-inp");
let accInp = document.querySelector("#acc-inp");

let velocityParam = document.querySelector("#velocity-param");
let accParam = document.querySelector("#acc-param");

let scaleInp = document.querySelector("#scale").querySelector("input");
let ball = document.querySelector("#ball");

action.onclick = do_experiment;

function do_experiment() {
  let width = 50;
  let velocity = velocityInp.value;
  let acc = accInp.value;
  let scale = scaleInp.value;

  //------- Default Values for parameters ------
  if (velocity == "") {
    velocity = 1;
  }
  if (acc == "") {
    acc = -9.8;
  }
  if (scale == "") {
    scale = 10;
  }

  //---------------------------------------------

  velocity = (velocity * scale) / 1000; // Velocity in px/ms
  acc = (acc * scale) / 1000000; // Acceleration in px/ms*2
  let distance = -(velocity * velocity) / (2 * acc);

  let goUp = setInterval(moveUp, 1);
  let goDwn = setInterval(moveDwn, 1);
  let pos = 500;
  let pos2 = 5;
  function moveUp() {
    reset.addEventListener("click", function () {
      ball.style.top = "500px";
      velocityParam.innerHTML = "0";
      accParam.innerHTML = "0";
      acc = 0;
      clearInterval(goUp);
    });
    accParam.textContent = String((acc * 100000).toFixed(2));
    velocityParam.textContent = String((velocity * 100).toFixed(2));
    let curr_distance = 0;
    velocity = velocity + acc;
    pos = pos - velocity;

    if (pos < 105) {
      width = width - velocity / 100;
      velocityInp.innerHTML = "0";

      ball.style.width = String(width) + "px";
      ball.style.height = String(width) + "px";
    } else if (pos > 501) {
      clearInterval(moveUp);
    } else {
      curr_distance += curr_distance + velocity;
      console.log(curr_distance * 10);
      ball.style.top = String(pos) + "px";
    }
  }
  function moveDwn() {
    reset.addEventListener("click", function () {
      ball.style.top = "400px";

      clearInterval(goDwn);
    });
    velocity = velocity + acc;
    pos = pos - velocity;

    if (pos < 105) {
      width = width - velocity / 100;
      velocityInp.innerHTML = "0";

      ball.style.width = String(width) + "px";
      ball.style.height = String(width) + "px";
    } else if (pos > 501) {
      velocityParam.textContent = velocity.toFixed(2);
      clearInterval(moveUp);
    } else {
      ball.style.top = String(pos) + "px";
    }
  }
}
