import { brandDifferentCard } from '@/utils/hepler'
import Image from 'next/image'




function BrandDifferentCard() {
  return (
    <div className='flex items-center justify-around'>
    {
      brandDifferentCard.map((e)=>{
        return(
          <div key={e.id} className='w-[270px] flex flex-col gap-4'>
            <Image 
            src={e.ImgUrl}
            alt='BrandCard'
            height={30}
            width={30}
            />
            <h4 className='text-[#2A254B]'>{e.heading}</h4>
            <p className='text-[#2A254B] w-[266px]'>{e.p}</p>
          </div>
        )
      })
    }

    </div>



  
  )
}

export default BrandDifferentCard
