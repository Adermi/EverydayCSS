import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.pig}>
        <div className={style.head}>
          <div className={cn(style.ear, style[`ear-l`])}></div>
          <div className={cn(style.ear, style[`ear-r`])}></div>
          <div className={cn(style.eye, style[`eye-l`])}></div>
          <div className={cn(style.eye, style[`eye-r`])}></div>
          <div className={style.noses}>
            <div className={cn(style.nose, style[`nose-l`])}></div>
            <div className={cn(style.nose, style[`nose-r`])}></div>
          </div>
          <div className={style.piao}>在下飘飘是也~</div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
