/**
 *    Front landing page with Picture Banner,
 *    SearchBar,
 *    and Featured list of Events
 *
 *    TODO: Vincent
 */
import React from 'react';
import BannerVideo from './BannerVideo';
import GoogleMapsSearchBar from '../searchbar/GoogleMapsSearchBar';

// First image banner we had
// <img className="responsive-img" id='banner-img' src="http://assets3.thrillist.com/v1/image/1439210/size/tmg-article_main_wide_2x" />

// Search box now deprecated. Will keep just in case though.
// <input type="text" placeholder='Search for events' id='search-box' onChange={this.props.filterList} />

class Banner extends React.Component {

  render() {
    return (
      <div>
        <BannerVideo />
        <GoogleMapsSearchBar />
      </div>
    );
  }
}

export default Banner;
