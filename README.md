# Telegram

Web worker ready version of [gramjs](https://github.com/gram-js/gramjs).

## How to re-build

```bash
npm install --only=dev
NODE_ENV=development npx webpack
NODE_ENV=development npx tsc
```

## Diffs with original

- tested in browser only
- works in web workers
- improved in-browser password's PBKDF2 calculation speed