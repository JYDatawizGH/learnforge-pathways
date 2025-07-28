import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Gift, Clock, ArrowRight, Sparkles } from 'lucide-react';

const PromoBanner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-secondary via-secondary-light to-accent py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-8 left-16 animate-float">
          <Sparkles className="h-6 w-6 text-white/30" />
        </div>
        <div className="absolute top-16 right-24 animate-float" style={{ animationDelay: '1s' }}>
          <Gift className="h-8 w-8 text-white/40" />
        </div>
        <div className="absolute bottom-12 left-32 animate-float" style={{ animationDelay: '2s' }}>
          <Sparkles className="h-5 w-5 text-white/30" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Announcement Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white">
            <Gift className="w-4 h-4 mr-2" />
            <span className="font-semibold text-sm">Limited Time Offer</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Spring Break Special!
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              🎯 <strong>FREE Intro Class</strong> + <strong>30% OFF</strong> your first course
            </p>
          </div>

          {/* Offer Details */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="text-lg font-bold text-white mb-2">Free Trial Class</h3>
              <p className="text-white/80 text-sm">Try any course for free! No commitment, just pure learning fun.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="text-lg font-bold text-white mb-2">30% Off First Course</h3>
              <p className="text-white/80 text-sm">Biggest discount of the year on all our premium programs.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-2">🎁</div>
              <h3 className="text-lg font-bold text-white mb-2">Bonus Materials</h3>
              <p className="text-white/80 text-sm">Get exclusive coding games and take-home projects included.</p>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-md mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Clock className="h-5 w-5 text-white mr-2" />
              <span className="text-white font-semibold">Offer Ends In:</span>
            </div>
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="bg-white/20 rounded-lg p-2">
                <div className="text-2xl font-bold text-white">07</div>
                <div className="text-xs text-white/80">Days</div>
              </div>
              <div className="bg-white/20 rounded-lg p-2">
                <div className="text-2xl font-bold text-white">14</div>
                <div className="text-xs text-white/80">Hours</div>
              </div>
              <div className="bg-white/20 rounded-lg p-2">
                <div className="text-2xl font-bold text-white">23</div>
                <div className="text-xs text-white/80">Mins</div>
              </div>
              <div className="bg-white/20 rounded-lg p-2">
                <div className="text-2xl font-bold text-white">45</div>
                <div className="text-xs text-white/80">Secs</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="secondary" 
              size="xl"
              className="bg-white text-foreground hover:bg-white/90 shadow-xl group min-w-[200px]"
            >
              Claim Free Class
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm min-w-[200px]"
            >
              Browse All Courses
            </Button>
          </div>

          {/* Social Proof */}
          <div className="text-white/80 text-sm">
            <p>🌟 Join 2,500+ students who've already started their coding journey this month!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;