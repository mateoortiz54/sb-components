import './mylabel.css';
export interface MyLabelProps {
    /**
     * Is this the message that will show in component.
     */
    label?: string;
    /**
     * Is this the size of component.
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Is this type of letter captalize.
     */
    allCaps?: boolean;
    /**
     * Is this the letter color.
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Is this the font color.
     */
    fontColor?: string;
    /**
     * Is this the background color.
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: MyLabelProps) => import("react/jsx-runtime").JSX.Element;
