import React from 'react';
import { Lightbulb, TrendingUp, Users, Target, Award, Briefcase, Network, FileText, Linkedin, Github, Globe, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function ProfessionalTips() {
  const profileTips = [
    {
      category: 'LinkedIn Optimization',
      icon: Linkedin,
      color: 'blue',
      tips: [
        {
          title: 'Professional Headline',
          description: 'Use keywords that recruiters search for. Instead of "Software Engineer", try "Cloud Solutions Architect | AWS | Azure | Digital Transformation"',
          impact: 'High'
        },
        {
          title: 'Complete Profile',
          description: 'Profiles with photos get 21x more views. Add a professional headshot, banner, and ensure all sections are complete.',
          impact: 'High'
        },
        {
          title: 'Featured Section',
          description: 'Showcase your best work, articles, certifications, and projects in the Featured section at the top of your profile.',
          impact: 'Medium'
        },
        {
          title: 'Rich Media',
          description: 'Add presentations, videos, and documents to your experience sections. Visual content increases engagement.',
          impact: 'Medium'
        },
        {
          title: 'Recommendations',
          description: 'Request recommendations from colleagues and managers. Aim for 5-10 quality recommendations.',
          impact: 'High'
        }
      ]
    },
    {
      category: 'Resume Enhancement',
      icon: FileText,
      color: 'green',
      tips: [
        {
          title: 'Quantify Achievements',
          description: 'Use numbers and metrics. "Reduced costs by 40%" is better than "Reduced costs significantly"',
          impact: 'High'
        },
        {
          title: 'Action Verbs',
          description: 'Start bullet points with strong verbs: Led, Architected, Implemented, Optimized, Transformed',
          impact: 'Medium'
        },
        {
          title: 'Tailored Content',
          description: 'Customize your resume for each role. Mirror the language and requirements from the job description.',
          impact: 'High'
        },
        {
          title: 'ATS-Friendly Format',
          description: 'Use standard fonts, avoid tables/graphics, and include keywords. Many resumes are filtered by AI before humans see them.',
          impact: 'High'
        },
        {
          title: 'One-Page Rule',
          description: 'For most roles, keep it to one page. Senior positions can go to two pages, but be concise.',
          impact: 'Medium'
        }
      ]
    },
    {
      category: 'Skills Development',
      icon: TrendingUp,
      color: 'purple',
      tips: [
        {
          title: 'T-Shaped Skills',
          description: 'Develop deep expertise in one area (vertical bar) while maintaining broad knowledge across related fields (horizontal bar).',
          impact: 'High'
        },
        {
          title: 'Continuous Learning',
          description: 'Dedicate 5-10 hours per week to learning. Follow the 70-20-10 rule: 70% on-the-job, 20% from others, 10% formal training.',
          impact: 'High'
        },
        {
          title: 'Build in Public',
          description: 'Share your learning journey on LinkedIn, write blog posts, create tutorials. This builds credibility and visibility.',
          impact: 'Medium'
        },
        {
          title: 'Certifications Strategy',
          description: 'Prioritize certifications that are in-demand in your industry. Stack complementary certifications (AWS + Kubernetes + Terraform).',
          impact: 'High'
        },
        {
          title: 'Hands-On Projects',
          description: 'Theory is important, but practical experience is crucial. Build real projects and showcase them on GitHub.',
          impact: 'High'
        }
      ]
    },
    {
      category: 'Networking',
      icon: Network,
      color: 'orange',
      tips: [
        {
          title: 'Engage Daily',
          description: 'Spend 15-30 minutes daily engaging with content on LinkedIn. Comment thoughtfully on posts in your industry.',
          impact: 'Medium'
        },
        {
          title: 'Create Content',
          description: 'Post at least 2-3 times per week. Share insights, lessons learned, and industry trends. Consistency beats perfection.',
          impact: 'High'
        },
        {
          title: 'Attend Events',
          description: 'Go to conferences, meetups, and webinars. Follow up with people you meet within 24-48 hours.',
          impact: 'Medium'
        },
        {
          title: 'Informational Interviews',
          description: 'Reach out to people in roles you aspire to. Most professionals are happy to share their experiences over a 20-minute call.',
          impact: 'Medium'
        },
        {
          title: 'Give Before Taking',
          description: 'Offer help, share resources, make introductions. Building genuine relationships matters more than collecting connections.',
          impact: 'High'
        }
      ]
    }
  ];

  const careerGrowthTips = [
    {
      icon: Target,
      title: 'Set Clear Goals',
      description: 'Define where you want to be in 1, 3, and 5 years. Break down big goals into quarterly milestones.',
      actionItems: [
        'Write down specific, measurable career objectives',
        'Create a personal development plan',
        'Review and adjust goals quarterly'
      ]
    },
    {
      icon: Briefcase,
      title: 'Build Your Brand',
      description: 'Become known for something specific. What do you want to be the "go-to" person for?',
      actionItems: [
        'Define your unique value proposition',
        'Share content consistently in your niche',
        'Speak at events and write articles'
      ]
    },
    {
      icon: Award,
      title: 'Track Achievements',
      description: 'Keep a running document of your wins, metrics, and impact. Update it weekly.',
      actionItems: [
        'Document quantifiable results',
        'Collect positive feedback and testimonials',
        'Update LinkedIn and resume quarterly'
      ]
    },
    {
      icon: Users,
      title: 'Find Mentors',
      description: 'Seek guidance from people 2-3 steps ahead of you. Different mentors for different areas.',
      actionItems: [
        'Identify potential mentors in your network',
        'Be specific about what guidance you need',
        'Offer value in return - mentorship is a two-way street'
      ]
    }
  ];

  const quickWins = [
    'Update your LinkedIn headline with relevant keywords',
    'Add 3-5 recent projects to your portfolio',
    'Request recommendations from recent colleagues',
    'Join 5 industry-relevant LinkedIn groups',
    'Set up Google Alerts for your name and industry keywords',
    'Clean up your social media presence',
    'Create a personal website or portfolio',
    'Write and publish your first LinkedIn article',
    'Contribute to an open-source project',
    'Get one new certification this quarter'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-4">
          <Lightbulb className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Professional Tips</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Actionable strategies to enhance your professional profile, accelerate your career growth, 
          and stand out in the digital transformation space. Insights from 29 years of industry experience.
        </p>
      </div>

      {/* Personal Journey */}
      <section className="mb-12">
        <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-amber-600" />
              Lessons from My Journey: From Sales to VP of IT
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-slate-700 leading-relaxed">
                I started my career in sales with DS Group in 1996 and worked my way up through various roles 
                across FMCG, Retail, and Electronics before transitioning into IT leadership. Here's what I've learned:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-2">1. Business + Technology = Power</h4>
                  <p className="text-sm text-slate-700">
                    My 15 years in sales and operations gave me credibility when leading IT projects. Understanding 
                    business problems makes you a strategic partner, not just a service provider.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-2">2. Never Stop Learning</h4>
                  <p className="text-sm text-slate-700">
                    In 2024 alone, I completed 49+ certifications. Technology changes fast—continuous upskilling 
                    is the only way to stay relevant and lead transformation initiatives.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-2">3. Deliver Results, Not Projects</h4>
                  <p className="text-sm text-slate-700">
                    I've delivered 120+ IT projects. What matters isn't the number—it's the business impact. 
                    Focus on ROI, user adoption, and sustainable change.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-2">4. Build Relationships</h4>
                  <p className="text-sm text-slate-700">
                    From managing 250K dealers to leading 100+ professionals, success comes from empowering people, 
                    building trust, and creating collaborative environments.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Quick Wins */}
      <section className="mb-12">
        <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-orange-600" />
              10 Quick Wins You Can Implement Today
            </CardTitle>
            <CardDescription>
              Small actions that create immediate impact on your professional presence
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {quickWins.map((win, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-3 rounded-lg">
                  <span className="flex items-center justify-center w-6 h-6 bg-orange-100 text-orange-600 rounded-full text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-slate-700">{win}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Profile Enhancement Tips */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Profile Enhancement Strategies</h2>
        <Tabs defaultValue="0" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            {profileTips.map((category, index) => {
              const Icon = category.icon;
              return (
                <TabsTrigger key={index} value={index.toString()} className="gap-2">
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.category}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>
          {profileTips.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <TabsContent key={categoryIndex} value={categoryIndex.toString()}>
                <div className="space-y-4">
                  {category.tips.map((tip, tipIndex) => (
                    <Card key={tipIndex}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg">{tip.title}</CardTitle>
                          <Badge variant={tip.impact === 'High' ? 'default' : 'secondary'}>
                            {tip.impact} Impact
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-700">{tip.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </section>

      {/* Career Growth Strategies */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Career Growth Strategies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {careerGrowthTips.map((strategy, index) => {
            const Icon = strategy.icon;
            return (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle>{strategy.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {strategy.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-slate-900 mb-3">Action Items:</h4>
                  <ul className="space-y-2">
                    {strategy.actionItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Online Presence Checklist */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Digital Presence Checklist</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Linkedin className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-slate-900">LinkedIn</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>✓ Professional photo</li>
                  <li>✓ Keyword-rich headline</li>
                  <li>✓ Complete profile (100%)</li>
                  <li>✓ Custom URL</li>
                  <li>✓ Active posting (2-3x/week)</li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Github className="w-5 h-5 text-slate-900" />
                  <h3 className="font-bold text-slate-900">GitHub</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>✓ Pinned repositories</li>
                  <li>✓ README profiles</li>
                  <li>✓ Active contributions</li>
                  <li>✓ Open source projects</li>
                  <li>✓ Clean commit history</li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-5 h-5 text-green-600" />
                  <h3 className="font-bold text-slate-900">Personal Website</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>✓ Portfolio of projects</li>
                  <li>✓ Blog or articles</li>
                  <li>✓ Contact information</li>
                  <li>✓ Mobile responsive</li>
                  <li>✓ SEO optimized</li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Mail className="w-5 h-5 text-red-600" />
                  <h3 className="font-bold text-slate-900">Professional Email</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>✓ Professional signature</li>
                  <li>✓ Clear subject lines</li>
                  <li>✓ Timely responses (&lt;24hrs)</li>
                  <li>✓ Proper formatting</li>
                  <li>✓ Proofread messages</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Final CTA */}
      <Card className="bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <CardContent className="pt-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Start Implementing Today</h3>
          <p className="mb-6 text-purple-100">
            Small, consistent improvements compound over time. Pick 2-3 tips from this guide and 
            start implementing them this week. Track your progress and adjust as needed.
          </p>
          <div className="text-sm text-purple-200">
            Remember: Your career is a marathon, not a sprint. Focus on sustainable growth.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}