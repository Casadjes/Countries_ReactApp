import { useState, useEffect } from "react";
import { CountryCard } from "./CountryCard";
import "./CountryCard.css";

export function CountryList() {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		fetchApi();
	}, []);

	const fetchApi = () => {
		fetch("https://restcountries.com/v3.1/all?limit=25")
			.then((res) => res.json())
			.then((data) => setCountries(data))
			.catch((error) => console.log(error));
	};

	return (
		<div className='card-list'>
			{countries.slice(0, 28).map((country) => (
				<CountryCard key={country.cca3} country={country} />
			))}
		</div>
	);
}
