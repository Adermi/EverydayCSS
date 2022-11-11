import React from 'react';
import cn from 'classnames';
import _ from 'lodash';
import { useSet } from 'ahooks';

import style from './index.module.less';
import Layout from '../../components/Layout';

const arr = [
  130, 131, 149, 150, 151, 152, 168, 169, 170, 171, 172, 173, 187, 188, 190,
  191, 193, 194, 207, 208, 209, 210, 211, 212, 213, 214, 229, 232, 248, 250,
  251, 253, 267, 269, 272, 274,
];

const Index = () => {
  const [set, { add, remove, reset }] = useSet(arr);

  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.pixel}>
          {_.range(1, 401).map((item) => (
            <div
              key={item}
              className={cn({
                [style[`pixel-${item}`]]: true,
                [style.active]: set.has(item),
              })}
              onClick={(e) => {
                set.has(item) ? remove(item) : add(item);
              }}
            ></div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
