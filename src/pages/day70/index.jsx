import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        {_.range(16, 20).map((item) => (
          <div className={style.box}>
            <div className={style.month}>Friday</div>
            <div className={style.day}>{item}</div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Index;
