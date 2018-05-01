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

thize(1);   // '1st'
thize(58);  // '58th'
thize(202); // '202nd'
thize(-43); // '-43rd'

thize.suffix(51); // 'st'
```

## Author

Jason Yu (me@ycmjason.com)
