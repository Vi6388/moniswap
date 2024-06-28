"use client";

import { faAngleDown, faExchange, faExchangeAlt, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDisclosure } from '@nextui-org/react';
import Image from "next/image";
import { useEffect, useState } from "react";
import calculatorGreen from '@/assets/images/swap/calculator-green.png';
import plusGreen from '@/assets/images/swap/plus-green.png';
import lockerGreen from '@/assets/images/swap/locker-green.png';
import waitingGreen from '@/assets/images/swap/waiting-green.png';
import lockOpenGreen from '@/assets/images/swap/lock-open-green.png';
import congratesGreen from '@/assets/images/swap/congrats-green.png';
import weighingbeamWhiteIcon from '@/assets/images/weighingbeam-white-icon.png';
import weighingbeamIcon from '@/assets/images/weighingbeam-icon.png';
import Link from "next/link";

const walletList = [
    { id: 1, icon: require('@/assets/images/wallet_list/wallet_bera.png')?.default, name: 'bera', walletAddress: '0xafb8...e4df6', balance: 41.75, equivalentValue: -0.2946 },
    { id: 2, icon: require('@/assets/images/wallet_list/honey.png')?.default, name: 'honey', walletAddress: '0xafb8...e4df6', balance: 41.75, equivalentValue: -0.2946 },
    { id: 3, icon: require('@/assets/images/wallet_list/bgt.png')?.default, name: 'bgt', walletAddress: '0xafb8...e4df6', balance: 41.75, equivalentValue: -0.2946 },
    { id: 4, icon: require('@/assets/images/wallet_list/moni.png')?.default, name: 'moni', walletAddress: '0xafb8...e4df6', balance: 41.75, equivalentValue: -0.2946 },
    { id: 5, icon: require('@/assets/images/wallet_list/usdc.png')?.default, name: 'usdc', walletAddress: '0xafb8...e4df6', balance: 41.75, equivalentValue: -0.2946 },
    { id: 6, icon: require('@/assets/images/wallet_list/wbtc.png')?.default, name: 'wbtc', walletAddress: '0xafb8...e4df6', balance: 41.75, equivalentValue: -0.2946 },
    { id: 7, icon: require('@/assets/images/wallet_list/eth.png')?.default, name: 'eth', walletAddress: '0xafb8...e4df6', balance: 41.75, equivalentValue: -0.2946 },
    { id: 8, icon: require('@/assets/images/wallet_list/kdk.png')?.default, name: 'kdk', walletAddress: '0xafb8...e4df6', balance: 41.75, equivalentValue: -0.2946 },
]

export default function NewDeposit() {
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

    const allowFor = () => {
        setStep(3);
    }

    const onSubmit = () => {
        setStep(4);
    }

    return (
        <div className="container m-auto w-[330px] md:w-[1155px] py-3 md:py-5">
            <div className="image-pc w-full bg-[length:317px_417px] md:bg-[length:396px_522px] bg-bottom bg-no-repeat bg-bottom py-20">
                <div className="block md:flex md:justify-between gap-10">
                    {/* Start left Panel */}
                    <div className='w-full md:w-7/12'>
                        <div>
                            <div className="w-4/5 mx-auto bg-content6 dark:bg-bookmark text-center rounded-t-lg py-2 md:py-1">
                                <span className="uppercase text-[11px] text-[13px] text-content3 dark:text-white">change</span>
                            </div>
                            <div className="w-full flex mb-2">
                                <div className='w-8 md:w-10 bg-right-panel dark:bg-bookmark flex justify-center items-center rounded-s-lg'>
                                    <div className='uppercase -rotate-90 text-primary text-xs md:text-[15px]'>Berachain</div>
                                </div>
                                <div className='w-full bg-white dark:bg-darkFooter pt-7 pb-4 px-4 md:py-10 md:pl-5 md:pr-8 rounded-e-lg'>
                                    <div className="w-full block md:flex md:justify-between">
                                        <div className="w-full md:w-4/5 flex">
                                            <div className="ml-6 flex">
                                                <img alt={walletList[3]?.name} src={walletList[3]?.icon?.src} className='w-full w-6 md:w-8 h-6 md:h-8' />
                                                <img alt={walletList[4]?.name} src={walletList[4]?.icon?.src} className='w-full w-6 md:w-8 h-6 md:h-8 ml-[-10px]' />
                                            </div>
                                            <div className="ml-3">
                                                <div className="text-content3 dark:text-white text-xs md:text-[15px] font-medium mb-4">vAMM-USDC/WETH</div>
                                                <div className="flex gap-1 mb-4">
                                                    <span className="text-[9px] text-xs text-primary">Basic Volatile · 1.0%</span>
                                                    <FontAwesomeIcon icon={faExclamationCircle} className="text-[11px] md:text-[14px] text-content8 dark:text-white" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/5 pl-6 md:pl-0">
                                            <div className="w-full border-partDivider border-t-[1px] mb-4 block md:hidden"></div>
                                            <div className="text-content7 dark:text-white text-[10px] md:text-[13px] mb-2 md:mb-4 block md:flex md:justify-end">APR</div>
                                            <div className="text-content3 dark:text-white text-[10px] md:text-[13px] mb-2 md:mb-4 block md:flex md:justify-end">21.34%</div>
                                        </div>
                                    </div>

                                    <div className="w-full block md:flex md:justify-between mt-0 md:mt-12">
                                        <div className="w-full md:w-50 pl-6">
                                            <div className="w-full border-partDivider border-t-[1px] my-4 block md:hidden"></div>
                                            <div className="text-content7 dark:text-white text-[10px] md:text-[13px] mb-2 md:mb-4">Liquidity</div>
                                            <div className="flex gap-1">
                                                <span className="text-content3 dark:text-white text-[10px] md:text-[13px] mb-2 md:mb-4">5.65</span>
                                                <div className="text-content7 dark:text-white text-[10px] md:text-[13px] mb-2 md:mb-4">WETH</div>
                                            </div>
                                            <div className="flex gap-1">
                                                <span className="text-content3 dark:text-white text-[10px] md:text-[13px] mb-0 md:mb-4">52,144.91</span>
                                                <div className="text-content7 dark:text-white text-[10px] md:text-[13px] mb-0 md:mb-4">MONI</div>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-50 pl-6 md:pl-0">
                                            <div className="w-full border-partDivider border-t-[1px] my-4 block md:hidden"></div>
                                            <div className="text-content7 dark:text-white text-[10px] md:text-[13px] mb-2 md:mb-4 flex justify-start md:justify-end">Your Deposits</div>
                                            <div className="flex gap-1 flex justify-start md:justify-end">
                                                <span className="text-content3 dark:text-white text-[10px] md:text-[13px] mb-2 md:mb-4">0.0</span>
                                                <div className="text-content7 dark:text-white text-[10px] md:text-[13px] mb-2 md:mb-4">WETH</div>
                                            </div>
                                            <div className="flex gap-1 flex justify-start md:justify-end">
                                                <span className="text-content3 dark:text-white text-[10px] md:text-[13px] mb-0 md:mb-4">0.0</span>
                                                <div className="text-content7 dark:text-white text-[10px] md:text-[13px] mb-0 md:mb-4">MONI</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-[10px] p-7 md:p-10 bg-white dark:bg-darkFooter">
                            <div>
                                <div className="w-full flex justify-between">
                                    <div className="font-normal text-black1 dark:text-white text-sm md:text-lg">Token Amount</div>
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
                                    <div className="font-normal text-black1 dark:text-white text-sm md:text-lg">Token Amount</div>
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
                    </div>
                    {/* End left Panel */}

                    {/* Start right Panel */}
                    <div className='w-full md:w-5/12 bg-right-panel rounded-[10px] p-8 md:p-10 mt-8 md:mt-0 dark:bg-darkFooter'>
                        <div className="font-normal text-black1 dark:text-white text-sm md:text-lg">New Deposit</div>
                        {/* Start Step 1 */}
                        <div className={'step-1 ' + (step === 0 ? 'block' : 'hidden')}>
                            <div className="relative pb-[45px] md:pb-[70px]">
                                <div className="w-[1px] h-full bg-divider absolute left-[10px] md:left-[14px]"></div>
                                <div className='mt-8'>
                                    <div className='flex gap-5'>
                                        <div className='bg-white dark:bg-bookmark w-5 h-5 md:w-8 md:h-8 rounded-full flex items-center justify-center z-50'>
                                            <span className='text-xs md:text-base text-content-3 dark:text-white'>1</span>
                                        </div>
                                        <div className='font-normal text-xs md:text-base w-[85%] text-content-3 dark:text-white leading-5'>
                                            You are depositing liquidity into a Basic pool. Also known as the constant product pool or AMM, the liquidity in these pools is added over the full price range (0 to ∞) and requires little to no maintenance.
                                            The pool liquidity is kept in balance using the formulax³y + y³x ≥ k
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-[45px] md:mt-[70px]'>
                                    <div className='flex gap-5'>
                                        <div className='bg-white dark:bg-bookmark w-5 h-5 md:w-8 md:h-8 rounded-full flex items-center justify-center z-50'>
                                            <span className='text-xs md:text-base text-content-3 dark:text-white'>2</span>
                                        </div>
                                        <div className='font-normal text-xs md:text-base w-[85%] text-content-3 dark:text-white leading-5'>
                                            Fill-in the deposit amounts. We calculate the deposit amounts to match the liquidity reserves in the pool. Pools without liquidity will use your deposit for initial pool price.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='flex gap-5'>
                                    <div className='bg-white dark:bg-bookmark w-5 h-5 md:w-8 md:h-8 rounded-full flex items-center justify-center z-50'>
                                        <span className='text-xs md:text-base text-content-3 dark:text-white'>3</span>
                                    </div>
                                    <div className='font-normal text-xs md:text-base w-[85%] text-content-3 dark:text-white leading-5'>
                                        After you deposit you can stake the liquidity.
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Step 1 */}

                        {/* Start Step 2 */}
                        <div className={'step-2 ' + (step !== 0 ? 'block' : 'hidden')}>
                            <div className="relative pb-7">
                                <div className="w-[1px] h-full bg-divider absolute left-[10px] md:left-[14px]"></div>
                                <div className='mt-8'>
                                    <div className='flex gap-5'>
                                        <div className='bg-white dark:bg-bookmark w-5 h-5 md:w-7 md:h-7 rounded-full flex items-center justify-center z-50'>
                                            <span className='text-xs md:text-base text-content-3 dark:text-white'>
                                                <Image src={calculatorGreen} alt="calculator" />
                                            </span>
                                        </div>
                                        <div className='font-normal text-xs md:text-base w-[85%]'>
                                            <div className='text-content-3 dark:text-white'>Quote for deposit received...
                                                <span className='hover:underline cursor-pointer'>Refresh</span></div>
                                            <div className='flex gap-2 mt-2'>
                                                <div className='uppercase text-content-3 dark:text-white'>1 {selectedSwap?.name}</div>
                                                <div className='flex items-center'>
                                                    <Image src={weighingbeamWhiteIcon} alt="weighing beam white" className="hidden dark:block" />
                                                    <Image src={weighingbeamIcon} alt="weighing beam white" className="block dark:hidden" />
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
                                            <div className='text-content-3 dark:text-white text-xs md:text-base'>1.0% slippage applied...
                                                <span className="hover:underline cursor-pointer">Adjust</span></div>
                                        </div>
                                    </div>

                                    <div className='my-10 flex gap-5'>
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

                                    <div className='mt-7 flex gap-5 mb-16'>
                                        <div className='bg-white dark:bg-bookmark w-5 h-5w-5 h-5 md:w-7 md:h-7 rounded-full flex items-center justify-center z-50'>
                                            <span className='text-xs md:text-base text-content-3 dark:text-white'>
                                                <Image src={step < 3 ? lockerGreen : lockOpenGreen} alt="calculator" />
                                            </span>
                                        </div>
                                        <div className='font-normal text-xs md:text-base w-[85%]'>
                                            <div className='text-content-3 dark:text-white text-xs md:text-base'>Allowance not granted for {selectedFor?.name}</div>
                                            <div className={'mt-8 mb-4 md:mb-9 ' + (step === 2 ? 'block' : 'hidden')}>
                                                <button className='border-[1px] w-full mx-auto border-inputBorder rounded-[10px] py-2 md:py-4 text-xs md:text-base text-content3 dark:text-white hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-slate-800'
                                                    onClick={allowFor}>
                                                    Allow <strong className='uppercase text-black dark:text-white'>{selectedFor?.name}</strong>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='flex gap-5'>
                                    <div className='bg-white dark:bg-bookmark w-5 h-5w-5 h-5 md:w-7 md:h-7 rounded-full flex items-center justify-center z-50'>
                                        <span className='text-xs md:text-base text-content-3 dark:text-white'>
                                            <Image src={step <= 3 ? waitingGreen : congratesGreen} alt="calculator" />
                                        </span>
                                    </div>
                                    <div className='font-normal text-xs md:text-base w-[85%]'>
                                        <div className='text-content-3 dark:text-white text-xs md:text-base'>
                                            <span className={step <= 3 ? 'block' : 'hidden'}>Waiting for next actions...</span>
                                            <span className={step > 3 ? 'block' : 'hidden'}>Deposit confirmed!</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={'mt-8 mb-4 md:mb-9 ' + (step >= 3 ? 'block' : 'hidden')}>
                                    {step === 3 ?
                                        <button className='w-full mx-auto rounded-[10px] py-2 md:py-4 text-xs md:text-base bg-primary text-white hover:bg-[#fda666]'
                                            onClick={onSubmit}>Deposit
                                        </button> :
                                        step > 3 ?
                                            <Link href={"/components/liquidity/staking"}>
                                                <button className='w-full mx-auto rounded-[10px] py-2 md:py-4 text-xs md:text-base bg-primary text-white hover:bg-[#fda666]'>
                                                    Stake Your Deposit
                                                </button>
                                            </Link> :
                                            <></>

                                    }
                                </div>
                            </div>
                        </div>
                        {/* End Step 2 */}
                    </div>
                    {/* End right Panel */}

                </div>
            </div>
        </div>
    )
}