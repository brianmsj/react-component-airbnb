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

    if(this.state.render ) {
    	return <div className = "list">  
      		 <button type="submit" onClick =
      		  {this.renderCard}> FILTER</button>
     		<Card />
    	</div>
 	}    	

    return (
      <div className = "list"> 
       <button type="submit" onClick = 
       {this.renderCard}> FILTER </button>
     	
    </div>
    );
  }
}
