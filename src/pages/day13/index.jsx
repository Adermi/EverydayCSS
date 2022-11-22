import React, { useState } from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  const [active, setActive] = useState(false);
  const [select, setSelect] = useState(0);
  const imgList = [
    'https://100dayscss.com/codepen/13-1.jpg',
    'https://100dayscss.com/codepen/13-2.jpg',
    'https://100dayscss.com/codepen/13-3.jpg',
    'https://100dayscss.com/codepen/13-4.jpg',
  ];
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.showImg}>
          {imgList.map((item, idx) => {
            return (
              <div className={style.imgCom} key={item}>
                <img src={item} alt="" />
                <div className={style.btnCom}>
                  <div
                    className={style.btn}
                    onClick={(e) => {
                      setActive((prev) => !prev);
                      setSelect(idx);
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className={cn(style.showInfo, {
            [style.active]: active,
          })}
        >
          <div className={style[`bgc-img`]}></div>

          <div className={style[`bgc-content`]}>
            <div className={style.name}>Julia Toth</div>
            <div className={style.intro}>
              <div className={style.icon}></div>
              <div className={style.icon}></div>
              <div className={style.icon}></div>
            </div>
          </div>
          <div className={style.btnCom}>
            <div
              className={style.close}
              onClick={(e) => setActive((prev) => !prev)}
            ></div>
          </div>
          <div className={style.avatar}>
            <img src={imgList[select]} alt="" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
