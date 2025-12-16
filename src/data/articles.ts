export interface Article {
  id: number;
  title: string;
  date: string;
  summary: string;
  content: string;
  author: string;
  category: string;
  image?: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: 'Akina Ties Launches New Health & Hygiene Program',
    date: 'August 15, 2024',
    summary: 'We are excited to announce the launch of our new Health & Hygiene program aimed at providing medical care, cancer screening, and health support to vulnerable communities in Kisii and Nyamira counties.',
    content: `
      <p>We are thrilled to announce the official launch of our comprehensive Health & Hygiene program, a significant milestone in our mission to support vulnerable communities in Western Kenya.</p>

      <p>This initiative represents a major expansion of our services, focusing on three key areas:</p>

      <ul>
        <li><strong>Medical Care:</strong> Providing essential healthcare services to those who need it most</li>
        <li><strong>Cancer Screening:</strong> Early detection programs to improve health outcomes</li>
        <li><strong>Health Support:</strong> Ongoing education and resources for community wellness</li>
      </ul>

      <p>The program will serve communities in Kisii and Nyamira counties, reaching thousands of individuals who previously had limited access to healthcare services. Our team has been working tirelessly to establish partnerships with local healthcare providers and train community health workers.</p>

      <p>"This launch marks a new chapter in our commitment to holistic community development," said Lilian, our founder. "Health is the foundation of everything we do, and we're excited to make a lasting impact."</p>

      <p>The program includes mobile health clinics, educational workshops, and ongoing support systems to ensure sustainable health improvements in the communities we serve.</p>
    `,
    author: 'Akina Ties Team',
    category: 'Programs'
  },
  {
    id: 2,
    title: 'Successful Completion of Girlie Camp 2024',
    date: 'July 10, 2024',
    summary: 'Over 2000 girls participated in the 2024 Girlie Camp, an alternative rite of passage program that educates and empowers young girls to end Female Genital Mutilation in Kisii, Nyamira, and Migori counties.',
    content: `
      <p>The 2024 Girlie Camp has concluded successfully, marking another year of empowerment and education for young girls in Western Kenya.</p>

      <p>This year's camp saw participation from over 2,000 girls across Kisii, Nyamira, and Migori counties, making it our largest and most impactful program to date.</p>

      <h3>Program Highlights:</h3>
      <ul>
        <li>Comprehensive education on reproductive health and rights</li>
        <li>Leadership and confidence-building workshops</li>
        <li>Cultural awareness and tradition discussions</li>
        <li>Peer support networks and mentorship opportunities</li>
        <li>Artistic expression through music, dance, and storytelling</li>
      </ul>

      <p>The Girlie Camp serves as an alternative rite of passage, providing girls with the knowledge and tools to make informed decisions about their bodies and futures. Our program directly addresses the harmful practice of Female Genital Mutilation while celebrating cultural heritage in safe, empowering ways.</p>

      <p>Participants reported increased confidence, better understanding of their rights, and stronger connections with their peers. Many expressed interest in becoming future leaders and advocates in their communities.</p>

      <p>"Watching these young girls transform over the course of the camp is truly inspiring," shared one of our facilitators. "They leave not just educated, but empowered to shape their own destinies."</p>
    `,
    author: 'Program Coordinators',
    category: 'Empowerment'
  },
  {
    id: 3,
    title: 'Feed a Granny Program Provides 3600+ Meals',
    date: 'June 5, 2024',
    summary: 'Our Feed a Granny program has provided over 3600 meals and 1200 Christmas hampers to abandoned elderly women, ensuring they receive food, medical care, and housing support.',
    content: `
      <p>Our Feed a Granny program continues to make a significant impact, having provided over 3,600 nutritious meals and 1,200 Christmas hampers to abandoned elderly women in our care.</p>

      <p>This essential program addresses the critical needs of elderly women who have been abandoned by their families and left without proper care or sustenance.</p>

      <h3>Program Components:</h3>
      <ul>
        <li><strong>Daily Meals:</strong> Nutritious, culturally appropriate meals prepared with care</li>
        <li><strong>Holiday Hampers:</strong> Special packages during Christmas and other celebrations</li>
        <li><strong>Medical Care:</strong> Regular health checkups and medication support</li>
        <li><strong>Housing Support:</strong> Safe, dignified living arrangements</li>
        <li><strong>Companionship:</strong> Social interaction and emotional support</li>
      </ul>

      <p>Each meal is prepared with attention to nutritional needs and cultural preferences, ensuring our grannies receive not just sustenance, but nourishment that supports their health and well-being.</p>

      <p>The Christmas hampers included special treats, warm clothing, and personal care items, bringing joy and comfort during the holiday season.</p>

      <p>Our dedicated team works tirelessly to identify and support these vulnerable women, providing them with the dignity and care they deserve in their later years.</p>

      <p>"Every meal we provide is a reminder that these women are valued and loved," said our program director. "They've given so much to their communities throughout their lives, and it's our honor to give back."</p>
    `,
    author: 'Community Care Team',
    category: 'Care Services'
  },
  {
    id: 4,
    title: 'Community Education Initiative Launched',
    date: 'May 20, 2024',
    summary: 'New educational programs launched in partnership with local schools to provide life skills and vocational training for teenagers.',
    content: `
      <p>We're excited to announce the launch of our new Community Education Initiative, a comprehensive program designed to equip teenagers with essential life skills and vocational training.</p>

      <p>This initiative represents a major step forward in our commitment to breaking cycles of poverty through education and skill development.</p>

      <h3>Program Features:</h3>
      <ul>
        <li><strong>Life Skills Training:</strong> Financial literacy, health education, and personal development</li>
        <li><strong>Vocational Training:</strong> Hands-on skills in various trades and professions</li>
        <li><strong>Mentorship Programs:</strong> Guidance from successful community members</li>
        <li><strong>School Partnerships:</strong> Integration with local educational institutions</li>
        <li><strong>Certification:</strong> Recognized qualifications for employment opportunities</li>
      </ul>

      <p>The program targets teenagers who may not have access to traditional educational pathways, providing them with practical skills and knowledge to build sustainable futures.</p>

      <p>Our partnerships with local schools ensure that participants receive both theoretical knowledge and practical experience, creating well-rounded educational opportunities.</p>

      <p>"Education is the key to unlocking potential," emphasized our education coordinator. "By providing these young people with skills and opportunities, we're investing in the future leaders of our communities."</p>

      <p>The initiative includes ongoing evaluation and support to ensure participants successfully transition into employment or further education.</p>
    `,
    author: 'Education Team',
    category: 'Education'
  },
  {
    id: 5,
    title: 'Annual Health Camp Success',
    date: 'April 12, 2024',
    summary: 'Our annual health camp served over 500 community members with free medical checkups and essential medications.',
    content: `
      <p>Our annual Health Camp has concluded with tremendous success, serving over 500 community members with comprehensive healthcare services.</p>

      <p>This year's camp focused on preventive care, early detection, and health education, reaching individuals who might otherwise lack access to medical services.</p>

      <h3>Services Provided:</h3>
      <ul>
        <li><strong>Medical Checkups:</strong> Comprehensive physical examinations</li>
        <li><strong>Diagnostic Tests:</strong> Blood pressure, blood sugar, and other vital screenings</li>
        <li><strong>Medications:</strong> Essential medicines provided at no cost</li>
        <li><strong>Health Education:</strong> Workshops on nutrition, hygiene, and disease prevention</li>
        <li><strong>Referrals:</strong> Connections to specialized care when needed</li>
      </ul>

      <p>The camp was staffed by volunteer doctors, nurses, and health professionals who generously donated their time and expertise.</p>

      <p>Community members received not only immediate medical care but also valuable education on maintaining health and preventing illness.</p>

      <p>"Events like this health camp demonstrate the power of community collaboration," noted our health program coordinator. "When we work together, we can make a real difference in people's lives."</p>

      <p>The success of this camp has inspired plans for more frequent health initiatives throughout the year, ensuring ongoing access to healthcare services.</p>
    `,
    author: 'Health Services Team',
    category: 'Health'
  },
  {
    id: 6,
    title: 'Clean Water Project Completion',
    date: 'March 5, 2024',
    summary: 'Completed installation of clean water systems in three remote villages, impacting over 2000 residents.',
    content: `
      <p>We are proud to announce the successful completion of our Clean Water Project, bringing safe, clean water to three remote villages and improving the lives of over 2,000 residents.</p>

      <p>This project addresses one of the most fundamental needs in our communities: access to clean, safe drinking water.</p>

      <h3>Project Achievements:</h3>
      <ul>
        <li><strong>Water Systems:</strong> Installation of boreholes and purification systems</li>
        <li><strong>Community Training:</strong> Education on water safety and maintenance</li>
        <li><strong>Sanitation Facilities:</strong> Improved hygiene infrastructure</li>
        <li><strong>Health Impact:</strong> Reduced waterborne diseases and improved community health</li>
        <li><strong>Economic Benefits:</strong> Time savings and increased productivity</li>
      </ul>

      <p>The project involved extensive community consultation to ensure the systems meet local needs and are sustainable long-term.</p>

      <p>Each village now has access to multiple clean water points, reducing the burden on women and children who previously spent hours collecting water from distant sources.</p>

      <p>"Clean water changes everything," shared a village elder. "Our children are healthier, our women have more time for education and work, and our community is stronger."</p>

      <p>This project serves as a model for future infrastructure initiatives, demonstrating how targeted investments can create lasting, transformative change.</p>
    `,
    author: 'Infrastructure Team',
    category: 'Infrastructure'
  }
];
