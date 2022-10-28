import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.candle}>
          <div className={style.fire}></div>
          <div className={style.flame}></div>
          <div className={style.base}></div>
          <div className={style.candlestick}></div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
