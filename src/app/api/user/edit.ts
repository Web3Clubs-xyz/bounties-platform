import type { NextApiResponse } from 'next';

import { type NextApiRequestWithUser, withAuth } from '@/features/auth';
import {
  type MainSkills,
  SkillList,
  type SubSkillsType,
} from '@/interface/skills';
import { prismaDb } from '@/prisma';

const uniqueArray = (arr: SubSkillsType[]): SubSkillsType[] => {
  return Array.from(new Set(arr));
};

const correctSkills = (
  skillObjArray: { skills: MainSkills; subskills: SubSkillsType[] }[],
): { skills: MainSkills; subskills: SubSkillsType[] }[] => {
  const correctedSkills: { skills: MainSkills; subskills: SubSkillsType[] }[] =
    [];
  const skillMap: Record<MainSkills, SubSkillsType[]> = {} as Record<
    MainSkills,
    SubSkillsType[]
  >;

  skillObjArray.forEach((skillObj) => {
    if (!skillMap[skillObj.skills]) {
      skillMap[skillObj.skills] = [];
    }
    skillObj.subskills.forEach((subskill) => {
      const correctMainSkill = SkillList.find((s) =>
        s.subskills.includes(subskill),
      );

      if (correctMainSkill) {
        skillMap[correctMainSkill.mainskill].push(subskill);
      }
    });
  });

  Object.keys(skillMap).forEach((key) => {
    correctedSkills.push({
      skills: key as MainSkills,
      subskills: uniqueArray(skillMap[key as MainSkills]),
    });
  });

  return correctedSkills;
};

async function handler(req: NextApiRequestWithUser, res: NextApiResponse) {
  const userId = req.userId;

  // eslint-disable-next-line
  const { email, publicKey, skills, role, Hackathon,...data } = req.body;

  const correctedSkills = correctSkills(skills);

  try {
    const updatedData = {
      ...data,
      skills: correctedSkills,
    };

    const updatedUser = await prismaDb.user.update({
      where: { id: userId },
      data: updatedData,
      select: {
        email: true,
        publicKey: true,
      },
    });

    return res.json(updatedUser);
  } catch (error: any) {
    console.error('Error updating user profile:', error.message);
    return res.status(500).json({ error: 'Error updating user profile.' });
  }
}

export default withAuth(handler);
