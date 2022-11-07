import React, { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    (function (window, document, undefined) {
      'use strict';

      // simple requestAnimationFrame polyfill.
      window.requestAnimFrame = (function () {
        return (
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          function (callback) {
            window.setTimeout(callback, 1000 / 60);
          }
        );
      })();

      // images that will be used
      var imageAssets = {
          doge: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/188512/doge.png',
          dogeSmall:
            'https://s3-us-west-2.amazonaws.com/s.cdpn.io/188512/doge-small.png',
        },
        imageAssetsArray = [],
        i;

      // keep track of the assets in a queue array, which will be used to load them all in order.
      for (i in imageAssets) {
        imageAssetsArray.push({
          index: i,
          value: imageAssets[i],
        });
      }

      /**
       * Load all the imageAssets before doing anything else.
       * A callback function will be called when all images have
       * loaded or when something goes wrong.
       * @param {Function} cb a callback function
       */
      function loadAllImages(cb) {
        var index = 0,
          loaded = {},
          loader = function () {
            var imageObject = new Image();

            /**
             * onload put the loaded image in an object and continue if necessary.
             * calls {@link cb the callback function} when it is done.
             */
            imageObject.onload = function () {
              loaded[imageAssetsArray[index].index] = imageObject;

              index++;
              if (index >= imageAssetsArray.length) {
                cb.call(null, loaded);
              } else {
                loader();
              }
            };

            /**
             * onerror call the {@link cb callback function} when anything fails.
             */
            imageObject.onerror = function () {
              cb.call(null, null, 'such problems, much error');
            };

            // set the source and start loading
            imageObject.src = imageAssetsArray[index].value;
          };

        // initiate the loader.
        loader();
      }

      /**
       * generate a random number between a range
       * @param   {Number} min minimum
       * @param   {Number} max maximum
       * @returns {Number} random number between min and max.
       */
      var rand = function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };

      /**
       * scale a 2d size down according to a max width and height.
       * @param   {Number} w  width of current size
       * @param   {Number} h  height of current size
       * @param   {Number} mw maximum width
       * @param   {Number} mh maximum height
       * @returns {Object} object containing scaled (and floored) width and height as `w' field and `h' field.
       */
      var scale = function scale(w, h, mw, mh) {
        var r, nw, nh;
        if (w > mw) {
          r = mw / w;
          nw = mw;
          nh = r * h;
        }

        if (h > mh) {
          r = mh / h;
          nw = r * w;
          nh = mh;
        }

        return {
          w: Math.floor(nw),
          h: Math.floor(nh),
        };
      };

      // RGB color object
      var RGB = function (r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
      };

      RGB.prototype.toString = function () {
        return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
      };

      /**
       * calculate random RGB color
       * @param   {Number} min minimum value for r, g and b
       * @param   {Number} max maximum value for r, g and b
       * @returns {RGB}    an RGB color instance
       */
      RGB.random = function (min, max) {
        return new RGB(rand(min, max), rand(min, max), rand(min, max));
      };

      /**
       * calculate and advanced random color
       * @param   {Object} rmm random min/max description object
       * @returns {RGB}    an RGB color instance
       */
      RGB.randomEx = function (rmm) {
        return new RGB(
          rand(rmm.rmin, rmm.rmax),
          rand(rmm.gmin, rmm.gmax),
          rand(rmm.bmin, rmm.bmax)
        );
      };

      var Canvas = function Canvas() {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.fit();
        document.body.appendChild(this.canvas);
      };

      Canvas.prototype.fit = function () {
        this.resize(window.innerWidth, window.innerHeight);
      };

      Canvas.prototype.resize = function (width, height) {
        this.canvas.width = this.width = width;
        this.canvas.height = this.height = height;
      };

      Canvas.prototype.clear = function (opacity) {
        if (typeof opacity === 'number') {
          this.context.fillStyle = 'rgba(0, 0, 0, ' + opacity + ')';
          this.context.fillRect(0, 0, this.width, this.height);
        } else {
          this.context.clearRect(0, 0, this.width, this.height);
        }
      };

      var DogeText = function DogeText(
        cx,
        cy,
        text,
        angle,
        offset,
        shift,
        color
      ) {
        this.font = '20px "Comic Sans MS"';
        this.text = text;
        this.color = color || new RGB(255, 0, 0);
        this.angle = angle || -45;
        this.offset = offset || -110;
        this.shift = shift || -60;
        this.cx = this.cy = 0;

        this.life = 0;
        this.spawn = 0;
        this.next = +new Date() + rand(0, 2000);

        this.position(cx, cy);
      };

      DogeText.prototype.position = function (cx, cy) {
        this.cx = cx;
        this.cy = cy + this.shift;
      };

      DogeText.prototype.step = function () {
        var now = +new Date();
        if (now >= this.next) {
          this.life = rand(50, 250);
          this.spawn = now;
          this.next = +new Date() + rand(1000, 2500);
        }
      };

      DogeText.prototype.render = function (ctx) {
        // if the text age exceeds its life, do not render and wait for step to revive it.
        if (+new Date() - this.spawn >= this.life) return;

        ctx.save();
        ctx.translate(this.cx + this.offset, this.cy);
        ctx.rotate(this.angle * (Math.PI / 180));
        ctx.fillStyle = this.color.toString();
        ctx.font = this.font;
        ctx.fillText(this.text, 0, 0);
        ctx.restore();
      };

      var HeartParticle = function HeartParticle(i, s, cx, cy, image) {
        this.i = i;
        this.s = s;
        this.x = this.y = 0;
        this.ox = this.oy = 0;
        this.img = image;
        this.fac = Math.random();

        this.position(cx, cy);
      };

      HeartParticle.prototype.position = function (cx, cy) {
        // the heart curve
        this.ox = this.x = cx + 160 * Math.pow(Math.sin(this.i), 3);
        this.oy = this.y =
          cy +
          11 *
            -(
              15 * Math.cos(this.i) -
              5 * Math.cos(2 * this.i) -
              2 * Math.cos(3 * this.i) -
              Math.cos(4 * this.i)
            );
      };

      HeartParticle.prototype.step = function () {
        // just increase the factor until it reaches 1, then start over
        this.fac += 0.01;
        if (this.fac >= 1) {
          this.fac = 0;
        }
      };

      HeartParticle.prototype.render = function (ctx) {
        /**
                this.fac is responsible as size factor and as opacity factor.
                this way, when (1 - this.fac) === 0, the size has reached its max too.
            */

        var rw = this.s.w * this.fac,
          rh = this.s.h * this.fac,
          rx = this.x - this.s.w / 2,
          ry = this.y - this.s.h / 2;

        ctx.save();
        ctx.globalAlpha = 1 - this.fac;
        ctx.drawImage(this.img, rx, ry, rw, rh);
        ctx.restore();
      };

      window.addEventListener('load', function () {
        // loadAllImages and only if it succeeds, proceed.
        loadAllImages(function (loadedAssets, errorMessage) {
          if (typeof errorMessage !== 'string') {
            var c = new Canvas(),
              ctx = c.context,
              cx = c.width / 2,
              cy = c.height / 2,
              i,
              p = [],
              cds = scale(
                loadedAssets.doge.width,
                loadedAssets.doge.height,
                160,
                160
              ); // center doge size scaled down

            // dogeSmallWidth and dogeSmallHeight
            var dsw = loadedAssets.dogeSmall.width,
              dsh = loadedAssets.dogeSmall.height;

            // generate all the doge particles
            for (i = 0; i < 230; i++) {
              var randomSize = rand(10, 70),
                size = scale(dsw, dsh, randomSize, randomSize);

              p.push(
                new HeartParticle(i, size, cx, cy, loadedAssets.dogeSmall)
              );
            }

            // a bunch of text that periodically appears, at random.
            p.push(new DogeText(cx, cy, 'wow'));
            p.push(
              new DogeText(
                cx,
                cy,
                'many love',
                45,
                50,
                -100,
                new RGB(255, 0, 255)
              )
            );
            p.push(
              new DogeText(
                cx,
                cy,
                'such faces',
                -55,
                -220,
                -110,
                new RGB(255, 255, 0)
              )
            );
            p.push(
              new DogeText(
                cx,
                cy,
                'many trippy',
                55,
                160,
                -160,
                new RGB(0, 255, 0)
              )
            );
            p.push(
              new DogeText(
                cx,
                cy,
                'such dark',
                -12,
                260,
                -20,
                new RGB(0, 100, 255)
              )
            );
            p.push(
              new DogeText(
                cx,
                cy,
                'many heart',
                50,
                -180,
                110,
                new RGB(255, 100, 0)
              )
            );
            p.push(
              new DogeText(
                cx,
                cy,
                'much doge',
                -50,
                140,
                140,
                new RGB(0, 255, 100)
              )
            );

            window.addEventListener('resize', function () {
              // make sure the canvas fits snuggly into the window.
              c.fit();

              var i,
                cx = c.width / 2,
                cy = c.height / 2;

              // make sure all objects know about the new center.
              for (i in p) p[i].position(cx, cy);
            });

            (function anim() {
              requestAnimFrame(anim);

              var i,
                cx = c.width / 2,
                cy = c.height / 2;

              // clear the canvas
              c.clear(0.7);

              // step and render all HeartParticles and texts
              for (i in p) p[i].step();
              for (i in p) p[i].render(ctx);

              // render the main doge, the doge that is tripping.
              ctx.drawImage(
                loadedAssets.doge,
                cx - cds.w / 2 - 10,
                cy - cds.h / 2,
                cds.w,
                cds.h
              );
            })();
          } else {
            alert(errorMessage);
          }
        });
      });
    })(window, document);
  });

  return <div></div>;
};

export default Index;
