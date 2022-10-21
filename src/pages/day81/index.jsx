import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.floor}></div>
        <div className={style.ballMove}>
          <div className={style.ballUp}>
            <div className={style.ballDown}>
              <div className={style.ball}></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
