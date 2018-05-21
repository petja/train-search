import React from 'react'

import withStyles from 'react-jss'

import RouteSectionItem from '../components/RouteSectionItem'

const styles = {}

const dummyList = [
    { startSection: true, station: null },
    { passSection: true, station: 'KE' },
    { stopSection: true, station: 'HL' },
    { endSection: true, station: 'TPE' },
]

const RouteSectionList = ({ items = dummyList }) => (
    <div>
        {items.map(item => <RouteSectionItem key={item.objectID} {...item} />)}
    </div>
)

export default withStyles(styles)(RouteSectionList)
