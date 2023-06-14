'use strict'

const supertest = require('supertest');
const {app} = require('../server');
const request = supertest(app);

describe('validator test', () => {
    it('handle name', async () => {
      const response = await request.get('/person?name=farah');
      expect(response.status).toEqual(200);

    })
        it('if the query is empty', async () => {
          const response = await request.get('/person?name= ');
          expect(response.status).toEqual(500);
        })
        it('name', async () => {
              const response = await request.get('/person?name=marah');
              console.log(response)
              expect(response.body.name).toEqual('marah');

            })
})