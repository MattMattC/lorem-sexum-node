import conjugator from './index';
import structure from '../../content/structure';

test('conjugue manger with je', () => {
    const pronom = structure.sujets.pronoms[0];
    pronom.type = 'structure.sujets.pronoms';
    expect(conjugator(pronom, { value: 'manger', degre: 1 })).toBe('mange');
});

test('conjugue manger with nous', () => {
    const pronom = structure.sujets.pronoms[5];
    pronom.type = 'structure.sujets.pronoms';
    expect(conjugator(pronom, { value: 'manger', degre: 1 })).toBe('mangons');
});

test('conjugue finir with nous', () => {
    const pronom = structure.sujets.pronoms[5];
    pronom.type = 'structure.sujets.pronoms';
    expect(conjugator(pronom, { value: 'finir', degre: 2 })).toBe('finissons');
});

test('conjugue verbe without degre', () => {
    const pronom = structure.sujets.pronoms[5];
    pronom.type = 'structure.sujets.pronoms';
    
    expect(() => {
        conjugator(pronom, { value: 'finir' });
    }).toThrow('degre is required');
});

test('conjugue verbe with bad degre', () => {
    const pronom = structure.sujets.pronoms[5];
    pronom.type = 'structure.sujets.pronoms';
    
    expect(() => {
        conjugator(pronom, { value: 'finir', degre: 5 });
    }).toThrow('degre is required of 1, 2 or 3');
});
