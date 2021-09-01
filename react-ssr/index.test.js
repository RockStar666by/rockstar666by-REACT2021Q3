import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import store from './src/store';
import App from './src/App';
import About from './src/components/About/About.jsx';
import Details from './src/components/Details/Details.jsx';
import PageNotFound from './src/components/PageNotFound/PageNotFound.jsx';
import * as actions from './src/redux/actions';
import data from './src/redux/reducer';

describe('App', () => {
  it('Render Main Page', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    screen.debug();
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    fireEvent.change(screen.getByPlaceholderText(/Search.../i), { target: { value: 'Hello' } });
    fireEvent.change(screen.getByTestId('sort-by'), { target: { value: 'relevancy' } });
    fireEvent.change(screen.getByTestId('results'), { target: { value: 20 } });
    expect(screen.getByText(/Results/i)).toBeInTheDocument();
    expect(screen.getByText(/relevancy/i)).toBeInTheDocument();
    expect(screen.getByText(/20/i)).toBeInTheDocument();
  });

  it('Render About Us Page', () => {
    render(<About />);
    screen.debug();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
  });

  it('Render Details Page', () => {
    const history = createMemoryHistory();
    const route = '/10';
    history.push(route);
    render(
      <Router history={history}>
        <Details />
      </Router>,
    );
    screen.debug();
    expect(screen.getByText(/Requested topic ID:/i)).toBeInTheDocument();
  });

  it('Render NotFound Page', () => {
    render(<PageNotFound />);
    screen.debug();
    expect(screen.getByText(/Oops/i)).toBeInTheDocument();
  });

  it('Redux Testing', () => {
    render(<PageNotFound />);
    screen.debug();
    expect(screen.getByText(/Oops/i)).toBeInTheDocument();
  });

  it('Set Page Number', () => {
    const initialState = {};
    expect(data(initialState, actions.setCurrentPage(3))).toEqual({
      ...initialState,
      currentPage: 3,
    });
  });

  it('Set Search Value', () => {
    const initialState = {};
    expect(data(initialState, actions.setSearchValue('Apple'))).toEqual({
      ...initialState,
      searchValue: 'Apple',
    });
  });

  it('Set Sorting', () => {
    const initialState = {};
    expect(data(initialState, actions.setSortBy('relevancy'))).toEqual({
      ...initialState,
      sortBy: 'relevancy',
    });
  });

  it('Set Loading State', () => {
    const initialState = {};
    expect(data(initialState, actions.setIsLoading(true))).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('Set Posts Per Page', () => {
    const initialState = {};
    expect(data(initialState, actions.setPostsPerPage(20))).toEqual({
      ...initialState,
      postsPerPage: 20,
    });
  });
});
