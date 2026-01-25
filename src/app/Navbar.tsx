import {Icon} from '@/components/Icon/Icon';
import {Link} from '@/components/Link';
import {Tooltip} from '@/components/Tooltip';
import {Flex, Spacer, styled, VisuallyHidden} from '@/styled-system/jsx';
import {Portal} from '@ark-ui/react';
import {GithubIcon} from 'lucide-react';
import {Lilita_One} from 'next/font/google';

const heading = Lilita_One({
	weight: '400',
	subsets: ['latin'],
	preload: true,
});

export function Navbar() {
	return (
		<styled.header bg="neutral.800">
			<Flex
				h={{
					base: 16,
					lg: 24,
				}}
				px={{
					base: 4,
					lg: 12,
				}}
				alignItems="center"
				maxW="breakpoint-xl"
				mx="auto"
			>
				<Link
					href="/"
					color="transparent"
					fontFamily="var(--font-heading)"
					fontSize={{
						base: '3xl',
						lg: '4xl',
					}}
					fontWeight="black"
					lineHeight="none"
					textTransform="uppercase"
					bgGradient="to-r"
					gradientFrom="pink.500"
					gradientVia="orange.500"
					gradientTo="purple.500"
					backgroundClip="text"
					className={heading.className}
				>
					Pokemon
				</Link>
				<Spacer />
				<Tooltip.Root openDelay={0} closeDelay={0}>
					<Tooltip.Trigger asChild>
						<Link href="https://github.com/calvo-jp/pokemon" prefetch={false}>
							<Icon w={5} h={5} asChild>
								<GithubIcon />
							</Icon>
							<VisuallyHidden>Github</VisuallyHidden>
						</Link>
					</Tooltip.Trigger>
					<Portal>
						<Tooltip.Positioner>
							<Tooltip.Content>
								<Tooltip.Arrow>
									<Tooltip.ArrowTip />
								</Tooltip.Arrow>
								<styled.span>Repository</styled.span>
							</Tooltip.Content>
						</Tooltip.Positioner>
					</Portal>
				</Tooltip.Root>
			</Flex>
		</styled.header>
	);
}
