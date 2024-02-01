const myNums=[1,2,3]

// const myTotal=myNums.reduce(function (acc,currval){
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc+currval;
// }, 0)
// ^ above 0 is taken as initial value for accumalator

const myTotal=myNums.reduce((acc,curr)=>(acc+curr),1)
// console.log(myTotal);


const shoppingCart=[
    {
        itemName:"Js Course",
        price:3999
    },
    {
        itemName:"py Course",
        price:4999
    },
    {
        itemName:"Web dev Course",
        price:9999
    },
    {
        itemName:"Mobile application Course",
        price:15999
    }
]

const cartTotal=shoppingCart.reduce((acc,curr)=>(acc+curr.price),0)

console.log(`Total cart price is : ${cartTotal}`);