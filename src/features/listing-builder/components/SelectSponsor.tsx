import { Box, Flex, Text } from '@chakra-ui/react';
import axios from 'axios';
import { atom, useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { components } from 'react-select';
import AsyncSelect from 'react-select/async';

import { EarnAvatar } from '@/components/common/EarnAvatar';
import type { PartnerType } from '@/interface/partner';
import { userStore } from '@/store/user';

interface PartnerOptionType extends PartnerType {
  role?: string;
}

interface PartnerOption {
  value: string;
  label: string;
  partner: PartnerOptionType;
}

export const hackathonPartnerAtom = atom<string | null>(null);

export function SelectPartner({ type }: { type?: string }) {
  const { setUserInfo, userInfo } = userStore();
  const [selectedPartner, setSelectedPartner] = useState<PartnerOption | null>(
    null,
  );
  const setHackathonPartner = useSetAtom(hackathonPartnerAtom);

  useEffect(() => {
    if (type !== 'hackathon' && userInfo?.currentPartner?.id) {
      setSelectedPartner({
        value: userInfo?.currentPartner?.id,
        label: userInfo?.currentPartner?.name,
        partner: userInfo?.currentPartner,
      });
    }
  }, [userInfo]);

  const loadPartners = (
    inputValue: string,
    callback: (options: partnerOption[]) => void,
  ) => {
    axios
      .get(`/api/partners/list/`, {
        params: {
          searchString: inputValue,
        },
      })
      .then((response) => {
        const options = [...(response?.data || [])];
        callback(options);
      });
  };

  const updateUser = async (partnerId: string) => {
    try {
      const userUpdatedDetails = await axios.post('/api/user/update/', {
        currentPartnerId: partnerId,
      });
      return userUpdatedDetails.data;
    } catch (error) {
      return userInfo;
    }
  };

  const handleChange = async (option?: any) => {
    if (type === 'hackathon') {
      setHackathonPartner(option.value);
      setSelectedPartner(option);
    } else {
      const newUser = await updateUser(option.value);
      setUserInfo(newUser);
    }
  };

  // eslint-disable-next-line unused-imports/no-unused-vars
  const SingleValue = ({ children, ...props }: any) => {
    const { data, selectProps } = props;

    if (selectProps.menuIsOpen) {
      return <components.SingleValue {...props}></components.SingleValue>;
    }

    return (
      <components.SingleValue {...props}>
        <Flex align="center" py={1}>
          <EarnAvatar
            id={data?.partner?.name}
            avatar={data?.partner?.logo}
            borderRadius="4"
          />
          <Box display={{ base: 'none', md: 'block' }} ml={2}>
            <Text color="brand.slate.800" fontSize="sm">
              {data?.partner?.name}
            </Text>
            <Text color="brand.slate.400" fontSize="xs">
              {data?.partner?.role}
            </Text>
          </Box>
        </Flex>
      </components.SingleValue>
    );
  };

  const Option = (props: any) => {
    const { data } = props;
    return (
      <components.Option {...props}>
        <Flex align="center">
          <EarnAvatar
            id={data?.partner?.name}
            avatar={data?.partner?.logo}
            borderRadius="4"
          />
          <Box display={{ base: 'none', md: 'block' }} ml={2}>
            <Text color="brand.slate.800" fontSize="sm">
              {data?.partner?.name}
            </Text>
            <Text color="brand.slate.400" fontSize="xs">
              {data?.partner?.role}
            </Text>
          </Box>
        </Flex>
      </components.Option>
    );
  };

  return (
    <AsyncSelect
      components={{ SingleValue, Option }}
      value={selectedPartner}
      onChange={(e) => handleChange(e)}
      placeholder="Select Partner"
      loadOptions={loadPartners}
      defaultOptions
      isClearable={false}
      isSearchable={true}
      autoFocus={false}
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          cursor: 'pointer',
          fontSize: '14px',
          borderColor: '#94a3b8',
          '&:hover': {
            borderColor: '#6366F1',
          },
          minHeight: '46px',
        }),
        dropdownIndicator: (base) => ({
          ...base,
          color: '#94a3b8',
          '&:hover': {
            color: '#94a3b8',
          },
        }),
        indicatorSeparator: (base) => ({
          ...base,
          backgroundColor: 'transparent',
          width: 0,
        }),
        option: (base, state) => ({
          ...base,
          backgroundColor: state.isSelected ? '#e2e8f0' : 'white',
          '&:hover': {
            backgroundColor: '#f1f5f9',
          },
        }),
      }}
    />
  );
}
