import React, { useState } from 'react';
import cn from 'classnames';

import style from './index.module.less';
import Icon from './icon/Icon';
import Layout from '../../components/Layout';
import { useBoolean } from 'ahooks';

const Index = () => {
  const [state, { toggle }] = useBoolean(true);

  return (
    <Layout className={style.frame} onClick={(e) => toggle()}>
      <div
        className={cn(style.logo, {
          [style.normal]: state,
          [style.big]: !state,
        })}
      >
        <Icon style={{ color: '#fff' }} />
      </div>
      <div
        className={cn(style.logo, {
          [style.small]: state,
          [style.normal]: !state,
        })}
      >
        <Icon style={{ color: '#9b59b6' }} />
      </div>
    </Layout>
  );
};

export default Index;
