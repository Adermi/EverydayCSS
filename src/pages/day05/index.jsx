import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.card}>
          <div className={style.header}>
            <div className={style.weekly}>
              <div className={style.title}>WEEKLY REPORT</div>
              <div className={style.date}>01. Feb - 07. Feb</div>
            </div>
            <div className={style.revenue}>
              <div className={style.title}>Revenue</div>
              <div className={style.money}>$ 3621.79</div>
            </div>
          </div>
          <div className={style.body}>
            <div className={style.parameter}>
              <div className={style.param}>
                <div className={cn(style.line, style.red)}></div>
                <div className={style.name}>Views</div>
              </div>
              <div className={style.param}>
                <div className={cn(style.line, style.blue)}></div>
                <div className={style.name}>Purchases</div>
              </div>
            </div>
            <div className={style.lines}>
              <div className={cn(style.line, style[`line-1`])}></div>
              <div className={cn(style.line, style[`line-2`])}></div>
              <div className={cn(style.line, style[`line-3`])}></div>
              <div className={cn(style.data, style.red)}>
                <svg>
                  <polyline points="20,28 60,12 100,23 140,11 180,38 220,48 260,19"></polyline>
                </svg>
              </div>
              <div className={cn(style.data, style.blue)}>
                <svg>
                  <polyline points="20,48 60,22 100,13 140,21 180,18 220,28 260,22"></polyline>
                </svg>
              </div>
              <div className={style.points}>
                <div className={style[`point-blue`]}>
                  <div className={cn(style.point, style[`point-1`])}>
                    <div className={style.content}>66</div>
                  </div>
                  <div className={cn(style.point, style[`point-2`])}>
                    <div className={style.content}>66</div>
                  </div>
                  <div className={cn(style.point, style[`point-3`])}>
                    <div className={style.content}>66</div>
                  </div>
                  <div className={cn(style.point, style[`point-4`])}>
                    <div className={style.content}>66</div>
                  </div>
                  <div className={cn(style.point, style[`point-5`])}>
                    <div className={style.content}>66</div>
                  </div>
                  <div className={cn(style.point, style[`point-6`])}>
                    <div className={style.content}>66</div>
                  </div>
                  <div className={cn(style.point, style[`point-7`])}>
                    <div className={style.content}>66</div>
                  </div>
                </div>
                <div className={style[`point-red`]}>
                  <div className={cn(style.point, style[`point-1`])}>
                    <div className={style.content}>55</div>
                  </div>
                  <div className={cn(style.point, style[`point-2`])}>
                    <div className={style.content}>55</div>
                  </div>
                  <div className={cn(style.point, style[`point-3`])}>
                    <div className={style.content}>55</div>
                  </div>
                  <div className={cn(style.point, style[`point-4`])}>
                    <div className={style.content}>55</div>
                  </div>
                  <div className={cn(style.point, style[`point-5`])}>
                    <div className={style.content}>55</div>
                  </div>
                  <div className={cn(style.point, style[`point-6`])}>
                    <div className={style.content}>55</div>
                  </div>
                  <div className={cn(style.point, style[`point-7`])}>
                    <div className={style.content}>55</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.days}>
              <div className={style.day}>MON</div>
              <div className={style.day}>TUE</div>
              <div className={style.day}>WED</div>
              <div className={style.day}>THU</div>
              <div className={style.day}>FRI</div>
              <div className={style.day}>SAT</div>
              <div className={style.day}>SUN</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
