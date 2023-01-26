import React from 'react';
import footerLogo from '../assets/images/hdp_footer.svg'
import Send from '../assets/images/send.svg'
import Apple from '../assets/images/apple.svg'
import Google from '../assets/images/google.svg'
import FC from '../assets/images/hedpay-fc-footer.svg'
import TW from '../assets/images/hedpay-tw-footer.svg'
import DE from '../assets/images/group_de.svg'
import INS from '../assets/images/hedpay-ins-footer.svg'
import TEL from '../assets/images/hedpay-tel-footer.svg'
import IN from '../assets/images/hedpay-in-footer.svg'
import YOU from '../assets/images/hedpay-you-footer.svg'
import XT from '../assets/images/hedpay-footer-logo-xt.svg'
import Coinmarketcap from '../assets/images/hedpay-footer-logo-coinmarketcap.svg'
import Coingecko from '../assets/images/hedpay-footer-logo-coingecko.svg'
import Etherscan from '../assets/images/hedpay-footer-logo-etherscan.svg'
import Ethplorer from '../assets/images/hedpay-footer-logo-ethplorer.svg'
import Medium from '../assets/images/hedpay-footer-logo-medium.svg'
import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='footerUp'>
            <div className='up row'>
                <div className='col-md-4' style={{ display:'flex' }}>
                    <div className='fMenuUpLeft'>
                        <p className='fMenuUpHead'>Menu</p>
                        <p>About Us</p>
                        <p>Invest</p>
                        <p>FAQ</p>
                        <p>Contact Us</p>
                    </div>
                    <div className='fMenuUpRight'>
                        <p className='fMenuUpHead'>Account</p>
                        <p>Open Account</p>
                        <p>Sign In</p>
                    </div>
                </div>
                <div className='col-md-4' style={{ display:'flex' }}>
                    <div className='fMenuUpLeft'>
                        <p className='fMenuUpHead'>Policies</p>
                        <p>Privacy Policy</p>
                        <p>Disclaimer</p>
                        <p>Terms of Service</p>
                        <p>Anti-Spam Policy</p>
                    </div>
                    <div className='fMenuUpRight fPolicyUpRight'>
                        <p className='fMenuUpHead'>Imformation</p>
                        <p>News</p>
                        <p>FAQ</p>
                        <p>Usefuk Links</p>
                        <p>Contact us</p>
                    </div>
                </div>
                <div className='col-md-4'>
                    <p className='fMenuUpHead'>Subscribe</p>
                    <p className='fPolicyUpLeftP'>Enter your email to receive our monthly newsletter and the periodical promotional offers before they become public.</p>
                    <div style={{ float:'left', width:'100%' }}>
                        <input type="email" name="text" style={{ width:'80%', height:'48px', borderRadius:'4px', float:'left' }} placeholder='Your email' className='sendEmail' />
                        <button className='sendBtn'>
                            <img src={Send} alt="send" />
                        </button>
                    </div>
                </div>
            </div>
            <div style={{ display:"flex", marginTop:'70px' }}  className='row'>
                <div className='col-md-4'>
                    <img alt="img" src={footerLogo} className="footerLogo" width="100%"/>
                </div>
                <div className='col-md-4'>
                    <p className='fMenuUpHead'>Support</p>
                    <p className='fPolicyUpLeftP'>If you experience any problems with your account, please submit a ticket.</p>
                    <img src={Google} alt="google pay" />
                    <img src={Apple} alt="apple pay" />
                    <p className='fPolicyUpLeftP' style={{ marginTop:'20px' }}>Available soon</p>
                </div>
                <div className='col-md-4'>
                    <p className='fMenuUpHead'>Follow Us on Social media</p>
                    <p className='fPolicyUpLeftP'>Use your personal referral link to share on your social channels and accumulate HDP.ф tokens.</p>
                    <div className='iconUp'>
                        <img src={ FC } alt="fc"  />
                        <img src={ TW } alt="tw" className='moveLeft'  />
                        <img src={ DE } alt="DE" className='moveLeft'  />
                        <img src={ INS } alt="INS" className='moveLeft'  />
                        <img src={ TEL } alt="TEL" className='moveLeft'  />
                        <img src={ IN } alt="IN" className='moveLeft'  />
                        <img src={ YOU } alt="YOU" className='moveLeft'  />
                    </div>
                    <div className='iconDown'>
                        <img src={ XT } alt="XT"  />
                        <img src={ Coinmarketcap } alt="Coinmarketcap" className='moveLeft'  />
                        <img src={ Coingecko } alt="Coingecko" className='moveLeft'  />
                        <img src={ Etherscan } alt="Etherscan" className='moveLeft'  />
                        <img src={ Ethplorer } alt="Ethplorer" className='moveLeft'  />
                        <img src={ Medium } alt="Medium" className='moveLeft'  />
                    </div>
                </div>
            </div>
        </div>
        <div className='footerDown'>
            <p className='footerDownLeft'>HEdpAY Technologies</p>
            <p className='footerDownRight'>© 2022 Hedpay Technologies. All rights reserved.</p>
        </div>
      </div>
    );
  }
}

