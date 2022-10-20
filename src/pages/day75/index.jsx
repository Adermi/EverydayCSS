import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.circle}>
          {_.range(1, 7).map((item) => (
            <div className={cn(style.ring, style[`ring-${item}`])}></div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
