import type { NextApiResponse } from 'next';

import { type NextApiRequestWithUser, withAuth } from '@/features/auth';
import { prismaDb } from '@/prisma';

async function handler(req: NextApiRequestWithUser, res: NextApiResponse) {
  const { categories } = req.body;
  const userId = req.userId;

  try {
    await prismaDb.emailSettings.deleteMany({
      where: {
        userId: userId as string,
      },
    });

    await Promise.all(
      categories.map((category: any) =>
        prismaDb.emailSettings.create({
          data: {
            userId: userId as string,
            category,
          },
        }),
      ),
    );

    res
      .status(200)
      .json({ message: 'Email preferences updated successfully!' });
  } catch (error) {
    console.error('Failed to update email preferences:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export default withAuth(handler);
