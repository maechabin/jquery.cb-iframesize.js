;(function ($, window, document, undefined) {

    var Plugin = function (element, options) {

        this.iframe = element;
        this.$iframe = $(element);
        this.width = this.$iframe.width();
        this.height = this.$iframe.height();
        this.defaults = {
            width: this.width,
            height: this.height,
            responsive: this.width
        };
        this.options = options;
        this.config;
        this.responsive;
        this.ratio;
        this.h;
        this.ww = $(window).width();
        this.timer = null;

    };

    Plugin.prototype.changeSize = function () {

        this.ratio = this.config.width / this.config.height;
        this.responsive = this.config.responsive;
        this.h = this.width / this.ratio;

        if (this.ww < this.responsive) {

             this.$iframe.css({
                height: this.h + "px"
            }); 

        } else {
        
             this.$iframe.css({
                height: this.config.height + "px"
            });

        }

        //alert(this.width);
        //alert(this.height);
        //alert(this.ratio);

    };

    Plugin.prototype.checkTimer = function () {

        var _this = this;

        clearTimeout(this.timer);

        this.timer = setTimeout(function () {

            _this.changeSize();

        }, 200);

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