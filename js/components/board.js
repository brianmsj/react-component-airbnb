import React from 'react';
import Nav from './nav';
import uuid from 'uuid';



export default class Board extends React.Component {
  constructor () {
    super();
    this.state = {
      minGuests: 0,
      homes: [
             {
              image: 'http://www.coastalhomeinspectors.com/wp-content/uploads/2015/09/Home-Inspectors-Cape-Coral-FL.jpg',
              price: "$3,450",
              guests: 6,
              id: uuid.v4()

            },
            {
              image:'http://3.bp.blogspot.com/-I87Mwyi_Pyg/U3d9LmCBgjI/AAAAAAAAH2U/zXDyRQSYKbU/s1600/home-garden-Home-Wallpapers.jpg',
              price: "$2,995",
              guests: 5,
              id: uuid.v4()

            },
            {
              image:'http://wallpaperpulse.com/img/2314400.jpg',
              price: "$15,000",
              guests: 10,
              id: uuid.v4()

            },
            {
              image: 'http://3.bp.blogspot.com/-G7BuIoELUBw/U3d9GXzigjI/AAAAAAAAH2A/VxYN8dJATIE/s1600/free-download-home-design-wallpapers.jpg',
              price: "$1,299",
              guests: 9,
              id: uuid.v4()
            },
            {
              image: 'https://s-media-cache-ak0.pinimg.com/736x/43/27/3b/43273b3450b0edbf3b52aafd37ee5697.jpg',
              price: "$10,195",
              guests: 11,
              id: uuid.v4()

            }
          ]
        };
  }

  handleFilter(filter) {
    // here, make sure only showing homes as appropriate // modify minGuests when we get a new filter
  }

  render() {




    const displayHomes = this.state.homes
      .filter(house => this.state.minGuests < house.guests)
      .map(house => <div className="home" key={house.id}> Rent {house.price}
        <img className = "home-image" src = {house.image}/>
        <p>This House Sleeps {house.guests}</p>
        </div>
      );
    return (

      <div className = "homes"><Nav onFilter = {this.handleFilter}/>{displayHomes}
      </div>
    );
  }
}
