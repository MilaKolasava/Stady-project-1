import React, { Fragment } from "react";
import { IntlProvider } from "react-intl";
import { LOCALES } from "./Locales";
import messages from "./messages/AllLang";

interface ProviderProps {
  children: React.ReactNode;
  locale: string;
}

const Provider = ({ children, locale }: ProviderProps) => (
  <IntlProvider
    locale={locale}
    textComponent={Fragment}
    messages={messages[locale]}
  >
    {children}
  </IntlProvider>
);

export default Provider;
