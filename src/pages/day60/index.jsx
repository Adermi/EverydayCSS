import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        {_.range(0, 201).map((item) => (
          <div className={cn(style.trigger, style[`trigger-${item}`])}></div>
        ))}
        <div className={style.plane}>
          <div className={style[`text-front`]}>HOVER</div>
        </div>
        <div className={style['text-back']}>HOVER</div>
      </div>
    </Layout>
  );
};

export default Index;
