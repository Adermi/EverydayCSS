import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.word}>
          <div className={style.ee}>
            <div className={cn(style.light, style.left)}></div>
            <div className={cn(style.light, style.top)}></div>
            <div className={cn(style.light, style.mid)}></div>
            <div className={cn(style.light, style.bottom)}></div>
          </div>
          <div className={style.nn}>
            <div className={cn(style.light, style.left)}></div>
            <div className={cn(style.light, style.mid)}></div>
            <div className={cn(style.light, style.right)}></div>
          </div>
          <div className={style.dd}>
            <div className={cn(style.light, style.left)}></div>
            {/* 实现方法一:障眼法 */}
            <div className={style.right}>
              <div className={style.circleBox}>
                <div className={style.circle}></div>
              </div>
              <div className={style.topDotBox}>
                <div className={cn(style.light, style.dot)}></div>
              </div>
              <div className={style.bottomDotBox}>
                <div className={cn(style.light, style.dot)}></div>
              </div>
            </div>
            {/* 实现方法二:svg大法 */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
