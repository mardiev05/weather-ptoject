import React, { Component } from "react";

export default class ErrorBoundry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false,
            error: "",
            errorInfo: ""
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }


    render() {
        const { hasError, error, errorInfo } = this.state
        if (hasError) {
            return <div>
                <p>{error.toString()}</p>
                <p>{errorInfo.componentStack}</p>
            </div>;
        } else {
            return this.props.children
        }
    }
}
