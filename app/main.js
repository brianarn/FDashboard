// Ember mods
Ember.Handlebars.helper('capfirst', function(value, options){
  return value.substr(0,1).toUpperCase() + value.substr(1);
});

// Application
App = Ember.Application.create();

App.Router.map(function(){
  this.resource('stats');
});

App.StatsRoute = Ember.Route.extend({
  model: function(){
    return [{
      name: 'tires',
      value: 6
    },{
      name: 'brakes',
      value: 3
    },{
      name: 'gearbox',
      value: 3
    },{
      name: 'body',
      value: 3
    },{
      name: 'engine',
      value: 3
    },{
      name: 'suspension',
      value: 2
    }];
  }
});
