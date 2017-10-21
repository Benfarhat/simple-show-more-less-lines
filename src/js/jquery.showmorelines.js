/*
 * jquery simple show more lines
 * Author: @benfarhat
 * Github: https://github.com/Benfarhat
 * Licensed under the MIT license
 */


;(function( $, window, document, undefined ){

  // our plugin constructor
  var Plugin = function( elem, options ){
      
      this.elem = elem;
      this.$elem = $(elem);
      
      this.options = options;

    };


  Plugin.prototype = {
    defaults: {
      buttonTag: "a",
      buttonClass: "sml",
      ShowMoreButton: true, // should we display "show more" button / links?
      ShowLessButton: true, // should we display "show less" button / links?
      buttonLessText: 'show less lines <i class="fa fa-arrow-up"></i>',
      buttonMoreText: 'Show more lines <i class="fa fa-arrow-down"></i>',
      buttonLessText: 'show less lines <i class="fa fa-arrow-up"></i>',
      tooltipMoreText: "Show more lines",
      tooltipLessText: "show less lines",
      toolbarContainer: null, // wrapping div
      toolbarClass: "toolbar", // wrapping div
      start: "20", // number of lines
      limit: "60", // number of lines
      step: "5", // number of lines
    },

    init: function() {
    
      this.config = $.extend({}, this.defaults, this.options,
      this.metadata);
      this.configs = $.extend(true, {}, this.defaults, this.options,
      this.metadata);

      this.addLinks(this);
      this.clickLinks(this);
      return this;
    },
    
    
    // Create Links: show more and show less lines
    addLinks: function() {
    
      var config = this.config,
          toolbar = [], 
          button,
          lineheight = parseInt(this.$elem.css('line-height')),
          paddingtop = parseInt(this.$elem.css('padding-top')),
          element = this.$elem[0]
          id = this.$elem.attr('id');
      if(config.ShowMoreButton){   
        button = '<' + config.buttonTag + ' class="' + config.buttonClass + '" data-sml-target="' + id + '"' + '" data-sml-action="more"' + ' title="' + config.tooltipMoreText + '">' + config.buttonMoreText + '</' + config.buttonTag + '>';
        toolbar.push( button );
      }
      
      
      if(config.ShowLessButton){  
        button = '<' + config.buttonTag + ' class="' + config.buttonClass + '" data-sml-target="' + id + '"' + '" data-sml-action="less"' + ' title="' + config.tooltipLessText + '">' + config.buttonLessText + '</' + config.buttonTag + '>';
        toolbar.push( button );
      }
      
      if(config.toolbarContainer) {
        $(config.toolbarContainer).after( toolbar );
      } else {
        var divToolbar = $( '<div class="' + config.toolbarClass + '"></div>' ).prepend( toolbar );
        
        element.after( divToolbar[0] );   
      }
      this.$elem.attr("data-sml-start",config.start);
      this.$elem.attr("data-sml-limit",config.limit);
      this.$elem.attr("data-sml-step",config.step);
      this.$elem.css({"max-height": (lineheight * config.start + paddingtop) + "px", "overflow" : "hidden"});
    },


    clickLinks: function() {
    
      var config = this.configs;

 
        $( '.' + config.buttonClass ).unbind("click").click(function() {


         var target = $(this).data('sml-target'),
            action = $(this).data('sml-action'),
            block = $('#' + target),
            start = block.attr("data-sml-start"),
            limit = block.attr("data-sml-limit"),
            step = block.attr("data-sml-step"),
            height = parseInt(block.css("max-height")),
            lineheight = parseInt(block.css("line-height"));
            paddingtop = parseInt(block.css("padding-top"));
   
            if((action === "more") && (height + lineheight * step <= (limit * lineheight + paddingtop))){
                block.css({"max-height":height + lineheight * step + "px"});  
            } else if((action === "less") && (height - lineheight * step >= (start * lineheight + paddingtop))){
                block.css({"max-height":height - lineheight * step + "px"});  
            }
      
        });	
    
     
    }, 

  
  };

  Plugin.defaults = Plugin.prototype.defaults;

  $.fn.showmorelines = function(options) {
    return this.each(function() {
      new Plugin(this, options).init();
    });
  };

  //optional: window.Plugin = Plugin;

})( jQuery, window , document );