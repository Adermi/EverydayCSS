import React from 'react';
import Link from 'next/link';
import style from './index.module.less';
import Button from './../components/Button/index';

let days = [
  'Day01',
  'Day02',
  'Day03',
  'Day04',
  'Day05',
  'Day06',
  'Day07',
  'Day08',
  'Day09',
  'Day10',
  'Day11',
  'Day12',
  'Day13',
  'Day14',
  'Day15',
  'Day19',
  'Day20',
  'Day21',
  'Day22',
  'Day23',
  'Day24',
  'Day25',
  'Day26',
  'Day27',
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
  'Day81',
  'Day82',
  'Day83',
  'Day84',
  'Day85',
  'Day86',
  'Day87',
  'Day88',
  'Day89',
  'Day90',
  'Day91',
  'Day92',
  'Day93',
  'Day94',
  'Day95',
  'Day96',
  'Day97',
  'Day98',
  'Day99',
  'Day100',
  'Day101',
  'Day102',
  'Day103',
  'Day104',
  'Day105',
  'Duidui',
  'Demo',
];

const unDone = ['Day03', 'Day51', 'Day57', 'Day90'];

const Index = () => {
  return (
    <div className={style.layout}>
      <div className={style.container}>
        {days.map((day) => {
          return (
            <Button href={`/${day.toLocaleLowerCase()}`}>
              {unDone.includes(day) ? `未完成` : day}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
