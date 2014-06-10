"use strict";

$('.new-item').click(function () {
	$('.save-item').show();
	$('.new-item-text').show();
	$('.create-new-item ul').show();
	$('.new-item').hide();
});


$('.save-item').click( function() {
	var val = [];

	if ($('.new-item-text').val() !== ''){

		var text = $('.new-item-text').val();
		$(':checkbox:checked').each(function(i){
			return val[i] = $(this).val();
		});
		_.find(val, function (x) {
			if (x === 'saveOne') {
				var createItem = new Mover.Models.List({'item': text});
				Mover.collections.collectionOne.add(createItem);
			}

			else if (x === 'saveTwo') {
				var createItem = new Mover.Models.List({'item': text});
				Mover.collections.collectionTwo.add(createItem);
			}

			else if (x === 'saveThree') {
				var createItem = new Mover.Models.List({'item': text});
				Mover.collections.collectionThree.add(createItem);
			}
		});

	$('.save-item').hide();
	$('.new-item-text').hide();
	$('.create-new-item ul').hide();
	$('.new-item').show();

	}
	else {
		alert("You must add a new list item before saving");
	}
});



