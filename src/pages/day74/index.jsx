import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.pagination}>
          {_.range(1, 5).map((item) => {
            return (
              <>
                <input
                  type="radio"
                  name="pagination"
                  id={`pag-ipt${item}`}
                  className={style[`pag-ipt`]}
                />
                <label
                  for={`pag-ipt${item}`}
                  className={cn(style.label, style[`label-${item}`])}
                >
                  {item}
                </label>
              </>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
