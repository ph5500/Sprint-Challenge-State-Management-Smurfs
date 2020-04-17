import React from "react";

const Smurf = props => {
  console.log(props, "props in smurf");
  return (
    <div>
      {props.smurfs.map(smurf => {
        return (
          <>
            <h3>{smurf.name}</h3>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
          </>
        );
      })}
    </div>
  );
};

export default Smurf;
