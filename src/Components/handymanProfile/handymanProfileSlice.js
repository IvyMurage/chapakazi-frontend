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
      dispatch({ type: "handymanImage/update", payload: data });
    } else {
      dispatch({ type: "handyman/error", payload: data.errors });
    }
  };
}
export function updateUserName(profileId, token, username) {
  return async function (dispatch) {
    const response = await fetch(`handymen/${profileId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(username),
    });

    const data = await response.json();

    if (response.ok) {
      console.log(data);
      dispatch({ type: "handymanUsername/update", payload: data });
    } else {
      dispatch({ type: "handyman/error", payload: data.errors });
    }
  };
}
export function updateLocation(profileId, token, location) {
  return async function (dispatch) {
    const response = await fetch(`handymen/${profileId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(location),
    });

    const data = await response.json();

    if (response.ok) {
      console.log(data);
      dispatch({ type: "handymanLocation/update", payload: data });
    } else {
      dispatch({ type: "handyman/error", payload: data.errors });
    }
  };
}
export function updateSpeciality(profileId, token, speciality) {
  return async function (dispatch) {
    const response = await fetch(`handymen/${profileId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(speciality),
    });

    const data = await response.json();

    if (response.ok) {
      console.log(data);
      dispatch({ type: "handymanSpeciality/update", payload: data });
    } else {
      dispatch({ type: "handyman/error", payload: data.errors });
    }
  };
}
export function updateDescription(profileId, token, description) {
  return async function (dispatch) {
    const response = await fetch(`handymen/${profileId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(description),
    });

    const data = await response.json();

    if (response.ok) {
      console.log(data);
      dispatch({ type: "handymanDescription/update", payload: data });
    } else {
      dispatch({ type: "handyman/error", payload: data.errors });
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

    case "handymanImage/update":
      return {
        ...state,
        handyman: { ...state.handyman, image: action.payload.image },
      };

    case "handymanUsername/update":
      return {
        ...state,
        handyman: { ...state.handyman, username: action.payload.username },
      };

    case "handymanLocation/update":
      return {
        ...state,
        handyman: { ...state.handyman, location: action.payload.location },
      };

    case "handymanSpeciality/update":
      return {
        ...state,
        handyman: { ...state.handyman, speciality: action.payload.speciality },
      };

    case "handymanDescription/update":
      return {
        ...state,
        handyman: { ...state.handyman, description: action.payload.description },
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
