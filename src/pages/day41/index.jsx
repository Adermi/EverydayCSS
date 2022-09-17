import React from 'react';
import cn from 'classnames';
import style from './index.module.less';
import Layout from '../../components/Layout/index';
import { useBoolean } from 'ahooks';

const Index = () => {
  const [state, { toggle }] = useBoolean(true);
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div
          className={cn(style.card, {
            [style.hidden]: !state,
          })}
        >
          <img
            src="https://100dayscss.com/codepen/alert.png"
            width="44"
            height="38"
          />
          <span className={style.title}>Oh snap!</span>
          <p>An error has occured while creating an error report.</p>
          <div className={style.button} onClick={(e) => toggle()}>
            Dismiss
          </div>
        </div>
        <div
          className={cn(style.appear, {
            [style.active]: !state,
            [style.hidden]: state,
          })}
          onClick={(e) => toggle()}
        >
          点我
        </div>
      </div>
    </Layout>
  );
};

export default Index;
