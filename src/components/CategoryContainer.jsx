import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../redux/actions/category";

import { InfoText } from "./index";

const CategoryContainer = ({ categories, movies }) => {
	const dispatch = useDispatch()

	const handleCategory = (category) => {
		dispatch(setCategory(category))
	}
	return (
		<div className="category-container">
			<h2 className='title-pages'></h2>
			<div className="picture-container-l picture-container">
				{
					categories && categories.map((item, index) => {
						if (index === 0) {
							return (
								<Link to={'/CategoryMovies'}
									onClick={() => handleCategory(item.type)}
									key={item.type}
									className="picture-item-l picture-item"
									style={{
										backgroundImage: `url(${item.img})`
									}}
								>
									<div className="picture-item__text">
										<p className="item-name">{item.name}</p>
										<p>Фільмів:
											<span>
												{
													movies.filter((movie) => {
														return (
															movie &&
															movie.categories &&
															Array.isArray(movie.categories) &&
															movie.categories.includes(item.type)
														)
													}).length
												}
											</span>
										</p>
									</div>
								</Link>
							)
						} else {
							return false
						}
					})
				}
			</div>
			<div className="picture-container-m picture-container">
				{
					categories && categories.map((item, index) => {
						if (index > 0 && index < 3) {
							return (
								<Link to={'/CategoryMovies'}
									onClick={() => handleCategory(item.type)}
									key={item.type}
									className="picture-item-m picture-item"
									style={{
										backgroundImage: `url(${item.img})`
									}}
								>
									<div className="picture-item__text">
										<p className="item-name">{item.name}</p>
										<p>Фільмів:
											<span>
												{
													movies && movies.filter((movie) => {
														return (
															movie &&
															movie.categories &&
															Array.isArray(movie.categories) &&
															movie.categories.includes(item.type)
														)
													}).length
												}
											</span>
										</p>
									</div>
								</Link>
							)
						} else {
							return false
						}
					})
				}
			</div>
			<div className="picture-container-s picture-container">
				{
					categories && categories.map((item, index) => {
						if (index > 2) {
							return (
								<Link to={'/CategoryMovies'}
									onClick={() => handleCategory(item.type)}
									key={item.type}
									className="picture-item-s picture-item"
									style={{
										backgroundImage: `url(${item.img})`
									}}
								>
									<div className="picture-item__text">
										<p className="item-name">{item.name}</p>
										<p>Фільмів:
											<span>
												{
													movies.filter((movie) => {
														return (
															movie &&
															movie.categories &&
															Array.isArray(movie.categories) &&
															movie.categories.includes(item.type)
														)
													}).length
												}
											</span>
										</p>
									</div>
								</Link>
							)
						} else {
							return false
						}
					})
				}
			</div>
			<InfoText />
		</div>
	);
}

CategoryContainer.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.object),
	movies: PropTypes.arrayOf(PropTypes.object),
};

export default CategoryContainer;
