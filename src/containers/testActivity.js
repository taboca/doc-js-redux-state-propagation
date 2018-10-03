import React, { Component } from 'react';
import { connect } from 'react-redux';

import { command_section_a_foo } from '../store/sectionA/actions.js';
import { command_section_b_bar } from '../store/sectionB/actions.js';

import TestActivityA from './testActivityA';
import TestActivityB from './testActivityB';

class TestActivity extends Component {

  constructor(props) {

    super(props);
    this.state = {
      some_internal_state: false,
    };

    this.onClickA = this.onClickA.bind(this);
    this.onClickB = this.onClickB.bind(this);

  }

  onClickA() {
    this.props.dispatch(command_section_a_foo())
  }

  onClickB() {
    this.props.dispatch(command_section_b_bar())
  }

  /* Life cycle ... */
  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    let r = parseInt(Math.random()*255);
    let g = parseInt(Math.random()*255);
    let b = parseInt(Math.random()*255);
    var divStyle = {
      background: 'rgb('+r+','+g+','+b+')',
      padding: '1em'
    }
    return (
      <div style={divStyle}>
      <h1>Notified to foo and bar</h1>
      {this.props.foo} and
      {this.props.bar}
        <div onClick={this.onClickA}>
          <span >Tell foo action</span>
        </div>
        <div onClick={this.onClickB}>
          <span >Tell bar action</span>
        </div>

        <TestActivityA />

        <TestActivityB />

      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    foo  : state.sectionA.state_foo,
    bar  : state.sectionB.state_bar,
  };
}

export default connect(mapStateToProps)(TestActivity);
