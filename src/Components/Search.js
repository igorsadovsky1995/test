import React from "react"

class Search extends React.Component{
    state={
        search:'',
        type:''
    }

    handleChange=(e)=>{
        this.setState({search:e.target.value})
    }
    handleKey=(e)=>{
        
        if(e.key === 'Enter'){
            this.props.searchMovie(this.state.search,this.state.type)
        }
    }

    handleFilter=(e)=>{
        this.setState(()=>({type : e.target.dataset.type }),()=>{
            this.props.searchMovie(this.state.search,this.state.type);
        })
    }
    render(){
        const {search} = this.state;
        return(
            <div>
                <div>
                    <input 
                        type='search' 
                        placeholder="search" 
                        value={search}
                        onChange={this.handleChange}
                        onKeyDown={this.handleKey}
                    />
                    <button onClick={()=>this.props.searchMovie(this.state.search,this.state.type)}>
                        Search
                    </button>
                </div>
                <div>
                    <label>
                        <input 
                            type='radio' 
                            data-type=''
                            name='type'
                            onChange={this.handleFilter} 
                            checked={this.state.type === ''}
                        />
                        <span>
                            All
                        </span>
                    </label>
                    
                    <label>
                        <input 
                            type='radio' 
                            data-type='movie'
                            name='type'
                            onChange={this.handleFilter}
                            checked={this.state.type === 'movie'} 
                        />
                        <span>
                            Movies only
                        </span>
                    </label>

                    <label>
                        <input 
                            type='radio' 
                            data-type='game'
                            name='type'
                            onChange={this.handleFilter} 
                            checked={this.state.type === 'game'}
                        />
                        <span>
                            Games only
                        </span>
                    </label>
                </div>
                
            </div>

        )
    }
}

export default Search;