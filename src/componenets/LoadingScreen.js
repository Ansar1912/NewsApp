import React, { Component } from 'react'
import loading from './loading.gif'
export class LoadingScreen extends Component {
    render() {
        return (
            <div style={{
                width: "100vw",
                height: "100vh",
                background: "white",
            }}>
                <img src={loading} alt="" style={{
                    display: "block",
                    margin: "0 auto",
                    top: "50%",
                    transform: "translateY(50%)"
                }} />
            </div>
        )
    }
}

export default LoadingScreen