import { connect } from 'react-redux'
//import { SET_EMAIL } from '../actions/SessionActions'
import component from '../components/ListView'

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    items: state.search.hits,
    //email: state.session.email,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    //onEmailSet: () => dispatch(SET_EMAIL()),
})

export default connect(mapStateToProps, mapDispatchToProps)(component)
