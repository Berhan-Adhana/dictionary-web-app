import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");

    document.body.classList.remove(currentTheme);
    localStorage.setItem("theme", theme);
    document.body.classList.add(theme);
  }, [theme]);
  return [theme, setTheme];
};

export default useDarkMode;
