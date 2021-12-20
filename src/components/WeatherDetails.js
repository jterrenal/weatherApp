import React, { useState, useEffect } from "react";

const WeatherDetails = ({
	name,
	temp,
	humidity,
	pressure,
	weatherType,
	country,
	speed,
	sunset,
}) => {
	const [weatherState, setWeatherState] = useState("");

	useEffect(() => {
		if (weatherType) {
			if (weatherType === "Clouds") return setWeatherState("wi-day-cloudy");
			else if (weatherType === "Haze") return setWeatherState("wi-fog");
			else if (weatherType === "Clear") return setWeatherState("wi-day-sunny");
			else if (weatherType === "Mist") return setWeatherState("wi-dust");
			else if (weatherType === "Rain") return setWeatherState("wi-day-rain");
			else if (weatherType === "Snow") return setWeatherState("wi-day-snow");
			else return setWeatherState("wi-day-sunny");
		}
	}, [weatherType]);

	//converting the seconds in time
	let sec = sunset;
	let date = new Date(sec * 1000);
	let timeStr = `${date.getHours()}: ${date.getMinutes()}`;

	return (
		<>
			<article className="widget">
				<div className="weatherIcon">
					<i className={`wi ${weatherState}`}></i>
				</div>
				<div className="weatherInfo">
					<div className="temperature">
						<span>{temp}&deg;</span>
					</div>
					<div className="description">
						<div className="weatherCondition">{weatherType}</div>
						<div className="place">
							{name}, {country}
						</div>
					</div>
				</div>
				<div className="date">{new Date().toLocaleString()}</div>

				<div className="extra-temp">
					<div className="temp-info-minmax">
						<div className="two-sided-section">
							<p>
								<i className={"wi wi-sunset"}></i>
							</p>
							<p className="extra-info-leftside">
								{timeStr} PM <br /> Sunset
							</p>
						</div>

						<div className="two-sided-section">
							<p>
								<i className={"wi wi-humidity"}></i>
							</p>
							<p className="extra-info-leftside">
								{humidity}% <br /> Humidity
							</p>
						</div>
					</div>

					<div className="temp-info-minmax">
						<div className="two-sided-section">
							<p>
								<i className={"wi wi-rain"}></i>
							</p>
							<p className="extra-info-leftside">
								{pressure} <br /> Pressure
							</p>
						</div>

						<div className="two-sided-section">
							<p>
								<i className={"wi wi-strong-wind"}></i>
							</p>
							<p className="extra-info-leftside">
								{speed} mph <br /> Speed
							</p>
						</div>
					</div>
				</div>
			</article>
		</>
	);
};

export default WeatherDetails;
