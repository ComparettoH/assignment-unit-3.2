console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i = 0; i < 4; i++) {
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
// console.log('count from 0 to 5');
for (let i = 0; i <= 5; i++) { 
  console.log(i); 
}

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
// console.log('count from 3 to 5');
for (let i = 3; i <= 5; i++) { 
  console.log(i) 
}

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
// console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
for (i = 2; i <= 10; i++) {
  if (i % 2 == 0) { 
    console.log(i); }
}

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
// console.log('STRETCH: countdown from 5 to 0');
// skip for now will return after remaining work completed.

// 2. For of loops  
// console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
// console.log('Some stars:');
for (star of stars) { 
  console.log('Some stars:', star); 
}

// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
let index = 0;

while (index <= stars.length - 1) {
  console.log('Some stars using while:', stars[index]);
  index++;
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
//console.log('count from 0 to 5');
let number = 0;
max2 = 5;
while (number <= max2) { 
  console.log('A while loop for numbers:', number); 
  number++; 
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
// console.log('count backwards from 10 to 5');
let number3 = 5;
max3 = 10;

while (number3 <= max3) { 
  console.log('A while loop counting backwards from:', max3); 
  max3--; 
}
