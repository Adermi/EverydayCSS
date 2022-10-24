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
              {_.range(1, 26).map((item) => (
                <div
                  className={cn(style.stripe, style[`stripe-${item}`])}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
