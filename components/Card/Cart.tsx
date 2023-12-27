type PropsTypes = {
  txt: string;
}

export function Card({ txt }: PropsTypes) {
  return (
    <div className='flex justify-center items-center w-40 h-40 border-2 border-red-200'>
      {txt}
    </div>
  )
}