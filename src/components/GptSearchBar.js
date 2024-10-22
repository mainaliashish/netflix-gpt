import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  let languageKey = useSelector((store) => store.config.lang);
  // console.log(languageKey)
  return (
    <div className="pt-[20%] flex justify-center">
      <form className="bg-black grid grid-cols-12 w-1/2">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[languageKey].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 m-4 bg-blue-600 text-white rounded-md col-span-3">
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
