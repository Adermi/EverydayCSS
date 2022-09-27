import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.form}>
          {_.range(1, 20).map((item) => {
            return (
              <div className={cn(style.slice, style[`slice-${item}`])}></div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
