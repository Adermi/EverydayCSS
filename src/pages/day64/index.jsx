import React from 'react';
import cn from 'classnames';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.btn}>hover me</div>
      </div>
    </Layout>
  );
};

export default Index;
