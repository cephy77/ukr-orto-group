import { Card } from '@/components/Card/Cart';
import { Fragment } from 'react';

export default function Patient() {
  return (
    <section className='flex gap-10 mx-auto'>
      <Card txt='Knee' />
      <Card txt='Hip' />
      <Card txt='Shoulder' />
    </section>
  )
}