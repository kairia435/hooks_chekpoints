import React, { useState } from 'react';
import {FaStar} from 'react-icons/fa';
//import StarRating from './StarRating';


const MovieList = (props) => {
	const [rating,setRating]=useState(null)
	//const [rate, setRate] = useState(null)
       //   const handleRate =(ratingValue)=>{
            //  setRate(ratingValue)
		 // }
		  
		  



	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<div className="container-sm">
                     <h6>{movie.Title}</h6> 
					 <div className="container-sm">
					
					 <div>

{[...Array(5)].map((star,i)=>{
    const ratingValue= i+1;
// #e4e5e9
        return(
    <label>
    <input type="radio" name="rating" value={ratingValue} onClick={()=>setRating(ratingValue)}/>
    <FaStar  className="star" color={ratingValue<=movie.Rate?"#ffc107":"#e4e5e9"}       size={20}/>
    </label>)})}
    
    </div>
























					 
            


					<img src={movie.Poster} alt='movie'></img>
					<p>{movie.Description}</p> 
					</div>
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;