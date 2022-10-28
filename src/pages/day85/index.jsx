import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.wave}>
          {_.range(1, 201).map((item) => {
            return <div className={cn(style.dot, style[`dot-${item}`])}></div>;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
