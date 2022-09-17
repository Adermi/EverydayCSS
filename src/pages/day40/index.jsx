import React, { useState } from 'react';
import cn from 'classnames';
import Layout from '../../components/Layout/index';
import style from './index.module.less';
import { useBoolean } from 'ahooks';

export default function index() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [idx, sexIdx] = useState(-1);
  const [state, { toggle }] = useBoolean(false);

  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.pics}>
          {arr.map((item) => {
            return (
              <div
                className={cn(style.pic, style[`pic-${item}`], {
                  [style.active]: state && idx === item,
                  [style.away]: state && idx !== item,
                })}
                onClick={(e) => {
                  sexIdx(item);
                  toggle();
                }}
              >
                <img
                  src={`https://100dayscss.com/codepen/40-${item}.jpg`}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
