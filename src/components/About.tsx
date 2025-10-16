import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Users, Heart, History, Shield, Target, Droplets, Home, BookOpen, Briefcase } from 'lucide-react';
import backgroundImage1 from '../assets/background_image1.png';
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
              Our crisis accommodation and programs are aimed at improving the lives of orphans, vulnerable children, and women and youth affected by violence, HIV/AIDS, and neglect.
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
                  <p className="text-gray-600">Orphans, vulnerable children, women, and youth</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Heart className="h-6 w-6 text-blue-800 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Our Impact</h4>
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

      <div id="our-journey" className="max-w-4xl mx-auto text-center mb-16">
        <div className="flex items-center justify-center mb-8">
          <History className="h-8 w-8 text-blue-800 mr-3" />
          <h3 className="text-3xl font-bold text-gray-900">Our Journey</h3>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">In 2010 Jenny Deering visited a baby orphanage in Nakuru which was run by her sister Mary Summeracles. This is where she met Lilian.</p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">Jenny and Lilian shared a desire to reach out to impoverished and disempowered single women and widows in society. That passion led them to set up an organization called Heart4Change.</p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">In 2012 they started organizing conferences and workshops to reach out to these women through a program dubbed Boundaries. It started at the women’s prison in Nakuru and then in local churches, then spread to Kisii and Mombasa. It has helped more than 3,000 women since its inception.</p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">A mentorship and leadership “Circle Camp” program for local girls was also started focusing on the Alternative Rite of Passage (ARP) tackling Anti-Female Genital Mutilation, which is a catalyst for child marriage and school drop out amongst girls in the Abagusii and Kuria Communities of Kenya. To date more than 1,500 girls have attended the camps and received fantastic empowerment. Since these camps are held in December hygiene packs and Christmas hampers to take home afterwards.</p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">While implementing these programs, they came across many children who were victims of abuse and violence. They decided to help the children by taking them to hospitals, enrolling them in school, and placing them in foster homes. However, Lilian, Mary, and Jenny realized that giving money and goods directly to the children was not effective. Their money and goods did not actually reach the children.</p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">And so Akina Ties (then known as Akina Place) was established in 2014 to provide a safe space for children and women who have suffered various forms of gender based violence. Lilian moved to Kisii and started living with the rescued children.</p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">In 2018, an extremely generous gift from Australian philanthropists Kate and Noel Doyle OAM allowed Lilian to stop having to pay rent and move premises every few months. A brand new customised residence was built - and Akina Ties Haven was born. The women and children that Lilian looks after now have a secure home where they can be fully supported through the complex healing, reconciliation and legal processes they face.</p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">To date the Haven has offered shelter and support to over 100 local women and children affected by violence in their communities. Akina Ties continues to support many of these women and children today.</p>
        <p className="text-lg text-gray-700 leading-relaxed">In 2019 Akina Ties Australia Incorporated, which is an Australian not for profit (run purely by volunteers) was formed to help raise the much needed funds to run the haven. All donations made via this website are administered and sent to Kenya by Akina Ties Australia Inc.</p>
      </div>

      <div id="akina-warriors" className="max-w-5xl mx-auto text-center mb-16">
        <div className="flex items-center justify-center mb-8">
          <Shield className="h-8 w-8 text-blue-800 mr-3" />
          <h3 className="text-3xl font-bold text-gray-900">Akina Warriors</h3>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">Meet the dedicated team behind Akina Ties, each bringing unique skills and passion to our mission of supporting vulnerable children and women in Kenya.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              id: 0,
              name: "Lilian Marwa",
              title: "Co-Founder & Director of Akina Ties Australia Inc.",
              img: LilianMarwa,
              bio: "Lilian is the living heart and soul of Akina Ties, who is selflessly dedicated to the Akina Ties children and their community. Lilian is a trained administrator and passionate for social work. Until 2017, she worked as a Personal Assistant to the Kisii County governor’s office. Prior to that, she was employed with the Kenya government department of social services and community development as a social worker and community orphanage in Nairobi. She is currently pursuing a Honours Degree in Theology at the university of Nairobi. While training, a passion to be a better worker saw her move to Kisii where she is living full time and caring for a community that until then had only one health and water department you’d find."
            },
            {
              id: 1,
              name: "Mary Summeracles",
              title: "Co-Founder & Director of Akina Ties Australia Inc.",
              img: Mary,
              bio: "Mary moved to Kenya in 2010 to establish and run the first baby orphanage in the area. Ten years later Mary was Mum (literally) to 130 children ranging from newborn to sixteen years of age. Living and working in Kenya has given Mary first-hand knowledge and understanding of the poverty, human and social challenges so many families, especially women and children, face daily. While living in Kenya, Mary met Akina Ties’ founder and great friendship which continues today. Mary and Lilian worked together both in the orphanage and on community projects. A promise they made to a dying mother is now being fulfilled by Akina Ties that continues to care and bring hope and love to the children. For personal reasons Mary returned to Australia after ten years in Kenya and has supported Akina Ties since then. Mary is a qualified case manager currently working in youth services and living in regional Western Australia with her husband and their two fur babies, Jimboy and China."
            },
            {
              id: 2,
              name: "Jenny Belford-Deering",
              title: "Co-Founder & Director",
              img: Jenny,
              bio: "Jenny visited Kenya in 2010 and her heart was touched by the many women and children that met who were suffering because of poverty and abuse. In 2011, Jenny (together with Mary and Lilian) started Heart4Change to empower local women. Akina Ties emerged from this initial group. Jenny has worked as a support worker in a women’s refuge for the last 20 years. She is a mother of two, remains in Queensland where she lights the light of her life and lives in West Queensland Australia."
            },
            {
              id: 3,
              name: "Julia Ramage",
              title: "Committee Member",
              img: Julia,
              bio: "Julia joined the Akina Ties Warriors in 2019 to be involved in a variety of aspects of the Akina Ties Australia Inc. not for profit. Working at a children’s home in Tanzania in her early 20s ignited a passion to work on children’s protection by helping them catch up on their education. Julia is a mum of two gorgeous children and is trained responsible and managing people who work in new South Wales Australia."
            },
            {
              id: 4,
              name: "Aburi Masero",
              title: "Secretary of Akina Ties Australia Inc.",
              img: Aburi,
              bio: "Aburi Masero or Wasilu, as commonly called, is a passionate lawyer with a keen eye on various fields of the law especially children, human rights and Gender. Wasilu Akina Ties has been honored to have her on board as one of our Akina Warriors. Being a woman who cares about the children and the rights of the children that are taken in Akina Ties, she is the guardian of the children and the legal guardian in respect of the children that are taken in Akina Ties. Aburi joined the Akina family in 2022 as a volunteer and over time has shown and continues to show her dedication in helping Akina Ties as a whole. Her passion is to see a future in which children and women can from from abuse, discrimination and poverty and are able to well represented to get justice when needed."
            },
            {
              id: 5,
              name: "Dennis Bergquist",
              title: "Board Member",
              img: Dennis,
              bio: "A fourth generation Swedish American from a rural Midwest Minnesota Community of 850. Retired on a family farm, learned the value of hard work with an appreciation to help the less fortunate of the world. Traveled 50 countries on humanitarian volunteering tours and continues to travel as a Dream and Community Land Interculturality. A retired faculty member of Ridgewater College, Hutchinson Minnesota. The founder of Longspur and Minnesota Global and the Bergquist Foundation with the motto Walking a Different Path. The author of “Will to Believe”. A Rotarian from Twin Cities, Minnesota and President-elect of the Tucson Rotary Club. An Akina Ties board member serving to make a difference for young people who deserve respect and education, with a vision to make a difference in the lives of those less fortunate."
            },
            {
              id: 6,
              name: "Noel and Kate Doyle",
              title: "",
              img: Noel,
              bio: "Noel and Kate Doyle who are fondly know as “grandma and grandpa” have generously dedicated their support to Akina Ties over the past 10 years. Words cannot explain how amazing these 2 beautiful souls are, but their actions does have changed many lives for the better. Thank you grandma and grandpa for your loved dearly by your Akina Ties family."
            },
            {
              id: 7,
              name: "Sarah Teaborg",
              title: "",
              img: Sarah,
              bio: "Sarah is always willing to offer advice and was an amazing help when Akina Ties Australia was set up. Her dedication to the children of Kenya is unquestionable and she is an inspiration. The world needs more Angels like Sarah. Thank you Sarah for always making yourself available when we needed."
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

      <div id="our-future-goals" className="max-w-4xl mx-auto text-center mb-16">
        <div className="flex items-center justify-center mb-8">
          <Target className="h-8 w-8 text-blue-800 mr-3" />
          <h3 className="text-3xl font-bold text-gray-900">Our Future Goals</h3>
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
