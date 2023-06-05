import React from 'react'
import "./Checkout.css"
import { useContext } from 'react'
import { SupplyContext } from '../../components/Context/Context'
const Checkout = () => {
const {addToCart,cart,selectedCurrency} = useContext(SupplyContext)
 const subTotal = cart.reduce((acc,curr) => acc + (curr.qty * curr.price),0);
 const Total = selectedCurrency == "IND" ? subTotal*82 : subTotal;
 const grandTotal =  Total - (selectedCurrency == "IND" ? 100 : 2) + (selectedCurrency == "IND" ? 82 : 1);
 const currency = selectedCurrency == "IND" ? "INR" :"USD";
const payment =  selectedCurrency == "USD" ?( grandTotal * 82 ) : grandTotal*82;

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}
  async function displayRazorpay(e) {
     e.preventDefault();
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }
    
    const options = {
        key: "rzp_test_5KezFMy0ws3aN9", // Enter the Key ID generated from the Dashboard
        amount: payment.toString(),
        currency: "INR",
        name: "Yash Corp.",
        description: "Transaction",
        handler: async function (response) {
        },
        prefill: {
            name: "abc ",
            email: "abc@example.com",
            contact: "9999999999",
        },
        notes: {
            address: "abc Corporate Office",
            minimum_amount : "0.10"
        },
        theme: {
            color: "#61dafb",
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
}    
 
    return (
        <div className='checkoutContainer'>
            <div className='addressContainer'>

            </div>
      <div className='checkout'> 
       <h3>Your Order</h3>
       <hr></hr>
       <h4>Items In Your Cart:{cart.length} </h4>
       <h4>Sub-Total:{selectedCurrency == "IND" ? `₹${subTotal*82}` : `$${subTotal}`} </h4>
       <h4>Delivery Charges: {selectedCurrency == "IND" ? `₹${82}` : `$${1}`} </h4>
       <h4>Discount:{selectedCurrency == "IND" ? `-₹${100}` : `-$${2}`} </h4>
       <h4>Grand Total :{ selectedCurrency == "IND" ? `₹${grandTotal}` : `$${grandTotal}`} </h4>
       <hr></hr>
       <button onClick={displayRazorpay}>Place Order</button>
      </div>
      </div>
  )
}
 
export default Checkout