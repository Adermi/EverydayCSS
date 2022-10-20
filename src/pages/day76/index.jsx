import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.hiddenKey}>
          <form className={style.rotateBox}>
            <input
              type="text"
              className={style.ipt}
              placeholder='Enter "aa"'
              pattern="[aA]{2}" /* 正则 */
              required
            />
            <div className={style.key}>Secret Key</div>
          </form>
          <div className={style.backKey}>666</div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
