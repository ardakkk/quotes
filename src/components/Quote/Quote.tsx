import * as React from 'react'
import './Quote.scss';


interface IQuoteState {
    value?: string;
}
export default class Quote extends React.Component<any, IQuoteState> {
    public state = {
        value: ''
    }
    
    public add() {
        const { value } = this.state;
        if (value) {
            this.props.addNote(value);
            this.setState({ value: '' });
        }
      
    }
    public render() {
        return (
            <React.Fragment>
                <h1>Quote</h1>
                <div>
                    <textarea cols={100} rows={10} onChange={ (e) => this.setState({ value: e.target.value }) } placeholder={'Enter your note here...'} value={this.state.value}/>
                </div>
                <button type="button" className="btn btn-primary btn-lg" onClick={ (e) => this.add() } disabled={ this.props.disable }>Add Quote</button>
            </React.Fragment>
        )
  }
}
