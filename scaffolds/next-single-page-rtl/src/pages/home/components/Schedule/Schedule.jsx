/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { Calendar } from "@alifd/next";
import moment from 'moment';

import styles from './index.module.scss';
import './index.scss';

const currentDate = moment();
const localeData = currentDate.clone().localeData();
const monthLocale = localeData.monthsShort();

function dateCellRender(date) {
    const dateNum = date.date();
    if (currentDate.month() !== date.month()) {
        return dateNum;
    }

    let eventList;
    switch (dateNum) {
        case 1:
            eventList = [
                { type: 'primary', content: 'Event 1' },
                { type: 'normal', content: 'Event 2' }
            ];
            break;
        case 10:
            eventList = [
                { type: 'normal', content: 'Event 3' },
                { type: 'normal', content: 'Event 4' }
            ];
            break;
        case 11:
            eventList = [
                { type: 'primary', content: 'Event 5' },
                { type: 'primary', content: 'Event 6' }
            ];
            break;
        default:
            eventList = [];
    }

    return (<div className="custom-calendar-cell">
        <div>{dateNum}</div>
        <div className={styles.content}>
            <ul className={styles.eventList}>
                {eventList.map((item, key) => <li className={`${item.type}-event`} key={key}>{item.content}</li>)}
            </ul>
        </div>
    </div>);
}

function monthCellRender(date) {
    if (currentDate.month() === date.month()) {
        return (<div>
            <div>{monthLocale[date.month()]}</div>
            <div>Events</div>
        </div>);
    }
    return monthLocale[date.month()];
}

export default class SliderCard extends Component {

  render() {
    return (
      <div className={styles.calendar}>
        <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
      </div>
    );
  }
}

