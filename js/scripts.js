/*!
 * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
(function ($) {
   "use strict"; // Start of use strict

   // Smooth scrolling using jQuery easing
   $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
         if (target.length) {
            $("html, body").animate(
               {
                  scrollTop: target.offset().top,
               },
               1000,
               "easeInOutExpo"
            );
            return false;
         }
      }
   });

   // Closes responsive menu when a scroll trigger link is clicked
   $(".js-scroll-trigger").click(function () {
      $(".navbar-collapse").collapse("hide");
   });

   // Activate scrollspy to add active class to navbar items on scroll
   $("body").scrollspy({
      target: "#sideNav",
   });
})(jQuery); // End of use strict

//magnify timeline
// https://www.w3schools.com/howto/howto_js_image_magnifier_glass.asp
function magnify(imgID, zoom) {
   var img, glass, w, h, bw;
   img = document.getElementById(imgID);

   /* Create magnifier glass: */
   glass = document.createElement("DIV");
   glass.setAttribute("class", "img-magnifier-glass");

   /* Insert magnifier glass: */
   img.parentElement.insertBefore(glass, img);

   /* Set background properties for the magnifier glass: */
   glass.style.backgroundImage = "url('" + img.src + "')";
   glass.style.backgroundRepeat = "no-repeat";
   glass.style.backgroundSize = img.width * zoom + "px " + img.height * zoom + "px";
   bw = 3;
   w = glass.offsetWidth / 2;
   h = glass.offsetHeight / 2;

   /* Execute a function when someone moves the magnifier glass over the image: */
   glass.addEventListener("mousemove", moveMagnifier);
   img.addEventListener("mousemove", moveMagnifier);

   /*and also for touch screens:*/
   glass.addEventListener("touchmove", moveMagnifier);
   img.addEventListener("touchmove", moveMagnifier);
   function moveMagnifier(e) {
      var pos, x, y;
      /* Prevent any other actions that may occur when moving over the image */
      e.preventDefault();
      /* Get the cursor's x and y positions: */
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;
      /* Prevent the magnifier glass from being positioned outside the image: */
      if (x > img.width - w / zoom) {
         x = img.width - w / zoom;
      }
      if (x < w / zoom) {
         x = w / zoom;
      }
      if (y > img.height - h / zoom) {
         y = img.height - h / zoom;
      }
      if (y < h / zoom) {
         y = h / zoom;
      }
      /* Set the position of the magnifier glass: */
      glass.style.left = x - w + "px";
      glass.style.top = y - h + "px";
      /* Display what the magnifier glass "sees": */
      glass.style.backgroundPosition = "-" + (x * zoom - w + bw) + "px -" + (y * zoom - h + bw) + "px";
   }

   function getCursorPos(e) {
      var a,
         x = 0,
         y = 0;
      e = e || window.event;
      /* Get the x and y positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x and y coordinates, relative to the image: */
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return { x: x, y: y };
   }
}

//URL OPEN IN MODAL
// $(document).ready(function() {

//    if(window.location.href.indexOf('#myModal') != -1) {
//      $('#myModal').modal('show');
//    }

//  });

//interesting collage
// https://codepen.io/stedevx/pen/yoNNYw
