import { loadEnv, defineConfig } from "@medusajs/framework/utils"

console.log("🔥 CARGANDO CONFIG PERSONALIZADA")

loadEnv(process.env.NODE_ENV || "development", process.cwd())

export default defineConfig({
  projectConfig: {
    http: {
      storeCors: "*",
      adminCors: "*",
      authCors: "*",
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
  },

  admin: {
    disable: true,
  },

  modules: {
    auth: {
      resolve: "@medusajs/auth",
      options: {
        providers: [
          {
            id: "emailpass",
            type: "emailpass",
          },
        ],
      },
    },

    eventBus: { resolve: "@medusajs/event-bus-local" },
    cache: { resolve: "@medusajs/cache-inmemory" },
    workflows: { resolve: "@medusajs/workflows" },
    product: { resolve: "@medusajs/product" },
    pricing: { resolve: "@medusajs/pricing" },
    cart: { resolve: "@medusajs/cart" },
    order: { resolve: "@medusajs/order" },
    fulfillment: { resolve: "@medusajs/fulfillment" },
    inventory: { resolve: "@medusajs/inventory" },
    payment: { resolve: "@medusajs/payment" },
    apiKey: { resolve: "@medusajs/api-key" },
  },
})
