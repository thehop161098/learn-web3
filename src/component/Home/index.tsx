import React from 'react'
import './home.scss'
import { useState } from 'react'
// import networks from 'network.json'
// import { useAppSelector } from 'hooks/reduxHooks'

// interface IUser {
//   account?: string
//   balance?: string
//   connectionId?: string
// }
const Home: React.FC = () => {
  // const web3Reducer = useAppSelector(state => state.web3Reducer)
  // const { web3Instance, ethereum } = web3Reducer

  // const [isConnected, setIsConnected] = useState(false)
  // const [userInfo, setUserInfo] = useState<IUser>({})
  const [showModal, setShowModal] = useState(false)

  // useEffect(() => {
  //   function checkConnectedWallet() {
  //     const userAccountData = localStorage.getItem('userAccount')
  //     if (userAccountData) {
  //       const userData = JSON.parse(userAccountData)
  //       setUserInfo(userData)
  //       setIsConnected(true)
  //     }
  //   }
  //   checkConnectedWallet()
  // }, [])

  // const onConnect = async () => {
  //   try {
  //     await ethereum.request({ method: 'eth_requestAccounts' })
  //     const userAccount = await web3Instance.eth.getAccounts()

  //     if (userAccount.length === 0) {
  //       console.log('Please connect to meta mask')
  //     }

  //     const account = userAccount[0]
  //     const chainId = await web3Instance.eth.getChainId()
  //     let ethBalance = await web3Instance.eth.getBalance(account) // Get wallet balance
  //     ethBalance = web3Instance.utils.fromWei(ethBalance, 'ether') //Convert balance to wei
  //     saveUserInfo(ethBalance, account, chainId)
  //   } catch (err) {
  //     console.log('There was an error fetching your accounts. Make sure your Ethereum client is configured correctly.')
  //   }
  // }

  // const onDisconnect = () => {
  //   window.localStorage.removeItem('userAccount')
  //   setUserInfo({})
  //   setIsConnected(false)
  // }

  // const saveUserInfo = (ethBalance, account, chainId) => {
  //   const userAccount = {
  //     account: account,
  //     balance: ethBalance,
  //     connectionId: chainId
  //   }
  //   window.localStorage.setItem('userAccount', JSON.stringify(userAccount)) //user persisted data
  //   const userAccountData = localStorage.getItem('userAccount')
  //   if (userAccountData) {
  //     const userData = JSON.parse(userAccountData)
  //     setUserInfo(userData)
  //     setIsConnected(true)
  //   }
  // }

  // const onChangeNetWork = network => {
  //   ethereum
  //     .request({
  //       method: 'wallet_addEthereumChain',
  //       params: [
  //         {
  //           chainId: web3Instance.utils.numberToHex(network?.chainId),
  //           chainName: network?.title,
  //           nativeCurrency: network?.nativeCurrency,
  //           rpcUrls: network?.rpc,
  //           blockExplorerUrls: [network?.explorers[0]?.url]
  //         }
  //       ]
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }

  // ethereum.on('accountsChanged', onConnect)
  // ethereum.on('chainChanged', onConnect)

  return (
    <>
      <header>
        <div className='header-wp bg-[#191919]'>
          <div className='container mx-[auto]'>
            <div className='flex justify-between items-center py-5 min-h-[80px]'>
              <div className='wp-menu flex items-center'>
                <div className='logo mr-8'>
                  <div>
                    <a href='#'>
                      <img className='max-w-[115px]' src='assets/img/bot-logo-y.png' alt='logo' />
                    </a>
                  </div>
                </div>
                <ul className='menu'>
                  <li>
                    <a href='#'>Tiers</a>
                  </li>
                  <li>
                    <a href='#'>Projects</a>
                  </li>
                  <li>
                    <a href='#'>INO</a>
                  </li>
                </ul>
              </div>
              <div>
                <button type='button' onClick={() => setShowModal(true)} className='btn rounded-md text-[#0d0f3a] bg-[#fbed13] py-2 px-2 text-md'>
                  Connect Wallet
                </button>
                {/* Show Modal Wallet */}
                {showModal ? (
                  <>
                    <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                      <div className='relative w-auto my-6 mx-auto max-w-3xl w-full'>
                        {/*content*/}
                        <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                          {/*header*/}
                          <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                            <h3 className='text-3xl text-center font-semibold'>Connect Wallet</h3>
                            <button
                              className='p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                              onClick={() => setShowModal(false)}
                            >
                              <span className='bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none'>×</span>
                            </button>
                          </div>
                          {/*body*/}
                          <div className='relative p-6 flex-auto'>
                            <div className='checkbox-wrapper mb-3'>
                              <label>
                                <input type='checkbox' />
                                <span> I read and accept the </span>
                              </label>
                            </div>
                            <div>
                              <b>Choose Network</b>
                            </div>
                          </div>
                          {/*footer*/}
                          <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                            <button
                              className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                              type='button'
                            >
                              Connect
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='opacity-25 fixed inset-0 z-40 bg-black' />
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Home
