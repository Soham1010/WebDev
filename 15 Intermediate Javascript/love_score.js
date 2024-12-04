prompt("What is Your Name?: ");
prompt("What is their Name?: ");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;   // 1-100 

if (loveScore > 70) {
    alert("You love socre is" + loveScore + "%. You love each other like Kanye loves Kanye.");
}
if (loveScore > 30 && loveScore <= 70) {
    alert("You love socre is" + loveScore + "%." + "You go together like coke and mentos.");
}
if (loveScore <= 30) {
    alert("You love socre is" + loveScore + "%. You go together like oil and water.");
}
