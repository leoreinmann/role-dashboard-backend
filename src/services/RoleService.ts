import { Role, RoleId, Permission, PermissionId, RoleService } from '../interfaces/RoleAndPermissionTypes';

export class RoleServiceImpl implements RoleService {
    private roles: Role[]; // Replace with your data source
    private permissions: Permission[]; // Replace with your data source

    constructor() {
        this.roles = [
            {
                id: "9faaf9ba-464e-4c68-a901-630fc4de123b",
                name: "User",
                permissions: [],
            }, {
                id: "346a3cce-49d4-4e3c-bade-a16ed44b98bb",
                name: "Administrator",
                permissions: [],
            }, {
                id: "6f25f789-72f3-41e2-9561-b30ca19aa225",
                name: "Auditor",
                permissions: [],
            },
        ]; 
        this.permissions = [{
            id: "706ee8e3-6034-4f27-ab20-4397ad874a09",
            name: "Read Data",
          },
          {
            id: "72e1c7be-4c2f-4ed1-bc7b-41519b35e429",
            name: "Write Data",
        }, {
            id: "3add53a6-ede2-4760-8942-dbd08d209d2c",
            name: "Delete Data",
          },]; 
    }

    async getRoles(): Promise<Role[]> {
        // Logic to fetch roles from the data source
        return this.roles;
    }

    async getPermissions(): Promise<Permission[]> {
        // Logic to fetch permissions from the data source
        return this.permissions;
    }

    async setPermissionsForRole(roleId: RoleId, permissions: Permission[]): Promise<Role> {
        // Logic to update permissions of a role
        const role = this.roles.find(role => role.id === roleId);
        if (role) {
            role.permissions = permissions;
            return role;
        } else {
            throw new Error('Role not found');
        }
    }
}
