import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, ModalContent } from '@nextui-org/react';
import { FC, useState } from 'react';

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

type Props = {
    isOpen: boolean;
    onOpenChange: () => void;
};

export const WalletListModal: FC<Props> = ({ isOpen, onOpenChange }) => {
    const [searchCount, setSearchCount] = useState(85);
    return (
        <>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                backdrop="blur"
                classNames={{
                    base: 'bg-base dark:bg-darkFooter',
                }}
                placement="center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <div className='w-full p-5 md:p-8'>
                                <div className='relative'>
                                    <div className='absolute left-4 top-4'>
                                        <FontAwesomeIcon icon={faSearch} className='text-content3 dark:text-white' />
                                    </div>
                                    <input type="text" className='w-full rounded-lg h-11 md:h-14 bg-white border border-inputBorder pl-12 pr-4 md:pr-6 dark:text-white
                                                                  focus:outline-none focus:border-[#F59855] font-medium text-xs md:text-base text-black1 dark:bg-transparent'
                                        placeholder='WETH, USDC, 0x...' />
                                </div>

                                <div className='py-5 border-content1 border-b-[1px] flex justify-between'>
                                    <div className='font-normal text-content5 text-xs md:text-sm'>{searchCount} Tokens</div>
                                    <div className='font-normal text-content5 text-xs md:text-sm'>Balance</div>
                                </div>

                                <div className='mt-4'>
                                    {walletList?.map((item, i) => {
                                        return (
                                            <div key={i} className='flex gap-4 w-full p-4 cursor-pointer hover:bg-dark-card rounded-lg
                                                hover:bg-[#ffecc1] hover:text-slate-900 dark:hover:bg-slate-800'>
                                                <div className='w-12 md:w-[52px]'>
                                                    <img alt={item?.name} src={item?.icon?.src} className='w-full h-10 md:h-12' />
                                                </div>
                                                <div className='flex justify-between w-[90%]'>
                                                    <div className=''>
                                                        <div className='text-black text-xs md:text-base font-bold uppercase dark:text-white'>{item?.name}</div>
                                                        <div className='mt-1 text-[10px] text-sm font-normal dark:text-white'>{item?.walletAddress}</div>
                                                    </div>
                                                    <div>
                                                        <div className='text-black text-xs md:text-base font-medium dark:text-white'>{item?.balance}</div>
                                                        <div className='mt-1 text-[10px] text-sm font-normal dark:text-white'>{item?.equivalentValue}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};
