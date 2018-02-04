const fetch = require('isomorphic-fetch');
const nockBack = require('nock').back;

it('test', async () => {
    nockBack.fixtures = '__fixtures__';
    nockBack.setMode('record');
    const { nockDone } = await nockBack('api.json');
    const res = await fetch('https://api.github.com');
    const body = await res.json();

    await nockDone();
});
