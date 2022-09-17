import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        {_.range(1, 301).map((item) => (
          <div
            key={item}
            className={cn(style.star, style[`star-${item}`])}
            style={{
              top: Math.random() * 300 + 'px',
              left: Math.random() * 300 + 'px',
              animation: `${(Math.random() * 20 + 20) / 20}s ${style.flicker} ${
                Math.random() * 20 - 10
              } infinite`,
            }}
          ></div>
        ))}
        {_.range(1, 8).map((item) => (
          <div
            key={item}
            className={cn(
              style['shooting-star'],
              style[`shooting-star${item}`]
            )}
            style={{
              top: Math.random() * 120 - 30,
              animation: `${style.shooting} ${
                Math.random() * 5 + 12
              }s infinite ${Math.random() * 18}s`,
            }}
          ></div>
        ))}
      </div>
    </Layout>
  );
};

export default Index;
