import { AppSectionUI } from '@ui';

export const AboutSection = () => {
	return (
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
				<img src='src\assets\person1.png' />
			</div>
		</AppSectionUI>
	);
};
