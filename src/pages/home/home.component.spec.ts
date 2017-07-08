import 'reflect-metadata';

import HomeComponent from './home.component';

test('HomeComponent#test should return 1', () => {
    const homeComponent = new HomeComponent();
    expect(homeComponent.test()).toBe(1);
});
