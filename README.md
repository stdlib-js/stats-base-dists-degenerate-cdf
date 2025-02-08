<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Cumulative Distribution Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Degenerate distribution][degenerate-distribution] [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [degenerate][degenerate-distribution] random variable is

<!-- <equation class="equation" label="eq:degenerate_cdf" align="center" raw="F(x;\mu)={\begin{cases}1, & x \geq \mu,\\0,& x < \mu.\end{cases}}" alt="Cumulative distribution function for a degenerate distribution."> -->

```math
F(x;\mu)={\begin{cases}1, & x \geq \mu,\\0,& x < \mu.\end{cases}}
```

<!-- <div class="equation" align="center" data-raw-text="F(x;\mu)={\begin{cases}1, &amp; x \geq \mu,\\0,&amp; x &lt; \mu.\end{cases}}" data-equation="eq:degenerate_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/degenerate/cdf/docs/img/equation_degenerate_cdf.svg" alt="Cumulative distribution function for a degenerate distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `µ` is the constant value of the distribution.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-degenerate-cdf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats-base-dists-degenerate-cdf' );
```

#### cdf( x, mu )

Evaluates the [CDF][cdf] of a [degenerate distribution][degenerate-distribution] centered at `mu`.

```javascript
var y = cdf( 2.0, 8.0 );
// returns 0.0

y = cdf( 8.0, 8.0 );
// returns 1.0

y = cdf( 10.0, 8.0 );
// returns 1.0
```

#### cdf.factory( mu )

Returns a function for evaluating the [cumulative distribution function][cdf] of a [degenerate distribution][degenerate-distribution] centered at `mu`.

```javascript
var mycdf = cdf.factory( 10.0 );

var y = mycdf( 10.0 );
// returns 1.0

y = mycdf( 8.0 );
// returns 0.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var cdf = require( '@stdlib/stats-base-dists-degenerate-cdf' );

var mu;
var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    x = round( randu()*10.0 );
    mu = round( randu()*10.0 );
    y = cdf( x, mu );
    console.log( 'x: %d, µ: %d, F(x;µ): %d', x, mu, y );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/stats/base/dists/degenerate/cdf.h"
```

#### stdlib_base_dists_degenerate_cdf( x, mu )

Evaluates the [CDF][cdf] of a [degenerate distribution][degenerate-distribution] centered at `mu`.

```c
double y = stdlib_base_dists_degenerate_cdf( 2.0, 3.0 );
// returns 0.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **mu**: `[in] double` constant value of distribution.

```c
double stdlib_base_dists_degenerate_cdf( const double x, const double mu );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/stats/base/dists/degenerate/cdf.h"
#include "stdlib/math/base/special/round.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double mu;
    double x;
    double y;
    int i;

    for ( i = 0; i < 10; i++ ) {
        x = stdlib_base_round( random_uniform( 0.0, 10.0 ) );
        mu = stdlib_base_round( random_uniform( 0.0, 10.0 ) );
        y = stdlib_base_dists_degenerate_cdf( x, mu );
        printf( "x: %lf, µ: %lf, F(x;µ): %lf\n", x, mu, y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-degenerate-cdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-degenerate-cdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-degenerate-cdf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-degenerate-cdf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-degenerate-cdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-degenerate-cdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-degenerate-cdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-degenerate-cdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-degenerate-cdf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-degenerate-cdf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-degenerate-cdf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-degenerate-cdf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-degenerate-cdf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-degenerate-cdf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-degenerate-cdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-degenerate-cdf/main/LICENSE

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

</section>

<!-- /.links -->
