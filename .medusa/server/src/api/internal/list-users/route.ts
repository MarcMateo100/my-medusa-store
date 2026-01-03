import { MedusaRequest, MedusaResponse } from "@medusajs/medusa";

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const userService = req.scope.resolve("userService");

  const users = await userService.list();

  return res.json({ users });
}
