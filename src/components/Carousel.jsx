import React, { Children, cloneElement } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"


const Carousel = ({ children, moveToWidth, itemsInPages, heightCarousel }) => {
	const [pages, setPages] = React.useState();
	const [offSet, setOffSet] = React.useState(0);

	React.useEffect(() => {
		setPages(
			Children.map(children, child => {
				return cloneElement(child, {
					style: {
						height: '100%',
						minWidth: '100%',
						maxWidth: '100%',
					}
				})
			}))
	}, []);
	const handleArrowLeft = () => {
		setOffSet((currentMoveToWidth) => {
			const newOffSet = currentMoveToWidth + moveToWidth
			console.log(newOffSet)
			return Math.min(newOffSet, 0)
		})
	}
	const handleArrowRight = () => {
		if ((children.length >= 3)) {
			setOffSet((currentMoveToWidth) => {
				const newOffSet = currentMoveToWidth - moveToWidth
				const maxOffSet = -(moveToWidth * (children.length - itemsInPages))
				console.log(newOffSet, maxOffSet)
				return Math.max(newOffSet, maxOffSet)
			})
		}
	}

	return (
		<div className='main-container-carousel' style={{
			height: `${heightCarousel}px`,
		}}>
			<FaChevronLeft className='arrow' onClick={handleArrowLeft} />
			<div className='window-carouses'>
				<div className="all-pages-container "
					style={{
						transform: `translateX(${offSet}px)`
					}}>
					{children}
				</div>
			</div>
			<FaChevronRight className='arrow' onClick={handleArrowRight} />
		</div>
	);
}

export default Carousel;


