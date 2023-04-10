import axios from "axios";
import { useEffect, useState } from "react";
import { debounce } from "lodash";

const useFetch = (word) => {
  const [err, setErr] = useState("");
  const [result, setResult] = useState(null);
  useEffect(() => {
    const searchWord = debounce(async () => {
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
    }, 500);
    searchWord();
  }, [word]);

  return [err, result, setResult, setErr];
};

export default useFetch;
