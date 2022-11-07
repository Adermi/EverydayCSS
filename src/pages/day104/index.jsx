import React from 'react';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div
          className={style[`track-btn`]}
          onMouseMove={(e) => {
            console.log(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
            e.target.style.setProperty('--x', `${e.nativeEvent.offsetX}px`);
            e.target.style.setProperty('--y', `${e.nativeEvent.offsetY}px`);
          }}
        >
          使用CSS变量，特效大大滴好
        </div>
        <div className={style.card}>666</div>
      </div>
    </Layout>
  );
};

export default Index;
