/*!
  * jquery.cbiframesize.js v1.0.4
  * Auther @maechabin
  * Licensed under mit license
  * https://github.com/maechabin/jquery.cb-iframe-size.js
  */
;(function (factory) {

  if (typeof module === "object" && typeof module.exports === "object") {

    module.exports = factory(require("jquery"), window, document);

  } else {

    factory(jQuery, window, document);

  }

} (function ($, window, document, undefined) {

  "use strict";

  var Plugin = function (element, options) {

    this.iframe = element;
      this.$iframe = $(element);
      this.defaults = {
        width: this.$iframe.width(),
        height: this.$iframe.height(),
        responsive: {
          width: this.$iframe.width(),
          height: this.$iframe.height()
        }
      };
      this.options = options;
      this.config = {};
      this.timer = null;
      this.ww = $(window).width();
      this.width = this.$iframe.width();
      this.responsive_side = this.ww - this.width;

  };

  Plugin.prototype.changeSize = function () {

    var ratio = this.config.width / this.config.height;
    var width = this.$iframe.width();
    var height = width / ratio;
    var ww = $(window).width();
    var responsive = this.config.responsive.width;
    var optional_height = this.config.responsive.height;

    if (ww <= responsive + this.responsive_side) {

      this.$iframe.css({
        height: height + "px"
      });

    } else {

      this.$iframe.css({
        height: optional_height + "px"
      });

    }

  };

  Plugin.prototype.checkTimer = function () {

    var _this = this;

    clearTimeout(this.timer);

    this.timer = setTimeout(function () {

      _this.changeSize();

    }, 40);

  };

  Plugin.prototype.getResize = function () {

    var _this = this;

    $(window).on("resize", function () {

      _this.checkTimer();

    });

  };

  Plugin.prototype.init = function () {

    this.$iframe.css({"max-width": "100%"});
    this.config = $.extend({}, this.defaults, this.options);
    this.changeSize();
    this.getResize();

    return this;

  };

  $.fn.cbIframeSize = function (options) {

    return this.each(function () {

      new Plugin(this, options).init();

    });

  };

}));
