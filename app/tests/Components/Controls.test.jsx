var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
  it('Should Exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('Should display Clear and Pause buttons if status is started', () => {
      var spy=expect.createSpy();
      var controls = TestUtils.renderIntoDocument(<Controls onStatusChange={spy} countStatus='started'/>);

      var clearButton = controls.refs.clearButton;
      expect(clearButton).toExist();

      var pauseButton = controls.refs.pauseButton;
      expect(pauseButton).toExist();

      var startButton = controls.refs.startButton;
      expect(startButton).toNotExist();

    });

    it( 'Should display Clear and Start buttons if status is paused', () => {
      var spy = expect.createSpy();
      var controls = TestUtils.renderIntoDocument(<Controls onStatusChange={spy} countStatus='paused'/>);

      var clearButton = controls.refs.clearButton;
      expect(clearButton).toExist();

      var pauseButton = controls.refs.pauseButton;
      expect(pauseButton).toNotExist();

      var startButton = controls.refs.startButton;
      expect(startButton).toExist();
    });
  });
})
