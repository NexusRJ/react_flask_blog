import React, {Component} from 'react'

class Category extends Component {
    render () {
        console.log(this.props)
        return (
            <div>
                {this.props.category_name}
            </div>
        )
    }
}

export default Category