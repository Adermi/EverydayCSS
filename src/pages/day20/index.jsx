import React, { useState } from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  const [send, setSend] = useState(false);
  console.log(send);

  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div
          className={cn(style.btn, {
            [style.sendMsg]: send,
          })}
          onClick={(e) => setSend(true)}
        >
          SEND MAIL
        </div>
        <div
          className={cn(style.btnReset, {
            [style.sendMsg]: send,
          })}
          onClick={(e) => setSend(false)}
        >
          RESET
        </div>
        <div className={style.circle}>
          <div
            className={cn(style.circleInside, {
              [style.sendMsg]: send,
            })}
          ></div>
          <div
            className={cn(style.circleOut, {
              [style.sendMsg]: send,
            })}
          ></div>
          <svg
            className={cn(style.icon, style.mail, {
              [style.send]: send,
            })}
          >
            <polyline points="119,1 119,69 1,69 1,1"></polyline>
            <polyline points="119,1 60,45 1,1 119,1"></polyline>
          </svg>
          <svg
            className={cn(style.icon, style.plane, {
              [style.send]: send,
            })}
          >
            <polyline points="119,1 1,59 106,80 119,1"></polyline>
            <polyline points="119,1 40,67 43,105 69,73"></polyline>
          </svg>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
