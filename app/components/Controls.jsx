var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },
  onStatusChange: function (newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },
  render: function () {
    var {countdownStatus} = this.props;

    var renderStartStopButton = () => {
      if ( countdownStatus === 'started' ) {
        return <button ref='pauseButton' className='button secondary' onClick={this.onStatusChange('paused')}>Pause</button>
      } else if ( countdownStatus === 'paused') {
        return <button ref='startButton' className='button primary' onClick={this.onStatusChange('started')}>Start</button>
      }
    };

    return (
      <div className='controls'>
        {renderStartStopButton()}
        <button ref='clearButton' className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }
});

module.exports = Controls;
