import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.book}>
          <div className={style.title}>
            <div className={style.big}>
              这是本
              <br /> 禁书
            </div>
            <div className={style.small}>by xyb</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
