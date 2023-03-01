import React from 'react';
import { Link } from "react-router-dom";
import logoSvg from '../assets/img/logo.svg'
import { NawHeader, Search, HeaderLogin } from '../components';
import PropTypes from 'prop-types';

const Header = ({ navigation, categories, collections }) => {

	return (
		<header className="header">
			<div className="header__logo">
				<Link to='/'>
					<img width="38" src={logoSvg} alt="Movie logo" />
				</Link>
			</div>
			<NawHeader navigation={navigation} categories={categories} collections={collections} />
			<HeaderLogin />
			<Search />
		</header>
	);
};

Header.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.object),
};

export default Header;