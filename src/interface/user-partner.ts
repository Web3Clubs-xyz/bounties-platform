import type { Role } from '@prisma/client';

import type { PartnerType } from '@/interface/partner';
import type { User } from '@/interface/user';

interface UserPartner {
  userId?: string;
  partnerId?: string;
  role?: Role;
  createdAt?: string;
  updatedAt?: string;
  user?: User;
  partner?: PartnerType;
}
export type { UserPartner };
