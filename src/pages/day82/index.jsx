import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <input type="checkbox" value="btn" id={style.checkBox} />
        <label for={style.checkBox} className={style.button}>
          <div className={cn(style.btn, style.btnFront)}>SEND</div>
          <div className={cn(style.btn, style.btnBack)}>OK</div>
        </label>
      </div>
    </Layout>
  );
};

export default Index;
