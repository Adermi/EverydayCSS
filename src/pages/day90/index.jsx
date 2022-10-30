import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.space}></div>
        {_.range(1, 301).map((item) => (
          <div className={cn(style.trigger, style[`trigger-${item}`])}></div>
        ))}
        <div className={style.lines}>
          {_.range(1, 20).map((item) => {
            return (
              <div className={cn(style.line, style[`line-${item}`])}>
                <div className={style.left}></div>
                <div className={style.right}></div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
