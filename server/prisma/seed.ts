import { prisma } from "./prisma"
import bcrypt from "bcrypt";

async function main() {
  console.log("Seeding database...");

  const saltRounds = 12;
  const passwordHash = await bcrypt.hash("demo1234", saltRounds);

  // 1. Create a Doctor (Admin)
  const doctor = await prisma.user.upsert({
    where: { email: "doctor@demo.com" },
    update: {},
    create: {
      email: "doctor@demo.com",
      name: "Dr. Gregory House",
      passwordHash: passwordHash,
      role: "ADMIN",
    },
  });

  // 2. Create a Nurse (Member)
  const nurse = await prisma.user.upsert({
    where: { email: "nurse@demo.com" },
    update: {},
    create: {
      email: "nurse@demo.com",
      name: "Nurse Sweety",
      passwordHash: passwordHash,
      role: "NURSE",
    },
  });

  console.log("✅ Seed execution finished.");
  console.log(`Doctor created: ${doctor.email}`);
  console.log(`Nurse created:  ${nurse.email}`);
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:");
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });