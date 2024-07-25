import type { EmailSettings } from '@prisma/client';

import type { PartnerType } from '@/interface/partner';

import type { PoW } from './pow';
import type { SubmissionWithUser } from './submission';
import { UserPartner } from './user-partner';

interface User {
  id?: string;
  publicKey?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  username?: string;
  isVerified?: boolean;
  createdAt?: string;
  updatedAt?: string;
  role?: string;
  talent?: boolean;
  Partner?: boolean;
  superteamLevel?: string;
  isTalentFilled?: boolean;
  bio?: string;
  location?: string;
  photo?: string;
  experience?: string;
  cryptoExperience?: string;
  currentEmployer?: string;
  community?: string;
  interests?: string;
  skills?: string;
  subSkills?: string;
  workPrefernce?: string;
  discord?: string;
  twitter?: string;
  github?: string;
  linkedin?: string;
  website?: string;
  telegram?: string;
  pow?: string;
  totalEarnedInUSD?: number;
  currentPartnerId?: string;
  currentPartner?: PartnerType;
  UserPartners?: UserPartner[];
  PoW?: PoW[];
  private?: boolean;
  Submission?: SubmissionWithUser[];
  hackathonId?: string;
  featureModalShown?: boolean;
  Hackathon?: {
    id: string;
    slug: string;
    name: string;
    logo: string;
    altLogo: string;
    description: string;
    PartnerId: string;
    startDate: string;
    deadline: string;
    announceDate: string;
  };
  surveysShown?: string[];
  emailSettings?: EmailSettings[];
}
export type { User };
