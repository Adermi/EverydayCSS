import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.circle}></div>
        <div className={cn(style.line, style.left)}></div>
        <div className={cn(style.line, style.right)}></div>
        <div className={style.big}>
          <div className={cn(style.bigLine, style.left)}></div>
          <div className={cn(style.bigLine, style.right)}></div>
          moments
          <div className={cn(style.smallFont, style.top)}>COLLECT</div>
          <div className={cn(style.smallFont, style.bottom)}>NOT THINGS</div>
          <div className={cn(style.mark, style.markTop)}></div>
          <div className={cn(style.mark, style.markBottom)}></div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
