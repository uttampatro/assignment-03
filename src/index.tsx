import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import App from './App';
import history from './history';
import './index.css';
import configureStore from './redux/configureStore';
import { initialReduxStartupScript } from './redux/startupScript';

const store = configureStore();

//@ts-ignore
initialReduxStartupScript(store);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route path="/" component={App} />
                </Switch>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);