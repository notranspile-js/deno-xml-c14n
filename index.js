
import { ExclusiveCanonicalisation } from "./lib/algorithm/exclusive-canonicalisation.js";

var builtIn = {
  algorithms: {
    "http://www.w3.org/2001/10/xml-exc-c14n#": function(options) {
      return new ExclusiveCanonicalisation(options);
    },
    "http://www.w3.org/2001/10/xml-exc-c14n#WithComments": function(options) {
      options = Object.create(options || null);
      options.includeComments = true;
      return new ExclusiveCanonicalisation(options);
    },
  },
};

function CanonicalisationFactory() {
  if (!(this instanceof CanonicalisationFactory)) {
    return new CanonicalisationFactory();
  }

  this.algorithms = Object.create(builtIn.algorithms);
};

CanonicalisationFactory.prototype.registerAlgorithm = function registerAlgorithm(uri, implementation) {
  this.algorithms[uri] = implementation;

  return this;
};

CanonicalisationFactory.prototype.getAlgorithm = function getAlgorithm(uri) {
  return this.algorithms[uri];
};

CanonicalisationFactory.prototype.createCanonicaliser = function createCanonicaliser(uri, options) {
  return this.algorithms[uri](options);
};

export { CanonicalisationFactory };
