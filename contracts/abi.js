stdReferenceProxyABI = [
  {
    inputs: [
      {
        internalType: "contract IStdReference",
        name: "_ref",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "base",
        type: "string",
      },
      {
        internalType: "string",
        name: "quote",
        type: "string",
      },
    ],
    name: "getReferenceData",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "rate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastUpdatedBase",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastUpdatedQuote",
            type: "uint256",
          },
        ],
        internalType: "struct IStdReference.ReferenceData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "_bases",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "_quotes",
        type: "string[]",
      },
    ],
    name: "getReferenceDataBulk",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "rate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastUpdatedBase",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastUpdatedQuote",
            type: "uint256",
          },
        ],
        internalType: "struct IStdReference.ReferenceData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ref",
    outputs: [
      {
        internalType: "contract IStdReference",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IStdReference",
        name: "_ref",
        type: "address",
      },
    ],
    name: "setRef",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

stdReferenceBasicABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "rate",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "resolveTime",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "requestID",
        type: "uint64",
      },
    ],
    name: "RefDataUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RELAYER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "base",
        type: "string",
      },
      {
        internalType: "string",
        name: "quote",
        type: "string",
      },
    ],
    name: "getReferenceData",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "rate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastUpdatedBase",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastUpdatedQuote",
            type: "uint256",
          },
        ],
        internalType: "struct IStdReference.ReferenceData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "_bases",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "_quotes",
        type: "string[]",
      },
    ],
    name: "getReferenceDataBulk",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "rate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastUpdatedBase",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastUpdatedQuote",
            type: "uint256",
          },
        ],
        internalType: "struct IStdReference.ReferenceData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "refs",
    outputs: [
      {
        internalType: "uint64",
        name: "rate",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "resolveTime",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "requestID",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "symbols",
        type: "string[]",
      },
      {
        internalType: "uint64[]",
        name: "rates",
        type: "uint64[]",
      },
      {
        internalType: "uint64[]",
        name: "resolveTimes",
        type: "uint64[]",
      },
      {
        internalType: "uint64[]",
        name: "requestIDs",
        type: "uint64[]",
      },
    ],
    name: "relay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

module.exports = { stdReferenceProxyABI, stdReferenceBasicABI };
