export const addReview = (review, token) => {
  return async function (dispatch) {
    dispatch({
      type: "review/loading",
    });
    const response = await fetch("reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(review),
    });

    const data = await response.json();

    if (response.ok) {
      dispatch({
        type: "review/add",
        payload: data,
      });
    }
  };
};

export const removeReview = (id) => {
  return {
    type: "reviews/remove",
    payload: id,
  };
};

export const downVoteReview = (id) => {
  return {
    type: "reviews/downvote",
    payload: id,
  };
};

export const upVoteReview = (id) => {
  return {
    type: "reviews/upvote",
    payload: id,
  };
};

export const fetchReviews = (profileId, token) => {
  return async function (dispatch) {
    dispatch({
      type: "reviews/loading",
    });

    const response = await fetch("reviews", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (response.ok) {
      dispatch({
        type: "reviews/loaded",
        payload: data,
      });
    } else {
      dispatch({
        type: "reviews/error",
        payload: data.errors,
      });
    }
  };
};

const initialState = {
  reviews: [],
  status: "idle",
  error: null,
};

export default function reviewReducer(state = initialState, action) {
  switch (action.type) {
    case "reviews/loading":
      return {
        ...state,
        status: "loading",
      };

    case "reviews/add":
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
      };

    case "reviews/loaded":
      return {
        ...state,
        reviews: action.payload,
        status: "idle",
      };
      
    default:
      return state;
  }
}
