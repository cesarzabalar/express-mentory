/**
 * @swagger
 * components:
 *  schemas:
 *    Token:
 *      type: object
 *      required:
 *        - status
 *        - token
 *      properties:
 *        status:
 *          type: boolean
 *          description: The response status
 *        token:
 *          type: string
 *          description: The jwt token
 *      example:
 *        status: true
 *        token: 1558844jshshhshjsjqyqrtqrq
 */

/**
 * @swagger
 * /v1/api/users/getToken:
 *   post:
 *     summary: Request a new token
 *     tags: [Users]
 *     description: Use for request a new application token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         descrition: The user registered
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Token'
 *       401:
 *         description: Invalid data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 error:
 *                   type: array
 */
