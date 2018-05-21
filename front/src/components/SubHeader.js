import React from 'react'

import withStyles from 'react-jss'

const styles = {
    root: {
        fontWeight: 'bold',
        fontSize: '1.25em',
        margin: '2em 0 1em 0',
    },
}

const SubHeader = ({ classes, children }) => (
    <h4 className={classes.root}>{children}</h4>
)

export default withStyles(styles)(SubHeader)
