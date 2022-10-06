import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.point}>
          <input type="checkbox" id={style.cb}></input>
          <label for={style.cb} className={style.circle}></label>
          <div className={style.lines}>
            {_.range(1, 13).map((item) => (
              <div className={cn(style.line, style[`line-${item}`])}></div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
