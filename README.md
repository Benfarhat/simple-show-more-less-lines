# Simple show more (or less) lines

A simple script to show or hidden X lines from a script (or anything else). 

You can customize:
* The minimum line (start) that you need to show in your container
* The maximum line (limit) that you want to display
* Customise show more and show less button (tag, class, actif, tooltip, title)
* The step (if you want to show or hidden X lines)
* You can render links anywhere (Under the choosen target by default)

## [<u>Demo</u>](https://benfarhat.github.io/simple-show-more-less-lines/index.html)

> <sub>Code and styles used in the demo are inspired from [Whoops](https://github.com/filp/whoops)<sub>

## Usage

```
  <!-- jQuery -->
  <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
  <script>window.jQuery || document.write('<script src="src/js/jquery/1.12.4/jquery.min.js"><\/script>');</script>
  <!-- Simple Show More Lines -->
  <script src="src/js/jquery.showmorelines.js"></script>
  
  <script type="text/javascript">
    $(document).ready(function () {
      'use strict';
      
      $('.showmorelines').showmorelines({
      buttonTag: "a",
      buttonClass: "sml", // for "Show More Link" or "Super Mario Land", as you like ...
      ShowMoreButton: true, // should we display "show more" button / links?
      ShowLessButton: true, // should we display "show less" button / links?
      buttonLessText: 'show less lines <i class="fa fa-arrow-up"></i>',
      buttonMoreText: 'Show more lines <i class="fa fa-arrow-down"></i>',
      buttonLessText: 'show less lines <i class="fa fa-arrow-up"></i>',
      tooltipMoreText: "Show more lines",
      tooltipLessText: "show less lines",
      toolbarContainer: null, // if you want to display links somewhere else than under target
      toolbarClass: "toolbar", // wrapping class
      start: "5", // number of lines for the demo
      limit: "15", // number of lines
      step: "5", // number of lines
    });
 
    });


  </script>
```
 

2017 🖥 Benfarhat Elyes
