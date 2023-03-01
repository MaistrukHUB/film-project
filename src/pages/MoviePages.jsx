import React from 'react';
import { useSelector, useDispatch } from "react-redux";

const MoviePages = () => {

	const { selectedMovie } = useSelector(({ selectedMovie }) => {
		return ({
			selectedMovie: selectedMovie.movie
		})
	})
	return (
		<div className='selectedMovie'>
			<div className="selectedMovie__item">
				<div className="selectedMovie__main">
					<img src={selectedMovie.imageUrl} alt="Poster" />

				</div>
				<div className="selectedMovie__body">
					<div className="selectedMovie__name"> <p>{selectedMovie.name} <span>({selectedMovie.Year})</span></p>
						<div className="selectedMovie__rating"> <p>{selectedMovie.ratingImdb} <span>IMDb</span></p></div>
					</div>
					<div className='selectedMovie__data-time'>
						<div className='selectedMovie__runtime data-time_title' >
							<p>Продовженість</p>
							<div>{selectedMovie.Runtime}</div>
						</div>
						<div className='selectedMovie__year  data-time_title'>
							<p>Рік випуску</p>
							<div>{selectedMovie.Year}</div>
						</div>
						<div className='selectedMovie__releasedr data-time_title' >
							<p>Прем'єра фільму в Україні</p>
							<div>{selectedMovie.Released}</div>
						</div>
					</div>
					<div className='selectedMovie__info'>
						<div className='selectedMovie__categories info-item'>
							<p>категорії:</p>
							<ul>
								{
									selectedMovie.categories.map((item, index) => (
										<li>{`${item} ${index < selectedMovie.categories.length - 1 && ","}`}</li>
									))
								}
							</ul>
						</div>
						<div className='selectedMovie__country info-item'><p>Країна:</p> <span> {selectedMovie.country}</span></div>
						<div className='selectedMovie__director info-item'>Режисер :{selectedMovie.Director}</div>
						<div className='selectedMovie__cast info-item'>
							<p>В ролях:</p>
							<ul>
								{
									selectedMovie.cast.map((item, index) => {
										if (index < 3) {
											return (
												<li>{item}</li>
											)
										}
										if (index === 3) {
											return (
												"..."
											)
										}
									})
								}
							</ul>

						</div>
						<div className='selectedMovie__collections  info-item' >
							підбірки: ----
						</div>
					</div>
					<div className="selectedMovie__about ">
						<div className='selectedMovie__about-title'>Про  що "{selectedMovie.name}"</div>
						<div className='selectedMovie__about-text'>{selectedMovie.about}</div>
					</div>
				</div>

			</div>
			<div className="selectedMovie__video">
				<iframe className='selectedMovie__video-item' src={selectedMovie.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</div>
		</div>
	);
}

export default MoviePages;
