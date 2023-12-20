import { RoleServiceImpl } from './RoleService';

describe('RoleService', () => {
  let service: RoleServiceImpl;

  beforeEach(() => {
    service = new RoleServiceImpl();
  });

  it('should return a list of roles', async () => {
    const roles = await service.getRoles();
    expect(roles).toBeDefined();
    expect(Array.isArray(roles)).toBeTruthy();
    expect(roles.length).toBeGreaterThan(0);
  });

  it('should throw an error when trying to set permissions for a non-existent role', async () => {
    await expect(service.setPermissionsForRole('nonExistentRoleId', ['perm1']))
      .rejects
      .toThrow('Role not found');
  });
  

  it('should return a list of permissions', async () => {
    const permissions = await service.getPermissions();
    expect(permissions).toBeDefined();
    expect(permissions.length).toBeGreaterThan(0);
  });
  


});
