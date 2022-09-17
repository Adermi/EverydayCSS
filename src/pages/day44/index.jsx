import React from 'react';
import cn from 'classnames';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  let arr = [];

  for (let i = 1; i < 21; i++) {
    arr.push(i);
  }
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        {arr.map((item) => (
          <div className={cn(style.rect, style[`rect-${item}`])}></div>
        ))}
      </div>
    </Layout>
  );
};

export default Index;
