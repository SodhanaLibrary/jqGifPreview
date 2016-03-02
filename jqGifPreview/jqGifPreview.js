(function( $ ) {
	  $.fn.jqGifPreview = function() {
		 $.each(this,function(ind,el) {
			 var prevImage = $(el).prop("src");
			  var srcImage = $(el).attr("data-gif");
			  var a = document.createElement('a');
			  a.href = srcImage;
			  var hostname = a.hostname;
			  
			  var html = $('<div class="jqGifPreview">'+
			  '		<div class="jqGifImageDiv">'+
			  '			<img class="jqGifImage" src="'+prevImage+'">'+
			  '			<div class="jqGifCircle">'+
			  '				<div class="jqGifImageCenter"></div>'+
			  '				<div class="jqGifImageCircle"></div>'+
			  '				<div class="jqGifImageName"></div>'+
			  '			</div>'+
			  '		</div>'+
			  '		<div class="jqGifImageFooter">'+
			  '			<a class="jqGifImageFooterLeft" href="'+srcImage+'" target="_blank">'+hostname+'</a>'+
			  '			<a href="'+srcImage+'" target="_blank" class="jqGifImageFooterRight"></a>'+
			  '		</div>'+
			  '</div>');
			  $(el).css('display','none');
			  $(html).insertAfter(el);
			  var jqGifCircle = $(html).find(".jqGifCircle");
			  var jqGifImageCircle = $(html).find(".jqGifImageCircle");
			  var jqGifImageFooter = $(html).find(".jqGifImageFooter");
			  var jqGifImage = $(html).find(".jqGifImage");
			  
			  jqGifCircle.click(function(event){
				  jqGifImageCircle.addClass("jqGifRotating");
				  jqGifImageFooter.hide();
				  jqGifImage.attr("src", srcImage);
				  jqGifImage.bind('load',function() {
					  jqGifImageCircle.removeClass("rotating");
					  jqGifCircle.hide();
					  jqGifImage.unbind('load');
				  });
				  event.stopPropagation();
			  });
			  
			  $(html).find(".jqGifImageDiv").click(function(){
				  jqGifCircle.show();
				  jqGifImageCircle.removeClass("jqGifRotating");
				  jqGifImageFooter.show();
				  jqGifImage.attr("src", prevImage);
			  }); 
		 });
	 };
}( jQuery ));