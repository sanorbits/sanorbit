import { BookOpen, CheckCircle, Clock, DollarSign, Target, TrendingUp, Star, Play } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const learningImage = 'https://images.unsplash.com/photo-1762330910399-95caa55acf04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFybmluZyUyMGVkdWNhdGlvbiUyMG9ubGluZXxlbnwxfHx8fDE3NjcwODgxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080';

export function LearningGuides() {
  const guides = [
    {
      title: 'Microsoft 365 Copilot Mastery',
      level: 'Beginner to Advanced',
      duration: '4-6 weeks',
      cost: 'LinkedIn Learning Subscription ($29.99/month)',
      difficulty: 'Beginner',
      demand: 'Very High',
      description: 'Master Microsoft Copilot tools to boost productivity across Word, Excel, PowerPoint, Outlook, and Teams.',
      path: [
        {
          phase: 'Foundation (Week 1)',
          topics: [
            'What Is Microsoft Copilot - Overview of tools',
            'Understanding Copilot subscriptions and features',
            'Basic prompt writing fundamentals',
            'Using Copilot on web and mobile'
          ]
        },
        {
          phase: 'Application Skills (Weeks 2-4)',
          topics: [
            'Learning Microsoft 365 Copilot for Work',
            'Copilot in Word - document creation and editing',
            'Copilot in Excel - AI-driven data analysis',
            'Copilot in PowerPoint - prompt to presentation',
            'Copilot in Outlook and Teams - email and meeting summaries'
          ]
        },
        {
          phase: 'Advanced & Specialized (Weeks 5-6)',
          topics: [
            'The Art of Prompt Writing - advanced techniques',
            'Copilot for Sales Professionals - customer research',
            'Copilot for Service - customer service automation',
            'Real-world application and practice'
          ]
        }
      ],
      resources: [
        'Microsoft Copilot Documentation',
        'LinkedIn Learning - Nick Brazzi courses',
        'LinkedIn Learning - Garrick Chow courses',
        'Microsoft 365 Business Chat practice'
      ],
      tips: [
        'Start with free Copilot features before upgrading',
        'Practice prompt engineering daily',
        'Focus on your specific role (sales, service, analytics)',
        'Join Microsoft Copilot community forums'
      ]
    },
    {
      title: 'Generative AI for Business Professionals',
      level: 'Professional Certificate',
      duration: '6-8 weeks',
      cost: 'LinkedIn Learning Subscription',
      difficulty: 'Intermediate',
      demand: 'Very High',
      description: 'Leverage Generative AI for sales, marketing, customer service, and business transformation.',
      path: [
        {
          phase: 'AI Fundamentals (Weeks 1-2)',
          topics: [
            'Prompt Engineering - How to Talk to AIs',
            'Understanding LLMs and generative models',
            'AI for upskilling and lifelong learning',
            'Ethical considerations in AI'
          ]
        },
        {
          phase: 'Business Applications (Weeks 3-5)',
          topics: [
            'Generative AI for Sales and Services',
            'Customer Journey Mapping with AI',
            'Using AI for Customer Service Managers',
            'How to Generate Marketing Leads with AI',
            'Sales Strategy with AI and Automation'
          ]
        },
        {
          phase: 'Implementation (Weeks 6-8)',
          topics: [
            'Integrating AI into workflows',
            'Change management for AI adoption',
            'Measuring AI impact on business metrics',
            'Continuous learning and adaptation'
          ]
        }
      ],
      resources: [
        'LinkedIn Learning - Sam Mallikarjunan courses',
        'LinkedIn Learning - Xavier Amatriain',
        'LinkedIn Learning - Maury Rogow',
        'OpenAI and Microsoft AI documentation'
      ],
      tips: [
        'Start with practical use cases in your current role',
        'Experiment with different AI tools (ChatGPT, Claude, Gemini)',
        'Document your prompts and results',
        'Share learnings with your team'
      ]
    },
    {
      title: 'IT Leadership & Strategy',
      level: 'Professional Certificate (ServiceNow)',
      duration: '8-10 weeks',
      cost: 'Free (ServiceNow + LinkedIn)',
      difficulty: 'Advanced',
      demand: 'High',
      description: 'Comprehensive IT leadership training covering strategy, architecture, and program management.',
      path: [
        {
          phase: 'Strategic Foundation (Weeks 1-3)',
          topics: [
            'Creating Your IT Strategy',
            'Linking IT mission to enterprise goals',
            'IT performance metrics and KPIs',
            'Business trends enabled by technology'
          ]
        },
        {
          phase: 'Architecture & Management (Weeks 4-7)',
          topics: [
            'Introduction to IT Architecture',
            'IT architecture frameworks (TOGAF)',
            'Program Management for IT Professionals',
            'Managing interdependencies across projects',
            'Succeeding as First-Time Tech Manager'
          ]
        },
        {
          phase: 'Leadership Excellence (Weeks 8-10)',
          topics: [
            'Building and leading technical teams',
            'Managing human-AI collaboration',
            'Stakeholder management at program level',
            'Communication strategies for tech leaders'
          ]
        }
      ],
      resources: [
        'ServiceNow Learning Portal',
        'LinkedIn Learning - Peter High',
        'LinkedIn Learning - David Pultorak',
        'LinkedIn Learning - Kevin Miller & Rashim Mogha'
      ],
      tips: [
        'Apply concepts to your current IT projects',
        'Network with other IT leaders',
        'Document your IT strategy artifacts',
        'Seek mentorship from experienced CTOs/CIOs'
      ]
    },
    {
      title: 'Cybersecurity Essentials',
      level: 'Foundational to Intermediate',
      duration: '4-6 weeks',
      cost: 'LinkedIn Learning Subscription',
      difficulty: 'Intermediate',
      demand: 'Very High',
      description: 'Understanding cybersecurity threats, AI security risks, and ISO 27001 compliance.',
      path: [
        {
          phase: 'Threat Landscape (Weeks 1-2)',
          topics: [
            'The Cybersecurity Threat Landscape',
            'Phishing, ransomware, and IoT vulnerabilities',
            'Cybersecurity Careers and Certifications',
            'Common attack vectors and countermeasures'
          ]
        },
        {
          phase: 'AI Security (Weeks 3-4)',
          topics: [
            'Managing AI Security Risks with ISO 27001',
            'AI-specific security controls',
            'Generative AI for Cyber Range and Training',
            'Risk assessment for AI systems'
          ]
        },
        {
          phase: 'Implementation (Weeks 5-6)',
          topics: [
            'Developing security policies',
            'Compliance and audit preparation',
            'Security awareness training',
            'Incident response planning'
          ]
        }
      ],
      resources: [
        'LinkedIn Learning - Marc Menninger',
        'LinkedIn Learning - Tino Šokić',
        'LinkedIn Learning - Ian Khan',
        'ISO 27001 official documentation'
      ],
      tips: [
        'Stay updated on latest security threats',
        'Practice with cyber range simulations',
        'Implement security best practices in your org',
        'Consider CISSP or CISM certification path'
      ]
    },
    {
      title: 'Digital Marketing & SEO',
      level: 'Beginner to Intermediate',
      duration: '6-8 weeks',
      cost: 'LinkedIn Learning Subscription',
      difficulty: 'Beginner',
      demand: 'High',
      description: 'Master digital marketing fundamentals including content marketing, SEO, email marketing, and analytics.',
      path: [
        {
          phase: 'Marketing Foundations (Weeks 1-2)',
          topics: [
            'Marketing Foundations - core concepts',
            'Understanding brands and value propositions',
            'Content Marketing Foundations',
            'Marketing Analytics Foundations'
          ]
        },
        {
          phase: 'Specialized Skills (Weeks 3-5)',
          topics: [
            'Technical SEO - site optimization',
            'Email Marketing - campaigns and automation',
            'Marketing Foundations: Ecommerce',
            'Strategic Content Marketing for Social Media'
          ]
        },
        {
          phase: 'Advanced Tactics (Weeks 6-8)',
          topics: [
            'Marketing Analytics and dashboards',
            'A/B testing and optimization',
            'Lead generation with AI',
            'Measuring marketing ROI'
          ]
        }
      ],
      resources: [
        'LinkedIn Learning - Dana DiTomaso (SEO)',
        'LinkedIn Learning - Marta Dapena Barón',
        'LinkedIn Learning - Brian Honigman',
        'Google Analytics Academy'
      ],
      tips: [
        'Start with your own website or project',
        'Use free tools (Google Analytics, Search Console)',
        'Build a content calendar and stick to it',
        'Track metrics that matter to your business'
      ]
    },
    {
      title: 'Enterprise Systems (SAP & Salesforce)',
      level: 'End User to Administrator',
      duration: '4-6 weeks',
      cost: 'LinkedIn Learning + Trailhead (Free)',
      difficulty: 'Intermediate',
      demand: 'High',
      description: 'Gain proficiency in leading enterprise systems including SAP Fiori and Salesforce CRM.',
      path: [
        {
          phase: 'SAP Fiori (Weeks 1-2)',
          topics: [
            'Learning SAP Fiori: End User',
            'Navigating Fiori launchpad',
            'Setting up groups and apps',
            'Processing transactions with Fiori apps'
          ]
        },
        {
          phase: 'Salesforce CRM (Weeks 3-5)',
          topics: [
            'Salesforce Essential Training',
            'Managing customers and leads',
            'Sales pipeline management',
            'Salesforce reporting and analytics'
          ]
        },
        {
          phase: 'Integration & Advanced (Week 6)',
          topics: [
            'CRM best practices',
            'Data migration and cleansing',
            'Automation and workflows',
            'Mobile CRM usage'
          ]
        }
      ],
      resources: [
        'LinkedIn Learning - Jamie Grettum (Salesforce)',
        'LinkedIn Learning - Michael Management (SAP)',
        'Salesforce Trailhead (free platform)',
        'SAP Learning Hub'
      ],
      tips: [
        'Get hands-on with free Salesforce Developer org',
        'Practice with sample business scenarios',
        'Focus on real-world use cases',
        'Consider Salesforce Admin certification'
      ]
    }
  ];

  const studyTips = [
    {
      title: 'Consistent Daily Practice',
      description: 'Dedicate 30-60 minutes daily. Consistency beats intensity for long-term retention.',
      icon: Clock
    },
    {
      title: 'Apply Immediately',
      description: 'Use new skills in your current role. Real-world application solidifies learning.',
      icon: Target
    },
    {
      title: 'Build a Portfolio',
      description: 'Document your projects and certificates. Create a showcase of your expertise.',
      icon: BookOpen
    },
    {
      title: 'Share Your Knowledge',
      description: 'Teach others what you learn. Teaching reinforces understanding and builds your brand.',
      icon: CheckCircle
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-4">
          <BookOpen className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Learning Guides</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Step-by-step roadmaps based on my learning journey through 49+ LinkedIn Learning courses. 
          These guides will help you acquire in-demand skills in AI, Digital Transformation, and IT Leadership.
        </p>
      </div>

      {/* Personal Insight */}
      <section className="mb-12">
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              My Learning Philosophy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 leading-relaxed mb-4">
              After 29 years in the industry, I've learned that continuous learning is not optional—it's essential. 
              In 2024, I completed 49+ certifications across AI, Microsoft Copilot, Cybersecurity, IT Leadership, 
              and Marketing. This wasn't about collecting certificates; it was about staying relevant and leading 
              digital transformation initiatives with confidence.
            </p>
            <p className="text-slate-700 leading-relaxed">
              The roadmaps below are organized based on my actual learning experience. I've grouped related courses 
              into learning paths that build on each other, helping you develop comprehensive expertise in each domain.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Study Tips */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Essential Study Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {studyTips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <Card key={index}>
                <CardContent className="pt-6">
                  <Icon className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-bold text-slate-900 mb-2">{tip.title}</h3>
                  <p className="text-sm text-slate-600">{tip.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Certification Guides */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Certification Roadmaps</h2>
        <div className="space-y-6">
          {guides.map((guide, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-slate-50 to-blue-50">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-2xl">{guide.title}</CardTitle>
                      <Badge variant="secondary">{guide.level}</Badge>
                    </div>
                    <CardDescription className="text-base">
                      {guide.description}
                    </CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="gap-1">
                      <Clock className="w-3 h-3" />
                      {guide.duration}
                    </Badge>
                    <Badge variant="outline" className="gap-1">
                      <DollarSign className="w-3 h-3" />
                      {guide.cost}
                    </Badge>
                    <Badge variant="outline" className="gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {guide.demand} Demand
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                {/* Learning Path */}
                <div className="mb-6">
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Play className="w-5 h-5 text-blue-600" />
                    Learning Path
                  </h3>
                  <Accordion type="single" collapsible className="w-full">
                    {guide.path.map((phase, phaseIndex) => (
                      <AccordionItem key={phaseIndex} value={`phase-${phaseIndex}`}>
                        <AccordionTrigger className="hover:no-underline">
                          <span className="font-semibold">{phase.phase}</span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 pl-4">
                            {phase.topics.map((topic, topicIndex) => (
                              <li key={topicIndex} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-700">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                {/* Resources */}
                <div className="mb-6">
                  <h3 className="font-bold text-slate-900 mb-3">Recommended Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {guide.resources.map((resource, resourceIndex) => (
                      <div key={resourceIndex} className="flex items-center gap-2 text-slate-700 bg-slate-50 p-3 rounded-lg">
                        <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        <span className="text-sm">{resource}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tips */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-slate-900 mb-3">Pro Tips</h3>
                  <ul className="space-y-2">
                    {guide.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <Card className="mt-12 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <CardContent className="pt-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Learning Journey?</h3>
          <p className="mb-6 text-green-100">
            Pick a certification that aligns with your career goals and start learning today. 
            Consistency is key to success!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg">
              View All Certificates
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10">
              Professional Tips
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}