import { writable } from 'svelte/store';

export const count = writable({
    options: {},
    active: false
});