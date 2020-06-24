import React, {useState, useRef} from "react";

const TodoForm: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  //const myRef = useRef<HTMLInputElement>(null); // для примера

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  };

  const onKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      //console.log(myRef.current!.value);
      //myRef.current!.value = '';
      console.log(title);
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
