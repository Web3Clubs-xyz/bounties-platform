import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { IndustryList } from '@/constants';
import type { PartnerType } from '@/interface/partner';
import { Default } from '@/layouts/Default';
import { Meta } from '@/layouts/Meta';
import { userStore } from '@/store/user';
import { uploadToCloudinary } from '@/utils/upload';
import { ImagePicker } from '@/components/common/ImagePicker';
import SignInCredentials from '@/features/auth/sign_in/signin_credentials';

const CreatePartner = () => {
  const router = useRouter();
  const animatedComponents = makeAnimated();
  const { data: session, status } = useSession();
  console.log("session:", session)
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    getValues,
  } = useForm();
  const [imageUrl, setImageUrl] = useState<string>('');
  const [industries, setIndustries] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [loginStep, setLoginStep] = useState(0);

  const { userInfo } = userStore();

  useEffect(() => {
    if (userInfo?.currentPartnerId && session?.user?.role !== 'GOD') {
      router.push('/dashboard/listings?open=1');
    }
  }, [userInfo?.currentPartnerId, router]);

  const createNewPartner = async (partner: PartnerType) => {
    if (getValues('bio').length > 180) {
      setErrorMessage('Company short bio length exceeded the limit');
      return;
    }
    setIsLoading(true);
    setHasError(false);
    try {
      await axios.post('/api/partners/create', {
        ...partner,
      });
      await axios.post(`/api/email/manual/welcomePartner`);
      router.push('/dashboard/listings?open=1');
    } catch (e: any) {
      if (e?.response?.data?.error?.code === 'P2002') {
        setErrorMessage('Sorry! Partner name or username already exists.');
      }
      setIsLoading(false);
      setHasError(true);
    }
  };

  if (!session && status === 'loading') {
    return <></>;
  }

  return (
    <Default
      meta={
        <Meta
          title="Create Partner | Web3Clubs"
          description="Every Web3Clubs opportunity in one place!"
          canonical="https://bounties.web3clubs.com/new/partner/"
        />
      }
    >
      {!session ? (
        <>
          <Box w={'full'} minH={'60vh'} bg="white">
            <Box
              alignItems="center"
              justifyContent={'center'}
              flexDir={'column'}
              display={'flex'}
              maxW="32rem"
              minH="60vh"
              mx="auto"
            >
              <Text
                pt={4}
                color="brand.slate.900"
                fontSize={18}
                fontWeight={600}
                textAlign={'center'}
              >
                You&apos;re one step away
              </Text>
              <Text
                pb={4}
                color="brand.slate.600"
                fontSize={15}
                fontWeight={400}
                textAlign={'center'}
              >
                from joining Web3Clubs bounties
              </Text>
              <SignInCredentials loginStep={loginStep} setLoginStep={setLoginStep} />
            </Box>
          </Box>
        </>
      ) : (
        <VStack w="full" pt={8} pb={24}>
          <VStack>
            <Heading
              color={'gray.700'}
              fontFamily={'var(--font-sans)'}
              fontSize={'24px'}
              fontWeight={700}
            >
              Welcome to Web3Clubs Bounties
            </Heading>
            <Text
              color={'gray.400'}
              fontFamily={'var(--font-sans)'}
              fontSize={'20px'}
              fontWeight={500}
            >
              {"Let's start with some basic information about your team"}
            </Text>
          </VStack>
          <VStack w={'2xl'} pt={10}>
            <form
              onSubmit={handleSubmit(async (e) => {
                createNewPartner({
                  bio: e.bio,
                  industry: industries ?? '',
                  name: e.partnername,
                  slug: e.slug,
                  logo: imageUrl ?? '',
                  twitter: e.twitterHandle,
                  url: e.partnerurl ?? '',
                });
              })}
              style={{ width: '100%' }}
            >
              <HStack justify={'space-between'} w={'full'}>
                <FormControl isRequired>
                  <FormLabel
                    color={'brand.slate.500'}
                    fontSize={'15px'}
                    fontWeight={600}
                    htmlFor={'partnername'}
                  >
                    Company Name
                  </FormLabel>
                  <Input
                    w={'18rem'}
                    borderColor={'brand.slate.300'}
                    _placeholder={{ color: 'brand.slate.300' }}
                    focusBorderColor="brand.purple"
                    id="partnername"
                    placeholder="Stark Industries"
                    {...register('partnername')}
                  />
                  <FormErrorMessage>
                    {errors.partnername ? (
                      <>{errors.partnername.message}</>
                    ) : (
                      <></>
                    )}
                  </FormErrorMessage>
                </FormControl>
                <FormControl w={'18rem'} isRequired>
                  <FormLabel
                    color={'brand.slate.500'}
                    fontSize={'15px'}
                    fontWeight={600}
                    htmlFor={'slug'}
                  >
                    Company Username
                  </FormLabel>
                  <Input
                    w={'18rem'}
                    borderColor={'brand.slate.300'}
                    _placeholder={{ color: 'brand.slate.300' }}
                    focusBorderColor="brand.purple"
                    id="slug"
                    placeholder="starkindustries"
                    {...register('slug')}
                  />
                  <FormErrorMessage>
                    {errors.slug ? <>{errors.slug.message}</> : <></>}
                  </FormErrorMessage>
                </FormControl>
              </HStack>
              <HStack justify={'space-between'} w={'full'} my={6}>
                <FormControl w={'18rem'}>
                  <FormLabel
                    color={'brand.slate.500'}
                    fontSize={'15px'}
                    fontWeight={600}
                    htmlFor={'partnername'}
                  >
                    Company URL
                  </FormLabel>
                  <Input
                    borderColor={'brand.slate.300'}
                    _placeholder={{ color: 'brand.slate.300' }}
                    focusBorderColor="brand.purple"
                    id="partnerurl"
                    placeholder="https://starkindustries.com"
                    {...register('partnerurl')}
                  />
                  <FormErrorMessage>
                    {errors.partnerurl ? (
                      <>{errors.partnerurl.message}</>
                    ) : (
                      <></>
                    )}
                  </FormErrorMessage>
                </FormControl>
                <FormControl w={'18rem'} isRequired>
                  <FormLabel
                    color={'brand.slate.500'}
                    fontSize={'15px'}
                    fontWeight={600}
                    htmlFor={'twitterHandle'}
                  >
                    Company Twitter
                  </FormLabel>
                  <Input
                    w={'18rem'}
                    borderColor={'brand.slate.300'}
                    _placeholder={{ color: 'brand.slate.300' }}
                    id="twitterHandle"
                    placeholder="@StarkIndustries"
                    {...register('twitterHandle')}
                  />
                  <FormErrorMessage>
                    {errors.twitterHandle ? (
                      <>{errors.twitterHandle.message}</>
                    ) : (
                      <></>
                    )}
                  </FormErrorMessage>
                </FormControl>
              </HStack>
              {
                <VStack align={'start'} gap={2} my={3}>
                  <Heading
                    color={'brand.slate.500'}
                    fontSize={'15px'}
                    fontWeight={600}
                  >
                    Company Logo{' '}
                    <span
                      style={{
                        color: 'red',
                      }}
                    >
                      *
                    </span>
                  </Heading>
                  <HStack gap={5}>
                    <ImagePicker
                      onChange={async (e) => {
                        const a = await uploadToCloudinary(e, 'earn-partner');
                        setImageUrl(a);
                      }}
                    />
                  </HStack>
                </VStack>
              }

              <HStack justify={'space-between'} w={'full'} mt={6}>
                <FormControl w={'full'} isRequired>
                  <FormLabel
                    color={'brand.slate.500'}
                    fontSize={'15px'}
                    fontWeight={600}
                    htmlFor={'industry'}
                  >
                    Industry
                  </FormLabel>

                  <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={IndustryList}
                    styles={{
                      control: (baseStyles) => ({
                        ...baseStyles,
                        backgroundColor: 'brand.slate.500',
                        borderColor: 'brand.slate.300',
                      }),
                    }}
                    onChange={(e) =>
                      setIndustries(e.map((i: any) => i.value).join(', '))
                    }
                  />
                  <FormErrorMessage>
                    {errors.industry ? <>{errors.industry.message}</> : <></>}
                  </FormErrorMessage>
                </FormControl>
              </HStack>
              <Box my={6}>
                <FormControl isRequired>
                  <FormLabel
                    color={'brand.slate.500'}
                    fontSize={'15px'}
                    fontWeight={600}
                    htmlFor={'bio'}
                  >
                    Company Short Bio
                  </FormLabel>
                  <Input
                    w={'full'}
                    borderColor={'brand.slate.300'}
                    _placeholder={{ color: 'brand.slate.300' }}
                    focusBorderColor="brand.purple"
                    id="bio"
                    maxLength={180}
                    {...register('bio')}
                    placeholder="What does your company do?"
                  />
                  <Text
                    color={
                      (watch('bio')?.length || 0) > 160
                        ? 'red'
                        : 'brand.slate.400'
                    }
                    fontSize={'xs'}
                    textAlign="right"
                  >
                    {180 - (watch('bio')?.length || 0)} characters left
                  </Text>
                  <FormErrorMessage>
                    {errors.bio ? <>{errors.bio.message}</> : <></>}
                  </FormErrorMessage>
                </FormControl>
              </Box>
              <Box mt={8}>
                {hasError && (
                  <Text align="center" mb={4} color="red">
                    {errorMessage ||
                      'Sorry! An error occurred while creating your company!'}
                    <br />
                    Please update the details & try again or contact support!
                  </Text>
                )}
                <Button
                  w="full"
                  isDisabled={imageUrl === ''}
                  isLoading={!!isLoading}
                  loadingText="Creating..."
                  size="lg"
                  type="submit"
                  variant="solid"
                >
                  Create Partner
                </Button>
              </Box>
            </form>
          </VStack>
        </VStack>
      )}
    </Default>
  );
};

export default CreatePartner;
