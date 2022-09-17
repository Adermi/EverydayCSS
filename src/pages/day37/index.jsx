import React from 'react';
import style from './index.module.less';
import Layout from '../../components/Layout';
import cn from 'classnames';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={cn(style.box, style.other)}></div>
        <div className={cn(style.box, style.prev)}></div>
        <div className={cn(style.box, style.middle)}></div>
        <div className={cn(style.box, style.next)}></div>
      </div>
    </Layout>
  );
};

export default Index;
