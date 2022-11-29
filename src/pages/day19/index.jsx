import React, { useState } from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  const [selectId, setSelectId] = useState(0);

  const initProps = {
    count: 4, // 轮播图的数量
    width: 300, // 轮播图的宽度
    height: 300, // 轮播图高度
    circleGap: 6, // 轮播图按钮组间距
    circleR: 30, // 轮播图按钮大圈半径
    circleBorder: 2, // 轮播图按钮外边框
    activeR: 22, // 轮播图按钮内心半径
    transitionTime: 0.5, // 轮播图整体速度
  };

  // 全局属性
  const globalCSSproperty = {
    '--count': initProps.count,
    '--width': initProps.width,
    '--height': initProps.height,
    '--transitionTime': initProps.transitionTime,
  };

  // 目录列表组初始属性
  const circleGroupInitCSSProperty = {
    '--circleGap': initProps.circleGap,
    '--circleR': initProps.circleR,
    '--circleBorder': initProps.circleBorder,
    '--activeR': initProps.activeR,
  };

  // 计算目录列表移动距离
  const { width, circleGap, circleR, activeR } = initProps;
  const showBoxMove = width * selectId;
  const activeMove = (circleR - activeR) / 2 + (circleR + circleGap) * selectId;

  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.container} style={globalCSSproperty}>
          <div
            className={style.showBox}
            style={{
              transform: `translate(-${showBoxMove}px, 0)`,
            }}
          >
            {_.range(initProps.count).map((item) => {
              return (
                <div className={cn(style.slider, style[`slider-${item}`])}>
                  {item}
                </div>
              );
            })}
          </div>
          <div className={style.circles} style={circleGroupInitCSSProperty}>
            {_.range(initProps.count).map((item) => {
              return (
                <div
                  className={style.circle}
                  onClick={(e) => {
                    setSelectId(item);
                  }}
                ></div>
              );
            })}
            <div
              className={style.active}
              style={{
                transform: `translate(${activeMove}px, -50%)`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
