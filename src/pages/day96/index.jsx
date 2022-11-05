import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.box}>
          <div className={style.down}>
            <div className={style.up}>
              <div className={style.squeeze}>
                <div className={style[`rotate-in`]}>
                  <div className={style[`rotate-out`]}>
                    <div className={style.square}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.shadow}></div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
