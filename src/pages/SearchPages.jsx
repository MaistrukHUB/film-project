import React from 'react';
import { Movie } from '../components';
import { useSelector, useDispatch } from "react-redux";

const SearchPages = ({ movies }) => {
	const { search } = useSelector(({ search }) => {
		return ({
			search: search.bySearch
		})
	})
	return (
		<div className='search'>
			<h2 className='title-pages'>Ви шукали: {search}</h2>
			<div className='content'>
				<div className='Movies-container'>
					<div className="movies">
						{
							movies && movies.map((item) => {
								if (item.name.includes(search)) {
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

export default SearchPages;
