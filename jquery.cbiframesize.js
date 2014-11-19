;(function ($, window, document, undefined) {

    var Plugin = function (element, options) {

        this.iframe = element;
        this.$iframe = $(element);
        this.defaults = {
            width: this.$iframe.width(),
            height: this.$iframe.height(),
            responsive: this.$iframe.width(),
            optional_height: this.$iframe.height()
        };
        this.options = options;
        this.config;
        this.timer = null;
        this.ww = $(window).width();
        this.width = this.$iframe.width();
        this.responsive_side = this.ww - this.width;

    };

    Plugin.prototype.changeSize = function () {

        var ratio = this.config.width / this.config.height;
        var width = this.$iframe.width();
        var height = width / ratio;
        var optional_height = this.config.optional_height;
        var ww = $(window).width();
        var responsive = this.config.responsive;

        if (ww <= responsive + this.responsive_side) {
//      if (window.matchMedia( "(max-width: 640px)" ).matches) {

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

        }, 100);

    };

    Plugin.prototype.getResize = function () {

        var _this = this;

        $(window).on("resize", function () {

            _this.checkTimer();

        });

    };

    Plugin.prototype.init = function () {

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

} (jQuery, window, document));