"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const { loadEnv, defineConfig } = require("@medusajs/framework/utils");

// Carga variables de entorno
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
  },

  // 🔥 Desactiva el Admin UI para evitar el error en Render
  admin: {
    disable: true,
  },
});
