import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        {_.range(1, 18).map((item) => (
          <div className={cn(style.leaf, style[`leaf-${item}`])}>
            <div className={style.fill}></div>
          </div>
        ))}
        <div className={style.dot}></div>
      </div>
    </Layout>
  );
};

export default Index;
