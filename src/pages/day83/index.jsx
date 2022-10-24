import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.warp}>
          {_.range(1, 31).map((item) => (
            <div className={cn(style.ring, style[`ring-${item}`])}>
              {_.range(1, 26).map((item, idx) => {
                const degree = `${(idx / 25) * 360 - Math.random() * 10}`;
                const offset = `${100 - Math.random() * 40}`;
                const transform = {
                  transform: `rotate(${degree}deg) translateY(${offset}px) scaleY(${
                    offset / 100
                  })`,
                };

                return (
                  <div
                    className={cn(style.stripe, style[`stripe-${item}`])}
                    style={transform}
                  ></div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
