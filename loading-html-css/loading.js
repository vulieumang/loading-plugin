
jQuery('#loadpage').show()

function DrawText() {
	var e = jQuery("#loadpage svg"),
		t = jQuery(e).find('.layer1').find("path"); // layer1
	jQuery("#loadpage svg").addClass("animate");
	jQuery(e).find('#layer2').find("rect").css({
		'opacity': 0
	})
	jQuery(e).find('#layer3').find("path").css({
		'opacity': 0
	})
	jQuery(t).css({
		"stroke-dasharray": "0 0"
	}),
		jQuery(t).each(function () {
			var i = this.getTotalLength();
			jQuery(this).css({
				"stroke-dasharray": i + " " + i
			}),
				jQuery(this).css({
					"stroke-dashoffset": i,
					"stroke-dasharray": i + " " + i
				})
		})

	jQuery(t).stop().animate({
		"stroke-dashoffset": 0
	}, 1500, "linear", function () {
		t.css({
			'stroke-dasharray': 8000,
			'stroke-dashoffset': 8000,
			'fill-opacity': 1,
			'stroke-opacity': 0,
		})
		jQuery(e).find('#layer2').find("rect").stop().animate({
			'opacity': 1
		}, 1000, "linear")
		jQuery(e).find('#layer3').find("path").each(function (index) {
			jQuery(this).stop().animate({
				"opacity": 1
			}, 1000, "linear", function () {
				jQuery("#loadpage svg").removeClass("animate");
				jQuery('#loadpage svg').addClass('active');
			})
		})
	})

	setTimeout(() => {
		jQuery('#loadpage').addClass('hidden');
		setTimeout(() => {
			jQuery('.cd-popup.loading-img').addClass('is-visible');
			if (jQuery('#fullpage').length > 0 && jQuery('.cd-popup.loading-img').length != 0) {
				jQuery.fn.fullpage.setAllowScrolling(false);
			}
		}, 0);
	}, 3000);
}
setTimeout(() => {
	DrawText()
}, 500);