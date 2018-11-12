import React, { Component } from 'react'
import QuestionTopbar from './QuestionTopbar';
import Question from './Question';
import LoadMore from '../../../commons/LoadMore/components/LoadMore';
import Main from '../../../commons/Main/components/Main';

export default class NewfeedScreen extends Component {

  componentDidMount = () => {
    this.props.getQuestions();
    this.props.getCategories();
  }
  
  showQuestion = (questions) => {
    if(questions.length > 0) {
      return questions.map((question, index) => {
        return <Question 
          key = {index}
          question = {question}
        />
      });
    }
    
  }

  render() {
    return (
      <React.Fragment>
        <Main>
          <div className="wrapper">
              <QuestionTopbar 
                addNewQuestion = {this.props.addNewQuestion}
                categories = {this.props.categories}
              />
              <div className="posts-section">
                {this.showQuestion(this.props.questions)}
                <LoadMore />
              </div>{/*posts-section end*/}
          </div>{/*theme-layout end*/}
        </Main>
      </React.Fragment>
    )
  }
}
