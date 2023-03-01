import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Carousel } from "../components";
import { Movie, Collection } from "../components";




const CollectionsPages = ({ movies, collections }) => {
	return (
		<div className='content carousel'>
			{
				collections && collections.map((collection) => (
					<Collection movies={movies} collection={collection} />
				)
				)
			}
		</div >
	);
};


CollectionsPages.propTypes = {

};


export default CollectionsPages;
