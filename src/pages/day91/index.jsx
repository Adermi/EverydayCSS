import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const arr = ['bottom', 'left', 'right', 'back', 'front', 'top', 'fill-top'];

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.container}>
          <div className={style.loader}>
            {arr.map((item) => {
              return <div className={cn(style.plane, style[item])}></div>;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
