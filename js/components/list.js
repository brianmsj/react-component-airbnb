import React from 'react';
import Card from './card';



export default class List extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      render: false,
    };
    this.renderCard = this.renderCard.bind(this);
  }

    renderCard(){
      this.setState({
        render: !this.state.render
      });
    }


    render(){

    return (
      <div className = "list"> GUEST FILTERS
       <button type="submit" onClick = {this.renderCard}> </button>
     	 <Card/>
    </div>
    );
  }
}
