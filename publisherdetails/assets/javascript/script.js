$(document).ready(function () {
        if ($(window).width() > 991){
        $('.navbar-light .d-menu').hover(function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        }, function () {
            $(this).find('.sm-menu').first().stop(true, true).delay(120).slideUp(100);
        });
    }
});

$(".audio-div audio").on('play',function(){
  var parent = $(this).parent();
  $(parent).toggleClass('active');
})
$(".audio-div audio").on('pause',function(){
  var parent = $(this).parent();
  $(parent).toggleClass('active');
})


jQuery(".carousel1").owlCarousel({
    autoplay: false,
    rewind: true,
    loop: false,
    /* use rewind if you don't want loop */
    margin: 0, 
    /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 2
      },
  
      1024: {
        items: 3
      },
  
      1366: {
        items:4
      }
    }
});
$( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
$( ".owl-next").html('<i class="fa fa-chevron-right"></i>');


// vertical carousel 

$(".next-img").click(function(){
    var img;
    var count = 0;
    var scrollTop = $(".vertical-carousel").scrollTop() + 85;
    $(".vertical-carousel").scrollTop(scrollTop);	  
})

$(".pre-img").click(function(){
  var img;
  var count = 0;
  var scrollTop = $(".vertical-carousel").scrollTop() - 85;
  $(".vertical-carousel").scrollTop(scrollTop);
})

$(".remove-btn").click(function(){
  var parent = $(this).parent().parent().parent().parent().parent();
  $(parent).remove();
});

$(".vector-icon").click(function(){
  $(this).toggleClass('active');
});

if ($(window).width() < 767) {
  $(".card-paragraph.author-detail").each(function(){
    var text = $(this).text();
    if (text.length > 115) {
      var finded = text.substring(0,115) + "...";
      $(this).text(finded);
    }
  })
}


// navbar hide and show

// $('.sub-menu ul').hide();
$(".sub-menu a").click(function () {
	$(this).parent(".sub-menu").children("ul").slideToggle("100");
	$(this).find(".right").toggleClass("fas fa-chevron-up fas fa-chevron-down");
});

//-----JS for Price Range slider-----

$(function() {

	// $( ".slider-range" ).slider({
	//   range: true,
	//   min: 10,
	//   max: 100,
	//   values: [ 32, 68 ],
	//   slide: function( event, ui ) {
	// 	  $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
  //     $("#slider-range-values").attr("min",ui.values[0]);
  //     $("#slider-range-values").attr("max",ui.values[1]);
  //     applyFilter();
	//   }
	// });
  // $("#slider-range-values").attr("min",32);
  // $("#slider-range-values").attr("max",68);
	// $( "#amount" ).val( "$" + $( ".slider-range" ).slider( "values", 0 ) + " - $" + $( ".slider-range" ).slider( "values", 1 ) );


  // slider-rangeYear
	$( ".slider-rangeYear" ).slider({
	  range: true,
	  min: 0,
	  max: 400,
	  values: [ 100, 300 ],
	  slide: function( event, ui ) {
      if (Math.abs(ui.values[0] - ui.values[1]) > 100) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        $("#slider-rangeYear-values").attr("min",ui.values[0]);
        $("#slider-rangeYear-values").attr("max",ui.values[1]);
        applyFilter();
      }else{
        return false;
      }
	  }
	});
  $("#slider-rangeYear-values").attr("min",100);
  $("#slider-rangeYear-values").attr("max",300);
	$( "#amount" ).val( "$" + $( ".slider-rangeYear" ).slider( "values", 0 ) + " - $" + $( ".slider-rangeYear" ).slider( "values", 1 ) );

});


(function($) {
  $(document).ready(function() {
    $('#priceRangeNew').each(function() {
      var slidervalue = $(this).attr('data-slider-value');
      var separator = slidervalue.indexOf(',');
      if (separator !== -1) {
          slidervalue = slidervalue.split(',');
          slidervalue.forEach(function(item, i, arr) {
              arr[i] = parseFloat(item);
          });
      } else {
          slidervalue = parseFloat(slidervalue);
      }

      $(this).slider({
          formatter: function(slidervalue) {
              return '$' + slidervalue;
          },
          min: parseFloat($(this).attr('data-slider-min')),
          max: parseFloat($(this).attr('data-slider-max')),
          range: $(this).attr('data-slider-range'),
          value: slidervalue,
          tooltip_split: $(this).attr('data-slider-tooltip_split'),
          tooltip: $(this).attr('data-slider-tooltip'),
          tooltip_position: 'bottom'
      });

      $("#priceRangeNew").on('change', function() {
          var maxvalue = $(".price-range-slidernew .tooltip-max .tooltip-inner").text().replace(/\$/g, "");
          maxparse = parseInt(maxvalue);
          minvalue = $(".price-range-slidernew .tooltip-min .tooltip-inner").text().replace(/\$/g, "");
          minparse = parseInt(minvalue);
          console.log(maxparse);
          console.log(minparse);
          $("#slider-range-values").attr("min",minparse);
          $("#slider-range-values").attr("max",maxparse);
          applyFilter();
      });

      //Onchange function checkbox on/off
    });
    $('#priceRangeNew1').each(function() {
      var slidervalue = $(this).attr('data-slider-value');
      var separator = slidervalue.indexOf(',');
      if (separator !== -1) {
          slidervalue = slidervalue.split(',');
          slidervalue.forEach(function(item, i, arr) {
              arr[i] = parseFloat(item);
          });
      } else {
          slidervalue = parseFloat(slidervalue);
      }

      $(this).slider({
          formatter: function(slidervalue) {
              return '$' + slidervalue;
          },
          min: parseFloat($(this).attr('data-slider-min')),
          max: parseFloat($(this).attr('data-slider-max')),
          range: $(this).attr('data-slider-range'),
          value: slidervalue,
          tooltip_split: $(this).attr('data-slider-tooltip_split'),
          tooltip: $(this).attr('data-slider-tooltip'),
          tooltip_position: 'bottom'
      });

      $("#priceRangeNew1").on('change', function() {
          var maxvalue = $(".price-range-slidernew1 .tooltip-max .tooltip-inner").text().replace(/\$/g, "");
          maxparse = parseInt(maxvalue);
          minvalue = $(".price-range-slidernew1 .tooltip-min .tooltip-inner").text().replace(/\$/g, "");
          minparse = parseInt(minvalue);
          console.log(maxparse);
          console.log(minparse);
          $("#slider-range-values").attr("min",minparse);
          $("#slider-range-values").attr("max",maxparse);
          applyFilter();
      });

      //Onchange function checkbox on/off
    });
  });
})(jQuery);