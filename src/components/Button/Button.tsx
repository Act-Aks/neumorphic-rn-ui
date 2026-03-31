import { Pressable } from "react-native";
import { cn } from "tailwind-variants";
import { type ButtonProps, buttonVariants } from "./Button.static";

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, ...restProps } = props;
  const { variant, size, shape } = props;

  return (
    <Pressable
      className={cn(className, buttonVariants({ variant, shape, size }))}
      {...restProps}
    />
  );
};
