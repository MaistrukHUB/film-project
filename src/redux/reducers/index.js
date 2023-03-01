import { combineReducers } from 'redux'

import category from "./category";
import movies from "./movies";
import newCollection from "./newCollection";
import navigation from "./navigation";
import categories from "./categories";
import collections from "./collections";
import selectedMovie from "./selectedMovie";
import search from "./search";
import selectedCollection from "./selectedCollection";
import users from "./users";
import selectedUser from "./selectedUser";

const rootReducer = combineReducers({
	category,
	collections,
	movies,
	newCollection,
	navigation,
	categories,
	selectedMovie,
	search,
	selectedCollection,
	users,
	selectedUser
})

export default rootReducer