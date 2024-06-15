import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

import { prismaDb} from '@/prisma';

export default async function newUser(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const token = await getToken({ req });

    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const userId = token.id;

    if (!userId) {
      return res.status(400).json({ error: 'Invalid token' });
    }

    const user = await prismaDb.user.findUnique({
      where: {
        id: userId as string,
      },
    });

    const invite = await prismaDb.userInvites.findFirst({
      where: {
        email: user?.email,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    const hasInvite = user && invite;

    if (!hasInvite) {
      return res
        .status(307)
        .redirect('/new?onboarding=true&loginState=signedIn');
    } else {
      await prismaDb.userPartners.create({
        data: {
          userId: userId as string,
          partnerId: invite?.partnerId || '',
          role: invite?.memberType,
        },
      });
      await prismaDb.user.update({
        where: {
          id: userId as string,
        },
        data: {
          currentPartnerId: invite?.partnerId,
        },
      });
      return res
        .status(307)
        .redirect('/partners/?loginState=signedIn');
    }
  } catch (error) {
    return res.status(400).json({
      error,
      message: 'Error occurred while adding a new bounty.',
    });
  }
}
