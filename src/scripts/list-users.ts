export default async function () {
  const { container } = await import("@medusajs/medusa/dist/loaders/index.js");

  const userService = container.resolve("userService");

  const users = await userService.list();

  console.log("Usuarios encontrados:");
  console.log(users);
}
