"use strict";

const assert = require("power-assert");
const sigmoid = require("../sigmoid");

assert(sigmoid(-1.0) === 0.2689414213699951);
assert(sigmoid(-0.8) === 0.31002551887238755);
assert(sigmoid(-0.6) === 0.35434369377420455);
assert(sigmoid(-0.4) === 0.401312339887548);
assert(sigmoid(-0.2) === 0.45016600268752216);
assert(sigmoid(0) === 0.5);
assert(sigmoid(0.2) === 0.549833997312478);
assert(sigmoid(0.4) === 0.598687660112452);
assert(sigmoid(0.6) === 0.6456563062257954);
assert(sigmoid(0.8) === 0.6899744811276125);
assert(sigmoid(1.0) === 0.7310585786300049);

assert(sigmoid(-1.0, 8) === 0.0003353501304664782);
assert(sigmoid(-0.8, 8) === 0.0016588010801744217);
assert(sigmoid(-0.6, 8) === 0.008162571153159898);
assert(sigmoid(-0.4, 8) === 0.039165722796764356);
assert(sigmoid(-0.2, 8) === 0.16798161486607552);
assert(sigmoid(0, 8) === 0.5);
assert(sigmoid(0.2, 8) === 0.8320183851339245);
assert(sigmoid(0.4, 8) === 0.9608342772032357);
assert(sigmoid(0.6, 8) === 0.9918374288468401);
assert(sigmoid(0.8, 8) === 0.9983411989198255);
assert(sigmoid(1.0, 8) === 0.9996646498695336);
