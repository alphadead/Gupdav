declare module 'react-slick' {
    import { Component } from 'react';
  
    export interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      centerMode?: boolean;
      centerPadding?: string;
      afterChange?: (current: number) => void;
      // Add any other settings that you're using
    }
  
    export class Slider extends Component<Settings> {}
  
    export default Slider;
  }
  