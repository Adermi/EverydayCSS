import React, { useEffect, useLayoutEffect, useRef } from 'react';
import cn from 'classnames';

import style from './index.module.less';
import Layout from '../../components/Layout';
import _ from 'lodash';

const Index = () => {
  let timer = useRef(null);

  useLayoutEffect(() => {
    const swiperItem = Array.from(
      document.querySelectorAll(`.${style['swiper-item']}`)
    );
    let idx = 0;

    eventInit();
    toggleClass();
    addInterval();

    // 浏览器页面切换会有动画累积的效果，页面切换，动画停止，但是定时器还在运转；页面切回来，执行定时器的效果，就会突然页面的动画不规则甚至混乱
    window.onblur = () => {
      clearInterval(timer.current);
    };

    window.onfocus = () => {
      addInterval();
    };

    function addInterval() {
      clearInterval(timer.current);
      timer.current = setInterval(() => {
        if (idx === swiperItem.length - 1) {
          idx = 0;
        } else {
          idx++;
        }
        console.log(idx);

        toggleClass();
      }, 3000);
    }

    // 给轮播图添加点击事件
    function eventInit() {
      swiperItem.forEach((swiperNode, i) => {
        swiperNode.addEventListener('click', function (e) {
          clearInterval(timer.current);
          const classList = this.classList;
          e.stopPropagation();

          if (classList.contains(style['swiper-next'])) {
            // 点击下一张
            if (idx === swiperItem.length - 1) {
              // 当前点击的是最后一张
              idx = 0;
            } else {
              idx++;
            }
            toggleClass();
          } else if (classList.contains(style['swiper-prev'])) {
            // 点击上一张
            if (idx === 0) {
              // 当前点击的是第一张
              idx = swiperItem.length - 1;
            } else {
              idx--;
            }
            toggleClass();
          } else {
            // 点击的别的
            return;
          }
          // 自动轮播
          addInterval();
        });
      });
    }

    // 更新所有轮播图的样式
    function toggleClass() {
      let p = idx - 1,
        m = idx,
        n = idx + 1;
      if (idx === 0) p = swiperItem.length - 1;
      if (idx === swiperItem.length - 1) n = 0;

      swiperItem.forEach((swiperNode, i) => {
        swiperNode.classList.remove(style['swiper-prev']);
        swiperNode.classList.remove(style['swiper-mid']);
        swiperNode.classList.remove(style['swiper-next']);
        if (i === p) swiperNode.classList.add(style['swiper-prev']);
        if (i === m) swiperNode.classList.add(style['swiper-mid']);
        if (i === n) swiperNode.classList.add(style['swiper-next']);
      });
    }
  }, []);

  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.banner}>
          {_.range(1, 7).map((item) => (
            <div key={item} className={style['swiper-item']}>
              <img src={`img/${item}.jpg`} alt="" />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
