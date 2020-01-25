import React from 'react'
import { Link, useRouteMatch } from "react-router-dom";

export const RouteActive = ({ label, to, activeOnlyWhenExact }) => {

    let match = useRouteMatch({
      path: to,
      exact: activeOnlyWhenExact
    });

    return (
        <div className="p-3">
             <div className={match ? "active" : ""}>
            {match && "> "}
             <Link to={to}>{label}</Link>
            </div>
        </div>
    )
}
