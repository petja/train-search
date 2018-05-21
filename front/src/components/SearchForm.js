import React from 'react'

import SubHeader from '../components/SubHeader'
import RouteSectionList from '../components/RouteSectionList'
import CommuterLineCheckbox from '../components/CommuterLineCheckbox'
import TrainTypeSelect from '../components/TrainTypeSelect'

import withStyles from 'react-jss'

const styles = {
    root: {
        width: '100%',
        maxWidth: '20em',
    },
}

const SearchForm = ({ classes }) => (
    <div className={classes.root}>
        <SubHeader>Kulussa nyt</SubHeader>
        <label>
            <input type="checkbox" /> Kulussa nyt
        </label>

        <SubHeader>Junalaji</SubHeader>
        <TrainTypeSelect />

        <SubHeader>Linjatunnus</SubHeader>
        {'YULXEAIPKNTRDGZ'
            .split('')
            .map(line => <CommuterLineCheckbox line={line} key={line} />)}

        <SubHeader>Reitti</SubHeader>
        <RouteSectionList />
    </div>
)

export default withStyles(styles)(SearchForm)
