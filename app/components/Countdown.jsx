var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState: function () {
    return {
      totalSeconds: 0
    };
  },
  handleSecondsUpdate: function (seconds) {
    if ( seconds ) {
      this.setState({totalSeconds: seconds});
    }
  },
  render: function () {
    var {totalSeconds} = this.state;
    return (
      <div>
        <Clock totalSeconds={totalSeconds}/>
        <CountdownForm onSecondsSubmit={this.handleSecondsUpdate}/>
      </div>
    );
  }
});

module.exports = Countdown;
