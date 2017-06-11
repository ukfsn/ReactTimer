var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('Should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('Should call onSecondsSubmit if valid input', () => {
    var spy = expect.createSpy();

    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSecondsSubmit={spy}/>);
    var form = countdownForm.refs.form;

    countdownForm.refs.seconds.value = '104';
    TestUtils.Simulate.submit(form);

    expect(spy).toHaveBeenCalledWith(104);
  });

  it( 'Should not call onSecondsSubmit if no valid input', () => {
    var spy = expect.createSpy();

    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSecondsSubmit={spy}/>);
    var form = countdownForm.refs.form;

    countdownForm.refs.seconds.value = 'jason';
    TestUtils.Simulate.submit(form);

    expect(spy).toNotHaveBeenCalled('The spy was not called');
  });

});
