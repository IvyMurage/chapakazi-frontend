export const addJob = (job, token, navigate) => {
    return async function (dispatch) {
        dispatch({
            type: "job/loading"
        })
        const response = await fetch('jobs', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(job)

        })

        const data = await response.json()


        if (response.ok) {
            dispatch({
                type: "jobs/add",
                payload: data
            })

            navigate('/jobs');
        } else {
            dispatch({
                type: "jobs/errors",
                payload: data.errors
            })
        }
    }
}

export const removeJobs = (jobId) => {
    return async function (dispatch) {
        const response = await fetch(`/jobs/${jobId}`)

        if (response.ok) {
            dispatch({
                type: "jobs/remove",
                payload: jobId
            })
        }



    }

}

export const fetchJobs = (token) => {

    return async function (dispatch) {
        dispatch({
            type: "job/loading"
        })

        const response = await fetch("jobs", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        const jobs = await response.json()

        if (response.ok) {
            dispatch({
                type: "jobs",
                payload: jobs
            })
        } else {
            dispatch({
                type: "jobs/error",
                payload: jobs.errors
            })
        }
    }
}

const initialState = {
    jobs: [],
    errors: [],
    status: 'idle'
}

export default function jobReducer(state = initialState, action) {
    switch (action.type) {

        case 'jobs':
            return {
                ...state,
                jobs: action.payload,
                status: 'idle'
            }
        case 'job/loading':
            return {
                ...state,
                status: "loading"
            }

        case 'jobs/add':
            return {
                ...state,
                jobs: [action.payload,...state.jobs]
            }


        case 'jobs/remove':
            return {
                ...state,
                jobs: state.jobs.filter(job => job.id !== action.payload)
            }

        case 'jobs/errors':
            return {
                ...state,
                errors: action.payload
            }
        default:
            return state;
    }

}