export const GET_NATIONALIZE_REQUEST = "NATIONALIZE::GET_NATIONALIZE_REQUEST";
export const GET_NATIONALIZE_SUCCESS = "NATIONALIZE::GET_NATIONALIZE_SUCCESS";
export const GET_NATIONALIZE_FAILURE = "NATIONALIZE::GET_NATIONALIZE_FAILURE";

export const getNationalizeRequest = () => ({
    type: GET_NATIONALIZE_REQUEST,
});

export const getNationalizeSuccess = (data) => ({
    type: GET_NATIONALIZE_SUCCESS,
    payload: data,
});

export const getNationalizeFailure = (err) => ({
    type: GET_NATIONALIZE_FAILURE,
    payload: err,
});

export const getNationalize = (newApiUrl) => async (dispatch) => {
    try {
        dispatch(getNationalizeRequest());
        const response = await fetch(newApiUrl);

        if (!response.ok) {
            throw new Error(`Response failed with status ${response.status}`);
        }

        const result = await response.json();
        dispatch(getNationalizeSuccess(result));
    } catch (e) {
        dispatch(getNationalizeFailure(e.message));
    }
};