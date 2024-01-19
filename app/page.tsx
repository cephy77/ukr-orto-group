'use client'
import Image from 'next/image';
import mainImage from '../assets/header_knee.jpeg';
import { useRef } from 'react';

export default function Home() {
  const aboutElement = useRef<null | HTMLElement>(null);

  const handleScrollTo = () => {
    if (aboutElement.current) {
      const targetScrollPosition = aboutElement.current.offsetTop - 64;
      console.log(targetScrollPosition)
      window.scrollTo({ top: targetScrollPosition, behavior: 'smooth' });
    }
  }

  return (
    <>
      <div
        style={{
          height: 'calc(100vh - 64px)',
          backgroundImage: `url(${mainImage.src})`
        }}
        className='relative flex flex-col items-center justify-between bg-cover bg-left-top'
      >
        <div className='w-9/12 pt-10 lg:pt-44'>
          <p className='w-fit mb-4 lg:mb-6 p-2 rounded text-sky-900 text-4xl font-bold bg-sky-200 bg-opacity-60'>
            Слоган або опис того, чим займається компанія
          </p>
          <p className='w-fit ml-4 lg:ml-8 p-2 rounded text-sky-900 font-normal text-xl bg-sky-200 bg-opacity-60'>
            Продовження опису, трошки довше. Розвиток ідеї або доповнення слогану (interest)
          </p>
        </div>
        <div className='h-32 flex items-center'>

          <button
            className='flex flex-col items-center w-fit h-fit p-2 m-50 rounded font-semibold text-sky-900 bg-sky-200 bg-opacity-40 transition hover:bg-opacity-60'
            onClick={handleScrollTo}
          >
            <span className='h-min'>Дізнатись більше</span>
            <span className='h-min'>&#8964;</span>
          </button >
        </div>
      </div>
      <article className='p-10 relative' ref={aboutElement}>
        <div className='w-full lg:w-1/2 z-10 mx-auto'>
          <h2 className='text-2xl my-2 p-2 w-max font-bold bg-sky-200 rounded'>Чим ми займаємось</h2>
          <p className='text-justify w-full md:w-1/2 py-4'>В цьому розділі можна розказати в 2 словах про діяльність компанії. За необхідності можна зробити окрему сторінку &quot;про наc&quot; та ще детальніше розповісти про діяльність. В цьому розділі будуть декілька графічних елементів або фотографії.</p>
          <button className='p-1 ml-10 rounded font-semibold text-sky-900 bg-sky-200'>Детальніше</button>
        </div>
      </article>
      <section className='p-10'>
        <h2 className='text-2xl my-2 p-2 w-max font-bold bg-sky-200 rounded'>Напрямки діяльності</h2>
        <p>*Розділ з графічною репрезентацією товарів чи послуг *</p>
        <article className='grid grid-cols-1 lg:grid-cols-3 grid-rows-3 lg:grid-rows-1 gap-3 '>
          {Array.from({ length: 3 }, (_, i) => i).map((e) => (
            <div className='bg-slate-400' key={e}>
              <ul>
                <li className='p-4 text-center'>Імплант 1</li>
                <li className='p-4 text-center'>Імплант 2</li>
                <li className='p-4 text-center'>Імплант 3</li>
              </ul>
            </div>
          ))}
        </article>
      </section>

    </>
  )
}
