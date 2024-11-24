import { Code2, Zap, BrainCircuit, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import simplicon from './assets/simplicon.png';
import { CodeBlock } from '@/components/CodeBlock';

export default function Home() {
  return (
    <main className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center text-center text-white">
          <div className="mb-8">
            <Image
              src={simplicon}
              alt="Simpli Framework Logo"
              width={120}
              height={120}
              priority
              className="drop-shadow-lg"
            />
          </div>
          
          <h1 className="text-6xl font-bold mb-6">
            Simpli Framework
          </h1>
          
          <p className="text-xl mb-12 max-w-2xl">
            A modern, extensible framework for building working applications.
            Powered by Next.js, Supabase, OpenAi, and shadcn-ui.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <FeatureCard
              icon={<Code2 className="h-8 w-8" />}
              title="Ship-Safe"
              description="Build working apps that scale"
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8" />}
              title="Fast"
              description="Optimized for performance and quick development"
            />
            <FeatureCard
              icon={<BrainCircuit className="h-8 w-8" />}
              title="AI-Powered"
              description="AI built-in to power your ideas"
            />
            <FeatureCard
              icon={<Database className="h-8 w-8" />}
              title="Database Ready"
              description="Set up your DB in days not months"
            />
          </div>

          <div className="w-full max-w-2xl mb-12">
            <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
            <CodeBlock code="npx simpliv1 create my-app" />
          </div>

          <div className="flex gap-4">
            <Button size="lg" variant="secondary">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10">
              Documentation
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  );
}
