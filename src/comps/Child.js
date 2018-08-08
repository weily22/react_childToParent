import React from 'react'

export default class Child extends React.Component{
    state = {
        name: '',
        token_name: '',
        website: '',
        description: ''
    }
    changeHandle = (name,event) => {
        this.setState(Object.assign(this.state,{
            [name]: event.target.value
        }))
        this.props.base(this.state)
    }
    componentDidMount () {
        setTimeout(() => {
            this.props.base(this.state)
        }, 1000);
    }
    render () {
        return <div className="child">
            <div className="form_pName item">
                <p className="required"><label htmlFor="">Project Name</label></p>
                <input type="text" placeholder="Enter project name hear"
                       value={this.state.name}
                       onChange={this.changeHandle.bind(null, 'name')}/>
                <span className="err">(Project name should not be empty)</span>
            </div>
            <div className="form_tokenName item">
                <p><label htmlFor="">Token Name</label></p>
                <input type="text" placeholder="Enter your token name"
                       value={this.state.token_name}
                       onChange={this.changeHandle.bind(null, 'token_name')}/>
            </div>
            <div className="form_webUrl item">
                <p className="required"><label htmlFor="">Website URL</label></p>
                <input type="text"
                       placeholder="Example:https://iungo.network/?utm_source=icorating&utm_medium=listing&utm_campaign=ico"
                       value={this.state.website}
                       onChange={this.changeHandle.bind(null, 'website')}/>
            </div>
            <div className="form_description item">
                <p className="required"><label htmlFor="">Description</label></p>
                <textarea name="" id="" cols="" rows="10"
                          placeholder="Tell us more about the project, Instruction"
                          value={this.state.description}
                          onChange={this.changeHandle.bind(null, 'description')}>
                    </textarea>
            </div>
        </div>
    }
}