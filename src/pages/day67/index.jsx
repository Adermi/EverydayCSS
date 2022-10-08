import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.parasol}>
          <div className={style.pole}></div>
          <div className={style.shadowPole}></div>
          <div className={style.top}>
            {_.range(1, 13).map((item) => (
              <div
                className={cn(style.triangle, style[`triangle-${item}`])}
              ></div>
            ))}
          </div>
          <div className={style.shadowTop}>
            <div className={style.shadow}>
              {_.range(1, 13).map((item) => (
                <div
                  className={cn(style.triangle, style[`triangle-${item}`])}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
