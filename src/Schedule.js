import React from 'react';

class Schedule extends React.Component {
  componentDidMount() {
    window.Calendly.initInlineWidget({ url: 'https://calendly.com/vivekananda-athukuri/schedule' });
  }

  render() {
    return (<div></div>);
  }
}

export default Schedule;