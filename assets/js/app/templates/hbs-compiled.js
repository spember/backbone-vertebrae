define(['handlebars'], function(Handlebars) {

this["myNamespace"] = this["myNamespace"] || {};
this["myNamespace"]["templates"] = this["myNamespace"]["templates"] || {};

this["myNamespace"]["templates"]["index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  buffer += "<h1>Hello.</h1>\n<h3>This is an example project structure for a front-end app which uses Backbone, Require, Grunt, and more.</h3>\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.info) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.info; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.info) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

return this["myNamespace"]["templates"];

});