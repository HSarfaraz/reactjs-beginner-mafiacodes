import React, { useState } from "react";

const SimpleForm = () => {
  const [name, setName] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [favFruit, setFavFruit] = useState("MANGO");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted with values", { name, isChecked, favFruit });
  };
  return (
    <div>
      <h1>Simple Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /> <br />
        <label htmlFor="checkbox">Are you enjoying?</label>
        <input
          type="checkbox"
          id="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <br /> <br />
        <label htmlFor="favFruit">Favorite Fruit</label>
        <select
          id="favFruit"
          value={favFruit}
          onChange={(e) => setFavFruit(e.target.value)}
        >
          <option value="mango">Mango</option>
          <option value="bananas">Bananas</option>
          <option value="kiwi">Kiwi</option>
        </select>
        <br /> <br />
        <input type="submit" value="Submit Form" /> <br /> <br />
      </form>
    </div>
  );
};

export default SimpleForm;
