import applePayLogo from "@/assets/images/applepay.png";
import dogFood from "@/assets/images/dogFood.jpg";
import feedingImg from "@/assets/images/feeding.gif";
import googlePayLogo from "@/assets/images/googlepay.png";
import happyDog from "@/assets/images/happyDog.png";
import healthyMeal from "@/assets/images/healthyMeal.png";
import mastercardLogo from "@/assets/images/mastercard.png";
import paypalLogo from "@/assets/images/paypal.png";
import visaLogo from "@/assets/images/visa.png";

import { MadeFreshIcon } from "@/assets/svg/MadeFreshIcon";
import { PremiumIngredientIcon } from "@/assets/svg/PremiumIngredientIcon";
import { RealFoodIcon } from "@/assets/svg/RealFoodIcon";
import { VetDevelopedIcon } from "@/assets/svg/VetDevelopedIcon";

export default function Landing() {
  return (
    <section>
      <div className="py-20 h-200 spacing-y-[40px] max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-16 text-gray-900">
          What makes us different <br />
          <span>makes them stronger</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-7.5">
          <div className="flex-1 space-y-12 max-w-sm">
            <div className="flex items-center gap-4 text-left">
              <div className="p-3 rounded-full bg-green-100">
                <RealFoodIcon />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Real Food</p>
                <p className="text-sm text-gray-500">
                  Wholesome recipes for dogs with real meat and veggies.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-left">
              <div className="p-3 rounded-full bg-amber-100">
                <PremiumIngredientIcon />
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Premium Ingredient
                </p>
                <p className="text-sm text-gray-500">
                  Elevating pet care with unmatched safety and quality.
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full shadow-xl overflow-hidden">
            <div className="absolute top-0 left-0 w-1/2 h-full overflow-hidden">
              <img
                src={healthyMeal}
                alt="Healthy meal side"
                className="h-full w-[200%] object-cover object-left"
              />
            </div>

            <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden">
              <img
                src={dogFood}
                alt="Dry dog food side"
                className="h-full w-[200%] object-cover object-right"
              />
            </div>

            <div className="absolute top-0 left-1/2 w-1 h-full bg-[#EE6F4B] transform -translate-x-1/2 z-10"></div>
          </div>

          <div className="flex-1 space-y-12 max-w-sm">
            <div className="flex items-center gap-4 text-left">
              <div className="p-3 rounded-full bg-teal-100">
                <MadeFreshIcon />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Made Fresh</p>
                <p className="text-sm text-gray-500">
                  We prioritize maintaining the integrity of whole foods and
                  nutrition.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-left">
              <div className="p-3 rounded-full bg-pink-100">
                <VetDevelopedIcon />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Vet Developed</p>
                <p className="text-sm text-gray-500">
                  We raise the bar for dog nutrition, surpassing industry
                  expectations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center flex flex-col items-center gap-y-4">
          <button className="h-12 w-115.5 text-white bg-[#EE6F4B] hover:bg-[#EE6F4B] font-semibold rounded-md shadow-lg transition duration-150 ease-in-out">
            Get your dog's healthy meal today!
          </button>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <p className="text-xs font-medium text-gray-500  tracking-wider">
              30-day money back guarantee
            </p>

            <div className="flex items-center gap-4  transition-all">
              <img src={paypalLogo} alt="Paypal" className="h-5 w-auto" />
              <img src={visaLogo} alt="Visa" className="h-4 w-auto" />
              <img
                src={mastercardLogo}
                alt="Mastercard"
                className="h-6 w-auto"
              />
              <img src={applePayLogo} alt="Apple Pay" className="h-5 w-auto" />
              <img
                src={googlePayLogo}
                alt="Google Pay"
                className="h-5 w-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F8F8F8] p-20">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="space-y-6 text-left">
            <div>
              <h3 className="text-4xl font-semibold mb-4 text-gray-900 leading-tight">
                Nutrition is the foundation for longer, healthier lives in dogs.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Invest in your dog's future with our scientifically formulated
                superfood-powered supplements. Give them the nutrition they
                deserve and watch them thrive with vitality, energy, and the joy
                of a longer, healthier life.
              </p>
            </div>

            <div className="space-y-4">
              <p className="font-semibold text-gray-800">Key Points:</p>

              <div className="flex items-center gap-4 border-b border-gray-200 pb-4">
                <span className="text-4xl font-bold text-[#EE6F4B] w-24">
                  97%
                </span>
                <p className="text-gray-600">
                  Dogs choose our dog food over leading brands because of its
                  real functional ingredients and delicious flavor.
                </p>
              </div>

              <div className="flex items-center gap-4 border-b border-gray-200 pb-4">
                <span className="text-4xl font-bold text-[#EE6F4B] w-24">
                  84%
                </span>
                <p className="text-gray-600">
                  Our dog food provides superior nutrition and a patented
                  probiotic for optimal nutrient absorption.
                </p>
              </div>

              <div className="flex items-center gap-4 border-b border-gray-200 pb-4">
                <span className="text-4xl font-bold text-[#EE6F4B] w-24">
                  92%
                </span>
                <p className="text-gray-600">
                  Our dog food's high protein and fat digestibility contribute
                  to ideal stool quality.
                </p>
              </div>
            </div>

            <button className="w-full md:w-auto px-6 py-3 mt-4 text-white bg-[#EE6F4B] hover:bg-[#D95F3E] font-semibold rounded-lg shadow-md transition duration-150 ease-in-out">
              Give your furry friend the gift of wholesome nutrition
            </button>
          </div>

          <div className="relative flex justify-center">
            <img
              src={happyDog}
              alt="Dog and dog food bag"
              className="h-142.5 w-full object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>

      <div className="space-y-16 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center bg-white">
          <div className="relative flex justify-center">
            <img
              src={feedingImg}
              alt="Real Food Bowl"
              className="h-120 w-full object-cover rounded-2xl shadow-xl"
            />
          </div>

          <div className="space-y-6">
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 leading-tight">
                Improve overall gastrointestinal health for better nutrient
                absorption
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Through rigorous scientific studies and consultations with
                veterinarians, we have created a breakthrough formula
                exclusively tailored to combat the health challenges prevalent
                in dogs. A staggering 91% of our customers have reported...
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center bg-white">
          <div className="space-y-6">
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 leading-tight">
                Prebiotics nourish the beneficial gut bacteria, supporting
                digestive health
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our dog food formula contains carefully selected prebiotics that
                work in harmony with the gut microbiota, providing the necessary
                nutrients for the growth and maintenance of beneficial bacteria,
                ultimately supporting digestive health.
              </p>
            </div>
          </div>
          <div className="relative flex justify-center">
            <img
              src={dogFood}
              alt="Dog Food"
              className="h-120 w-full object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
