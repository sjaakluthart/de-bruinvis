import React, { PropTypes } from 'react';
import i18next from 'i18next';
import { connect } from 'react-redux';

function I18n({ text, language }) {
  const style = {
    fontSize: 'inherit',
    fontWeight: 'inherit',
    color: 'inherit',
    lineHeight: 'inherit'
  };

  return <span style={style}>{i18next.t(text, { lng: language })}</span>;
}

I18n.propTypes = {
  text: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired
};

I18n.defaultProps = {
  options: {}
};

function mapStateToProps(state) {
  return {
    language: state.language.data
  };
}

export default connect(mapStateToProps)(I18n);
