'use client';

import {Icon} from '@/components/Icon';
import {Pagination as Primitive} from '@/components/Pagination';
import {ChevronLeftIcon, ChevronRightIcon} from 'lucide-react';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';

interface PaginationProps {
	page: number;
	size: number;
	count: number;
}

export function Pagination(props: PaginationProps) {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	function setValue(value: {page: number; pageSize: number}) {
		const newSearchParams = new URLSearchParams(searchParams);
		newSearchParams.set('page', value.page.toString());
		newSearchParams.set('size', value.pageSize.toString());
		router.push(`${pathname}?${newSearchParams.toString()}`);
	}

	return (
		<Primitive.Root
			mt={{
				base: 4,
				lg: 12,
			}}
			count={props.count}
			/* @ts-expect-error "Conflicting types" */
			page={props.page}
			pageSize={props.size}
			onPageSizeChange={(details) => {
				setValue({page: 1, ...details});
			}}
			onPageChange={(details) => {
				setValue(details);
			}}
		>
			<Primitive.PrevTrigger>
				<Icon w={5} h={5} asChild>
					<ChevronLeftIcon />
				</Icon>
			</Primitive.PrevTrigger>
			<Primitive.Context>
				{(api) =>
					api.pages.map((page, index) => {
						if (page.type === 'page') {
							return (
								<Primitive.Item
									key={index}
									display={{
										base: 'none',
										lg: 'flex',
									}}
									{...page}
								>
									{page.value}
								</Primitive.Item>
							);
						}

						return (
							<Primitive.Ellipsis
								key={index}
								index={index}
								display={{
									base: 'none',
									lg: 'flex',
								}}
							>
								...
							</Primitive.Ellipsis>
						);
					})
				}
			</Primitive.Context>
			<Primitive.NextTrigger>
				<Icon w={5} h={5} asChild>
					<ChevronRightIcon />
				</Icon>
			</Primitive.NextTrigger>
		</Primitive.Root>
	);
}
