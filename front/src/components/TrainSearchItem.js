import React from 'react'

import withStyles from 'react-jss'

const styles = {
    root: {
        padding: '1em',
        background: '#000',
        '&:hover': {
            background: '#111',
        },
    },
}

const TrainSearchItem = ({
    trainNumber,
    trainType,
    fromStation,
    toStation,
    classes,
}) => (
    <div className={classes.root}>
        <strong>
            {trainType} {trainNumber}
        </strong>
        <br />
        {fromStation} &mdash; {toStation}
    </div>
)

export default withStyles(styles)(TrainSearchItem)
