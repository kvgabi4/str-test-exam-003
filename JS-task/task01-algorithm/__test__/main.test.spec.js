const { customerList, customerFilter } = require('../main');

describe('JS algoritmus teszt customer listára', () => {

    test('Nem létező névre szűrés', () => {
        const results = customerFilter(customerList, 'Józsika', 30);
        expect(results.length).toBe(0);
    });
    
    test('Túl nagy rating -re szűrés', () => {
        const results = customerFilter(customerList, 'Jaime Briscoe', 6);
        expect(results.length).toBe(0);
    });
    
    test('Egy lehetséges találat', () => {
        const results = customerFilter(customerList, 'Jaime Briscoe', 3);
        expect(results.length).toBe(1);
    });
    
    test('Kettő lehetséges találat', () => {
        const results = customerFilter(customerList, 'yl', 2);
        expect(results.length).toBe(2);
    });
    
    test('Az eredmény megfelelő neveket tartalmaz', () => {
        const results = customerFilter(customerList, 'll', 2);
        expect(results.length).toBe(3);
        expect(results[0]).toBe('Shell Habbin');
        expect(results[1]).toBe('Phyllys Mattiazzi');
        expect(results[2]).toBe('Sylvester Merrill');
    });    
    
});
