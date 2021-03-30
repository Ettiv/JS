import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ErrorBoundry from './components/error-boundry/';
import RestoService from './services/resto-service';
import RestoServiceContext from './components/resto-service-context';
import store  from './store';

import './index.scss';

const resstoService = new RestoService();


ReactDOM.render(
    <Provider store={store}>
    {/* всё что будет ниже,сможет достучаться до хранилища */}
        <ErrorBoundry>
            <RestoServiceContext.Provider value={resstoService}>
                <Router>
                    <App/>
                </Router>
            </RestoServiceContext.Provider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));

