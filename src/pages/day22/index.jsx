import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.headLine}>
          <p className={style.mainTitle}>YOUR DAILY</p>
          <p className={style.secondTitle}>PROGRESS</p>
        </div>
        <div className={style.circleBig}>
          <div className={style.circle}>
            <svg className={style.svg}>
              <circle cx={55} cy={55} r={45} className={style.bg}></circle>
              <circle cx={55} cy={55} r={45} className={style.process}></circle>
            </svg>
            <div className={style.number}>
              2758
              <div className={style.unit}>kcal</div>
            </div>
          </div>
        </div>
        <div className={style.circleSmall}>
          <div className={style.circle}>
            <svg className={style.svg}>
              <circle cx={40} cy={40} r={30} className={style.bg}></circle>
              <circle cx={40} cy={40} r={30} className={style.process}></circle>
            </svg>
            <div className={style.number}>
              546
              <div className={style.unit}>kcal</div>
            </div>
          </div>
          <div className={style.circle}>
            <svg className={style.svg}>
              <circle cx={40} cy={40} r={30} className={style.bg}></circle>
              <circle cx={40} cy={40} r={30} className={style.process}></circle>
            </svg>
            <div className={style.number}>
              22
              <div className={style.unit}>kcal</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
