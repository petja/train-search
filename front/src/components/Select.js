import React from 'react'

import withStyles from 'react-jss'

const styles = {
    root: {
        maxWidth: '25em',
        maxHeight: '100%',
        overflow: 'auto',
    },
    logo: {
        height: '7.5em',
    },
}

const ListView = ({ items }) => (
    <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
)

export default withStyles(styles)(ListView)
