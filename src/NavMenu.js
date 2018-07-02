import React from 'react';
import PropTypes from 'prop-types';
import { TreeList } from '@extjs/ext-react';

Ext.require('Ext.data.TreeStore');

/**
 * The main navigation menu
 */
export default function NavMenu({ 
    onItemClick, 
    selection, 
    ...props 
}) {
    return (
        <TreeList 
            {...props}
            ui="nav"
            expanderFirst={false}
            onItemClick={(tree, item) => onItemClick(item.node.getId())}
            selection={selection}
            store={{
                root: {
                    children: [
                        { id: '/', text: 'Dashboard', iconCls: 'x-fa fa-dashboard', leaf: true },
                        { id: '/accounts', text: 'Investor Accounts', iconCls: 'x-fa fa-user', leaf: true },
                        { id: '/funds', text: 'Funds', iconCls: 'x-fa fa-bar-chart', leaf: true },
                    ]
                }
            }}
        />        
    )
}

NavMenu.propTypes = {
    onSelectionChange: PropTypes.func,
    selection: PropTypes.string
};