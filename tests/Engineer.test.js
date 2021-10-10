const Engineer = require('../lib/Engineer');

test('create engineer', () => {
    const engineer = new Engineer('Sarah', 27, 'sarahnmaskill@gmail.com','sarahmaskill');

    expect(engineer.github).toEqual(expect.any(String));
});


test('engineer github', () => {
    const engineer = new Engineer('Sarah', 27, 'sarahnmaskill@gmail.com', 'sarahmaskill');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.email.toString()));
});

test('engineer role', () => {
    const engineer = new Engineer('Sarah', 27, 'sarahnmaskill@gmail.com','sarahmaskill');

    expect(engineer.getRole()).toEqual("Engineer");
});
