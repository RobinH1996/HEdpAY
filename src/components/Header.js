import React from 'react';
import { connect } from 'react-redux'
import './global.css';
import "./main/home.css";
import logo from '../assets/images/logo-hedpay-header-top.svg';
import { SET_AUTH } from '../constants/actionTypes';
import phone from "../assets/images/phone@2x.png"
import envelope from "../assets/images/FontAwsome(envelope)@2x.png"
import people from "../assets/images/people@2x.png"
import share from "../assets/images/share@2x.png"
import avatar from "../assets/images/Ellipse25@2x.png"
import sun from "../assets/images/sun.png"
import home from "../assets/images/home@2x.png"
import wallet2 from "../assets/images/wallet2@2x.png"
import transfer from "../assets/images/bx-transfer-alt@2x.png"
import signpost from "../assets/images/signpost-split@2x.png"
import credit from "../assets/images/credit-card-2-back@2x.png"
import Groupe8395 from "../assets/images/Groupe8395@2x.png"
import question from "../assets/images/question-square@2x.png"
import sliders from "../assets/images/sliders.png"
import person from "../assets/images/person.png"
import window from "../assets/images/window.png"
import logout from "../assets/images/logout.png"
import Dropdown from 'react-bootstrap/Dropdown';

const LoggedOutView = props => {
  
  
  const openRightMenu = () => {
    document.getElementById("rightMenu").style.display = "block";
  }

  const closeRightMenu = () => {
    document.getElementById("rightMenu").style.display = "none";
  }

  const navTo = (to) => {
    console.log(props);
    props.history.push("/" + to);
  }

  if (!props.userName) {
    return (
    <div className="outer_container" style={{position: 'fixed', top: '0px', zIndex: '1000'}}>
      <div className="main_container">
        <div className="header_container">
          <div className='navHead'>
            <div className='hdp'>
            &nbsp;&nbsp;<p style={{fontSize:"14px"}}>Hdp.ф &nbsp;  0.1571 </p> &nbsp;&nbsp;&nbsp;
              <p style={{fontSize:"14px", color:"#229F17"}}>(+2.4%)</p>
            </div>
            <div className='vol'>
              <p style={{fontSize:"14px"}}>&nbsp;&nbsp;&nbsp;&nbsp;Vol: &nbsp;&nbsp;  $34,589.21</p>
            </div>
            <div className='signButton'>
              <div onClick={()=>navTo("signUpDash")} className="header_nav" id="signUp">Open an account</div>
              <div onClick={(e)=>navTo("logIn")} className="header_nav" id="logIn">Sign In</div>
            </div>
          </div>
          <div className='navHeadUnder'>
            <div onClick={()=>navTo("")} className="header_logo"><img alt="img"src={logo} width="100%"/></div>
            <div className='navList'>
              <ul style={{ marginTop:"-17px" }}>
                <li className='liMRight'>About Us</li>
                <li className='liMRight'>Invest</li>
                <li className='liMRight'>Card</li>
                <li className='liMRight'>FAQ</li>
                <li className='liMRight'>Contact Us</li>
              </ul>
            </div>
          </div>
  
          <button className="w3-button w3-xxlarge w3-right tablet_btn" onClick={openRightMenu} style={{ marginTop:"-125px" }}>&#9776;</button>
          <div className="w3-sidebar w3-bar-block w3-card w3-animate-right" style={{display:'none', right:0, position: 'absolute', top: '0px'}} id="rightMenu">
            <button onClick={closeRightMenu} className="w3-bar-item w3-button w3-large">{'>>'}</button>
            <a href="/logIn" className="w3-bar-item w3-button w3-large">LOG IN</a>
            <a href="/signUp" className="w3-bar-item w3-button w3-large">SIGN UP</a>
            <a href="/" className="w3-bar-item w3-button w3-large">About Us</a>
            <a href="/" className="w3-bar-item w3-button w3-large">Invest</a>
            <a href="/" className="w3-bar-item w3-button w3-large">Card</a>
            <a href="/" className="w3-bar-item w3-button w3-large">FAQ</a>
            <a href="/" className="w3-bar-item w3-button w3-large">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
    );
  }
  return null;
};

const LoggedInView = props => {

  const openRightMenu = () => {
    document.getElementById("rightMenu").style.display = "block";
  }

  const closeRightMenu = () => {
    document.getElementById("rightMenu").style.display = "none";
  }

  const navTo = (to) => {
    if(to === 'signOut'){
      sessionStorage.setItem('status',false);
      sessionStorage.setItem('email', false);
      sessionStorage.setItem('psw', false);
      const temp = {
        email: false,
        psw: false
      }
      props.setAuth(temp);
      props.history.push('/logIn');
    }
    props.history.push("/" + to);
  }

  if (props.userName) {
    return (
      <div className="outer_container" style={{position: 'fixed', top: '0px', zIndex: '1000'}}>
        <div className="main_container">
          <div className="header_container">
            <div className='navHead'>
              <div className='hdp'>
              &nbsp;&nbsp;<p style={{fontSize:"14px"}}>Hdp.ф &nbsp;  0.1571 </p> &nbsp;&nbsp;&nbsp;
                <p style={{fontSize:"14px", color:"#229F17"}}>(+2.4%)</p>
              </div>
              <div className='vol'>
                <p style={{fontSize:"14px"}}>&nbsp;&nbsp;&nbsp;&nbsp;Vol: &nbsp;&nbsp;  $34,589.21</p>
              </div>
              <div className='signButton'>
                <div onClick={()=>navTo("home")} className="header_nav nonHeader" id="signUp" style={{ marginRight:"25px" }}><img src={sun} alt="sun" width="20px" /></div>
                <Dropdown>
                  <Dropdown.Toggle variant="success">
                    Name&nbsp;&nbsp;<img src={avatar} alt="avatar" width="34px" />&nbsp;&nbsp;
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      <img src={sliders} alt="sliders" width="18px" />&nbsp;&nbsp;Settings
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <img src={person} alt="person" width="16px" />&nbsp;&nbsp;Profile
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <img src={window} alt="window" width="18px" />&nbsp;&nbsp;Go to the website
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={()=>navTo("signOut")} >
                      <img src={logout} alt="logout" width="18px" />&nbsp;&nbsp;Sign out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <div onClick={()=>navTo("")} className="header_nav smallHide" id="logIn"><img src={share} alt="share" width="16px" />&nbsp;&nbsp;Referral</div>
                <div onClick={()=>navTo("")} className="header_nav smallHide" id="logIn"><img src={people} alt="people" width="21px" />&nbsp;&nbsp;Contacts</div>
                <div onClick={()=>navTo("")} className="header_nav smallHide" id="logIn"><img src={envelope} alt="envelope" width="19px" />&nbsp;&nbsp;
                  <span className="badge">8</span>
                </div>
                <div onClick={(e)=>navTo("")} className="header_nav smallHide" id="logIn"><img src={phone} alt="phone" width="13px" />&nbsp;&nbsp;2FA</div>
              </div>
            </div>
            <div className='navHeadUnder'>
              <div onClick={()=>navTo("")} className="header_logo"><img alt="img"src={logo} width="100%"/></div>
              <div className='navList'>
                <ul style={{ marginTop:"-17px" }}>
                  <li className='liMRight' onClick={()=>navTo("home")}><img src={home} alt="home" style={{ marginTop:"-6px" }} width="16px" />&nbsp;&nbsp;Dashboard</li>
                  <li className='liMRight' onClick={()=>navTo("wallet")}><img src={wallet2} alt="wallet2" style={{ marginTop:"-6px" }} width="17px" />&nbsp;&nbsp;Wallet</li>
                  <li className='liMRight' onClick={()=>navTo("transaction")}><img src={transfer} alt="wallet2" style={{ marginTop:"-6px" }} width="15px" />&nbsp;&nbsp;Transactions</li>
                  <li className='liMRight'><img src={signpost} alt="signpost" style={{ marginTop:"-6px" }} width="17px" />&nbsp;&nbsp;Exchange</li>
                  <li className='liMRight' onClick={()=>navTo("card")}><img src={credit} alt="credit" style={{ marginTop:"-6px" }} width="21px" />&nbsp;&nbsp;Card</li>
                  <li className='liMRight' onClick={()=>navTo("fundPackage")}><img src={Groupe8395} alt="Groupe8395" style={{ marginTop:"-6px" }} width="19px" />&nbsp;&nbsp;Fund Packages</li>
                  <li className='liMRight'><img src={question} alt="Groupe8395" style={{ marginTop:"-6px" }} width="18px" />&nbsp;&nbsp;FAQ</li>
                </ul>
              </div>
            </div>
    
            <button className="w3-button w3-xxlarge w3-right tablet_btn tablet_btn2" onClick={openRightMenu} style={{ marginTop:"-75px" }}>&#9776;</button>
            <div className="w3-sidebar w3-bar-block w3-card w3-animate-right menuBG" style={{display:'none', right:0, position: 'absolute', top: '0px'}} id="rightMenu">
              <button onClick={closeRightMenu} className="w3-bar-item w3-button w3-large">{'>>'}</button>
              <a href="#" className="w3-bar-item w3-button w3-large tablet1"><div style={{ color:"#000" }} id="logIn"><img src={phone} alt="phone" width="13px" />&nbsp;&nbsp;2FA</div></a>
              <a href="#" className="w3-bar-item w3-button w3-large tablet1">
                <img src={envelope} alt="envelope" width="19px" />&nbsp;&nbsp;
                  <span className="badge">8</span>
                  </a>
              <a href="#" className="w3-bar-item w3-button w3-large tablet1"><img src={people} alt="people" width="21px" />&nbsp;&nbsp;Contacts</a>
              <a href="#" className="w3-bar-item w3-button w3-large tablet1"><img src={share} alt="share" width="16px" />&nbsp;&nbsp;Referral</a>
              <a href="#" className="w3-bar-item w3-button w3-large" onClick={()=>navTo("home")}><img src={home} alt="home" style={{ marginTop:"-6px" }} width="16px" />&nbsp;&nbsp;Dashboard</a>
              <a href="#" className="w3-bar-item w3-button w3-large" onClick={()=>navTo("wallet")}><img src={wallet2} alt="wallet2" style={{ marginTop:"-6px" }} width="17px" />&nbsp;&nbsp;Wallet</a>
              <a href="#" className="w3-bar-item w3-button w3-large" onClick={()=>navTo("transaction")}><img src={transfer} alt="wallet2" style={{ marginTop:"-6px" }} width="15px" />&nbsp;&nbsp;Transactions</a>
              <a href="#" className="w3-bar-item w3-button w3-large"><img src={signpost} alt="signpost" style={{ marginTop:"-6px" }} width="17px" />&nbsp;&nbsp;Exchange</a>
              <a href="#" className="w3-bar-item w3-button w3-large" onClick={()=>navTo("card")}><img src={credit} alt="credit" style={{ marginTop:"-6px" }} width="21px" />&nbsp;&nbsp;Card</a>
              <a href="#" className="w3-bar-item w3-button w3-large" onClick={()=>navTo("fundPackage")}><img src={Groupe8395} alt="Groupe8395" style={{ marginTop:"-6px" }} width="19px" />&nbsp;&nbsp;Fund Packages</a>
              <a href="#" className="w3-bar-item w3-button w3-large"><img src={question} alt="Groupe8395" style={{ marginTop:"-6px" }} width="18px" />&nbsp;&nbsp;FAQ</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

const mapStateToProps = state => {
  return {
    email: state.auth.email
  }};

const mapDispatchToProps = dispatch => ({
  setAuth: (data) => dispatch({ type: SET_AUTH, data })  
});

class Header extends React.Component {
  render() {
    return (
      <div>
        <LoggedOutView userName={this.props.userName} history={this.props.history}/>
        <LoggedInView userName={this.props.userName} history={this.props.history} setAuth={this.props.setAuth}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
