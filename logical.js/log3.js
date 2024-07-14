//Question:
//What is the Score in a Game?

//Answer:
var score = 150

if(score<50)
{
    console.log("You Need to improve");
}
else if(score>=50 && score<=70)
{
    console.log("Good Job");
}
else if(score>70 && score<=100)
{
    console.log("Excellent performance");
}
else
{
    console.log("Invalid");
}