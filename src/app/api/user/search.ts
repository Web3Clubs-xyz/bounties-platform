import type { NextApiRequest, NextApiResponse } from 'next';

import { MAX_COMMENT_SUGGESTIONS } from '@/constants';
import { prismaDb } from '@/prisma';

export default async function searchUser(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end(`Method Not Allowed`);
  }

  const { query, take } = req.query;
  if (!query) {
    return res.status(400).json({ error: 'Query is required' });
  }
  try {
    let takeNum = Number(take) || MAX_COMMENT_SUGGESTIONS;
    if (takeNum > MAX_COMMENT_SUGGESTIONS) takeNum = MAX_COMMENT_SUGGESTIONS;

    const users = await prismaDb.user.findMany({
      where: {
        OR: [
          {
            username: {
              contains: query as string,
            },
          },
          {
            firstName: {
              contains: query as string,
            },
          },
          {
            lastName: {
              contains: query as string,
            },
          },
        ],
      },
      take: takeNum,
      select: {
        id: true,
        username: true,
        photo: true,
        firstName: true,
        lastName: true,
      },
    });
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({
      message: `Error occurred while searching for user with query - ${query}.`,
    });
  }
}
