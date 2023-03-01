import React from "react";
import axios from "axios";
import { Route } from 'react-router-dom';
import { Header, Sidebar, Footer } from './components';
import { Home, SelectedMovies, Movies, ByGenre, Collections, SelectedCollection, MoviePages, CategoryMovies, SearchPages } from './pages';

import { setMovies } from "./redux/actions/movies";
import { setUsers } from "./redux/actions/users";
import { setNewCollection } from "./redux/actions/newCollection";
import { setCollections } from "./redux/actions/collections";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch()
  const { movies, newCollection, collections, navigation, categories, users } = useSelector(({ movies, newCollection, collections, navigation, categories, users }) => {
    return ({
      movies: movies.items,
      newCollection: newCollection.items,
      navigation: navigation.items,
      categories: categories.items,
      collections: collections.items,
      users: users.users,
    })
  })

  React.useEffect(() => {
    axios.get('http://localhost:3000/bd.json').then(({ data }) => {
      dispatch(setMovies(data.movies))
    });
    axios.get('http://localhost:3000/bd.json').then(({ data }) => {
      dispatch(setNewCollection(data.newCollection))
    })
    axios.get('http://localhost:3000/bd.json').then(({ data }) => {
      dispatch(setCollections(data.collection))
    })
    axios.get('http://localhost:3000/bd.json').then(({ data }) => {
      dispatch(setUsers(data.users))
    })
  }, [])

  return (
    <div className="App">
      <div className="wrapper">
        <div className="wrapper-bg">
        </div>
        <Header navigation={navigation} categories={categories} collections={collections} />
        <div className="container">
          <Route path='/' render={() => <Home movies={movies} />} exact />
          <Route path='/collections' render={() => <Collections collections={collections} movies={movies} />} exact />
          <Route path='/byGenre' render={() => <ByGenre movies={movies} categories={categories} />} exact />
          <Route path='/movies' render={() => <Movies movies={movies} />} exact />
          <Route path='/moviePages' render={() => <MoviePages />} exact />
          <Route path='/categoryMovies' render={() => <CategoryMovies movies={movies} />} exact />
          <Route path='/searchPages' render={() => <SearchPages movies={movies} />} exact />
          <Route path='/SelectedCollection' render={() => <SelectedCollection movies={movies} />} exact />
          <Route path='/SelectedMovies' render={() => <SelectedMovies movies={movies} />} exact />
          <Sidebar newCollection={newCollection} />
        </div>
        <Footer navigation={navigation} />
      </div>
    </div>
  );
}

export default App;
