import React from 'react';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.a}>a</div>
        <div className={style.box}></div>
        <div className={style.a}>a</div>
        <div className={style.b}>b</div>
        <div className={style.a}>b</div>
      </div>
    </Layout>
  );
};

export default Index;
