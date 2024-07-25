import type { NextApiResponse } from 'next';

import { type NextApiRequestWithUser, withAuth } from '@/features/auth';
import { prisma } from '@/prisma';

async function sponsors(req: NextApiRequestWithUser, res: NextApiResponse) {
  const params = req.query;

  const userId = req.userId;

  const searchString = params.searchString as string;
  const take = params.take ? parseInt(params.take as string, 10) : 50;
  let finalPartners = [];
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId as string,
      },
      select: {
        id: true,
        role: true,
      },
    });
    if (user && user?.role === 'GOD') {
      const whereSearch = searchString
        ? {
            name: {
              contains: searchString,
            },
            Hackathon: null,
          }
        : {
            Hackathon: null,
          };
      const partnersList = await prisma.partners.findMany({
        where: {
          ...whereSearch,
        },
        take,
        select: {
          id: true,
          name: true,
          slug: true,
          logo: true,
        },
        orderBy: {
          slug: 'asc',
        },
      });
      finalPartners = partnersList.map((partner) => {
        return {
          value: partner.id,
          label: partner.name,
          sponsor: {
            ...partner,
            role: 'GOD MODE',
          },
        };
      });
    } else {
      const whereSearch = searchString
        ? {
            sponsor: {
              name: {
                contains: searchString,
              },
              Hackathon: null,
            },
          }
        : { sponsor: { Hackathon: null } };
      const partnersList = await prisma.userPartners.findMany({
        where: {
          userId,
          ...whereSearch,
        },
        orderBy: {
          partner: {
            slug: 'asc',
          },
        },
        include: {
          partner: {
            select: {
              id: true,
              name: true,
              slug: true,
              logo: true,
            },
          },
        },
        take,
      });
      finalPartners = partnersList.map((partner) => {
        return {
          value: partner.partner.id,
          label: partner.partner.name,
          sponsor: {
            ...partner.partner,
            role: partner.role,
          },
        };
      });
    }
    res.status(200).json(finalPartners);
  } catch (error) {
    res.status(400).json({
      error,
      message: 'Error occurred while fetching sponsors',
    });
  }
}

export default withAuth(sponsors);
