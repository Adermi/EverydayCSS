import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <input type="checkbox" id={style['cb-1']} />
        <label for={style['cb-1']} className={style.label}></label>
        <div className={style.microphone}>
          <svg width="100px" height="100x" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="47" className={style.circle}></circle>
          </svg>
          <div className={style.icon}>
            <div className={style.body}>
              <div className={style.fill}></div>
            </div>
            <div className={style[`footer-v`]}></div>
            <div className={style[`footer-h`]}></div>
          </div>
          <div className={style.dots}>
            {_.range(1, 4).map((item) => (
              <div className={cn(style.dot, style[`dot-${item}`])}></div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
