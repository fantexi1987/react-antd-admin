import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import route from '../route';
// import DevTools from './DevTools';
import { HashRouter as Router } from 'react-router-dom';


// for i18n
import { IntlProvider } from 'react-intl';
import { translationMessages } from '../locales';
import enUS from 'antd/lib/locale-provider/en_US';
import LocaleProvider from 'antd/lib/locale-provider';

const mapStateToProps = (state) => {
    return {
        locale: state.language.locale
    }
};

class Root extends Component {
  render() {
    const { store, locale} = this.props;
    if (!this.route) this.route = route;
;
    const initialMessages = translationMessages[locale];
    window.locale = locale;

    return (
      <Provider store={store}>
        <IntlProvider locale={locale} messages={initialMessages}>
          <LocaleProvider locale={enUS} >
            <Router children={this.route}/>
            {/*<DevTools />*/}
          </LocaleProvider>
        </IntlProvider>
      </Provider>
    );
  }
}

const ConnectedAppIntl = connect(mapStateToProps)(Root);
export default ConnectedAppIntl;

