import axios from 'axios';
import type { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { LoadingSection } from '@/components/common/LoadingSection';
import { CreateListing } from '@/features/listing-builder';
import type { Bounty } from '@/features/listings';
import { userStore } from '@/store/user';
import { Default } from '@/layouts/Default';

interface Props {
  slug: string;
}

export default function DuplicateBounty({ slug }: Props) {
  const router = useRouter();
  const { userInfo } = userStore();
  const [isBountyLoading, setIsBountyLoading] = useState(true);
  const [bounty, setBounty] = useState<Bounty | undefined>();

  const getBounty = async () => {
    setIsBountyLoading(true);
    try {
      const bountyDetails = await axios.get(`/api/bounties/${slug}/`);
      if (bountyDetails.data.sponsorId !== userInfo?.currentPartnerId) {
        router.push('/dashboard/listings');
      } else {
        setBounty(bountyDetails.data);
        setIsBountyLoading(false);
      }
    } catch (e) {
      setIsBountyLoading(false);
    }
  };

  useEffect(() => {
    if (userInfo?.currentPartnerId) {
      getBounty();
    }
  }, [userInfo?.currentPartnerId]);

  return (
    <Default>
      {isBountyLoading ? (
        <LoadingSection />
      ) : (
        <CreateListing
          listing={bounty}
          editable
          isDuplicating
          type={bounty?.type as 'bounty' | 'project' | 'hackathon'}
        />
      )}
    </Default>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query;
  return {
    props: { slug },
  };
};
