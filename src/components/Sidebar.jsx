import React from 'react';
import { Carousel, NewCollection } from "../components";
import SidebarBG from "../assets/img/sidebar-bg.png";

const Sidebar = ({ newCollection }) => {
	return (
		<div className="sidebar">
			<NewCollection newCollection={newCollection} />
			<div className="sidebar">
				<Carousel moveToWidth={525} itemsInPages={1} heightCarousel={650}>
					<div className="carousel-item  sidebar-carousel_item" style={{
						backgroundImage: `url(${SidebarBG})`,
					}}>
						<div className="carousel__text">
							<p>Кращі <br /> сериали <br /> 2015-2021 років</p>
						</div>
						<a className="carousel__button" href="#">Дивитись</a>
					</div>
					<div className="carousel-item  sidebar-carousel_item" style={{
						backgroundImage: `url(${SidebarBG})`,
					}}><p>item2</p></div>
					<div className="carousel-item  sidebar-carousel_item" style={{
						backgroundImage: `url(${SidebarBG})`,
					}}><p>item3</p></div>
					<div className="carousel-item  sidebar-carousel_item" style={{
						backgroundImage: `url(${SidebarBG})`,
					}}><p>item4</p></div>

				</Carousel>
				{/* <div className="sidebar__title">
					<p>Популярні колекції</p>
				</div>
				<div className="carousel__img"
				style="background-image:  url('/src/img/carousel/carousel.jpg')"
				>
					<div className="carousel__text">
						<p>Кращі сериали 2015-2021 років</p>
					</div>
					<a className="carousel__button" href="#">Дивитись</a>
				</div> */}
			</div>
		</div>
	);
}

export default Sidebar;
