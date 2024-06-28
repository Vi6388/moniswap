import LogoImage from '@/assets/images/logo.svg';
import Wallet1 from '@/assets/images/wallet1.svg';
import Wallet2 from '@/assets/images/wallet2.svg';
import Wallet3 from '@/assets/images/wallet3.svg';
import Wallet4 from '@/assets/images/wallet4.svg';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, ModalContent } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

type Props = {
  isOpen: boolean;
  onOpenChange: () => void;
};

export const ConnectModal: FC<Props> = ({ isOpen, onOpenChange }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        classNames={{
          base: 'max-w-[1440px] bg-base',
        }}
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <div className="flex dark:bg-dark-base">
                <div className="hidden flex-1 flex-col gap-10 p-10 md:flex">
                  <div className="flex items-center gap-2">
                    <Image src={LogoImage} alt="logo" width={50} />
                    <span className="text-3xl font-semibold">MONISWAP</span>
                  </div>

                  <p className="text-5xl font-medium leading-[60px]">
                    The central trading & liquidity marketplace on 🐻⛓️
                    Berachain
                  </p>

                  <ul className="space-y-5">
                    <li>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-primary"
                        size="xl"
                      />{' '}
                      Low fee, low slippage swaps
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-primary"
                        size="xl"
                      />{' '}
                      Support for stable and volatile pairs
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-primary"
                        size="xl"
                      />{' '}
                      Self-optimizing liquidity flywheel
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-primary"
                        size="xl"
                      />{' '}
                      100% of fees and incentives go to voters
                    </li>
                  </ul>
                </div>
                <div className="flex-1 space-y-8 px-5 py-10 text-content2 max-md:bg-splite-background md:px-20 max-md:dark:bg-dark-base">
                  <div className="flex items-center justify-center gap-2 md:hidden">
                    <Image src={LogoImage} alt="logo" width={34} />
                    <span className="text-xl font-semibold text-black dark:text-white">
                      MONISWAP
                    </span>
                  </div>
                  <div className="space-y-10 rounded-lg bg-black2 p-8">
                    <div className="max-w-[240px] text-xs md:text-sm">
                      You&apos;ll need an EthereumWallet to sign-in.{' '}
                      <Link
                        href={'#'}
                        className="cursor-pointer text-primary underline"
                      >
                        Learn more
                      </Link>{' '}
                      Once connected, you will have to sign a message to confirm
                      that you agree to the{' '}
                      <Link
                        href={'#'}
                        className="cursor-pointer text-primary underline"
                      >
                        legal disclaimer
                      </Link>{' '}
                      before using this website.
                    </div>

                    <div className="space-y-5">
                      <p className="text-xs md:text-sm">Connect with</p>
                      <div className="space-y-2">
                        <div className="flex h-[50px] cursor-pointer items-center rounded-r-lg bg-black3">
                          <div className="h-full w-[10px] rounded-l-lg bg-content5"></div>
                          <div className="flex items-center gap-3 px-5 max-md:text-sm">
                            <Image src={Wallet1} alt="wallet image" />
                            Connect with Browser Wallet
                          </div>
                        </div>
                        <div className="flex h-[50px] cursor-pointer items-center rounded-r-lg bg-black3">
                          <div className="h-full w-[10px] rounded-l-lg bg-content5"></div>
                          <div className="flex items-center gap-3 px-5 max-md:text-sm">
                            <Image src={Wallet2} alt="wallet image" />
                            Connect with WalletConnect
                          </div>
                        </div>
                        <div className="flex h-[50px] cursor-pointer items-center rounded-r-lg bg-black3">
                          <div className="h-full w-[10px] rounded-l-lg bg-content5"></div>
                          <div className="flex items-center gap-3 px-5 max-md:text-sm">
                            <Image src={Wallet3} alt="wallet image" />
                            Connect with Coinbase Wallet
                          </div>
                        </div>
                        <div className="flex h-[50px] cursor-pointer items-center rounded-r-lg bg-black3">
                          <div className="h-full w-[10px] rounded-l-lg bg-content5"></div>
                          <div className="flex items-center gap-3 px-5 max-md:text-sm">
                            <Image src={Wallet4} alt="wallet image" />
                            Connect with Rabby Wallet
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="font-medium text-black1 max-md:text-xs dark:text-white">
                    2024 &copy; Moniswap{' '}
                  </p>
                </div>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
