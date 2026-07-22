import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = () => {
	return [{ pet: 'code' }, { pet: 'jimi' }];
};
