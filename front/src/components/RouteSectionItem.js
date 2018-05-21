import React from 'react'

import classnames from 'classnames'

import withStyles from 'react-jss'

const styles = {
    root: {
        width: '100%',
        padding: '1em',
        background: '#000',
        borderBottom: '1px solid #111',
        overflow: 'hidden',
        display: 'flex',
        cursor: 'pointer',
        '&:hover': {
            background: '#111',
        },
    },
    open: {
        background: '#FFF',
        color: '#000',
    },
    circle: {
        background: 'currentColor',
        borderRadius: '50%',
        height: '1em',
        width: '1em',
        position: 'relative',
        top: 'calc(50% - 0.5em)',
        '&$hiddenCircle': {
            background: 'none',
        },
        '&:before': {
            position: 'absolute',
            top: 'calc(50% - 0.5em)',
            left: 'calc(50% - 0.1em)',
            width: '0.2em',
            height: '100vh',
            content: '""',
            background: 'currentColor',
        },
        '&$startSection': {
            '&:before': {
                top: 'calc(50% - 0.5em)',
            },
        },
        '&$middleSection': {
            '&:before': {
                top: 'calc(50% - 0.5em - 50vh)',
            },
        },
        '&$endSection': {
            '&:before': {
                top: 'calc(50% - 0.5em - 100vh)',
            },
        },
    },
    right: {
        flex: 1,
    },
    left: {
        width: '2em',
        flex: 1,
    },
    startSection: {},
    middleSection: {},
    endSection: {},
    hiddenCircle: {},
    disabled: {
        opacity: 0.5,
    },
}

const RouteSectionItem = ({
    startSection,
    passSection,
    stopSection,
    endSection,
    station,
    classes,
}) => (
    <div className={classes.root}>
        <div className={classes.left}>
            <div
                className={classnames(classes.circle, {
                    [classes.disabled]: !station,
                    [classes.startSection]: startSection,
                    [classes.middleSection]: stopSection || passSection,
                    [classes.endSection]: endSection,
                    [classes.hiddenCircle]: passSection,
                })}
            />
        </div>
        <div className={classes.right}>
            {getRowText({
                startSection,
                passSection,
                stopSection,
                endSection,
                station,
                classes,
            })}
        </div>
    </div>
)

const getRowText = ({
    startSection,
    passSection,
    stopSection,
    endSection,
    station,
    classes,
}) => {
    if (!station)
        return (
            <em className={classes.disabled}>
                Valitse {startSection ? 'lähtöasema' : 'määräasema'}
            </em>
        )

    const title = <strong>{station}</strong>
    if (startSection)
        return (
            <React.Fragment>
                {title}
                <br />Lähtöasema
            </React.Fragment>
        )
    if (passSection)
        return (
            <React.Fragment>
                {title}
                <br />Ohitusasema
            </React.Fragment>
        )
    if (stopSection)
        return (
            <React.Fragment>
                {title}
                <br />Pysähdysasema
            </React.Fragment>
        )
    if (endSection)
        return (
            <React.Fragment>
                {title}
                <br />Määräasema
            </React.Fragment>
        )
}

export default withStyles(styles)(RouteSectionItem)
