import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import noImage from './no-image.png';

const CardMovie = ({ movieData }) => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component='img'
				image={movieData.Poster !== 'N/A' ? movieData.Poster : noImage}
				alt='green iguana'
			/>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{movieData.Title}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{movieData.Year}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{movieData.Plot}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default CardMovie;
