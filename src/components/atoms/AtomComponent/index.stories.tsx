import { StoryObj, Meta } from "@storybook/react";
import { AtomComponent } from ".";

type Props = Parameters<typeof AtomComponent>[0];

const Component = (args: Props) => {
  const handleClick = () => {
    alert("clicked");
  };
  return <AtomComponent {...args} handleClick={handleClick} />;
};

export default {
  component: Component,
} as Meta<typeof AtomComponent>;

export const Default: StoryObj<typeof AtomComponent> = {
  args: {
    textColor: "blue",
    borderColor: "red",
  },
};

export const Button: StoryObj<typeof AtomComponent> = {
  args: {
    textColor: "red",
    borderColor: "blue",
  },
};

