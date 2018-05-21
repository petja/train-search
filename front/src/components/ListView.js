import React from 'react'

import withStyles from 'react-jss'

import TrainSearchItem from '../components/TrainSearchItem'

const styles = {}

const ListView = ({ items }) => (
    <div>
        {items.map(item => <TrainSearchItem key={item.objectID} {...item} />)}
    </div>
)

export default withStyles(styles)(ListView)
