import './app.scss';
import { LOCALES, messages } from '../../services/index';
import { IntlProvider } from 'react-intl';
import { useState } from 'react';
import { AppHeader, Marquee } from '@components';
import { AppFooterUI } from '../ui/app-footer';
import {
	AboutSection,
	ExampleSection,
	ClientsSection,
	ReelsSection,
} from '@components';

function App() {
	const getInitialLocale = () => {
		const savedLocale = localStorage.getItem('locale');
		return savedLocale || LOCALES.RUSSIAN;
	};

	const [currentLocale, setCurrentLocale] = useState(getInitialLocale());
	const handleLocaleChange = (locale: string) => {
		setCurrentLocale(locale);
		localStorage.setItem('locale', locale);
	};

	return (
		<IntlProvider locale={currentLocale} messages={messages[currentLocale]}>
			<div className='app'>
				<AppHeader
					currentLanguage={currentLocale}
					onLanguageChange={handleLocaleChange}
				/>

				<main>
					<AboutSection />
					<Marquee text={'СКИДКА 10%'} speed={20} />
					<ExampleSection />
					<ClientsSection />
					<ReelsSection />
				</main>

				<AppFooterUI />
			</div>
		</IntlProvider>
	);
}

export default App;
