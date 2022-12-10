#Prime
let num=17;
let count=0;
for(let i=1;i<=num;i++)
{
if(num%i==0)
{
count++;
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