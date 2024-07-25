import { Alert, AlertIcon } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsBriefcaseFill } from "react-icons/bs";

import { PartnerStore } from "@/store/partner";
import { userStore } from "@/store/user";
import { Button } from "@/components/ui/button";

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
        const Partners = await axios.post("/api/userPartners");
        if (Partners?.data?.length) {
          setCurrentPartner(Partners?.data[0]?.Partner);
          router.push("/new/listing");
        } else {
          router.push("/new/partner");
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
      {/* <Button
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
      </Button> */}

      <Button  onClick={() => checkPartner()} variant="profile">
        Create your Partner Profile
      </Button>
    </>
  );
}
