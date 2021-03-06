var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },
  onStatusChange: function (newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },
  render: function () {
    var {countStatus} = this.props;

    var renderStartStopButton = () => {
      if ( countStatus === 'started' ) {
        return <button ref='pauseButton' className='button secondary' onClick={this.onStatusChange('paused')}>Pause</button>
      } else {
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
