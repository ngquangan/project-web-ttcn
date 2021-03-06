import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
export default class LoginScreen extends Component {


    state = {
        isSignIn: true,
        email: '',
        password: '',
        email_signup: '',
        fullname: '',
        password_signup: '',
        repeat_password_signup: '',
        check_password_signup: true,
        isSuccess: false,
        errMsgSignIn: '',
        errMsgSignUp: '',
    }

    _isMounted = false;

    showSignIn = (isSignIn) => {
        this.setState({
            isSignIn
        });
    }

    onSignUp = (e) => {
        e.preventDefault();
        let {password_signup, repeat_password_signup} = this.state;

        if(password_signup !== repeat_password_signup) {
            this.setState({
                check_password_signup: false
            });
            return false;
        }

        let user = {
            userID: "u_" + new Date().getTime(),
            email: this.state.email_signup,
            password: this.state.password_signup,
            fullname: this.state.fullname,
            username: '',
            votes: 0,
            unvotes: 0,
            avatar: '/images/users/img_avatar_default.png',
            categories: [],
            tags: [],
            follow: [],
            saveQuestions: []
        }

        this.props.onCreateUser(user).then(res => {
            if(this.props.statusCreated) {
                if(this._isMounted){
                    this.setState({
                        email_signup: '',
                        fullname: '',
                        password_signup: '',
                        repeat_password_signup: '',
                        check_password_signup: true,
                    });
                }    

            } else {
                this.setState({
                    error: "Đã có lỗi xãy ra!"
                });
            }
        }).catch(err => {
            console.log(err);
        });

    }

    onSignIn = (e) => {
        e.preventDefault();
        let {password, email} = this.state;

        let user = {
            email,
            password,
        }

        this.props.onSignIn(user).then(res => {
            if(this.props.statusSignIn) {
                if(this._isMounted) {
                    this.setState({
                        email: '',
                        password: '',
                    });
                }
            } else {
                if(this._isMounted) {
                    this.setState({
                        error: "Đã có lỗi xãy ra!"
                    });
                }
            }
        }).catch(err => {
            console.log(err);
        });

    }

    onLoginSocial = (name) => {
        if(name === "fb") {
            alert("Tính năng này đang được phát triển!");
        }

    }

    handleChange = (e) => {
        let target = e.target;
        let value = target.value === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState(
            {
                [name]: value
            }
        )
    }

    static getDerivedStateFromProps(props) {
        return {
            isSuccess: props.isSuccess,
            errMsgSignIn: props.errMsgSignIn,
            errMsgSignUp: props.errMsgSignUp
        }
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

  render() {
    return (
      <React.Fragment>
        {
            this.state.isSuccess && <Redirect to = "/"/>
        }

        <div className="wrapper">
        <div className="sign-in-page">
            <div className="signin-popup">
            <div className="signin-pop">
                <div className="row">
                <div className="col-lg-6">
                    <div className="cmp-info">
                    <div className="cm-logo">
                        <img src="images/users/iconLogo.png" alt = "logo" />
                        <div className="title">Cộng đồng hỗ trợ học tập</div>
                        <p>Website hỗ trợ học tập trực tuyến là website tạo ra một góc thảo luận cho
                            các bạn học sinh, sinh viên nhằm có thể giúp các bạn học sinh, sinh viên có thể thảo
                            luận, trao đổi, đóng góp ý kiến cho nhau nhằm mục đích nâng cao, mở rộng và tích lũy
                            thêm nhiều kiến thức cho mình hơn.</p>
                    </div>{/*cm-logo end*/}	
                    <img src="images/cm-main-img.png" alt = "logo" />			
                    </div>{/*cmp-info end*/}
                </div>
                <div className="col-lg-6">
                    <div className="login-sec">
                    <ul className="sign-control">
                        <li data-tab="tab-1" className= {this.state.isSignIn ? "current" : ""} onClick = {() => this.showSignIn(true)}><a>Sign in</a></li>				
                        <li data-tab="tab-2" className= {!this.state.isSignIn ? "current" : ""} onClick = {() => this.showSignIn(false)}><a>Sign up</a></li>				
                    </ul>			
                    <div className={this.state.isSignIn ? "sign_in_sec current" : "sign_in_sec"} id="tab-1">      
                        {
                            this.state.errMsgSignIn &&
                            <span className = "sign_error">{this.state.errMsgSignIn}</span>
                        }
                        <h3>Sign in</h3>
                        <form method="post" onSubmit = {this.onSignIn}>
                        <div className="row">
                            <div className="col-lg-12 no-pdd">
                                    <div className="sn-field">
                                    <input type="email" name="email" placeholder="Email" onChange = {this.handleChange} value = {this.state.email} required/>
                                    <i className="la la-envelope-o"></i>
                                    </div>
                                </div>
                            <div className="col-lg-12 no-pdd">
                            <div className="sn-field">
                                <input type="password" name="password" placeholder="Password" onChange = {this.handleChange} value = {this.state.password} required/>
                                <i className="la la-lock" />
                            </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                            <button type="submit" value="submit">Sign in</button>
                            </div>
                        </div>
                        </form>
                        <div className="login-resources">
                        <h4>Đăng nhập với</h4>
                        <ul>
                            <li><a className="fb" onClick = {() => this.onLoginSocial("fb")}><i className="fa fa-facebook" />Đăng nhập với Facebook</a></li>
                        </ul>
                        </div>{/*login-resources end*/}
                    </div>{/*sign_in_sec end*/}
                    <div className={!this.state.isSignIn ? "sign_in_sec current" : "sign_in_sec"} id="tab-2">
                        <div className="dff-tab current" id="tab-3">
                        {
                            this.state.errMsgSignUp &&
                            <span className = "sign_error">{this.state.errMsgSignUp}</span>
                        }
                        <h3>Sign up</h3>
                        <form method = "post" onSubmit = {this.onSignUp}>
                            <div className="row">
                            <div className="col-lg-12 no-pdd">
                                <div className="sn-field">
                                <input type="email" name="email_signup" placeholder="Email" onChange = {this.handleChange} value = {this.state.email_signup} required/>
                                <i className="la la-envelope-o"></i>
                                </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                                <div className="sn-field">
                                <input type="text" name="fullname" placeholder="Full Name" onChange = {this.handleChange} value = {this.state.fullname} required/>
                                <i className="la la-user" />
                                </div>
                            </div>

                            <div className="col-lg-12 no-pdd">
                                <div className="sn-field">
                                <input type="password" name="password_signup" placeholder="Password" onChange = {this.handleChange} value = {this.state.password_signup} required/>
                                <i className="la la-lock" />
                                </div>
                            </div>
                            {!this.state.check_password_signup && <span className = "sign_error">Mật khẩu không khớp</span>}
                            <div className="col-lg-12 no-pdd">
                                <div className="sn-field">
                                <input type="password" name="repeat_password_signup" placeholder="Repeat Password" onChange = {this.handleChange} value = {this.state.repeat_password_signup} required/>
                                <i className="la la-lock" />
                                </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                                <button type="submit" value="submit">Get Started</button>
                            </div>
                            </div>
                        </form>
                        </div>{/*dff-tab end*/}
                    </div>		
                    </div>{/*login-sec end*/}
                </div>
                </div>		
            </div>{/*signin-pop end*/}
            </div>{/*signin-popup end*/}
            
        </div>{/*sign-in-page end*/}
        </div>{/*theme-layout end*/}
      </React.Fragment>
    )
  }
}
