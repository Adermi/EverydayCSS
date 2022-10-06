import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.from}>
          {_.range(18).map((item) => (
            <div className={cn(style.ellipse, style[`ellipse-${item}`])}></div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
