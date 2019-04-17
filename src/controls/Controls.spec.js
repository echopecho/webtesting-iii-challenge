import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer';

import Controls from './Controls';
import { get } from 'https';

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

  it('should match the snapshot when locked and closed', () => {
    const tree = renderer.create(<Controls locked={true} closed={true} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should match the snapshot when not locked and closed', () => {
    const tree = renderer.create(<Controls locked={false} closed={true} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should match the snapshot when not locked and not closed', () => {
    const tree = renderer.create(<Controls locked={false} closed={false} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should match the snapshot when locked and not closed', () => {
    const tree = renderer.create(<Controls locked={true} closed={false} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});