import type { NextApiResponse } from 'next';

import { type NextApiRequestWithUser, withAuth } from '@/features/auth';
import { prismaDb } from '@/prisma';

async function handler(req: NextApiRequestWithUser, res: NextApiResponse) {
  const { inviteId } = req.body;
  const userId = req.userId;

  try {
    const userInvite = await prismaDb.userInvites.findUnique({
      where: {
        id: inviteId,
      },
    });
    await prismaDb.userPartners.create({
      data: {
        userId: userId as string,
        partnerId: userInvite?.partnerId || '',
        role: userInvite?.memberType,
      },
    });
    await prismaDb.user.update({
      where: {
        id: userId as string,
      },
      data: {
        currentpartnerId: userInvite?.partnerId || '',
      },
    });
    return res.status(200).json({ accepted: true });
  } catch (error: any) {
    console.error(`User ${userId} unable to be accept invite`, error.message);
    return res.status(400).json({
      error,
      message: 'Error occurred while adding user to a sponsor',
    });
  }
}

export default withAuth(handler);
