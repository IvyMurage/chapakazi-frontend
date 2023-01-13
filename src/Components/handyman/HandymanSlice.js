export const addhandyman = (handyman, navigate) => {
    return async function (dispatch) {
        dispatch({
            type: "handyman/loading"
        })
        const response = await fetch("handymen", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                handyman
            )
        })

        const data = await response.json()

        if (response.ok) {
            dispatch({
                type: "add/handyman",
                payload: data
            })
            localStorage.setItem("handyman", data.jwt)
            navigate('/handymanLogin');
        } else {
            dispatch({
                type: "error/handyman",
                payload: data
            })
        }
    }
}




const initialState = {
    loading: false,
    errors: [],
    handyman: {}
}
export default function handymanReducer(state = initialState, action) {

    switch (action.type) {
        case "add/handyman": {
            return {
                ...state,
                handyman: action.payload,
            }
        }
        case "handyman/loading": {
            return {
                ...state,
                loading: true
            }
        }

        case "error/handyman": {
            return {
                ...state,
                errors: action.payload.errors
            }

        }
        default:
            return state;
    }

}