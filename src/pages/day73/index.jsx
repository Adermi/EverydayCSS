import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.pre}>I'm a</div>
        <div className={style.slider}>
          <div className={style.sliderBox}>
            <div className={style.item}>Vue</div>
            <div className={style.item}>React</div>
            <div className={style.item}>Vue</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
