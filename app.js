console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
  if (count <= 0) {
    console.log("Please type a positive number and a higher number")
  }
  for (let i = 0; i < count; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

console.log(printOdds(5))

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(UserName, age) {
  if (age == undefined) {
    console.log("Please type in your age")
  }
  if (UserName && age >= 16) {
    console.log(`Congrats ${UserName}, you can drive!`)
  } else {
    console.log(`Sorry ${UserName}, but you need to wait until you're 16.`)
  }

}

console.log(checkAge("Silas"))

//Exercise 3: which Quadrant?

function pointLocation(x, y) {
  if (x === 0 && y === 0) {
    console.log("(x, y) is the origin.")
  } else if (x === 0) {
    console.log("(x, y) is on the y axis")
  } else if (y === 0) {
    console.log("(x, y) is on the x axis")
  } else if (x > 0 && y > 0) {
    console.log("(x, y) is on the 1st Quadrant")
  } else if (x < 0 && y > 0) {
    console.log("(x, y) is on the 2nd Quadrant")
  } else if (x < 0 && y < 0) {
    console.log("(x, y) is on the 3rd Quadrant")
  } else {
    console.log("(x, y) is on the 4th Quadrant")
  }
}

console.log(pointLocation(-2, 2))

//Exercise 4 What type of Triangle?

function triangleType(side1, side2, side3) {
  if(side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
    console.log("this is an invalid triangle")
  } else if (side1 === side2 && side2 === side3) {
    console.log("This is an equalateral triangle") 
  } else if (side1 === side2 && side2 > side3) 
    console.log("This is an isosceles triangle") 
    else {
      console.log("This is a scalene triangle")
    }
}
console.log(triangleType(3,1,5))

//Exercise 5 Data plan status

function cellUsage(planLimit, day, usage) {
  const averageDailyUsage = usage / day;
  const dataLeft = planLimit - usage;
  const daysLeft = 30 - day;
  const averageDataLeftPerDay = dataLeft / daysLeft;

  if(averageDailyUsage > planLimit / 30) {
    console.log(`You are using more data than your plan allows. You have used an average of ${averageDailyUsage} GB per day, but your plan only allows ${planLimit / 30} GB per day`);
  } else if (averageDailyUsage < planLimit / 30) {
    console.log(`You are using less data than your plan allows. You have used an average of ${averageDailyUsage} GB per day, and your plan allows ${planLimit / 30} GB per day. You have ${dataleft} GB data left, which means you can use an average of ${averageDailyUsage} GB per day for the rest of the month`);
  } else {
    console.log(`You are using the exact amount of data that your plan allows. You have used an average of ${averageDailyUsage} GB per day, which is the same as your plan's limit of ${planLimit / 30} GB per day`);
  }
}

console.log(cellUsage(100, 15, 56))