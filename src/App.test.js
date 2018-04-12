import { hello, add } from './App';

describe('hello', () => {
    it('should output hello', () => {
        expect(hello()).toBe('Hello');
    });
});

describe('add', () => {
    it('should add two numbers', () => {
        expect(add(1,1)).toBe(2);
        expect(add(1,-1)).toBe(0);
        expect(add(0,0)).toBe(0);
        expect(add(1,2)).toBe(3);
        expect(add(2,2)).toBe(4);
        expect(add(-2,-2)).toBe(-4);
    });
    it('should not add strings', () => {
        expect(add(2,'2')).toBe(null);
    });
    it('should not add objects', () => {
        expect(add(2, {})).toBe(null);
    });
    it('should add floats', () => {
        expect(add(2, 2.2)).toBe(4.2);
    });
    it('should add arrays', () => {
        expect(add(2, [])).toBe(null);
    });
});
