import React, { Component } from 'react'
import CountrySelector from '../limitedSignup/countrySelector';
import Select from 'react-select'
import { Link } from 'react-router-dom';
import "../../signUp.css";

export default class standardSignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  componentWillMount(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  navTo = () => {
    this.props.history.push("/standardSignUpTerm");
  }
  render() {
    const options = [
      { value: 'Mr', label: 'Mr' },
      { value: 'Mrs.', label: 'Mrs.' },
      { value: 'Ms', label: 'Ms' }
    ]
    return (
        <div style={{ marginTop: "170px" }} className="footer_padding">
            <p className='limitedSignupTitle'>My account</p>
            <div className='limitedSignupDiv'>
              <div className='limitedProcessBar'>
                <span className='limitedLeftDot'></span>
                <div className='limitedBarActive'></div>
                <div className='limitedBar'></div>
                <span className='limitedRightDot'></span>
              </div>
              <div className='row inputDetails'>
                <div className='col-md-5'>
                  <p className='inputTitle'>Country of residence *</p>
                  <CountrySelector />
                  <p className='inputTitle'>Nickname *</p>
                  <input className='inputStyle' type="text" name="nickName" placeholder='Enter your…' />
                  <p className='inputTitle'>Email *</p>
                  <input className='inputStyle' type="email" name="email" placeholder='Enter your…' />
                  <p className='inputTitle'>Password *</p>
                  <input className='inputStyle' type="password" name="password" placeholder='Enter your…' />
                  <p className='inputTitle'>Repeat password *</p>
                  <input className='inputStyle' type="password" name="password" placeholder='Enter your…' /><br />
                  <Link to="signUpDash" className='goBack'>Go back</Link>
                </div>
                <div className='col-md-2'></div>
                <div className='col-md-5'>
                  <p className='inputTitle unactiveInputTitle'>Title *</p>
                  <div style={{ width:"45%" }}>
                    <Select options={options} className="selectTitle" />
                  </div>
                  <p className='inputTitle unactiveInputTitle'>First name *</p>
                  <input className='inputStyle' type="text" name="firstName" placeholder='Enter your…' />
                  <p className='inputTitle unactiveInputTitle'>Middle name(s) *</p>
                  <input className='inputStyle' type="text" name="middleName" placeholder='Enter your…' />
                  <p className='inputTitle unactiveInputTitle'>Last name *</p>
                  <input className='inputStyle' type="text" name="lastName" placeholder='Enter your…' />
                  <button className='singInButton createAccount' onClick={this.navTo}>Create account</button>
                </div>
              </div>
            </div>
        </div>
    )
  }
}
