import React, { useState, useRef, useEffect } from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';
import { LeftCircleFilled } from '@ant-design/icons';

const Index = (props) => {
  const [menuOpen, setMenuOpen] = useState(null);
  const { width = 40, height = 35, className = style.defaultStyle } = props;

  // 初始css属性
  const initProps = {
    '--x': width, // 按钮宽度
    '--y': height, // 按钮高度
    '--transitionDuringTime': 0.7, // 按钮过渡事件
  };

  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div
          className={cn(
            {
              [style.open]: menuOpen === true,
              [style.close]: menuOpen === false,
            },
            style.button,
            className
          )}
          onClick={(e) => {
            setMenuOpen((pre) => {
              if (pre == null) return true;
              return pre ? false : true;
            });
          }}
          // ref={btnRef}
          style={initProps}
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
