import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost, showAlert } from "../redux/actions";
import { Alert } from "./Alert";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  submitHandler = (event) => {
    event.preventDefault();
    const { title } = this.state;
    if (!title.trim()) {
      return this.props.showAlert("Название поста не может быть пустым!");
    }
    const newPost = {
      title,
      id: Date.now().toString(),
    };
    this.props.createPost(newPost);
    this.setState({ title: "" });
  };
  changeInputHandler = (event) => {
    this.setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        {this.props.alert && <Alert text={this.props.alert} />}

        <div class="form-group">
          <label htmlFor="title">Заголовок поста</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.changeInputHandler}
          />
          <button className="btn btn-success" type="submit ">
            Создать
          </button>
        </div>
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    alert: state.app.alert,
  };
};
/* const mapDispatchToProps = {
  createPost,
}; */
export default connect(mapStateToProps, { createPost, showAlert })(PostForm);
