import  * as React from 'react';
import Progressbar from '../../components/Progressbar/Progressbar';
import Quote from '../../components/Quote/Quote';
import Notes from '../../components/Notes/Notes';


interface IquotesState {
    count?: number | null ;
    maxCount?: number;
    notes?: string[] | undefined; 
    disabled?: boolean;
}
 export default class Quotes extends React.Component<any, IquotesState> {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      maxCount: 10,
      notes: [], 
      disabled: false
    }
  }
  public addNote(note: string) {
      const notes: string[] | undefined = this.state.notes;
      let count;
      if (notes.length < 10) {
        notes.push(note);
        count = notes.length;

        this.setState({ notes, count }); 
      } else {
        this.setState({ disabled: true });
      }
  }
  public deleteNotes(id) {
      const { notes } = this.state;
      const value = notes[id];
      const index = notes.indexOf(value);
      let count;

      if (index > -1 ) {
        notes.splice(index, 1);
        count = notes.length;

        this.setState({ notes, count, disabled: count <= 10 ? false : true });
      }
      
  }
  public render() {
    const { notes, count, maxCount, disabled} = this.state;
    return (
        <div>
            <React.Fragment>
                <Progressbar count={ count } maxCount={maxCount} />
                <Quote addNote={ (note) => this.addNote(note)} disable={disabled}/>
                <Notes notes={ notes } deleteNotes={ (id) => this.deleteNotes(id) }/>
            </React.Fragment>
        </div>
    );
  }
}
