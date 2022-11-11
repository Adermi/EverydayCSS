import React, { useState } from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(null);

  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div
          className={cn({
            [style.button]: true,
            [style.open]: menuOpen === true,
            [style.close]: menuOpen === false,
          })}
          onClick={(e) => {
            setMenuOpen((pre) => {
              if (pre == null) return true;
              return pre ? false : true;
            });
          }}
        >
          <div className={cn(style.line, style[`line-top`])}></div>
          <div className={cn(style.line, style[`line-mid`])}></div>
          <div className={cn(style.line, style[`line-bottom`])}></div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
