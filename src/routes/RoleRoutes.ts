import express, { Request, Response, Router } from 'express';
import { RoleServiceImpl } from '../services/RoleService';

const router = Router();

const roleService = new RoleServiceImpl();

router.get('/roles/permissions', async (req: Request, res: Response) => {
    try {
        const roles = await roleService.getRoles();
        const rolesWithPermissions = roles.map(role => {
            const permissions = role.permissions.map(p => ({ id: p.id, name: p.name }));
            return { id: role.id, name: role.name, permissions };
        });
        res.json(rolesWithPermissions);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.post('/roles/:roleId/permissions', async (req: Request, res: Response) => {
    const { roleId } = req.params;
    const permissions = req.body; // Ensure request body structure is validated
    const updatedRole = await roleService.setPermissionsForRole(roleId, permissions);
    res.json(updatedRole);
});

export default router;