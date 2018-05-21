import React from 'react'

import withStyles from 'react-jss'
import Select from 'react-select'

const styles = {}

const selectStyles = {
    control: styles => ({
        ...styles,
        background: '#111',
        border: '0',
        borderRadius: '0',
    }),
    menu: styles => ({
        ...styles,
        background: '#111',
    }),
    option: styles => ({
        ...styles,
        color: '#FFF',
    }),
    groupHeading: styles => ({
        ...styles,
        color: '#FFF',
    }),
    multiValue: (styles, { data }) => ({
        ...styles,
        background: '#222',
    }),
    multiValueLabel: (styles, { data }) => ({
        ...styles,
        color: '#FFF',
    }),
}

const types = [
    {
        label: 'Commuter',
        options: [
            { label: 'HL', value: 'HL' },
            { label: 'HV', value: 'HV' },
            { label: 'HLV', value: 'HLV' },
        ],
    },
    { label: 'Locomotive', options: [{ label: 'VET', value: 'VET' }] },
    {
        label: 'Shunting',
        options: [
            { label: 'VEV', value: 'VEV' },
            { label: 'VLI', value: 'VLI' },
            { label: 'W', value: 'W' },
            { label: 'MUV', value: 'MUV' },
            { label: 'SAA', value: 'SAA' },
            { label: 'PAI', value: 'PAI' },
        ],
    },
    {
        label: 'Long-distance',
        options: [
            { label: 'H', value: 'H' },
            { label: 'PVS', value: 'PVS' },
            { label: 'P', value: 'P' },
            { label: 'HDM', value: 'HDM' },
            { label: 'PVV', value: 'PVV' },
            { label: 'S', value: 'S' },
            { label: 'V', value: 'V' },
            { label: 'IC2', value: 'IC2' },
            { label: 'IC', value: 'IC' },
            { label: 'HSM', value: 'HSM' },
            { label: 'AE', value: 'AE' },
            { label: 'PYO', value: 'PYO' },
            { label: 'MV', value: 'MV' },
            { label: 'MUS', value: 'MUS' },
        ],
    },
    { label: 'Cargo', options: [{ label: 'T', value: 'T' }] },
    {
        label: 'On-track machines',
        options: [{ label: 'TYO', value: 'TYO' }],
    },
    { label: 'Test drive', options: [{ label: 'LIV', value: 'LIV' }] },
]

const TrainTypeSelect = () => (
    <Select
        options={types}
        placeholder="Valitse junalaji"
        styles={selectStyles}
        isMulti
        defaultValue="IC"
    />
)

export default withStyles(styles)(TrainTypeSelect)
