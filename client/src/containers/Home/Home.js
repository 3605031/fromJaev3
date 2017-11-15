import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Parallax from 'react-simple-parallax';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            isAuthenticated: false
        };


    }




    render() {
        var background = {
            height: "500px",
            backgroundImage: 'url(https://c1.staticflickr.com/9/8061/8196484648_7d05d6d347_b.jpg)'
        }
        return (
            <div>
                <AppBar
                    title={<img height="70" src={require('./images/logo2016.png')} />}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <section>
                    <Parallax backgroundStyle={background} className="parallax" speedDivider="5">
                        <div>Hello World!</div>
                    </Parallax>
                </section>
            </div>
        );
    }
}

export default Home;