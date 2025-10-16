import React from 'react';
import { Link } from 'react-router-dom';
import girlieCampImg from '../assets/girlie camp.jpg';
import feedAGrannyImg from '../assets/feed a granny.avif';
import teenMomImg from '../assets/teen mom.png';
import noSex4PadsImg from '../assets/No Sex 4 pads.avif';
import integrationImg from '../assets/intergration.avif';
import legalRepImg from '../assets/legal representaton.avif';
import generalDonation from '../assets/general-donation.png';

const WhatWeDo: React.FC = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">Heart4Change Empowerment Programs</h2>
        <p className="mb-8 text-center text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Heart4Change Programs are programs under Akina Teas which are specially designed programs aimed at empowering the local community. In particular, they focus on education and empowerment in the face of sexual and gender-based violence. The programs address self-worth, decision-making, and economic empowerment which aims to equip participants with the skills to make them and their communities self-reliant.
        </p>
        <div className="flex flex-col space-y-10">
          {/* Program Card 1 */}
          <div className="bg-purple-900 text-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 h-48 md:h-auto">
              <img src={girlieCampImg} alt="Girlie Camp" className="object-cover w-full h-full" />
            </div>
            <div className="p-6 flex flex-col flex-grow md:w-2/3">
              <h2 className="text-xl font-semibold mb-3">Girlie Camp</h2>
              <p className="mb-4 text-sm leading-relaxed">
                (Alternative Right of Passage) Program. Akina Teens run Girlies Camps in the past 5 years reaching over 2000 girls between the ages of 8-15 years. Girls risk homelessness, exclusion. This program is held every school holiday and is aimed at ending Female Genital Mutilation (FGM) in Kisii, Nyamira, and Migori Counties where it is a costly for early marriages, early pregnancy and dropping out of school.
                This program costs about 9000 per an annual basis. Support us by donating.
              </p>
              <Link to="/donate">
                <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded transition duration-300 w-32">
                  Donate
                </button>
              </Link>
            </div>
          </div>

          {/* Program Card 2 */}
          <div className="bg-yellow-200 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 h-48 md:h-auto">
              <img src={feedAGrannyImg} alt="Feed a Granny Program" className="object-cover w-full h-full" />
            </div>
            <div className="p-6 flex flex-col flex-grow md:w-2/3">
              <h2 className="text-lg font-semibold mb-3">Feed a Granny Program</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-700">
                We have since 2012 been involved in reaching out to abandoned grannies in their homesteads, giving them food, transport each month, taking them to the hospital, client's skill homes, and building better homes for those who do not have them. So far, I have 500 grannies in our program and provided more than 3,000 meals to these families and 1,000 pairs of appropriately sized shoes given per year. Some of these grannies are abandoned by their own mothers and relatives because they testify and neglect their properties but they will stay longer with us. Help us support this program by donating.
              </p>
              <Link to="/donate">
                <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded transition duration-300 w-32">
                  Donate
                </button>
              </Link>
            </div>
          </div>

          {/* Program Card 3 */}
          <div className="bg-orange-200 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 h-48 md:h-auto">
              <img src={teenMomImg} alt="Teen Mom Program" className="object-cover w-full h-full" />
            </div>
            <div className="p-6 flex flex-col flex-grow md:w-2/3">
              <h2 className="text-lg font-semibold mb-3">Teen Mom Program</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-700">
                We offer support for pregnant and parenting teens to learn how to be the person and the parent they want to be.
                We help them finish their high school and also get to college, using our general donation help donating.
              </p>
              <Link to="/donate">
                <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded transition duration-300 w-32">
                  Donate
                </button>
              </Link>
            </div>
          </div>

          {/* Program Card 4 */}
          <div className="bg-orange-200 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 h-48 md:h-auto">
              <img src={noSex4PadsImg} alt="No Sex 4 Pads" className="object-cover w-full h-full" />
            </div>
            <div className="p-6 flex flex-col flex-grow md:w-2/3">
              <h2 className="text-lg font-semibold mb-3">No Sex 4 Pads</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-700">
                Providing sanitary towels, panties, painkillers for girls, and a boxer and vest for boys, we servicing the girls and boys on Menstrual Health and Hygiene - these have seen 10,000 boys and girls benefit across Kisii and Nyamira counties since 2014. This costs 8500 per year on an individual.
              </p>
              <Link to="/donate">
                <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded transition duration-300 w-32">
                  Donate
                </button>
              </Link>
            </div>
          </div>
        </div>

      <h2 className="text-3xl font-bold mb-4 text-center text-gray-900 mt-16">Akina Ties Haven Programs</h2>
      <p className="mb-6 leading-relaxed">
        We provide a safe and highly secure place where women and children can live completely free from violence and start the road to recovery. We offer rehabilitative and reintegration services. We are situated in Kisii in the western area of Kenya.
      </p>
      <p className="mb-6 leading-relaxed">
        With a donation of $50 the Haven running costs which includes School Fees, Food, Clothing, Medical Bills, wages and utilities will be catered for.
      </p>
      <div className="flex flex-col space-y-10">
          {/* Integration Program */}
          <div className="bg-purple-200 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 h-48 md:h-auto flex items-center justify-center">
              <img
                src={integrationImg}
                alt="Integration program"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow md:w-2/3">
              <h2 className="text-lg font-semibold mb-3">Integration program</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-700">
                We offer emotional support and integration services into safe communities and homes. We maintain contact with the children to ensure that they are safe, they are provided for and continue going to school.
              </p>
            </div>
          </div>

          {/* Legal representation */}
          <div className="bg-beige-200 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row bg-gray-100">
            <div className="md:w-1/3 h-48 md:h-auto flex items-center justify-center">
              <img
                src={legalRepImg}
                alt="Legal representation"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow md:w-2/3">
              <h2 className="text-lg font-semibold mb-3">Legal representation</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-700">
                We offer legal aid support to the sexually abused minors and women who come to us for shelter and protection. So far we have successfully got justice for 80% of girls in our care. Even though we are supposed to seek for pro bono services, they are not easy to find and if even we do find them they are not totally free. A substantial amount is needed to have our clients represented in court by lawyers.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-gray-700">
                Some of these girls are abandoned by their own mothers and relatives because they testified against their perpetrator they will stay longer with us with a donation of $30 you will help us support this program.
              </p>
              <Link to="/donate">
                <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded transition duration-300 w-32">
                  Donate
                </button>
              </Link>
            </div>
          </div>

          {/* Boundaries Program */}
          <div className="bg-orange-400 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 h-48 md:h-auto flex items-center justify-center">
              <img
                src={generalDonation}
                alt="Boundaries Program"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow md:w-2/3 text-white">
              <h2 className="text-lg font-semibold mb-3">Boundaries Program</h2>
              <p className="mb-4 text-sm leading-relaxed">
                Boundaries are the limits or the line we set with others to show what we find acceptable and unacceptable. Our boundaries reflect our values and priorities. Many women avoid boundaries because they think it will keep them from getting closer to others or it will mean they have to give up being generous ones taker they like to be.
              </p>
              <p className="mb-4 text-sm leading-relaxed">
                In our boundaries session which we conduct each year we train women how to preserve their values and priorities, conserve their energy and time and avoid burn out and enhance their well being with $50 Aud, you will make a huge impact of improving the lives of many of our single moms and widows. You can also donate your time and prayers and together, we will partner to make a lasting change in their lives.
              </p>
              <Link to="/donate">
                <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded transition duration-300 w-32">
                  Donate
                </button>
              </Link>
            </div>
          </div>
        </div>
    </section>
  );
};

export default WhatWeDo;
