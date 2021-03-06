import React, {Component} from 'react';
import ArticleList from './article_list';
import NavBar from './navbar';
import SideBar from './sidebar';
import {Link} from 'react-router';
import ArticleActions from '../actions/article_actions';

class BlogApp extends Component {
    componentWillMount () {
        ArticleActions.downloadArticles();
    }
    render () {
        return (
            <div>
                <NavBar />
                <div id='content' className='col-md-8'>
                    {this.props.children}
                </div>
                <SideBar />
            </div>
        );
    }
}

export default BlogApp;