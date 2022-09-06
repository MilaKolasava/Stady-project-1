import React, { useState } from "react";

type CityWeatherError = {
  response: any;
  message: string;
};

function getErrorView() {
  const [error, setError] = useState<CityWeatherError | null>(null);

  return (
    <div className="cityweather-errorView">
      <p>
        <b>Oh no, {error != null ? error.response.data.message : ""}.</b>
      </p>
    </div>
  );
}
export default getErrorView;
