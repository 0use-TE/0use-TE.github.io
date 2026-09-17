import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Theme = 'light' | 'dark';

const defaultValue: Theme = 'light';
const initialValue = browser
	? ((window.localStorage.getItem('theme') as Theme | null) ?? defaultValue)
	: defaultValue;

export const theme = writable<Theme>(initialValue);

theme.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('theme', value);
		document.documentElement.setAttribute('data-theme', value);
	}
});

export function setTheme(next: Theme) {
	theme.set(next);
}

export function toggleTheme() {
	theme.update((t) => (t === 'light' ? 'dark' : 'light'));
}
