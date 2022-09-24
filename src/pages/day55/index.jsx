import React from 'react';
import cn from 'classnames';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.thermostat}>
          <div className={style.ring}>
            <div className={style.bottomOverlay}></div>
          </div>
          <div className={style.control}>
            <div className={style.line}></div>
            <div className={style.top}>23°</div>
            <div className={style.mid}>
              19<span>。</span>
            </div>
            <div className={cn(style.mid, style.two)}>
              35<span>。</span>
            </div>
            <div className={style.bottom}>bedroom</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
