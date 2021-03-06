import React from "react";
import { Router, Route } from "react-router-dom";
import StreamCreate from './stream/StreamCreate';
import StreamEdit from './stream/StreamEdit';
import StreamDelete from './stream/StreamDelete';
import StreamList from './stream/StreamList';
import StreamShow from './stream/StreamShow';
import Header from "./Header";
import history from "../history";


const App = () => {
    return (
    <div className="ui container" >
        <Router history={history} >
            <div>
                <Header />
                <Route path="/" exact component={StreamList} />
                <Route path="/stream/new" exact component={StreamCreate} />
                <Route path="/stream/edit/:id" exact component={StreamEdit} />
                <Route path="/stream/delete/:id" exact component={StreamDelete} />
                <Route path="/stream/show" exact component={StreamShow} />
            </div>
        </Router>
    </div>
    );
};

export default App;