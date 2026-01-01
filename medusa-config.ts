import { loadEnv, defineConfig } from '@medusajs/framework/utils'

console.log("🔥 CARGANDO CONFIG PERSONALIZADA");


loadEnv(process.env.NODE_ENV || 'development', process.cwd())

export default defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: "*",
      adminCors: process.env.ADMIN_CORS,
      authCors: process.env.AUTH_CORS,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
    store: { auth: { disable: true, }, },
  },

  admin: {
    disable: false,
  },
})
