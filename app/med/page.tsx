import { Card } from '@/components/Card/Cart';

export default function Med() {
  return (
    <section className='flex gap-10 mx-auto'>
      <Card txt='Knee implant' />
      <Card txt='Hip implant' />
      <Card txt='Shoulder implant' />
    </section>
  )
}