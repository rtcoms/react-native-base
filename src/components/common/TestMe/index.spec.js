import React from 'react';
import enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.3';

import TestMe from './index';

enzyme.configure({ adapter: new Adapter() });

describe('TestMe component', () => {
  it('can mount with Enzyme', () => {
    const onSubmit = jest.fn();
    const wrapper = mount(
      <TestMe
        message={'hello'}
        onSubmit={onSubmit}
      />
    );

    const message = wrapper.find('Text')
      .first();

    expect(message)
      .toExist();

    expect(message.text())
      .toEqual('Message: hello'); // Useless, covered by snapshots

    wrapper.instance()
      .onNameChange('frankito');

    wrapper.instance()
      .onButtonPress();

    expect(onSubmit)
      .toHaveBeenCalledWith('frankito');
  });
});
