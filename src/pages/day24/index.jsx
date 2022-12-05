import React, { useState } from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  const [state, setState] = useState(false);

  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div
          className={cn(style.button, {
            [style.active]: state,
          })}
        >
          <div
            className={style.finish}
            onClick={(e) => {
              setState(!state);
            }}
          >
            finish
            <img
              className={style.okImg}
              src="https://100dayscss.com/codepen/checkmark-green.svg"
              alt=""
            />
          </div>
          <svg className={style.circle}>
            <circle cx={30} cy={30} r={29}></circle>
          </svg>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
