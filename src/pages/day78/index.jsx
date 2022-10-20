import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        {_.range(1, 4).map((item) => {
          return (
            <div
              key={item}
              className={cn(style.button, style[`button-${item}`])}
            >
              Hover Me
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Index;
