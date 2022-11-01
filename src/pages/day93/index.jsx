import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  console.log(_.range(5));

  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.lock}>
          <div className={style.hand}></div>
          <div className={style.panel}>
            <div className={style.dial}>
              {_.range(40).map((item) => {
                return (
                  <div
                    className={cn(style.needle, style[`needle-${item}`])}
                  ></div>
                );
              })}
              {[0, 5, 10, 15, 20, 25, 30, 35].map((item, idx) => {
                return (
                  <div className={cn(style.font, style[`font-${idx}`])}>
                    {item}
                  </div>
                );
              })}
              <div className={style.circle}></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
