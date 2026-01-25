import '@/assets/styles/globals.css';
import {cx} from '@/styled-system/css';
import {styled} from '@/styled-system/jsx';
import type {Metadata} from 'next';
import {Fira_Code, Lato} from 'next/font/google';
import type {PropsWithChildren} from 'react';
import {Navbar} from './Navbar';

const sans = Lato({
	style: ['normal', 'italic'],
	weight: ['400', '700', '900'],
	subsets: ['latin'],
	display: 'swap',
	preload: true,
	variable: '--font-sans',
});

const mono = Fira_Code({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
	preload: true,
	variable: '--font-mono',
});

const title = 'Pokemon';
const description =
	'Dive into our Pokémon hub! Explore the entire Pokédex with details on each Pokémon—stats, types, evolutions, and more. Your go-to resource for all things Pokémon!';

export const metadata: Metadata = {
	title: {
		default: title,
		template: `%s | ${title}`,
	},
	metadataBase: new URL('https://calvojp-pokemon.vercel.app'),
	openGraph: {
		title: 'Pokemon',
		description,
		images: ['/banner.png'],
		siteName: 'Pokemon',
	},
};

export default function Layout({children}: PropsWithChildren) {
	return (
		<styled.html
			lang="en"
			className={cx(sans.variable, mono.variable)}
			colorScheme="dark"
			overflowY="scroll"
			scrollBehavior="smooth"
		>
			<styled.body bg="neutral.900" color="neutral.100" fontFamily="sans" minH="dvh">
				<Navbar />
				<styled.main
					maxW="breakpoint-xl"
					mx="auto"
					px={{
						base: 4,
						lg: 12,
					}}
					py={{
						base: 4,
						lg: 16,
					}}
				>
					{children}
				</styled.main>
			</styled.body>
		</styled.html>
	);
}
