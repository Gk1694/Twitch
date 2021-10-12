import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from './stream/StreamCreate';
import StreamEdit from './stream/StreamEdit';
import StreamDelete from './stream/StreamDelete';
import StreamList from './stream/StreamList';
import StreamShow from './stream/StreamShow';


const App = () => {
    return (
    <div>
        <h1>header!</h1>
        <BrowserRouter>
            <div>
                <Route path="/" exact component={StreamList} />
                <Route path="/stream/new" exact component={StreamCreate} />
                <Route path="/stream/edit" exact component={StreamEdit} />
                <Route path="/stream/delete" exact component={StreamDelete} />
                <Route path="/stream/show" exact component={StreamShow} />
            </div>
        </BrowserRouter>
    </div>
    );
};

export default App;