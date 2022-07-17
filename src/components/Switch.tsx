export function Switch () {
  return (
    <label
      className='relative w-10 h-5 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center cursor-pointer'
      htmlFor='switch_mode'
    >
      <div className='absolute left-[2px] w-[17px] h-[17px] bg-orange-500 dark:bg-purple-600 rounded-full transition-all dark:translate-x-[19px]' />
      <input
        type='checkbox'
        id='switch_mode'
        onChange={() => {
          document.documentElement.classList.toggle('dark')
          localStorage.setItem(
            'theme',
            document.documentElement.classList.contains('dark')
              ? 'dark'
              : 'light'
          )
        }}
        className='hidden'
      />
    </label>
  )
}
