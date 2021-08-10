// import React from 'react';
import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import './style.css';
import loginImage from '../bag_of_party';



export class Header extends Component {
    constructor(props) {
      super(props);

      this.state = {
          signIn: false,
          logIn: false,
      }
    }
    onOpenModal = () => {
        this.setState({ signIn: true })
    };

    onOpenModal = () => {
        this.setState({ logIn: true })
    };

    onCloseModal = () => {
        this.setState({ signIn: false })
    };

    onCloseModal = () => {
        this.setState({ logIn: false })
    };

    render() {
        const { logIn, signIn } = this.state;
        return (
            <div>
                <header className="header header-animated opaque" style={{ "display":'block', "paddingTop":"5px", "paddingBottom":"5px"}}>
                    <div className='container'>
                        <nav className='nav-bar navbar-default' role='navigation'>
                            <div className="navbar-header">
                                <a className="logo" herf="#">
                                    <img className="img-responceive logo" src={loginImage} alt=""  />
                                </a>
                            </div>

                            <div className="nav-toggle collapsed" data-toggle="collapse" data-target="#navbarMain" aria-expanded="false" style={{ "top":"15px"}}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="navbar-collapse collapse in" id="navbarMain" aria-expanded="true" style={{top: "65px"}}>
                                <ul className="nav navbar-nav navbar-right">
                                    <li>
                                        <button className="btn btn-primary-outline" id="signup" onClick={this.onOpenModal}>SignUp</button>
                                    </li>
                                    <li>
                                        <button className="btn btn-primary-outline" id="login" onClick={this.onOpenModal}>Login</button>
                                    </li>
                                </ul>
                                <ul className="nav navbar-nav collapsed-color">
                                    <li>
                                        <a herf="#">About</a>
                                    </li>
                                    <li>
                                        <a herf="#">Groups</a>
                                    </li>
                                    <li>
                                        <a herf="#">Contact</a>
                                    </li>
                                    <li>
                                        <a herf="#">Home</a>
                                    </li>
                                </ul>

                            </div>
                        </nav>
                    </div>
                </header>
                
                <Modal open={signIn} onClose={this.onCloseModal}>
                    <div className="modal-body">
                        <h2>Get Started  Absolutely <span> Free For Now </span></h2>
                        <span className="subtitle">Some Subtitle</span>
                        <form className="contact-form form-validate3" novalidate="novaliate">
                            <div className="form-group">
                                <input className="form-group" type="text" name="name" id="name" placeholder="First Name" required="" autocomplete="off" aria-required="ture"></input>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="email" name="email" placeholder="E-mail" required="" autoComplete="off" aria-required="true" />
                            </div>
                            <div className="form-group">
                                <input type="password" name="pass" className="form-control" placeholder="Password" required="" autoComplete="off" aria-required="true" />
                            </div>
                            <input className="btn btn-md btn-primary btn-center" id="sign_up" type="button" value="Sign Up" />
                        </form>
                    </div>
                </Modal>

                <Modal open={logIn} onClose={this.onCloseModal}>
                    <div className="modal-body">
                        <h2>Login and Get <span>Started</span></h2>
                        <span className="subtitle">Just fill in the form below</span>
                        <form className="constact-form form-validate4" novalidate="novalidate">
                            <div className="form-group">
                                <input className="form-control" type="email" name="email" placeholder="E-mail" required="" autoComplete="off" aria-required="true" />
                            </div>
                            <div className="form-group">
                                <input type="password" name="pass" className="form-control" placeholder="Password" required="" autoComplete="off" aria-required="true" />
                            </div>
                            <input className="btn btn-md btn-primary btn-center" id="login_btn" type="button" value="Login" />
                        </form>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Header