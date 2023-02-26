import axios from "axios";
import React, { useEffect, useState } from "react";
import Definition from "../components/Definition";
import FontMenu from "../components/Fontmenu";
import Header from "../components/Header";
import Input from "../components/Input";
import ThemeSwitch from "../components/ThemeSwitch";
import useFontChange from "../hooks/useFontChange";

const Dictionary = () => {
  const [word, setWord] = useState("");
  const [err, setErr] = useState("");
  const [result, setResult] = useState(null);
  const [font] = useFontChange();
  const handleInputChange = (e) => {
    const { value } = e.target;
    if (value === "") {
      setResult(null);
      setErr(null);
      setWord("");
    } else setWord(value);
  };
  useEffect(() => {
    const searchWord = async () => {
      setErr(false);
      await axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((result) => {
          setResult(result.data);
          setErr(null);
        })
        .catch((err) => {
          setResult(null);
          setErr(err.response.data.message);
        });
    };
    searchWord();
  }, [word]);

  // Responsive class names based on font selected and screen sizes
  let headerClassName;
  let secondaryClassName;
  if (font === "font-sans") {
    headerClassName = " leading-[38.73px]  md:leading-[77.45px]";
    secondaryClassName = "text-[16px] leading-[19.36px] md:leading-[24.2px]";
  }
  if (font === "font-serif") {
    headerClassName = " leading-[40.96px] md:text-[64px] md:leading-[81.92px]";
    secondaryClassName = "text-[16px] leading-[20.48px]  md:leading-[25.6px]";
  }
  if (font === "font-mono") {
    headerClassName = " leading-[33.57px] md:text-[64px] md:leading-[67.14px]";
    secondaryClassName = "text-[16px] leading-[16.78px]  md:leading-[20.98px]";
  }

  return (
    <div className="mx-2 lg:max-w-[736px] grid  lg:mx-auto">
      <Header>
        <FontMenu />
        <ThemeSwitch />
      </Header>
      <Input
        word={word}
        err={err}
        handleInputChange={handleInputChange}
        className={secondaryClassName}
      />
      <Definition
        data={result}
        setWord={setWord}
        err={err}
        className={[headerClassName, secondaryClassName]}
      />
    </div>
  );
};

export default Dictionary;
