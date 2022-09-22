import React from 'react';
import cn from 'classnames';

import style from './index.module.less';
import Layout from '../../components/Layout';
import _ from 'lodash';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        {_.range(1, 401).map((item) => (
          <div className={cn(style.trigger, style[`trigger-${item}`])}>
            {/* {item} */}
          </div>
        ))}
        <div className={style.mouse}></div>
      </div>
    </Layout>
  );
};

export default Index;
