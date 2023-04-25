import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired, // Define the active tab property as a required string
    label: PropTypes.string.isRequired, // Define the label property as a required string
    onClick: PropTypes.func.isRequired, // Define the onClick property as a required function
  };

  onClick = () => { // Define a custom onClick handler that calls the passed-in onClick function with the label as an argument
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;

    let className = 'tab-list-item';

    if (activeTab === label) { // If the current tab is the active tab, add the "tab-list-active" class
      className += ' tab-list-active';
    }

    return (
      <li
        className={className}
        onClick={onClick}
      >
        {label}
      </li>
    );
  }
}

export default Tab;
