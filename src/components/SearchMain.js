import React, { useState, useEffect } from "react";
import WeatherDetails from "./WeatherDetails";
const SearchMain = () => {
	const [search, setSearch] = useState("");
	const [weatherTempInfo, setWeatherTempInfo] = useState({});

	const searchInputChange = (e) => {
		setSearch(e.target.value);
	};

	useEffect(() => {
		console.log("okay");
	}, []);

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			getWeatherInfo();
		}
	};

	const getWeatherInfo = async (req, res) => {
		try {
			const weatherData = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=34038e191f4c141d887a04715f6c18f6`
			)
				.then((res) => res.json())
				.then((data) => {
					const { name } = data;
					const { temp, humidity, pressure } = data.main;
					const { main: weatherType } = data.weather[0];
					const { country, sunset } = data.sys;
					const { speed } = data.wind;

					const myNewWeatherInfo = {
						temp,
						humidity,
						pressure,
						name,
						weatherType,
						country,
						speed,
						sunset,
					};

					setWeatherTempInfo(myNewWeatherInfo);
				});
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<div className="wrap">
				<div className="search">
					<input
						type="search"
						placeholder="Enter City name ..."
						id="search"
						onChange={searchInputChange}
						value={search}
						onKeyPress={handleKeyPress}
					/>
					<button className="searchButton" onClick={getWeatherInfo}>
						Search
					</button>
				</div>
			</div>
			<WeatherDetails {...weatherTempInfo} />
		</>
	);
};

export default SearchMain;
