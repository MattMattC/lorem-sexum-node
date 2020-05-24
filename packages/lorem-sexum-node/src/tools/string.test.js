import StringTool from './string';

test('Begin by a Vovwel true', () => {
    expect(StringTool.beginByVowel('italie')).toBe(true);
});

test('Begin by a Vovwel false', () => {
    expect(StringTool.beginByVowel('france')).toBe(false);
});

test('sentence begin by a Vovwel false', () => {
    expect(StringTool.beginByVowel('je mange des échalottes')).toBe(false);
});
