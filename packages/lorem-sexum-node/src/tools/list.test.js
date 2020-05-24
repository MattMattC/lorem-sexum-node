import ListTool from './list';

test('get random in list', () => {
    const list = ['a', 'b', 'e'];
    expect(ListTool.getRandomInList(list)).toMatch(/a|e|b/);
});

test('get random in list - false', () => {
    const list = ['a', 'b', 'e'];
    expect(ListTool.getRandomInList(list)).not.toBe('c');
});
