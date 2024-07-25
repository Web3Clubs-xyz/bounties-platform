import { status } from '@prisma/client';
import type { NextApiResponse } from 'next';

import { type NextApiRequestWithUser, withAuth } from '@/features/auth';
import { prisma } from '@/prisma';

async function handler(req: NextApiRequestWithUser, res: NextApiResponse) {
  try {
    const userId = req.userId;

    const user = await prisma.user.findUnique({
      where: {
        id: userId as string,
      },
    });

    if (!user || !user.currentPartnerId) {
      return res
        .status(403)
        .json({ error: 'User does not have a current partner.' });
    }

    const partnerId = user.currentPartnerId;

    if (!partnerId) {
      return res.status(400).json({ error: 'partner ID is required' });
    }

    const partner = await prisma.partners.findUnique({
      where: { id: partnerId },
      select: { createdAt: true, totalRewardedInUSD: true },
    });

    if (!partner) {
      return res.status(404).json({ error: 'partner not found' });
    }

    const yearOnPlatform = partner.createdAt.getFullYear();

    const totalListings = await prisma.bounties.count({
      where: {
        partnerId,
        isActive: true,
        isArchived: false,
        status: status.OPEN,
      },
    });

    const totalSubmissions = await prisma.submission.count({
      where: {
        listing: {
          partnerId,
          isActive: true,
          isArchived: false,
          status: status.OPEN,
        },
      },
    });

    return res.status(200).json({
      yearOnPlatform,
      totalRewardAmount: partner.totalRewardedInUSD,
      totalListings,
      totalSubmissions,
    });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

export default withAuth(handler);
