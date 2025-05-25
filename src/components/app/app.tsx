import './app.scss';

import { LOCALES } from '../../services/i18n/locales';
import { messages } from '../../services/i18n/messages';
import { IntlProvider } from 'react-intl';
// import { AppHeader } from '@components';

function App() {
	const locale = LOCALES.RUSSIAN;

	return (
		<IntlProvider
			messages={messages[locale]}
			locale={locale}
			defaultLocale={LOCALES.RUSSIAN}
		>
			{/* <AppHeader /> */}
		</IntlProvider>
	);
}

export default App;
