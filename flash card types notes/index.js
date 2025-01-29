//Create own promise using dummy data 

const cart = ["tshirt", "kurta", "pullover"]; 

createOrder(cart)
.then((orderID)=>{return orderID})
.then((orderID)=>{return proceedToPayment(orderID)})
.then((paymentInfo)=>console.log(paymentInfo))
.catch((err)=>console.log(err)); // catch handle error or promise rejection



//Producer -- logic code and stuff
// const createOrder = (cart)=>{
function createOrder(cart){
    const pro = new Promise((resolve, reject)=>{
        // create promise using Promise constructor, it take a callback fun with 2 params 1 as resolve and 1 as reject

        //dummy {createOrder, validateCart, orderId}
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid"); //creating custom error
            reject(err); // here promise reject everything
        }

        //logic for create order
        const orderId = "123"; //dummy 
        if(orderId){
            resolve(orderId); // promise return orderId (done)
           
    });

    return pro;
}

function proceedToPayment(orderID){
    return new Promise(function(resolve,reject){
        resolve("Payment Successfull!")
    })
}

//dummy auth
function validateCart(cart){
    return true ;
}