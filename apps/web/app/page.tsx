import {prisma} from '@repo/prisma/client'
export default async function Home() {
  const user = await prisma.user.findFirst();
  return (
    <div>
      username:
      {user?.username}
      password:
      {user?.password}
    </div>
  );
}
