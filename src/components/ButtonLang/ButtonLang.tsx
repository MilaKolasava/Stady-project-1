import React from "react";
import { LOCALES } from "../../i18n";
import getActive from "../../utils/getActive";
import "./ButtonLang.css";

interface ButtonsLangProps {
  setLocale: React.Dispatch<React.SetStateAction<string>>;
  locale: string;
}

function ButtonLang(props: ButtonsLangProps) {
  return (
    <>
      <div
        className={`button-change button-change-en ${getActive(
          props.locale,
          LOCALES.ENGLISH
        )}`}
        onClick={() => props.setLocale(LOCALES.ENGLISH)}
        data-testid="button-en"
      >
        EN
      </div>
      <div
        className={`button-change button-change-by ${getActive(
          props.locale,
          LOCALES.BELARUSIAN
        )}`}
        onClick={() => props.setLocale(LOCALES.BELARUSIAN)}
        data-testid="button-by"
      >
        BY
      </div>
      <div
        className={`button-change button-change-pl ${getActive(
          props.locale,
          LOCALES.POLISH
        )}`}
        onClick={() => props.setLocale(LOCALES.POLISH)}
        data-testid="button-pl"
      >
        PL
      </div>
    </>
  );
}

export default ButtonLang;
