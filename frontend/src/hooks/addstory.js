import React, { Fragment, useState } from "react";
import { useStories } from "../contexts/stories";

// add story form allows signed in user to create a story
// story includes title and body in form.
// to add a story, we will need to useStories
// in order to access action

export const AddStory = () => {
  const [state, { addStory }] = useStories();
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });
  const { title, body } = formData;

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addStory(formData);
  };

  return (
    <Fragment>
      <div className="container">
        <h1 className="cover-heading">Share Your Story</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            id="title-input"
            placeholder="Story Title"
            value={title}
            onChange={(e) => handleChange(e)}
          />

          <textarea
            id="body-textarea"
            name="body"
            placeholder="story"
            value={body}
            onChange={(e) => handleChange(e)}
          />
          <input type="submit" value="Add Story" />

        </form>
      </div>
    </Fragment>
  );
};

export default AddStory;
