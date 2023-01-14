import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function CustomerProfile() {
  const dispatch = useDispatch();
  const customerId = JSON.parse(localStorage.getItem("customerInfo"));
  const token = localStorage.getItem("customer");

  useEffect(() => {
    const fetchCustomer = async () => {
      const response = await fetch(`customers/${customerId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data);
      }
    };

    fetchCustomer();
  }, [token, customerId]);

  const customer = useSelector((state) => state.customers.logins);
  console.log(customer);
  return <div> 
    
     </div>;
}

export default CustomerProfile;
