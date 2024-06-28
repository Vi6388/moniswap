"use client";

import { WalletListModal } from "@/components/connectModal/WalletListModal";
import { faAngleDown, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDisclosure } from '@nextui-org/react';
import Link from "next/link";
import { useEffect, useState } from "react";

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

export default function DepositLiquidity() {
    const [firstToken, setFirstToken]: any = useState({});
    const [secondToken, setSecondToken]: any = useState({});
    const { isOpen, onOpenChange } = useDisclosure();

    const openFirstToken = () => {
        console.log(firstToken)
        setFirstToken(walletList[1]);
        onOpenChange();
    }

    const openSecondToken = () => {
        setSecondToken(walletList[4]);
        onOpenChange();
    }

    return (
        <div className="container m-auto w-[330px] md:w-[1155px] py-3 md:py-5">
            <div className="mb-5 md:mb-10 mt-2   md:mt-[75px]">
                <span className="text-[15px] md:text-[22px] text-black dark:text-white font-semibold">Deposit Liquidity</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <div className="col-span-1 rounded-lg bg-white dark:bg-darkFooter px-3 md:px-5 py-4 md:py-6">
                    <div className="text-black dark:text-white text-[11px] md:text-[15px] mb-4 md:mb-5">First Token</div>

                    <div className="w-full rounded-lg h-11 md:h-14 bg-white dark:bg-transparent border border-content2 pl-[10px] pr-4 md:pl-4 md:pr-6 
                                    flex items-center justify-between cursor-pointer" onClick={openFirstToken}>
                        <div className='flex items-center'>
                            {Object.keys(firstToken).length === 0 ?
                                <span className='font-normal text-xs md:text-[15px] text-black1 dark:text-white'>Select Token</span> :
                                <div className='flex items-center'>
                                    <img alt={firstToken?.name} src={firstToken?.icon?.src} className='w-full h-5 md:h-6 pr-[10px]' />
                                    <span className='uppercase font-medium text-xs md:text-base text-black1 dark:text-white'>{firstToken?.name}</span>
                                </div>
                            }
                        </div>
                        <FontAwesomeIcon icon={faAngleDown} className="text-xl text-arrow" />
                    </div>
                </div>
                <div className="col-span-1 rounded-lg bg-white dark:bg-darkFooter px-3 md:px-5 py-4 md:py-6">
                    <div className="text-black dark:text-white text-[11px] md:text-[15px] mb-4 md:mb-5">Second Token</div>

                    <div className="w-full rounded-lg h-11 md:h-14 bg-white dark:bg-transparent border border-content2 pl-[10px] pr-4 md:pl-4 md:pr-6 
                                    flex items-center justify-between cursor-pointer" onClick={openSecondToken}>
                        <div className='flex items-center'>
                            {Object.keys(secondToken).length === 0 ?
                                <span className='font-normal text-xs md:text-[15px] text-black1 dark:text-white'>Select Token</span> :
                                <div className='flex items-center'>
                                    <img alt={secondToken?.name} src={secondToken?.icon?.src} className='w-full h-5 md:h-6 pr-[10px]' />
                                    <span className='uppercase font-medium text-xs md:text-base text-black1 dark:text-white'>{secondToken?.name}</span>
                                </div>
                            }
                        </div>
                        <FontAwesomeIcon icon={faAngleDown} className="text-xl text-arrow" />
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <div className={Object.keys(firstToken).length === 0 || Object.keys(secondToken).length === 0 ? "block" : "hidden"}>
                    <div className="bg-right-panel dark:bg-darkFooter py-4 pr-4 pl-4 md:pl-8 flex gap-5 rounded-lg">
                        <FontAwesomeIcon icon={faExclamationCircle} className="text-xs md:text-[14px] text-content8 dark:text-white" />
                        <span className="text-xs md:text-[15px] text-content8 dark:text-white">Start by selecting the tokens. The liquidity pools available for deposit will show up next.</span>
                    </div>
                </div>

                <div className={"mt-12 " + (Object.keys(firstToken).length !== 0 && Object.keys(secondToken).length !== 0 ? "block" : "hidden")}>
                    <div className="mb-7">
                        <div className="text-xs text-content7 font-normal mb-7">Available Pools</div>
                        <div className="w-full flex mb-2">
                            <div className='w-8 md:w-10 bg-right-panel dark:bg-bookmark flex justify-center items-center rounded-s-lg'>
                                <div className='uppercase -rotate-90 text-primary text-xs md:text-[15px]'>Berachain</div>
                            </div>
                            <div className="w-full bg-white dark:bg-darkFooter rounded-e-lg pt-10 pb-5">
                                <div className="w-full block md:flex justify-between pr-4">
                                    <div className="w-full md:w-[30%] flex">
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
                                    <div className="w-full md:w-[17%] text-left md:text-right pl-5 md:pl-0">
                                        <div className="text-content7 text-[10px] md:text-[13px] mb-4">TVL</div>
                                        <div className="text-content3 dark:text-white text-[10px] md:text-[13px] mb-4">42,677.31 $</div>
                                        <div className="w-full border-partDivider border-t-[1px] my-4 block md:hidden"></div>
                                    </div>
                                    <div className="w-full md:w-[17%] text-left md:text-right pl-5 md:pl-0">
                                        <div className="text-content7 text-[10px] md:text-[13px] mb-4">APR</div>
                                        <div className="text-content3 dark:text-white text-[10px] md:text-[13px] mb-4">21.34%</div>
                                        <div className="w-full border-partDivider border-t-[1px] my-4 block md:hidden"></div>
                                    </div>
                                    <div className="w-full md:w-[17%] flex justify-start md:justify-end pl-5 md:pl-0 pr-2">
                                        <div>
                                            <Link href="/components/liquidity/newDeposit" className="px-4 md:px-5 py-2 md:py-3 border border-content2 bg-transparent flex items-center rounded-lg hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-slate-800">
                                                <span className="text-[10px] md:text-[13px] text-content3 ml-2 dark:text-white">New Deposit</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-7">
                        <div className="text-xs text-content7 font-normal mb-7">Low Liquidity Pools</div>
                        <div className="w-full flex mb-2">
                            <div className='w-8 md:w-10 bg-right-panel dark:bg-bookmark flex justify-center items-center rounded-s-lg'>
                                <div className='uppercase -rotate-90 text-primary text-xs md:text-[15px]'>Berachain</div>
                            </div>
                            <div className="w-full bg-white dark:bg-darkFooter rounded-e-lg pt-10 pb-5">
                                <div className="w-full block md:flex justify-between pr-4">
                                    <div className="w-full md:w-[30%] flex">
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
                                    <div className="w-full md:w-[17%] text-left md:text-right pl-5 md:pl-0">
                                        <div className="text-content7 text-[10px] md:text-[13px] mb-4">TVL</div>
                                        <div className="text-content3 dark:text-white text-[10px] md:text-[13px] mb-4">42,677.31 $</div>
                                        <div className="w-full border-partDivider border-t-[1px] my-4 block md:hidden"></div>
                                    </div>
                                    <div className="w-full md:w-[17%] text-left md:text-right pl-5 md:pl-0">
                                        <div className="text-content7 text-[10px] md:text-[13px] mb-4">APR</div>
                                        <div className="text-content3 dark:text-white text-[10px] md:text-[13px] mb-4">21.34%</div>
                                        <div className="w-full border-partDivider border-t-[1px] my-4 block md:hidden"></div>
                                    </div>
                                    <div className="w-full md:w-[17%] flex justify-start md:justify-end pl-5 md:pl-0 pr-2">
                                        <div>
                                            <Link href="/components/liquidity/newDeposit" className="px-4 md:px-5 py-2 md:py-3 border border-content2 bg-transparent flex items-center rounded-lg hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-slate-800">
                                                <span className="text-[10px] md:text-[13px] text-content3 ml-2 dark:text-white">New Deposit</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <WalletListModal isOpen={isOpen} onOpenChange={onOpenChange} />
            <WalletListModal isOpen={isOpen} onOpenChange={onOpenChange} />
        </div>
    )
}