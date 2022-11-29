import Movie from "./Movie";
import "./movies.css"
function Movies(props){
    const{movies=[]}=props;
    return(
        <div className="movies">
            {movies.length ? movies.map(movie=>(
                <Movie key={movie.imdbID}  {...movie}/>
            )): "Nothing found"}
            
        </div>
    )
}

export default Movies;