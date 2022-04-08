/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *         - company
 *       properties:
 *         email:
 *           type: string
 *           description: The user email
 *         password:
 *           type: string
 *           description: The user password
 *         company:
 *           type: string
 *           description: The user company
 *       example:
 *         email: myemail@email.com
 *         password: alpha123
 *         company: AlphaNET
 */

/**
 * @swagger
 * /v1/api/users/register:
 *   post:
 *     summary: Create a user
 *     tags: [Users]
 *     description: Use for register and create an user
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         descrition: The user registered
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   $ref: '#/components/schemas/User'
 *       400:
 *         description: User not authorized
 *       401:
 *         description: Token invalid
 */
