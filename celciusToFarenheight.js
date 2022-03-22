// ১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে 

function celToFaren(cel) {
    var faren = ((9*cel)/5)+32;

    return faren;
}
var cel = 30;
console.log("Temperature in Celcius: "+cel+ "C");
var faren = celToFaren(cel);
console.log("Temperature in Farenheit: "+faren+ "F");





