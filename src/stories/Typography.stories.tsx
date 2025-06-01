// src/stories/Fonts.stories.tsx
import '../fonts/font.scss';
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

interface FontPreviewProps {
	fontFamily: string;
	fontWeight: number | string;
	fontStyle?: string;
	children: React.ReactNode;
}

const FontPreview: React.FC<FontPreviewProps> = ({
	fontFamily,
	fontWeight,
	fontStyle = 'normal',
	children,
}) => (
	<div
		style={{
			fontFamily,
			fontWeight,
			fontStyle,
			marginBottom: '2rem',
			lineHeight: '1.5',
		}}
	>
		<h3 style={{ marginBottom: '0.5rem' }}>
			{fontFamily} {fontWeight} {fontStyle}
		</h3>
		<p style={{ margin: 0 }}>{children}</p>
		<p style={{ margin: '0.5rem 0 0', opacity: 0.7 }}>
			ABCDEFGHIJKLMNOPQRSTUVWXYZ
			<br />
			abcdefghijklmnopqrstuvwxyz
			<br />
			0123456789!@#$%^&*()_+-=
		</p>
	</div>
);

const meta: Meta = {
	title: 'Design System/Fonts',
	component: FontPreview,
};

export default meta;

type Story = StoryObj<typeof FontPreview>;

export const AllFonts: Story = {
	render: () => (
		<div style={{ padding: '2rem' }}>
			<h2>Основные шрифты проекта</h2>

			<h3 style={{ margin: '2rem 0 1rem', borderBottom: '1px solid #eee' }}>
				Inter (основной текст)
			</h3>
			<FontPreview fontFamily='Inter' fontWeight={400}>
				Регулярный текст - Lorem ipsum dolor sit amet, consectetur adipiscing
				elit.
			</FontPreview>

			<h3 style={{ margin: '2rem 0 1rem', borderBottom: '1px solid #eee' }}>
				Unbounded (заголовки секций)
			</h3>
			<FontPreview fontFamily='Unbounded' fontWeight={400}>
				Регулярный текст - Заголовки секций в обычном начертании
			</FontPreview>
			<FontPreview fontFamily='Unbounded' fontWeight={700}>
				Жирный текст - Важные заголовки секций
			</FontPreview>

			<h3 style={{ margin: '2rem 0 1rem', borderBottom: '1px solid #eee' }}>
				Polonium (Logo)
			</h3>
			<FontPreview fontFamily='Polonium' fontWeight={700}>
				Главные заголовки - Bold начертание для акцентных заголовков
			</FontPreview>
		</div>
	),
};

export const TextStyles: Story = {
	render: () => (
		<div style={{ padding: '2rem' }}>
			<h1 style={{ fontFamily: 'Polonium', fontWeight: 700 }}>
				Заголовок H1 (Polonium Bold)
			</h1>
			<h2 style={{ fontFamily: 'Unbounded', fontWeight: 700 }}>
				Заголовок H2 (Unbounded Bold)
			</h2>
			<h3 style={{ fontFamily: 'Unbounded', fontWeight: 400 }}>
				Заголовок H3 (Unbounded Regular)
			</h3>
			<p style={{ fontFamily: 'Inter', fontWeight: 400 }}>
				Основной текст (Inter Regular) - Lorem ipsum dolor sit amet, consectetur
				adipiscing elit.
			</p>
		</div>
	),
};
