import "./movie.css"
function Movie(props){
    const {
        Title,
        Year,
        imdbID,
        Type,
        Poster
    }=props
    return(
        <div className="movie-cart">
            <h2 className="movie-cart__title">
                {Title}
            </h2>
            <div className="movie-cart__content content-movie-cart">
                <div className="content-movie-cart__img">
                    <img src={Poster} alt="poster"/>
                </div>
                <p className="content-movie-cart__year">
                    {Year}
                    
                </p>
                <span className="content-movie-cart__type">
                    {Type}
                </span>
            </div>
        </div>
    )
}

export default Movie;