'use client';

import { faAngleDown, faExchange, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from 'react';
import { WalletListModal } from '../connectModal/WalletListModal';
import { useDisclosure } from '@nextui-org/react';
import Image from 'next/image';
import calculatorGreen from '@/assets/images/swap/calculator-green.png';
import plusGreen from '@/assets/images/swap/plus-green.png';
import exchangeGreen from '@/assets/images/swap/exchange-green.png';
import checkGreen from '@/assets/images/swap/check-green.png';
import lockerGreen from '@/assets/images/swap/locker-green.png';
import waitingGreen from '@/assets/images/swap/waiting-green.png';
import lockOpenGreen from '@/assets/images/swap/lock-open-green.png';
import congratesGreen from '@/assets/images/swap/congrats-green.png';

const walletList = [
  { id: 1, icon: require('@/assets/images/wallet_list/bera.png')?.default, name: 'bera', walletAddress: '0xafb8...e4df6', balance: 41.75, equivalentValue: -0.2946 },
  { id: 2, icon: require('@/assets/images/wallet_list/honey.png')?.default, name: 'honey', walletAddress: '0xafb8...e4df6', balance: 41.75, equivalentValue: -0.2946 },
  { id: 3, icon: require('@/assets/images/wallet_list/bgt.png')?.default, name: 'bgt', walletAddress: '0xafb8...e4df6', balance: 41.75, equivalentValue: -0.2946 },
  { id: 4, icon: require('@/assets/images/wallet_list/moni.png')?.default, name: 'moni', walletAddress: '0xafb8...e4df6', balance: 41.75, equivalentValue: -0.2946 },
  { id: 5, icon: require('@/assets/images/wallet_list/usdc.png')?.default, name: 'usdc', walletAddress: '0xafb8...e4df6', balance: 41.75, equivalentValue: -0.2946 },
  { id: 6, icon: require('@/assets/images/wallet_list/wbtc.png')?.default, name: 'wbtc', walletAddress: '0xafb8...e4df6', balance: 41.75, equivalentValue: -0.2946 },
  { id: 7, icon: require('@/assets/images/wallet_list/eth.png')?.default, name: 'eth', walletAddress: '0xafb8...e4df6', balance: 41.75, equivalentValue: -0.2946 },
  { id: 8, icon: require('@/assets/images/wallet_list/kdk.png')?.default, name: 'kdk', walletAddress: '0xafb8...e4df6', balance: 41.75, equivalentValue: -0.2946 },
]

export default function Page() {
  const [step, setStep] = useState(0);
  const [selectedSwap, setSelectedSwap]: any = useState({});
  const [selectedFor, setSelectedFor]: any = useState({});
  const [swapAmount, setSwapAmount] = useState(0.0);
  const [forAmount, setForAmount] = useState(0.0);
  const { isOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    const selectedSwap = walletList.filter((item) => item.name === 'moni')[0];
    const selectedFor = walletList.filter((item) => item.name === 'bera')[0];
    if (selectedSwap) {
      setSelectedSwap(selectedSwap);
    }
    if (selectedFor) {
      setSelectedFor(selectedFor);
    }
  }, []);

  const handleChange = (e: any) => {
    setSwapAmount(e.target.value);
    if (e.target.value !== '' || e.target.value !== 0) {
      setForAmount(0.292806301747147565)
      setStep(1);
    } else {
      setForAmount(0.0)
    }
  }

  const refreshSwapAmount = () => {
    console.log("refresh swap amount");
    setStep(0);
    setSwapAmount(0)
  }

  const selectAll = (e: any) => {
    e.target.select();
  }

  const allowSwap = () => {
    setStep(2);
  }

  const onSubmit = () => {
    setStep(3);
  }

  return (
    <div className="container m-auto w-[330px] md:w-[1155px] py-3 md:py-5">
      <div className="image-pc w-full bg-[length:317px_417px] md:bg-[length:396px_522px] bg-bottom bg-no-repeat bg-bottom py-20">
        <div className="block md:flex md:justify-between gap-10">
          <div className='w-full md:w-7/12'>
            <div className="rounded-[10px] p-7 md:p-10 bg-white dark:bg-darkFooter">
              <div>
                <div className="w-full flex justify-between">
                  <div className="font-normal text-black1 dark:text-white text-sm md:text-lg">Swap</div>
                  <div className="font-normal text-black1 dark:text-white text-xs md:text-base flex items-end cursor-pointer hover:underline" onClick={() => refreshSwapAmount()}>
                    Available 0.0 <span className='uppercase'>{selectedSwap?.name}</span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-7 md:grid-cols-3">
                  <div className="col-span-3 md:col-span-1 rounded-l-lg h-11 md:h-14 bg-white dark:bg-transparent border border-inputBorder pl-[10px] pr-4 md:pl-4 md:pr-6 border-r-0 flex items-center justify-between cursor-pointer"
                    onClick={onOpenChange}>
                    <div className='flex items-center'>
                      <img alt={selectedSwap?.name} src={selectedSwap?.icon?.src} className='w-full h-5 md:h-6 pr-[10px]' />
                      <span className='uppercase font-medium text-xs md:text-base text-black1 dark:text-white'>{selectedSwap?.name}</span>
                    </div>
                    <FontAwesomeIcon icon={faAngleDown} className="text-xl text-arrow" />
                  </div>
                  <input className="col-span-4 md:col-span-2 rounded-r-lg h-11 md:h-14 bg-white dark:bg-transparent border border-inputBorder px-4 md:px-6 
                                  focus:outline-none focus:border-l-[#bebebe] focus:border-[#F59855]
                                  font-medium text-xs md:text-base text-black1 dark:text-white"
                    type="text" value={swapAmount} onChange={(e) => handleChange(e)} onFocus={(e) => selectAll(e)} />
                </div>
              </div>

              <div className="mt-16 md:mt-[70px] w-full h-[1px] bg-divider relative">
                <button className="bg-exchange-button text-white rounded-[10px] w-[30px] h-[30px] absolute left-1/2 top-[-15px] hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-slate-800">
                  <FontAwesomeIcon icon={faExchangeAlt} className="text-base text-white rotate-90" />
                </button>
              </div>

              <div>
                <div className="pt-[50px] w-full flex justify-between">
                  <div className="font-normal text-black1 dark:text-white text-sm md:text-lg">For</div>
                  <div className="font-normal text-black1 dark:text-white text-xs md:text-base flex items-end">
                    Available 0.0 <span className='uppercase'>{selectedFor?.name}</span>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-7 md:grid-cols-3">
                  <div className="col-span-3 md:col-span-1 rounded-l-lg h-11 md:h-14 bg-white dark:bg-transparent border border-inputBorder 
                                pl-[10px] pr-4 md:pl-4 md:pr-6 border-r-0 flex items-center justify-between cursor-pointer">
                    <div className='flex items-center'>
                      <img alt={selectedFor?.name} src={selectedFor?.icon?.src} className='w-full h-5 md:h-6 pr-[10px]' />
                      <span className='uppercase font-medium text-xs md:text-base text-black1 dark:text-white'>{selectedFor?.name}</span>
                    </div>
                    <FontAwesomeIcon icon={faAngleDown} className="text-xl text-arrow" />
                  </div>
                  <input className="col-span-4 md:col-span-2 rounded-r-lg h-11 md:h-14 bg-white dark:bg-transparent border border-inputBorder px-4 md:px-6 
                                  focus:outline-none focus:border-l-[#bebebe] focus:border-[#F59855]
                                  font-medium text-xs md:text-base text-black1 dark:text-white"
                    type="text" value={forAmount} disabled />
                </div>

              </div>
            </div>

            {/* Start Berachain */}
            <div className={'w-full flex mt-4 ' + (step !== 0 ? 'block' : 'hidden')}>
              <div className='w-10 bg-right-panel dark:bg-bookmark flex justify-center items-center rounded-s-lg'>
                <div className='uppercase -rotate-90 text-primary text-xs md:text-base'>Berachain</div>
              </div>
              <div className='w-full bg-white dark:bg-darkFooter pt-7 pb-4 px-4 md:py-10 md:pl-5 md:pr-8 rounded-e-lg'>
                <div className='text-xs md:text-base font-normal text-content3 dark:text-white'>Liquidity Routing</div>
                <div className='mt-5 md:mt-10 relative'>
                  <div className="w-[95%] h-2 md:h-3 border-inputBorder absolute border-dashed border-b mx-auto"></div>
                  <div className='flex justify-between'>
                    <div className='z-50'>
                      <img src={selectedSwap?.icon?.src} alt={selectedSwap?.name} className='w-4 h-4 md:w-6 md:h-6' />
                    </div>
                    <div className='z-50'>
                      <img src={walletList[4]?.icon?.src} alt={selectedSwap?.name} className='w-4 h-4 md:w-6 md:h-6' />
                    </div>
                    <div className='z-50'>
                      <img src={walletList[6]?.icon?.src} alt={selectedSwap?.name} className='w-4 h-4 md:w-6 md:h-6' />
                    </div>
                    <div className='z-50'>
                      <img src={selectedFor?.icon?.src} alt={selectedSwap?.name} className='w-4 h-4 md:w-6 md:h-6' />
                    </div>
                  </div>
                </div>
                <div className='mt-2 flex justify-between w-5/6 mx-auto'>
                  <div className='bg-right-panel dark:bg-transparent dark:border-content2 dark:border 
                                  rounded-[10px] text-center py-1 px-3 md:py-3 md:px-6 text-[8px] md:text-xs text-content7'>
                    1.0% <br />Volatile
                  </div>
                  <div className='bg-right-panel dark:bg-transparent dark:border-content2 dark:border 
                                  rounded-[10px] text-center py-1 px-3 md:py-3 md:px-6 text-[8px] md:text-xs text-content7'>
                    0.05% <br />Stable
                  </div>
                  <div className='bg-right-panel dark:bg-transparent dark:border-content2 dark:border 
                                  rounded-[10px] text-center py-1 px-3 md:py-3 md:px-6 text-[8px] md:text-xs text-content7'>
                    1.0% <br />Volatile
                  </div>
                </div>
              </div>
            </div>
            {/* End Berachain */}
          </div>

          <div className='w-full md:w-5/12 bg-right-panel rounded-[10px] p-8 md:p-10 mt-8 md:mt-0 dark:bg-darkFooter'>
            <div className="font-normal text-black1 dark:text-white text-sm md:text-lg">Swap</div>
            {/* Start Step 1 */}
            <div className={'step-1 ' + (step === 0 ? 'block' : 'hidden')}>
              <div className='relative pb-[45px] md:pb-[70px]'>
                <div className="w-[1px] h-full bg-divider absolute left-[10px] md:left-4"></div>
                <div className='mt-8'>
                  <div className='flex gap-5'>
                    <div className='bg-white dark:bg-bookmark w-5 h-5 md:w-8 md:h-8 rounded-full flex items-center justify-center z-50'>
                      <span className='text-xs md:text-base text-content-3 dark:text-white'>1</span>
                    </div>
                    <div className='font-normal text-xs md:text-base w-[85%] text-content-3 dark:text-white'>Start by selecting the token to <strong>Swap</strong> from and the amount you want to exchange</div>
                  </div>
                </div>
                <div className='mt-[45px] md:mt-[70px]'>
                  <div className='flex gap-5'>
                    <div className='bg-white dark:bg-bookmark w-5 h-5 md:w-8 md:h-8 rounded-full flex items-center justify-center z-50'>
                      <span className='text-xs md:text-base text-content-3 dark:text-white'>2</span>
                    </div>
                    <div className='font-normal text-xs md:text-base w-[85%] text-content-3 dark:text-white'>Pick the token you want to exchange <strong>For</strong></div>
                  </div>
                </div>
              </div>
              <div>
                <div className='flex gap-5'>
                  <div className='bg-white dark:bg-bookmark w-5 h-5 md:w-8 md:h-8 rounded-full flex items-center justify-center z-50'>
                    <span className='text-xs md:text-base text-content-3 dark:text-white'>3</span>
                  </div>
                  <div className='font-normal text-xs md:text-base w-[85%] text-content-3 dark:text-white'>The quote will be ready in a moment!</div>
                </div>
              </div>
            </div>
            {/* End Step 1 */}

            {/* Start Step 2 */}
            <div className={'step-2 ' + (step !== 0 ? 'block' : 'hidden')}>
              <div className='relative'>
                <div className="w-[1px] h-full bg-divider absolute left-[10px] md:left-[14px]"></div>
                <div className='mt-8'>
                  <div className='flex gap-5'>
                    <div className='bg-white dark:bg-bookmark w-5 h-5 md:w-7 md:h-7 rounded-full flex items-center justify-center z-50'>
                      <span className='text-xs md:text-base text-content-3 dark:text-white'>
                        <Image src={calculatorGreen} alt="calculator" />
                      </span>
                    </div>
                    <div className='font-normal text-xs md:text-base w-[85%]'>
                      <div className='text-content-3 dark:text-white'>Exchange rate found... <span className='text-decoration'>Refresh</span></div>
                      <div className='flex gap-2 mt-2'>
                        <div className='uppercase text-content-3 dark:text-white'>1 {selectedSwap?.name}</div>
                        <div className='flex items-center'>
                          <FontAwesomeIcon icon={faExchange} className='text-content-3 dark:text-white' />
                        </div>
                        <div className='uppercase text-content6 dark:text-white'>0.05188 {selectedFor?.name}</div>
                      </div>
                    </div>
                  </div>

                  <div className='mt-[50px] flex gap-5'>
                    <div className='bg-white dark:bg-bookmark w-5 h-5 md:w-7 md:h-7 rounded-full flex items-center justify-center z-50'>
                      <span className='text-xs md:text-base text-content-3 dark:text-white'>
                        <Image src={plusGreen} alt="calculator" />
                      </span>
                    </div>
                    <div className='font-normal text-xs md:text-base w-[85%]'>
                      <div className='text-content-3 dark:text-white text-xs md:text-base'>1.0% slippage applied... Adjust</div>
                    </div>
                  </div>

                  <div className='mt-7 flex gap-5'>
                    <div className='bg-white dark:bg-bookmark w-5 h-5w-5 h-5 md:w-7 md:h-7 rounded-full flex items-center justify-center z-50'>
                      <span className='text-xs md:text-base text-content-3 dark:text-white'>
                        <Image src={exchangeGreen} alt="calculator" />
                      </span>
                    </div>
                    <div className='font-normal text-xs md:text-base w-[85%]'>
                      <div className='text-content-3 dark:text-white text-xs md:text-base'>Minimum received {forAmount.toFixed(4)} <span className='uppercase'>{selectedFor?.name}</span></div>
                    </div>
                  </div>

                  <div className='mt-7 flex gap-5'>
                    <div className='bg-white dark:bg-bookmark w-5 h-5w-5 h-5 md:w-7 md:h-7 rounded-full flex items-center justify-center z-50'>
                      <span className='text-xs md:text-base text-content-3 dark:text-white'>
                        <Image src={checkGreen} alt="calculator" />
                      </span>
                    </div>
                    <div className='font-normal text-xs md:text-base w-[85%]'>
                      <div className='text-content-3 dark:text-white text-xs md:text-base'>0.09671% price impact is safe</div>
                    </div>
                  </div>

                  <div className='mt-7 flex gap-5'>
                    <div className='bg-white dark:bg-bookmark w-5 h-5w-5 h-5 md:w-7 md:h-7 rounded-full flex items-center justify-center z-50'>
                      <span className='text-xs md:text-base text-content-3 dark:text-white'>
                        <Image src={step < 2 ? lockerGreen : lockOpenGreen} alt="calculator" />
                      </span>
                    </div>
                    <div className='font-normal text-xs md:text-base w-[85%]'>
                      <div className='text-content-3 dark:text-white text-xs md:text-base'>Allowance not granted for {selectedSwap?.name}</div>
                      <div className={'mt-8 mb-4 md:mb-9 ' + (step < 2 ? 'block' : 'hidden')}>
                        <button className='border-[1px] w-full mx-auto border-inputBorder rounded-[10px] py-2 md:py-4 text-xs md:text-base text-content3 dark:text-white hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-slate-800'
                          onClick={allowSwap}>
                          Allow <strong className='uppercase text-black dark:text-white'>{selectedSwap?.name}</strong>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className='mt-7 flex gap-5'>
                    <div className='bg-white dark:bg-bookmark w-5 h-5w-5 h-5 md:w-7 md:h-7 rounded-full flex items-center justify-center z-50'>
                      <span className='text-xs md:text-base text-content-3 dark:text-white'>
                        <Image src={step <= 2 ? waitingGreen : congratesGreen} alt="calculator" />
                      </span>
                    </div>
                    <div className='font-normal text-xs md:text-base w-[85%]'>
                      <div className='text-content-3 dark:text-white text-xs md:text-base'>
                        <span className={step <= 2 ? 'block' : 'hidden'}>Waiting for next actions...</span>
                        <span className={step > 2 ? 'block' : 'hidden'}>Swap confirmed!</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className={'mt-8 mb-4 md:mb-9 z-50 ' + (step === 2 ? 'block' : 'hidden')}>
                  <button className='w-full mx-auto rounded-[10px] py-2 md:py-4 text-xs md:text-base bg-primary text-white hover:bg-[#fda666]'
                    onClick={onSubmit}>
                    Swap <strong className='uppercase text-white'>{selectedSwap?.name}</strong> for <strong className='uppercase text-white'>{selectedFor?.name}</strong>
                  </button>
                </div>
              </div>
            </div>
            {/* End Step 2 */}
          </div>
        </div>
      </div>

      <WalletListModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  )
}
