import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Movie } from "../components";

const SelectedMovies = () => {

	const { selectedUser } = useSelector(({ selectedUser }) => {
		return ({
			selectedUser: selectedUser.item
		})
	})
	return (
		<div

			className='selectedUser'>
			<h3>Обрані фільми :</h3>
			<div className='movies '>
				{
					selectedUser.selectedFilms && selectedUser.selectedFilms.map((item) => (
						<Movie item={item} selectedSide={"selectedSide"} />
					))
				}
			</div>
		</div>

	);
}

export default SelectedMovies;
