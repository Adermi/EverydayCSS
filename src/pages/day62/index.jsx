import React, { useState, useMemo } from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  const [idx, setIdx] = useState(-1);
  const packages = [
    {
      title: 'Basic',
      price: '5',
      content: [20, 40, 15],
    },
    {
      title: 'Pro',
      price: '8',
      content: [40, 60, 30],
    },
    {
      title: 'Premium',
      price: '10',
      content: [80, 180, 45],
    },
  ];

  const [select, opt] = useMemo(() => {
    const select = idx === -1 ? [10, 100, 10] : packages[idx]?.content;
    const copSelect = _.cloneDeep(select);
    copSelect[0] /= 100 / 100;
    copSelect[1] /= 200 / 100;
    copSelect[2] /= 50 / 100;

    return [select, copSelect];
  }, [idx]);

  console.log(opt);

  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.planBox}>
          {packages.map((item, i) => (
            <div
              className={style.plan}
              onMouseEnter={(e) => setIdx(i)}
              onMouseLeave={(e) => setIdx(-1)}
            >
              <div className={style.title}>{item.title}</div>
              <div className={style.price}>
                ${item.price}
                <div className={style.dateLoop}>per month</div>
              </div>

              <div className={style.lines}>
                <div className={style.line}></div>
                <div className={style.line}></div>
                <div className={style.line}></div>
                <div className={style.line}></div>
              </div>
            </div>
          ))}
        </div>
        <div className={style.datas}>
          <div className={cn(style.data, style.users)}>
            <div className={style.text}>
              <div className={style.left}>{select[0]} Users</div>
              <div className={style.right}>100 Users</div>
            </div>
            <div className={style.line}>
              <div className={style.fill} style={{ width: `${opt[0]}%` }}></div>
            </div>
          </div>

          <div className={style.data}>
            <div className={style.text}>
              <div className={style.left}>{select[1]}GB</div>
              <div className={style.right}>200 GB</div>
            </div>
            <div className={style.line}>
              <div className={style.fill} style={{ width: `${opt[1]}%` }}></div>
            </div>
          </div>

          <div className={style.data}>
            <div className={style.text}>
              <div className={style.left}>Project{select[2]}</div>
              <div className={style.right}>Project50</div>
            </div>
            <div className={style.line}>
              <div className={style.fill} style={{ width: `${opt[2]}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
