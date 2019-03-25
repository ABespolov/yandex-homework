import React from "react";
import data from "../data.json";
import {Filter} from "../Filter";
import {Footer} from "../Footer";
import {Header} from "../Header";
import {Note} from "../Note";
import {NoteInterface} from "../Note";
import styles from "./App.module.scss";

const getColor = (note: NoteInterface) => {
  const colorObject = data.colors.find((item) => item.id === note.color);
  return colorObject ? colorObject.color : "#fff";
};

const getTags = (note: NoteInterface) => {
  const tagsList = data.tags.filter((item) =>
    // @ts-ignore
    note.tags && note.tags.some((num) => num === item.id));
  return tagsList;
};

export const App = () => {
  const notes = Array(data.notes.length).fill(0).map((item, index) => (
    <Note
      // @ts-ignore
      color={getColor(data.notes[index])}
      size={data.notes[index].size}
      title={data.notes[index].title}
      text={data.notes[index].text}
      type={data.notes[index].type}
      // @ts-ignore
      tags={getTags(data.notes[index])}
      // @ts-ignore
      items={data.notes[index].items}
      created={data.notes[index].created}
      attachments={data.notes[index].attachments}
      reminder={data.notes[index].reminder}
      url={data.notes[index].url}
    />
  ));
  return (
    <>
      <div className={styles.wrapper}>
        <Header/>
        <div className={styles.content}>
          <Filter colors={data.colors}/>
          <div className={styles.notesWrapper}>{notes}</div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
