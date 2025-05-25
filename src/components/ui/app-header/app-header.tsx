import styles from './app-header.module.scss';

import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { TAppHeaderUIProps } from './types';

const menu = [
	{
		key: 'about_company',
		path: '#',
	},
	{
		key: 'how_it_work',
		path: '#',
	},
	{
		key: 'features',
		path: '#',
	},
];

export const AppHeaderUI: FC<TAppHeaderUIProps> = () => (
	<header className={styles.header}>
		<nav>
			<ul className={styles.menu}>
				{menu.map(({ path, key }) => (
					<li key={key}>
						<a href={path}>
							<FormattedMessage id={key} />
						</a>
					</li>
				))}
			</ul>
		</nav>
		<button className={styles.button}>ru</button>
		<button className={styles.button}>en</button>
	</header>
);
