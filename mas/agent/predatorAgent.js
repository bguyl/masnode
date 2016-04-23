
var Agent = require("./Agent.js");

var inherits = function(ctor, superCtor) { // took this right from requrie('util').inherits
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
};

var PredatorAgent = function(body, radius) {
    PredatorAgent.super_.call(this, body, radius); // call A's constructor
     
};



inherits(PredatorAgent,Agent); // B now inherits/extends A

PredatorAgent.prototype.createDefaultBody= function(){

};

PredatorAgent.prototype.doDecisionAndAction = function() { // override A's method
    
    //console.log('predator');
};


module.exports = PredatorAgent;