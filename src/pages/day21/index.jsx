import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <svg className={style.head}>
          <circle cx={150} cy={150} r={50}></circle>
        </svg>
        <svg className={style.eye}>
          <circle cx={10} cy={10} r={10}></circle>
        </svg>
        <svg className={style.dots}>
          <polyline points="0,7 240,7" />
        </svg>
      </div>
    </Layout>
  );
};

export default Index;
