import React, { Component } from 'react';
import PropType from 'prop-types';

export default class Card extends Component {
  static PropType = {
    name: PropType.string,
    description: PropType.string,
    img: PropType.string,
    demoUrl: PropType.string,
    repoUrl: PropType.string,
  }

  render() {
    const {
      name,
      description,
      img,
      demoUrl,
      repoUrl
    } = this.props;
    return (
      <div>
        <div>{name}</div>
        <div>{description}</div>
        <img src={img} alt={name} />
        <a href={demoUrl}>Demo</a>
        <a>{demoUrl}</a>
        <a>{repoUrl}</a>
      </div>
    );
  }
}
