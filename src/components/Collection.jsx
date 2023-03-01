import React from 'react';
import { Movie, Carousel } from "../components";

const Collection = ({ movies, collection }) => {

	const _movies = []
	for (let i = 0; i < movies.length; i++) {
		if (movies[i].collections.includes(collection.type)) {
			_movies.push(movies[i])
		}
	}

	return (
		<div className='collection' >
			<h3>{collection.name}</h3>
			<Carousel moveToWidth={424} itemsInPages={3} heightCarousel={580} >
				{
					_movies && _movies.map((item) => (
						<Movie item={item} nameSelector={''} />
					)
					)
				}
			</Carousel>
		</div>
	);
}

export default Collection;
