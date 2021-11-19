/* WRITE THE CODE FOR THE FOLLOWING FUNCTIONS */

// Input: a (number), b (number)
// Action: Add both numbers together
// Output: The result (number)
function add(a,b) {
    // write your code here
    return a+b;
  }
  let a=10;
  let b=25;
  console.log(`The sum of ${a} and ${b} is: ${add(10,20)}`);
  // Input: number
  // Action: Check if the number given is even or not
  // Output: The result (boolean)
  function isEven(num) {
    // write your code here
    if(num % 2 === 0){
        return true;
    }
    return false;
  }
  
  console.log(`Is ${b} even? `,isEven(b));
  console.log(`Is ${a} even? `,isEven(a));
  // Input: name (string)
  // Action: Greet the user by name
  // Output: The greeting (string)
  function greet(name ) {
    // write your code here
    return `Hello ${name}!`;
  }
  console.log(greet("Arita"));
  
  // Input: age (number)
  // Action: Check if the age is 18 or over
  // Output: The result (boolean)
  function isAnAdult(age) {
    // write your code here
        if(age>=18){
            return true;
        }
        return false;
  }
  console.log(`Is a ${a} year old an adult?`,isAnAdult(a));
  console.log(`Is a ${b} year old an adult?`,isAnAdult(b));
  
  // Input: age (number)
  // Action: Check how many years are left until adulthood (18)
  // Output: The result (number)
  function yearsToAdulthood(age) {
    // write your code here
        if(!isAnAdult(age)){
            return 18-age;
        }
        return 0;
  }
  console.log(`Years to adulthood for a ${a} year old: `+yearsToAdulthood(a));
  console.log(`Years to adulthood for a ${b} year old: `+yearsToAdulthood(b));
  
  // Input: person ({ age: number, name: string })
  // Action:
  //   - check if a person is an adult
  //   - if they are, greet them
  //   - if they are not, tell them to come back in X years (when they are)
  // Output: The result (string)
  function admit(age, name) {
    // write your code here
    // use greet, isAnAdult and yearsToAdulthood to help you!
    if(isAnAdult(age)){
        return greet(name);
    }else{
        if(yearsToAdulthood(age)===1){
            return `You're underage. Return after ${yearsToAdulthood(age)} year.`;
        }else
        return `You're underage. Return after ${yearsToAdulthood(age)} years.`;

    }
   
  }
  console.log(admit(17,"Arita"));
  console.log(admit(25,"Ed"));
  