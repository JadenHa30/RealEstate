import {
  Banner,
  Ads,
  ListPost,
} from '@/components';
import { themeStyles } from './globalStyle';
import { RecommendedPost } from '@/components/RecommendedPost';

export default function Home() {
  return (
      <>
          <Banner />
          <div className="md:pt-20 pt-4 pb-24">
              <div className="max-w-7xl mx-auto md:px-8 px-4">
                  <Ads />
                  <div className="md:py-20 py-4">
                      <div className={`${themeStyles.primaryText} font-bold text-2xl md:mb-8 mb-4`}>
                          Recommendation for you
                      </div>
                      <RecommendedPost/>
                      <RecommendedPost/>
                      <RecommendedPost/>
                      <RecommendedPost/>
                      
                      <div className={`${themeStyles.primaryText} font-bold text-2xl md:mb-8 mb-4`}>
                          Latest Post
                      </div>
                      <div className="w-[100] h-[1px] bg-slate-200 mb-5" />
                      <ListPost />
                  </div>
              </div>
          </div>
      </>
  );
}