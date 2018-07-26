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
            <section>
                <Quotes/>
            </section>
        </div>
        </Layout>
    );
    }
}

export default App;
