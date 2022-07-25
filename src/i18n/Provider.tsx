import React, { Fragment } from "react";
import { IntlProvider } from "react-intl";
import { LOCALES } from "./Locale";
import messages from "./messages/AllLang";

const Provider = ({ children, locale = LOCALES.ENGLISH }) => (
  <IntlProvider
    locale={locale}
    textComponent={Fragment}
    messages={messages[locale]}
  >
    {children}
  </IntlProvider>
);

export default Provider;
