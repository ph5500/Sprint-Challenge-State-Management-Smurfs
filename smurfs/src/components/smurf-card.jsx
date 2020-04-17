import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

const SmurfCard = props => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");

  const changeName = item => {
    setName(item.target.value);
  };
  const changeAge = item => {
    setAge(item.target.value);
  };
  const changeHeight = item => {
    setHeight(item.target.value);
  };

  const newSmurf = {
    name: name,
    age: age,
    height: height
  };

  return (
    <div>
      <form onSubmit={() => props.addSmurf(newSmurf)}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={changeName}
        />
        <input type="text" placeholder="Age" value={age} onChange={changeAge} />
        <input type="text" placeholder={height} onChange={changeHeight} />
        <button>Add a Smurf</button>
      </form>
    </div>
  );
};

export default connect(null, { addSmurf })(SmurfCard);
