/**
 *    Small Event Cards for the Dashboard
 *    
 */

import React, { Component } from 'react';

export default class SmallEventCards extends Component {

  render() {
    const event = this.props.event;
    return (
        <li className="collection-item avatar">
          <img src={event.image_url} alt="" className="circle" />
          <span className="title"><b>{event.eventName}</b></span>
          <p>{event.description}<br/>
          </p>
          <a onClick={(e) => {e.preventDefault(); this.props.handleClick();}} href='#!' className="secondary-content"><i className='material-icons'>settings</i></a>
        </li>
    );
  }
  
}
