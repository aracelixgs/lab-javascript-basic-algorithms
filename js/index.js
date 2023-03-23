console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = "Araceli";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Miguel";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals

// con bucle for

let nameWithSpaces = "";

for (let i = 0; i < hacker1.length; i++) {
  nameWithSpaces += ` ${hacker1[i]}`;
}
console.log(nameWithSpaces.toUpperCase());

// con bucle for in

let hacker1withSpaces = "";

for (let char in hacker1) {
  hacker1withSpaces += ` ${hacker1[char].toUpperCase()}`;
}
console.log(hacker1withSpaces);

// otro método
console.log(hacker1.toUpperCase().split("").join(" "));

// 3.2 Print all the characters of the navigator's name, in reverse order.

let hacker2Reversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  const char = hacker2[i];
  hacker2Reversed += char;
}
console.log(hacker2Reversed);

// otra forma

let hacker2reversed = hacker2.split("").reverse().join("");

console.log(hacker2reversed);

/*
3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
*/

for (i = 0; i < hacker1.length && i < hacker2.length; i++) {
  if (hacker1[i] < hacker2[i]) {
    console.log("The driver's name goes first.");
    break;
  } else if (hacker1[i] > hacker2[i]) {
    console.log("Yo, the navigator goes first definitely.");
    break;
  } else if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?");
    break;
  }
}

// con localCompare

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.")
}
else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definitely.")
}
else {
  console.log("What?! You both have the same name?")
} 



// BONUS 1

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum rutrum nibh, ac efficitur augue consequat eu. Curabitur et luctus libero. Phasellus sit amet facilisis arcu. Sed auctor orci libero, in ultricies justo consequat vitae. Suspendisse vel lectus sit amet lacus aliquet laoreet. Vivamus justo elit, convallis quis accumsan facilisis, gravida vitae tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sed scelerisque ligula. Duis id ex sed diam convallis porttitor id sit amet magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis ut massa aliquet, auctor sapien nec, semper eros.

Etiam condimentum rutrum arcu a sagittis. Quisque auctor mi sit amet nunc ornare fermentum. Mauris consequat ultrices volutpat. Donec nec finibus eros. Sed vel accumsan nulla. Nullam vitae elit commodo, mattis arcu id, tincidunt mi. Sed volutpat nulla a bibendum pretium.

Suspendisse eleifend, quam in lobortis vestibulum, odio augue facilisis lectus, ut semper elit neque ac sapien. Maecenas a est placerat augue consectetur tincidunt. Praesent auctor, tortor non varius ultrices, risus magna gravida nulla, vitae suscipit purus turpis et elit. Nam mauris est, hendrerit vitae euismod sit amet, egestas sit amet justo. Vivamus dapibus a leo ac sollicitudin. Donec fringilla ac arcu eu molestie. Aliquam bibendum venenatis gravida. Integer dapibus placerat sapien vulputate auctor. Nulla tincidunt vestibulum elit. Ut at malesuada leo, sit amet fermentum est. Duis sit amet libero quis mi fringilla condimentum. Maecenas fringilla tellus ac enim finibus viverra. Proin a posuere ex.`

let words = 0;
let etCount = 0;

let textArr = longText.split(" ")
words = textArr.length

for (let i=0; i < textArr.length; i++) {
 if(textArr[i] === "et" || textArr[i] === "et.") {
    etCount++;
  }
 }

console.log('words -->', words);
console.log('et count  -->', etCount);


// BONUS 2

let stringToCheck = "A man, a plan, a canal, Panama!";
stringToCheck = stringToCheck.replace(/[ ,!.]/g, "").toLowerCase();

let reversedString = stringToCheck.split('').reverse().join('');

if (stringToCheck === reversedString) {
  console.log('String is a palindrome');
}
else {
  console.log('Not a palindrome');
}
