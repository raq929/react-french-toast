import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FrenchToastQuestion from '../components/FrenchToastQuestion';
import Title from '../components/Title';

class FrenchToastPage extends Component {
  static propTypes = {
    // actions: PropTypes.object.isRequired,
    appState: PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
      <Title/>
      <FrenchToastQuestion
        appState={this.props.appState}
      />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    appState: state.frenchToastAppState
  };
}

export default connect(mapStateToProps) (FrenchToastPage);
