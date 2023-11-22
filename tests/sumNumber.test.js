const { sumNumberLogN, sumNumberLog1 } = require('../src/sumNumber');

describe('01 - Teste de funcionalidade - Complexidade O(n)', () => {
    test('valor 10 no parâmetro da função retorna 23?', () => {
        expect(sumNumberLogN(10)).toBe(23);
    });

    test('valor 11 no parâmetro da função retorna 33?', () => {
        expect(sumNumberLogN(11)).toBe(33);
    });
});

describe('02 - Teste de funcionalidade - Complexidade O(1)', () => {
    test('valor 10 no parâmetro da função retorna 23?', () => {
        expect(sumNumberLog1(10)).toBe(23);
    });

    test('valor 10 no parâmetro da função retorna 23?', () => {
        expect(sumNumberLog1(11)).toBe(33);
    });
});
