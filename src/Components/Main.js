import React from "react";
import Movies from "./Movies";
import Search from "./Search"

const API_KEY = process.env.REACT_APP_API_KIY;
class Main extends React.Component{
    state={
        movies:[],
        loading:true
    }
    
    componentDidMount(){
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=all`)
        .then(response => response.json())
        .then(data=> this.setState({movies:data.Search,loading:false}))
    }

    searchMovie=(str='',type='')=>{
        this.setState({loading:true})
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${str==='' ? 'all':str}&type=${type}`)
        .then(response => response.json())
        .then(data=> this.setState({movies:data.Search,loading:false}))
    }
    render(){
        const {movies,loading}=this.state;
        return(
            <main className="container" >
                <Search searchMovie={this.searchMovie}/>
                {
                    loading ?  (<h5>Loading...</h5>) :(<Movies  movies={movies}/>) 
                }
               
                
            </main>
        )
    }
    
}

export default Main;