import prisma from "../lib/prismadb";

export async function clean() {
  await prisma.patient.deleteMany();
  await prisma.details.deleteMany();
}
