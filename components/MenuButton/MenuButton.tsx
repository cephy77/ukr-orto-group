import cn from 'classnames';

type PropsTypes = {
  isOpen: boolean;
}

export function MenuButton({ isOpen }: PropsTypes) {

  return (
    <div
      className='h-5 w-5'
    >
      <div
        className={cn(
          'h-1 transition-all rounded w-full bg-sky-900 mb-1',
          {
            'translate-y-2 rotate-45': isOpen
          }
        )}
      ></div>
      <div
        className={cn(
          'h-1 transition-all rounded w-full bg-sky-900 mb-1',
          {
            'rotate-45': isOpen
          }
        )}
      ></div>
      <div
        className={cn(
          'h-1 transition-all rounded w-full bg-sky-900',
          {
            '-translate-y-2 -rotate-45': isOpen
          }
        )}
      ></div>
    </div>
  )
}