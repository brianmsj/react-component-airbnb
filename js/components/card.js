import React from 'react';

export default class Card extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      adults: 0,
      children: 0,
      infants: 0
    };
     this.increaseAdults = this.increaseAdults.bind(this);
      this.decreaseAdults = this.decreaseAdults.bind(this);
       this.increaseChildren = this.increaseChildren.bind(this);
        this.decreaseChildren = this.decreaseChildren.bind(this);
         this.increaseInfants = this.increaseInfants.bind(this);
          this.decreaseInfants = this.decreaseInfants.bind(this);
  }
    increaseAdults(){
      this.setState({
        adults: this.state.adults += 1
      });
    }

    decreaseAdults(){
      this.setState({
        adults: this.state.adults -=1
      });
    }

    increaseChildren(){
      this.setState({
        children: this.state.children += 1
      });
    }

    decreaseChildren(){
      this.setState({
        children: this.state.children -=1
      });
    }


    increaseInfants(){
      this.setState({
        infants: this.state.infants += 1
      });
    }

    decreaseInfants(){
      this.setState({
        infants: this.state.infants -=1
      });
    }


    render() {
    const adult = this.state.adults;
    const children = this.state.children;
    const infants = this.state.infants;
    return (
        <div className= "person">
            <div className="filter">{`Number of Adults ${adult}   `}
              <button type="submit" className = "button" onClick =
              {this.decreaseAdults}> - </button>
              <button type="submit" className = "button" onClick =
              {this.increaseAdults} > + </button>
            </div>
            <div className="filter">{`Number of Children ${children}   `}
               <button type="submit" className = "button" onClick =
              {this.decreaseChildren}> - </button>
              <button type="submit" className = "button" onClick =
              {this.increaseChildren}> + </button>
            </div>
            <div className="filter">{`Number of Infants ${infants}   `}
               <button type="submit" className = "button" onClick =
              {this.decreaseInfants}> - </button>
              <button type="submit" className = "button" onClick =
              {this.increaseInfants}> + </button>
            </div>
              <button type="submit" className = "applyButton"> Apply </button>
        </div>
    );
  }
}
