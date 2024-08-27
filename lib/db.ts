import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
};


//避免热重载hot reload中创建过多prisma
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;