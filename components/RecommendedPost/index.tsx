import Image from 'next/image'
import { Author } from '..'
import { themeStyles } from '@/app/globalStyle'

export function RecommendedPost() {
  return (
    <>
        <div className="w-[100] h-[1px] bg-slate-200 mb-5" />
        <div className="flex flex-row mb-20">
            <div className="relative mr-20">
                <div
                    className={`${themeStyles.primaryText} md:text-2xl text-lg font-semibold line-clamp-3 mb-5 my-4`}
                >
                    What We’re Reading: Can AI write poetry?
                </div>
                <div className={`${themeStyles.primaryText}`}>
                    If you aren’t already familiar with the vast world of verses here, I invite you to take a look at the poetry topic page or explore more
                </div>
                <div className="absolute left-0 bottom-0">
                    <Author
                        avatar="https://images2.thanhnien.vn/Uploaded/minhnguyet/2021_11_11/trieu-lo-tu-217.jpg"
                        name="Triệu Lộ Tư"
                        createdAt="09/11/1998"
                    />
                </div>
            </div>
            <div className="w-36 h-44">
                <Image
                    className="w-full h-full object-cover object-center rounded-lg"
                    src="https://source.unsplash.com/random"
                    alt="Blog banner"
                    width={500}
                    height={500}
                />
            </div>
        </div>
    </>
  )
}
