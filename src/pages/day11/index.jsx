import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.people}>
          <div className={cn(style.leg, style.left)}>
            <div className={style.shoe}></div>
          </div>
          <div className={cn(style.leg, style.right)}>
            <div className={style.shoe}></div>
          </div>
        </div>
        <div className={style.floor}></div>
      </div>
    </Layout>
  );
};

export default Index;
