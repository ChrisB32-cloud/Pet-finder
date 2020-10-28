import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Allpups from '../Allpups';
import PupperCard from '../PupperCard';


class AllRoutes extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Switch>
                <Route exact path='/allpups' render={(routeProps) => <Allpups {...routeProps} indDog={this.props.dogs} />} />
                {this.props.dogs.map((dog, idx) => (
                    <Route exact path={`/allpups/${dog.name}`} render={(routeProps) => <PupperCard {...routeProps} newPup={dog} key={idx} id={dog.name} />} />
                ))}
                <Redirect to='/allpups' />
            </Switch>
        );
    }
}

export default AllRoutes;