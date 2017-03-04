import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import i18next from 'i18next';

class LanguageChanger extends Component {
  static displayName = 'LanguageChanger'

  static propTypes = {
    language: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.language !== this.props.language) {
      i18next.changeLanguage(nextProps.language);
    }
  }

  render() {
    return this.props.children;
  }
}

function mapStateToProps(state) {
  return {
    language: state.language.data
  };
}

export default connect(mapStateToProps)(LanguageChanger);
