import  * as React from 'react';
import Progressbar from '../../components/Progressbar/Progressbar';
import Quote from '../../components/Quote/Quote';

export default class IApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
        <div>
            <React.Fragment>
                <Progressbar/>
                <Quote/>
            </React.Fragment>
        </div>
    );
  }
}
