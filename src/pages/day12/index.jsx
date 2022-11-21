import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.content}>
          <div className={style.font}>
            I know quite certainly that I myself have no special talent;
            curiosity,
            <span className={style.special}>
              obsession
              <div className={style.translation}>
                <div className={style.pronunciation}>{'[əbˈseʃ(ə)n]'}</div>
                <div className={style.text}>
                  Obsession, a persistent disturbing preoccupation with an often
                  unreasonable idea or feeling.
                </div>
              </div>
            </span>
            and dogged endurance, combined with self-criticism have brought me
            to my ideas.
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
