import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import Smurf from "./smurf";
import { fetchSmurfs } from "../actions";

const Smurfs = props => {
  console.log("smurfs data in props", props);
  return (
    <div>
      <button onClick={props.fetchSmurfs}>Get Smurfs</button>

      {!props.smurfs && !props.isLoading && <h3>Click to find smurfs</h3>}
      {props.isLoading && (
        <Loader
          type="Circles"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 seconds
        />
      )}
      {props.smurfs && !props.isLoading && <Smurf smurfs={props.smurfs} />}
    </div>
  );
};

const mapStatesToProps = state => {
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs,
    error: state.error
  };
};

export default connect(mapStatesToProps, { fetchSmurfs })(Smurfs);
