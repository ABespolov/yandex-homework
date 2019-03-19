import React from "react";
import data from "../data.json";
import {Header} from "../Header";
import {Note} from "../Note";
import styles from "./App.module.css";

interface Note {
  color: number;
}

const getColor = (note: Note) => {
  const colorObject = data.colors.find((item) => item.id === note.color);
  return colorObject ? colorObject.color : "#fff";
};

export const App = () => {
  const notes = Array.from({length: 10}, (v, k) => (
    <Note
      // @ts-ignore
      color={getColor(data.notes[k])}
      size={data.notes[k].size}
      title={data.notes[k].title}
      text={data.notes[k].text}
      type={data.notes[k].type}
      tags={data.notes[k].tags}
      tagsList={data.tags}
      items={data.notes[k].items}
      created={data.notes[k].created}
      attachments={data.notes[k].attachments}
      reminder={data.notes[k].reminder}
      url={data.notes[k].url}
    />
  ));
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>{notes}</div>
    </>
  );
};
