export function fetchHandyman(profileId, token) {
  return async function (dispatch) {
    const response = await fetch(`handymen${profileId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (response.ok) {
      dispatch({
        type: "handyman/loaded",
        payload: data,
      });
    } else {
      dispatch({
        type: "handyman/error",
        payload: data.errors,
      });
    }
  };
}

const initialState = {
  handyman: {},
  errors: [],
};

export default function handymanProfileReducer(state = initialState, action) {
  switch (action.type) {
    case "handyman/loaded":
      return {
        ...state,
        handyman: action.payload,
      };

    case "handyman/error":
      return {
        ...state,
        errors: action.payload,
      };

    default:
      return state;
  }
}
