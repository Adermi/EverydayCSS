import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        {_.range(20).map((item) => {
          return <div className={style.div}>666</div>;
        })}
      </div>
    </Layout>
  );
};

export default Index;
