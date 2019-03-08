import React, { Component } from 'react';
import logo from './logo.svg';
import Script from 'react-load-script';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scriptLoaded: false,
            scriptError: false
        };
    }
    handleScriptCreate() {
        this.setState({ scriptLoaded: false });
    }
    handleScriptError() {
        this.setState({ scriptError: true });
    }
    handleScriptLoad() {
        this.setState({ scriptLoaded: true });
    }
    render() {
        return (
            <div className="container">
                <section>
                    <h1>Section 1</h1>
                </section>
                <section>
                    <h1>Section 2</h1>
                </section>
                <section>
                    <h1>Section 3</h1>
                </section>
                <section>
                    <h1>Section 4</h1>
                </section>
                <Script
                    url="../utils/scrollsnap-polyfill.bundled.js"
                    onCreate={this.handleScriptCreate.bind(this)}
                    onError={this.handleScriptError.bind(this)}
                    onLoad={this.handleScriptLoad.bind(this)}
                />
            </div>
        );
    }
}

export default App;
