import React from 'react'

import classnames from 'classnames'

import withStyles from 'react-jss'

const styles = {
    root: {
        background: '#111',
        borderRadius: '50%',
        height: '2em',
        width: '2em',
        display: 'inline-block',
        margin: '0.2em',
    },
    flex: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    green: {
        background: '#1B5E20',
    },
    blue: {
        background: '#1A237E',
    },
    red: {
        background: '#B71C1C',
    },
}

const mappings = {
    Y: 'green',
    U: 'green',
    L: 'green',
    X: 'green',
    E: 'green',
    A: 'green',
    I: 'blue',
    P: 'blue',
    K: 'blue',
    N: 'blue',
    T: 'blue',
    R: 'blue',
    D: 'blue',
    G: 'blue',
    Z: 'red',
}

const CommuterLineCheckbox = ({ classes, line }) => {
    const lineColor = mappings[line.toUpperCase()]
    return (
        <div className={classnames(classes.root, classes[lineColor])}>
            <div className={classes.flex}>
                <span>{line}</span>
            </div>
        </div>
    )
}

export default withStyles(styles)(CommuterLineCheckbox)
