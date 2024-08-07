import type { Meta, StoryObj } from '@storybook/react';

import { Field } from './field';

const meta = {
  component: Field,
} satisfies Meta<typeof Field>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};