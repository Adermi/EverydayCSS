import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.red}>
          <div className={style['bottom-left']}></div>
          <div className={style['bottom-mid']}></div>
          <div className={style['bottom-right']}></div>
          <div className={style['top-left2']}></div>
          <div className={style['top-left']}></div>
          <div className={style['top-mid']}></div>
          <div className={style['top-right']}>
            <div className={style.flush}></div>
          </div>
          <div className={style['top-right2']}></div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
