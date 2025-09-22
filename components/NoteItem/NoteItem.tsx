import { Note } from "@/lib/api";
import css from "./NoteItem.module.css";

type Props = {
    item: Note;
};

const NoteItem = ({ item }: Props) => {
    return (
        <li className={css.noteItem}>
            <p>{item.title}</p>
        </li>
    );
};

export default NoteItem;
