import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        {_.range(1, 21).map((item) => (
          <div className={cn(style.rect, style[`rect-${item}`])}></div>
        ))}
      </div>
    </Layout>
  );
};

export default Index;
