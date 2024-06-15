import type { NextApiResponse } from 'next';

import { type NextApiRequestWithUser, withAuth } from '@/features/auth';
import { prismaDb } from '@/prisma';

async function handler(req: NextApiRequestWithUser, res: NextApiResponse) {
  const userId = req.userId;

  try {
    const result = await prismaDb.userPartners.findMany({
      where: { userId },
      orderBy: {
        updatedAt: 'asc',
      },
      include: { partner: true },
    });
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error,
      message: 'Error occurred while adding a new sponsor.',
    });
  }
}

export default withAuth(handler);
