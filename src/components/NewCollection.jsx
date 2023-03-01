import React from 'react';
import PropTypes from 'prop-types';

const NewCollection = ({ newCollection }) => {
	return (
		<div className="new-collection">
			<div className="sidebar__title">
				<p>Нові колекції</p>
			</div>
			{
				newCollection && newCollection.map((item, index) => (
					<a key={`${item}_${index}`} href="#" className="new-collection__item">
						<div className="new-collection__img">
							<img src={item.img} alt="" />
						</div>
						<div className="new-collection__text">
							<div className="new-collection__time">
								<div className="img">SVG</div>
								<p className="new-collection__when">{item.time}</p>
							</div>
							<div className="new-collection__about">
								<p>{item.about}</p>
							</div>
						</div>
					</a>
				))
			}
		</div>
	);
}
NewCollection.propTypes = {
	allNewCollection: PropTypes.arrayOf(PropTypes.object),
};

export default NewCollection;
