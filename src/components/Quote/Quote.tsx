import * as React from 'react'

interface IquoteState {
    value?: string;
}
export default class Quote extends React.Component<any, IquoteState> {
    public state = {
        value: ''
    }
    
    public render() {
        return (
            <React.Fragment>
                <h1>Quote</h1>
                <textarea cols={140} rows={10} onChange={ (e) => console.log(e.target.value) }/>
            </React.Fragment>
        )
  }
}
