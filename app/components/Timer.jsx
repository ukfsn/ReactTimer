var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      maxCount: undefined,
      timerStatus: 'stopped'
    };
  },
  componentDidUpdate: function (prevProps, prevState) {
    if ( this.state.timerStatus !== prevState.timerStatus ) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({ count: 0 });
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function () {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  startTimer: function () {
    var {maxCount} = this.state;
    this.timer = setInterval( () => {
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount <= maxCount ? newCount : 0
      });
      if ( newCount === maxCount ) {
        this.setState({timerStatus: 'stopped'});
      }
    }, 1000);
  },
  handleSecondsUpdate: function (seconds) {
    if ( seconds ) {
      this.setState({
        maxCount: seconds,
        timerStatus: 'started'
      });
    }
  },
  handleStatusChange: function (newStatus) {
    if ( newStatus ) {
      this.setState({
        timerStatus: newStatus
      });
    }
  },
  render: function () {
    var {count} = this.state;

    var renderControlArea = () => {
      var {timerStatus} = this.state;
      if ( timerStatus !== 'stopped' ) {
        return <Controls countStatus={timerStatus} onStatusChange={this.handleStatusChange}/>;
      } else {
        return <CountdownForm onSecondsSubmit={this.handleSecondsUpdate}/>
      }
    }
    return (
      <div>
        <h1 className='page-title'>Timer</h1>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Timer;
