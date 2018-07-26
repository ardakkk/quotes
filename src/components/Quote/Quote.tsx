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
                <div>
                    <textarea cols={100} rows={10} onChange={ (e) => console.log(e.target.value) }/>
                </div>
                <button type="button" className="btn btn-primary btn-lg">Add Quote</button>
            </React.Fragment>
        )
  }
}
