/* global describe, it */

import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import BurgersForm from '../../../src/components/burgers/Form';

describe('BurgersForm', () => {
  it('should render 4 input fields and 1 select field', done => {
    const state = {
      errors: {}
    };

    const component = shallow(<BurgersForm burger={state} errors={state.errors} />);
    expect(component.find('input').length).to.eq(3);
    expect(component.find('select').length).to.eq(1);
    done();
  });

  it('should populate the Form', done => {
    const state = {
      name: 'name',
      restaurant: 'restaurant',
      price: 1,
      image: 'image',
      errors: {}
    };
    const component = shallow(<BurgersForm burger={state} errors={state.errors} />);
    expect(component.find({ value: 'name', name: 'name' }).length).to.eq(1);
    expect(component.find({ value: 'restaurant', name: 'restaurant' }).length).to.eq(1);
    expect(component.find({ value: 1, name: 'price' }).length).to.eq(1);
    expect(component.find({ value: 'image', name: 'image' }).length).to.eq(1);
    done();
  });

  it('should display errors', done => {
    const state = {
      errors: {
        name: 'This field is required',
        restaurant: 'This field is required',
        image: 'This field is required',
        price: 'This field is required'
      }
    };
    const component = shallow(<BurgersForm burger={state} errors={state.errors} />);
    expect(component.find('small').length).to.eq(4);
    done();
  });
});
