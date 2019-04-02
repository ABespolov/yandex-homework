
## Project link:
https://yhomework.herokuapp.com/
##
Был создан класс колекции заметок и соответсвующие данным интерфейсы:
```JavaScript
export class Notes {
    public static factory(Instance: Notes, data: NoteData[]) {
        Instance.notes = Instance.notes || [];
        for (const element of data) {
            Instance.addNote(element);
        }
    }
    private notes: Note[];

    constructor() {
        this.notes = [];
    }

    public addNote(data: NoteData) {
        this.notes.push(new Note(data));
    }

    public toArray() {
        return this.notes;
    }

    public map(callback: (item?: Note, index?: number, array?: Note[]) => NoteInterface) {
        const arr = [];
        for (let i = 0; i < this.notes.length; i++) {
            arr.push(callback(this.notes[i], i, this.notes));
        }
        return arr;
    }

    public [Symbol.iterator]() {
        return this.notes.values();
    }

    private getNoteSize = () => {
        /****not implemented****/
    }
}
```
Метод getNoteSize я не реализовывал, т.к. сетка заметок адаптивная как по ширине, так и по высоте, ширину заметок, на мой взгляд, должен выбирать сам пользователь, поэтому планируется реализовать графический интерфейс с добавлением новых заметок и выбором их размера при создании. На текущий момент есть простой алгоритм расчета высоты заметок:
```JavaScript
useLayoutEffect(() => {
            if (note !== null && note.current !== null) {
                note.current.style.gridRow = `span 1`;
                const minHeight = 160;
                let rows = Math.floor(note.current.offsetHeight / minHeight);
                if (rows > 3) {
                    rows = 3;
                }
                note.current.style.gridRow = `span ${rows}`;
            }
        }, [updateHeight]);
```
Который срабатывает при изменении контента в карточке.

В проетке отсутствуют неявные типы и // @ts-ignore
