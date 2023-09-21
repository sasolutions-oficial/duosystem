import {atom} from 'jotai';

export const sortToDoByDateState = atom<'asc' | 'desc'>('asc');
export const sortDoneByDateState = atom<'asc' | 'desc'>('asc');
