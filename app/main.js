// Ember mods
Ember.Handlebars.helper('capfirst', function(value, options){
  return value.substr(0,1).toUpperCase() + value.substr(1);
});

// Application
App = Ember.Application.create();

App.Router.map(function(){
  this.resource('stats');
  this.resource('gear');
  this.resource('player');
});

App.IndexRoute = Ember.Route.extend({
  redirect: function(){
    this.transitionTo('stats');
  }
});

App.Store = DS.Store.extend({
  revision: 13,
  adapter: 'DS.FixtureAdapter'
});

App.Stats = DS.Model.extend({
  name: DS.attr('string'),
  value: DS.attr('number')
});

App.Stats.FIXTURES = [
  {
    id: 0,
    name: 'tires',
    value: 6
  },
  {
    id: 1,
    name: 'brakes',
    value: 3
  },
  {
    id: 2,
    name: 'gearbox',
    value: 3
  },
  {
    id: 3,
    name: 'body',
    value: 3
  },
  {
    id: 4,
    name: 'engine',
    value: 3
  },
  {
    id: 5,
    name: 'suspension',
    value: 2
  }
];

App.StatsRoute = Ember.Route.extend({
  model: function(){
    return App.Stats.find();
  }
});

App.StatsController = Ember.ObjectController.extend({
  increment: function(stat){
    var newValue = stat.get('value') + 1;
    stat.set('value', newValue);
  },
  decrement: function(stat){
    var newValue = stat.get('value') - 1;

    // Don't go below zero
    if (newValue < 0) { return; }

    stat.set('value', newValue);
  }
});
