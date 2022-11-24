import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.card}>
          <div className={style.front}>
            <img src="https://100dayscss.com/codepen/bycicle.svg" alt="" />
            <div className={style.street}>
              {_.range(10).map((item) => {
                return <div className={style[`street-${item}`]}></div>;
              })}
            </div>
          </div>
          <div className={style.back}>
            <img src="https://100dayscss.com/codepen/helicopter.svg" />
            <div className={style.cloud}>
              {_.range(10).map((item) => {
                return <div className={style[`cloud-${item}`]}></div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
