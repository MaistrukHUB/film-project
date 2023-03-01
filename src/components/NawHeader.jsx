import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../redux/actions/category";
import { setSelectedCollection } from "../redux/actions/selectedCollection";

const NawHeader = ({ navigation, categories, collections }) => {

	React.useEffect(() => {
		document.body.addEventListener('click', handleOutsideClick);
	}, []);

	const [subCategoryClassName, setSubCategoryClassName] = React.useState('');
	const [checkClickArrow, setCheckClickArrow] = React.useState(true);
	const [addRotatedByArrow, setAddRotatedByArrow] = React.useState('');

	const popupRef = React.useRef();
	const bodyPopupRef = React.useRef();

	const removeClassName = () => {
		setAddRotatedByArrow('')
		setSubCategoryClassName('')
	}
	const addClassName = () => {
		setAddRotatedByArrow('rotated')
		setSubCategoryClassName('visible')
	}

	const handelArrow = () => {
		setCheckClickArrow(!checkClickArrow)
		if (checkClickArrow === true) {
			addClassName()
		} else {
			removeClassName()
		}
	}

	const handleOutsideClick = (event) => {
		const path = event.path || (event.composedPath && event.composedPath()) || event.composedPath(event.target)
		if (!path.includes(popupRef.current)) {
			removeClassName()
		}
		if (path.includes(bodyPopupRef.current)) {
			addClassName()
		}
	}

	const dispatch = useDispatch()

	const handleCategory = (category) => {
		dispatch(setCategory(category))
	}
	const preventDefault = (event) => {
		event.preventDefault()
	}

	const handelCollection = (type) => {
		dispatch(setSelectedCollection(type))
	}

	return (
		<ul className="header__naw">
			{
				navigation && navigation.map((item, index) => {
					if (item.type !== 'byGenre') {
						return (
							<li
								key={item.type}
							>
								<Link to={`${item.type}`} className={item.type}>
									{item.name}
								</Link>
							</li>
						)
					} else {
						return (
							<li
								key={item.type}
							>
								<Link to={`${item.type}`}
									className={item.type}>
									{item.name}
									<ul onClick={event => preventDefault(event)}
										ref={bodyPopupRef}
										className={`header__naw-popup ${subCategoryClassName}`}>
										{categories && categories.map((item, index) => (
											<li
												key={item.type}
											>
												<Link
													to={'/CategoryMovies'}
													onClick={() => handleCategory(item.type)}
												>
													{item.name}
												</Link>
											</li>
										))}
									</ul>
								</Link>
								<svg
									ref={popupRef}
									onClick={() => handelArrow()}
									className={addRotatedByArrow}
									width="10" height="10" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
										fill="#fff" />
								</svg>
							</li>
						)
					}
				})
			}
			{
				collections && collections.map((item, index) => {
					if (index < 3) {
						return (
							<li
								key={item.type}
							>
								<Link onClick={() => handelCollection(item.type)}
									to={`/SelectedCollection`}
									className={item.type}>
									{item.name}
								</Link>
							</li>
						)
					}
				})
			}
		</ul >
	);
}

NawHeader.propTypes = {
	naw: PropTypes.arrayOf(PropTypes.object),
	categories: PropTypes.arrayOf(PropTypes.object),
};
export default NawHeader;





