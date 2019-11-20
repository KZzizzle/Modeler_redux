import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { language: state.language };
};

const ConnectedList = ({ language }) => (
  <ul>
    {language.map(el => (
      <li key={el.id}>{el.title}</li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;