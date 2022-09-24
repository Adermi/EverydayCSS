import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        {_.range(12).map((circle) => (
          <div
            key={circle}
            className={cn(style.circle, style[`circle-${circle}`])}
          >
            {_.range(0, 12 + 6 * circle).map((point) => (
              <div
                key={`${circle}-${point}`}
                className={cn(style.point, style[`point-${point}`])}
              >
                <div className={style.fill}></div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Index;
