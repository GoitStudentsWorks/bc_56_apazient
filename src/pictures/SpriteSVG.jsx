import React from 'react';

export const SpriteSVG = ({ name }) => {
  switch (name) {
    case 'home-page':
      return (
        <svg id="icon-home-page" viewBox="0 0 32 32">
          <path d="M6.545 2.182c-2.41 0-4.364 1.954-4.364 4.364v18.909c0 2.41 1.954 4.364 4.364 4.364h18.909c2.41 0 4.364-1.954 4.364-4.364v-18.909c0-2.41-1.954-4.364-4.364-4.364h-18.909zM13.77 17.716v5.961h-4.97v-7.948h-2.982l9.939-8.941 9.939 8.941h-2.982v7.948h-4.97v-5.961h-3.976z"></path>
        </svg>
      );
    case 'currency':
      return (
        <svg id="icon-currency" viewBox="0 0 32 32">
          <path d="M6.545 2.182c-2.41 0-4.364 1.954-4.364 4.364v18.909c0 2.41 1.954 4.364 4.364 4.364h18.909c2.41 0 4.364-1.954 4.364-4.364v-18.909c0-2.41-1.954-4.364-4.364-4.364h-18.909zM13.638 13.526c0 0.86 0.661 1.412 2.715 1.946s4.253 1.412 4.253 3.982c0 1.855-1.403 2.878-3.167 3.212v1.946h-2.715v-1.964c-1.737-0.371-3.222-1.484-3.33-3.466h1.991c0.1 1.068 0.833 1.9 2.697 1.9 2 0 2.443-0.995 2.443-1.62 0-0.842-0.452-1.638-2.715-2.181-2.525-0.606-4.253-1.647-4.253-3.737 0-1.747 1.412-2.887 3.167-3.267v-1.955h2.715v1.982c1.891 0.462 2.841 1.891 2.905 3.448h-2c-0.054-1.131-0.651-1.9-2.262-1.9-1.529 0-2.443 0.688-2.443 1.674z"></path>
        </svg>
      );
    case 'statistic':
      return (
        <svg id="icon-statistic" viewBox="0 0 32 32">
          <path d="M6.667 4h18.667c1.473 0 2.667 1.194 2.667 2.667v18.667c0 1.473-1.194 2.667-2.667 2.667h-18.667c-1.473 0-2.667-1.194-2.667-2.667v-18.667c0-1.473 1.194-2.667 2.667-2.667zM23.636 14.222c0.933 0 1.697-0.8 1.697-1.778s-0.764-1.778-1.697-1.778-1.697 0.8-1.697 1.778c0 0.16 0.017 0.311 0.059 0.453l-3.012 3.165c-0.136-0.045-0.289-0.062-0.441-0.062s-0.305 0.018-0.441 0.062l-2.164-2.267c0.042-0.142 0.059-0.302 0.059-0.462 0-0.978-0.764-1.778-1.697-1.778s-1.697 0.8-1.697 1.778c0 0.16 0.017 0.32 0.059 0.462l-3.869 4.044c-0.136-0.044-0.28-0.062-0.433-0.062-0.933 0-1.697 0.8-1.697 1.778s0.764 1.778 1.697 1.778 1.697-0.8 1.697-1.778c0-0.16-0.017-0.311-0.059-0.453l3.861-4.053c0.136 0.044 0.288 0.062 0.441 0.062s0.305-0.018 0.441-0.062l2.164 2.267c-0.042 0.142-0.059 0.302-0.059 0.462 0 0.978 0.764 1.778 1.697 1.778s1.697-0.8 1.697-1.778c0-0.16-0.017-0.32-0.059-0.462l3.021-3.156c0.136 0.044 0.28 0.062 0.433 0.062z"></path>
        </svg>
      );
    case 'calendar':
      return (
        <svg id="icon-calendar" viewBox="0 0 32 32">
          <path d="M12 14.667h-2.667v2.667h2.667v-2.667zM17.333 14.667h-2.667v2.667h2.667v-2.667zM22.667 14.667h-2.667v2.667h2.667v-2.667zM25.333 5.333h-1.333v-2.667h-2.667v2.667h-10.667v-2.667h-2.667v2.667h-1.333c-1.48 0-2.653 1.2-2.653 2.667l-0.013 18.667c0 1.467 1.187 2.667 2.667 2.667h18.667c1.467 0 2.667-1.2 2.667-2.667v-18.667c0-1.467-1.2-2.667-2.667-2.667zM25.333 26.667h-18.667v-14.667h18.667v14.667z"></path>
        </svg>
      );
    case 'minus':
      return (
        <svg id="icon-minus" viewBox="0 0 320 32">
          <path
            strokeLinejoin="miter"
            strokeLinecap="butt"
            strokeMiterlimit="4"
            strokeWidth="32"
            d="M0 16l320-0"
          ></path>
        </svg>
      );
    case 'plus':
      return (
        <svg id="icon-plus" viewBox="0 0 32 32">
          <path
            strokeLinejoin="miter"
            strokeLinecap="butt"
            strokeMiterlimit="4"
            strokeWidth="3.2"
            d="M16 0v32"
          ></path>
          <path
            strokeLinejoin="miter"
            strokeLinecap="butt"
            strokeMiterlimit="4"
            strokeWidth="3.2"
            d="M0 16h32"
          ></path>
        </svg>
      );
    case 'close':
      return (
        <svg id="icon-close" viewBox="0 0 32 32">
          <path
            strokeLinejoin="miter"
            strokeLinecap="butt"
            strokeMiterlimit="4"
            strokeWidth="1.7778"
            d="M1.778 1.778l28.444 28.444"
          ></path>
          <path
            strokeLinejoin="miter"
            strokeLinecap="butt"
            strokeMiterlimit="4"
            strokeWidth="1.7778"
            d="M1.778 30.222l28.444-28.444"
          ></path>
        </svg>
      );
    case 'edit':
      return (
        <svg id="icon-edit" viewBox="0 0 32 32">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.56"
            d="M23.467 13.511l-4.978-4.978M4.178 27.823l4.212-0.468c0.515-0.057 0.772-0.086 1.012-0.164 0.213-0.069 0.416-0.167 0.604-0.29 0.211-0.139 0.394-0.322 0.76-0.688l16.435-16.434c1.375-1.375 1.375-3.603 0-4.978s-3.603-1.375-4.978 0l-16.434 16.434c-0.366 0.366-0.549 0.549-0.688 0.76-0.123 0.187-0.221 0.39-0.29 0.604-0.078 0.24-0.106 0.498-0.164 1.012l-0.468 4.212z"
          ></path>
        </svg>
      );
    case 'exit':
      return (
        <svg id="icon-exit" viewBox="0 0 32 32">
          <path d="M20.051 23.237h2.499v4.997c0 2.067-1.681 3.748-3.748 3.748h-15.054c-2.066 0-3.748-1.681-3.748-3.748v-24.486c0-2.066 1.681-3.748 3.748-3.748h15.054c2.067 0 3.748 1.681 3.748 3.748v4.997h-2.499v-4.997c0-0.689-0.56-1.249-1.249-1.249h-15.054c-0.689 0-1.249 0.561-1.249 1.249v24.486c0 0.689 0.561 1.249 1.249 1.249h15.054c0.689 0 1.249-0.561 1.249-1.249v-4.997zM26.111 10.102l-1.767 1.767 2.873 2.874h-16.161v2.499h16.161l-2.873 2.873 1.767 1.767 5.889-5.889-5.889-5.89z"></path>
        </svg>
      );
    case 'email':
      return (
        <svg id="icon-email" viewBox="0 0 32 32">
          <path d="M26.667 5.333h-21.333c-1.467 0-2.653 1.2-2.653 2.667l-0.013 16c0 1.467 1.2 2.667 2.667 2.667h21.333c1.467 0 2.667-1.2 2.667-2.667v-16c0-1.467-1.2-2.667-2.667-2.667zM26.667 10.667l-10.667 6.667-10.667-6.667v-2.667l10.667 6.667 10.667-6.667v2.667z"></path>
        </svg>
      );
    case 'password':
      return (
        <svg id="icon-password" viewBox="0 0 32 32">
          <path d="M24 10.667h-1.333v-2.667c0-3.68-2.987-6.667-6.667-6.667s-6.667 2.987-6.667 6.667v2.667h-1.333c-1.467 0-2.667 1.2-2.667 2.667v13.333c0 1.467 1.2 2.667 2.667 2.667h16c1.467 0 2.667-1.2 2.667-2.667v-13.333c0-1.467-1.2-2.667-2.667-2.667zM16 22.667c-1.467 0-2.667-1.2-2.667-2.667s1.2-2.667 2.667-2.667c1.467 0 2.667 1.2 2.667 2.667s-1.2 2.667-2.667 2.667zM20.133 10.667h-8.267v-2.667c0-2.28 1.853-4.133 4.133-4.133s4.133 1.853 4.133 4.133v2.667z"></path>
        </svg>
      );

    case 'logo':
      return (
        <svg id="icon-logo" viewBox="0 0 32 32">
          <path
            fill="#ffc727"
            style={{ fill: 'var(--color1, #ffc727)' }} // Fix for style attribute
            d="M21.94 4.396c-2.263-0.566-4.526-1.698-6.223-3.397-1.697 1.698-3.96 2.83-6.223 3.397 0.566 5.095 2.263 8.491 6.223 11.322 3.96-2.831 6.223-6.227 6.223-11.322z"
          ></path>
          <path
            fill="#fbfbfb"
            style={{ fill: 'var(--color2, #fbfbfb)' }} // Fix for style attribute
            d="M19.677 25.474l-15.84-18.681v9.057l12.446 14.152 3.394-4.529z"
          ></path>
          <path
            fill="#fbfbfb"
            style={{ fill: 'var(--color2, #fbfbfb)' }} // Fix for style attribute
            d="M21.374 23.776l6.789-7.925v-8.491l-10.749 12.454 3.96 3.963z"
          ></path>
          <path
            fill="#fbfbfb"
            style={{ fill: 'var(--color2, #fbfbfb)' }} // Fix for style attribute
            d="M21.94 26.606v5.095l6.223-7.359v-5.095l-6.223 7.359z"
          ></path>
          <path
            fill="#fbfbfb"
            style={{ fill: 'var(--color2, #fbfbfb)' }} // Fix for style attribute
            d="M10.060 26.606l-6.223-7.359v5.095l6.223 7.359v-5.095z"
          ></path>
        </svg>
      );

    default:
      return 'SVG not found';
  }
};
