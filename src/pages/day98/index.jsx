import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.boxs}>
          <div className={cn(style.box, style[`box-t`])}></div>
          <div className={cn(style.box, style[`box-r`])}></div>
          <div className={cn(style.box, style[`box-b`])}></div>
          <div className={cn(style.box, style[`box-l`])}></div>
        </div>
        <div className={style.elements}>
          <div
            className={cn(
              style.square,
              style[`square-1`],
              style.small,
              style.c1
            )}
          ></div>
          <div
            className={cn(style.square, style[`square-2`], style.big, style.c2)}
          ></div>
          <div className={cn(style.square, style[`square-3`], style.c1)}></div>
          <div
            className={cn(
              style.square,
              style[`square-4`],
              style.small,
              style.c3
            )}
          ></div>
          <div className={cn(style.square, style[`square-5`], style.c1)}></div>
          <div
            className={cn(style.square, style[`square-6`], style.big, style.c1)}
          ></div>
          <div className={cn(style.square, style[`square-7`], style.c3)}></div>
          <div
            className={cn(
              style.square,
              style[`square-8`],
              style.small,
              style.c3
            )}
          ></div>

          <div
            className={cn(
              style.circle,
              style[`circle-1`],
              style.small,
              style.c1
            )}
          ></div>
          <div
            className={cn(style.circle, style[`circle-2`], style.big, style.c2)}
          ></div>
          <div className={cn(style.circle, style[`circle-3`], style.c1)}></div>
          <div
            className={cn(
              style.circle,
              style[`circle-4`],
              style.small,
              style.c3
            )}
          ></div>
          <div className={cn(style.circle, style[`circle-5`], style.c1)}></div>
          <div
            className={cn(style.circle, style[`circle-6`], style.big, style.c1)}
          ></div>
          <div className={cn(style.circle, style[`circle-7`], style.c3)}></div>
          <div
            className={cn(
              style.circle,
              style[`circle-8`],
              style.small,
              style.c3
            )}
          ></div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
