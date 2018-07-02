import React, { Component } from 'react';
import { Grid, Toolbar, Button, Column, SearchField } from '@extjs/ext-react';
import data from './data';
import { small, medium } from '../responsiveFormulas'

export default class Accounts extends Component {

    store = Ext.create('Ext.data.Store', {
        fields: ['name', 'commitments', 'contributions'],
        data
    });

    render() {
        return (
            <Grid store={this.store}>
                <Toolbar docked="top">
                    <SearchField 
                        ui="faded" 
                        ref={field => this.query = field} 
                        placeholder="Search..." 
                        onChange={this.onSearch.bind(this)}
                        responsiveConfig={{
                            [small]: { 
                                flex: 1
                            }, 
                            [medium]: {
                                flex: undefined
                            }
                        }}
                    />
                </Toolbar>
                <Column
                    text="Name"
                    dataIndex="name"
                    flex={3}
                    resizable
                />
                <Column
                    text="Commitments"
                    dataIndex="commitments"
                    flex={2}
                    resizable
                />
                <Column
                    text="Contributions"
                    dataIndex="contributions"
                    flex={2}
                    resizable
                />
            </Grid>

        )
    }

    /**
     * Filter the store when the user types in the search box
     */
    onSearch = () => {
        const query = this.query.getValue().toLowerCase(); 
        this.store.clearFilter();

        if (query.length) this.store.filterBy(record => {
            const { name, commitments, contributions } = record.data;

            return name.toLowerCase().indexOf(query) !== -1 || 
                commitments.toString().indexOf(query) !== -1 || 
                contributions.toString().indexOf(query) !== -1;
        });
    }

}