App = Ember.Application.create({});

App.IndexRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('content', ['a', 'b', 'c']);
  }
});

App.Router.map(function() {
  this.route("about", { path: "/about" });
  this.route("favorites", { path: "/favs" });
});