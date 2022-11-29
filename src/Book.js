import React from "react"

class Book extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <h2>
          {this.props.name}
        </h2>
        <p>
          {this.props.id}
        </p>
        
      </div>
    )
  }
}

export default Book;