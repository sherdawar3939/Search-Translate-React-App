import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ text, language }) => {
  const [translated, setTranslated] = useState("");
  const [debounceText, setDebounceText] = useState();
  useEffect(() => {
    const setTimerId = setTimeout(() => {
      setDebounceText(text);
    }, 500);
    return () => {
      clearTimeout(setTimerId);
    };
  }, [text]);
  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debounceText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [debounceText, language]);
  return (
    <div className="ui header">
      <h3>{translated}</h3>
    </div>
  );
};

export default Convert;
