import { StoryFn, Meta } from '@storybook/react';
import ButtonUI from '../components/ui/button/button';

export default {
	title: 'UI/Button',
	component: ButtonUI,
	tags: ['autodocs'],
	parameters: {
		default: 'dark',
		backgrounds: {
			default: 'dark',
		},
	},
} as Meta<typeof ButtonUI>;

const Template: StoryFn<typeof ButtonUI> = (args) => <ButtonUI {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	text: 'заказать монтаж',
	color: 'primary',
	onClick: () => alert('Clicked'),
};

export const Secondary = Template.bind({});
Secondary.args = {
	text: 'заказать монтаж',
	color: 'secondary',
	onClick: () => alert('Clicked'),
};

export const Link = Template.bind({});
Link.args = {
	text: 'заказать монтаж',
	color: 'link',
	onClick: () => alert('Clicked'),
};

export const Disabled = Template.bind({});
Disabled.args = {
	text: 'заказать монтаж',
	disabled: true,
	onClick: () => alert('Clicked'),
};
