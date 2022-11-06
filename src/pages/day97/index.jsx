import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.personal}>
          <div className={style.head}></div>
          <div className={style.body}>
            <div className={style.arms}>
              <div className={cn(style.arm, style[`arm-l`])}>
                <div className={cn(style.hand, style[`hand-l`])}></div>
              </div>
              <div className={cn(style.arm, style[`arm-r`])}>
                <div className={cn(style.hand, style[`hand-r`])}></div>
              </div>
            </div>
            <div className={style.legs}>
              <div className={style.leg}></div>
              <div className={style.leg}></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
