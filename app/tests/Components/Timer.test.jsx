var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('Should exist', () => {
    expect(Timer).toExist();
  });

  describe('handleSecondsUpdate', () => {
    it('Should set state to "started" and start count up', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.handleSecondsUpdate(3);

      expect(timer.state.count).toBe(0);
      expect(timer.state.timerStatus).toBe('started');

      setTimeout(() => {
        expect(timer.state.count).toBe(1);
        done();
      }, 1001);
    });

    it('Should never count to more than specific number of seconds', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleSecondsUpdate(3);

      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('stopped');
        done();
      }, 3001);
    });

    it('Should pause counting when the timerStatus is "paused"', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleSecondsUpdate(2);
      timer.handleStatusChange('started');
      timer.handleStatusChange('paused');

      setTimeout( () => {
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('paused');
        done();
      }, 1001)

    });

    it('should stop and reset the counter when timerStatus is "stopped"', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleSecondsUpdate(3);
      timer.handleStatusChange('started');
      timer.handleStatusChange('stopped');

      expect(timer.state.count).toBe(0);
      expect(timer.state.timerStatus).toBe('stopped');
      done();
    });

  });
})
