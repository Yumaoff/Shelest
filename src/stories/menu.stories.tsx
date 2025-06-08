import { StoryFn, Meta } from '@storybook/react';
import { IntlProvider } from 'react-intl';
import { Menu } from '../components/menu/menu';

export default {
	title: 'UI/Menu',
	component: Menu,
	tags: ['autodocs'],
	parameters: {
		default: 'dark',
		backgrounds: {
			default: 'dark',
		},
	},
	decorators: [
		(Story) => (
			<IntlProvider locale='en' defaultLocale='en'>
				<Story />
			</IntlProvider>
		),
	],
} as Meta<typeof Menu>;

const handleDemoClick = () => {
	alert('Modal open');
};

const Template: StoryFn<typeof Menu> = (args) => <Menu {...args} />;

export const HeaderMenu = Template.bind({});
HeaderMenu.args = {
	variant: 'header',
};

export const FooterMenu = Template.bind({});
FooterMenu.args = {
	variant: 'footer',
	onDemoClick: handleDemoClick,
};

export const MobileMenu = Template.bind({});
MobileMenu.args = {
	variant: 'mobile',
	onDemoClick: handleDemoClick,
};
