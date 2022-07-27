import React from "react";
import { LOCALES } from "../../i18n";
import "./ButtonLang.css";

interface ButtonsLangProps {
  setLocale: React.Dispatch<React.SetStateAction<string>>;
  locale: string;
}
function ButtonLang(props: ButtonsLangProps) {
  return (
    <>
      <div
        className="button-change button-change-en"
        onClick={() => props.setLocale(LOCALES.ENGLISH)}
      >
        EN
      </div>
      <div
        className="button-change button-change-by"
        onClick={() => props.setLocale(LOCALES.POLISH)}
      >
        BY
      </div>
      <div
        className="button-change button-change-pl"
        onClick={() => props.setLocale(LOCALES.BELARUSIAN)}
      >
        PL
      </div>
    </>
  );
}

export default ButtonLang;
