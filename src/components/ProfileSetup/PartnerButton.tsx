import { Alert, AlertIcon, Button } from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { BsBriefcaseFill } from 'react-icons/bs';

import { userStore } from '@/store/user';
import { PartnerStore } from '@/store/partner';

export function PartnerButton() {
  const router = useRouter(); 
  const { setCurrentPartner } = PartnerStore();
  const { userInfo } = userStore();
  const [isLoading, setIsLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const checkPartner = async () => {
    if (!userInfo || !userInfo?.id) {
      setShowMessage(true);
    } else {
      setShowMessage(false);
      setIsLoading(true);
      try {
        const partners = await axios.post('/api/userPartners');
        if (partners?.data?.length) {
          setCurrentPartner(partners?.data[0]?.Partner);
          router.push('/new/listing');
        } else {
          router.push('/new/Partner');
        }
      } catch (error) {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      {!!showMessage && (
        <Alert mb={4} status="warning">
          <AlertIcon />
          Please log in to continue!
        </Alert>
      )}
      <Button
        w={'full'}
        h={12}
        color={'white'}
        fontSize={'0.9rem'}
        bg={'#6562FF'}
        _hover={{ bg: '#6562FF' }}
        isLoading={!!isLoading}
        leftIcon={<BsBriefcaseFill />}
        loadingText="Redirecting..."
        onClick={() => checkPartner()}
      >
        Make Your Partner Profile
      </Button>
    </>
  );
}
