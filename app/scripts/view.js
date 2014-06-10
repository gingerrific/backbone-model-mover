"use strict";


Mover.Views.ViewOne = Backbone.View.extend({
	template: _.template($('.list-one-template').html()),
	className: 'collection-one-item',

	events: {
		'click .delete-button'	: 'destroy',
		'click .copy-to-two'	: 'copyTwo',
		'click .copy-to-three'	: 'copyThree',
		'click .move-to-two'	: 'moveToTwo',
		'click .move-to-three'	: 'moveToThree'
	},

	initialize: function () {
		this.listenTo(this.model, 'destroy', this.remove);
		$('.collection-one').append(this.el);
		this.render();
		if (this.model.isNew()){
			this.model.save();
		}
	},

	render: function () {
		var renderedTemplate = this.template(this.model.attributes);
		this.$el.html(renderedTemplate);
	},

	destroy: function () {
		this.model.destroy();
	},

	copyTwo: function () {
		var model = this.model.clone();
		model.unset('_id');
		Mover.collections.collectionTwo.add(model);
	},

	copyThree: function () {
		var model = this.model.clone();
		model.unset('_id');
		Mover.collections.collectionThree.add(model);
	},

	moveToTwo: function () {
		var model = this.model.clone();
		model.unset('_id');
		Mover.collections.collectionTwo.add(model);
		this.destroy();
	},

	moveToThree: function () {
		var model = this.model.clone();
		model.unset('_id');
		Mover.collections.collectionThree.add(model);
		this.destroy();
	}
});

Mover.Views.ViewTwo = Backbone.View.extend({
	template: _.template($('.list-two-template').html()),

	className: 'collection-two-item',

	events: {
		'click .delete-button'	: 'destroy',
		'click .copy-to-one'	: 'copyOne',
		'click .copy-to-three'	: 'copyThree',
		'click .move-to-one'	: 'moveToOne',
		'click .move-to-three'	: 'moveToThree'
	},

	initialize: function () {
		this.listenTo(this.model, 'destroy', this.remove);
		$('.collection-two').append(this.el);
		this.render();
		if (this.model.isNew()) {
			this.model.save();
		}
	},

	render: function () {
		var renderedTemplate = this.template(this.model.attributes);
		this.$el.html(renderedTemplate);
	},

	destroy: function () {
		this.model.destroy();
	},

	copyOne: function () {
		var model = this.model.clone();
		model.unset('_id');
		Mover.collections.collectionOne.add(model);
	},

	copyThree: function () {
		var model = this.model.clone();
		model.unset('_id');
		Mover.collections.collectionThree.add(model);
	},

	moveToOne: function () {
		var model = this.model.clone();
		model.unset('_id');
		Mover.collections.collectionOne.add(model);
		this.destroy();
	},

	moveToThree: function () {
		var model = this.model.clone();
		model.unset('_id');
		Mover.collections.collectionThree.add(model);
		this.destroy();
	}
});

Mover.Views.ViewThree = Backbone.View.extend({
	template: _.template($('.list-three-template').html()),

	className: 'collection-three-item',

	events: {
		'click .delete-button'	: 'destroy',
		'click .copy-to-one'	: 'copyOne',
		'click .copy-to-two'	: 'copyTwo',
		'click .move-to-one'	: 'moveToOne',
		'click .move-to-two'	: 'moveToTwo'
	},

	initialize: function () {
		this.listenTo(this.model, 'destroy', this.remove);
		$('.collection-three').append(this.el);
		this.render();
		if (this.model.isNew()){
			this.model.save();
		}
	},

	render: function () {
		var renderedTemplate = this.template(this.model.attributes);
		this.$el.html(renderedTemplate);
	},

	destroy: function () {
		this.model.destroy();
	},

	copyOne: function () {
		var model = this.model.clone();
		model.unset('_id');
		Mover.collections.collectionOne.add(model);
	},

	copyTwo: function () {
		var model = this.model.clone();
		model.unset('_id');
		Mover.collections.collectionTwo.add(model);
	},

	moveToOne: function () {
		var model = this.model.clone();
		model.unset('_id');
		Mover.collections.collectionOne.add(model);
		this.destroy();
	},

	moveToTwo: function () {
		var model = this.model.clone();
		model.unset('_id');
		Mover.collections.collectionTwo.add(model);
		this.destroy();
	}
});




Mover.Views.AppView = Backbone.View.extend({

	initialize: function () {
		Mover.collections.collectionOne = new Mover.Collections.FirstCollection();
		Mover.collections.collectionTwo = new Mover.Collections.SecondCollection();
		Mover.collections.collectionThree = new Mover.Collections.ThirdCollection();

		Mover.collections.collectionOne.fetch();
		Mover.collections.collectionTwo.fetch();
		Mover.collections.collectionThree.fetch();

		this.listenTo(Mover.collections.collectionOne, 'add', function (modelOne) {
			Mover.views.firstView = new Mover.Views.ViewOne({model: modelOne});
		});
		this.listenTo(Mover.collections.collectionTwo, 'add', function (modelTwo) {
			Mover.views.secondView = new Mover.Views.ViewTwo({model: modelTwo});
		});
		this.listenTo(Mover.collections.collectionThree, 'add', function (modelThree) {
			Mover.views.thirdView = new Mover.Views.ViewThree({model: modelThree});
		});
	},
});

new Mover.Views.AppView();