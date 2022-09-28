import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.slices}>
          {_.range(1, 9).map((item) => {
            return (
              <div className={cn(style.slice, style[`slice-${item}`])}></div>
            );
          })}
          <div className={style.text}>
            <h1>Hover</h1>
            <h2>Transition</h2>
          </div>
          <div className={style.text2}>
            <h1>Hover</h1>
            <h2>Transition</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
