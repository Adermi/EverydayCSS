import React, { useState } from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

import MenuBtn from '../../components/MenuBtn';

const Search = function (props) {
  const { color = '#b2daff', size = 40, ...args } = props;
  return (
    <svg
      viewBox="0 0 1024 1024"
      width={size}
      height={size}
      fill={color}
      style={{
        cursor: 'pointer',
      }}
      {...args}
    >
      <path d="M789.804097 737.772047 742.865042 784.699846 898.765741 940.600545 945.704796 893.672746Z"></path>
      <path d="M456.92259 82.893942c-209.311143 0-379.582131 170.282245-379.582131 379.582131s170.270988 379.570875 379.582131 379.570875c209.287607 0 379.558595-170.270988 379.558595-379.570875S666.210197 82.893942 456.92259 82.893942zM770.128989 462.477097c0 172.721807-140.508127 313.229934-313.206398 313.229934-172.720783 0-313.229934-140.508127-313.229934-313.229934s140.508127-313.229934 313.229934-313.229934C629.620861 149.247162 770.128989 289.75529 770.128989 462.477097z"></path>
    </svg>
  );
};

const Index = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.container}>
          <div
            className={cn(style.menu, {
              [style.menuActive]: menuOpen,
            })}
          >
            <div className={cn(style.head)}>
              <div
                className={cn(style.btn, {
                  [style.hidden]: searchOpen,
                })}
              >
                <MenuBtn
                  width={35}
                  height={28}
                  color={'#b2daff'}
                  durTime={0.5}
                  onClick={(e) => {
                    setMenuOpen((prev) => !prev);
                  }}
                ></MenuBtn>
              </div>
              <div className={style.centerTitle}>Notifications</div>
              <div className={style.search}>
                <Search
                  color="#b2daff"
                  size={35}
                  onClick={(e) => {
                    setSearchOpen((prev) => !prev);
                  }}
                />
              </div>
              <input
                type="text"
                className={cn(style.searchIpt, {
                  [style.active]: searchOpen,
                })}
                placeholder="请输入搜索内容..."
              />
            </div>
            <div className={style.notifications}>
              <div className={style.line}></div>
              {_.range(5).map((item) => {
                return (
                  <div
                    className={cn(
                      style.notification,
                      style[`notification-${item}`]
                    )}
                  >
                    <div className={style.circle}></div>
                    <div className={style.time}>9:24 AM</div>
                    <div className={style.plan}>
                      <span className={style.bold}>John Walker</span> posted a
                      photo on your wall.
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className={cn(style.backMenu, {
              [style.menuActive]: menuOpen,
            })}
          >
            {_.range(5).map((item) => {
              return <div className={style.item}>内容{item}</div>;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
