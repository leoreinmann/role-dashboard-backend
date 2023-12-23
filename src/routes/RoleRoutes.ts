import express, { Request, Response, Router } from 'express';
import { RoleServiceImpl } from '../services/RoleService';

const router = Router();

const roleService = new RoleServiceImpl();


/**
 * @swagger
 * /permissions:
 *   get:
 *     summary: Get a list of permissions
 *     responses:
 *       200:
 *         description: A list of permissions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Permission'
 */
router.get('/permissions', async (req: Request, res: Response) => {
    try {
        const permissions = await roleService.getPermissions();
        res.json(permissions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


/**
 * @swagger
 * /roles/permissions:
 *   get:
 *     summary: Get a list of roles with their permissions
 *     responses:
 *       200:
 *         description: A list of roles with permissions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Role'
 */
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


/**
 * @swagger
 * /roles/{roleId}/permissions:
 *   post:
 *     summary: Update permissions for a specified role
 *     parameters:
 *       - in: path
 *         name: roleId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the role
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Permission'
 *     responses:
 *       200:
 *         description: The updated role with new permissions
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Role'
 *       404:
 *         description: Role not found
 */
router.post('/roles/:roleId/permissions', async (req: Request, res: Response) => {
    const { roleId } = req.params;
    const permissions = req.body;
    try {
        const updatedRole = await roleService.setPermissionsForRole(roleId, permissions);
        res.json(updatedRole);
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: 'Role not found' });
    }
});

export default router;