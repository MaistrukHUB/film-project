import React from 'react';
import { Movie } from '../components';
import { useSelector } from "react-redux";


const CategoryMovies = ({ movies }) => {
	const { category } = useSelector(({ category }) => {
		return ({
			category: category.byCategory
		})
	})
	return (
		<div>
			<h2>{category}</h2>
			<div className='content'>
				<div className='Movies-container'>
					<div className='movies'>
						{
							movies && movies.map((item) => {
								if (item.categories.includes(category)) {
									return (
										<Movie item={item}
										/>)
								}
							}
							)
						}
					</div>
				</div>
			</div>
		</div>
	);
}

export default CategoryMovies;
