define(['handlebars'], function(Handlebars) {

this["myNamespace"] = this["myNamespace"] || {};

this["myNamespace"]["index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1>Welcome</h1>\n<h3>This is an example</h3>\n";
  });

return this["myNamespace"];

});