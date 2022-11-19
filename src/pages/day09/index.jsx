import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.content}>
          <div className={style.moon}>
            {_.range(10).map((item) => {
              return <div className={style[`house-${item}`]}></div>;
            })}
          </div>
          <div className={style.waves}>
            {_.range(1, 6).map((item) => {
              return (
                <div className={cn(style.wave, style[`wave-${item}`])}></div>
              );
            })}
          </div>
          <div className={style.rains}>
            {_.range(10).map((item) => {
              return (
                <div className={cn(style.rain, style[`rain-small-${item}`])}>
                  <div className={style.one}></div>
                  <div className={style.two}></div>
                  <div className={style.three}></div>
                </div>
              );
            })}
            {_.range(10).map((item) => {
              return (
                <div className={cn(style.rain, style[`rain-mid-${item}`])}>
                  <div className={style.one}></div>
                  <div className={style.two}></div>
                  <div className={style.three}></div>
                </div>
              );
            })}
            {_.range(10).map((item) => {
              return (
                <div className={cn(style.rain, style[`rain-big-${item}`])}>
                  <div className={style.one}></div>
                  <div className={style.two}></div>
                  <div className={style.three}></div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={style.footer}>
          <div className={style.temp}>12</div>
          <div className={style.wind}>
            <div className={style.top}>Wind: E 7 km/h</div>
            <div className={style.bottom}>Humidity: 87%</div>
          </div>
          <div className={style.tue}>
            <div className={style.top}>
              TUE <span>21° / 9°</span>
            </div>
            <div className={style.bottom}>
              WED <span>23° / 10°</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
