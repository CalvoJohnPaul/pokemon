'use client';

import dark from '@/assets/images/dark.svg';
import electric from '@/assets/images/electric.svg';
import fairy from '@/assets/images/fairy.svg';
import fighter from '@/assets/images/fighter.svg';
import fire from '@/assets/images/fire.svg';
import grass from '@/assets/images/grass.svg';
import ground from '@/assets/images/ground.svg';
import metal from '@/assets/images/metal.svg';
import poison from '@/assets/images/poison.svg';
import rock from '@/assets/images/rock.svg';
import steel from '@/assets/images/steel.svg';
import water from '@/assets/images/water.svg';
import {Icon} from '@/components/Icon';
import {Image} from '@/components/Image';
import {Select} from '@/components/Select';
import {Box, styled} from '@/styled-system/jsx';
import {createListCollection, Portal} from '@ark-ui/react';
import {useControllableState} from '@radix-ui/react-use-controllable-state';
import {CheckIcon, ChevronDownIcon, XIcon} from 'lucide-react';

interface TypeFilterProps {
	value?: string[];
	defaultValue?: string[];
	onChange?: (value: string[]) => void;
}

export function TypeFilter(props: TypeFilterProps) {
	const [value, setValue] = useControllableState({
		prop: props.value,
		defaultProp: props.defaultValue ?? [],
		onChange: props.onChange,
	});

	return (
		<Select.Root
			w={{
				base: '75%',
				lg: '18rem',
			}}
			flexShrink={0}
			flexGrow={{
				base: 1,
				lg: 0,
			}}
			name="type"
			value={value}
			onValueChange={(details) => {
				setValue(details.value);
			}}
			multiple
			lazyMount
			collection={collection}
			positioning={{
				sameWidth: true,
			}}
		>
			<Select.Control>
				<Select.Trigger>
					<Select.ValueText flexGrow={1}>
						<Select.Context>
							{(api) =>
								api.value.length <= 0
									? 'Choose Types'
									: api.value.length > 1
										? `${collection.stringify(api.value[0])} and ${api.value.length - 1} more`
										: `${collection.stringify(api.value[0])}`
							}
						</Select.Context>
					</Select.ValueText>
					<Select.ClearTrigger asChild>
						<Box>
							<Icon w={5} h={5} asChild>
								<XIcon />
							</Icon>
						</Box>
					</Select.ClearTrigger>
					<Select.Indicator>
						<Icon w={6} h={6} asChild>
							<ChevronDownIcon />
						</Icon>
					</Select.Indicator>
				</Select.Trigger>
			</Select.Control>
			<Select.HiddenSelect />
			<Portal>
				<Select.Positioner>
					<Select.Content>
						<Select.ItemGroup id="1">
							{collection.items.map((item) => (
								<Select.Item key={item.value} item={item}>
									<Select.ItemText>
										<Image src={item.image} alt="" w={5} h={5} />
										<styled.span>{item.label}</styled.span>
									</Select.ItemText>
									<Select.ItemIndicator>
										<Icon w={4} h={4} asChild>
											<CheckIcon />
										</Icon>
									</Select.ItemIndicator>
								</Select.Item>
							))}
						</Select.ItemGroup>
					</Select.Content>
				</Select.Positioner>
			</Portal>
		</Select.Root>
	);
}

const collection = createListCollection({
	items: [
		{
			label: 'Dark',
			value: 'dark',
			image: dark,
		},
		{
			label: 'Electric',
			value: 'electric',
			image: electric,
		},
		{
			label: 'Fairy',
			value: 'fairy',
			image: fairy,
		},
		{
			label: 'Fighter',
			value: 'fighter',
			image: fighter,
		},
		{
			label: 'Fire',
			value: 'fire',
			image: fire,
		},
		{
			label: 'Grass',
			value: 'grass',
			image: grass,
		},
		{
			label: 'Ground',
			value: 'ground',
			image: ground,
		},
		{
			label: 'Metal',
			value: 'metal',
			image: metal,
		},
		{
			label: 'Poison',
			value: 'poison',
			image: poison,
		},
		{
			label: 'Rock',
			value: 'rock',
			image: rock,
		},
		{
			label: 'Steel',
			value: 'steel',
			image: steel,
		},
		{
			label: 'Water',
			value: 'water',
			image: water,
		},
	],
});
