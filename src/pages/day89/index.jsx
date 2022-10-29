import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.one}>
          {_.range(1, 101).map((item) => (
            <div className={cn(style.stripe, style[`stripe-${item}`])}></div>
          ))}
        </div>
        <div className={style.two}>
          {_.range(1, 101).map((item) => (
            <div className={cn(style.stripe, style[`stripe-${item}`])}></div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
