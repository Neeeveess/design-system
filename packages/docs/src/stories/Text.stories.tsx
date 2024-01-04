import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typograohy/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, cum quasi porro facilis totam officia eligendi corporis unde ipsa voluptates delectus repellat? Quas accusantium cupiditate dolore necessitatibus ipsum, aspernatur reprehenderit?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
