import React from 'react';
import cn from 'classnames';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.btn}>
          <span>HOVER ME</span>
          <svg
            width="180px"
            height="60px"
            viewBox="0 0 180 60"
            className={style.border}
          >
            <polyline
              points="179,1 179,59 1,59 1,1 179,1"
              className={style.bgLine}
            />
            <polyline
              points="179,1 179,59 1,59 1,1 179,1"
              className={style.hlLine}
            />
          </svg>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
