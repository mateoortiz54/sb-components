import { MyLabel } from '../../components/MyLabel';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
    title: 'Example/MyLabel',

    component: MyLabel,
    argTypes:{
      size: {control: 'select', options:['normal', 'h1', 'h2', 'h3']}  ,
    //   color: {control: 'select', options:['primary', 'secondary', 'tertiary']}  
        color:{control: 'select'},
        fontColor: {control: 'color'}
    },


    tags: ['autodocs'], 
} as Meta<typeof MyLabel>;

// type Story = StoryObj<typeof MyLabel>

const Template: StoryFn<typeof MyLabel>= (args) => <MyLabel {...args} />

export const Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    allCaps: false,

}

export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true,
}

export const Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    color: 'secondary',
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary',
}
export const CustomFontColor = Template.bind({});
// CustomFontColor.args = {
//     fontColor:
// }