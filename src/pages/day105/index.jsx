import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={cn(style.bruce, style[`flex-ct-x`])}>
          <div
            className={style[`parallax-btn`]}
            dataName="妙用CSS变量，让你的CSS变得更心动"
            onMouseMove={(e) => {
              let btnRect = e.target.getBoundingClientRect();
              let style = e.target.style;
              let dx = e.nativeEvent.offsetX - btnRect.width / 2;
              let dy = e.nativeEvent.offsetY - btnRect.height / 2;
              style.setProperty('--rx', `${dy / -1}deg`);
              style.setProperty('--ry', `${dx / 10}deg`);
            }}
            onMouseUp={(e) => {
              e.target.style.setProperty('--tz', '-12px');
            }}
            onMouseDown={(e) => {
              e.target.style.setProperty('--tz', '-25px');
            }}
            onMouseLeave={(e) => {
              e.target.style.setProperty('--ty', '0');
              e.target.style.setProperty('--rx', '0');
              e.target.style.setProperty('--ry', '0');
            }}
          >
            妙用CSS变量,让你的CSS变得更心动
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
