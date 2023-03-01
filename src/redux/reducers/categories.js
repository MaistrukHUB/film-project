const initialState = {
	items: [
		{
			"name": "Бойовики",
			"type": "action",
			"img": "https://pbblogassets.s3.amazonaws.com/uploads/2019/07/12130642/John-Wick.jpg"
		},
		{
			"name": "Воєні",
			"type": "military",
			"img": "//images03.military.com/sites/default/files/styles/full/public/2022-03/brucewillisharts2.jpeg.jpg?itok=Y7kv1ypK"
		},
		{
			"name": "Детектив",
			"type": "dtective",
			"img": "https://cdn.i-scmp.com/sites/default/files/styles/landscape/public/d8/images/methode/2020/08/27/f2799cba-e78b-11ea-8600-abe4f45458c9_image_hires_130041.jpeg?itok=Yl_9PiKb&v=1598504451"
		},
		{
			"name": "Дитячиі",
			"type": "children's",
			"img": "https://lumiere-a.akamaihd.net/v1/images/663ac2acd3b4f22d65df59106adadc3f2414fe06.jpeg?region=0,0,450,450&width=320"
		},
		{
			"name": "Драма",
			"type": "drama",
			"img": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/a-star-is-born-everett-1651175088.jpg?crop=1xw:1xh;center,top&resize=480:*"
		},
		{
			"name": "Комедії",
			"type": "Comedy",
			"img": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-new-comedy-movies-2023-shotgun-wedding-1670275896.jpeg?crop=1xw:1xh;center,top&resize=480:*"
		},
		{
			"name": "Кримінал",
			"type": "Crime",
			"img": "https://www.hdclub.ua/files/film/small/smalli56a912e2bb0ad.jpg"
		},
		{
			"name": "Мелодрама",
			"type": "Melodrama",
			"img": "http://dic.academic.ru/pictures/wiki/files/50/200px-Titanic_%28Poster%29.jpg"
		},
		{
			"name": "Трейллер",
			"type": "Thriller",
			"img": "https://www.hdclub.ua/files/film/small/smalli5470aff339377.jpg"
		},
		{
			"name": "Жахи",
			"type": "Horror",
			"img": "https://www.mentoday.ru/upload/img_cache/0a8/0a8186c449fb050abfdcc9c6d6dfa76f_cropped_640x960.jpg"
		},
		{
			"name": "Фантастика",
			"type": "fantastic",
			"img": "https://ah.stopfilms.info/uploads/posts/2022-12/1670853963_avatar-2-put-vody-film-2022.jpg"
		},
		{
			"name": "Фэнтези",
			"type": "fantasy",
			"img": "https://upload.wikimedia.org/wikipedia/en/b/be/The_Lord_of_the_Rings_-_The_Return_of_the_King_%282003%29.jpg"
		}
	]
}

const categories = (state = initialState, action) => {
	if (action.type === 'SET_CATEGORIES') {
		return {
			...state,
			items: action.payload,
		}
	}
	return state

}

export default categories

