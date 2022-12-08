import React, { useState } from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  const [searchList, setSearchList] = useState([]);
  const [listShow, setListShow] = useState(false);

  function handleIptContent(e) {
    const val = e.target.value;
    console.log(val);
    setSearchList([
      {
        title: `今天:${val}`,
        id: 0,
      },
      {
        title: `后天:${val}`,
        id: 1,
      },
      {
        title: `后天:${val}`,
        id: 2,
      },
    ]);
  }

  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.searchBox}>
          <div className={style.searchIpt}>
            <input
              type="text"
              className={style.ipt}
              onChange={handleIptContent}
              onFocus={(e) => setListShow(true)}
              onBlur={(e) => setListShow(false)}
            />
            <span className={style.icon}>
              <svg viewBox="0 0 1024 1024" width="20" height="20">
                <path d="M416 192C537.6 192 640 294.4 640 416S537.6 640 416 640 192 537.6 192 416 294.4 192 416 192M416 128C256 128 128 256 128 416S256 704 416 704 704 576 704 416 576 128 416 128L416 128z"></path>
                <path d="M832 864c-6.4 0-19.2 0-25.6-6.4l-192-192c-12.8-12.8-12.8-32 0-44.8s32-12.8 44.8 0l192 192c12.8 12.8 12.8 32 0 44.8C851.2 864 838.4 864 832 864z"></path>
              </svg>
            </span>
          </div>
          {listShow && (
            <ul className={style.searchContent}>
              {searchList.map((item) => {
                return (
                  <li className={style.searchItem} key={item.id}>
                    {item.title}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
