import express, { Request, Response, Router } from 'express';
import { RoleServiceImpl } from '../services/RoleService';

const router = Router();

const roleService = new RoleServiceImpl();

router.get('/permissions', async (req: Request, res: Response) => {
    try {
        const permissions = await roleService.getPermissions();
        res.json(permissions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/roles/permissions', async (req: Request, res: Response) => {
    try {
        const roles = await roleService.getRoles();
        const rolesWithPermissions = roles.map(role => {
            const permissions = role.permissions ? role.permissions.map(p => ({ id: p.id, name: p.name })) : [];
            return { id: role.id, name: role.name, permissions };
        });
        res.json(rolesWithPermissions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.post('/roles/:roleId/permissions', async (req: Request, res: Response) => {
    const { roleId } = req.params;
    const permissions = req.body;
    try {
        const updatedRole = await roleService.setPermissionsForRole(roleId, permissions);
        res.json(updatedRole);
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: 'Internal Server Error' });
    }
});

export default router;