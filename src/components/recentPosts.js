import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class RecentPosts extends Component {
    componentDidMount() {
        this.props.fetchRecentPosts(); 
    }
    render() {
        return (
            <div className="recent-posts">
                <div className="recent-posts-wrapper">
                    <div className="recent-posts-heading">Recent Posts</div>
                    <ul className="recent-posts-posts">
                        <li>Recent Posts 1</li>
                        <li>Recent Posts 2</li>
                        <li>Recent Posts 3</li>
                    </ul>
                </div>
                
            </div>
        )
    }
}

export default connect(null, actions)(RecentPosts);