import serialize from 'serialize-javascript';

export default function serverRenderer(store, content) {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="#" type="image/x-icon" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
      integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
      crossorigin="anonymous"
    />
    <title>React SSR</title>
  </head>

  <body>
    <div id="root">${content}</div>
  </body>
  <script src="/main.js" defer></script>
  <script>window.__PRELOADED_STATE__ = ${serialize(store.getState())}</script>
</html>`;
}
