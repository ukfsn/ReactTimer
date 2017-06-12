var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
  },
  render: function () {
    var {countdownStatus} = this.props;

    var renderStartStopButton = () => {
      if ( countdownStatus === 'started' ) {
        return <button ref='pauseButton' className='button secondary'>Pause</button>
      } else if ( countdownStatus === 'paused') {
        return <button ref='startButton' className='button primary'>Start</button>
      }
    };

    return (
      <div className='controls'>
        {renderStartStopButton()}
        <button ref='clearButton' className="button alert hollow">Clear</button>
      </div>
    );
  }
});

module.exports = Controls;
