import React from "react";
import { TextArea } from "components";
import { Meta, Story } from "@storybook/react";

export default {
  title: "valdecir_s_application9/TextArea",
  component: TextArea,
};

export const SampleTextarea: Story<any> = (args) => <TextArea {...args} />;

SampleTextarea.args = { placeholder: "placeholder" };
