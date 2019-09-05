import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {TOKENS_KEY} from '../../constants/consts';
import {userIsLogin,resetApiMsg,changeUserPassword} from '../../actions/actionCreator';
import {toast} from "react-toastify";
import Modal from 'react-modal';
import style from "../LoginAndSignUp/MainLogin/ContainerBody/Form/Form.module.scss";
import ReserPassword from "../ModalForm/ReserPassword";

const customStyles = {
    content : {
        zIndex:20,
    }
};
Modal.setAppElement('#root');
class UserLoader extends Component {

    notify = (msg) => {
        this.props.resetApiMsg();
        const props = {
            position: toast.POSITION.BOTTOM_LEFT,
            autoClose: 6000,
        };
        if (this.props.mail.err){
            return toast.error(msg,props)
          }
        else{
            return toast.success(msg,props)
        }
    };

    componentWillMount() {
        const user = this.props.user;
        if (!user && (localStorage.getItem(TOKENS_KEY) || sessionStorage.getItem(TOKENS_KEY))) {
            this.props.userIsLogin();
        }
    }
//createAction={this.props.checkEmail}
    render() {
        console.log(this.props.mail);
      //  const func=(this.props.mail.msg)?this.notify(this.props.mail.msg):{};

        return (
            <>
                <Modal
                    isOpen={this.props.modal.resetPassword}
                    onAfterOpen={()=>{}}
                    onRequestClose={()=>{}}
                    style={customStyles}
                    className={style.modal}
                    overlayClassName={style.modalOverlay}
                >
                    <ReserPassword createAction={this.props.changeUserPassword} title={'Change Password'}
                                  preInput={'Enter and retype the new password'}
                                  button={'Click to change'} email={this.props.mail['email']}/>
                </Modal>

                {this.props.children}
            </>
        )
    }
    componentDidUpdate() {
        if (this.props.mail.msg){this.notify(this.props.mail.msg) }
    }
    componentDidMount() {
        if (this.props.mail.msg){this.notify(this.props.mail.msg) }
    }
}

const mapStateToProps = (state) => ({
    user: state.userReducers.user,
    mail: state.mailServiceReducers,
    pageToRedirect:state.siteNavigationReducers.pageToRedirect,
    modal:state.modalReducers
});
const mapDispatchToProps = (dispatch) => ({
    userIsLogin: () => dispatch(userIsLogin()),
    resetApiMsg: () => dispatch(resetApiMsg()),
    changeUserPassword: (value) => dispatch(changeUserPassword(value)),

});
export default connect(mapStateToProps, mapDispatchToProps)(UserLoader);
