import React from 'react';
import Link from 'next/link';
import style from './index.module.less';

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
  'Day101',
  'Day102',
  'Demo',
];

const unDone = ['Day51', 'Day57'];

const Index = () => {
  return (
    <div className={style.layout}>
      {days.map((day, i) => {
        if (unDone.includes(day)) {
        }
        return (
          <Link href={`/${day.toLocaleLowerCase()}`} key={i}>
            {unDone.includes(day) ? `未完成:${day}` : day}
          </Link>
        );
      })}
      <div className={style.star}></div>
    </div>
  );
};

export default Index;
