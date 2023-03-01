import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Movie } from '../components';


const SelectedCollection = ({ movies }) => {
	const { selectedCollection } = useSelector(({ selectedCollection }) => {
		return ({
			selectedCollection: selectedCollection.bySelectedCollection
		})
	})

	return (
		<div className='content'>
			<div className='Movies-container'>
				<h3>{selectedCollection}</h3>
				<div className='movies'>
					{
						movies && movies.map((item) => {
							if (item.collections.includes(selectedCollection)) {
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
	);
}

export default SelectedCollection;
