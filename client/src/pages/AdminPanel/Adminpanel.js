import React, {Component} from 'react';
import style from './Adminpanel.module.scss';
import List from '../../components/UsersList/userList';
import {Link} from 'react-router-dom';
import {getAllUsers} from '../../actions/actionCreator';
import connect from 'react-redux/es/connect/connect';
import {Redirect} from 'react-router';
import 'react-toastify/dist/ReactToastify.css';

class AdminP extends Component {
    componentWillMount() {
        this.props.getAllUsers();
    }

    render() {
        console.log(this.props.users);
        if (!this.props.isFetching){
            if (this.props.user === null || (this.props.user.role === "USER")) {
            return <Redirect to="/notFound"/>
        }}
        return (
            <div className={style.adminPanel}>
                {(this.props.users) ? <List users={this.props.users}/> : {}}

                <Link to="/">
                    <div className={style.button}>Home</div>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state,
        user: state.userReducers.user,
        users: state.getAllUsersReducer.data,
        isFetching: state.userReducers.isFetching,
    };
};
const mapDispatchToProps = (dispatch) => ({
    getAllUsers: () => dispatch(getAllUsers())
});
export default connect(mapStateToProps, mapDispatchToProps)(AdminP);
