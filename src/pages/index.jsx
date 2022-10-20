import React from 'react';
import Link from 'next/link';
import style from './index.module.less';
import Button from './../components/Button/index';

let days = [
  'Day36',
  'Day37',
  'Day38',
  'Day39',
  'Day40',
  'Day41',
  'Day42',
  'Day43',
  'Day44',
  'Day45',
  'Day46',
  'Day47',
  'Day48',
  'Day49',
  'Day49-2',
  'Day50',
  'Day51',
  'Day52',
  'Day53',
  'Day54',
  'Day55',
  'Day56',
  'Day57',
  'Day58',
  'Day59',
  'Day60',
  'Day61',
  'Day62',
  'Day63',
  'Day64',
  'Day65',
  'Day66',
  'Day67',
  'Day68',
  'Day69',
  'Day70',
  'Day71',
  'Day72',
  'Day73',
  'Day74',
  'Day75',
  'Day76',
  'Day77',
  'Day78',
  'Day79',
  'Day80',
  'Day101',
  'Day102',
  'Demo',
];

const unDone = ['Day51', 'Day57'];

const Index = () => {
  return (
    <div className={style.layout}>
      {days.map((day) => {
        if (unDone.includes(day)) {
        }
        return (
          <Button href={`/${day.toLocaleLowerCase()}`}>
            {unDone.includes(day) ? `未完成` : day}
          </Button>
        );
      })}
    </div>
  );
};

export default Index;
