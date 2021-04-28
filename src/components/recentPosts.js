import React, { Component } from 'react';

class RecentPosts extends Component {
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

export default RecentPosts;