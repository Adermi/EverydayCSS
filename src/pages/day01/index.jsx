import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.number}>
          <div className={style[`one-one`]}></div>
          <div className={style[`one-two`]}></div>
          <div className={cn(style.zero, style[`zero-one`])}></div>
          <div className={cn(style.zero, style[`zero-two`])}></div>
        </div>
        <div className={style.day}>DAYS</div>
        <div className={style.des}>CSS CHALLENGE</div>
      </div>
    </Layout>
  );
};

export default Index;
