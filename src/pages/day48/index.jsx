import React from 'react';
import cn from 'classnames';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  const arr = ['front', 'back', 'left', 'right', 'top', 'bottom'];
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        {arr.map((item) => (
          <div
            key={item}
            className={cn({
              [style.side]: true,
              [style[item]]: true,
            })}
          ></div>
        ))}
      </div>
    </Layout>
  );
};

export default Index;
