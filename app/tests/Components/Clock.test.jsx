var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
  it('Should exist', () => {
    expect(Clock).toExist();
  });
  describe('render', () => {
    it('Should render clock to output', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
      var $el = $(ReactDOM.findDOMNode(clock));
      var actualText = $el.find('.clock-text').text();
      expect(actualText).toBe('01:02');
    });
  });
  describe('formatSeconds', () => {
    it('Should format seconds', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 615;
      var expected = '10:15';
      var actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });
    it('Should format prefix minutes when minutes less than 10', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 75;
      var expected = '01:15';
      var actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });
    it('Should format prefix seconds when less than 10', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 65;
      var expected = '01:05';
      var actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });
    it('Should return 00:00 when seconds is 0', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 0;
      var expected = '00:00';
      var actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });
  });
});
