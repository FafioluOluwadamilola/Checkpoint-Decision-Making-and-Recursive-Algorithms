1 //Leap Year Checker 
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
}

console.log(isLeapYear(2004));
console.log(isLeapYear(1990));
console.log(isLeapYear(2010));


// 2. TICKET PRICING
function getTicketPrice(age) {
    if (age <= 12) {
        return `The ticket price is $10.`;
    } else if (age >= 13 && age <= 17) {
        return `The ticket price is $15.`;
    } else if (age >= 18) {
        return `The ticket price is $20.`;
    } else {
        return `Invalid age.`;
    }
}


console.log(getTicketPrice(19)); 
console.log(getTicketPrice(5)); 
console.log(getTicketPrice(45)); 
 

/// 3 WEATHER CHECKER
function clothingAdviser(temperature, isRaining) {
    if (temperature < 0) {
        return isRaining ? "Wear a heavy coat, scarf, and waterproof boots." : "Wear a heavy coat, scarf, and warm boots.";
    } else if (temperature >= 0 && temperature <= 10) {
        return isRaining ? "Wear a warm jacket and waterproof shoes." : "Wear a warm jacket and regular shoes.";
    } else if (temperature > 10 && temperature <= 20) {
        return isRaining ? "Wear a light jacket and carry an umbrella." : "Wear a light jacket.";
    } else if (temperature > 20 && temperature <= 30) {
        return isRaining ? "Wear a t-shirt and carry an umbrella." : "Wear a t-shirt.";
    } else {
        return isRaining ? "Wear light clothing and carry an umbrella." : "Wear light clothing.";
    }
}


console.log(clothingAdviser(5, true)); 
console.log(clothingAdviser(15, false));
console.log(clothingAdviser(25, true));   
console.log(clothingAdviser(-5, false)); 



/// 4. FIBONACCI SEQUENCE

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(0));
console.log(fibonacci(5)); 
console.log(fibonacci(10));



/// 5.  Palindrome Checker

function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (str.length <= 1) {
        return 'It is a palindrome';
    } else if (str[0] !== str[str.length - 1]) {
        return 'It is not palindrome';
    } else {
        return isPalindrome(str.slice(1, -1));
    }
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("Hello"));
