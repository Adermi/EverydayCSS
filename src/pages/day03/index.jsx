import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.circle}>
          <div className={style.sum}></div>
          <div className={style[`side-left`]}></div>
          <div className={style[`side-right`]}></div>
          <div className={style.shadow}></div>
          <div className={style.ground}></div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
