import { EXAMPLE_PIPELINES } from "@/stories/constants";
import type { Meta, StoryObj } from "@storybook/react";
import * as Select from "./Select";

type SelectArgs = React.ComponentProps<typeof Select.Root> & {
  hideIcon?: boolean;
  loading?: boolean;
};

const meta: Meta<SelectArgs> = {
  component: Select.Root,
  render: ({ hideIcon, loading, ...args }) => (
    <Select.Root {...args}>
      <Select.Trigger className="w-72" hideIcon={hideIcon} loading={loading}>
        <Select.Value placeholder="Select a pipeline" />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content>
          {EXAMPLE_PIPELINES.map((pipeline) => (
            <Select.Item key={pipeline.value} value={pipeline.value}>
              {pipeline.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  ),
};

export default meta;

type Story = StoryObj<SelectArgs>;

export const Default: Story = { args: { disabled: false, loading: false } };

export const Disabled: Story = { args: { ...Default.args, disabled: true } };

export const Loading: Story = { args: { ...Default.args, loading: true } };

export const WithoutIcon: Story = {
  args: { ...Default.args, hideIcon: true },
};
