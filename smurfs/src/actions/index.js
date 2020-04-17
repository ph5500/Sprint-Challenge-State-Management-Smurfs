import axios from "axios";


export const FETCHING_SMURF_START = "FETCHING_SMURF_START";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const FETCHING_SMURF_FAILURE = "FETCHING_SMURF_FAILURE";
export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";


export const fetchSmurfs = () => dispatch => {
    dispatch({ type: "FETCHING_SMURF_START" });
    axios.get(`http://localhost:3333/smurfs`)
        .then(response => {
            // console.log("api response data", response.data);
            dispatch({ type: "FETCHING_SMURF_SUCCESS", payload: response.data });
        })
        .catch(err => {
            dispatch({ type: "FETCHING_SMURF_FAILURE", payload: err });
        });
};

export const addSmurf = newSmurf => dispatch => {
    dispatch({ type: "ADD_SMURF_START" });
    console.log("post logging info", newSmurf);
    axios.post(`http://localhost:3333/smurfs`, {
        name: newSmurf.name,
        age: newSmurf.age,
        height: newSmurf.height
    })
        .then(response => {
            //console.log("response data here", reponse );
            dispatch({ type: "ADD_SMURF_SUCCESS", payload: response.data });
        })
        .catch(err => {
            dispatch({ type: "ADD_SMURF_FAILURE", payload: err });
        });
};

