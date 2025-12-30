import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, Building, CheckCircle, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

// Category images from Unsplash
const categoryImages = {
  'AI': 'https://images.unsplash.com/photo-1744640326166-433469d102f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzY2OTg1MzkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'Cybersecurity': 'https://images.unsplash.com/photo-1760199789455-49098afd02f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjcwNjUxNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'Leadership': 'https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxlYWRlcnNoaXB8ZW58MXx8fHwxNzY3MDExMDI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'Professional': 'https://images.unsplash.com/photo-1622675103136-e4b90c9a33d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjcwODgxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'Technology': 'https://images.unsplash.com/photo-1623578240928-9473b76272ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NzA4ODE3NXww&ixlib=rb-4.1.0&q=80&w=1080'
};

export function Certificates() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const certificates = [
    {
      name: 'Using AI for Customer Service Managers',
      issuer: 'LinkedIn Learning',
      instructor: 'Brad Cleveland',
      date: '2024',
      category: 'AI & Customer Service',
      description: 'Understanding how to effectively implement and manage AI-powered solutions in customer service, with focus on design, development, and deployment.',
      skills: ['Artificial Intelligence for Business', 'AI', 'Customer Service Management'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/a5f3bd6671bdbfdf3f004657dd4de21c15298e65767e97f822e375f75f9a9981'
    },
    {
      name: 'Generative AI for Sales and Services Professionals',
      issuer: 'LinkedIn Learning',
      instructor: 'Sam Mallikarjunan',
      date: '2024',
      category: 'AI & Sales',
      description: 'Comprehensive examination of Generative AI and its applications within Sales and Services sectors, including automation and data-driven insights.',
      skills: ['Artificial Intelligence', 'Generative AI for Sales', 'Sales Support Tools'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/001d33f7d99f680d6a110e571778aea80cdda07a7911d5e891a5cc57e61f522e'
    },
    {
      name: 'Customer Journey Mapping with Generative AI',
      issuer: 'LinkedIn Learning',
      instructor: 'Maury Rogow',
      date: '2024',
      category: 'AI & Marketing',
      description: 'Using AI to build customer journey assets across the entire funnel, from ads to landing pages with personalized messaging.',
      skills: ['Customer Journey Mapping', 'AI for Business', 'Digital Marketing', 'Customer Journeys', 'Generative AI Tools'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/8893d6c69003405e270b449be4288cb98bf25b2474f4b1323cb17e48b525f347'
    },
    {
      name: 'What Is Microsoft Copilot? An Overview of Microsoft\'s AI Tools',
      issuer: 'LinkedIn Learning',
      instructor: 'Nick Brazzi',
      date: '2024',
      category: 'Microsoft Copilot',
      description: 'Overview of Microsoft AI-powered tools under the Copilot umbrella that streamline workflow, including web, mobile, and Office applications.',
      skills: ['Microsoft Copilot', 'AI for Business', 'Artificial Intelligence'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/75fd8c906ebd77cd009213115cc197d5281b93c3f2ec4df35708a64fc4f2739f'
    },
    {
      name: 'Learning Microsoft 365 Copilot for Work (2024)',
      issuer: 'LinkedIn Learning',
      instructor: 'Nick Brazzi',
      date: '2024',
      category: 'Microsoft Copilot',
      description: 'Using Copilot AI to create documents, summarize messages, and analyze data in Word, Excel, Outlook, Teams, and PowerPoint.',
      skills: ['Microsoft Copilot', 'Artificial Intelligence', 'Office 365'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/4f116cd51df0953b25124d47a78fe96a290d86d93fcad614375e2c129bd09b84'
    },
    {
      name: 'Microsoft Copilot: The Art of Prompt Writing',
      issuer: 'LinkedIn Learning',
      instructor: 'Garrick Chow',
      date: '2024',
      category: 'Microsoft Copilot',
      description: 'Mastering prompt writing to unlock Microsoft Copilot\'s power for summarizing meetings, editing text, and managing emails.',
      skills: ['Microsoft Copilot', 'AI Productivity', 'AI Prompting', 'Prompt Engineering'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/bdad486c237bf0e096e7cb69e2d9fed3ef3e89c73f037f0ec09f457de382f9b6'
    },
    {
      name: 'Copilot for Service: Helpful Tips for Customer Service Agents',
      issuer: 'LinkedIn Learning',
      instructor: 'Garrick Chow',
      date: '2024',
      category: 'Microsoft Copilot',
      description: 'How Copilot for Service revolutionizes customer service by streamlining tasks and automating routine processes.',
      skills: ['Microsoft Copilot', 'AI for Business', 'Artificial Intelligence'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/d13668ebe9f1e3baa6440e9ac49f0a1d4194986bad5b341c90e2c77492b7e210'
    },
    {
      name: 'Generative AI for Cyber Range and Training',
      issuer: 'LinkedIn Learning',
      instructor: 'Ian Khan',
      date: '2024',
      category: 'Cybersecurity',
      description: 'Exploring generative AI in creating realistic cyber-attack simulations and personalized cybersecurity training paths.',
      skills: ['Generative AI', 'Artificial Intelligence', 'Cybersecurity'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/fffe6df12fab144975facc7d911995b57939765a9298b382c364181390080f66'
    },
    {
      name: 'Managing AI Security Risks with ISO 27001',
      issuer: 'LinkedIn Learning',
      instructor: 'Tino Šokić',
      date: '2024',
      category: 'Cybersecurity',
      description: 'Comprehensive journey into ISO 27001 standards and AI security management, risk management, and compliance.',
      skills: ['ISO 27001', 'Artificial Intelligence', 'AI Security', 'Cyber Risk Management'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/1a79363bf455201cbcf833cbb77c8181f9eac143a1dbbbfd2689d1b944b72be8'
    },
    {
      name: 'Studying for the Certified Business Analysis Professional (CBAP)®',
      issuer: 'LinkedIn Learning',
      instructor: 'Jamie Champagne',
      date: '2024',
      category: 'Business Analysis',
      description: 'Preparation for CBAP certification covering Business Analyst Core Concept Model and six knowledge areas.',
      skills: ['Business Analysis'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/95177e8f87cedeef8f9cd37146b27fdad18ccf2cb98275664dae2498e98d4b05'
    },
    {
      name: 'Six Sigma: Green Belt',
      issuer: 'LinkedIn Learning',
      instructor: 'Richard Chua',
      date: '2024',
      category: 'Process Excellence',
      description: 'Comprehensive Six Sigma Green Belt training covering process improvement, quality tools, and statistical analysis.',
      skills: ['Six Sigma', 'Six Sigma Green Belt'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/8254ec5e53117ecbf015519043b1ef16a81b8a10786832318f27f547aad2ad44'
    },
    {
      name: 'ServiceNow IT Leadership Professional Certificate',
      issuer: 'ServiceNow and LinkedIn',
      instructor: 'Multiple Instructors',
      date: '2024',
      category: 'IT Leadership',
      description: 'Professional certificate program covering IT strategy, architecture, program management, and tech leadership.',
      skills: ['IT Strategic Planning', 'IT Architecture', 'Program Management', 'Technical Leadership'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/1a6bf9d2f69d5cff3187e50789a9ae43eddfa75bd70e2bc75ccab269f970341e'
    },
    {
      name: 'ServiceNow - Succeeding as a First-Time Tech Manager',
      issuer: 'LinkedIn Learning',
      instructor: 'Rashim Mogha',
      date: '2024',
      category: 'IT Leadership',
      description: 'Transitioning from individual contributor to tech manager, building teams, and managing human-AI collaboration.',
      skills: ['Technical Leadership', 'Management Development', 'Management'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/1056cc496c310fb045ca214b3b2547db48d409879583f2cd4bdb6b09720efc15'
    },
    {
      name: 'ServiceNow - Program Management for IT Professionals',
      issuer: 'LinkedIn Learning',
      instructor: 'Kevin Miller',
      date: '2024',
      category: 'IT Leadership',
      description: 'How program management coordinates related projects, reduces rework, and stays aligned with strategic goals.',
      skills: ['IT Project & Program Management', 'Program Management'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/571668b660aafe4fbfa0d7dc8a81b10ddb7c00cdfa6a225edb604bce910408a4'
    },
    {
      name: 'ServiceNow - Introduction to IT Architecture',
      issuer: 'LinkedIn Learning',
      instructor: 'David Pultorak',
      date: '2024',
      category: 'IT Leadership',
      description: 'Foundational understanding of IT architecture, frameworks, methodologies, and strategic planning.',
      skills: ['IT Architectures'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/afbbe94cc1cfdae60514ff388cfd284abcac238a13531ed8a3da7ad9c303b0e0'
    },
    {
      name: 'ServiceNow - Creating Your IT Strategy',
      issuer: 'LinkedIn Learning',
      instructor: 'Peter High',
      date: '2024',
      category: 'IT Leadership',
      description: 'Creating agile IT departments, measuring IT performance, and aligning technology with business strategy.',
      skills: ['IT Strategic Planning'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/72fb1556fd734075dc5d607bb23398ab0b859ebb63dae28c75b0509311f4c951'
    },
    {
      name: 'How to Use AI for Upskilling and Lifelong Learning',
      issuer: 'LinkedIn Learning',
      instructor: 'Ruth Gotian',
      date: '2024',
      category: 'AI & Learning',
      description: 'Using AI as personalized learning assistant for relevant topics, retention enhancement, and maintaining motivation.',
      skills: ['AI for Business', 'Learning', 'Artificial Intelligence'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/001d3dd83002b90d8ea94bebf551bc9b60be4b7a1164ee854f2c4cb8074e4fed'
    },
    {
      name: 'Cybersecurity Careers and Certifications',
      issuer: 'LinkedIn Learning',
      instructor: 'Marc Menninger',
      date: '2024',
      category: 'Cybersecurity',
      description: 'Exploring cybersecurity career paths, certifications, and professional development opportunities.',
      skills: ['Cybersecurity', 'Career Development'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/4f0bf7fd1c346939c1bfbdf6cadf1b661945b6a0417b40bc3b8047dc23b53e9b'
    },
    {
      name: 'Microsoft 365 Copilot: Helpful Tips for Sales Professionals',
      issuer: 'LinkedIn Learning',
      instructor: 'Garrick Chow',
      date: '2024',
      category: 'Microsoft Copilot',
      description: 'How Copilot transforms sales process by simplifying meetings, proposals, and customer research.',
      skills: ['Microsoft Copilot', 'Microsoft 365', 'AI', 'Sales Effectiveness'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/fe3335a89b5111624064c36b77700a54b5c208f75e1538ee696a783974d34d07'
    },
    {
      name: 'Sales Strategy: Using AI and Automation to Sell More',
      issuer: 'LinkedIn Learning',
      instructor: 'Miles Croft',
      date: '2024',
      category: 'AI & Sales',
      description: 'Leveraging automation and AI to improve sales efficiency, forecasting, and customer discovery.',
      skills: ['AI for Sales', 'Sales Strategy', 'Artificial Intelligence', 'Sales Automation'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/ac5f714a0b81807b0fa6389d90751ab71ea363c5c5a01f36991d10971ebda6f8'
    },
    {
      name: 'How to Generate Marketing Leads with AI',
      issuer: 'LinkedIn Learning',
      instructor: 'Lorenzo Johnson & Madecraft',
      date: '2024',
      category: 'AI & Marketing',
      description: 'Combining marketing strategies with generative AI for innovative lead generation techniques.',
      skills: ['B2B Marketing', 'AI for Marketing', 'Artificial Intelligence', 'Lead Generation'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/c9fedd530e391e490b46f1ba69a28438cf062ff3538d054425dddb6839194720'
    },
    {
      name: 'Managing Organizational Change for Managers',
      issuer: 'LinkedIn Learning',
      instructor: 'Donna Brighton',
      date: '2024',
      category: 'Leadership',
      description: 'Strategies to lead teams through organizational change, remove discomfort, and sustain planned change.',
      skills: ['Organizational Change Management'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/6102c45dcc294ee6bfe16961ff49caf02530d4cf76a762f6359fd99dcf662a87'
    },
    {
      name: 'Body Language for Leaders and Managers',
      issuer: 'LinkedIn Learning',
      instructor: 'Carol Kinsey Goman, PhD',
      date: '2024',
      category: 'Leadership',
      description: 'Using body language to project leadership presence, signal confidence, and connect with audiences.',
      skills: ['Body Language', 'Leadership'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/8a2ae056d165821d0db50eb17816a443454d949d03deab2d1dbe23825d0c837b'
    },
    {
      name: 'Copilot in PowerPoint: From Prompt to Presentation',
      issuer: 'LinkedIn Learning',
      instructor: 'Julie Terberg',
      date: '2024',
      category: 'Microsoft Copilot',
      description: 'Using Microsoft 365 Copilot to create, refine, and format professional presentations in seconds.',
      skills: ['Microsoft Copilot', 'AI for Business'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/a19a3b1b9f63e5a2cca8dd291698ce931305f384fd4e1f20f686eba07282feca'
    },
    {
      name: 'The Cybersecurity Threat Landscape',
      issuer: 'LinkedIn Learning',
      instructor: 'Marc Menninger',
      date: '2024',
      category: 'Cybersecurity',
      description: 'Understanding common cybersecurity threats including phishing, ransomware, and IoT vulnerabilities.',
      skills: ['Threat & Vulnerability Management', 'Cybersecurity'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/c4709fff0a5c04abaa9ffbd778af613330359051d2a26c14cd88851d8ad97251'
    },
    {
      name: 'Excel with Copilot: AI-Driven Data Analysis',
      issuer: 'LinkedIn Learning',
      instructor: 'George Mount',
      date: '2024',
      category: 'Microsoft Copilot',
      description: 'Role of Copilot in automating Excel tasks, AI-driven data manipulation, and advanced analytics.',
      skills: ['Microsoft Copilot', 'AI for Business Analysis'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/a41b3c6986fbf227eddba51d4fcec62108df2853d1a5d04c8f8d53e5c5422517'
    },
    {
      name: 'Prompt Engineering: How to Talk to the AIs',
      issuer: 'LinkedIn Learning',
      instructor: 'Xavier Amatriain',
      date: '2024',
      category: 'AI & Productivity',
      description: 'Core concepts of prompt engineering for generative AI, including advanced techniques and chain-of-thought prompting.',
      skills: ['Generative AI', 'Artificial Intelligence'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/8130d6b0c8828b9c746fac5399a214b79dfd8fe44ad06293dfca0f6ba39382c4'
    },
    {
      name: 'Marketing Analytics Foundations',
      issuer: 'LinkedIn Learning',
      instructor: 'Christina Inge',
      date: '2024',
      category: 'Marketing',
      description: 'Marketing analytics fundamentals including KPIs, metrics, dashboards, and data-driven decision making.',
      skills: ['Marketing Analytics'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/6060b9406e1c3840de91dd58704c1a80e46393b4cd0f87dc9ec579de79999c87'
    },
    {
      name: 'Marketing Foundations: Ecommerce',
      issuer: 'LinkedIn Learning',
      instructor: 'Sam Dey',
      date: '2024',
      category: 'Marketing',
      description: 'Ecommerce marketing tactics and tools to increase conversions, leverage platforms, and optimize touchpoints.',
      skills: ['E-Commerce'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/a19a3b1b9f63e5a2cca8dd291698ce931305f384fd4e1f20f686eba07282feca'
    },
    {
      name: 'Strategic Content Marketing: Grow Your Reach on Social Media',
      issuer: 'LinkedIn Learning',
      instructor: 'Kelli Schutrop & Madecraft',
      date: '2024',
      category: 'Marketing',
      description: 'Developing powerful social media content as central component of content marketing strategy.',
      skills: ['Social Media Branding', 'Content Marketing'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/c4709fff0a5c04abaa9ffbd778af613330359051d2a26c14cd88851d8ad97251'
    },
    {
      name: 'Content Marketing Foundations',
      issuer: 'LinkedIn Learning',
      instructor: 'Brian Honigman',
      date: '2024',
      category: 'Marketing',
      description: 'Step-by-step approach to content marketing including strategy, content types, and editorial calendar.',
      skills: ['Content Marketing'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/a41b3c6986fbf227eddba51d4fcec62108df2853d1a5d04c8f8d53e5c5422517'
    },
    {
      name: 'Marketing Foundations',
      issuer: 'LinkedIn Learning',
      instructor: 'Marta Dapena Barón',
      date: '2024',
      category: 'Marketing',
      description: 'Core marketing concepts including brands, customers, value proposition, and customer-brand experience.',
      skills: ['Marketing'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/8130d6b0c8828b9c746fac5399a214b79dfd8fe44ad06293dfca0f6ba39382c4'
    },
    {
      name: 'Technical SEO',
      issuer: 'LinkedIn Learning',
      instructor: 'Dana DiTomaso',
      date: '2024',
      category: 'Marketing',
      description: 'Optimizing website for SEO including crawlers, site speed, schema, architecture, and analytics.',
      skills: ['Search Engine Optimization (SEO)'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/6060b9406e1c3840de91dd58704c1a80e46393b4cd0f87dc9ec579de79999c87'
    },
    {
      name: 'A Beginner\'s Guide to Email Marketing',
      issuer: 'LinkedIn Learning',
      instructor: 'India Lott & Madecraft',
      date: '2024',
      category: 'Marketing',
      description: 'Email marketing strategy, goal setting, audience segmentation, and creating engaging campaigns.',
      skills: ['Email Marketing'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/a19a3b1b9f63e5a2cca8dd291698ce931305f384fd4e1f20f686eba07282feca'
    },
    {
      name: 'Learning SAP Fiori: End User',
      issuer: 'LinkedIn Learning',
      instructor: 'Michael Management',
      date: '2024',
      category: 'Enterprise Systems',
      description: 'Navigating and personalizing SAP Fiori interface and processing transactions using Fiori apps.',
      skills: ['SAP Fiori'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/abf62157a093cd11752d84c9d3278a1edc6ba5531c7f91b139b1e308316ef361'
    },
    {
      name: 'Salesforce Essential Training',
      issuer: 'LinkedIn Learning',
      instructor: 'Jamie Grettum',
      date: '2024',
      category: 'Enterprise Systems',
      description: 'Using Salesforce CRM effectively including customer management, lead tracking, and sales pipeline.',
      skills: ['Salesforce.com', 'Customer Relationship Management (CRM)'],
      linkedinUrl: 'https://www.linkedin.com/learning/certificates/c4709fff0a5c04abaa9ffbd778af613330359051d2a26c14cd88851d8ad97251'
    }
  ];

  const categories = ['all', 'Microsoft Copilot', 'AI & Sales', 'AI & Marketing', 'Cybersecurity', 'IT Leadership', 'Business Analysis', 'Process Excellence', 'Leadership', 'Marketing', 'Enterprise Systems', 'AI & Learning', 'AI & Productivity', 'AI & Customer Service'];

  const filteredCertificates = selectedCategory === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full mb-4">
          <Award className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Certificates & Licenses</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          My continuous learning journey through LinkedIn Learning platform, showcasing expertise across 
          AI, Digital Transformation, Cybersecurity, IT Leadership, and Enterprise Systems.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-3xl font-bold text-slate-900 mb-1">49+</div>
            <div className="text-sm text-slate-600">Total Certificates</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-3xl font-bold text-slate-900 mb-1">14</div>
            <div className="text-sm text-slate-600">Categories</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-3xl font-bold text-slate-900 mb-1">2024</div>
            <div className="text-sm text-slate-600">All Recent</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-3xl font-bold text-slate-900 mb-1">100%</div>
            <div className="text-sm text-slate-600">Completion Rate</div>
          </CardContent>
        </Card>
      </div>

      {/* Filter Tabs */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
          <Filter className="w-4 h-4" />
          Filter by Category
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              size="sm"
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-slate-600">
          Showing <span className="font-bold text-slate-900">{filteredCertificates.length}</span> certificates
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredCertificates.map((cert, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Badge variant="secondary">{cert.category}</Badge>
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <CardTitle className="text-lg">{cert.name}</CardTitle>
              <CardDescription className="flex flex-col gap-1">
                <span className="flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  {cert.issuer}
                </span>
                <span className="text-sm">By: {cert.instructor}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-slate-600 mb-4">
                <Calendar className="w-4 h-4" />
                <span>Completed: {cert.date}</span>
              </div>
              
              <p className="text-slate-700 mb-4 text-sm">{cert.description}</p>
              
              <div className="mb-4">
                <div className="text-sm font-semibold text-slate-900 mb-2">Skills Covered:</div>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end pt-4 border-t border-slate-200">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="gap-2"
                  onClick={() => window.open(cert.linkedinUrl, '_blank')}
                >
                  View Certificate <ExternalLink className="w-3 h-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Professional Certifications Info */}
      <Card className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle>Professional Certifications & Continuing Education</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-700 mb-4">
            All certificates are earned through LinkedIn Learning platform and recognized by leading professional organizations:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
              <span className="text-sm text-slate-700">Professional Certifications and Continuing Education Units (CEUs)</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
              <span className="text-sm text-slate-700">National Association of State Boards of Accountancy (NASBA)</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
              <span className="text-sm text-slate-700">Continuing Professional Education Credit (CPE)</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
              <span className="text-sm text-slate-700">Project Management Institute (PMI)®</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="mt-12 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <CardContent className="pt-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Interested in Learning These Skills?</h3>
          <p className="mb-6 text-blue-100">
            Check out the Learning Guides section for detailed roadmaps on how to acquire these certifications 
            and master the skills needed for digital transformation.
          </p>
          <Button variant="secondary" size="lg">
            Explore Learning Guides
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}