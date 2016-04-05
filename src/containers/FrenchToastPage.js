import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/frenchToastActions';
import FrenchToastQuestion from '../components/FrenchToastQuestion';
import GiveUpQuestion from "../components/GiveUpQuestion";
import Title from '../components/Title';

class FrenchToastPage extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    appState: PropTypes.object.isRequired
  };

  render() {
    if(this.props.appState.choiceRight != undefined){
        return (
        <div>
        <Title/>
        <FrenchToastQuestion
          chooseItem={this.props.actions.chooseItem}
          appState={this.props.appState}
        />
        </div>
      );
    } else {
      return(
        <div>
        <Title/>
        <GiveUpQuestion
          appState={this.props.appState}
        />
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    appState: state.frenchToastAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  ) (FrenchToastPage);
