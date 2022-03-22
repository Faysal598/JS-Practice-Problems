// ৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে। 

function grade(marks) {
    if (marks >= 90 && marks <= 100)
        console.log("A+");
    else if (marks >= 75 && marks <= 79)
        console.log("B+");
    else if (marks >= 65 && marks <= 69)
        console.log("C+");
    else if (marks >= 55 && marks <= 59)
        console.log("D+");
    else if (marks >= 0 && marks <= 39)
        console.log("F");

    return marks;
}
var mark = 77;
var gradings = grade(mark);
console.log("Your grade is: " + gradings);