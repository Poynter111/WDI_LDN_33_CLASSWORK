/* global describe, it, before, after, beforeEach */

import React from 'react';
import Promise from 'bluebird';
import axios from 'axios';
import sinon from 'sinon';
import _ from 'lodash';
import {expect} from 'chai';
import {mount} from 'enzyme';
import {MemoryRouter as Router} from 'react-router-dom';
import BurgersIndex from '../../../src/components/burgers/Index';

const burgerData = [{
  _id: 1,
  name: 'Holy Smokes',
  restaurant: 'Burger Priest',
  price: 1,
  address: '3397 Yonge St. Toronto, ON, Canada M4N 2M7',
  location: {
    lat: 43.6666944,
    lng: -79.3155959
  },
  description: 'Double Cheeseburger Topped With Smoke Panko Crusted Deep Fried Jalapenos',
  image: 'https://www.theburgerspriest.com/wp-content/uploads/2012/10/BP-web-11.jpg'
}, {
  _id: 2,
  name: 'California',
  restaurant: 'Honest Burger',
  address: 'Widegate St, London E1 7HP, UK',
  location: {
    lat: 51.518159,
    lng: -0.078075
  },
  price: 2,
  description: 'Mustard-fried beef, bacon, American cheese, burger sauce, onion, tomato, pickle and lettuce with rosemary salted chips',
  image: 'https://www.honestburgers.co.uk/wp-content/uploads/2018/04/california-page.jpg'
}, {
  _id: 3,
  name: 'Auburger',
  restaurant: 'The Vurger Co',
  address: '9, Avant Garde Richmix Square, Cygnet St, London E1',
  location: {
    lat: 51.5240377,
    lng: -0.0727817
  },
  suitableFor: ['vegetarian', 'vegan', 'dairy-free'],
  price: 2,
  description: 'Aubergine, caramelised red onion and Tabasco Chipotle chickpea patty with pickled red cabbage, gherkins, cheese and our house cumin mayo.',
  image: 'https://static1.squarespace.com/static/5794c448bebafb2f11804d9e/t/5a1204d871c10ba553380f93/1511130360834/theAUBURGER.jpg?format=750w'
}, {
  _id: 4,
  name: 'Bacon Burger',
  restaurant: 'Five Guys',
  address: '9/11 Villiers St.Charing Cross London WC2N 6NA',
  location: {
    lat: 51.508217,
    lng: -0.123829},
  price: 3,
  description: 'regular two-patty burger, layered with four pieces of crispy, sweet apple-wood smoked bacon.',
  image: 'https://c1.staticflickr.com/8/7154/6711547597_6649b8ed97_b.jpg'
}];

describe('BurgersIndex', () => {
  let wrapper;
  let promise;

  before(done => {
    promise = Promise.resolve({ data: burgerData });
    sinon.stub(axios, 'get').returns(promise);
    done();
  });

  after(done => {
    axios.get.restore();
    done();
  });

  beforeEach(done => {
    wrapper = mount(
      <Router>
        <BurgersIndex />
      </Router>
    );
    done();
  });

  it('should display a map', done => {
    promise.then(() => {
      wrapper.update();
      expect(wrapper.find('div.map').length).to.eq(1);
      done();
    });
  });
  it('should display 4 cards when the Grid button is clicked', done => {
    promise.then(() => {
      wrapper.find('.buttons').childAt(1).simulate('click');
      wrapper.update();
      // console.log(wrapper.debug());
      expect(wrapper.find('div.card').length).to.eq(burgerData.length);
      done();
    });
  });
  it('Should display the correct image and title and bla bla bla', done => {
    promise.then(() => {
      wrapper.find('.buttons').childAt(1).simulate('click');
      wrapper.update();
      _.orderBy(burgerData, 'name', 'asc').forEach((burger, index) => {
        expect(wrapper.find('.title').at(index).text()).to.eq(burger.name);
        expect(wrapper.find('.subtitle').at(index).text()).to.eq(burger.restaurant);
        expect(wrapper.find('.card-image').at(index).prop('style').backgroundImage)
          .to.include(burger.image);
      });
      done();
    });
  });

  it('Should change the order of the burgers when the sort drop down is changed', done => {
    promise.then(() => {
      wrapper.find('.buttons').childAt(1).simulate('click');
      wrapper.find('select').simulate('change', { target: { name: 'sort', value: 'name|desc' } });
      wrapper.update();
      _.orderBy(burgerData, 'name', 'desc').forEach((burger, index) => {
        expect(wrapper.find('.title').at(index).text()).to.eq(burger.name);
        expect(wrapper.find('.subtitle').at(index).text()).to.eq(burger.restaurant);
        expect(wrapper.find('.card-image').at(index).prop('style').backgroundImage)
          .to.include(burger.image);
      });
      done();
    });
  });
  it('should create a link for each burger', done => {
    promise.then(() => {
      wrapper.find('.buttons').childAt(1).simulate('click');
      wrapper.update();
      burgerData.forEach(burger => {
        expect(wrapper.find({ href: `/burgers/${burger._id}`}).length).to.eq(1);
      });
      done();
    });
  });
//-----------------END----------------------------------------------------------
});
