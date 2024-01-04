const diceo = document.querySelector(".diceo");
const dicet = document.querySelector(".dicet");
let box = document.querySelectorAll(".box button");
let btn = document.getElementById("btn");
let dicerolled = false;
let totaldice = 0;
let gameover = false;

let diceimg = document.querySelectorAll("img");

// const isalivemap = new Map();

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const options = new Map([
  [0, 0],
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
  [5, 5],
  [6, 6],
  [7, 7],
  [8, 8],
  [9, 9],
]);

box.forEach((option) => {
  option.addEventListener("click", function () {
    if (dicerolled == true) {
      // score();

      let x = parseInt(option.value);
      let y = option;
      // isalive(x);

      // if (isalive(totaldice) == false) {
      //   gameover = true;
      // }

      checkotn(x, y);
    } else {
      alert("please roll the dice first");
    }
  });
});

function checkotn(x, y) {
  if (totaldice < x) {
    alert("the value is more than the dice");
  } else {
    totaldice -= x;
    y.disabled = true;
    y.classList.add("clicked");
    arr.splice(arr.indexOf(x), 1);
    options.delete(x);
    if (isalive(totaldice) == false) {
      gameover = true;
    }
    if (gameover) {
      alert("gameover");
    }
    // console.log("option value", totaldice, arr);
  }
  if (totaldice == 0) {
    alert("please roll dice again !!!");
    dicerolled = false;
  } else {
    alert("select again");
  }
}

function isalive(totaldice) {
  if (options.has(totaldice)) {
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
      let d_one = Math.floor(Math.random() * 6) + 1;
      let d_two = Math.floor(Math.random() * 6) + 1;

      diceo.src = "/img" + "/" + "d" + d_one + ".png";
      dicet.src = "/img" + "/" + "d" + d_two + ".png";
      totaldice = d_one + d_two;
      dicerolled = true;
    }, 1000);
    if (isalive(totaldice) == false) {
      gameover = true;
    }

    // console.log("total dice", totaldice, options);
  }
}
