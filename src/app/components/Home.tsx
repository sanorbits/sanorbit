import { Award, Briefcase, Cloud, Code, Database, Rocket, Target, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import profilePhoto from 'figma:asset/d70c88e120c2db9094c20ccdbc9c51a38aa3963b.png';

export function Home() {
  const experience = [
    {
      title: 'Vice President – IT',
      company: 'Usha International, Gurgaon',
      period: 'Feb 2020 - Present',
      description: 'Leading IT Security, Applications, PMO, SAP, Salesforce, Finance Automation, SCM, HR Digitalization, CRM, AI/ML (Power BI, Copilot, DeepSeek).',
      achievements: [
        'Rolled out SFA for 3,500+ employees; deployed DMS for 12,000+ distributors',
        'Modernized SCM with QR tracking, load optimization, vehicle monitoring',
        'Implemented PMS and Odoo Service Platform for workforce and service excellence',
        'Strengthened IT security, governance, compliance via CAB, PMO, ITLT, ISO 27001',
        'Enabled AI/ML, BI (Power BI, Copilot, DeepSeek) for forecasting and analytics',
        'Digitized HR with LnD automation, Employee 360',
        'Directed enterprise-wide CRM, loyalty, web platforms for customer experience'
      ]
    },
    {
      title: 'Senior General Manager – IT',
      company: 'Havells India Ltd, Noida',
      period: 'Dec 2015 - Feb 2020',
      description: 'Led Marketing Automation, Demand Forecasting, Smart Manufacturing (IoT/IIoT), BI (Power BI), Omni Channel Development, Internal Audit Automation.',
      achievements: [
        'Built sales & service tools for 8,500 employees, 3,500 technicians, 6K partners & 200K retailers',
        'Managed SAP/MS Dynamics 365/Salesforce ERP & 25 Non-ERP applications as Application Head',
        'Developed enterprise-wide Data-Lake, IT Security framework, GRC and PMO structure',
        'Led e-commerce, Industry 4.0 integration with ERP and R&D technical platform development',
        'Promoted from GM to SGM during tenure'
      ]
    },
    {
      title: 'Deputy General Manager – Business Innovation',
      company: 'Samsung India, Gurgaon',
      period: 'Feb 2011 - Nov 2015',
      description: 'Managed ERP (MS AX, SAP), CRM, Lead Management, Social Listening, Claims Automation, WMS, Partner Network, BI (Tableau), POS, SCM Bidding Automation.',
      achievements: [
        'Led Business Innovation team with 84+ IT projects implementation across functions',
        'Supported all three divisions (HHP, CE & B2B), 6 sales channels, 1,200 distributors, 50,000+ retailers',
        'Successful implementation of MS DX/GSPN ERP with biggest mobile consumer loyalty programs',
        'Digitized global partner network & consumer connect'
      ]
    },
    {
      title: 'Regional Field Manager & Earlier Roles',
      company: 'HUL, Nivea India, Spencer Retail, Dabur India, DS Group',
      period: '1996 - 2011',
      description: 'Progressive career in sales, service, distribution, and retail operations across FMCG, Electronics, Consumer Goods, and Retail sectors.',
      achievements: [
        'Digitized sales execution and PDA rollout for 8,500 users at HUL',
        'Expanded distribution networks across multiple territories',
        'Managed retail operations with 162 team members across 18 stores',
        'Built strong foundation in sales operations and field team training'
      ]
    }
  ];

  const skills = [
    { name: 'ERP & Enterprise Systems', icon: Cloud, level: 'Expert' },
    { name: 'AI/ML & Analytics', icon: Database, level: 'Expert' },
    { name: 'Digital Transformation', icon: Code, level: 'Expert' },
    { name: 'Business Strategy', icon: Target, level: 'Expert' },
  ];

  const highlights = [
    { icon: Briefcase, label: 'Years Experience', value: '29+' },
    { icon: Award, label: 'Certifications', value: '49+' },
    { icon: Rocket, label: 'Projects Delivered', value: '120+' },
    { icon: TrendingUp, label: 'Teams Led', value: '100+' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-600 shadow-xl">
          <img src={profilePhoto} alt="Sanjeev Kumar Sharma" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Sanjeev Kumar Sharma
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-4">
          Technology & Business Leader | Driving Digital Transformation
        </p>
        <p className="text-lg text-slate-700 max-w-3xl mx-auto mb-8 italic">
          "Leverage Technology to Drive Business Productivity"
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm text-slate-600">
          <span>📍 Delhi NCR, India</span>
          <span>📱 +91 8800987666</span>
          <span>✉️ goforgrowth@gmail.com</span>
          <span>🌐 sanorbit.com</span>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary" className="px-4 py-2">SAP</Badge>
          <Badge variant="secondary" className="px-4 py-2">Salesforce</Badge>
          <Badge variant="secondary" className="px-4 py-2">AI/ML</Badge>
          <Badge variant="secondary" className="px-4 py-2">Power BI</Badge>
          <Badge variant="secondary" className="px-4 py-2">Microsoft Copilot</Badge>
          <Badge variant="secondary" className="px-4 py-2">Cybersecurity</Badge>
          <Badge variant="secondary" className="px-4 py-2">IoT/IIoT</Badge>
        </div>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {highlights.map((highlight, index) => {
          const Icon = highlight.icon;
          return (
            <Card key={index}>
              <CardContent className="pt-6 text-center">
                <Icon className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                <div className="text-3xl font-bold text-slate-900 mb-1">{highlight.value}</div>
                <div className="text-sm text-slate-600">{highlight.label}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recommendation Highlight */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-6 h-6 text-orange-600" />
              Featured Recommendation
            </CardTitle>
            <CardDescription className="text-base font-medium text-slate-900">
              Devendra Paliwal - Head – Digital Transformation, DLF
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 italic leading-relaxed">
              "Sanjeev is a standout IT and digital transformation leader with deep expertise across CRM, cloud, 
              AI/ML, cybersecurity, and automation. Known for clarity, empathy, and problem solving, he simplifies 
              complexity, empowers teams, and drives outcomes. Highly recommended for senior leadership roles."
            </p>
          </CardContent>
        </Card>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Professional Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 leading-relaxed mb-4">
              Technology & Business Leader with 29 years' experience in IT strategy, digital transformation, 
              enterprise systems, and automation across FMCG, Electronics, Consumer Goods, Electrical, Healthcare, 
              and Retail. Expertise in ERP (SAP, MS AX, Odoo), CRM/SFA, BI (Power BI, Tableau), AI/ML, predictive 
              analytics, IoT/IIoT, cybersecurity, ISO 27001, and cloud.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Business Excellence</h3>
                <p className="text-slate-700 text-sm">
                  15 years of experience in sales, service, distribution, retail operations, and stakeholder 
                  management, with a strong foundation in value-driven decision making and consumer-centric strategies.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Technology Transformation</h3>
                <p className="text-slate-700 text-sm">
                  14+ years leading enterprise IT execution, delivering AI/ML, predictive analytics, ERP, BI, 
                  cybersecurity, and IoT/IIoT implementations.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Core Competencies */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Core Competencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <Icon className="w-10 h-10 mx-auto mb-3 text-blue-600" />
                  <h3 className="font-bold text-slate-900 mb-2">{skill.name}</h3>
                  <Badge>{skill.level}</Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Signature Achievement */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
          <CardHeader>
            <CardTitle>Signature Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-blue-200">✓</span>
                <span>Delivered 120+ IT projects, automating operations for 12K partners, 250K dealers, 200K retailers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-200">✓</span>
                <span>Digitally enabled 5K employees and 2M+ customers with enterprise platforms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-200">✓</span>
                <span>Directed 100+ professionals and managed 300 suppliers/vendors to drive transformation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-200">✓</span>
                <span>Streamlined 25K SKUs with robust master data governance</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Career Contour</h2>
        <div className="space-y-6">
          {experience.map((job, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <CardTitle>{job.title}</CardTitle>
                  <Badge variant="outline">{job.period}</Badge>
                </div>
                <CardDescription className="text-base font-medium text-slate-900">
                  {job.company}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 mb-4">{job.description}</p>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-700">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}