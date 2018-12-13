import React, { Component } from 'react'
import Tag from './Tag';

export default class Tags extends Component {

  onShowTag = (tags) => {
    return tags.map((tag, index) => {
      return <Tag 
              key = {index} 
              tag = {tag}
              count = {this.props.countTagItem[tag.tagID] ? this.props.countTagItem[tag.tagID] : 0}
              getCountQuestionsTag = {this.props.getCountQuestionsTag}
            />
    })
  }

  render() {
    return (
      <React.Fragment>
        {this.onShowTag(this.props.tags)}
      </React.Fragment>
    )
  }
}
