import React from 'react';
import cn from 'classnames';
import { useBoolean } from 'ahooks';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  const [state, { toggle, setTrue }] = useBoolean(false);
  const arr = ['Home', 'Html', 'Css', 'Javascript'];

  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div
          className={cn(style.menu, {
            [style.active]: state,
          })}
        >
          <ul>
            {arr.map((item) => (
              <li onClick={(e) => toggle()}>{item}</li>
            ))}
          </ul>
        </div>
        <div
          className={cn(style.lines, {
            [style.active]: state,
          })}
          onClick={(e) => setTrue()}
        >
          <div className={cn(style.line, style.topLine)}></div>
          <div className={cn(style.line, style.bottomLine)}></div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
