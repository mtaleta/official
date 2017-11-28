import React, { Component } from 'react';
import PropType from 'prop-types';
import './Card.less';
import FontAwesome from 'react-fontawesome';

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
    const bgStyle = {
      backgroundImage: `URL("${img}")`
    };
    return (
      <div className="card">
        <div title="Demo" className="bgimg" style={bgStyle} />
        {/* <img src={img} alt={name} /> */}
        <div className="buttons">
          {
            demoUrl &&
            <a title="Github" href={demoUrl} rel="noopener noreferrer" target="_blank">
              <div className="circle demo">
                <FontAwesome name="laptop" />
              </div>
            </a>
          }
          {
            repoUrl &&
            <a href={repoUrl} rel="noopener noreferrer" target="_blank">
              <div className="circle repo">
                <FontAwesome name="github-alt" />
              </div>
            </a>
          }
        </div>
        <div className="cardInfo">
          <div className="title" title={name}>{name}</div>
          <div className="des" title={description}>{description}</div>
        </div>
      </div>
    );
  }
}
