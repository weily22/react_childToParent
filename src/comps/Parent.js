import React from 'react'
import Child from './Child'

export default class Parent extends React.Component{
    state = {
        name: '',
        token_name: '',
        website: '',
        description: ''
    }
    getChildValue = (msg) => {
        this.setState(msg)
        console.log('msg', msg)
    }
    render () {
        return <div className="parent">
            <h2>从子组件传递过来的值:</h2>
            <p className="parent_p"><b>name:</b> <span>{this.state.name}</span></p>
            <p className="parent_p"><b>token_name:</b> <span>{this.state.token_name}</span></p>
            <p className="parent_p"><b>website:</b> <span>{this.state.website}</span></p>
            <p className="parent_p"><b>description:</b> <span>{this.state.description}</span></p>
            <Child base={msg => this.getChildValue(msg)}/>
        </div>
    }
}