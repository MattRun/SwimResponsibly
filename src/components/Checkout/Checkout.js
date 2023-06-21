import React, { useState } from "react";

function Payment() {
  const submitPayment = (e) => {
    e.preventDefault();
    window.location.href = "/PaymentSuccess";
  };
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handlePayment = () => {
    // Handle payment logic here, e.g. send payment data to server
    console.log("Processing payment...");
  };

  return (
    <div>
      <h2>Make a Payment</h2>
      <form onSubmit={handlePayment}>
        <label>
          Card Number:
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </label>
        <br />
        <label>
          Expiration Date:
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          CVV:
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </label>
        <br />
        <label>
          Name on Card:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <button onClick={submitPayment}>Submit Payment</button>
      </form>
    </div>
  );
}

export default Payment;