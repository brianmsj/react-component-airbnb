import React from 'react';
import List from './list';


export default function Nav(props){
  return (
   <div className = "nav">
      <h1>AIRBNB</h1>
      <p>Luxury edition</p>
      <List onFilter = {props.onFilter}/>



   </div>
);
}
