import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Button} from 'react-bootstrap';

import {Container, Row, Input} from 'reactstrap';
import Modal from 'react-modal'

import './App.css';
import MovieList from './components/MovieList';
import StarRating from './components/StarRating';
import MovieListHeading from './components/MovieListHeading';
//import {FaStar} from 'react-icons/fa';





const App = () => {
	const [movies, setMovies] = useState([        {
            Title: "New Hope",
            
            Description: "Directed by George Lucas. With Mark Hamill, Harrison Ford, Carrie Fisher, Alec Guinness. Luke Skywalker joins forces with a Jedi Knight, a cocky pilot",
            
            Poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
             Rate:5},
        {
            Title: "The Empire Strikes Back",
            
            Description: "The Empire Strikes Back, also known as Star Wars: Episode V – The Empire Strikes Back, is a 1980 American epic space opera film directed by Ir",
            
            Poster: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
            Rate:4 },
        {
            Title: "Return of the Jedi",
            
            Description: "Return of the Jedi is a 1983 American epic space opera film directed by Richard Marquand. The screenplay is by Lawrence Kasdan and George Lucas",
            
            Poster: "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
             Rate:3}]);
        const [modalState, setModalState]= useState(false)
        const [modtitle, setModtitle] = useState('');
        const [moddescription, setModdescription] = useState('');
        const [modposter, setModposter] = useState('');
        const [modrate, setModrate] = useState('');
        const button = {
            borderRadius : 100,
            height : 80,
            width : 80
          }
          const [rate, setRate] = useState(null)
          const handleR =(ratingValue)=>{
            setRate(ratingValue)
   }
    


        const [searchValue, setSearchValue] = useState('');
         const handleClick= (e) => {
            e.preventDefault();
         let moviecc= movies.filter( (el)=>el.Title.toUpperCase().search(searchValue.toUpperCase())!==-1 && el.Rate>= rate  )
   setMovies(moviecc);
}
 const addMoviess = (event)=>{
     
   event.preventDefault();
 setMovies([...movies,{Title :modtitle,  Description:moddescription, Poster :modposter, rate:modrate} ])
  setModalState(false)
   }
  
       
      
   
       
	return (
		<div className='container-fluid movie-app'>
           <div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Movies' />
				<div className='col col-sm-4'>
        <StarRating  handleR={handleR}   />
			<input
				className='form-control'
				value={searchValue}
				onChange={(event) => setSearchValue(event.target.value)}
                placeholder='search...'
                
			></input>
            <input className='tt'  onClick={handleClick} type="submit" value="SEARCH" />
            
		</div>
                
			</div>
			<div className='row'>
            <MovieList movies={movies} />
            
            
           
            <Container fluid><Row>
            
            <div style ={{padding : 100}}>
           <Button style = {button} variant = 'dark' onClick = {()=>setModalState(true)
        }>New Movie</Button> 
           </div>
           </Row>
           </Container>
           <Modal isOpen={modalState}>
             <div style ={{margin : 70}}>
             <Input placeholder="Movie Title" onChange={(e)=> setModtitle(e.target.value)}></Input><br/>
             <Input placeholder="Movie Description" onChange={(e)=> setModdescription(e.target.value)}></Input><br/>
             <Input placeholder="Poster URL" onChange={(e)=> setModposter(e.target.value)}></Input><br/>
             <Input placeholder="Rate" onChange={(e)=> setModrate(e.target.value)}></Input><br/>
             <Button variant ='dark' onClick = {addMoviess}>Submit</Button>
             </div>
             </Modal>  
           
          
            

			</div>
            
		</div>
	);
};

export default App;