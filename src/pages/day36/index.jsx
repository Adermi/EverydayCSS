import React, { useState } from 'react';
import style from './index.module.less';
import Layout from '../../components/Layout';
import cn from 'classnames';

const Day036 = () => {
  const [selectIdx, setSelectIdx] = useState(0);
  const arr = [0, 1, 2, 3];
  const arr2 = ['Dashboard', 'WDashboard', 'SDashboard', 'TDashboard'];
  const arr3 = [190, 240, 205, 230, 83];

  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.tabs}>
          <div className={style.top}></div>

          <div className={style.nav}>
            {arr.map((item, i) => (
              <div
                className={cn({
                  [style.tab]: true,
                  [style.select]: i === selectIdx,
                })}
                key={i}
                onClick={(e) => {
                  setSelectIdx(i);
                }}
              >
                <span>{item}</span>
              </div>
            ))}

            <div className={style.flex}></div>

            <div className={cn(style.tab, style.search)}>
              <span>关闭</span>
            </div>
          </div>

          <div className={style.content}>
            {arr2.map((item, i) => (
              <div
                className={cn({
                  [style.box]: true,
                  [style.boxSelect]: i === selectIdx,
                })}
                key={i}
              >
                <h1>{item}</h1>
                <p>
                  {arr3.map((val, i) => {
                    return <span style={{ width: `${val}px` }} key={i}></span>;
                  })}
                </p>
                <p>
                  {arr3.map((val, i) => {
                    return <span style={{ width: `${val}px` }} key={i}></span>;
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Day036;
