'use strict';


const supertest = require('supertest');
const {app} = require('../src/server');
const request = supertest(app);

describe('Server test', () => {
    it('PAGE NOT FOUND', async () => {
      const response = await request.get('/new');
      expect(response.status).toEqual(404);
    })

    it('PAGE NOT FOUND', async () => {
      const response = await request.put('/new');
      expect(response.status).toEqual(404);
    })

    // it('HANDEL THE ERROR', async () => {
    //   const response = await request.get('/bad');
    //   expect(response.status).toEqual(500);
    //   expect(response.body.route).toEqual('/bad');
    // })
})