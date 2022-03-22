// ৪. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো। 

function interest(ipv, air, t) {

    return (ipv*(1+air*t));
}

var p = 50;
var r = 100;
var t = 10;

var interest = interest(p, r, t)
console.log("Your interest is: " + interest);