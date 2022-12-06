import React, { useState } from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  const [arr, setArr] = useState([
    {
      task: '吃很多饭',
      state: false,
    },
    {
      task: '睡很长觉',
      state: false,
    },
    {
      task: '运很累动',
      state: false,
    },
  ]);

  function changeTaskState(e, idx) {
    const prevState = arr[idx].state;
    arr[idx].state = !prevState;
    setArr(JSON.parse(JSON.stringify(arr)));
  }

  console.log(arr);

  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.dayList}>
          <div className={style.head}>
            <div className={style.date}>Friday</div>
            <div className={style.mouth}>March 4, 2016</div>
          </div>
          <div className={style.line}></div>
          <ul className={style.tasks}>
            {arr.map((item, idx) => {
              return (
                <li
                  className={cn(style.task, {
                    [style.done]: item.state,
                  })}
                >
                  <div
                    className={style.taskName}
                    onClick={(e) => {
                      changeTaskState(e, idx);
                    }}
                  >
                    {item.task}
                  </div>
                  <div
                    className={style.circle}
                    onClick={(e) => {
                      changeTaskState(e, idx);
                    }}
                  ></div>
                  <svg
                    width={15}
                    height={10}
                    className={style.checkMark}
                    onClick={(e) => {
                      changeTaskState(e, idx);
                    }}
                  >
                    <polyline points="1,5 6,9 14,1" />
                  </svg>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
