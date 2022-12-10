#Prime
let num=27;
 function checkprime(num){
let check=true;
for(let i=2;i<num;i++)
{
if(num%i==0)
{
check =false;
break;
}
}

if(count==2)
{
console.log("It is a Prime Number");
}
else
{
console.log("Not a Prime Number");
}

