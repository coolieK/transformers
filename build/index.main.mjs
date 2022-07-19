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
      1: [ctc0]
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
export async function Autobot(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Autobot expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Autobot expects to receive an interact object as its second argument.`));}
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
    lct: stdlib.checkedBigNumberify('./index.rsh:20:5:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:20:5:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v53, time: v52, didSend: v23, from: v51 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v53, time: v52, didSend: v23, from: v51 } = txn1;
  ;
  const v56 = stdlib.protect(ctc1, await interact.get(), {
    at: './index.rsh:25:38:application',
    fs: ['at ./index.rsh:24:9:application call to [unknown function] (defined at: ./index.rsh:24:13:function exp)'],
    msg: 'get',
    who: 'Autobot'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v51, v56, v56],
    evt_cnt: 2,
    funcNum: 1,
    lct: v52,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:28:5:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v58, v59], secs: v61, time: v60, didSend: v34, from: v57 } = txn2;
      
      ;
      const v62 = stdlib.addressEq(v51, v57);
      ;
      await stdlib.simMapSet(sim_r, 0, v51, v58);
      const v63 = ['Some', v58];
      const v64 = ['Some', v59];
      const v65 = stdlib.digest(ctc3, [v63]);
      const v67 = stdlib.digest(ctc3, [v64]);
      const v68 = stdlib.digestEq(v65, v67);
      ;
      await stdlib.simMapSet(sim_r, 0, v51, undefined /* Nothing */);
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v58, v59], secs: v61, time: v60, didSend: v34, from: v57 } = txn2;
  ;
  const v62 = stdlib.addressEq(v51, v57);
  stdlib.assert(v62, {
    at: './index.rsh:28:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Autobot'
    });
  await stdlib.mapSet(map0, v51, v58);
  const v63 = ['Some', v58];
  const v64 = ['Some', v59];
  const v65 = stdlib.digest(ctc3, [v63]);
  const v67 = stdlib.digest(ctc3, [v64]);
  const v68 = stdlib.digestEq(v65, v67);
  stdlib.assert(v68, {
    at: './index.rsh:30:10:application',
    fs: [],
    msg: 'm[A] is Some(ap)',
    who: 'Autobot'
    });
  await stdlib.mapSet(map0, v51, undefined /* Nothing */);
  return;
  
  
  
  
  };
export async function Decepticon(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Decepticon expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Decepticon expects to receive an interact object as its second argument.`));}
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
  const {data: [], secs: v53, time: v52, didSend: v23, from: v51 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v58, v59], secs: v61, time: v60, didSend: v34, from: v57 } = txn2;
  ;
  const v62 = stdlib.addressEq(v51, v57);
  stdlib.assert(v62, {
    at: './index.rsh:28:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Decepticon'
    });
  await stdlib.mapSet(map0, v51, v58);
  const v63 = ['Some', v58];
  const v64 = ['Some', v59];
  const v65 = stdlib.digest(ctc3, [v63]);
  const v67 = stdlib.digest(ctc3, [v64]);
  const v68 = stdlib.digestEq(v65, v67);
  stdlib.assert(v68, {
    at: './index.rsh:30:10:application',
    fs: [],
    msg: 'm[A] is Some(ap)',
    who: 'Decepticon'
    });
  await stdlib.mapSet(map0, v51, undefined /* Nothing */);
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiADAAEIJgQBAAEBAAkAAAAAAAAAAAAiNQAxGEEBLSpkSSJbNQEkWzUCMRkjEkEACTEAKyhMZkIBAzYaABdJQQAHIjUEIzUGADYaARc2GgIXNQQ2GgM1BUkjDEAAdSMSRCM0ARJENARJIhJMNAISEUQoZEk1AzX/NAUiWzX+NAUkWzX9gATHtgrVNP4WUDT9FlCwNP8xABJENP8pNP4WUChMZik0/hZQASk0/RZQARJENP8rKExmsSKyASKyCCOyEDIJsgkyCrIHszEZgQUSREIAUkgiNAESRDQESSISTDQCEhFEgARfDav6sDQASSMINQCBoI0GSwE4CBJEI0sBOBASRDIKSwE4BxJESDEAKEsBVwAgZ0gjNQEyBjUCMRkiEkRCAAAqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISRCI1ASI1AkL/yw==`,
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
                "name": "v58",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v59",
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
                "name": "v58",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v59",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405161098c38038061098c83398101604081905261002291610185565b600080554360035560408051825181526020808401511515908201527ff6b2f582026eaf8fd1fe583a836da56a1b30b8bd595170ad494773aa9148b06e910160405180910390a1610075341560076100c3565b60408051602080820183523380835260016000819055439055835191820152909101604051602081830303815290604052600290805190602001906100bb9291906100ec565b505050610228565b816100e85760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546100f8906101ed565b90600052602060002090601f01602090048101928261011a5760008555610160565b82601f1061013357805160ff1916838001178555610160565b82800160010185558215610160579182015b82811115610160578251825591602001919060010190610145565b5061016c929150610170565b5090565b5b8082111561016c5760008155600101610171565b60006040828403121561019757600080fd5b604080519081016001600160401b03811182821017156101c757634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146101e157600080fd5b60208201529392505050565b600181811c9082168061020157607f821691505b6020821081141561022257634e487b7160e01b600052602260045260246000fd5b50919050565b610755806102376000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780633bc5b7bf1461007857806342ae229d146100a557806383230757146100b8578063ab53f2c6146100cd57005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b34801561008457600080fd5b5061009861009336600461059c565b6100f0565b60405161006f91906105d6565b6100526100b336600461061b565b61011c565b3480156100c457600080fd5b50600154610065565b3480156100d957600080fd5b506100e2610399565b60405161006f929190610633565b604080516060810182526000808252602082018190529181019190915261011682610436565b92915050565b61012c600160005414600b610508565b6101468135158061013f57506001548235145b600c610508565b60008080556002805461015890610690565b80601f016020809104026020016040519081016040528092919081815260200182805461018490610690565b80156101d15780601f106101a6576101008083540402835291602001916101d1565b820191906000526020600020905b8154815290600101906020018083116101b457829003601f168201915b50505050508060200190518101906101e991906106c5565b90506102356040805160a0810182526000918101828152606082018390526080820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b604080518435815260208086013590820152848201358183015290517fd9db09b2d8159e1b10651765d2111016b57a8864385e9ac90399a79856fea14b9181900360600190a161028734156008610508565b815161029f906001600160a01b031633146009610508565b81516001600160a01b039081166000908152600460209081526040808320805460ff19166001908117909155865190941683529182902086820135908401819055845184905284518301528381018051939093528251868301359083015291519051610358926103109291016105d6565b60408051601f198184030181529082905280516020918201208451909261033792016105d6565b6040516020818303038152906040528051906020012060001c14600a610508565b81516001600160a01b03166000908152600460205260408120805461ffff19168155600190810182905581805581905561039490600290610531565b505050565b6000606060005460028080546103ae90610690565b80601f01602080910402602001604051908101604052809291908181526020018280546103da90610690565b80156104275780601f106103fc57610100808354040283529160200191610427565b820191906000526020600020905b81548152906001019060200180831161040a57829003601f168201915b50505050509050915091509091565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610482576104826105c0565b14156104f9576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156104c3576104c36105c0565b60018111156104d4576104d46105c0565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b8161052d5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b50805461053d90610690565b6000825580601f1061054d575050565b601f01602090049060005260206000209081019061056b919061056e565b50565b5b80821115610583576000815560010161056f565b5090565b6001600160a01b038116811461056b57600080fd5b6000602082840312156105ae57600080fd5b81356105b981610587565b9392505050565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106105fb57634e487b7160e01b600052602160045260246000fd5b808352506020830151151560208301526040830151604083015292915050565b60006060828403121561062d57600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156106675785810183015185820160600152820161064b565b81811115610679576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806106a457607f821691505b6020821081141561062d57634e487b7160e01b600052602260045260246000fd5b6000602082840312156106d757600080fd5b6040516020810181811067ffffffffffffffff8211171561070857634e487b7160e01b600052604160045260246000fd5b604052825161071681610587565b8152939250505056fea264697066735822122017439258159b69cccb2e786ed317b4b72af10248afe695f8493e504df674641a64736f6c634300080c0033`,
  BytecodeLen: 2444,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:22:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:32:11:after expr stmt semicolon',
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
  "Autobot": Autobot,
  "Decepticon": Decepticon
  };
export const _APIs = {
  };
