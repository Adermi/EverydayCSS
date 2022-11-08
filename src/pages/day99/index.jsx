import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <input type="checkbox" id={style.chkBox} />
        <label for={style.chkBox} className={style.rect}></label>
        <div className={style.mark}></div>
        <div className={style.circle}>
          {_.range(1, 19).map((item) => (
            <div className={cn(style.line, style[`line-${item}`])}></div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
