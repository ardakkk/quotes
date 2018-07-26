import * as React from 'react';
import './Notes.scss';


const Notes = (props) => {
    return (
        <React.Fragment>
            <div className="Notes">
                {
                    props.notes.map( (note, id) => {
                        return (
                            <div className="Note" key={id}>
                                <button className="Delete" onClick={ () => props.deleteNotes(id) }>×</button>
                                    { note }
                            </div>
                        );
                    })
                }
            </div>
        </React.Fragment>
    );
}

export default Notes;