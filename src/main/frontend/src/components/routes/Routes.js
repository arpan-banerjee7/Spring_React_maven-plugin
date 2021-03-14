import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Table from './../dashboard/table/Table';
import LineChart from './../dashboard/charts/LineChart';
import PieChart from './../dashboard/charts/PieChart';

export const Routes = () => (
    <Switch>
        <Route path="/piechart">
            <PieChart />
        </Route>
        <Route path="/linechart">
            <LineChart/>
        </Route>
        <Route path="/">
            <Table />
        </Route>
    </Switch>
);