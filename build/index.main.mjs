// Automatically generated with Reach 0.1.9 (2fb7c59c)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (2fb7c59c)';
export const _backendVersion = 10;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc1,
    Some: ctc2
    });
  const map0_ctc = ctc3;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      2: []
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  const ctc4 = stdlib.T_Address;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:14:5:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:14:5:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v57, time: v56, didSend: v23, from: v55 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v57, time: v56, didSend: v23, from: v55 } = txn1;
  ;
  const v60 = stdlib.protect(ctc1, await interact.get(), {
    at: './index.rsh:19:38:application',
    fs: ['at ./index.rsh:18:9:application call to [unknown function] (defined at: ./index.rsh:18:13:function exp)'],
    msg: 'get',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v55, v60, v60],
    evt_cnt: 2,
    funcNum: 1,
    lct: v56,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:22:5:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v62, v63], secs: v65, time: v64, didSend: v34, from: v61 } = txn2;
      
      ;
      const v66 = stdlib.addressEq(v55, v61);
      ;
      await stdlib.simMapSet(sim_r, 0, v55, v62);
      const v67 = ['Some', v62];
      const v68 = ['Some', v63];
      const v69 = stdlib.digest(ctc3, [v67]);
      const v71 = stdlib.digest(ctc3, [v68]);
      const v72 = stdlib.digestEq(v69, v71);
      ;
      await stdlib.simMapSet(sim_r, 0, v55, undefined /* Nothing */);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v62, v63], secs: v65, time: v64, didSend: v34, from: v61 } = txn2;
  ;
  const v66 = stdlib.addressEq(v55, v61);
  stdlib.assert(v66, {
    at: './index.rsh:22:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  await stdlib.mapSet(map0, v55, v62);
  const v67 = ['Some', v62];
  const v68 = ['Some', v63];
  const v69 = stdlib.digest(ctc3, [v67]);
  const v71 = stdlib.digest(ctc3, [v68]);
  const v72 = stdlib.digestEq(v69, v71);
  stdlib.assert(v72, {
    at: './index.rsh:24:10:application',
    fs: [],
    msg: 'm[A] is Some(ap)',
    who: 'Alice'
    });
  await stdlib.mapSet(map0, v55, undefined /* Nothing */);
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v75, time: v74, didSend: v44, from: v73 } = txn3;
  ;
  return;
  
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v57, time: v56, didSend: v23, from: v55 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v62, v63], secs: v65, time: v64, didSend: v34, from: v61 } = txn2;
  ;
  const v66 = stdlib.addressEq(v55, v61);
  stdlib.assert(v66, {
    at: './index.rsh:22:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  await stdlib.mapSet(map0, v55, v62);
  const v67 = ['Some', v62];
  const v68 = ['Some', v63];
  const v69 = stdlib.digest(ctc3, [v67]);
  const v71 = stdlib.digest(ctc3, [v68]);
  const v72 = stdlib.digestEq(v69, v71);
  stdlib.assert(v72, {
    at: './index.rsh:24:10:application',
    fs: [],
    msg: 'm[A] is Some(ap)',
    who: 'Bob'
    });
  await stdlib.mapSet(map0, v55, undefined /* Nothing */);
  const txn3 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 2,
    lct: v64,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:28:5:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v75, time: v74, didSend: v44, from: v73 } = txn3;
      
      ;
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v75, time: v74, didSend: v44, from: v73 } = txn3;
  ;
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAEAAECCCYEAQAAAQEJAAAAAAAAAAAAIjUAMRhBAVwpZEkiWzUBJVs1AjEZIxJBAAkxACsoTGZCATI2GgAXSUEAByI1BCM1BgA2GgEXNhoCFzUENhoDNQVJIwxAAKRJJAxAADYkEkQkNAESRDQESSISTDQCEhFEgARBsUBNsLEisgEisggjshAyCbIJMgqyB7MxGYEFEkRCALpIIzQBEkQ0BEkiEkw0AhIRRChkSTUDNf80BSJbNf40BSVbNf2ABMe2CtU0/hZQNP0WULA0/zEAEkQ0/yo0/hZQKExmKjT+FlABKjT9FlABEkQ0/ysoTGYpSCQ1ATIGNQIxGSISREIAUkgiNAESRDQESSISTDQCEhFEgARfDav6sDQASSMINQCBoI0GSwE4CBJEI0sBOBASRDIKSwE4BxJESDEAKEsBVwAgZ0gjNQEyBjUCMRkiEkRCAAApNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISRCI1ASI1AkL/yw==`,
  appClear: `Bg==`,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 1,
  stateSize: 32,
  unsupported: [],
  version: 9,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000bde38038062000bde83398101604081905261002491610187565b600080554360035560408051825181526020808401511515908201527ff6b2f582026eaf8fd1fe583a836da56a1b30b8bd595170ad494773aa9148b06e910160405180910390a1610077341560076100c5565b60408051602080820183523380835260016000819055439055835191820152909101604051602081830303815290604052600290805190602001906100bd9291906100ee565b50505061022a565b816100ea5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546100fa906101ef565b90600052602060002090601f01602090048101928261011c5760008555610162565b82601f1061013557805160ff1916838001178555610162565b82800160010185558215610162579182015b82811115610162578251825591602001919060010190610147565b5061016e929150610172565b5090565b5b8082111561016e5760008155600101610173565b60006040828403121561019957600080fd5b604080519081016001600160401b03811182821017156101c957634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146101e357600080fd5b60208201529392505050565b600181811c9082168061020357607f821691505b6020821081141561022457634e487b7160e01b600052602260045260246000fd5b50919050565b6109a4806200023a6000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780633bc5b7bf1461008357806342ae229d146100b05780637eea518c146100c357806383230757146100d6578063ab53f2c6146100eb57005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b34801561008f57600080fd5b506100a361009e366004610789565b61010e565b60405161007a91906107c3565b61005d6100be366004610808565b61013a565b61005d6100d1366004610820565b6103de565b3480156100e257600080fd5b50600154610070565b3480156100f757600080fd5b5061010061050a565b60405161007a929190610832565b6040805160608101825260008082526020820181905291810191909152610134826105a7565b92915050565b61014a600160005414600b610679565b6101648135158061015d57506001548235145b600c610679565b6000808055600280546101769061088f565b80601f01602080910402602001604051908101604052809291908181526020018280546101a29061088f565b80156101ef5780601f106101c4576101008083540402835291602001916101ef565b820191906000526020600020905b8154815290600101906020018083116101d257829003601f168201915b505050505080602001905181019061020791906108c4565b90506102536040805160a0810182526000918101828152606082018390526080820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b604080518435815260208086013590820152848201358183015290517fd9db09b2d8159e1b10651765d2111016b57a8864385e9ac90399a79856fea14b9181900360600190a16102a534156008610679565b81516102bd906001600160a01b031633146009610679565b81516001600160a01b039081166000908152600460209081526040808320805460ff191660019081179091558651909416835291829020868201359084018190558451849052845183015283810180519390935282518683013590830152915190516103769261032e9291016107c3565b60408051601f198184030181529082905280516020918201208451909261035592016107c3565b6040516020818303038152906040528051906020012060001c14600a610679565b81516001600160a01b03166000908152600460209081526040808320805461ffff19168155600190810184905560028455439055805191820183905201604051602081830303815290604052600290805190602001906103d792919061069e565b5050505050565b6103ee600260005414600e610679565b6104088135158061040157506001548235145b600f610679565b60008080556002805461041a9061088f565b80601f01602080910402602001604051908101604052809291908181526020018280546104469061088f565b80156104935780601f1061046857610100808354040283529160200191610493565b820191906000526020600020905b81548152906001019060200180831161047657829003601f168201915b50505050508060200190518101906104ab919061092c565b90507f82e152e8b1d7e41adffbddbd5b2fe2e130356df9b7ab7d06526a80d7888af3e1826040516104dc9190610949565b60405180910390a16104f03415600d610679565b6000808055600181905561050690600290610722565b5050565b60006060600054600280805461051f9061088f565b80601f016020809104026020016040519081016040528092919081815260200182805461054b9061088f565b80156105985780601f1061056d57610100808354040283529160200191610598565b820191906000526020600020905b81548152906001019060200180831161057b57829003601f168201915b50505050509050915091509091565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156105f3576105f36107ad565b141561066a576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610634576106346107ad565b6001811115610645576106456107ad565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b816105065760405163100960cb60e01b81526004810182905260240160405180910390fd5b8280546106aa9061088f565b90600052602060002090601f0160209004810192826106cc5760008555610712565b82601f106106e557805160ff1916838001178555610712565b82800160010185558215610712579182015b828111156107125782518255916020019190600101906106f7565b5061071e92915061075f565b5090565b50805461072e9061088f565b6000825580601f1061073e575050565b601f01602090049060005260206000209081019061075c919061075f565b50565b5b8082111561071e5760008155600101610760565b6001600160a01b038116811461075c57600080fd5b60006020828403121561079b57600080fd5b81356107a681610774565b9392505050565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106107e857634e487b7160e01b600052602160045260246000fd5b808352506020830151151560208301526040830151604083015292915050565b60006060828403121561081a57600080fd5b50919050565b60006040828403121561081a57600080fd5b82815260006020604081840152835180604085015260005b818110156108665785810183015185820160600152820161084a565b81811115610878576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806108a357607f821691505b6020821081141561081a57634e487b7160e01b600052602260045260246000fd5b6000602082840312156108d657600080fd5b6040516020810181811067ffffffffffffffff8211171561090757634e487b7160e01b600052604160045260246000fd5b604052825161091581610774565b81529392505050565b801515811461075c57600080fd5b60006020828403121561093e57600080fd5b81516107a68161091e565b8135815260408101602083013561095f8161091e565b8015156020840152509291505056fea2646970667358221220952e97a87c0ef11577fd7f868758a2d657638c88fa99cd825fb3caab4b38050e64736f6c634300080c0033`,
  BytecodeLen: 3038,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:16:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:26:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:29:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
