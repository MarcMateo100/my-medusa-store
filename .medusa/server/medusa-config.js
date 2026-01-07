"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const { loadEnv, defineConfig } = require("@medusajs/framework/utils");

console.log("🔥 CARGANDO CONFIG PERSONALIZADA");

loadEnv(process.env.NODE_ENV || "development", process.cwd());

exports.default = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      port: process.env.PORT,   // 👈 OBLIGATORIO
      storeCors: "*",
      adminCors: "*",
      authCors: "*",
      jwtSecret: process.env.JWT_SECRET,
      cookieSecret: process.env.COOKIE_SECRET,
    },
  },
  admin: {
    disable: false,
  },
});
