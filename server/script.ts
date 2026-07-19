import { prisma } from "./lib/prisma";

async function main() {
  const user = await prisma.user.create({
    data: {
      id: "nurse2",
      email: "nurse2@xyz.hospital",
      passwordHash: "nurse@123",
      role: "ADMIN",
      name: "swagat"
    },
  });
  console.log("created role: ", user)

  const allUsers = await prisma.user.findMany();
  console.log("All users: ", JSON.stringify(allUsers, null, 2))
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });