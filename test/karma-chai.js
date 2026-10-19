// chai 6 is ESM-only and ships no UMD build, so karma-chai can't provide the global; expose it here.
import * as chai from '/base/node_modules/chai/index.js';

window.chai = chai;
