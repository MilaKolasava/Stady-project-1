import React from "react";
import { useIntl } from "react-intl";

interface CityWeatherErrorView {
  error: any;
}

function CityWeatherErrorView(props: CityWeatherErrorView) {
  const intl = useIntl();

  return (
    <div className="cityweather-errorView">
      <p>
        <b>
          {props.error != null &&
          props.error.response.data.message == "city not found"
            ? `${intl.formatMessage({ id: "error" })}`
            : intl.formatMessage({ id: "errorAnother" })}
        </b>
      </p>
    </div>
  );
}
export default CityWeatherErrorView;
