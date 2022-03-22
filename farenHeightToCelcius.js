// ২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। 

function FarenToCel(faren) {
    return ((5*faren)-32)/9;
}

var faren = 86;

console.log("Temperature in Farenheit: "+faren+ "F");
var cel = FarenToCel(faren);
console.log("Temperature in Celcius: "+cel+ "C");

