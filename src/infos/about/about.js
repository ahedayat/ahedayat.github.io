import React from "react";

const Bold_content = props => (
  <span style={{ fontWeight: "bold" }}>{props.content}</span>
);

const Start_paragraph = () => <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>;

const about = props => (
  <div>
    <p>
      <Start_paragraph />I am a <Bold_content content="B.Sc. student" /> at the
      <Bold_content content=" School of Electrical and Computer Engineering " />
      at
      <Bold_content content=" College of Engineering, University of Tehran, Iran" />
      .
    </p>
    <p>
      <Start_paragraph />
      My research interests lie primarily in the area of{" "}
      <Bold_content content=" Computer Vision" /> and
      <Bold_content content=" Machine Learning" />. To be specific, I am
      pariticularly interested in <Bold_content content="Object Detection" /> ,{" "}
      <Bold_content content="Image Segmentation" />, and{" "}
      <Bold_content content="Cognitive Neuroscience" />.
    </p>
  </div>
);

export default about;
