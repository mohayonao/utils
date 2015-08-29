# UTILS
[![Build Status](http://img.shields.io/travis/mohayonao/utils.svg?style=flat-square)](https://travis-ci.org/mohayonao/utils)
[![NPM Version](http://img.shields.io/npm/v/@mohayonao/utils.svg?style=flat-square)](https://www.npmjs.org/package/@mohayonao/utils)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://mohayonao.mit-license.org/)

> utility functions

## Installation

Node.js

```sh
npm install @mohayonao/utils
```

## Examples

```js
import { range, midicps, scramble } from "@mohayonao/utils";

let melody = scramble(range(69, 82).map(midicps));
```

import individual functions for your needs

```js
import range from "@mohayonao/utils/range";
import midicps from "@mohayonao/utils/midicps";
import scramble from "@mohayonao/utils/scramble";

let melody = scramble(range(69, 82).map(midicps));
```


## API

### Arrays
- `appendIfNotExists(array: any[], target: any): boolean`
- `blendAt(array: number[], index: number, method=clipAt): number`
- `clipAt(array: any[], index: number): any`
- `foldAt(array: any[], index: number): any`
- `range(start: number, stop: number, step: number): number[]`
- `removeIfExists(array: any[], target: any): boolean`
- `reverse(array: any[]): any[]`
- `sample(array: any[], rand=Math.random): any`
- `scramble(array: any[], rand=Math.random): any[]`
- `wrapAt(array: any[], index: number): any`

### Numbers
- `constrain(value: number, minValue: number, maxValue: number): number`
- `cpsmidi(cps: number): number`
- `dbamp(db: number): number`
- `linexp(value: number, inMin, inMax, outMin, outMax): number`
- `linlin(value: number, inMin, inMax, outMin, outMax): number`
- `midicps(midi: number): number`
- `truncate(x: number, y: number): number`

### Functions
- `debounce(func: function, wait: number): function`
- `once(func: function): function`
- `throttle(func: function, wait: number): function`

### Objects
- `extend(...args: object): object`

### Utility
- `defaults(value: any, defaultValue: any): any`
- `noop(): void`

## License
MIT
