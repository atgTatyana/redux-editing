import { Dispatch } from 'redux';
import { IItem } from '../components/Editing';

declare module './changeList.js' {
// Определение типов для экшенов
  export function setForm(dispatch: Dispatch): (listItem: IItem) => void;
  export function submitForm(dispatch: Dispatch): () => void;
  export function setEdit(dispatch: Dispatch): (edit: boolean) => void;
  export function deleteItem(dispatch: Dispatch): (itemName: string) => void;
}
