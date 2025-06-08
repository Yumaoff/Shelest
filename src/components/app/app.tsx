import './app.scss';
import { LOCALES, messages } from '../../services/index';
import { IntlProvider } from 'react-intl';
import { useState } from 'react';
import { AppHeader } from '@components';

function App() {
	const getInitialLocale = () => {
		const savedLocale = localStorage.getItem('locale');
		return savedLocale || LOCALES.RUSSIAN;
	};

	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleDemoClick = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const handleSubmitForm = (data: any) => {
		console.log('Form submitted:', data);
	};

	const [currentLocale, setCurrentLocale] = useState(getInitialLocale());
	const handleLocaleChange = (locale: string) => {
		setCurrentLocale(locale);
		localStorage.setItem('locale', locale);
	};

	return (
		<IntlProvider locale={currentLocale} messages={messages[currentLocale]}>
			<AppHeader
				currentLanguage={currentLocale}
				onLanguageChange={handleLocaleChange}
			/>
		</IntlProvider>
	);
}

export default App;
