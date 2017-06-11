var React = require('react');

var CountdownForm = React.createClass({
  onInputSubmit: function (e) {
    e.preventDefault();

    var strSeconds = this.refs.seconds.value;
    if ( strSeconds.match(/^[0-9]*$/) ) {
      this.props.onSecondsSubmit(parseInt(strSeconds, 10));
      this.refs.seconds.value = '';
    } else {
      this.refs.seconds.value='';
    }
  },
  render: function () {

    return (
      <form ref='form' onSubmit={this.onInputSubmit} className='countdown-form'>
        <div>
          <input type='text' ref='seconds' placeholder='Enter seconds to countdown from'/>
        </div>
        <div>
          <button className='button expanded'>Start Countdown</button>
        </div>
      </form>
    );
  }
});

module.exports = CountdownForm;
