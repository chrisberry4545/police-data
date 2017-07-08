import 'reflect-metadata';

import AboutComponent from './about.component';

test('AboutComponent#test should return 1', () => {
    const aboutComponent = new AboutComponent();
    expect(aboutComponent.test()).toBe(1);
});
