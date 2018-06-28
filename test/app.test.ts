import request from 'supertest';
import {app} from '../src/app';

describe('Express App...', () => {
  test('should 404 on GET\'/\'', () => {
    request(app).get('/').expect(404).end((err) => {
      if (err) throw new Error(err);
    });
  });
});
