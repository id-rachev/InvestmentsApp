import React, { Component } from 'react';
import { Cartesian } from '@extjs/ext-react-charts';

Ext.require('Ext.chart.series.Line');
Ext.require('Ext.chart.axis.Numeric');

export default class Dashboard extends Component {
    
    state = {
        initialAmount: 10000,
    }

    store = Ext.create('Ext.data.Store', {
        fields: ['year', 'value'],
        data: [
            { year: 2010, value: this.state.initialAmount },
            { year: 2011, value: this.state.initialAmount*1.10 },
            { year: 2012, value: this.state.initialAmount*1.15 },
            { year: 2013, value: this.state.initialAmount*1.13 },
            { year: 2014, value: this.state.initialAmount*0.98 },
            { year: 2015, value: this.state.initialAmount*1.08 },
            { year: 2016, value: this.state.initialAmount*1.28 },
            { year: 2017, value: this.state.initialAmount*1.43 },
            { year: 2018, value: this.state.initialAmount*1.53 },
        ]
    })

    render() {
        return (
            <Cartesian
                store = { this.store }
                insertPadding="40 40 60 40"
                axes = {[{
                        type: 'numeric',
                        position: 'left',
                        fields: 'value',
                        title: 'Amount, $'
                    }, {
                        type: 'numeric',
                        position: 'bottom',
                        fields: 'year',
                        title: 'Year'
                    }]
                }
                series = {{
                        type: 'line',
                        xField: 'year',
                        yField: 'value'
                }}
            />
        )
    }
}