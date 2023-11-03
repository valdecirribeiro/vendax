import React from "react";
import { Meta, Story } from "@storybook/react";
import { Input } from "components";

export default {
  title: "valdecir_s_application9/Input",
  component: Input,
};

export const SampleInput: Story<any> = (args) => <Input {...args} />;
SampleInput.args = {
  color: "gray_200",
  size: "md",
  shape: "RoundedBorder5",
  variant: "underline",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
