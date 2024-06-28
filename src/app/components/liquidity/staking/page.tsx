"use client";

import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDisclosure } from '@nextui-org/react';
import Image from "next/image";
import { useEffect, useState } from "react";
import pigGreen from '@/assets/images/pig-green-icon.png';
import alarmGreen from '@/assets/images/alarm-green-icon.png';
import lockerGreen from '@/assets/images/swap/locker-green.png';
import waitingGreen from '@/assets/images/swap/waiting-green.png';
import lockOpenGreen from '@/assets/images/swap/lock-open-green.png';
import congratesGreen from '@/assets/images/swap/congrats-green.png';
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

export default function Staking() {
    const [step, setStep] = useState(0);
    const [selectedSwap, setSelectedSwap]: any = useState({});
    const [selectedFor, setSelectedFor]: any = useState({});
    const [swapAmount, setSwapAmount] = useState(0.0);
    const [forAmount, setForAmount] = useState(0.0);
    const { isOpen, onOpenChange } = useDisclosure();
    const [progress, setProgress] = useState(100);

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
                    {/* Start left Panel */}
                    <div className='w-full md:w-7/12'>
                        <div>
                            <div className="w-4/5 mx-auto bg-content6 dark:bg-bookmark text-center rounded-t-lg py-2 md:py-1">
                                <span className="uppercase text-[11px] text-[13px] text-content3 dark:text-white">staking</span>
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

                                    <div className="w-full h-[1px] bg-divider hidden md:block"></div>

                                    <div className="my-4 pl-6 md:pl-0" onClick={() => setStep(1)}>
                                        <div className="w-full border-partDivider border-t-[1px] mb-4 block md:hidden"></div>
                                        <div className="text-content3 dark:text-white text-xs md:text-[15px] font-medium mb-4">Staking 0%</div>

                                        <div className="mt-[13px] md:mt-5">
                                            <div className="relative">
                                                <div className={"w-[16px] h-[16px] bg-primary absolute rounded-full " +
                                                    (progress === 25 ? "start-1/4" : progress === 50 ? "start-1/2" : progress === 75 ? "start-3/4" : progress === 100 ? "right-0" : "left-0")}></div>
                                                <div className="pt-[5px]">
                                                    <div className="flex w-full h-1.5 bg-gray-200 rounded-[10px] overflow-hidden dark:bg-neutral-700" role="progressbar">
                                                        <div className={"flex flex-col justify-center rounded-s-[10px] overflow-hidden bg-primary text-xs text-white text-center whitespace-nowrap transition duration-500 " +
                                                            (progress === 25 ? "w-1/4" : progress === 50 ? "w-1/2" : progress === 75 ? "w-3/4" : progress === 100 ? "w-full" : "")}>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex justify-between mt-5 md:mt-6">
                                                <div className={"text-xs cursor-pointer " + (progress === 0 ? 'text-primary' : 'text-content7 dark:text-white')}
                                                    onClick={() => setProgress(0)}>
                                                    0%
                                                </div>
                                                <div className={"text-xs cursor-pointer " + (progress === 25 ? 'text-primary' : 'text-content7 dark:text-white')}
                                                    onClick={() => setProgress(25)}>
                                                    25%
                                                </div>
                                                <div className={"text-xs cursor-pointer " + (progress === 50 ? 'text-primary' : 'text-content7 dark:text-white')}
                                                    onClick={() => setProgress(50)}>
                                                    50%
                                                </div>
                                                <div className={"text-xs cursor-pointer " + (progress === 75 ? 'text-primary' : 'text-content7 dark:text-white')}
                                                    onClick={() => setProgress(75)}>
                                                    75%
                                                </div>
                                                <div className={"text-xs cursor-pointer " + (progress === 100 ? 'text-primary' : 'text-content7 dark:text-white')}
                                                    onClick={() => setProgress(100)}>
                                                    100%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End left Panel */}

                    {/* Start right Panel */}
                    <div className='w-full md:w-5/12 bg-right-panel rounded-[10px] p-8 md:p-10 mt-8 md:mt-0 dark:bg-darkFooter'>
                        <div className="font-normal text-black1 dark:text-white text-sm md:text-lg">
                            {step === 3 ? 'Unstaking' : 'Staking'}
                        </div>
                        {/* Start Step 1 */}
                        <div className={'step-1 ' + (step === 0 ? 'block' : 'hidden')}>
                            <div className="relative pb-[45px] md:pb-[70px]">
                                <div className="w-[1px] h-full bg-divider absolute left-[10px] md:left-4"></div>
                                <div className='mt-8'>
                                    <div className='flex gap-5'>
                                        <div className='bg-white dark:bg-bookmark w-5 h-5 md:w-8 md:h-8 rounded-full flex items-center justify-center z-50'>
                                            <span className='text-xs md:text-base text-content-3 dark:text-white'>1</span>
                                        </div>
                                        <div className='font-normal text-xs md:text-base w-[85%] text-content-3 dark:text-white leading-5'>
                                            Verify the deposit and the stake amounts.
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-[45px] md:mt-[70px]'>
                                    <div className='flex gap-5'>
                                        <div className='bg-white dark:bg-bookmark w-5 h-5 md:w-8 md:h-8 rounded-full flex items-center justify-center z-50'>
                                            <span className='text-xs md:text-base text-content-3 dark:text-white'>2</span>
                                        </div>
                                        <div className='font-normal text-xs md:text-base w-[85%] text-content-3 dark:text-white leading-5'>
                                            Use the slider to adjust the amount you want to stake
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <div className='flex gap-5'>
                                    <div className='bg-white dark:bg-bookmark w-5 h-5 md:w-8 md:h-8 rounded-full flex items-center justify-center z-50'>
                                        <span className='text-xs md:text-base text-content-3 dark:text-white'>3</span>
                                    </div>
                                    <div className='font-normal text-xs md:text-base w-[85%] text-content-3 dark:text-white leading-5'>
                                        Confirm your stake!
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Step 1 */}

                        {/* Start Step 2 */}
                        <div className={'step-2 ' + (step !== 0 ? 'block' : 'hidden')}>
                            <div className="relative pb-7">
                                <div className="w-[1px] h-full bg-divider absolute left-[10px] md:left-[14px]"></div>
                                <div className={'mt-8 ' + (step === 3 ? 'mb-10' : '')}>
                                    <div className='flex gap-5'>
                                        <div className='bg-white dark:bg-bookmark w-5 h-5 md:w-7 md:h-7 rounded-full flex items-center justify-center z-50'>
                                            <span className='text-xs md:text-base text-content-3 dark:text-white'>
                                                <Image src={pigGreen} alt="calculator" />
                                            </span>
                                        </div>
                                        <div className='font-normal text-xs md:text-base w-[85%]'>
                                            <div className='text-content-3 dark:text-white'>Found the deposit available for staking</div>
                                        </div>
                                    </div>

                                    <div className={'mt-[50px] flex gap-5 ' + (step === 3 ? 'hidden' : 'block')}>
                                        <div className='bg-white dark:bg-bookmark w-5 h-5 md:w-7 md:h-7 rounded-full flex items-center justify-center z-50'>
                                            <span className='text-xs md:text-base text-content-3 dark:text-white'>
                                                <Image src={alarmGreen} alt="calculator" />
                                            </span>
                                        </div>
                                        <div className='font-normal text-xs md:text-base w-[85%]'>
                                            <div className='text-content-3 dark:text-white text-xs md:text-base'>Gauge available for this pool</div>
                                        </div>
                                    </div>

                                    <div className={'mt-10 mb-3 flex gap-5 ' + (step === 3 ? 'hidden' : 'block')}>
                                        <div className='bg-white dark:bg-bookmark w-5 h-5w-5 h-5 md:w-7 md:h-7 rounded-full flex items-center justify-center z-50'>
                                            <span className='text-xs md:text-base text-content-3 dark:text-white'>
                                                <Image src={step < 2 ? lockerGreen : lockOpenGreen} alt="calculator" />
                                            </span>
                                        </div>
                                        <div className='font-normal text-xs md:text-base w-[85%]'>
                                            <div className='text-content-3 dark:text-white text-xs md:text-base'>Allowance not granted for vAMM-WETH/MONI</div>
                                            <div className={'mt-8 ' + (step < 2 ? 'block' : 'hidden')}>
                                                <button className='border-[1px] w-full mx-auto border-inputBorder rounded-[10px] py-2 md:py-4 text-xs md:text-base text-content3 dark:text-white hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-slate-800'
                                                    onClick={allowSwap}>
                                                    Allow vAMM-WETH/MONI
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
                                            <Image src={waitingGreen} alt="calculator" />
                                        </span>
                                    </div>
                                    <div className='font-normal text-xs md:text-base w-[85%]'>
                                        <div className='text-content-3 dark:text-white text-xs md:text-base'>Waiting for next actions...</div>
                                    </div>
                                </div>
                                <div className={'mt-8 mb-4 md:mb-9 ' + (step >= 2 ? 'block' : 'hidden')}>
                                    {step === 2 ?
                                        <button className='w-full mx-auto rounded-[10px] py-2 md:py-4 text-xs md:text-base bg-primary text-white hover:bg-[#fda666]'
                                            onClick={onSubmit}>Stake
                                        </button> :
                                        step > 2 ?
                                            <button className='w-full mx-auto rounded-[10px] py-2 md:py-4 text-xs md:text-base bg-primary text-white hover:bg-[#fda666]'
                                                onClick={() => setStep(0)}>
                                                Unstake
                                            </button> :
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