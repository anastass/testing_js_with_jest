export const hello = () => 'Hello';

export const add = (x, y) => { 
    if (typeof x === 'number' && typeof y  === 'number') return x + y;
    return null;
};