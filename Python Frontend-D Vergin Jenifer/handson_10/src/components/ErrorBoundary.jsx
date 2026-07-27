import React, { Component } from "react";

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        };
    }


    static getDerivedStateFromError() {
        return {
            hasError: true
        };
    }


    componentDidCatch(error, errorInfo) {
        console.error("Application Error:", error);
        console.error("Error Details:", errorInfo);
    }


    render() {

        if (this.state.hasError) {
            return (
                <div>
                    <h1>Student Portal</h1>
                    <h2>Something went wrong.</h2>
                    <p>
                        Please refresh the page and try again.
                    </p>
                </div>
            );
        }


        return this.props.children;
    }
}

export default ErrorBoundary;