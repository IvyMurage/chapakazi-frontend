export const addlogin = (login) => {
  return async function (dispatch) {
    dispatch({
      type: "handyman/loading",
    });
    const response = await fetch("handyman/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    });

    const data = await response.json();

    if (response.ok) {
      dispatch({
        type: "add/login",
        payload: data.handyman,
      });
      localStorage.setItem("handyman", data.jwt);
    } else {
      dispatch({
        type: "error/handyman",
        payload: data,
      });
    }
  };
};

const initialState = {
  loading: false,
  errors: [],
  handyman: {},
};
export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case "add/login": {
      return {
        ...state,
        handyman: action.payload,
      };
    }
    case "handyman/loading": {
      return {
        ...state,
        loading: true,
      };
    }

    case "error/handyman": {
      return {
        ...state,
        errors: action.payload.message,
      };
    }
    default:
      return state;
  }
}
