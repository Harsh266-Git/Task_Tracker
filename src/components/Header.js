import Button from "./Button";
let Header = ({title}) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text='Hello' />
    </header>
  );
};
export default Header;
