'use client';
import CustomButton from './CustomButton';

export default function CustomButtonDemo() {
  const onClickHandler = () => console.log('Clicked');
  return <CustomButton onClick={onClickHandler} label='Click Me' />;
}
