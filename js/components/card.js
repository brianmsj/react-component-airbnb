import React from 'react';

export default class Card extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      adults: 0,
      children: 0,
      infants: 0
    };
    this.increaseAdults = this.modify.bind(this, "adults", 1);
    this.decreaseAdults = this.modify.bind(this, "adults", -1);
    this.increaseChildren = this.modify.bind(this, "children", 1);
    this.decreaseChildren = this.modify.bind(this, "children", -1);
    this.increaseInfants = this.modify.bind(this, "infants", 1);
    this.decreaseInfants = this.modify.bind(this, "infants", -1);
  }
    modify(field, modifier){
      this.setState({
        [field]: this.state[field] += modifier
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
