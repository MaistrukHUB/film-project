import React from 'react';
import { Carousel } from "../components";
import CarouselBG from "../assets/img/MainCarousel.png";
import CarouselBG2 from "../assets/img/MainCarousel2.png";

const MainCarousel = () => {
	return (
		<Carousel moveToWidth={1312} itemsInPages={1} heightCarousel={450}>
			<div className='carousel-item  main-item ' style={{
				backgroundImage: `url(${CarouselBG})`,
			}}>Найкращі <br /> фільми <br /> всіх<br />  часів</div>
			<div className='carousel-item  main-item' style={{
				backgroundImage: `url(${CarouselBG2})`,
			}}>item2</div>
			<div className='carousel-item  main-item' style={{
				backgroundImage: `url(${CarouselBG})`,
			}}>item3</div>
			<div className='carousel-item  main-item' style={{
				backgroundImage: `url(${CarouselBG2})`,
			}}>item4</div>
		</Carousel >
	);
}

export default MainCarousel;
