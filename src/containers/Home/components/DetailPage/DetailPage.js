import React, { Component } from 'react';
import PropType from 'prop-types';
import './DetailPage.less';
import webJson from '../../webData.json';
import Card from '../../components/Card';

export default class DetailPage extends Component {
  static propType = {
    match: PropType.object,
  }

  render() {
    const { type } = this.props.match.params;
    const matchObject = webJson.find(item =>  item.key === type);
    console.log(matchObject);

    return (
      <div className="detailPage">
        <p>數量:{matchObject.dataList.length}</p>
        <div className="detailContainer">
          {
            matchObject &&
            matchObject.dataList.map(
              data =>
                <Card
                  {...data}
            />)
          }
        </div>
      </div>
    );
  }
}
