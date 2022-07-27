import React from "react";
import { FormattedMessage } from "react-intl";

interface TranslateProps {
  id: string;
  value?: string;
}

function Translate(props: TranslateProps) {
  return <FormattedMessage id={props.id} />;
}

export default Translate;
