import React, { useState } from 'react';
import './App.css';
// Components
import Header from './components/Header/Header';
import CardMovie from './components/CardMovie/CardMovie';
import NoMovie from './components/NoMovie';

import TextField from '@mui/material/TextField';
import axios from 'axios';

const App = () => {
	const [inputText, setInputText] = useState('');
	const [movieData, setMovieData] = useState({});

	const handleOnChange = (e) => {
		setInputText(e.target.value);
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		const movieInput = inputText.toLowerCase().replace(/ /g, '');
		if (movieInput) {
			// axios(`https://omdbapi.com/?t=${movieInput}&apikey=af8636e`).then((res) =>
			// 	console.log(res.data)
			// );
			const getRequest = async () => {
				try {
					const resp = await axios(
						`https://omdbapi.com/?t=${movieInput}&apikey=af8636e`
					);
					// console.log(resp.data);
					setMovieData(resp.data);
				} catch (error) {
					// Handle Error Here
					console.log(error);
				}
			};
			getRequest();
			// Limpiamos el input despues de la búsqueda!
			setInputText('');
		}
	};

	return (
		<div className='App'>
			<Header />
			<form className='Form' onSubmit={handleOnSubmit}>
				<TextField
					placeholder='Buscar Usuario'
					variant='outlined'
					className='TextField'
					value={inputText}
					onChange={handleOnChange}
				/>
				<button className='btn'>Buscar</button>
			</form>
			{movieData.Title ? <CardMovie movieData={movieData} /> : <NoMovie />}
		</div>
	);
};

export default App;
