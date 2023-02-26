import { useEffect, useState } from "react";

const useFontChange = () => {
  const [font, setFont] = useState(
    localStorage.getItem("font") || "font-serif"
  );
  useEffect(() => {
    const currentFont = localStorage.getItem("font");
    // console.log(`This is the parsed result: ${currentFont.value}`);
    document.body.classList.remove(currentFont);
    localStorage.setItem("font", font);
    document.body.classList.add(font);
  }, [font]);
  return [font, setFont];
};

export default useFontChange;
