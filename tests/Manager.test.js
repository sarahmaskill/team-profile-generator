const Manager = require('../lib/Manager');

test('create manager', () => {
    const manager = new Manager('Sarah', 27, 'sarahnmaskill@gmail.com', 6);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});


test('manager role', () => {
    const manager = new Manager('Sarah', 27, 'sarahnmaskill@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
});
