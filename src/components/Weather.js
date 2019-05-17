import React from "react";

const Weather = props => (
  <div className="weather__info">
    {props.city && props.country && (
      <>
        <p className="weather__key">
          Location:
          <span className="weather__value">
            {" "}
            {props.country}, {props.city}
          </span>
        </p>

        <p className="weather__key">
          Temperature:
          <span className="weather__value"> {props.temperature}</span>
        </p>

        <p className="weather__key">
          Humidity:<span className="weather__value"> {props.humidity}</span>
        </p>

        <p className="weather__key">
          Conditions:
          <span className="weather__value"> {props.description}</span>
        </p>
      </>
    )}
    {props.error && <p className="weather__key">{props.error}</p>}
  </div>
);

export default Weather;
