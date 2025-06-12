import { AppSectionUI } from '@ui';
import { ExampleCard } from '../example-card';
import { IExample } from '../example-card/example-card';

const EXAMPLE_CARDS: IExample[] = [
	{
		id: 1,
		title: 'Пример работы 1',
		description: 'Креативный монтаж для бренда одежды',
		image: 'src/assets/person1.jpg',
	},
	{
		id: 2,
		title: 'Пример работы 2',
		description: 'Рекламный ролик для кафе',
		image: 'src/assets/person1.jpg',
	},
	{
		id: 3,
		title: 'Пример работы 3',
		description: 'Видеопрезентация продукта',
		image: 'src/assets/person1.jpg',
	},
];

export const ExampleSection = () => {
	return (
		<AppSectionUI title='Примеры работ' subTitle='Примеры работ'>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
					gap: '20px',
					padding: '20px 0',
				}}
			>
				{EXAMPLE_CARDS.map((card) => (
					<ExampleCard key={card.id} example={card} />
				))}
			</div>
		</AppSectionUI>
	);
};
