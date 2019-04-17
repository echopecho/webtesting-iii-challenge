import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer';

import Controls from './Controls';

describe('the Controls component', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<Controls />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should match the snapshot when closed', () => {
    const tree = renderer.create(<Controls closed={true} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should match the snapshot when not closed', () => {
    const tree = renderer.create(<Controls close={false} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should match the snapshot when locked', () => {
    const tree = renderer.create(<Controls locked={true} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should match the snapshot when not locked', () => {
    const tree = renderer.create(<Controls locked={false} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});