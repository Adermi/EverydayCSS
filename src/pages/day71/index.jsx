import React from 'react';
import cn from 'classnames';

import style from './index.module.less';
import Layout from '../../components/Layout';

const arr = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.triggers}>
          {arr.map((item) => {
            return (
              <>
                <input
                  type="radio"
                  className={style.radio}
                  id={style[`radio-${item}`]}
                  name={'radio'}
                />
                <label
                  for={style[`radio-${item}`]}
                  className={cn(style.trigger, style[`trigger-${item}`])}
                >
                  {item}
                </label>
              </>
            );
          })}
          <div className={style.light}></div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
