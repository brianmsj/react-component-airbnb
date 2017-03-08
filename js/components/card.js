import React from 'react';

export default class Card extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      adults: 0,
      children: 0,
      infants: 0
    };

  }



    render() {
    const adult = this.state.adults;
    const children = this.state.children;
    const infants = this.state.infants;
    return (
        <div className= "person">
            <div className="filter">{`Number of Adults ${adult}`}
              <button type="submit" className = "button"></button>
            </div>
            <div className="filter">{`Number of Children ${children}`}
               <button type="submit" className = "button"></button>
            </div>
            <div className="filter">{`Number of Infants ${infants}`}
               <button type="submit" className = "button"></button>
            </div>
        </div>
    );
  }
}
