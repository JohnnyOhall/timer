// Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify 
// an unlimited number of alarms using command line arguments
// ---- EXAMPLE ----
// Input: node timer1.js 10 3 5 15 9
// Output: This will make it beep at 3 seconds, 5 seconds, 9 seconds, 10 seconds, 15 seconds


//process.stdout.write('\x07');

//let input = process.argv.slice(2)
//console.log(process.argv.slice(2))//

// print process.argv
for (const step of process.argv) {
  if (step >= 0){
    setTimeout(() => process.stdout.write('\x07'), step);
  }  
};

//setTimeout//

// EDGE CASES: //
// 1. No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// 2. An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// 3 .An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.