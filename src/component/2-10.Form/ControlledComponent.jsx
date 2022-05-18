import React, { useState } from "react";

export default function ControlledComponent() {
  const [name, setName] = useState("");
  const [essay, setEssay] = useState("please write an essay about your ");
  const [select, setSelect] = useState("coconut");

  function handleChange(event) {
    const name = event.target.name;
    if (name === "name") {
      setName(event.target.value);
    }
    if (name === "essay") {
      setEssay(event.target.value);
    }
    if (name === "select") {
      setSelect(event.target.value);
    }
  }
  //   function handleEssayChange(event) {
  //     setEssay(event.target.value);
  //   }
  //   function handleSelectChange(event) {
  //     setSelect(event.target.value);
  //   }

  function handleSubmit(event) {
    alert("name: " + name + ", essay " + essay + ",flavor " + select);
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} name="name" onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Essay:
        <textarea value={essay} name="essay" onChange={handleChange} />
      </label>

      <br />
      <br />
      <label>
        Pick your favorite flavor:
        <select value={select} name="select" onChange={handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}
