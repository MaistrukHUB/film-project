import React from 'react';
import { MainCarousel, Carousel, Movie, Sidebar } from "../components";

const Home = ({ movies }) => {

	const moviesSortByDate = [...movies].sort((movies1, movies2) => {
		if ((movies1 = new Date(movies1.Released)) < (movies2 = new Date(movies2.Released))) {
			console.log(movies1)
			return 0
		}
		return -1
	})


	const moviesSortByRating = [...movies].sort((movie1, movie2) => {
		if (movie1.ratingImdb < movie2.ratingImdb) {
			return 0
		}
		return -1
	})

	return (
		<div className='content'>
			<MainCarousel />
			<div className='about-carousel'>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non molestiae accusantium dolorum eius corrupti, pariatur minima tenetur maiores ratione quidem itaque laborum explicabo illo nemo commodi neque facilis iusto voluptatibus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem eligendi hic saepe cumque adipisci eos rem quos optio, nulla sint tempore aut, error perspiciatis eum, enim accusantium veniam est pariatur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum eaque ipsa vero fugiat consequuntur earum omnis, animi, deleniti voluptate, magnam pariatur. Dignissimos cupiditate nesciunt delectus culpa rem laudantium fugiat dolor. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae corrupti sequi reiciendis omnis odit. Expedita qui similique ullam hic cum ipsa temporibus? Blanditiis, repudiandae aut. Adipisci quod sequi nemo. Aperiam?</p>
			</div>
			<div className='carousel-bestMovies'>
				<h3 className='carousel-bestMovies__title'>
					Кращі фільми:
				</h3>
				<hr />
				<Carousel moveToWidth={424} itemsInPages={3} heightCarousel={580}>
					{
						moviesSortByRating && moviesSortByRating.map((item, index) => (
							<Movie item={item} />
						)
						)
					}
				</Carousel>
			</div>
			<div className='carousel-'>
				<h3 className='carousel-bestMovies__title'>
					Найновіші фільми:
				</h3>
				<hr />
				<Carousel moveToWidth={424} itemsInPages={3} heightCarousel={580}>
					{
						moviesSortByDate && moviesSortByDate.map((item, index) => (
							<Movie item={item} nameSelector={''} />
						))
					}
				</Carousel>
			</div>
		</div >
	);
};


Home.propTypes = {

};


export default Home;
