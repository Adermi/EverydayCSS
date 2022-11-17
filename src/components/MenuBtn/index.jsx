import React, { useState } from 'react';
import cn from 'classnames';

import style from './index.module.less';

const MenuBtn = (props) => {
  const [menuOpen, setMenuOpen] = useState(null);
  const {
    width = 40,
    height = 35,
    color = '#000',
    durTime = 0.7,
    className = style.defaultStyle,
    ...args
  } = props;

  // 初始css属性
  const initProps = {
    '--x': width, // 按钮宽度
    '--y': height, // 按钮高度
    '--transitionDuringTime': durTime, // 按钮过渡事件
    '--color': color,
  };

  return (
    <div className={style.menuBtn} {...args}>
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
  );
};

export default MenuBtn;
