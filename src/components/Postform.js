import React, { Component } from 'react'

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

       fetch('http://jsonplaceholder.typicode.com/posts', {
           method: 'POST',
           headers: {
            "Content-type": "application/json; charset=UTF-8"
           },
           body: JSON.stringify(post)
       })
       .then(res => res.json())
       .then(data => console.log(data))
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


export default Postform