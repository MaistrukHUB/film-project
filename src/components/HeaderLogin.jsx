import React from 'react';
import logoSvg from '../assets/img/logo.svg'
import { useSelector, useDispatch } from "react-redux";
import { setSelectedUser } from "../redux/actions/selectedUser";
import { setUsers } from "../redux/actions/users";
import { Link } from 'react-router-dom';


const HeaderLogin = () => {

	const dispatch = useDispatch()

	const [byLoginNameUser, setByLoginNameUser] = React.useState('');
	const [byLoginPasswordUser, setByLoginPasswordUser] = React.useState('');
	const [enderError, setEnderError] = React.useState('');
	const [userButtons, setUserButtons] = React.useState('');
	const [checkLoginPasswordUser, setCheckLoginPasswordUser] = React.useState('');
	const [activeUserWindow, setActiveUserWindow] = React.useState('');
	const [activeRegisteringItem, setActiveRegisteringItem] = React.useState('');
	const [activeLoginItem, setActiveLoginItem] = React.useState('');
	const [userShow, setUserShow] = React.useState('');
	const [notSamePass, setNotSamePass] = React.useState('');
	const [sameUser, setSameUser] = React.useState('');
	const [lengthSelectedMovies, setLengthSelectedMovies] = React.useState('');

	const { users, selectedUser } = useSelector(({ users, selectedUser }) => {
		return ({
			users: users.items,
			selectedUser: selectedUser.item
		})
	})

	const buttonLoginRef = React.useRef();
	const buttonRegisteringRef = React.useRef();
	const UserWindowRef = React.useRef();

	React.useEffect(() => {
		document.body.addEventListener('click', handleOutsideClick);
	}, []);

	const handleOutsideClick = (event) => {
		const path = event.path || (event.composedPath && event.composedPath()) || event.composedPath(event.target)

		if (!((path.includes(buttonLoginRef.current)) || (path.includes(buttonRegisteringRef.current)) || (path.includes(UserWindowRef.current)))) {
			setActiveUserWindow('')
		}
	}

	const handleLogin = (event) => {
		preventDefault(event)
		setActiveUserWindow('_active')
		setActiveLoginItem('_active')
		setActiveRegisteringItem('')
	}

	const handleRegistering = (event) => {
		preventDefault(event)
		setActiveUserWindow('_active')
		setActiveRegisteringItem('_active')
		setActiveLoginItem('')
	}
	const toRegister = (event) => {
		event.preventDefault()
		if (byLoginPasswordUser === checkLoginPasswordUser) {
			setNotSamePass('')
			if (users.find((user) => user.name === byLoginNameUser)) {
				setSameUser('_active')
			} else {
				setSameUser('')
				dispatch(setUsers(
					[...users,
					{
						"name": byLoginNameUser,
						"pass": checkLoginPasswordUser,
						"selectedFilms": []
					}]
				))
				setActiveLoginItem('_active')
				setActiveRegisteringItem('')
			}
		}
		else {
			setNotSamePass('_active')
		}
	}


	const preventDefault = (event) => {
		event.preventDefault()
	}

	const handleEnter = (event) => {
		preventDefault(event)
		const user = users.find((user) => user.name === byLoginNameUser && user.pass === byLoginPasswordUser)
		if (user === undefined) {
			setEnderError('_active')
		} else {
			setEnderError('')
			dispatch(setSelectedUser(user))
			setActiveUserWindow('')
			setUserButtons('_disable')
			setUserShow('_active')
			setLengthSelectedMovies(selectedUser.selectedFilms.length)
		}
	}
	const handleExit = (event) => {
		preventDefault(event)
		dispatch(setSelectedUser({}))
		setUserButtons('')
		setUserShow('')
	}
	return (
		<div className={`user`}>
			<div className={`user__show ${userShow}`}>
				<p>КОРИСТУВАЧ:<span>{selectedUser.name}</span></p>
				<Link
					to={'/SelectedMovies'}
					href='#'
					className={`icon_selectedMovies  btn`}
				>
					{selectedUser && selectedUser.selectedFilms && selectedUser.selectedFilms.length}
					<svg xmlns="http://www.w3.org/2000/svg" version="1.2">
						<polygon points="12,3 6,21 21,9 3,9 18,21" />
					</svg>
				</Link  >
				<a
					ref={buttonRegisteringRef}
					onClick={event => handleExit(event)}
					href='#'
					className={`button_registration btn-border btn`}
				>
					ВИХІД
				</a>
			</div>
			<div className={`user__buttons ${userButtons}`}>
				<a
					ref={buttonLoginRef}
					onClick={event => handleLogin(event)}
					href='#'
					className={`button_login btn-blue btn`}
				>
					ВХІД
				</a>
				<a
					ref={buttonRegisteringRef}
					onClick={event => handleRegistering(event)}
					href='#'
					className={`button_registration btn-border btn`}
				>
					РЕГИСТРАЦІЯ
				</a>
			</div>
			<div
				ref={UserWindowRef}
				className={`user__window ${activeUserWindow}`}>
				<div className='logo'>
					<img src={logoSvg} alt="" />
				</div>
				<div className={`user__form`}>
					<div className="user__form_bg"></div>
					<div className="form__inputs">
						<input
							onChange={event => setByLoginNameUser(event.target.value)}
							className={`input_form`}
							type="text"
							placeholder='Name'
						/>
						<input
							onChange={event => setByLoginPasswordUser(event.target.value)}
							className={`input_form`}
							type="password"
							placeholder='Password'
						/>
						<input
							onChange={event => setCheckLoginPasswordUser(event.target.value)}
							className={`input_form input-by-check-true-pass ${activeRegisteringItem}`}
							type="password"
							placeholder='Password again'
						/>
					</div>
					<p className={`enter-error error ${enderError}`}> Не вірне ім'я або пароль</p>
					<div className={`form_buttons enter  ${activeLoginItem}`}>
						<a
							onClick={event => handleEnter(event)}
							href='#'
							className={`button_enter btn-blue btn`}
						>
							УВІЙТИ
						</a>
						<a
							onClick={event => handleRegistering(event)}
							href='#'
							className={`button_registration btn-border btn`}
						>
							РЕГИСТРАЦІЯ
						</a>
					</div>
					<div className={`error_notSamePass error ${notSamePass}`}>
						Паролі не співавдвють
					</div>
					<div className={`error_sameUser error ${sameUser}`}>
						Користувач з таким ім'ям вже існує
					</div>
					<div className={`form_buttons registering ${activeRegisteringItem}`}>
						<a
							onClick={event => toRegister(event)}
							href='#'
							className={`button_registration btn-border btn`}
						>
							ЗАРЕЄСТРУВАТИСЬ
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeaderLogin;
