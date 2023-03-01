import React from 'react';
import { Link } from "react-router-dom";
import logoSvg from '../assets/img/logo.svg'
import { NawHeader, Search } from '../components';
import PropTypes from 'prop-types';


const Footer = ({ navigation }) => {
	return (
		<footer className="footer">
			<div className="footer__naw">
				<div className="footer__logo">
					<Link to={'/'}>
						<img src={logoSvg} alt="Movie logo" />
					</Link>
				</div>
				<div className="footer__menu">
					<div className="footer__menu-title">
						<p>меню</p>
					</div>
					<ul className="footer__menu-category">
						{
							navigation && navigation.map((item, index) => (
								<li key={item.type}> <Link to={`${item.type}`}>{item.name}</Link></li>
							))
						}
					</ul>
				</div>
				<div className="footer__about">
					<div className="footer__about-title">
						<p>
							Про нас
						</p>
					</div>
					<div className="footer__about-text">
						<p>
							Знаючи все про кіно, хочеться поділитись цим з іншими. Діліться фільмами, трейлерами, персонами
							та
							новинами у соціальних мережах, привласнюйте рейтинги фільмам та обговорюйте їх з друзями та
							передплатниками!
							<p>
								Цікаві фільми, найближчі кінотеатри та улюблених акторів можна додавати до «Вибраного».
								Система
								покаже всі пов'язані з ними новини та нові трейлери, підкаже, коли можна купити квиток до
								кіно
								на прем'єру, що цікавить. Приєднуйтесь!
							</p>
						</p>
					</div>
				</div>
			</div>
			{/* <hr> */}
			<div className="footer__underbar">
				<div className="footer__underbar-est">
					<p>
						©Все права защищены MovieDB.ru 2021
					</p>
				</div>
				<div className="footer__underbar-icon">
					<a href="#" className="footer__underbar-facebook">
						{/* <img src="/src/img/icon/iconFacebook.svg" alt=""> */}
					</a>
					<a href="#" className="footer__underbar-istagram">
						{/* <img src="/src/img/icon/iconeInstagram.svg" alt=""> */}
					</a>
				</div>
				<div className="footer__underbar-privacy">
					<Link to={'/'}>Политика конфиденциальности</Link>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
