import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { createPost } from '../actions/postActions'
import { connect } from 'react-redux'
class Postform extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
       const post = {
           title: this.state.title,
           body: this.state.body
       }

       this.props.createPost(post)
    }

    render() {
        return (
            <div>
                PostForm
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="">Title:</label><br/>
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="">Body:</label><br/>
                        <textarea type="text" name="body" onChange={this.onChange} value={this.state.body} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}


Postform.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(Postform)