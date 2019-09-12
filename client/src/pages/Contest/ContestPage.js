import React,{useEffect} from 'react';
import DashboardContent from '../../components/Dashboard/DashboardContent/DashboardContent';
import style from './ContestPage.module.scss';
import Header from "../../components/commonToAll/Header/Header";
import Footer from '../../components/commonToAll/Footer/footer';
import HeaderBottom from "../../components/commonToAll/HeaderBottom/HeaderBottom";
import Contest from "../../components/Contest/Contest";
import connect from "react-redux/es/connect/connect";
import {getContestById} from "../../actions/actionCreator";
const _=require('lodash');

function contest(props) {
    useEffect(()=>{
        props.getContestById(props.id);
    });
    return (
        <div >
            <Header/>
            <HeaderBottom/>
            <Contest/>
            <Footer/>
        </div>);
}
const mapStateToProps = (state) => ({
    filter: state.ActiveContestFilterReducer
});

const mapDispatchToProps = (dispatch) => ({
    getContestById: (id) => dispatch(getContestById(id)),

});


export default connect(mapStateToProps,mapDispatchToProps)(contest);