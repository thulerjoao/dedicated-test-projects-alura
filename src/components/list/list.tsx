import { useList } from "../../state/hook/useList";

const List = () => {

  const list: string[] = useList();

  return (
    <ul>
      {list &&
        list.map((item) => {
          return (
            <li key={item}>
              {item}
            </li>
          );
        })}
    </ul>
  );
};

export default List;
