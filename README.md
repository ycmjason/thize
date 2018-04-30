# thize
[![Build Status](https://travis-ci.org/ycmjason/thize.svg?branch=master)](https://travis-ci.org/ycmjason/thize)
[![codecov](https://codecov.io/gh/ycmjason/thize/branch/master/graph/badge.svg)](https://codecov.io/gh/ycmjason/thize)

Add st/nd/rd/th to your number.

## Install

```
npm install --save thize
```

Or if you are British,

```
npm install --save thise
```

## Usage

```js
const thize = require('thize');

thize(1);   // 'st'
thize(2);   // 'nd'
thize(3);   // 'rd'
thize(4);   // 'th'
thize(58);  // 'th'
thize(201); // 'st'
thize(384); // 'th
```

## Author

Jason Yu (me@ycmjason.com)
