import React from 'react';
import './Movies.css';
// Import your movie images here
import znmdImg from '../../assets/movie_znmd.jpg'; // Example
import threeidiotsImg from '../../assets/movie_three_idiots.jpg';     // Example
import titanicImg from '../../assets/movie_titanic.jpg';         // Example
import forrestGumpImg from '../../assets/movie_forrest_gump.jpg'; // Example
import kingsmanImg from '../../assets/movie_kingsman.jpg';     // Example

const favoriteMovies = [
    {
        title: "Zindagi Na Milegi Dobara",
        year: 2011,
        director: "Zoya Akhtar",
        image: znmdImg,
        description: "A soul-stirring journey of three friends who rediscover life, love, and themselves on a road trip across Spain, learning to truly live without fear or regret."
    },
    {
    title: "3 Idiots",
    year: 2009,
    director: "Rajkumar Hirani",
    image: threeidiotsImg,
    description: "Three engineering students navigate the pressures of the Indian education system, discovering friendship, passion, and the true meaning of success along the way."
    },
    {
    title: "Titanic",
    year: 1997,
    director: "James Cameron",
    image: titanicImg,
    description: "A young couple from different social classes fall in love aboard the ill-fated RMS Titanic, discovering eternal love amidst tragedy and loss."
    },
    // Add more movies here
    {
    title: "Forrest Gump",
    year: 1994,
    director: "Robert Zemeckis",
    image: forrestGumpImg,
    description: "A kind-hearted man with a low IQ unknowingly influences key moments in American history while pursuing his lifelong love with innocence and determination."
    },
    {
    title: "Kingsman: The Secret Service",
    year: 2014,
    director: "Matthew Vaughn",
    image: kingsmanImg,
    description: "A street-smart young man is recruited into a secret British spy organization, where he learns that true gentlemanly manners and deadly skills can go hand in hand."
    }

];

const Movies = () => {
    return (
        <div className="movies-container">
            <h3>My Favorite Movies</h3>
            <p>When I'm not coding or playing music, I love diving into a great film. Here are some of my all-time favorites:</p>
            <div className="movie-grid">
                {favoriteMovies.map((movie, index) => (
                    <div className="movie-card" key={index}>
                        <img src={movie.image} alt={movie.title} className="movie-image" />
                        <div className="movie-info">
                            <h4>{movie.title} ({movie.year})</h4>
                            <p>Directed by: {movie.director}</p>
                            <p className="movie-description">{movie.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Movies;