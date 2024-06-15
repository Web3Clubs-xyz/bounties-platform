import type { SkillMap } from '@/interface/skills';


export interface MultiSelectOptions {
  value: string;
  label: string;
}

export const skillMap: SkillMap[] = [
  {
    mainskill: 'Growth',
    color: '#16A368',
  },
  {
    mainskill: 'Frontend',
    color: '#3E8BFF',
  },
  {
    mainskill: 'Backend',
    color: '#FF833E',
  },
  {
    mainskill: 'Blockchain',
    color: '#FF3EC9',
  },
  {
    mainskill: 'Design',
    color: '#7E51FF',
  },
  {
    mainskill: 'Content',
    color: '#5EA8BF',
  },
  {
    mainskill: 'Community',
    color: '#F5C723',
  },
  {
    mainskill: 'Mobile',
    color: '#7E51FF',
  },
  {
    mainskill: 'Other',
    color: '#64758B',
  },
];

export const IndustryList: MultiSelectOptions[] = [
  {
    label: 'DAOs',
    value: 'DAOs',
  },
  {
    label: 'DeFi',
    value: 'DeFi',
  },
  {
    label: 'Infrastructure',
    value: 'Infrastructure',
  },
  {
    label: 'DePIN',
    value: 'DePIN',
  },
  {
    value: 'Consumer dApps',
    label: 'Consumer dApps',
  },
  {
    label: 'Wallets and Payments',
    value: 'Wallets and Payments',
  },
  {
    label: 'NFTs',
    value: 'NFTs',
  },
  {
    label: 'Gaming',
    value: 'Gaming',
  },
];

interface Token {
  tokenName: string;
  tokenSymbol: string;
  mintAddress: string;
  icon: string;
  decimals: number;
  coingeckoSymbol: string;
  livecoinwatchSymbol: string;
}

// how to get livecoinwatch Symbol
// open any token in https://www.livecoinwatch.com/
// lets say u open DUST link https://www.livecoinwatch.com/price/DUSTProtocol-_DUST
// the symbol is whatever after `NAME(dash)` including underscore
// so symbol livecoinwatch symbol is `_DUST`

export const tokenList: Token[] = [
  {
    tokenName: 'USDC',
    tokenSymbol: 'USDC',
    mintAddress: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/128x128/3408.png',
    decimals: 6,
    coingeckoSymbol: 'usd-coin',
    livecoinwatchSymbol: 'USDC',
  },
  {
    tokenName: 'Solana (SOL)',
    tokenSymbol: 'SOL',
    mintAddress: 'So11111111111111111111111111111111111111111',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/16116.png',
    decimals: 9,
    coingeckoSymbol: 'solana',
    livecoinwatchSymbol: 'SOL',
  },
  {
    tokenName: 'JUP',
    tokenSymbol: 'JUP',
    mintAddress: 'JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/29210.png',
    decimals: 6,
    coingeckoSymbol: 'jupiter-exchange-solana',
    livecoinwatchSymbol: '_JUP',
  },
  {
    tokenName: 'BONK',
    tokenSymbol: 'BONK',
    mintAddress: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
    icon: 'https://assets.coingecko.com/coins/images/28600/standard/bonk.jpg?1696527587',
    decimals: 5,
    coingeckoSymbol: 'bonk',
    livecoinwatchSymbol: '__BONK',
  },
  {
    tokenName: 'ISC',
    tokenSymbol: 'ISC',
    mintAddress: 'J9BcrQfX4p9D1bvLzRNCbMDv8f44a9LFdeqNE4Yk2WMD',
    icon: 'https://res.cloudinary.com/dgvnuwspr/image/upload/v1683200072/sponsors/International%20Stable%20Currency.png',
    decimals: 6,
    coingeckoSymbol: 'international-stable-currency',
    livecoinwatchSymbol: 'ISC',
  },
  {
    tokenName: 'STEP',
    tokenSymbol: 'STEP',
    mintAddress: 'StepAscQoEioFxxWGnh2sLBDFp9d8rvKz2Yp39iDpyT',
    icon: 'https://assets.coingecko.com/coins/images/14988/small/step.png?1619274762',
    decimals: 9,
    coingeckoSymbol: 'step-finance',
    livecoinwatchSymbol: 'STEP',
  },
  {
    tokenName: 'SAROS',
    tokenSymbol: 'SAROS',
    mintAddress: 'SarosY6Vscao718M4A778z4CGtvcwcGef5M9MEH1LGL',
    icon: 'https://assets.coingecko.com/coins/images/34594/standard/saros-token-logo.png?1705476813',
    decimals: 6,
    coingeckoSymbol: 'saros-finance',
    livecoinwatchSymbol: 'SAROS',
  },
  {
    tokenName: 'Samoyed Coin (SAMO)',
    tokenSymbol: 'SAMO',
    mintAddress: '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU',
    icon: 'https://assets.coingecko.com/coins/images/15051/standard/IXeEj5e.png?1696514710',
    decimals: 9,
    coingeckoSymbol: 'samoyedcoin',
    livecoinwatchSymbol: 'SAMO',
  },
  {
    tokenName: 'SynesisOne (SNS)',
    tokenSymbol: 'SNS',
    mintAddress: 'SNSNkV9zfG5ZKWQs6x4hxvBRV6s8SqMfSGCtECDvdMd',
    icon: 'https://assets.coingecko.com/coins/images/23289/standard/sns.png?1696522507',
    decimals: 9,
    coingeckoSymbol: 'synesis-one',
    livecoinwatchSymbol: 'SNS',
  },
  {
    tokenName: 'Pyth Network (PYTH)',
    tokenSymbol: 'PYTH',
    mintAddress: 'HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/128x128/28177.png',
    decimals: 6,
    coingeckoSymbol: 'pyth-network',
    livecoinwatchSymbol: 'PythNetwork-PYTH',
  },
  {
    tokenName: 'DevWifHat (DWH)',
    tokenSymbol: 'DWH',
    mintAddress: 'DEVwHJ57QMPPArD2CyjboMbdWvjEMjXRigYpaUNDTD7o',
    icon: '/assets/coins/dwh.png',
    decimals: 6,
    coingeckoSymbol: '',
    livecoinwatchSymbol: '',
  },
  {
    tokenName: 'USDT',
    tokenSymbol: 'USDT',
    mintAddress: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
    decimals: 6,
    coingeckoSymbol: 'tether',
    livecoinwatchSymbol: 'USDT',
  },
  {
    tokenName: 'mSOL',
    tokenSymbol: 'mSOL',
    mintAddress: 'mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11461.png',
    decimals: 9,
    coingeckoSymbol: 'msol',
    livecoinwatchSymbol: 'MSOL',
  },
  {
    tokenName: 'UXD Stablecoin (UXD)',
    tokenSymbol: 'UXD',
    mintAddress: '7kbnvuGBxxj8AG9qp8Scn56muWGaRaFqxg1FsRp3PaFT',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/17535.png',
    decimals: 6,
    coingeckoSymbol: 'uxd-stablecoin',
    livecoinwatchSymbol: 'UXD',
  },
  {
    tokenName: 'Raydium (RAY)',
    tokenSymbol: 'RAY',
    mintAddress: '4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8526.png',
    decimals: 6,
    coingeckoSymbol: 'raydium',
    livecoinwatchSymbol: 'RAY',
  },
  {
    tokenName: 'Saber (SBR)',
    tokenSymbol: 'SBR',
    mintAddress: 'Saber2gLauYim4Mvftnrasomsv6NvAuncvMEZwcLpD1',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11181.png',
    decimals: 6,
    coingeckoSymbol: 'saber',
    livecoinwatchSymbol: 'SBR',
  },
  {
    tokenName: 'KIWI',
    tokenSymbol: 'KIWI',
    mintAddress: '66Qq2qS67K4L5xQ3xUTinCyxzdPeZQG1R1ipK8jrY7gc',
    icon: 'https://bafkreibcamcjwo5z3itvybznrdtb3fgeiplfy36izu75jygxkt7jzoq4ju.ipfs.nftstorage.link/',
    decimals: 5,
    coingeckoSymbol: 'kiwi-token-2',
    livecoinwatchSymbol: '______KIWI',
  },
  {
    tokenName: 'EUROe Stablecoin (EUROe)',
    tokenSymbol: 'EUROe',
    mintAddress: '2VhjJ9WxaGC3EZFwJG9BDUs9KxKCAjQY4vgd1qxgYWVg',
    icon: 'https://assets.coingecko.com/coins/images/28913/standard/euroe-200x200-round.png?1696527889',
    decimals: 6,
    coingeckoSymbol: 'euroe-stablecoin',
    livecoinwatchSymbol: 'EUROE',
  },
  {
    tokenName: 'Solend (SLND)',
    tokenSymbol: 'SLND',
    mintAddress: 'SLNDpmoWTVADgEdndyvWzroNL7zSi1dF9PC3xHGtPwp',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/13524.png',
    decimals: 6,
    coingeckoSymbol: 'solend',
    livecoinwatchSymbol: 'SLND',
  },
  {
    tokenName: 'Coin98 (C98)',
    tokenSymbol: 'C98',
    mintAddress: 'C98A4nkJXhpVZNAZdHUA95RpTF3T4whtQubL3YobiUX9',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10903.png',
    decimals: 6,
    coingeckoSymbol: 'coin98',
    livecoinwatchSymbol: 'C98',
  },
  {
    tokenName: 'Serum (SRM)',
    tokenSymbol: 'SRM',
    mintAddress: 'SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6187.png',
    decimals: 6,
    coingeckoSymbol: 'serum',
    livecoinwatchSymbol: 'SRM',
  },
  {
    tokenName: 'DUST Protocol (DUST)',
    tokenSymbol: 'DUST',
    mintAddress: 'DUSTawucrTsGU8hcqRdHDCbuYhCPADMLM2VcCb8VnFnQ',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/18802.png',
    decimals: 9,
    coingeckoSymbol: 'dust-protocol',
    livecoinwatchSymbol: '_DUST',
  },
  {
    tokenName: 'wrapped Solana (wSOL)',
    tokenSymbol: 'wSOL',
    mintAddress: 'So11111111111111111111111111111111111111112',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/16116.png',
    decimals: 9,
    coingeckoSymbol: 'wrapped-solana',
    livecoinwatchSymbol: '',
  },
  {
    tokenName: 'Bonfida (FIDA)',
    tokenSymbol: 'FIDA',
    mintAddress: 'EchesyfXePKdLtoiZSL8pBe8Myagyy8ZRqsACNCFGnvp',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7978.png',
    decimals: 6,
    coingeckoSymbol: 'bonfida',
    livecoinwatchSymbol: 'FIDA',
  },
  {
    tokenName: 'Orca (ORCA)',
    tokenSymbol: 'ORCA',
    mintAddress: 'orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11165.png',
    decimals: 6,
    coingeckoSymbol: 'orca',
    livecoinwatchSymbol: 'ORCA',
  },
  {
    tokenName: 'Helium (HNT)',
    tokenSymbol: 'HNT',
    mintAddress: 'hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5665.png',
    decimals: 8,
    coingeckoSymbol: 'helium',
    livecoinwatchSymbol: 'HNT',
  },
  {
    tokenName: 'Helium Mobile (MOBILE)',
    tokenSymbol: 'MOBILE',
    mintAddress: 'mb1eu7TzEc71KxDpsmsKoucSSuuoGLv1drys1oP2jh6',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/24600.png',
    decimals: 6,
    coingeckoSymbol: 'helium-mobile',
    livecoinwatchSymbol: 'MOBILE',
  },
  {
    tokenName: 'Helium IOT (IOT)',
    tokenSymbol: 'IOT',
    mintAddress: 'iotEVVZLEywoTn1QdwNPddxPWszn3zFhEot3MfL9fns',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/24686.png',
    decimals: 6,
    coingeckoSymbol: 'helium-iot',
    livecoinwatchSymbol: 'IOT',
  },
  {
    tokenName: 'Gary (GARY)',
    tokenSymbol: 'GARY',
    mintAddress: '8c71AvjQeKKeWRe8jtTGG1bJ2WiYXQdbjqFbUfhHgSVk',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/21046.png',
    decimals: 9,
    coingeckoSymbol: 'gary',
    livecoinwatchSymbol: 'GARY',
  },
  {
    tokenName: 'Blaze (BLZE)',
    tokenSymbol: 'BLZE',
    mintAddress: 'BLZEEuZUBVqFhj8adcCFPJvPVCiCyVmh3hkJMrU8KuJA',
    icon: 'https://assets.coingecko.com/coins/images/28392/standard/blze.png?1696527391',
    decimals: 9,
    coingeckoSymbol: 'solblaze',
    livecoinwatchSymbol: '_BLZE',
  },
  {
    tokenName: 'META (META)',
    tokenSymbol: 'META',
    mintAddress: 'METADDFL6wWMWEoKTFJwcThTbUmtarRJZjRpzUvkxhr',
    icon: 'https://avatars.githubusercontent.com/u/107701386?s=200&v=4',
    decimals: 9,
    coingeckoSymbol: 'meta-2',
    livecoinwatchSymbol: '________________________META',
  },
];

export const MainSkills: MultiSelectOptions[] = [
  {
    label: 'Frontend',
    value: 'Frontend',
  },
  {
    label: 'Backend',
    value: 'Backend',
  },
  {
    label: 'Blockchain',
    value: 'Blockchain',
  },
  {
    label: 'Mobile',
    value: 'Mobile',
  },
  {
    label: 'Design',
    value: 'Design',
  },
  {
    label: 'Community',
    value: 'Community',
  },
  {
    label: 'Growth',
    value: 'Growth',
  },
  {
    label: 'Content',
    value: 'Content',
  },
  {
    label: 'Other',
    value: 'Other',
  },
];

export const skillSubSkillMap = {
  Frontend: [
    {
      label: 'React',
      value: 'React',
    },
    {
      label: 'Angular',
      value: 'Angular',
    },
    {
      label: 'Vue',
      value: 'Vue',
    },
    {
      label: 'Redux',
      value: 'Redux',
    },
    {
      label: 'Other',
      value: 'Other',
    },
  ],
  Backend: [
    {
      label: 'Javascript',
      value: 'Javascript',
    },
    {
      label: 'PHP',
      value: 'PHP',
    },
    {
      label: 'Python',
      value: 'Python',
    },
    {
      label: 'Java',
      value: 'Java',
    },
    {
      label: 'C++',
      value: 'C++',
    },
    {
      label: 'C',
      value: 'C',
    },
    {
      label: 'Ruby',
      value: 'Ruby',
    },
    {
      label: 'Go',
      value: 'Go',
    },
    {
      label: 'MySQL',
      value: 'MySQL',
    },
    {
      label: 'Postgres',
      value: 'Postgres',
    },
    {
      label: 'MongoDB',
      value: 'MongoDB',
    },
    {
      label: 'Other',
      value: 'Other',
    },
  ],
  Blockchain: [
    {
      label: 'Rust',
      value: 'Rust',
    },
    {
      label: 'Solidity',
      value: 'Solidity',
    },
    {
      label: 'Move',
      value: 'Move',
    },
    {
      label: 'Other',
      value: 'Other',
    },
  ],
  Mobile: [
    {
      label: 'Android',
      value: 'Android',
    },
    {
      label: 'iOS',
      value: 'iOS',
    },
    {
      label: 'Flutter',
      value: 'Flutter',
    },
    {
      label: 'React Native',
      value: 'React Native',
    },
    {
      label: 'Other',
      value: 'Other',
    },
  ],
  Design: [
    {
      label: 'UI/UX Design',
      value: 'UI/UX Design',
    },
    {
      label: 'Graphic Design',
      value: 'Graphic Design',
    },
    {
      label: 'Illustration',
      value: 'Illustration',
    },
    {
      label: 'Game Design',
      value: 'Game Design',
    },
    {
      label: 'Presentation Design',
      value: 'Presentation Design',
    },
    {
      label: 'Other',
      value: 'Other',
    },
  ],
  Community: [
    {
      label: 'Community Manager',
      value: 'Community Manager',
    },
    {
      label: 'Discord Moderator',
      value: 'Discord Moderator',
    },
    {
      label: 'Other',
      value: 'Other',
    },
  ],
  Growth: [
    {
      label: 'Business Development',
      value: 'Business Development',
    },
    {
      label: 'Digital Marketing',
      value: 'Digital Marketing',
    },
    {
      label: 'Marketing',
      value: 'Marketing',
    },
    {
      label: 'Other',
      value: 'Other',
    },
  ],
  Content: [
    {
      label: 'Research',
      value: 'Research',
    },
    {
      label: 'Video',
      value: 'Video',
    },
    {
      label: 'Writing',
      value: 'Writing',
    },
    {
      label: 'Social Media',
      value: 'Social Media',
    },
    {
      label: 'Other',
      value: 'Other',
    },
  ],
  Other: [
    {
      label: 'Data Analytics',
      value: 'Data Analytics',
    },
    {
      label: 'Operations',
      value: 'Operations',
    },
  ],
};

export const PrizeList = ['first', 'second', 'third', 'fourth', 'fifth'];

export const CountryList: string[] = [
  'India',
  'Afghanistan',
  'Åland Islands',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua & Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Bouvet Island',
  'Brazil',
  'British Indian Ocean Territory',
  'British Virgin Islands',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Carribean Netherlands',
  'Cayman Islands',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'Cocos (Keeling) Islands',
  'Colombia',
  'Comoros',
  'Congo',
  'Cook Islands',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Curaçao',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Falkland Islands (Malvinas)',
  'Faroe Islands',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'French Polynesia',
  'French Southern Territories',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Heard and Mc Donald Islands',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'Indonesia',
  'Iran (Islamic Republic of)',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Ivory Coast',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  "Korea, Democratic People's Republic of",
  'Korea, Republic of',
  'Kosovo',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libyan Arab Jamahiriya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macau',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Micronesia, Federated States of',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'Netherlands Antilles',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Niue',
  'Norfolk Island',
  'North Macedonia',
  'Northern Mariana Islands',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestinian Territories',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Pitcairn',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Reunion',
  'Romania',
  'Russian Federation',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Sint Maarten',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Georgia South Sandwich Islands',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'St. Barthélemy',
  'St. Helena',
  'St. Kitts & Nevis',
  'St. Lucia',
  'St. Martin',
  'St. Pierre and Miquelon',
  'St. Vincent & Grenadines',
  'Sudan',
  'Suriname',
  'Svalbard and Jan Mayen Islands',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syrian Arab Republic',
  'Taiwan',
  'Tajikistan',
  'Tanzania, United Republic of',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tokelau',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks and Caicos Islands',
  'Tuvalu',
  'U.S. Outlying Islands',
  'U.S. Virgin Islands',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City State',
  'Venezuela',
  'Vietnam',
  'Virgin Islands (British)',
  'Virgin Islands (U.S.)',
  'Wallis and Futuna Islands',
  'Western Sahara',
  'Yemen',
  'Yugoslavia',
  'Zaire',
  'Zambia',
  'Zimbabwe',
];


export const CommunityList: string[] = [
 
  'SuperWomenDao',
  'LamportDAO',
  "Grape / Dean's List",
  'DeveloperDAO',
  'Metacamp',
  '10K Designers',
  'Christex Foundation',
  'Other',
];

export const web3Exp = [
  'New to crypto',
  'Occasionally contributing',
  'Contributing regularly',
];

export const workExp = [
  '0 Years',
  '<2 Years',
  '2 to 5 Years',
  '5 to 9 Years',
  '>9 Years',
];
export const workType = [
  'Not looking for Work',
  'Freelance',
  'Fulltime',
  'Internship',
];

export const MAX_COMMENT_SUGGESTIONS = 5;
