import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

let url =
  'https://cache.iamdelta.dev/article/nft-%E8%AE%BE%E7%BD%AE%E4%B8%BA-twitter-%E5%A4%B4%E5%83%8F%E7%9A%84%E6%AD%A5%E9%AA%A4/%E5%A6%82%E4%BD%95%E6%88%90%E4%B8%BA-twitter-blue-%E6%88%90%E5%91%98%E5%B9%B6%E5%B0%86-nft-%E8%AE%BE%E7%BD%AE%E4%B8%BA-twitter-%E4%B8%8A%E7%9A%84%E5%A4%B4%E5%83%8F.jpg';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.box}>
          <div className={style.left}>
            <div className={style.img}>
              <img src={url} alt="" />
              <svg className={style.circle}>
                <circle className={style[`circle-1`]}></circle>
                <circle className={style[`circle-2`]}></circle>
              </svg>
            </div>
            <div className={style.name}>Geeon Boom</div>
            <div className={style.title}>visual Arest</div>
            <div className={style.follow}>Follow</div>
            <div className={style.msg}>Message</div>
          </div>
          <div className={style.right}>
            <div className={style.info}>
              <div className={style.count}>523</div>
              <div className={style.desc}>Ports</div>
            </div>
            <div className={style.info}>
              <div className={style.count}>1258</div>
              <div className={style.desc}>Likes</div>
            </div>
            <div className={style.info}>
              <div className={style.count}>146</div>
              <div className={style.desc}>Follower</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
