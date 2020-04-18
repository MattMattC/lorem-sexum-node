import { generateFromNbWords } from './words';
import structure from '../content/structure';

test('words generator', () => {
    expect(structure.randomList).toEqual(
        expect.arrayContaining(generateFromNbWords(2).split(' '))
    );
});

test('words generator type string', () => {
    expect(typeof generateFromNbWords(3)).toEqual('string');
});

test('words generator length', () => {
    expect(generateFromNbWords(3).split(' ')).toHaveLength(3);
});

test('words generator begin sentence length is same', () => {
    expect(generateFromNbWords(3, 'Lorem Sexum').split(' ')).toHaveLength(3);
});

test('words generator begin sentence works', () => {
    expect(generateFromNbWords(3, 'Lorem Sexum')).toMatch(/^Lorem Sexum/);
});

test('words generator with list Words', () => {
    expect(
        generateFromNbWords(1, null, ['baguette', 'fromage', 'vin'])
    ).toMatch(/baguette|fromage|vin/);
});

test('words generator with list Words', () => {
    expect(
        generateFromNbWords(3, null, ['baguette', 'fromage', 'vin'])
    ).toMatch(/(baguette|fromage|vin|\s){5}/);
});
