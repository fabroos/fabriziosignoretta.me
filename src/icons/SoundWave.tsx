import { ComponentProps } from 'react'

export const SoundWave = (props: ComponentProps<'svg'>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' {...props}>
      <path d='M2 10a1 1 0 0 0-1 1v10a1 1 0 0 0 2 0V11a1 1 0 0 0-1-1zm4-5a1 1 0 0 0-1 1v20a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1zm12 5a1 1 0 0 0-1 1v10a1 1 0 0 0 2 0V11a1 1 0 0 0-1-1zm-4-5a1 1 0 0 0-1 1v20a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1zm-4-4a1 1 0 0 0-1 1v28a1 1 0 0 0 2 0V2a1 1 0 0 0-1-1zm20 9a1 1 0 0 0-1 1v10a1 1 0 0 0 2 0V11a1 1 0 0 0-1-1zm-4-5a1 1 0 0 0-1 1v20a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1zm-4-4a1 1 0 0 0-1 1v28a1 1 0 0 0 2 0V2a1 1 0 0 0-1-1z' />
    </svg>
  )
}
