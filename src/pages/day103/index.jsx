import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import _ from 'lodash';
import { useInterval } from '../../hooks/useInterval';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  const [degrees, setDegrees] = useState({
    hourDegree: 0,
    minuteDegree: 0,
    secondDegree: 0,
  });

  const clear = useInterval(
    () => {
      const time = new Date();
      const hour = time.getHours();
      const minute = time.getMinutes();
      const second = time.getSeconds();

      // 时 1-24
      const hourDegree = (hour / 12) * 360;
      const minuteDegree = (minute / 60) * 360;
      const secondDegree = (second / 60) * 360;

      setDegrees({
        hourDegree,
        minuteDegree,
        secondDegree,
      });
    },
    1000,
    degrees
  );

  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.dial}>
          <div className={style.lines}>
            {_.range(60).map((item) => (
              <div className={cn(style.line, style[`line-${item}`])}></div>
            ))}
            <div className={style.needle}>
              <div
                className={cn(style.hour)}
                style={{
                  transform: `translate(-50%, -100%) rotate(${degrees.hourDegree}deg)`,
                }}
              ></div>
              <div
                className={cn(style.minute)}
                style={{
                  transform: `translate(-50%, -100%) rotate(${degrees.minuteDegree}deg)`,
                }}
              ></div>
              <div
                className={cn(style.second)}
                style={{
                  transform: `translate(-50%, -220px) rotate(${degrees.secondDegree}deg)`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;

function timer() {
  var speed = 500,
    counter = 1,
    start = new Date().getTime();

  function instance() {
    var real = counter * speed,
      ideal = new Date().getTime() - start;

    counter++;

    var diff = ideal - real;
    form.diff.value = diff;

    window.setTimeout(function () {
      instance();
    }, speed - diff); // 通过系统时间进行修复
  }

  window.setTimeout(function () {
    instance();
  }, speed);
}