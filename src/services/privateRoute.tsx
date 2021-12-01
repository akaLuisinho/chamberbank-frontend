import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from '../hooks/useAuth'


export const PrivateRoute: React.FC<{
    component: React.FC;
    path: string;
    exact: boolean;
}> = (props) => {

    const { token } = useAuth()

    return token ? (<Route path={props.path} exact={props.exact} component={props.component} />) :
        (<Redirect to="/" />);
};
