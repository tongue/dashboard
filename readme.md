# dashboard

Dashboard written for personal usage. Built with Next.js, React, styled-components and socket.io.

## installation

1. Download or clone the repo.
2. Run `yarn`

## usage

```
→ npm run
Lifecycle scripts included in dashboard:
  start
    next start

available via `npm run-script`:
  build
    next build
  dev
    node server/index.js
  lint
    semistandard
```

## custom widget

Create a new folder in `widgets` with a `index.js` file. 

```js
import Widget from '../../components/widget';

export default ({ text }) => (
  <Widget>
    <p>{text}</p>
  </Widget>
);
```

## socket

Every widget can have a [socket.io](https://socket.io/) connection. Just create `widgets/{name}/socket.js` that exports a function that have one argument that is the socket instance.

```js
module.exports = (socket) => {
};
```

## license

MIT © [Fredrik Forsmo](https://github.com/frozzare)
