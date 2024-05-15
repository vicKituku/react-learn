interface Props {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
  friends: string[];
}

export const Person = (props: Props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.email}</p>
      <p>{props.age}</p>
      <p>This person {props.isMarried ? "is" : "is not"} Married</p>
      {props.friends.map((friend: string) => (
        <p>{friend}</p>
      ))}
    </div>
  );
};
