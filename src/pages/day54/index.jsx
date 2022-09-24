import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={cn(style.wave, style.waveTop)}>
          {_.range(10).map((item) => (
            <div className={style.circle} key={item}></div>
          ))}
        </div>
        <div className={cn(style.wave, style.waveMiddle)}>
          {_.range(10).map((item) => (
            <div className={style.circle} key={item}></div>
          ))}
        </div>
        <div className={cn(style.wave, style.waveBottom)}>
          {_.range(10).map((item) => (
            <div className={style.circle} key={item}></div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
