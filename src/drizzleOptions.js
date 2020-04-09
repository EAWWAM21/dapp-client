import SimpleStorage from './contracts/SimpleStorage.json'
import TutorialToken from './contracts/TutorialToken.json'

const options = {
    //web3
    web3: {
        block: false,
        fallback: {
            type: 'ws',
            url: 'ws://127.0.0.1:9545'
        }
    },
    // 受监控的智能合约
    contracts: [SimpleStorage, TutorialToken],
    events: {
        SimpleStorage: ['StorageSet']
    },
    // 每15000毫秒检查一次账户
    polls: {
        accounts: 15000
    }
}

export default options
