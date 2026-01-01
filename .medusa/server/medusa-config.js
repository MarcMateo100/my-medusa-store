"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const { loadEnv, defineConfig } = require("@medusajs/framework/utils");

console.log("🔥 CARGANDO CONFIG PERSONALIZADA222");


loadEnv(process.env.NODE_ENV || "development", process.cwd());

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS,
      adminCors: process.env.ADMIN_CORS,
      authCors: process.env.AUTH_CORS,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
    store_api: { disable_auth: true, },
  },

  // 🔥 Desactiva el admin UI en Medusa v2
  admin: {
    serve: false,
  },

  plugins: [
    // No incluyas @medusajs/admin-bundler aquí
  ],
});
