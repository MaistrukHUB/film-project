import React from 'react';
import PropTypes from 'prop-types';


import { CategoryContainer } from '../components';

const ByGenre = ({ movies, categories }) => {
	return (
		<div className="content">
			<div>
				<CategoryContainer categories={categories} movies={movies} />
			</div>

		</div>
	);
};


ByGenre.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.object),
	movies: PropTypes.arrayOf(PropTypes.object),
	allNewCollection: PropTypes.arrayOf(PropTypes.object),
};


export default ByGenre;
