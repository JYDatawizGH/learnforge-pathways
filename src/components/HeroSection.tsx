import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star, Users, BookOpen } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Kids learning coding and AI"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center">
            <BookOpen className="h-8 w-8 text-secondary" />
          </div>
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center">
            <Star className="h-6 w-6 text-success" />
          </div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
          <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center">
            <Users className="h-10 w-10 text-accent" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary font-medium text-sm backdrop-blur-sm">
            <Star className="w-4 h-4 mr-2" />
            Trusted by 10,000+ Parents Worldwide
          </div>

          {/* Headlines */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Where Kids Learn
              <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                AI & Coding
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Interactive coding classes designed for young minds. Build the future with 
              Scratch, Python, Robotics, and AI in small groups with expert instructors.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-white">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary">2,500+</div>
              <div className="text-sm opacity-90">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-success">95%</div>
              <div className="text-sm opacity-90">Completion Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">50+</div>
              <div className="text-sm opacity-90">Expert Instructors</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="secondary" 
              size="xl"
              className="group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8">
            <p className="text-white/70 text-sm mb-4">Trusted by families from:</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/60">
              <span className="font-semibold">🏫 200+ Schools</span>
              <span className="font-semibold">🌟 4.9/5 Rating</span>
              <span className="font-semibold">🔒 Safe & Secure</span>
              <span className="font-semibold">👨‍👩‍👧‍👦 Family Approved</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;