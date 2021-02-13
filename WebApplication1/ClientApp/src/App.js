import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

/*import { Layout } from './components/Layout';*/
/*import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';*/


import "./styles/main.css"
/*import './custom.css'*/


import {MFA} from './components/MFA';
import {Jazz} from './components/Jazz';
import {Bot} from './components/Bot'
import Nordstrom from './components/Nordstrom';
import Quentin from './components/Quentin';

export default class App extends Component {
  
  static displayName = App.name;

  constructor(props) {
    super(props)
  
    this.state = {
       toggleChat: false,
       
       getID: '',
       toggleImage: require("./styles/assets/tab-1.jpg")
    }
    this.showChat = this.showChat.bind(this)      



    this.refSectionTwo = React.createRef()
    this.switchImages = this.switchImages.bind(this)


  }
    // componentDidMount(){
    //   this.refSectionTwo.current.focus()
    // }
  
  showChat(){
    if(this.state.toggleChat === false){ 
      this.setState({toggleChat: true})
    }
    else{
      this.setState({toggleChat: false})
    }
  }

  // section2
  switchImages = (event, id) => {
    event.preventDefault()
    this.setState({getID: id})
    // console.log(this.state.getID)

    
    console.log(this.refSectionTwo.childNodes)

    switch(id){
      case this.refSectionTwo.childNodes[0].id:
        // this.refSectionTwo.childNodes[0].style = "background: '#E6EAF0 0% 0% no-repeat padding-box';"
        this.setState({toggleImage: require( "./styles/assets/tab-3.jpg" )})
        break
      case this.refSectionTwo.childNodes[2].id:
        this.setState({toggleImage: require( "./styles/assets/tab-2.jpg" )})
        break
      case this.refSectionTwo.childNodes[4].id:
        this.setState({toggleImage: require( "./styles/assets/tab-1.jpg" )})
        break
    }
   
    // console.log(this.refSectionTwo.childNodes[0])
    // console.log(id)
    

  }


  render () {
    const styleSectionTwoBG = {
      padding: '10px',
      background: '#E6EAF0 0% 0% no-repeat padding-box',
      border: 'transparent',
      transition: 'background-color .3s ease-out'
    }
    const styleSectionTwoImages = {
      background: `url(${this.state.toggleImage}) no-repeat center`,
      transition: 'background-image 1.8s ease-in',
      width: '50%'
    }
    
    return (
      /*<Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
      </Layout>*/

        <>    
        <Router>
            
            <section className={'banner'}></section>
           
            <header>
              <nav class="home__nav">
                <ul>
                  <li>
                    <Link to="/">Nordstrom</Link>
                  </li>
                  <li>
                    <Link to="/mfa">MFA</Link>
                  </li>
                  <li>
                    <Link to="/jazz">Jazz</Link>
                  </li>
                  <li>
                    <Link to="/quentin">Quentin Tarantino</Link>
                  </li>
                </ul>
              </nav>
      
              <Switch>
                <Route exact path="/" >
                 <Nordstrom />
                </Route>

                <Route path="/mfa" >
                  <MFA />
                </Route>

                <Route path="/jazz" >
                  <Jazz />
                </Route>

                 <Route path="/quentin" >
                  <Quentin />
                </Route>
              </Switch>
            </header>
           
            
            <section className={'bot'}>
            {/* if toggleChat is true, show chat */}
              <article className={'bot__chat'}>
                {this.state.toggleChat === true ? <Bot /> : null}
              </article>
            </section>

            {/* all other components fall under here; as the user switches routes, change Sagans but keep other contents as the same through every page route. */}
            <section className={'bot'}>
                {/* <button onClick={this.showChat} type="button" class="btn btn-primary">Chat/Help</button> */}
              <article className={'bot__btn-show'}>
                <button onClick={this.showChat} type="button">Chat/Help</button>
              </article>
            </section>



{/* section2 */}
<section className={'section-two'}>
  <article className="section-two__left-side">
    <ul ref={ref => this.refSectionTwo = ref} className={'section-two__left-side-text'} >
      <li style={this.state.getID === '1' ? styleSectionTwoBG : null} onClick={event => this.switchImages(event, this.refSectionTwo.childNodes[0].id)} id="1">Your exhibits (past and future), sales training, customer support, content archive, personnel file storage, onboarding &amp; training – all on the web in an immersive environment.</li>
      <br />
      <li style={this.state.getID === '2' ? styleSectionTwoBG : null} onClick={event => this.switchImages(event, this.refSectionTwo.childNodes[2].id)} id="2">Each person and organization has their own style. With our Professional Services Team – you dream it, we build it! Your brand, your product, your story – all in 3D.</li>
      <br />
      <li style={this.state.getID === '3' ? styleSectionTwoBG : null} onClick={event => this.switchImages(event, this.refSectionTwo.childNodes[4].id)} id="3">You’ve developed a powerful 3D environment, now share it to the masses! With our publishing features, you can share with a URL or put this environment right onto your website. Talk about an experience!</li>
      <br />
    </ul>
  </article>

  <article className="section-two__right-side">
    {/* this.state.toggleImage ;   './styles/assets/tab-1.jpg'*/}
    <img src={this.state.toggleImage} width="50%" />
  </article>
</section>


            {/* section3 */}
            <section class="c-purpose-passion">
	<article class="c-purpose-passion__left-side">
		<div class="c-purpose-passion__left-side--inner">
			<h3>Free - Forever</h3>
			<p>At Saganworks, we believe in the democratization of publishing 3D spaces. Anyone, with any device, can create a free account to check out what we're about, explore published 3D spaces, build and publish their own environments, and share experiences with the simplicity of an email or URL.</p>
			<button type="submit">Create an Account</button>
		</div>
	</article>
	<article class="c-purpose-passion__right-side-image"></article>
</section>




{/* footer */}
<section class="footer">
	<article class="footer__routes">
		<ul class="footer__l-list">
			<li class="l-list__items">Product</li>
			<li class="l-list__items">Explore</li>
			<li class="l-list__items">Business Solutions</li>
			<li class="l-list__items">News &amp; Blog</li>
			<li class="l-list__items">Getting Started</li>
		</ul>
		<hr style={{width:'100%', borderColor: '#dcd7ca'}} />
	</article>


	<div class="footer__social">
		<article class="footer__icons">
			<ul class="footer__l-list">
				<li><a href="#">
						<svg style={{fill:'gold'}} class="Icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>					
				</a></li>
				<li>
					<a href="#">
						<svg style={{fill:'gold'}} width="24" height="24" class="Icon" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg"><g><g transform="translate(-102.000000, -7.000000)"><g transform="translate(0.000000, 3.000000)"><g transform="translate(102.000000, 0.000000)"><path d="M14.1151611,6.21334681 C14.7932148,5.77654196 15.3134942,5.08392315 15.5576686,4.25884732 C14.922815,4.66430738 14.2212831,4.95753286 13.4727945,5.11627907 C12.8755063,4.42871587 12.0218348,4 11.0770676,4 C9.26454188,4 7.79573869,5.58240647 7.79573869,7.5338726 C7.79573869,7.81092012 7.82297353,8.08088979 7.87932148,8.33872599 C5.15208077,8.19110212 2.73381464,6.78564206 1.11381112,4.64610718 C0.831132242,5.16986855 0.669601456,5.77654196 0.669601456,6.42366026 C0.669601456,7.64914055 1.24904619,8.73104146 2.12995246,9.36602629 C1.59182955,9.34782609 1.08563714,9.18705763 0.642366614,8.92416582 L0.642366614,8.96764408 C0.642366614,10.6804853 1.77308212,12.1092012 3.27663321,12.4327604 C3.00052826,12.5156724 2.71127546,12.5571284 2.41075307,12.5571284 C2.19944826,12.5571284 1.99283911,12.5358948 1.79374303,12.4944388 C2.21071785,13.8978766 3.42313788,14.9211325 4.86001057,14.9484328 C3.73586899,15.8968655 2.32059635,16.4610718 0.783236485,16.4610718 C0.518401127,16.4610718 0.256383166,16.445905 0,16.4125379 C1.45283794,17.4145602 3.1780243,18 5.03187181,18 C11.0704936,18 14.3706052,12.6147624 14.3706052,7.94438827 C14.3706052,7.79069767 14.3687269,7.6380182 14.362153,7.48736097 C15.0035804,6.98887765 15.5614251,6.36602629 16,5.65722952 C15.4111639,5.93832154 14.7781886,6.12841254 14.1151611,6.21334681 Z"></path></g></g></g></g></svg>
					</a>
				</li>
				<li>
					<a href="#">
						<svg style={{fill:'gold'}} width="24" height="24" class="Icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.4 38.3"><path d="M27.8-0.1H10.6C4.8-0.1,0,4.6,0,10.6v17.2c0,5.8,4.7,10.6,10.6,10.6h17.2c5.8,0,10.6-4.7,10.6-10.6V10.5C38.4,4.6,33.6-0.1,27.8-0.1z M19.2,28.9c-5.4,0-9.9-4.4-9.9-9.9c0-5.4,4.4-9.9,9.9-9.9c5.4,0,9.9,4.4,9.9,9.9S24.7,28.9,19.2,28.9z M31.2,10.8c-0.5,0.5-1.1,0.8-1.8,0.8s-1.3-0.3-1.8-0.8S26.8,9.7,26.8,9s0.3-1.3,0.8-1.8s1.1-0.8,1.8-0.8s1.3,0.3,1.8,0.8S32,8.3,32,9C31.9,9.6,31.6,10.3,31.2,10.8z"></path><path d="M19.2,12.6c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5s6.5-2.9,6.5-6.5S22.8,12.6,19.2,12.6z"></path></svg>
					</a>
				</li>
			</ul>

			<ul class="footer__l-list2">
				<li>About Us</li>
				<li>Contact Us</li>
				<li>Disclaimer</li>
				<li>Privacy Policy</li>
			</ul>

			<p>Copyright © Saganworks</p>
		</article>



		<article class="contact">

			<p>Connect with Us</p>
			
			<div class="contact__wrapper">
				<div class="contact__number">
					<button class="contact__number__phone-num">hello@saganworks.com</button>
				</div>

				<div class="contact__form">
					<input type="tel" placeholder="Enter your Email Address" id="contact__form_num" />
					<form action="" method="get">
						<button type="submit" class="contact__form_call">Submit</button>
					</form>
				</div>
			</div>

		</article>		
	</div>

	
	
	<hr style={{width:'100%', borderColor: '#dcd7ca', padding: '20px 0'}} />

	<article class="sponsors">
		<div class="sponsors__left-side">
			<p style={{color:'grey'}}>The information provided by RehabSpot.com is not a substitute for professional medical advice.</p>
			<p style={{color:'#e1ae4c'}}>Calls will be forwarded to these treatment providers</p>
		</div>
		<div class="sponsors__right-side">
			<div class="inner-left" style={{color:'grey'}}>This site complies with the HONcode standard for trustworthy health information: verify here.</div>
			<div class="inner-right" style={{color:'grey'}}>RehabSpot supports:</div>
		</div>
	</article>


</section>
            
          </Router>   
        </>
    );
  }
}
