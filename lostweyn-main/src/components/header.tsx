// components
import Image from 'next/image';
import Link from 'next/link';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Header = ({ className, ...props }: Props) => {
	return (
		<header className={`w-full p-4 z-50 fixed top-0 left-0 ${className}`} {...props}>
			<div className='max-w-screen-lg lg:px-4 h-full mx-auto px-8 py-2 flex justify-between items-center gap-4 backdrop-blur-sm rounded-3xl bg-white/10'>
				<div className='flex items-center gap-4'>
					<Link href='/' className='flex justify-start items-center gap-4 text-xl'>
						<Image src='/logo.png' alt='lostweyn' width={50} height={50} />
						Lostweyn
					</Link>
				</div>
				<div className='flex items-center gap-4 justify-end'>
					<Link className='py-2 px-4 bg-white rounded-md text-black text-base' href='/download'>
						присоединиться
					</Link>
				</div>
			</div>
		</header>
	);
};
