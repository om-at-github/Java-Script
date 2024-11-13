let num=12345;
let reverse=0;
let i=0;

while(num>0)
{
    let r = num % 10;
    reverse= reverse*10+r;
    num = parseInt(num/10)
}

console.log("reversed number",reverse);