import React, {useState} from "react";

interface TodoFormProps {
  onAdd(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = ({onAdd}) => {
  const [title, setTitle] = useState<string>('');
  //const myRef = useRef<HTMLInputElement>(null); // для примера

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  };

  const onKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      //console.log(myRef.current!.value);
      //myRef.current!.value = '';
      onAdd(title);
      setTitle('');
    }
  };

  return (
    <div className="input-field">
      <input
        onChange={onChangeInput}
        onKeyPress={onKeyPress}
        // ref={myRef}
        type="text"
        id="title"
        placeholder="Todo item name"
        value={title}
      />
      <label htmlFor="title" className="active">Title</label>
    </div>
  );
};

export default TodoForm;
