import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Users, Heart, History, Shield, Target, Droplets, Home, BookOpen, Briefcase } from 'lucide-react';
import backgroundImage1 from '../assets/background_image1.jpg';
import LilianMarwa from '../assets/Lilian Marwa.avif';
import Mary from '../assets/Mary.avif';
import Jenny from '../assets/Jenny.avif';
import Julia from '../assets/Julia.avif';
import Aburi from '../assets/Aburi.avif';
import Dennis from '../assets/Dennis.avif';
import Noel from '../assets/Noel.avif';
import Sarah from '../assets/Sarah.avif';

const About: React.FC = () => {
  const location = useLocation();
  const [expandedProfiles, setExpandedProfiles] = useState<Set<number>>(new Set());

  const newAboutSection = (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Akina (Swahili for family) Ties provides crisis accommodation and a range of community education programs in the Kisii, Nyamira, and Migori areas of Western Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={backgroundImage1}
              alt="Children in Kenya"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Focus</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our crisis accommodation centre and programs are aimed at improving the lives of orphans, vulnerable children, teens and women affected by gender based violence, HIV/AIDS, and neglect.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-blue-800 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Service Areas</h4>
                  <p className="text-gray-600">Kisii, Nyamira, and Migori Counties</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-blue-800 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Who We Serve</h4>
                  <p className="text-gray-600">Orphans, vulnerable children, teens, and women</p>
                </div>
              </div> 
              <div className="flex items-start space-x-3">
                <Heart className="h-6 w-6 text-blue-800 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Our Impact</h4>
                  <p className="text-gray-600">Breaking cycles of violence, poverty, and discrimination</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const existingAboutContent = (
    <section id="about-full" className="py-20 bg-white space-y-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">About Us</h2>

      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="flex items-center justify-center mb-8">
          <History className="h-8 w-8 text-blue-800 mr-3" />
          <h3 id="our-journey" tabIndex={-1} className="text-3xl font-bold text-gray-900">Our Journey</h3>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">In 2010 Jenny Dearling visited a baby orphanage in Nakuru which was run by her sister Mary Summerscales. This is where she met Lilian.</p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">Jenny and Lilian shared a desire to reach out to impoverished and disempowered single women and widows in the society. That passion led them to set up an organization called Heart4Change.</p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">In 2012 they started organizing conferences and workshops to reach out to these women through a program dubbed 'Boundaries'. It started at the women’s prison in Nakuru and then in local churches, then spread to Kisii and Mombasa. It has helped more than 3,000 women since it's inception.</p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">A "Mentorship and Leadership Girlie Camp" program was launched to promote the Alternative Rite of Passage (ARP). This initiative directly addresses Anti-Female Genital Mutilation (FGM), which drives child marriage and school dropout rates among girls in the Abagusii and Kuria Communities of Kenya. To date more than 1,500 girls have attended the camps and received fantastic empowerment. Since these camps are held in December, the girls receive hygiene packs and Christmas hampers to take home afterwards.</p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">While implementing these programs, they came across many children who were victims of abuse and violence. They decided to help the children by taking them to hospitals, enrolling them in school, and placing them in foster homes. However, Lilian, Jenny, and Mary realized that giving money and goods directly to the children was not effective. Their money and goods did not actually reach the children.</p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">And so Akina Ties (then known as Akina Place) was established in 2014 to provide a safe space for children and women who have suffered various forms of gender based violence. Lilian moved to Kisii and started living with the rescued children.</p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">Thanks to an incredibly generous gift in 2018 from Australian philanthropists Kate and Noel Doyle OAM (referred to by Lilian dottily as "Grandma and Pa"), Lilian was able to stop struggling with rent and constant relocation. She used the funds to construct a customized home that now doubles as her residence and a sanctuary for the children she supports, officially establishing Akina Ties Haven.</p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">To date the Haven has offered shelter and support to over 100 local women and children affected by violence in their communities. Akina Ties continues to support many of these women and children today.</p>
        <p className="text-lg text-gray-700 leading-relaxed">In 2019 Akina Ties Australia Incorporated, which is an Australian not for profit (run purely by volunteers) was formed to help raise the much needed funds to run the haven. All donations made via this website are administered and sent to Kenya by Akina Ties Australia Inc.</p>
      </div>

      <div className="max-w-5xl mx-auto text-center mb-16">
        <div className="flex items-center justify-center mb-8">
          <Shield className="h-8 w-8 text-blue-800 mr-3" />
          <h3 id="akina-warriors" tabIndex={-1} className="text-3xl font-bold text-gray-900">Akina Warriors</h3>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">Meet the dedicated team behind Akina Ties, each bringing unique skills and passion to our mission of supporting vulnerable children and women in Kenya.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              id: 0,
              name: "Lilian Marwa",
              title: "Co-Founder & Director of Akina Ties Australia Inc.",
              img: LilianMarwa,
              bio: `Lilian is the living heart and soul of Akina Ties, who is selflessly dedicated to the Akina Ties children and her community. Lilian is a trained administrator and has a passion for social work. Between 2015 and 2022, she worked as a Personal Assistant and project coordinator to the spouses of Kisii and Nyamira County governors. Prior to that, she was employed with the Directorate of Industrial Training(now NITA) as an industrial attachment officer and later on worked as a social worker  and a community point person at Mission in Action, Nakuru Baby Orphanage. She is currently pursuing a Bachelors Degree in Theology at the University of Eastern Africa Baraton, a passion to be a bible worker since when she was 19 years old is being fulfiled at 43 years old, a testimony that when God has called you He has and will never stop until you yield
Lilian is mother, counsellor, advocate and dedicated defender of the Akina Ties children and women `
            },
            {
              id: 1,
              name: "Mary Summerscales",
              title: "Co-Founder & Director of Akina Ties Australia Inc.",
              img: Mary,
              bio: "Mary moved to Kenya in 2010 to establish and run the first baby orphanage in the area. Ten years later Mary was Mum (literally) to 130 children ranging from newborn to sixteen years of age. Living and working in Kenya has given Mary first-hand knowledge and understanding of the poverty, human and social challenges so many families, especially women and children, face daily. While living in Kenya, Mary met Akina Ties’ founder and a great friendship formed which continues to date. Mary and Lilian worked together both in the orphanage and on community projects. A promise they made to a dying mother is now being fulfilled by Akina Ties that continues to care and bring hope and love to the children. For personal reasons Mary returned to Australia after ten years in Kenya and has supported Akina Ties since then. Mary is a qualified case manager currently working in youth services and living in Queensland Australia with her husband and their two fur babies, Jellybean and China."
            },
            {
              id: 2,
              name: "Durdica Jenny Dearling",
              title: "Co-Founder & Director",
              img: Jenny,
              bio: "Jenny visited Kenya in 2010 and her heart was touched by the many women and children she met who were suffering because of poverty and abuse. In 2011, Jenny (together with Mary and Lilian) started Heart4Change to empower local women. Akina Ties emerged from this initial organization. Jenny has worked as a support worker in a women’s refuge for the last 20 years. She is a mother of two, nana to four(who are the light of her life) and lives in West Queensland Australia."
            },
            {
              id: 3,
              name: "Julia Ramage",
              title: "Committee Member",
              img: Julia,
              bio: `Jules  joined the Akina Ties Warriors in 2019 and is involved in a variety of aspects of the Akina Ties Australia Inc. not for profit.
 
Working at a children's home in Tanzania in her early 20s ignited a desire in Jules to continue to provide any help she can to the children of Africa. 
 
Julia is a mum of two gorgeous children and is a trained corporate and human rights lawyer who lives in New South Wales Australia.`
            },
            {
              id: 4,
              name: "Aburi Mosero",
              title: "Secretary of Akina Ties Australia Inc.",
              img: Aburi,
              bio: "Aburi Mosero or Wakili, as we commonly call her, is a passionate lawyer with a keen eye on various fields of the law, especially children, human rights and Gender. We at Akina Ties Haven are honored to have her on board as one of our Akina Warriors. Being a rescue centre that often deals with legal issues in respect of the children that we take in, Aburi is always here to make the requisite follow-up in ensuring that the legal needs of our children are covered. Aburi joined the Akina family in 2022 as a volunteer and over time has shown and continues to show her dedication in helping Akina Ties as a whole. Her passion is to see a future in which children and women are free from abuse, discrimination and poverty and are able to well represented to get justice when needed."  
            },
            {
              id: 5,
              name: "Dennis Bergquist",
              title: "Board Member",
              img: Dennis,
              bio: "A fourth-generation Swedish America from a rural Midwest Minnesota Community of 950. Raised on a family farm, learned the value of work ethic with an appreciation to help the less fortunate of the world. Traveled 52 countries as a humanitarian volunteering to make a difference in the lives of those he met Domestically and Internationally. A retired faculty member of Ridgewater College, Hutchinson, Minnesota. The founder of Bergquist and Associates Global and the Bergquist Foundation with the motto “Making a Difference Globally. The author of “Milk to Missions” A Rotarian, four-time Paul Harris Fellow and Presidentelect of the Tucson Kino Rotary Club. An Akina Ties board member serving to make a difference for young people who deserve respect, an education, with a future to make a difference in the lives of others less fortunate."
            },
            {
              id: 6,
              name: "Noel and Kate Doyle",
              title: "",
              img: Noel,
              bio: "Kate and Noel Doyle who are fondly know as 'grandma and grandpa', have generously dedicated their support to Akina Ties over the past 10 years. Words can not explain how amazing these 2 beautiful souls are, but their actions alone have changed many lives for the better. Thank you grandma and grandpa, know you are loved dearly by your Akina Ties family."
            },
            {
              id: 7,
              name: "Sarah Roseborg",
              title: "",
              img: Sarah,
              bio: "Sarah is always willing to offer advice and was an amazing help when Akina Ties Australia Inc. was set up.  Her dedication to the children of Kenya is unquestionable and a true inspiration. The world needs more Angels like Sarah. Thank you Sarah for always making yourself available when we need advice."
            }
          ].map((warrior) => (
            <div key={warrior.id} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <img src={warrior.img} alt={warrior.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h4 className="font-semibold text-gray-900 mb-2">{warrior.name}</h4>
              {warrior.title && <p className="text-sm text-blue-800 mb-4">{warrior.title}</p>}
              <button
                onClick={() => {
                  const newExpanded = new Set(expandedProfiles);
                  if (newExpanded.has(warrior.id)) {
                    newExpanded.delete(warrior.id);
                  } else {
                    newExpanded.add(warrior.id);
                  }
                  setExpandedProfiles(newExpanded);
                }}
                className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                {expandedProfiles.has(warrior.id) ? 'Hide Profile' : 'Read Profile'}
              </button>
              {expandedProfiles.has(warrior.id) && (
                <p className="text-gray-700 text-sm leading-relaxed mt-4">{warrior.bio}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="flex items-center justify-center mb-8">
          <Target className="h-8 w-8 text-blue-800 mr-3" />
          <h3 id="our-future-goals" tabIndex={-1} className="text-3xl font-bold text-gray-900">Our Future Goals</h3>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">The day to day running of Akina Ties is costly.</p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">However there are other vital efforts such as education and health needs both on Akina Ties women and in the local Kisii community which need addressing urgently. We have several important projects in the pipeline to meet these needs head on.</p>
        <div className="space-y-8">
          <div className="flex items-start justify-center space-x-4">
            <Droplets className="h-6 w-6 text-blue-800 mt-1 flex-shrink-0" />
            <div className="text-left">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Water</h4>
              <p className="text-gray-700 leading-relaxed">Water is often referred to as the "Donor page." Clean Water - Akina Ties haven does not have fresh water on tap. All water is either carried from the water source or is from rain in the dry / purchased or great expense to the organization. We desperately need to clean water boreholes so that the children and local community can have access to a source of safe, clean drinking water.</p>
            </div>
          </div>
          <div className="flex items-start justify-center space-x-4">
            <Home className="h-6 w-6 text-blue-800 mt-1 flex-shrink-0" />
            <div className="text-left">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Separate, safe accommodation for our boys</h4>
              <p className="text-gray-700 leading-relaxed">Many of our children have been sexually abused it is therefore vital to employ appropriate or safe for boys and girls to be living under the same roof. We plan to build and staff a separate home (one for the boys to have the benefit of growing up in a safe and loving environment.</p>
            </div>
          </div>
          <div className="flex items-start justify-center space-x-4">
            <BookOpen className="h-6 w-6 text-blue-800 mt-1 flex-shrink-0" />
            <div className="text-left">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Preschool for vulnerable children</h4>
              <p className="text-gray-700 leading-relaxed">Its location is such an important part of breaking the cycle of poverty. Many families in the local area are not able to afford to send their children to preschool prior to them attending local public schools. We plan to build a free class preschool that will give vulnerable children access to the best start to their education.</p>
            </div>
          </div>
          <div className="flex items-start justify-center space-x-4">
            <Heart className="h-6 w-6 text-blue-800 mt-1 flex-shrink-0" />
            <div className="text-left">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Health Centre</h4>
              <p className="text-gray-700 leading-relaxed mb-2">The Kisii community does not have adequate and affordable basic health services for local people, in particular there is insufficient pre-natal and post-natal support for pregnant Mums and insufficient health services for people suffering from the complications of malaria.</p>
              <p className="text-gray-700 leading-relaxed">We would like to set up our own income generating health centre staffed by qualified medical professionals to provide local people with quality health care at affordable rates.</p>
            </div>
          </div>
          <div className="flex items-start justify-center space-x-4">
            <Briefcase className="h-6 w-6 text-blue-800 mt-1 flex-shrink-0" />
            <div className="text-left">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Centre</h4>
              <p className="text-gray-700 leading-relaxed mb-2">One of the issues surrounding gender based violence is the inability of women to be economically independent. We would like to build an Enterprise Centre where local women and young girls could be taught skills and knowledge to allow them to lead more independent, fulfilling and empowering lives.</p>
              <p className="text-gray-700 leading-relaxed mb-2">Skills taught at the centre will include soap making, weaving, beading, tailoring and cooking to allow women to set up home enterprises, as well as basic business management and book keeping training to support "Akina Ties Trading Project."</p>
              <p className="text-gray-700 leading-relaxed mb-2">The Akina Ties Trading Project - in 2020, we started a small sewing project at Akina Ties. We fundraised and raised approximately $10,000 for this sewing machines, fabric and the services of a qualified seamstress. The seamstress taught our girls how to make simple aprons, table-runners and cushions in beautiful "African" themed printed fabric.</p>
              <p className="text-gray-700 leading-relaxed">We would love to expand this project to enable local women to learn sewing skills through the Enterprise Centre.</p>
            </div>
          </div>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mt-6">Watch this space and our social media pages to find out how you can support these fantastic projects!</p>
      </div>
    </section>
  );

  return location.pathname === "/" ? newAboutSection : <>{newAboutSection}{existingAboutContent}</>;
};

export default About;
