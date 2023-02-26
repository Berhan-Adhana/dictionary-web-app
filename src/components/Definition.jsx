import React from "react";
import Link from "./Link";
import List from "./List";
import LinkIcon from "../assets/images/icon-new-window.svg";
import Play from "./Play";
const Definition = ({ data, setWord, searchWord, err, className }) => {
  //Check if there is an audio file
  const audioFile =
    data &&
    (data[0]?.phonetics[0]?.audio === ""
      ? data[0]?.phonetics[1]?.audio
      : data[0]?.phonetics[0]?.audio);
  // console.log(audioFile);
  let audio = new Audio(data && audioFile);

  const start = () => {
    audio.play();
  };
  return (
    <>
      {data ? (
        <div className="mx-auto w-[95%] my-8">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h1
                className={`${className} dark:text-[var(--white-color)] mb-4 font-bold text-[32px] md:text-[64px]`}
              >
                {data[0]?.word}
              </h1>
              <p className="text-[var(--color-primary)]">{data[0]?.phonetic}</p>
            </div>
            {/* If the audio file does not exist then the play icon will not displayed */}
            {audioFile && <Play start={start} />}
          </div>

          {data?.map((def) => {
            return (
              <>
                {def.meanings?.map((m, index) => {
                  return (
                    <div key={index} className="mb-8">
                      <div className="flex gap-x-2 items-center mt-4">
                        <p className="text-[18px] font-bold dark:text-[var(--white-color)] ">
                          {m?.partOfSpeech}
                        </p>
                        <hr className=" bg-[var(--light-gray-color)] h-[.5] w-full" />
                      </div>
                      <div>
                        <p className="text-4 leading-5 font-[400] text-[var(--gray-color)] mt-5 ">
                          Meaning
                        </p>
                        <ul className="marker:text-[var(--color-primary)] list-disc pl-5 space-y-3 text-[var(--black-variant2-color)]">
                          {m?.definitions?.map((def, index) => {
                            return (
                              <>
                                <List
                                  key={index}
                                  definition={def?.definition}
                                  example={def?.example}
                                />
                                {def?.synonyms?.length > 0 ? (
                                  <div>
                                    <span className="text-[16px] leading-5 md:text-[18px] font-bold text-[var(--gray-color)] ">
                                      Synonyms:{" "}
                                    </span>

                                    {def?.synonyms?.map((synonym, index) => (
                                      <Link
                                        key={index}
                                        className={className[1]}
                                        onClick={(e) => {
                                          setWord(synonym);
                                        }}
                                      >
                                        {synonym}
                                      </Link>
                                    ))}
                                  </div>
                                ) : null}
                                {def?.antonyms?.length > 0 ? (
                                  <div>
                                    <span className="text-[16px] font-semibold text-[var(--gray-color)] ">
                                      Antonyms:
                                    </span>{" "}
                                    {def?.antonyms?.map((antonym, index) => (
                                      <Link
                                        key={index}
                                        className={className[1]}
                                        onClick={(e) => {
                                          setWord(antonym);
                                          // e.preventDefault();
                                        }}
                                      >
                                        {antonym}
                                      </Link>
                                    ))}
                                  </div>
                                ) : null}
                              </>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  );
                })}

                {/* Source urls */}
                {def?.sourceUrls.length > 0 ? (
                  <span className="text-[14px] font-semibold text-[var(--gray-color)] underline mb-2 inline-block">
                    Source:{" "}
                  </span>
                ) : (
                  ""
                )}
                {def?.sourceUrls.length > 0
                  ? def?.sourceUrls.map((url, index) => {
                      return (
                        <div
                          key={index}
                          className="flex justify-center items-center gap-x-2 "
                        >
                          <a
                            href={url}
                            target="_blank"
                            className="text-[var(--gray-color)] font-semibold text-[14px] underline"
                            key={index}
                            rel="noreferrer"
                          >
                            {url}
                          </a>
                          <img src={LinkIcon} alt="" />
                        </div>
                      );
                    })
                  : null}
              </>
            );
          })}
        </div>
      ) : (
        // if there is an error response from the backend
        err && (
          <div className="my-8 text-center">
            <p>😕</p>
            <h4 className="dark:text-[var(--white-color)]">
              {err && "No Definitions Found"}
            </h4>
            <p className="mt-2 text-[var(--gray-color)]">{err}</p>
          </div>
        )
      )}
    </>
  );
};

export default Definition;
