import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/banner-ads-examples-aws.jpg?jwAuTeoLXQvDzDNGQ8Q3zDmWXndEqL8V&itok=tukEXkYJ"
          alt=""
        />

        <div>
          <h2 className="checkout__title">Your Shopping basket</h2>
          <div>
            {/* basket item */}
            {/* basket item */}
            {/* basket item */}
            {/* basket item */}
            {/* basket item */}
          </div>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
        <h2>The Subtotal will go here</h2>
      </div>
    </div>
  );
}

export default Checkout;
