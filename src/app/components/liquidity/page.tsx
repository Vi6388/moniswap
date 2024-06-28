"use client";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { faExclamationCircle, faPiggyBank, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import pigIcon from '@/assets/images/pig-icon.svg';
import pigIconWhite from '@/assets/images/pig-icon-white.svg';
import Image from "next/image";
import Link from "next/link";

const walletList = [
    { id: 1, icon: require('@/assets/images/wallet_list/bera.png')?.default, name: 'bera', walletAddress: '0xafb8...e4df6', balance: 41.75, equivalentValue: -0.2946 },
    { id: 2, icon: require('@/assets/images/wallet_list/honey.png')?.default, name: 'honey', walletAddress: '0xafb8...e4df6', balance: 41.75, equivalentValue: -0.2946 },
    { id: 3, icon: require('@/assets/images/wallet_list/bgt.png')?.default, name: 'bgt', walletAddress: '0xafb8...e4df6', balance: 41.75, equivalentValue: -0.2946 },
    { id: 4, icon: require('@/assets/images/wallet_list/moni.png')?.default, name: 'moni', walletAddress: '0xafb8...e4df6', balance: 41.75, equivalentValue: -0.2946 },
    { id: 5, icon: require('@/assets/images/wallet_list/usdc.png')?.default, name: 'usdc', walletAddress: '0xafb8...e4df6', balance: 41.75, equivalentValue: -0.2946 },
    { id: 6, icon: require('@/assets/images/wallet_list/wbtc.png')?.default, name: 'wbtc', walletAddress: '0xafb8...e4df6', balance: 41.75, equivalentValue: -0.2946 },
    { id: 7, icon: require('@/assets/images/wallet_list/eth.png')?.default, name: 'eth', walletAddress: '0xafb8...e4df6', balance: 41.75, equivalentValue: -0.2946 },
    { id: 8, icon: require('@/assets/images/wallet_list/kdk.png')?.default, name: 'kdk', walletAddress: '0xafb8...e4df6', balance: 41.75, equivalentValue: -0.2946 },
];

const poolList = [
    {
        id: 1, poolName: "vAMM-USDC/WETH", apy: '21.34', basicVolatile: '1.0', tvl: '5,720,909.92',
        estimated1Amount: '1,047,503.13', amount11: '421,311.49', amount11Unit: 'usdc', amount12: '4,490,332.54', amount12Unit: 'moni',
        estimated2Amount: '1,047,503.13', amount21: '421,311.49', amount21Unit: 'usdc', amount22: '4,490,332.54', amount22Unit: 'moni',
        amount31: '421,311.49', amount31Unit: 'usdc', amount32: '4,490,332.54', amount32Unit: 'moni',
    },
    {
        id: 2, poolName: "vAMM-USDC/WETH", apy: '21.34', basicVolatile: '1.0', tvl: '5,720,909.92',
        estimated1Amount: '1,047,503.13', amount11: '421,311.49', amount11Unit: 'usdc', amount12: '4,490,332.54', amount12Unit: 'moni',
        estimated2Amount: '1,047,503.13', amount21: '421,311.49', amount21Unit: 'usdc', amount22: '4,490,332.54', amount22Unit: 'moni',
        amount31: '421,311.49', amount31Unit: 'usdc', amount32: '4,490,332.54', amount32Unit: 'moni',
    },
    {
        id: 3, poolName: "vAMM-USDC/WETH", apy: '21.34', basicVolatile: '1.0', tvl: '5,720,909.92',
        estimated1Amount: '1,047,503.13', amount11: '421,311.49', amount11Unit: 'usdc', amount12: '4,490,332.54', amount12Unit: 'moni',
        estimated2Amount: '1,047,503.13', amount21: '421,311.49', amount21Unit: 'usdc', amount22: '4,490,332.54', amount22Unit: 'moni',
        amount31: '421,311.49', amount31Unit: 'usdc', amount32: '4,490,332.54', amount32Unit: 'moni',
    },
    {
        id: 4, poolName: "vAMM-USDC/WETH", apy: '21.34', basicVolatile: '1.0', tvl: '5,720,909.92',
        estimated1Amount: '1,047,503.13', amount11: '421,311.49', amount11Unit: 'usdc', amount12: '4,490,332.54', amount12Unit: 'moni',
        estimated2Amount: '1,047,503.13', amount21: '421,311.49', amount21Unit: 'usdc', amount22: '4,490,332.54', amount22Unit: 'moni',
        amount31: '421,311.49', amount31Unit: 'usdc', amount32: '4,490,332.54', amount32Unit: 'moni',
    },
    {
        id: 5, poolName: "vAMM-USDC/WETH", apy: '21.34', basicVolatile: '1.0', tvl: '5,720,909.92',
        estimated1Amount: '1,047,503.13', amount11: '421,311.49', amount11Unit: 'usdc', amount12: '4,490,332.54', amount12Unit: 'moni',
        estimated2Amount: '1,047,503.13', amount21: '421,311.49', amount21Unit: 'usdc', amount22: '4,490,332.54', amount22Unit: 'moni',
        amount31: '421,311.49', amount31Unit: 'usdc', amount32: '4,490,332.54', amount32Unit: 'moni',
    },
    {
        id: 6, poolName: "vAMM-USDC/WETH", apy: '21.34', basicVolatile: '1.0', tvl: '5,720,909.92',
        estimated1Amount: '1,047,503.13', amount11: '421,311.49', amount11Unit: 'usdc', amount12: '4,490,332.54', amount12Unit: 'moni',
        estimated2Amount: '1,047,503.13', amount21: '421,311.49', amount21Unit: 'usdc', amount22: '4,490,332.54', amount22Unit: 'moni',
        amount31: '421,311.49', amount31Unit: 'usdc', amount32: '4,490,332.54', amount32Unit: 'moni',
    }
];

export default function Liquidity() {
    const [selectedSwap, setSelectedSwap]: any = useState({});
    const [selectedFor, setSelectedFor]: any = useState({});
    const [selectedPool, setSelectedPool] = useState('active');

    useEffect(() => {
        const selectedSwap = walletList.filter((item) => item.name === 'moni')[0];
        const selectedFor = walletList.filter((item) => item.name === 'bera')[0];
        if (selectedSwap) {
            setSelectedSwap(selectedSwap);
        }
        if (selectedFor) {
            setSelectedFor(selectedFor);
        }
    }, [])

    return (
        <div className="container m-auto w-[330px] md:w-[1155px] py-3 md:py-5">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-5">
                <div className="col-span-1 md:col-span-5 bg-white dark:bg-darkFooter rounded-[10px] py-8 pl-6 pr-8">
                    <div className="block md:flex md:justify-between">
                        <div className="w-full md:w-3/5">
                            <div className="text-base md:text-lg">
                                <span className="text-black dark:text-white font-medium">Liquidity Providers</span>
                                <span className="text-black1 dark:text-white font-normal">
                                    (LPs) make low-slippage swaps possible. Deposit and Stake liquidity to earn <span className="uppercase">{selectedSwap?.name}</span>.
                                </span>
                            </div>
                            <div className="md:flex md:justify-between md:gap-5 mt-8">
                                <div className="flex justify-center w-full">
                                    <button className="text-[10px] md:text-xs text-content3 dark:text-white rounded-lg bg-right-panel dark:bg-bookmark px-5 md:px-7 py-3 md:py-4 hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-slate-800">
                                        TVL ~$155,990,746.33
                                    </button>
                                </div>
                                <div className="flex justify-center w-full mt-3 md:mt-0">
                                    <button className="text-[10px] md:text-xs text-content3 dark:text-white rounded-lg bg-right-panel dark:bg-bookmark px-5 md:px-7 py-3 md:py-4 hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-slate-800">
                                        Fees ~$97,287.43
                                    </button>
                                </div>
                                <div className="flex justify-center w-full mt-3 md:mt-0">
                                    <button className="text-[10px] md:text-xs text-content3 dark:text-white rounded-lg bg-right-panel dark:bg-bookmark px-5 md:px-7 py-3 md:py-4 hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-slate-800">
                                        Volume ~$93,411,625.51
                                    </button>
                                </div>
                            </div>

                            <div className="block md:hidden">
                                <div className="w-full border-partDivider border-t-[1px] mt-5 mb-4"></div>
                                <div>
                                    <span className="text-content3 dark:text-white text-sm leading-normal">There are currently 131 tokens listed.
                                        <span className="underline cursor-pointer">See all tokens</span> or
                                        <span className="underline cursor-pointer"> request a new token listing.</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-2/5 text-left md:text-right mt-5 md:mt-0">
                            <Link
                                href="/components/liquidity/depositLiquidity"
                                className="bg-transparent border border-content2 rounded-lg px-5 py-3 text-content3 dark:text-white text-sm md:text-base hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-slate-800"
                            >
                                Deposit Liquidity
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block w-full">
                        <div className="w-full border-partDivider border-t-[1px] mt-8 mb-9"></div>
                        <div>
                            <span className="text-content3 dark:text-white text-base leading-normal">There are currently 131 tokens listed.
                                <span className="underline cursor-pointer"> See all tokens</span> or
                                <span className="underline cursor-pointer"> request a new token listing.</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-2 bg-white dark:bg-darkFooter rounded-[10px] py-8 pl-6 pr-8">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <div className="text-base md:text-lgtext-black dark:text-white font-medium">
                                How it works
                            </div>
                            <div className="mt-4 leading-[18px]">
                                <span className="text-content3 dark:text-white text-[15px]">
                                    The deeper the liquidity (TVL), the lower the slippage a pool will offer. LPs get MONI emissions, while veMONI lockers get the pool trading fees as an incentive to vote on the most productive pools.
                                </span>
                            </div>
                        </div>
                        <div className="mt-5 md:mt-0">
                            <span className="text-content3 dark:text-white text-[15px] leading-normal underline cursor-pointer pr-2">Read More</span>
                            <FontAwesomeIcon icon={faQuestionCircle} className="text-xs" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Start Liquidity Pools */}
            <div className="mt-11">
                <span className="text-[15px] md:text-[22px] text-black dark:text-white font-semibold">Liquidity Pools</span>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-7 gap-5">
                    <div className="col-span-1 md:col-span-5 w-full">
                        <div className="pointer-events-auto flex divide-x divide-[#F6F5F5] overflow-hidden rounded-md w-full overflow-x-auto justify-between
                                        bg-white text-[0.8125rem] shadow-sm ring-1 ring-white text-black1 h-9 md:h-[42px] dark:bg-transparent">
                            <div className={"px-auto py-3 text-[10px] md:text-[13px] font-normal cursor-pointer flex justify-center min-w-20 w-full " + (selectedPool === 'active' ? 'bg-primary text-white' : '')}>
                                Active
                            </div>
                            <div className="px-auto py-3 active:bg-primary active:text-white hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-slate-800
                                            text-[10px] md:text-[13px] font-normal cursor-pointer dark:text-white flex justify-center min-w-20 w-full">
                                Stable
                            </div>
                            <div className="px-auto py-3 active:bg-primary active:text-white hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-slate-800
                                            text-[10px] md:text-[13px] font-normal cursor-pointer dark:text-white flex justify-center min-w-20 w-full">
                                Concentrated
                            </div>
                            <div className="px-auto py-3 active:bg-primary active:text-white hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-slate-800
                                            text-[10px] md:text-[13px] font-normal cursor-pointer dark:text-white flex justify-center min-w-20 w-full">
                                Incentivised
                            </div>
                            <div className="px-auto py-3 active:bg-primary active:text-white hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-slate-800
                                            text-[10px] md:text-[13px] font-normal cursor-pointer dark:text-white flex justify-center min-w-20 w-full">
                                Low<span className="pl-1">TVL</span>
                            </div>
                            <div className="px-auto py-3 active:bg-primary active:text-white hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-slate-800
                                            text-[10px] md:text-[13px] font-normal cursor-pointer dark:text-white flex justify-center min-w-20 w-full">
                                Participating
                            </div>
                            <div className="px-auto py-3 active:bg-primary active:text-white hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-slate-800
                                            text-[10px] md:text-[13px] font-normal cursor-pointer dark:text-white flex justify-center min-w-20 w-full">
                                All<span className="pl-1">Pools</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex justify-end w-full mt-3 md:mt-0">
                            <div className='relative w-full dark:border-white dark:border rounded-lg'>
                                <div className='absolute left-3 top-[6px] md:top-[10px]'>
                                    <FontAwesomeIcon icon={faSearch} className='text-content3 dark:text-white' />
                                </div>
                                <input type="text" className='w-full rounded-lg bg-white h-9 md:h-[42px] pl-9 pr-4 md:pr-6 dark:text-white
                                                                  focus:outline-none focus:border-content2 font-medium text-[11px] md:text-[13px]
                                                                  text-content7 dark:bg-transparent'
                                    placeholder='Symbol or address' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* start liquidity pools table */}
                <div className="w-full">
                    {/* start table header */}
                    <div className="w-full hidden md:flex md:justify-between px-4 py-2 bg-white dark:bg-darkFooter rounded-lg my-4">
                        <div className="uppercase text-content7 text-[10px] md:text-[13px] w-[32%]">liquidity pool</div>
                        <div className="uppercase text-content7 text-[10px] md:text-[13px] text-right w-[17%]">apr</div>
                        <div className="uppercase text-content7 text-[10px] md:text-[13px] text-right w-[17%]">volume</div>
                        <div className="uppercase text-content7 text-[10px] md:text-[13px] text-right w-[17%]">fees</div>
                        <div className="uppercase text-content7 text-[10px] md:text-[13px] text-right pr-3 w-[17%]">pool balance</div>
                    </div>
                    {/* end table header */}

                    {/* start table body */}
                    <div className="mt-4 md:mt-0">
                        {poolList.map((item, i) => {
                            return (
                                <div className="w-full flex mb-2" key={i}>
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
                                                    <div className="text-content3 dark:text-white text-xs md:text-[15px] font-medium mb-4">{item.poolName}</div>
                                                    <div className="flex gap-1 mb-4">
                                                        <span className="text-[9px] text-xs text-primary">Basic Volatile · {item.basicVolatile}%</span>
                                                        <FontAwesomeIcon icon={faExclamationCircle} className="text-[11px] md:text-[14px] text-content8 dark:text-white" />
                                                    </div>
                                                    <div className="hidden md:block text-[9px] md:text-xs text-content7">TVL~${item.tvl}</div>
                                                </div>
                                            </div>
                                            <div className="w-full md:w-[17%] text-left md:text-right pl-5 md:pl-0">
                                                <div className="block md:hidden text-[9px] md:text-xs text-content7 pb-4">TVL~${item.tvl}</div>
                                                <div className="text-content3 dark:text-white text-[10px] md:text-[13px]">{item.apy}%</div>
                                                <div className="w-full border-partDivider border-t-[1px] my-4 block md:hidden"></div>
                                            </div>
                                            <div className="w-full md:w-[17%] text-left md:text-right pl-5 md:pl-0">
                                                <div className="text-content7 text-[10px] md:text-[13px] mb-4 block md:hidden">Volumne</div>
                                                <div className="text-content3 dark:text-white text-[10px] md:text-[13px] mb-4">~${item.estimated1Amount}</div>
                                                <div className="text-content7 text-[10px] md:text-[13px] mb-4">
                                                    {item.amount11}
                                                    <span className="uppercase"> {item.amount11Unit}</span>
                                                </div>
                                                <div className="text-content7 text-[10px] md:text-[13px] mb-4">
                                                    {item.amount12}
                                                    <span className="uppercase"> {item.amount12Unit}</span>
                                                </div>
                                                <div className="w-full border-partDivider border-t-[1px] my-4 block md:hidden"></div>
                                            </div>
                                            <div className="w-full md:w-[17%] text-left md:text-right pl-5 md:pl-0">
                                                <div className="text-content7 text-[10px] md:text-[13px] mb-4 block md:hidden">Fees</div>
                                                <div className="text-content3 dark:text-white text-[10px] md:text-[13px] mb-4">~${item.estimated2Amount}</div>
                                                <div className="text-content7 text-[10px] md:text-[13px] mb-4">
                                                    {item.amount21}
                                                    <span className="uppercase"> {item.amount21Unit}</span>
                                                </div>
                                                <div className="text-content7 text-[10px] md:text-[13px] mb-4">
                                                    {item.amount22}
                                                    <span className="uppercase"> {item.amount22Unit}</span>
                                                </div>
                                                <div className="w-full border-partDivider border-t-[1px] my-4 block md:hidden"></div>
                                            </div>
                                            <div className="w-full md:w-[17%] text-left md:text-right pl-5 md:pl-0 pr-2">
                                                <div className="text-content7 text-[10px] md:text-[13px] mb-4 block md:hidden">Pool Balance</div>
                                                <div className="text-content7 dark:text-white text-[10px] md:text-[13px] mb-4">
                                                    {item.amount31}
                                                    <span className="uppercase"> {item.amount31Unit}</span>
                                                </div>
                                                <div className="text-content7 dark:text-white text-[10px] md:text-[13px] mb-4">
                                                    {item.amount32}
                                                    <span className="uppercase"> {item.amount32Unit}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full flex justify-start md:justify-end pr-6 ml-5 md:ml-0">
                                            <button className="px-4 md:px-5 py-2 md:py-3 border border-content2 bg-transparent flex items-center rounded-lg hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-slate-800">
                                                <Image alt="pig" src={pigIcon} className="text-[13px] md:text-base text-content3 dark:hidden" />
                                                <Image alt="pig" src={pigIconWhite} className="text-[13px] md:text-base text-content3 dark:block hidden" />
                                                <span className="text-[10px] md:text-[13px] text-content3 ml-2 dark:text-white">Deposit</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    {/* end table body */}
                </div>
                {/* end liquidity pools table */}
            </div>
            {/* End Liquidity Pools */}
        </div>
    )
}