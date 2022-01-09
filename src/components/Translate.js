import React, { useState } from "react";
import DropDown from "./DropDown";
import Convert from "./Convert";
const options = [
  {
    label: "African",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Urdu",
    value: "ur",
  },
  {
    label: "Pashto",
    value: "ps",
  }
];
const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)}></input>
        </div>
      </div>
      <DropDown
        label="Select a languga"
        options={options}
        selected={language}
        onSelectChange={setLanguage}
      />
      <hr />
      <h3 className="header">Out put</h3>
      <Convert text={text} language={language} />
    </div>
  );
};
export default Translate;
