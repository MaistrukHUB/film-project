import React from 'react';
import { Link } from 'react-router-dom';
import { setSelectedMovie } from "../redux/actions/selectedMovie";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedUser } from "../redux/actions/selectedUser";

const Movie = ({ item, nameSelector, selectedSide }) => {
	const dispatch = useDispatch()

	const handleMovie = (movie) => {
		dispatch(setSelectedMovie(movie))
	}

	const { selectedUser, selectedFilms } = useSelector(({ selectedUser }) => {
		return ({
			selectedUser: selectedUser.item,
			selectedFilms: selectedUser.item.selectedUser
		})
	})
	console.log(selectedFilms)
	const handleAddToSelected = (event) => {
		event.preventDefault()
		const isInList = selectedUser.selectedFilms.find((film) => film.id === item.id)
		if (!isInList) {
			dispatch(setSelectedUser({
				...selectedUser,
				selectedFilms: [...selectedUser.selectedFilms, item]
			}))
			// selectedUser.selectedFilms = ([...selectedUser.selectedFilms, item])
		}
	}
	const handleRemove = (event) => {
		event.preventDefault()
		dispatch(setSelectedUser({
			...selectedUser,
			selectedFilms: selectedUser.selectedFilms.filter((film) => film.id !== item.id)
		}))
		// selectedUser.selectedFilms = selectedUser.selectedFilms.filter((film) => film.id !== item.id)
	}

	return (
		<div className={`movie-item ${nameSelector}`}>
			<div className='movie-item__img'
				style={{
					backgroundImage: `url(${item.imageUrl})`
				}}>
				<div className='movie-item__img-hover'>
					<Link to={'moviePages'}
						onClick={() => handleMovie(item)}
						className='movie-item__button-watch'>
						<svg
							width="10" height="10" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
								fill="#fff" />
						</svg>
					</Link>
					<a href='#' onClick={event => handleAddToSelected(event)} className={`movie-item__button-addToSelected ${selectedSide}`}>
						ДО ОБРАНОГО
						<svg xmlns="http://www.w3.org/2000/svg" version="1.2">
							<polygon points="12,3 6,21 21,9 3,9 18,21" />
						</svg>
					</a>
					<a href='#' onClick={event => handleRemove(event)} className={`movie-item__button-remove remove ${selectedSide}`}>
						ВИДАЛИТИ
					</a>
				</div>
				<div className='movie-item__rating'>
					svg <p>{item.ratingImdb}</p>
				</div>
			</div>
			<div className='movie-item__text'>
				<div className='movie-item__name'>
					<p>{item.name}</p>
				</div>
				<div className='movie-item__info'>
					<p>{item.Released}, </p>
					<p>{item.categories[0]}, </p>
					<p>{item.country}</p>
				</div>
			</div>
		</div>
	)
}

export default Movie;
