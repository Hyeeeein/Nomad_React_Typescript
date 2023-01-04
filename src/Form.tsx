import React from "react";
import { useState } from "react";

const Form = () => {
  const [value, setValue] = useState("");

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  };

  return (
    <div>
      <h1>Form</h1>

      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange} type="text" />
      </form>
    </div>
  );
};

export default Form;
