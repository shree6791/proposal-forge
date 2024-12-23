"use client";

import { NavBar } from '@/components/navigation/nav-bar';
import { Card, CardContent } from "@/components/ui/card";

export default function Leadership() {
  const team = [
    {
      name: "Mandar Keny",
      role: "Chief Problem Finder",
      description: "Mandar, a Senior Technology Sales Professional with 20+ years of experience, envisioned ProposalForge to address inefficiencies in IT services business development. Drawing on his expertise in AI transformations and global sales, Mandar identified the need for an AI-driven solution to streamline RFP responses and proposal generation."
    },
    {
      name: "Shreenidhi Sudhakar",
      role: "AI Alchemist",
      description: "A Machine Learning Engineer at Walmart Global Tech, Shreenidhi has experience at Amazon, eBay, and Cisco. He excels in anomaly detection and ML pipelines and is pursuing an Executive MBA at Chicago Booth. Passionate about AI, he mentors engineers transitioning into the field and is certified in digital marketing by Google and Meta."
    },
    {
      name: "Lokesh Dange",
      role: "Product Prophet",
      description: "A fintech innovator at Moglix, Lokesh has scaled Credlix AUM to $50M and managed Vedanta's $15B e-commerce portal. With 5+ years of product management experience, he combines growth marketing and analytics expertise to drive success in India's dynamic startup ecosystem."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <NavBar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-black">The Team</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="bg-gray-50 border-gray-200">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-black">{member.name}</h2>
                <h3 className="text-xl mb-4 text-blue-400">{member.role}</h3>
                <p className="text-gray-600">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}