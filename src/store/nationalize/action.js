export const GET_ARTICLES_REQUEST = "NATIONALIZE::GET_ARTICLES_REQUEST";
export const GET_ARTICLES_SUCCESS = "NATIONALIZE::GET_ARTICLES_SUCCESS";
export const GET_ARTICLES_FAILURE = "NATIONALIZE::GET_ARTICLES_FAILURE";

export const getArticlesRequest = () => ({
    type: GET_ARTICLES_REQUEST,
});

export const getArticlesSuccess = (data) => ({
     type: GET_ARTICLES_SUCCESS,
     payload: data,
});

export const getArticlesFailure = (err) => ({
     type: GET_ARTICLES_FAILURE,
     payload: err,
});

export const getArticles = (newApiUrl) => async (dispatch) => {
    try {
        dispatch(getArticlesRequest());
        const response = await fetch(newApiUrl);

        if(!response.ok) {
            throw new Error(`Response failed with status ${response.status}`);
        }

        const result = await response.json();
        dispatch(getArticlesSuccess(result));
    } catch (e) {
        dispatch(getArticlesFailure(e.message));
    }
};