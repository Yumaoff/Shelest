import React from 'react';
import ExampleCardUI from '../ui/example-card/example-card';

export interface IExample {
	id?: number;
	title?: string;
	description?: string;
	image?: string;
}

interface IExampleCardProps {
	example: IExample;
}

export const ExampleCard: React.FC<IExampleCardProps> = ({ example }) => {
	const { title, description, image } = example;
	const Click = () => {
		alert(`Clicked Card`);
	};
	return (
		<ExampleCardUI
			title={title}
			description={description}
			image={image}
			onClick={Click}
		/>
	);
};

export default ExampleCard;
