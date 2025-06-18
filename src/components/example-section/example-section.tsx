import { ExampleCard } from '../example-card';
import { IExample } from '../example-card/example-card';
import { ExampleSectionUI } from '@ui';

const EXAMPLE_CARDS: IExample[] = [
	{
		id: 1,
		title: 'Пример работы 1',
		description: 'Креативный монтаж для бренда одежды',
		image: 'src/assets/person1.png',
	},
	{
		id: 2,
		title: 'Пример работы 2',
		description: 'Креативный монтаж для бренда одежды',
		image: 'src/assets/person1.png',
	},
	{
		id: 3,
		title: 'Пример работы 3',
		description: 'Креативный монтаж для бренда одежды',
		image: 'src/assets/person1.png',
	},
	{
		id: 3,
		title: 'Пример работы 3',
		description: 'Креативный монтаж для бренда одежды',
		image: 'src/assets/person1.png',
	},
	{
		id: 3,
		title: 'Пример работы 3',
		description: 'Креативный монтаж для бренда одежды',
		image: 'src/assets/person1.png',
	},
];

export const ExampleSection = () => {
	return (
		<ExampleSectionUI title='Примеры работ' subTitle='Примеры работ'>
			{EXAMPLE_CARDS.map((card) => (
				<ExampleCard key={card.id} example={card} />
			))}
		</ExampleSectionUI>
	);
};
