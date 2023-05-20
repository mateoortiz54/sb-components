import './mylabel.css';

export interface MyLabelProps {

    /**
     * Is this the message that will show in component.
     */
    label? : string;
    /**
     * Is this the size of component. 
     */
    size? : 'normal' | 'h1' | 'h2' | 'h3';
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



export const MyLabel = ({
    label = 'No Label',
    size = 'normal',
    allCaps= false,
    color='primary',
    fontColor,
    backgroundColor
}:MyLabelProps ) => {
  return (
    <div 
        className={` label ${size} text-${color}`}
        style={{'color': fontColor, backgroundColor}}
        >
        {
            allCaps? label.toUpperCase(): label  
        }
    </div>
  )
}
