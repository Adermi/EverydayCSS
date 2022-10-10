import React from 'react';
import cn from 'classnames';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.eye}>
          <div className={style.ball}>
            <div className={style.iris}></div>
          </div>
        </div>
        <div className={style[`lid-top`]}>
          <svg width="240px" height="106px" viewBox="0 0 240 106">
            <path
              d="M239.461093,106 L240,106 L240,0 L0,0 L0,106 L0.538906982,106 C5.9904782,95.5378089 52.3717687,81 120,81 C187.628231,81 234.009522,95.5378089 239.461093,106 Z"
              class="lid"
            ></path>
          </svg>
        </div>
        <div className={style[`lid-bottom`]}>
          <svg width="240px" height="106px" viewBox="0 0 240 106">
            <path
              d="M239.461093,106 L240,106 L240,0 L0,0 L0,106 L0.538906982,106 C5.9904782,95.5378089 52.3717687,81 120,81 C187.628231,81 234.009522,95.5378089 239.461093,106 Z"
              class="lid"
            ></path>
          </svg>
        </div>
      </div>
      <div className={cn(style.center, style.eye2)}>
        <div className={style.eye}>
          <div className={style.ball}>
            <div className={style.iris}></div>
          </div>
        </div>
        <div className={style[`lid-top`]}>
          <svg width="240px" height="106px" viewBox="0 0 240 106">
            <path
              d="M239.461093,106 L240,106 L240,0 L0,0 L0,106 L0.538906982,106 C5.9904782,95.5378089 52.3717687,81 120,81 C187.628231,81 234.009522,95.5378089 239.461093,106 Z"
              class="lid"
            ></path>
          </svg>
        </div>
        <div className={style[`lid-bottom`]}>
          <svg width="240px" height="106px" viewBox="0 0 240 106">
            <path
              d="M239.461093,106 L240,106 L240,0 L0,0 L0,106 L0.538906982,106 C5.9904782,95.5378089 52.3717687,81 120,81 C187.628231,81 234.009522,95.5378089 239.461093,106 Z"
              class="lid"
            ></path>
          </svg>
        </div>
      </div>
      <div className={cn(style.mouse)}>
        {/* <svg viewBox="0 0 1024 1024" width="350" height="350">
          <path d="M975.5 502.5C840.9 385.8 732.3 312 685.4 304.4c-8.2-1.3-15.4-1.8-21.6-1.8-15 0-23.8 2.7-23.8 2.7-35.9 11.2-37.8 41.2-78 56.4-19.9 7.6-38.9 7.6-50 7.6s-30.1 0-50-7.6c-40.1-15.3-42.1-45.2-78-56.4 0 0-8.7-2.7-23.8-2.7-6.2 0-13.5 0.5-21.6 1.8-46.8 7.5-154.8 80.9-288.8 196.9-11.6 10-23.4 20.4-35.3 31.1-7.6 6.7-7.1 18.7 1.1 24.8 7.1 5.3 14.2 10.4 21.3 15.3 203.4 141.2 410 148.9 475.1 148.9 227 0 393.6-92.8 474.2-148.3 8.3-5.7 15.7-11.1 22.2-15.8 8.2-6 8.7-18.1 1.1-24.8-11.5-10.4-22.8-20.4-34-30z m-730.8-74.7c77.5-55.1 103.1-60 104.1-60.2 4-0.6 7.8-1 11.5-1s7.2 1.5 9.8 4.2c1.4 1.5 3 3.2 4.2 4.5 12.3 13.2 30.8 33.3 65 46.3 30.9 11.8 59.2 11.8 72.8 11.8s41.8 0 72.8-11.8c34.2-13 52.7-33 65-46.3 1.3-1.4 2.8-3 4.2-4.5 2.6-2.7 6.1-4.2 9.8-4.2 3.6 0 7.5 0.3 11.4 1 1 0.2 26.6 5.1 104.1 60.2 18.5 13.2 38.2 28 59 44.2-7.2-1-14.3-1.8-21.3-2.5-52.9-5.5-103.4-4.3-150.1 3.4-3.5 0.6-7.4 1.3-11.8 2-29 5.1-77.4 13.5-143 13.5-65.7 0-114.2-8.5-143.1-13.6-4.3-0.8-8.2-1.4-11.7-2-46.7-7.7-97.2-8.9-150-3.6-6.9 0.7-13.9 1.5-21 2.4 20.3-16.1 39.9-30.8 58.3-43.8z m579 163C724.2 635 619.3 657.4 512 657.4c-60.4 0-124.7-8.1-185.9-23.3-70.6-17.6-137-44.3-198.6-79.8-3.2-1.8-2.4-6.6 1.1-7.4C209 529 282 525.3 346.7 536c3.3 0.5 7 1.2 11 1.9 31 5.4 83 14.5 154.2 14.5 71.2 0 123.1-9.1 154.1-14.5 4.1-0.7 7.8-1.4 11.1-1.9 64.4-10.6 137.1-6.8 217.1 11.2 3.6 0.8 4.3 5.6 1.1 7.4-23.2 13.2-47.2 25.4-71.6 36.2z"></path>
        </svg> */}
        <svg viewBox="0 0 1024 1024" width="350" height="350">
          <path d="M685.4 271c-8.2-1.3-15.4-1.8-21.6-1.8-15 0-23.8 2.7-23.8 2.7-35.9 11.2-37.8 41.2-78 56.4-19.9 7.6-38.9 7.6-50 7.6s-30.1 0-50-7.6c-40.1-15.3-42.1-45.2-78-56.4 0 0-8.7-2.7-23.8-2.7-6.2 0-13.5 0.5-21.6 1.8-50.9 8.2-173.9 94.1-324.2 228-7.6 6.7-7.1 18.8 1.1 24.8C225.6 679.8 444.6 688 512 688c250.5 0 427.3-113 496.4-164.2 8.2-6 8.7-18.1 1.1-24.8-150.2-133.9-273.3-219.8-324.1-228z m225.9 240.8c-127.2-46.2-139.2-24.8-234.1-9.2-3.3 0.5-7 1.2-11.1 1.9-31 5.4-82.9 14.5-154.1 14.5s-123.1-9.1-154.2-14.5c-4.1-0.7-7.8-1.4-11-1.9-91.2-15-105.8-34.8-219.5 4.1-10.8 1.8-21.3 3.6-32.1 5.3H68.7c-4.3 0-5.6-5.9-1.6-7.7 52.7-23.5 73-52.8 116.9-64.4 7-1.9 14.7-3.3 23.1-4.1 52.9-5.3 103.3-4.1 150 3.6 3.4 0.6 7.3 1.3 11.7 2 29 5.1 77.5 13.6 143.1 13.6s114.1-8.5 143-13.5c4.4-0.8 8.3-1.5 11.8-2 46.7-7.7 97.2-8.8 150.1-3.4 9.1 0.9 17 2.5 23.9 4.6 39.9 11.9 50.3 40.4 100.5 63.7 3.9 1.8 2.6 7.6-1.7 7.6-13.2-0.1-28-0.2-28.2-0.2z"></path>
        </svg>
      </div>
    </Layout>
  );
};

export default Index;