import React,{ useState } from "react";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Header from "./components/Header";
import DropDown from "./components/DropDown";


const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];
const options = [
    {
      label: "The Color Red",
      value: "red",
    },
    {
      label: "The Color Green",
      value: "green",
    },
    {
      label: "A Shade of Blue",
      value: "blue",
    },
  ];
  

const App = () => {
    const [selected, setSelected] = useState(options[0])
  return (
    <div className={`ui container`}>
        <Header />
      <Route path={`/`}>
        <Accordion items={items} />
      </Route>
      <Route path={`/translate`}>
        <Translate />
      </Route>
      <Route path={`/list`}>
        <Search />
      </Route>
      <Route path={`/dropdown`}>
        <DropDown
          label={`Select a color`}
          selected={selected}
          onSelectChange={setSelected}
          options={options} 
         />
      </Route>
    </div>
  );
};

export default App;
