import React, { useState, useLayoutEffect } from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';
import useIntervalUP from '../../hooks/useIntervalUp';

function handleZero(val) {
  if (val < 10) return '0' + val;
  return val;
}

function updateInfo() {
  const time = new Date();
  const hour = handleZero(time.getHours());
  const minute = handleZero(time.getMinutes());
  const second = handleZero(time.getSeconds());

  return {
    date: {
      hour: hour,
      minute: minute,
      second: second,
    },
    heathyInfo: {
      heart: 60 + Math.floor(Math.random() * 160),
      kal: 1000 + Math.floor(Math.random() * 500),
    },
  };
}

const Index = () => {
  let [state, setInfo] = useState(updateInfo());
  const { date, heathyInfo } = state;

  useIntervalUP(() => {
    setInfo(updateInfo());
  }, 1000);

  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.watch}>
          <div className={style.strap}>
            <div className={style.dial}>
              <div className={style.svg1}>
                <svg className={style[`svg-circle`]}>
                  <circle className={style.circle}></circle>
                </svg>
              </div>
              <div className={style.svg2}>
                <svg className={style[`svg-circle`]}>
                  <circle className={style.circle}></circle>
                </svg>
              </div>
              <div className={style.info}>
                <div className={style.date}>
                  <div className={style.week}>Sat</div>
                  <div className={style.month}>19</div>
                  <div className={style.day}>Nov</div>
                  <div className={style.year}>2022</div>
                </div>
                <div className={style.time}>
                  <div className={style.hour}>{date.hour}</div>:
                  <div className={style.minute}>{date.minute}</div>:
                  <div className={style.second}>{date.second}</div>
                </div>
                <div className={style.heart}>
                  <div className={style.heartBreak}>
                    <svg viewBox="0 0 1024 1024" width="20" height="20">
                      <path
                        d="M586 577.8h135L512 814.4 303 577.8h48.4l56-99 80.6 172.2 68-139z"
                        fill="#fe506b"
                      ></path>
                      <path
                        d="M846.6 372.6c0 41.2-15 79-39.6 108.2l-2.2 2.4c-0.6 0.8-1.4 1.6-2 2.2L752 542.8h-140.6l-54.2-110.4-68.4 131.8-80.2-164.2-78.8 142.6H272l-50.6-57.2c-0.6-0.8-1.4-1.6-2-2.2l-2.2-2.4c-24.8-29.2-39.6-67-39.6-108.2 0-92.4 74.8-167.4 167.2-167.4 92.4 0 167.4 75 167.4 167.4 0-92.4 75-167.4 167.4-167.4 92 0 167 75 167 167.4z"
                        fill="#fe506b"
                      ></path>
                      <path
                        d="M209.6 534h62.2v17.4h-62.2zM721 569.2h82.6v17.4h-82.6z"
                        fill="#fe506b"
                      ></path>
                      <path
                        d="M749.6 543.2c-7.6 0-14.6-3-18.8-6.6-9.2-7.6-16.6-20.6-3.2-40.6l-0.4-0.2c0.2-0.2 1.4-1.8 4.6-5.4 0.2-0.4 0.6-0.6 0.8-1 0.2-0.2 0.4-0.4 0.4-0.6 3.2-4 8.2-9.8 15.2-18.4 22-26.4 36.8-48.2 42.6-74.4 5.6-25.8 2.8-53.2-7.8-76.8-12.8-28.6-44.8-52.8-81.4-61.6-15.6-3.8-25-19.4-21.4-34.8 3.8-15.6 19.4-25 34.8-21.4 54.2 13 100.4 49 120.6 94 15.8 34.8 19.8 74.8 11.8 112.8-9 42-33 73.2-54.6 99.2l-20.2 24.2c0 0.2-0.2 0.2-0.2 0.4l-0.6 0.6c-7 7.8-14.8 10.6-22.2 10.6zM512 808c-6.8 0-13.6-2.4-19.2-7.2-12-10.6-13-28.8-2.4-40.8l154.8-174.6c10.6-12 28.8-13 40.8-2.4 12 10.6 13 28.8 2.4 40.8l-154.8 174.6c-5.6 6.4-13.6 9.6-21.6 9.6z"
                        fill="#fe506b"
                      ></path>
                      <path
                        d="M488.4 583.6L408 418.8l-73.2 132.6H268l-57.4-64.8c-27-31.8-41.8-72.4-41.8-114 0-97 79-176 176-176 78 0 144.2 51 167.4 121.4 23-70.4 89.4-121.4 167.4-121.4 97 0 176 79 176 176 0 41.6-14.8 82-41.8 113.8l-2.4 2.6c-0.6 0.8-1.4 1.6-2.2 2.4L756 551.6h-150l-49-99.8-68.6 131.8z m-79.4-202.4l79.8 163.8 68.4-131.8 59.4 121H748l48.2-54.4c0.8-0.8 1.4-1.4 2-2.2l2.4-2.6c24.2-28.4 37.6-65 37.6-102.4 0-87.4-71.2-158.6-158.6-158.6-87.4 0-158.6 71.2-158.6 158.6h-17.4c0-87.4-71.2-158.6-158.6-158.6-87.4 0-158.6 71.2-158.6 158.6 0 37.6 13.4 74 37.6 102.6l52 58.8h48.8l84.2-152.8z"
                        fill="#fe506b"
                      ></path>
                      <path
                        d="M512 827.4L283.8 569.2h62.6L408 460l80 171 68.2-139.2 35.2 77.4H740L512 827.4z m-189.8-241L512 801.2l189.8-214.8h-121.4l-24.6-54.2-68 138.8-81.2-173.2-50 88.6h-34.4z"
                        fill="#fe506b"
                      ></path>
                    </svg>
                  </div>
                  <div className={style.heartCount}>{heathyInfo.heart}</div>
                  <div className={style.kl}>{heathyInfo.kal} kcal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
