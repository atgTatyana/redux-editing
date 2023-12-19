import { useDispatch, useSelector } from "react-redux";
import { setForm, submitForm, setEdit, deleteItem } from "../redux/changeList.js";

interface IItem {
  itemName: string,
  itemValue: string,
}

// interface IState {
//   workList: {
//     edit: boolean,
//     listItem: IItem,
//     list: IItem[],
//   }
// }

export const Editing = () => {
  const dispatch = useDispatch();
  const { list, listItem, edit } = useSelector((state) => state.workList);
  console.log(listItem, list);

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form data = ", listItem);
    submitForm(dispatch)();
    handleCancel()
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(dispatch)({
      ...listItem,
      [name]: value,
    });
  }

  const handleEdit = (itemName: string) => {
    setEdit(dispatch)(true);
    const editItem = list.filter((item: IItem) => item.itemName === itemName);
    setForm(dispatch)(editItem[0]);
  }

  const handleDelete = (itemName: string) => {
    deleteItem(dispatch)(itemName);
    handleCancel();
  }

  const handleCancel = () => {
    setForm(dispatch)({
      itemName: "",
      itemValue: "",
    })
    setEdit(dispatch)(false);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="itemName" value={listItem.itemName} onChange={handleChange}/>
        <input type="text" name="itemValue" value={listItem.itemValue} onChange={handleChange}/>
        <button type="submit">Save</button>
        {edit && <button onClick={handleCancel}>Cancel</button>}
      </form>

      <ul>
        {list.filter((item: IItem) => item.itemName.startsWith(listItem.itemName))
          .map((item: IItem) => (
            <li key={item.itemName}>
              <span style={{fontSize: '1.5em', fontWeight: '600'}}>{item.itemName} </span>
              <span style={{fontSize: '1.5em', fontWeight: '600'}}>{item.itemValue} </span>
              <button className="material-icons" onClick={() => handleEdit(item.itemName)}>edit</button>
              <button className="material-icons" onClick={() => handleDelete(item.itemName)}>close</button>
            </li>     
        ))}
      </ul>
    </>
  )
}
