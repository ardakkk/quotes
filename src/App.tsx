import * as React from 'react';
import './App.scss';
import './assets/main.scss';
import Quotes from './containers/Quotes/Quotes';
import Layout from './hoc/Layout';


class App extends React.Component {
    public render() {
    return (
        <Layout>
            <div className="App">
            <header className="App-header">
                <h1 className="App-title">Quotes</h1>
            </header>
            <section>
                <Quotes/>
            </section>
        </div>
        </Layout>
    );
    }
}

export default App;
