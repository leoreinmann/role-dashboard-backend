import request from 'supertest';
import express from 'express';
import roleRoutes from './RoleRoutes';

describe('RoleRoutes', () => {
  let app: express.Express;

  beforeEach(() => {
    app = express();
    app.use(express.json());
    app.use(roleRoutes);
  });

  it('should return a 404 error for a non-existent role in POST request', async () => {
    const response = await request(app)
      .post('/roles/nonExistentRoleId/permissions')
      .send('[perm1]');
    expect(response.status).toBe(404);
  });

  it('GET /roles/permissions should return data in expected format', async () => {
    const response = await request(app).get('/roles/permissions');
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.every((role: { permissions: any; }) => Array.isArray(role.permissions))).toBeTruthy();
  });
  
});
