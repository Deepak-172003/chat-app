import React from "react";

const GenderCheckBox = ({gender,onChange}) => {
  return (
    <div className="flex gap-10 ">
      <div className="form-control ">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-gray-400">Male</span>
          <input type="radio" name="gender" value={"male"} checked={gender == "male"} onChange={onChange} className="radio border-white text-gray-400" />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-gray-400">Female</span>
          <input type="radio" name="gender" value={"female"} checked={gender == "female"} onChange={onChange} className="radio border-white text-gray-400" />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
