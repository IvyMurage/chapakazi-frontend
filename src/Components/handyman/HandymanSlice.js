export const addhandyman = (handyman) => {
    return {
        type: "add/handyman",
        payload: handyman
    }
}

const initialState = {}
export default function handymanReducer (state=initialState, action) {

    switch(action.type) {
        case "add/handyman":
            {
                return state
            }
    }

}