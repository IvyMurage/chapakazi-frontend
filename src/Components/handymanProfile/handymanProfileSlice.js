export function fetchHandyman(profileId, token) {
  return async function (dispatch) {
    const response = await fetch(`handymen/${profileId}`, {
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

export function updateImage(profileId, token, image) {
  return async function (dispatch) {
    const response = await fetch(`handymen/${profileId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(image),
    });

    const data = await response.json();

    if (response.ok) {
      console.log(data);
      dispatch({ type: "handymanImage/update", payload: data });
    } else {
      dispatch({ type: "handyman/error", payload: data.errors });
    }
  };
}
export function updateUserName(profileId, token) {}
export function updateLocation(profileId, token) {}
export function updateSpeciality(profileId, token) {}
export function updateDescription(profileId, token) {}

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

    case "handymanImage/update":
      return {
        ...state,
        handyman: { ...state.handyman, image: action.payload.image },
      };

    default:
      return state;
  }
}
