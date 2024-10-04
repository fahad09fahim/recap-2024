//problem-01
function calculateMoney(ticketSell) {
  const ticketPrice = 120;
  const careTaker = 500;
  const staffCost = 400;
  if (ticketSell < 1) {
    return console.log("Please input positive number");
  } else {
    const totalSell = ticketSell * ticketPrice;
    const totalCost = careTaker + staffCost;
    if (totalSell < totalCost) {
      return `today loss:${totalCost - totalSell}`;
    } else {
      return `today profit:${totalSell - totalCost}`;
    }
  }
}
//const remainBalance = calculateMoney(11);
//console.log(remainBalance);

//problem-02
function checkName(name) {
  if (typeof name === "string") {
    const lowerCase = name.toLowerCase();
    const lastChar = lowerCase.slice(-1);
    const goodName = ["a", "y", "i", "e", "o ", "u", "w"];
    if (goodName.includes(lastChar)) {
      return console.log("Good Name");
    } else {
      return console.log("Bad Name");
    }
  } else {
    return console.log("Invalid input. Please input a string.");
  }
}

//checkName("anik");

//problem-03
function deleteInvalids(array) {
  if (Array.isArray(array)) {
    const newArr = [];
    for (const arr of array) {
      if (typeof arr === "number" && !isNaN(arr)) {
        newArr.push(arr);
      }
    }
    return newArr;
  } else {
    return "Invalid input. Please input an array.";
  }
}

//const result = deleteInvalids([1,null, undefined,18, -19, NaN,"12",[1, 2],{ ob: "lala" },]);
// const result = deleteInvalids(["1", { num: 2 }, NaN]);
// const result = deleteInvalids({ num: [1, 2, 3] });
// const result = deleteInvalids([1, 2, -3]);
// console.log(result);

//problem-04
function password(obj) {
  const { name, birthYear, siteName } = obj;
  return `${siteName.toUpperCase()}#${name}@${birthYear}`;
}

// const result = password({
//   name: "kolimuddin",
//   birthYear: 1999,
//   siteName: "google",
// });
// console.log(result);

//problem-05
function monthlySavings(arr, livingCost) {
  if (Array.isArray(arr)) {
    let totalCost = 0;
    for (let cost of arr) {
      totalCost += cost;
    }
    const saving = totalCost - livingCost;
    if (saving < 0) {
      return "Earn More";
    } else {
      return `You save: ${saving}`;
    }
  } else {
    return "Invalid input.";
  }
}

// const result = monthlySavings([1000, 2000, 3000], 5400);
// const result = monthlySavings([1000, 2000, 2500], 5000);
// const result = monthlySavings([900, 2700, 3400], 10000);
// const result = monthlySavings(100, [900, 2700, 3400]);
console.log(result);
