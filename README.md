# `jest-shot` [![Build Status](https://travis-ci.org/chambo-e/jest-shot.svg?branch=master)](https://travis-ci.org/chambo-e/jest-shot) [![codecov](https://codecov.io/gh/chambo-e/jest-shot/branch/master/graph/badge.svg)](https://codecov.io/gh/chambo-e/jest-shot)


A tiny helpers to snapshot a React Component under every angles.

## Install

```bash
$ yarn add --dev jest-shot
```

## Usage

`simple.js`
```js
import React, { Component } from 'react';

class Nested extends Component {
    render() {
        return <p>Yo nested!</p>;
    }
}

export default class Simple extends Component {
    constructor() {
        super();
        this.state = { status: 'pristine' };
    }

    render() {
        return (
            <div>
                {this.props.message}
                {`State status: ${this.state.status}`}
                <Nested/>
            </div>
        );
    }
}
```

`__tests__/test-simple.js`
```js
import shot from 'jest-shot';
import Simple from '../simple';

shot(Simple, [
    {
        description: 'can take props',
        props: {
            message: 'hello',
        }
    },
    {
        description: 'can also override state',
        state: {
            status: 'dirty',
        }
    }
    {
        description: 'can also snap full tree instead of a shallow snap',
        mount: true,
    }
])
```
`__tests__/__snapshots__/test-simple.js.snap`
```
// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`Simple can take props`] = `
<Simple>
<div>
    hello
    State status: pristine
    <Nested/>
</div>
</Simple>
`;

exports[`Simple can also override state`] = `
<Simple>
<div>
    hello
    State status: dirty
    <Nested/>
</div>
</Simple>
`;

exports[`can also snap full tree instead of a shallow snap`] = `
<Simple>
<div>
    hello
    State status: dirty
    <Nested>
        Yo nested!
    </Nested>
</div>
</Simple>
`;
```
