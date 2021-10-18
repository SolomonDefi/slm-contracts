/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SlmToken, SlmTokenInterface } from "../SlmToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "canTrade",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "lockExceptions",
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
    inputs: [],
    name: "locked",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "bool",
        name: "tradeAllowed",
        type: "bool",
      },
    ],
    name: "setTradeException",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
  {
    inputs: [],
    name: "unlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526001600660016101000a81548160ff0219169083151502179055503480156200002c57600080fd5b5060405162002ded38038062002ded83398181016040528101906200005291906200053c565b8383336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3816004908051906020019062000127929190620003ec565b50806005908051906020019062000140929190620003ec565b506012600660006101000a81548160ff021916908360ff16021790555050506001600760003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550620001c98183620001d360201b60201c565b505050506200096b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000246576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200023d906200065b565b60405180910390fd5b6200025a600083836200038460201b60201c565b62000276816003546200038960201b62000e221790919060201c565b600381905550620002d581600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546200038960201b62000e221790919060201c565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200037891906200067d565b60405180910390a35050565b505050565b60008082846200039a91906200070a565b905083811015620003e2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003d99062000639565b60405180910390fd5b8091505092915050565b828054620003fa90620007db565b90600052602060002090601f0160209004810192826200041e57600085556200046a565b82601f106200043957805160ff19168380011785556200046a565b828001600101855582156200046a579182015b82811115620004695782518255916020019190600101906200044c565b5b5090506200047991906200047d565b5090565b5b80821115620004985760008160009055506001016200047e565b5090565b6000620004b3620004ad84620006c3565b6200069a565b905082815260208101848484011115620004cc57600080fd5b620004d9848285620007a5565b509392505050565b600081519050620004f28162000937565b92915050565b600082601f8301126200050a57600080fd5b81516200051c8482602086016200049c565b91505092915050565b600081519050620005368162000951565b92915050565b600080600080608085870312156200055357600080fd5b600085015167ffffffffffffffff8111156200056e57600080fd5b6200057c87828801620004f8565b945050602085015167ffffffffffffffff8111156200059a57600080fd5b620005a887828801620004f8565b9350506040620005bb8782880162000525565b9250506060620005ce87828801620004e1565b91505092959194509250565b6000620005e9601b83620006f9565b9150620005f682620008e5565b602082019050919050565b600062000610601f83620006f9565b91506200061d826200090e565b602082019050919050565b62000633816200079b565b82525050565b600060208201905081810360008301526200065481620005da565b9050919050565b60006020820190508181036000830152620006768162000601565b9050919050565b600060208201905062000694600083018462000628565b92915050565b6000620006a6620006b9565b9050620006b4828262000811565b919050565b6000604051905090565b600067ffffffffffffffff821115620006e157620006e0620008a5565b5b620006ec82620008d4565b9050602081019050919050565b600082825260208201905092915050565b600062000717826200079b565b915062000724836200079b565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156200075c576200075b62000847565b5b828201905092915050565b600062000774826200077b565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015620007c5578082015181840152602081019050620007a8565b83811115620007d5576000848401525b50505050565b60006002820490506001821680620007f457607f821691505b602082108114156200080b576200080a62000876565b5b50919050565b6200081c82620008d4565b810181811067ffffffffffffffff821117156200083e576200083d620008a5565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f536166654d6174683a206164646974696f6e206f766572666c6f770000000000600082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b620009428162000767565b81146200094e57600080fd5b50565b6200095c816200079b565b81146200096857600080fd5b50565b612472806200097b6000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c806370a08231116100b8578063a9059cbb1161007c578063a9059cbb14610362578063bccb440814610392578063cf309012146103ae578063dd62ed3e146103cc578063f2fde38b146103fc578063f83d08ba1461041857610137565b806370a08231146102be57806379cc6790146102ee57806395d89b411461030a578063a457c2d714610328578063a69df4b51461035857610137565b8063313ce567116100ff578063313ce56714610208578063395093511461022657806340c10f191461025657806342966c6814610272578063559f05dc1461028e57610137565b806306fdde031461013c578063095ea7b31461015a57806318160ddd1461018a5780631f11b177146101a857806323b872dd146101d8575b600080fd5b610144610422565b6040516101519190611d10565b60405180910390f35b610174600480360381019061016f9190611aa9565b6104b4565b6040516101819190611cf5565b60405180910390f35b610192610510565b60405161019f9190611e92565b60405180910390f35b6101c260048036038101906101bd91906119b9565b61051a565b6040516101cf9190611cf5565b60405180910390f35b6101f260048036038101906101ed9190611a1e565b61053a565b6040516101ff9190611cf5565b60405180910390f35b610210610598565b60405161021d9190611ead565b60405180910390f35b610240600480360381019061023b9190611aa9565b6105af565b60405161024d9190611cf5565b60405180910390f35b610270600480360381019061026b9190611aa9565b61060b565b005b61028c60048036038101906102879190611ae5565b6106a7565b005b6102a860048036038101906102a391906119b9565b6106bb565b6040516102b59190611cf5565b60405180910390f35b6102d860048036038101906102d391906119b9565b610729565b6040516102e59190611e92565b60405180910390f35b61030860048036038101906103039190611aa9565b610772565b005b6103126107d4565b60405161031f9190611d10565b60405180910390f35b610342600480360381019061033d9190611aa9565b610866565b60405161034f9190611cf5565b60405180910390f35b6103606108c2565b005b61037c60048036038101906103779190611aa9565b61096d565b6040516103899190611cf5565b60405180910390f35b6103ac60048036038101906103a79190611a6d565b6109c9565b005b6103b6610b22565b6040516103c39190611cf5565b60405180910390f35b6103e660048036038101906103e191906119e2565b610b35565b6040516103f39190611e92565b60405180910390f35b610416600480360381019061041191906119b9565b610bbc565b005b610420610d77565b005b60606004805461043190611ff6565b80601f016020809104026020016040519081016040528092919081815260200182805461045d90611ff6565b80156104aa5780601f1061047f576101008083540402835291602001916104aa565b820191906000526020600020905b81548152906001019060200180831161048d57829003601f168201915b5050505050905090565b60006104bf336106bb565b6104fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f590611db2565b60405180910390fd5b6105088383610e80565b905092915050565b6000600354905090565b60076020528060005260406000206000915054906101000a900460ff1681565b6000610545336106bb565b610584576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057b90611db2565b60405180910390fd5b61058f848484610e9e565b90509392505050565b6000600660009054906101000a900460ff16905090565b60006105ba336106bb565b6105f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f090611db2565b60405180910390fd5b6106038383610f77565b905092915050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610699576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069090611dd2565b60405180910390fd5b6106a3828261102a565b5050565b6106b86106b26111c0565b826111c8565b50565b6000600660019054906101000a900460ff1615806107225750600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b9050919050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60006107b1826040518060600160405280602481526020016123f4602491396107a28661079d6111c0565b610b35565b6113789092919063ffffffff16565b90506107c5836107bf6111c0565b836113dc565b6107cf83836111c8565b505050565b6060600580546107e390611ff6565b80601f016020809104026020016040519081016040528092919081815260200182805461080f90611ff6565b801561085c5780601f106108315761010080835404028352916020019161085c565b820191906000526020600020905b81548152906001019060200180831161083f57829003601f168201915b5050505050905090565b6000610871336106bb565b6108b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a790611db2565b60405180910390fd5b6108ba83836115a7565b905092915050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610950576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094790611dd2565b60405180910390fd5b6000600660016101000a81548160ff021916908315150217905550565b6000610978336106bb565b6109b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ae90611db2565b60405180910390fd5b6109c18383611674565b905092915050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a57576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4e90611dd2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ac7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610abe90611e32565b60405180910390fd5b80600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600660019054906101000a900460ff1681565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610c4a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c4190611dd2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610cba576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cb190611d32565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610e05576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dfc90611dd2565b60405180910390fd5b6001600660016101000a81548160ff021916908315150217905550565b6000808284610e319190611ee4565b905083811015610e76576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e6d90611d92565b60405180910390fd5b8091505092915050565b6000610e94610e8d6111c0565b84846113dc565b6001905092915050565b6000610eab848484611692565b610f6c84610eb76111c0565b610f67856040518060600160405280602881526020016123cc60289139600260008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610f1d6111c0565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546113789092919063ffffffff16565b6113dc565b600190509392505050565b6000611020610f846111c0565b8461101b8560026000610f956111c0565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610e2290919063ffffffff16565b6113dc565b6001905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561109a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161109190611e72565b60405180910390fd5b6110a66000838361192b565b6110bb81600354610e2290919063ffffffff16565b60038190555061111381600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610e2290919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516111b49190611e92565b60405180910390a35050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611238576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161122f90611df2565b60405180910390fd5b6112448260008361192b565b6112b08160405180606001604052806022815260200161238460229139600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546113789092919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506113088160035461193090919063ffffffff16565b600381905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161136c9190611e92565b60405180910390a35050565b60008383111582906113c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113b79190611d10565b60405180910390fd5b50600083856113cf9190611f3a565b9050809150509392505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561144c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161144390611e52565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156114bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114b390611d72565b60405180910390fd5b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161159a9190611e92565b60405180910390a3505050565b600061166a6115b46111c0565b846116658560405180606001604052806025815260200161241860259139600260006115de6111c0565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546113789092919063ffffffff16565b6113dc565b6001905092915050565b60006116886116816111c0565b8484611692565b6001905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611702576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116f990611e12565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611772576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161176990611d52565b60405180910390fd5b61177d83838361192b565b6117e9816040518060600160405280602681526020016123a660269139600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546113789092919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061187e81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610e2290919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161191e9190611e92565b60405180910390a3505050565b505050565b600061197283836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611378565b905092915050565b6000813590506119898161233e565b92915050565b60008135905061199e81612355565b92915050565b6000813590506119b38161236c565b92915050565b6000602082840312156119cb57600080fd5b60006119d98482850161197a565b91505092915050565b600080604083850312156119f557600080fd5b6000611a038582860161197a565b9250506020611a148582860161197a565b9150509250929050565b600080600060608486031215611a3357600080fd5b6000611a418682870161197a565b9350506020611a528682870161197a565b9250506040611a63868287016119a4565b9150509250925092565b60008060408385031215611a8057600080fd5b6000611a8e8582860161197a565b9250506020611a9f8582860161198f565b9150509250929050565b60008060408385031215611abc57600080fd5b6000611aca8582860161197a565b9250506020611adb858286016119a4565b9150509250929050565b600060208284031215611af757600080fd5b6000611b05848285016119a4565b91505092915050565b611b1781611f80565b82525050565b6000611b2882611ec8565b611b328185611ed3565b9350611b42818560208601611fc3565b611b4b81612086565b840191505092915050565b6000611b63602683611ed3565b9150611b6e82612097565b604082019050919050565b6000611b86602383611ed3565b9150611b91826120e6565b604082019050919050565b6000611ba9602283611ed3565b9150611bb482612135565b604082019050919050565b6000611bcc601b83611ed3565b9150611bd782612184565b602082019050919050565b6000611bef601583611ed3565b9150611bfa826121ad565b602082019050919050565b6000611c12602083611ed3565b9150611c1d826121d6565b602082019050919050565b6000611c35602183611ed3565b9150611c40826121ff565b604082019050919050565b6000611c58602583611ed3565b9150611c638261224e565b604082019050919050565b6000611c7b601e83611ed3565b9150611c868261229d565b602082019050919050565b6000611c9e602483611ed3565b9150611ca9826122c6565b604082019050919050565b6000611cc1601f83611ed3565b9150611ccc82612315565b602082019050919050565b611ce081611fac565b82525050565b611cef81611fb6565b82525050565b6000602082019050611d0a6000830184611b0e565b92915050565b60006020820190508181036000830152611d2a8184611b1d565b905092915050565b60006020820190508181036000830152611d4b81611b56565b9050919050565b60006020820190508181036000830152611d6b81611b79565b9050919050565b60006020820190508181036000830152611d8b81611b9c565b9050919050565b60006020820190508181036000830152611dab81611bbf565b9050919050565b60006020820190508181036000830152611dcb81611be2565b9050919050565b60006020820190508181036000830152611deb81611c05565b9050919050565b60006020820190508181036000830152611e0b81611c28565b9050919050565b60006020820190508181036000830152611e2b81611c4b565b9050919050565b60006020820190508181036000830152611e4b81611c6e565b9050919050565b60006020820190508181036000830152611e6b81611c91565b9050919050565b60006020820190508181036000830152611e8b81611cb4565b9050919050565b6000602082019050611ea76000830184611cd7565b92915050565b6000602082019050611ec26000830184611ce6565b92915050565b600081519050919050565b600082825260208201905092915050565b6000611eef82611fac565b9150611efa83611fac565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611f2f57611f2e612028565b5b828201905092915050565b6000611f4582611fac565b9150611f5083611fac565b925082821015611f6357611f62612028565b5b828203905092915050565b6000611f7982611f8c565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611fe1578082015181840152602081019050611fc6565b83811115611ff0576000848401525b50505050565b6000600282049050600182168061200e57607f821691505b6020821081141561202257612021612057565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f446f6e27742061737369676e206f776e65727368697020746f206e756c6c206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f536166654d6174683a206164646974696f6e206f766572666c6f770000000000600082015250565b7f4c6f636b61626c65546f6b656e3a204c6f636b65640000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f4c6f636b61626c65546f6b656e3a20496e76616c696420616464726573730000600082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b61234781611f6e565b811461235257600080fd5b50565b61235e81611f80565b811461236957600080fd5b50565b61237581611fac565b811461238057600080fd5b5056fe45524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e20616d6f756e74206578636565647320616c6c6f77616e636545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212206d028320319bca1d17e07221f9467b5308216033a379b4ab5e56a29f98b31eea64736f6c63430008040033";

export class SlmToken__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    name: string,
    symbol: string,
    initialSupply: BigNumberish,
    owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SlmToken> {
    return super.deploy(
      name,
      symbol,
      initialSupply,
      owner,
      overrides || {}
    ) as Promise<SlmToken>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    initialSupply: BigNumberish,
    owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      initialSupply,
      owner,
      overrides || {}
    );
  }
  attach(address: string): SlmToken {
    return super.attach(address) as SlmToken;
  }
  connect(signer: Signer): SlmToken__factory {
    return super.connect(signer) as SlmToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SlmTokenInterface {
    return new utils.Interface(_abi) as SlmTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SlmToken {
    return new Contract(address, _abi, signerOrProvider) as SlmToken;
  }
}