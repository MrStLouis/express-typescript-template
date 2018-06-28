import http from 'http';
import {server} from '../src/server';

describe('Express Server...', () => {
  test('should start', (done) => {
    expect(server).toBeInstanceOf(http.Server);
    server.close();
    done();
  });
});
