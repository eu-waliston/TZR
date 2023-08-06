import React from "react";

interface Props {
  className: string;
}


export const Button: React.FC<Props> = (props) => {
  return <div></div>
};

const ButtonComponent = () => {
  return (
    <>
      <Button className="my-class"></Button>
    </>
  );
};

export default ButtonComponent;
