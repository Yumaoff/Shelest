import './app.scss';
import { LOCALES, messages } from '../../services/index';
import { IntlProvider } from 'react-intl';
import { useState } from 'react';
import { AppHeader } from '@components';
import { AppSectionUI } from '@ui';
import { AppFooterUI } from '../ui/app-footer';

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
			<AppHeader
				currentLanguage={currentLocale}
				onLanguageChange={handleLocaleChange}
			/>
			<AppSectionUI title={'Елизавета SHELEST'} subTitle='ОБО МНЕ'>
				<span>МОНТИРУЮ С ЛЮБОВЬЮ</span>
				<p>
					Всю жизнь занимаюсь творчеством, создаю монтаж, который помогает моим
					клиентам увеличить прибыть и привлечь людей
				</p>
				<p>
					Сильные стороны: - индивидуальный подход - работаю на качество - не
					нарушаю дедлайны - знаю как выделить ваш ролик среди других
				</p>
				<div className='imgBack'>
					{' '}
					<img src='src\assets\person1.png' />{' '}
				</div>
			</AppSectionUI>
			<AppFooterUI></AppFooterUI>
		</IntlProvider>
	);
}

export default App;
