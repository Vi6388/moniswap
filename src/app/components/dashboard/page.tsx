"use client";

import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import moniImg from '@/assets/images/wallet_list/moni.png';
import usdcImg from '@/assets/images/wallet_list/usdc.png';
import Image from "next/image";

export default function Dashboard() {
    const [depositLiquidity, setDepositLiquidity] = useState(true);
    const [liquidityRewards, setLiquidityRewards] = useState(true);
    const [locks, setLocks] = useState(true);
    const [relay, setRelay] = useState(true);
    const [votingRewards, setVotingRewards] = useState(false);
    return (
        <div className="container m-auto w-[330px] md:w-[1155px] py-3 md:py-5">
            <div className="my-5 md:my-10">
                <div>
                    <div className="mb-3 md:mb-7">
                        <span className="text-[15px] md:text-[22px] text-black dark:text-white font-semibold">Deposited & Staked Liquidity</span>
                    </div>
                    <div className={depositLiquidity ? 'hidden' : 'block'}>
                        <div className="bg-right-panel dark:bg-darkFooter py-[18px] pr-4 pl-4 md:pl-8 flex gap-5 rounded-lg">
                            <FontAwesomeIcon icon={faExclamationCircle} className="text-xs md:text-[14px] text-content8 dark:text-white" />
                            <span className="text-xs md:text-[15px] text-content3 dark:text-white">
                                To receive emissions <span className="underline">deposit and stake</span> your liquidity first.
                            </span>
                        </div>
                    </div>

                    <div className={depositLiquidity ? 'block' : 'hidden'}>
                        <div className="w-full flex mb-2">
                            <div className='w-8 md:w-10 bg-right-panel dark:bg-bookmark flex justify-center items-center rounded-s-lg'>
                                <div className='uppercase -rotate-90 text-primary text-xs md:text-[15px]'>Berachain</div>
                            </div>
                            <div className="w-full bg-white dark:bg-darkFooter rounded-e-lg pt-[10px] pb-5 px-8">
                                <div className="w-full w-full border-b border-content2 mb-4 pb-2 flex gap-8">
                                    <span className="text-black1 dark:text-white text-[10px] md:text-xs">Deposit #0</span>
                                    <span className="text-black1 dark:text-white text-[10px] md:text-xs">0.0 MONI</span>
                                </div>
                                <div className="w-full block md:flex justify-between md:gap-5">
                                    <div className="w-full md:w-[31%]">
                                        <div className="flex">
                                            <div className="flex">
                                                <Image alt="moni" src={moniImg} className='w-full w-6 md:w-8 h-6 md:h-8' />
                                                <Image alt="usdc" src={usdcImg} className='w-full w-6 md:w-8 h-6 md:h-8 ml-[-10px]' />
                                            </div>
                                            <div className="ml-3">
                                                <div className="text-content3 dark:text-white text-xs md:text-[15px] font-medium mb-4">vAMM-USDC/WETH</div>
                                                <div className="flex gap-1 mb-4">
                                                    <span className="text-[9px] text-xs text-primary">Basic Volatile · 1.0%</span>
                                                    <FontAwesomeIcon icon={faExclamationCircle} className="text-[11px] md:text-[14px] text-content8 dark:text-white" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:ml-16">
                                            <div className="w-full border-partDivider border-t-[1px] mb-4 block md:hidden"></div>
                                            <div className="text-content7 dark:text-white text-[10px] md:text-xs mb-4">Pool Total</div>
                                            <div className="text-[10px] md:text-xs mb-4">
                                                <span className="text-content7 dark:text-white mr-1">77.72</span>
                                                <span className="text-content3 dark:text-white">WETH</span>
                                            </div>
                                            <div className="text-[10px] md:text-xs">
                                                <span className="text-content7 dark:text-white mr-1">2,106,096.26</span>
                                                <span className="text-content3 dark:text-white">MONI</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full border-partDivider border-t-[1px] my-4 block md:hidden"></div>
                                    <div className="w-full md:w-[23%] text-left md:text-right pl-5 md:pl-0 bg-right-panel dark:bg-bookmark rounded-lg p-4">
                                        <div className="text-content7 text-[10px] md:text-[13px] mb-4">In Wallet</div>
                                        <div className="text-[10px] md:text-xs mb-4">
                                            <span className="text-content7 dark:text-white mr-1">0.0001</span>
                                            <span className="text-content3 dark:text-white">WETH</span>
                                        </div>
                                        <div className="text-[10px] md:text-xs mb-4">
                                            <span className="text-content7 dark:text-white mr-1">2.72</span>
                                            <span className="text-content3 dark:text-white">MONI</span>
                                        </div>
                                        <div className="text-content7 dark:text-white text-xs md:text-[15px] underline">Swap</div>
                                    </div>
                                    <div className="w-full border-partDivider border-t-[1px] my-4 block md:hidden"></div>
                                    <div className="w-full md:w-[23%] text-left md:text-right pl-5 md:pl-0 bg-right-panel dark:bg-bookmark rounded-lg p-4">
                                        <div className="text-content7 text-[10px] md:text-[13px] mb-4">Unstaked</div>
                                        <div className="text-[10px] md:text-xs mb-4">
                                            <span className="text-content7 dark:text-white mr-1">0.0001</span>
                                            <span className="text-content3 dark:text-white">WETH</span>
                                        </div>
                                        <div className="text-[10px] md:text-xs mb-4">
                                            <span className="text-content7 dark:text-white mr-1">2.72</span>
                                            <span className="text-content3 dark:text-white">MONI</span>
                                        </div>
                                        <div className="w-full flex justify-between">
                                            <div className="text-content7 dark:text-white text-xs md:text-[15px] underline w-1/2">Withdraw</div>
                                            <div className="text-primary text-xs md:text-[15px] underline w-1/2 text-right cursor-pointer">Stake</div>
                                        </div>
                                    </div>
                                    <div className="w-full border-partDivider border-t-[1px] my-4 block md:hidden"></div>
                                    <div className="w-full md:w-[23%] text-left md:text-right pl-5 md:pl-0 bg-right-panel dark:bg-bookmark rounded-lg p-4">
                                        <div className="text-content7 text-[10px] md:text-[13px] mb-4">Staked</div>
                                        <div className="text-[10px] md:text-xs mb-4">
                                            <span className="text-content7 dark:text-white mr-1">0.0001</span>
                                            <span className="text-content3 dark:text-white">WETH</span>
                                        </div>
                                        <div className="text-[10px] md:text-xs mb-4">
                                            <span className="text-content7 dark:text-white mr-1">2.72</span>
                                            <span className="text-content3 dark:text-white">MONI</span>
                                        </div>
                                        <div className="text-content7 dark:text-white text-xs md:text-[15px] underline">Unstake</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <div className="mb-3 md:mb-7">
                        <span className="text-[15px] md:text-[22px] text-black dark:text-white font-semibold">Liquidity Rewards</span>
                    </div>
                    <div className={liquidityRewards ? 'hidden' : 'block'}>
                        <div className="bg-right-panel dark:bg-darkFooter py-[18px] pr-4 pl-4 md:pl-8 flex gap-5 rounded-lg mt-3 md:mt-7">
                            <FontAwesomeIcon icon={faExclamationCircle} className="text-xs md:text-[14px] text-content8 dark:text-white" />
                            <span className="text-xs md:text-[15px] text-content3 dark:text-white">
                                Start by <span className="underline">depositing and staking</span> liquidity.
                            </span>
                        </div>
                    </div>
                    <div className={liquidityRewards ? 'block' : 'hidden'}>
                        <div className="w-full flex mb-2">
                            <div className='w-8 md:w-10 bg-right-panel dark:bg-bookmark flex justify-center items-center rounded-s-lg'>
                                <div className='uppercase -rotate-90 text-primary text-xs md:text-[15px]'>Berachain</div>
                            </div>
                            <div className="w-full bg-white dark:bg-darkFooter rounded-e-lg pt-[10px] pb-5 px-8">
                                <div className="w-full w-full border-b border-content2 mb-4 pb-2 flex gap-8">
                                    <span className="text-black1 dark:text-white text-[10px] md:text-xs">Deposit #0</span>
                                    <span className="text-black1 dark:text-white text-[10px] md:text-xs">0.0 MONI</span>
                                </div>
                                <div className="w-full block md:flex justify-between md:gap-5">
                                    <div className="w-full md:w-[31%]">
                                        <div className="flex">
                                            <div className="flex">
                                                <Image alt="moni" src={moniImg} className='w-full w-6 md:w-8 h-6 md:h-8' />
                                                <Image alt="usdc" src={usdcImg} className='w-full w-6 md:w-8 h-6 md:h-8 ml-[-10px]' />
                                            </div>
                                            <div className="ml-3">
                                                <div className="text-content3 dark:text-white text-xs md:text-[15px] font-medium mb-4">vAMM-USDC/WETH</div>
                                                <div className="flex gap-1 mb-0 md:mb-4">
                                                    <span className="text-[9px] text-xs text-primary">Basic Volatile · 1.0%</span>
                                                    <FontAwesomeIcon icon={faExclamationCircle} className="text-[11px] md:text-[14px] text-content8 dark:text-white" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full border-partDivider border-t-[1px] my-4 block md:hidden"></div>
                                    <div className="w-full md:w-[23%] text-left md:text-right pl-0 p-0 md:p-4">
                                        <div className="text-content7 text-[10px] md:text-[13px] mb-4">Emissions APR</div>
                                        <div className="text-[10px] md:text-xs mb-0 md:mb-4 text-content3 dark:text-white">19.48%</div>
                                    </div>
                                    <div className="w-full border-partDivider border-t-[1px] my-4 block md:hidden"></div>
                                    <div className="w-full md:w-[23%] text-left md:text-right pl-0 p-0 md:p-4 flex flex-col justify-between">
                                        <div>
                                            <div className="text-content7 text-[10px] md:text-[13px] mb-4">Emissions</div>
                                            <div className="text-[10px] md:text-xs mb-4">
                                                <span className="text-content7 dark:text-white mr-1">0.0001</span>
                                                <span className="text-content3 dark:text-white">WETH</span>
                                            </div>
                                        </div>
                                        <div className="w-full flex justify-start md:justify-end">
                                            <div className="text-primary text-xs md:text-[15px] underline w-1/2 text-left md:text-right cursor-pointer">Claim</div>
                                        </div>
                                    </div>
                                    <div className="w-full border-partDivider border-t-[1px] my-4 block md:hidden"></div>
                                    <div className="w-full md:w-[23%] text-left md:text-right pl-0 p-0 md:p-4 flex flex-col justify-between">
                                        <div>
                                            <div className="text-content7 text-[10px] md:text-[13px] mb-4">Trading Fees</div>
                                            <div className="text-[10px] md:text-xs mb-4">
                                                <span className="text-content7 dark:text-white mr-1">0.0001</span>
                                                <span className="text-content3 dark:text-white">WETH</span>
                                            </div>
                                            <div className="text-[10px] md:text-xs mb-4">
                                                <span className="text-content7 dark:text-white mr-1">2.72</span>
                                                <span className="text-content3 dark:text-white">MONI</span>
                                            </div>
                                        </div>
                                        <div className="w-full flex justify-start md:justify-end">
                                            <div className="text-primary text-xs md:text-[15px] underline w-1/2 text-left md:text-right cursor-pointer">Claim</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <div className="mb-3 md:mb-7">
                        <span className="text-[15px] md:text-[22px] text-black dark:text-white font-semibold">Locks</span>
                    </div>
                    <div className={locks ? 'hidden' : 'block'}>
                        <div className="bg-right-panel dark:bg-darkFooter py-[18px] pr-4 pl-4 md:pl-8 flex gap-5 rounded-lg mt-3 md:mt-7">
                            <FontAwesomeIcon icon={faExclamationCircle} className="text-xs md:text-[14px] text-content8 dark:text-white" />
                            <span className="text-xs md:text-[15px] text-content3 dark:text-white">
                                To receive incentives and fees create a lock and vote with it.
                            </span>
                        </div>
                    </div>
                    <div className={locks ? 'block' : 'hidden'}>
                        <div className="w-full flex mb-2">
                            <div className='w-8 md:w-10 bg-right-panel dark:bg-bookmark flex justify-center items-center rounded-s-lg'>
                                <div className='uppercase -rotate-90 text-primary text-[10px] md:text-xs flex'>
                                    <span className="mr-2">LOCK</span>
                                    <span>#23010</span>
                                </div>
                            </div>
                            <div className="w-full bg-white dark:bg-darkFooter rounded-e-lg pt-[10px] pb-5 px-8">
                                <div className="w-full w-full border-b border-content2 mb-4 pb-2 flex gap-8">
                                    <span className="text-black1 dark:text-white text-[10px] md:text-xs">Lock #23010</span>
                                </div>
                                <div className="w-full block md:flex justify-between md:gap-5">
                                    <div className="w-full md:w-1/2">
                                        <div className="flex">
                                            <div className="flex bg-right-panel dark:bg-bookmark w-12 h-12 md:w-15 md:h-15 flex justify-center items-center rounded-lg">
                                                <Image alt="moni" src={moniImg} className='w-6 md:w-8 h-6 md:h-8' />
                                            </div>
                                            <div className="ml-3">
                                                <div className="text-content3 dark:text-white text-xs md:text-[15px] font-medium mb-4 mt-[10px]">
                                                    24.78 VELO locked for 4 years
                                                </div>
                                            </div>
                                        </div>
                                        <div className="block md:flex gap-4 ml-0 md:ml-[68px]">
                                            <div className="flex gap-4 mt-2 md:mt-0">
                                                <div className="text-primary text-xs md:text-[15px] w-1/3 underline cursor-pointer">Increase</div>
                                                <div className="text-primary text-xs md:text-[15px] w-1/3 underline cursor-pointer">Extend</div>
                                            </div>
                                            <div className="flex gap-4 my-2 md:mt-0">
                                                <div className="text-primary text-xs md:text-[15px] w-1/3 underline cursor-pointer">Merge</div>
                                                <div className="text-primary text-xs md:text-[15px] w-1/3 underline cursor-pointer">Merge</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 flex justify-between">
                                        <div className="w-full md:w-1/2 text-left md:text-right pl-0 p-0 md:p-4">
                                            <div className="text-content7 text-[10px] md:text-[13px] mb-4">Rebase APR</div>
                                            <div className="text-[10px] md:text-xs mb-0 md:mb-4 text-content3 dark:text-white">19.48%</div>
                                        </div>
                                        <div className="w-full md:w-1/2 text-right pl-0 p-0 md:p-4 flex flex-col justify-between">
                                            <div>
                                                <div className="text-content7 text-[10px] md:text-[13px] mb-4">Rebases</div>
                                                <div className="text-[10px] md:text-xs mb-4">
                                                    <span className="text-content7 dark:text-white mr-1">0.0001</span>
                                                    <span className="text-content3 dark:text-white">MONI</span>
                                                </div>
                                            </div>
                                            <div className="w-full flex justify-end">
                                                <div className="text-primary text-xs md:text-[15px] underline w-1/2 text-left md:text-right cursor-pointer">
                                                    Claim & Lock
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <div className="mb-3 md:mb-7">
                        <span className="text-[15px] md:text-[22px] text-black dark:text-white font-semibold">Relay</span>
                    </div>
                    <div className={relay ? 'hidden' : 'block'}>
                        <div className="bg-right-panel dark:bg-darkFooter py-[18px] pr-4 pl-4 md:pl-8 flex gap-5 rounded-lg mt-3 md:mt-7">
                            <FontAwesomeIcon icon={faExclamationCircle} className="text-xs md:text-[14px] text-content8 dark:text-white" />
                            <span className="text-xs md:text-[15px] text-content3 dark:text-white">
                                No Relays found.
                            </span>
                        </div>
                    </div>
                    <div className={relay ? 'block' : 'hidden'}>
                        <div className="w-full flex">
                            <div className='w-8 md:w-10 bg-right-panel dark:bg-bookmark flex justify-center items-center rounded-s-lg'>
                                <div className='uppercase -rotate-90 text-primary text-[10px] md:text-xs flex'>
                                    <span className="mr-2">ID</span>
                                    <span>11129</span>
                                </div>
                            </div>
                            <div className="w-full bg-white dark:bg-darkFooter rounded-e-lg pt-[10px] pb-5 px-8">
                                <div className="w-full w-full border-b border-content2 mb-4 pb-2 flex gap-8">
                                    <span className="text-black1 dark:text-white text-[10px] md:text-xs">Updated 4 days ago</span>
                                </div>
                                <div className="w-full block md:flex justify-between md:gap-5">
                                    <div className="w-full md:w-1/2">
                                        <div className="flex">
                                            <div className="flex bg-right-panel dark:bg-bookmark w-12 h-12 md:w-15 md:h-15 flex justify-center items-center rounded-lg">
                                                <Image alt="moni" src={moniImg} className='w-6 md:w-8 h-6 md:h-8' />
                                            </div>
                                            <div className="ml-3">
                                                <div className="text-content3 dark:text-white text-xs md:text-[15px] font-medium mb-4 mt-[10px]">
                                                    Moonwell veMONI
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 ml-0 md:ml-[68px]">
                                            <div className="text-[10px] md:text-xs my-4">
                                                <span className="text-content3 dark:text-white mr-1">Voting Power</span>
                                                <span className="text-content7 dark:text-white">6,657,987.58 ~ 1.12%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 flex justify-between">
                                        <div className="w-full md:w-1/2 text-left md:text-right flex flex-col justify-between">
                                            <div className="flex items-center justify-end">
                                            </div>
                                            <div className="text-[10px] md:text-xs mb-4">
                                                <span className="text-content7 dark:text-white mr-1">Rewards</span>
                                                <span className="text-content3 dark:text-white">MONI</span>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 text-left md:text-right flex flex-col justify-between">
                                            <div>
                                                <div className="flex items-center justify-end">
                                                    <div className="px-4 py-2 border border-content2 bg-transparent rounded-lg w-fit-content
                                                                hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-slate-800">
                                                        <span className="text-[10px] md:text-[13px] text-content3 ml-2 dark:text-white">Deposit Lock</span>
                                                    </div>
                                                </div>
                                                <div className="text-[10px] md:text-xs mb-4 mt-3 pr-3 text-right">
                                                    <span className="text-content7 dark:text-white mr-1">APR</span>
                                                    <span className="text-content3 dark:text-white">13.3%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[90%] mx-auto bg-right-panel dark:bg-bookmark rounded-b-lg p-4 hidden md:block">
                            <div className="w-full rounded-lg bg-white dark:bg-darkFooter px-4 py-5 flex justify-between items-center">
                                <div className="flex">
                                    <div className="text-[10px] md:text-xs pr-3 text-right text-content3 dark:text-white mr-1 flex">
                                        <span className="mr-1">LOCK</span>
                                        <span>#23010</span>
                                    </div>
                                    <div className="text-[10px] md:text-xs pl-6 text-right">
                                        <span className="text-content7 dark:text-white mr-1">Deposited:</span>
                                        <span className="text-content3 dark:text-white">0.1028 MONI locked for 4 years</span>
                                    </div>
                                    <div className="text-[10px] md:text-xs pl-20 text-right">
                                        <span className="text-content7 dark:text-white mr-1">Rewards:</span>
                                        <span className="text-content3 dark:text-white">0.1028 MONI </span>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-primary text-xs md:text-[15px] underline w-1/2 text-left md:text-right cursor-pointer">
                                        Withdraw Lock
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <div className="mb-3 md:mb-7">
                        <span className="text-[15px] md:text-[22px] text-black dark:text-white font-semibold">Voting Rewards</span>
                    </div>
                    <div className={liquidityRewards ? 'hidden' : 'block'}>
                        <div className="bg-right-panel dark:bg-darkFooter py-[18px] pr-4 pl-4 md:pl-8 flex gap-5 rounded-lg mt-3 md:mt-7">
                            <FontAwesomeIcon icon={faExclamationCircle} className="text-xs md:text-[14px] text-content8 dark:text-white" />
                            <span className="text-xs md:text-[15px] text-content3 dark:text-white">
                                No rewards found.
                            </span>
                        </div>
                    </div>
                    <div className={liquidityRewards ? 'block' : 'hidden'}>
                        <div className="w-full flex mb-2">
                            <div className='w-8 md:w-10 bg-right-panel dark:bg-bookmark flex justify-center items-center rounded-s-lg'>
                                <div className='uppercase -rotate-90 text-primary text-xs md:text-[15px]'>Berachain</div>
                            </div>
                            <div className="w-full bg-white dark:bg-darkFooter rounded-e-lg pt-[10px] pb-5 px-8">
                                <div className="w-full block md:flex justify-between md:gap-5 pt-4">
                                    <div className="w-full md:w-2/5">
                                        <div className="flex">
                                            <div className="flex">
                                                <Image alt="moni" src={moniImg} className='w-full w-6 md:w-8 h-6 md:h-8' />
                                                <Image alt="usdc" src={usdcImg} className='w-full w-6 md:w-8 h-6 md:h-8 ml-[-10px]' />
                                            </div>
                                            <div className="ml-3">
                                                <div className="text-content3 dark:text-white text-xs md:text-[15px] font-medium mb-4">vAMM-USDC/WETH</div>
                                                <div className="flex gap-1 mb-0 md:mb-4">
                                                    <span className="text-[9px] text-xs text-primary">Basic Volatile · 1.0%</span>
                                                    <FontAwesomeIcon icon={faExclamationCircle} className="text-[11px] md:text-[14px] text-content8 dark:text-white" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full border-partDivider border-t-[1px] my-4 block md:hidden"></div>
                                    <div className="w-full md:w-[35%] text-left md:text-right pl-0 p-0 md:p-4">
                                        <div className="text-content7 text-[10px] md:text-[13px] mb-4 font-bold">Lock #14854</div>
                                        <div className="text-[10px] md:text-xs mb-0 md:mb-4 text-content3 dark:text-white">0.1 MONI locked</div>
                                    </div>
                                    <div className="w-full border-partDivider border-t-[1px] my-4 block md:hidden"></div>
                                    <div className="w-full md:w-[35%] text-left md:text-right pl-0 p-0 md:p-4 flex flex-col justify-between">
                                        <div>
                                            <div className="text-content7 text-[10px] md:text-[13px] mb-4">Rewards</div>
                                            <div className="flex items-center justify-between md:justify-end mb-2">
                                                <div className="flex items-center gap-2">
                                                    <Image src={usdcImg} alt="usdc" className="w-5 h-5 md:w-6 md:h-6" />
                                                    <div className="text-[10px] md:text-xs">
                                                        <span className="text-content7 dark:text-white mr-1">0.0001</span>
                                                        <span className="text-content3 dark:text-white">WETH</span>
                                                    </div>
                                                </div>
                                                <div className="ml-5">
                                                    <button className="text-[10px] md:text-xs text-content7 dark:text-white rounded-lg bg-right-panel dark:bg-bookmark px-[4px] md:px-2 py-[6px] md:py-2 hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-slate-800">
                                                        FEE
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between md:justify-end mb-2">
                                                <div className="flex items-center gap-2">
                                                    <Image src={moniImg} alt="usdc" className="w-5 h-5 md:w-6 md:h-6" />
                                                    <div className="text-[10px] md:text-xs">
                                                        <span className="text-content7 dark:text-white mr-1">0.0001</span>
                                                        <span className="text-content3 dark:text-white">WETH</span>
                                                    </div>
                                                </div>
                                                <div className="ml-5">
                                                    <button className="text-[10px] md:text-xs text-content7 dark:text-white rounded-lg bg-right-panel dark:bg-bookmark px-[4px] md:px-2 py-[6px] md:py-2 hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-slate-800">
                                                        FEE
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between md:justify-end mb-2">
                                                <div className="flex items-center gap-2">
                                                    <Image src={moniImg} alt="usdc" className="w-5 h-5 md:w-6 md:h-6" />
                                                    <div className="text-[10px] md:text-xs">
                                                        <span className="text-content7 dark:text-white mr-1">0.0001</span>
                                                        <span className="text-content3 dark:text-white">WETH</span>
                                                    </div>
                                                </div>
                                                <div className="ml-5">
                                                    <button className="text-[10px] md:text-xs text-content7 dark:text-white rounded-lg bg-right-panel dark:bg-bookmark px-[4px] md:px-2 py-[6px] md:py-2 hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-slate-800">
                                                        INCENTIVES
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between md:justify-end mb-2">
                                                <div className="flex items-center gap-2">
                                                    <Image src={moniImg} alt="usdc" className="w-5 h-5 md:w-6 md:h-6" />
                                                    <div className="text-[10px] md:text-xs">
                                                        <span className="text-content7 dark:text-white mr-1">0.0001</span>
                                                        <span className="text-content3 dark:text-white">WETH</span>
                                                    </div>
                                                </div>
                                                <div className="ml-5">
                                                    <button className="text-[10px] md:text-xs text-content7 dark:text-white rounded-lg bg-right-panel dark:bg-bookmark px-[4px] md:px-2 py-[6px] md:py-2 hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-slate-800">
                                                        INCENTIVES
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full flex justify-start md:justify-end mt-4 md:mt-2">
                                            <div className="text-primary text-xs md:text-[15px] underline w-1/2 text-left md:text-right cursor-pointer">Claim</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}