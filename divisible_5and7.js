let num=5;


if(num % 5==0)
{
    console.log("number divisible by 5")
}
else if(num % 7==0)
{
    console.log("number divisible by 7")
}
else if(num % 5==0 && num % 7==0 )
{
    console.log("number divisible by both 5 and 7")
}else{
    console.log("not divisible 5 or 7");
}