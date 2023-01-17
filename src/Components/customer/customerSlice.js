export function signupCustomer(customer, navigate) {
  return async function (dispatch) {
    dispatch({
      type: "customer/loading",
    });
    const response = await fetch(
      "https://chapakazi-server-production.up.railway.app/customers",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customer),
      }
    );
    const data = await response.json();

    if (response.ok) {
      dispatch({
        type: "customer/signup",
        payload: data.customer,
      });
      localStorage.setItem("customer", data.jwt);
      navigate('/handyman/alert');
      
    } else {
      dispatch({
        type: "customer/error",
        payload: data,
      });
    }
  };
}

export function loginCustomer(customer, navigate) {
  return async function (dispatch) {
    dispatch({
      type: "customer/loading",
    });

    const response = await fetch(
      "https://chapakazi-server-production.up.railway.app/customer/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(customer),
      }
    );

    const data = await response.json();
    console.log("This is the data", data);

    if (response.ok) {
      dispatch({
        type: "customer/login",
        payload: data.customer,
      });

      localStorage.setItem("customer", data.jwt);
      localStorage.setItem("customerInfo", data.customer.id);
      

      navigate("/handymanProfiles");
    } else {
      dispatch({
        type: "customer/error",
        payload: data,
      });
    }
  };
}

const initialState = {
  customer: {},
  errors: [],
  status: "idle",
};

export default function customerReducer(state = initialState, action) {
  switch (action.type) {
    case "customer/signup":
      return {
        ...state,
        status: "idle",
        customer: action.payload,
      };
    case "customer/login":
      return {
        ...state,
        customer: action.payload,
        status: "idle",
        errors: [],
      };
    case "customer/loading":
      return {
        ...state,
        status: "loading",
      };
    case "customer/error":
      return {
        ...state,
        errors: action.payload.errors,
        status: "idle",
      };

    default:
      return state;
  }
}
