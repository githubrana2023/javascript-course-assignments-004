// !first problem
/*
description : mindGame function take a number as peremeter and with that peremeter we multiply by 3 then with multiply result we add 10 and addtion result we division by 2 then with division result we subtract 5 and atlast this function return you one number
*/

function mindGame(number) {
  if (typeof number === "number") {
    const multiply = number * 3;
    const addtion = multiply + 10;
    const division = addtion / 2;
    const subtraction = division - 5;
    return subtraction;
  } else {
    return "Input should be a number";
  }
}

// console.log(mindGame(33));

//!second problem
/*
description : evenOdd function take a string like "word or sentence" as a peremeter and it will help you to check that string length is an odd number or even number. this function also check some error like if you send any array / object / or number then this function send you error messages like "input should be string"
*/

function evenOdd(string) {
  if (typeof string === "string") {
    const stringLength = string.length;
    if (stringLength % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  } else {
    return "Input should be word or sentence";
  }
}

// console.log(evenOdd("batch7"));

//!third problem
/*
description : (isLGSeven) this function only accepted number. 
*/

function isLGSeven(number) {
  if (typeof number === "number") {
    const difference = number - 7;
    if (difference <  7) {
      return difference;
    } else {
      return number * 2;
    }
  } else {
    return "Input should be number";
  }
}

// console.log(isLGSeven(15));

//!fourth problem
/*
description : this (findingBadData) function will help you to find how many bad data you have inside you array. if by mistake you send an object or an string inside the array as input then this function help you to solve that issue.
*/

function findingBadData(arr) {
  let badDataCount = 0;
  if (Array.isArray(arr) === true) {
    for (const age of arr) {
      if (typeof age === "number") {
        if (age < 0) {
          badDataCount++;
        }
      } else {
        return "Your array elements should be number";
      }
    }
  } else {
    return "Input should be an Array";
  }

  return badDataCount;
}

const ageArr = [
  -4,-9,-5,-33,-55
];

const myobj = {
  name : "rana",
  age : 24
}

// console.log(findingBadData(ageArr));

//!fifth problem
/*
description : this (gemsToDiamond) function take 3 peremeters and it will help you to convert gems into diamond, note one thing that if your total gems less than 2000 then this function will return back your total gems.
*/

function gemsToDiamond(friend1_gems, friend2_gems, friend3_gems) {
  if (
    typeof friend1_gems === "number" &&
    typeof friend2_gems === "number" &&
    typeof friend3_gems === "number"
  ) {
    const totalDiamonds_friend_1 = friend1_gems * 21;
    const totalDiamonds_friend_2 = friend2_gems * 32;
    const totalDiamonds_friend_3 = friend3_gems * 43;

    const totalDiamonds =
      totalDiamonds_friend_1 + totalDiamonds_friend_2 + totalDiamonds_friend_3;

    if (totalDiamonds >= 1000 * 2) {
      const remaining = totalDiamonds - 2000;
      return remaining;
    } else {
      return totalDiamonds;
    }
  } else {
    return "Input should be number";
  }
}

// console.log(gemsToDiamond(100, 5, 1));
