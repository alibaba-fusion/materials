import React, { Component } from 'react';

import VideoList from './components/VideoList';
import DownloadCard from './components/DownloadCard';
import InfoDisplayTab from './components/InfoDisplayTab';
import PriceInfo from './components/PriceInfo';
import TestimonialCard from './components/TestimonialCard';

export default class Card extends Component {
  static displayName = 'Card';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="card-page" >
      <VideoList />
      <DownloadCard />
      <InfoDisplayTab />
      <PriceInfo />
      <TestimonialCard />
    </div>;
  }  
}
