import {connect} from 'react-redux';
import * as actions from '../../../actions/index';
import NewfeedScreen from '../components/NewfeedScreen';

const mapStateToProps = (state) => {

    return{
        questions: state.questionReducer.questions,
        categories: state.categoryReducer.categories,
        tags: state.tagReducer.tags,
        currentUserID: state.userReducer.currentUserID,
        currentUser: state.userReducer.currentUser,
        userOther: state.userReducer.userOther,
        categoryQuestion: state.categoryReducer.categoryQuestion,
        questionFollowers: state.questionReducer.questionFollowers,
        questionSavedUsers: state.questionReducer.questionSavedUsers
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getQuestions: () => {
            return dispatch(actions.getAllQuestionRequest())
        },
        addNewQuestion: (questionItem) => {
            return dispatch(actions.addNewQuestionRequest(questionItem));
        },
        getCategories: () => {
            return dispatch(actions.getAllCategoryRequest());
        },
        getTags: () => {
            return dispatch(actions.getAllTagsRequest());
        },
        getUser: (userID) => {
            return dispatch(actions.getUserRequest(userID));
        },
        getUserOther: (userID) => {
            return dispatch(actions.getUserOtherRequest(userID));
        },
        getCategoryQuestion: (categoryID) => {
            return dispatch(actions.getCategoryQuestionRequest(categoryID));
        },
        deleteQuestion: (questionID) => {
            return dispatch(actions.deleteQuestionRequest(questionID));
        },
        followQuestion: (questionID, userFollowID) => {
            return dispatch(actions.followQuestionRequest(questionID, userFollowID));
        },
        unFollowQuestion: (questionID, userFollowID) => {
            return dispatch(actions.unFollowQuestionRequest(questionID, userFollowID));
        },
        getQuestionFollowers: (questionID) => {
            return dispatch(actions.getQuestionFollowers(questionID));
        },
        saveQuestion: (questionID, userFollowID) => {
            return dispatch(actions.saveQuestionRequest(questionID, userFollowID));
        },
        unSaveQuestion: (questionID, userFollowID) => {
            return dispatch(actions.unSaveQuestionRequest(questionID, userFollowID));
        },
        getQuestionSavedUsers: (questionID) => {
            return dispatch(actions.getQuestionSavedUsers(questionID));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewfeedScreen);