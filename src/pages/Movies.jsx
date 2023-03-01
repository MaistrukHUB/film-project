import React from 'react';

import { Movie } from '../components';
import PropTypes from 'prop-types';



const Movies = ({ movies }) => {
	return (
		<div className='content'>
			<div className='Movies-container'>
				<h3>Фільми :</h3>
				<div className='movies'>
					{
						movies && movies.map((item) => (
							<Movie item={item} />
						))
					}
				</div>
			</div>
		</div>

	);
};


Movies.propTypes = {

};


export default Movies;
