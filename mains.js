const diceo = document.querySelector(".diceo");
const dicet = document.querySelector(".dicet");
let box = document.querySelectorAll(".box button");
let btn = document.getElementById("btn");
let dicerolled = false;
let totaldice = 0;
let gameover = false;
let result = document.getElementById("result");

let diceimg = document.querySelectorAll("img");

let popup = document.getElementById("popup");
let howto = document.getElementById("howtoplay");

// const isalivemap = new Map();

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

box.forEach((option) => {
  option.addEventListener("click", function () {
    if (dicerolled == true) {
      let x = parseInt(option.value);
      let y = option;

      checkotn(x, y);
    } else {
      // alert("please roll the dice first");
    }
  });
});

function checkotn(x, y) {
  if (totaldice < x) {
    alert("the value is more than the dice");
  } else {
    totaldice -= x;
    if (!gameover) {
      y.disabled = true;
      y.classList.add("clicked");
    }
    arr.splice(arr.indexOf(x), 1);

    if (isalive(totaldice) == false) {
      gameover = true;
    }
    if (gameover) {
      // alert("gameover");
      openpopup();
    }
    // console.log("option value", totaldice, arr);
  }
  if (totaldice == 0) {
    // alert("please roll dice again !!!");
    dicerolled = false;
  } else if (!gameover) {
    // alert("select again");
  }
}

function isalive(totaldice) {
  if (arr.includes(totaldice)) {
    return true;
  } else {
    for (let i = 0; i < arr.length - 2; i++) {
      let left = i + 1;
      let right = arr.length - 1;
      while (left < right) {
        let sum = arr[i] + arr[left] + arr[right];

        if (sum == totaldice) {
          return true;
        } else if (sum < totaldice) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return false;
}

function roll() {
  if (!dicerolled) {
    diceimg.forEach(function (die) {
      die.classList.add("shake");
    });
    setTimeout(function () {
      diceimg.forEach(function (die) {
        die.classList.remove("shake");
      });
      // let d_one = Math.floor(Math.random() * 6) + 1;
      // let d_two = Math.floor(Math.random() * 6) + 1;

      let d_one = 5;
      let d_two = 5;

      diceo.src = "/img" + "/" + "d" + d_one + ".png";
      dicet.src = "/img" + "/" + "d" + d_two + ".png";
      totaldice = d_one + d_two;
      dicerolled = true;
      if (isalive(totaldice) == false) {
        // gameover = true;
        openpopup();
      }
    }, 800);

    // console.log("total dice", totaldice, options);
  }
}

function openpopup() {
  popup.classList.add("open-popup");
  if (arr.length == 1) {
    // console.log("win");
    result.innerHTML = "You Win";
  } else {
    // console.log("lose");

    let point = 0;
    for (let i = 1; i < arr.length; i++) {
      point += arr[i];
    }
    result.innerHTML = "Your point :" + point;
  }
}
function closepopup() {
  popup.classList.remove("open-popup");
  arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  dicerolled = false;
  totaldice = 0;
  gameover = false;

  box.forEach((option) => {
    option.disabled = false;
    option.classList.remove("clicked");
  });
}

function openhow() {
  howto.classList.add("open-popup");
}
function closehow() {
  howto.classList.remove("open-popup");
}
