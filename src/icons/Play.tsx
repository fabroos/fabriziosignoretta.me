import * as React from 'react'

export const Play = (props: React.ComponentProps<'svg'>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' {...props}>
    <switch>
      <g>
        <path d='M5273.1 2400.1v-2c0-2.8-5-4-9.7-4s-9.7 1.3-9.7 4v2c0 1.8.7 3.6 2 4.9l5 4.9c.3.3.4.6.4 1v6.4c0 .4.2.7.6.8l2.9.9c.5.1 1-.2 1-.8v-7.2c0-.4.2-.7.4-1l5.1-5c1.3-1.3 2-3.1 2-4.9zm-9.7-.1c-4.8 0-7.4-1.3-7.5-1.8.1-.5 2.7-1.8 7.5-1.8s7.3 1.3 7.5 1.8c-.2.5-2.7 1.8-7.5 1.8z' />
        <path d='M5268.4 2410.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1s-.4-1-1-1h-4.3zm4.3 3.4h-4.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1s-.4-1-1-1zm0 3.3h-4.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1 0-.5-.4-1-1-1zM50 2.5C23.8 2.5 2.5 23.8 2.5 50S23.8 97.5 50 97.5 97.5 76.2 97.5 50 76.2 2.5 50 2.5zm17.2 50.3-25.6 17c-2.2 1.5-5.1-.1-5.1-2.8V32.9c0-2.6 2.9-4.2 5.1-2.8l25.6 17.1c2 1.4 2 4.2 0 5.6z' />
      </g>
    </switch>
  </svg>
)
