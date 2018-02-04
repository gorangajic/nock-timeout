nock timeout request when `__fixtures__` folder is removed while jest is running in watch mode

to reproduce

```
npm install
npm test
```

in other tab

```
rm -rf __fixtures__
```
