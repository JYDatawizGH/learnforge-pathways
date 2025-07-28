import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { 
  Brain, 
  Code, 
  Gamepad2, 
  Bot, 
  Palette, 
  Globe,
  Clock,
  Users,
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Scratch Ninja",
    subtitle: "Visual Programming Fundamentals",
    description: "Perfect introduction to coding! Kids create games, animations, and interactive stories using Scratch's drag-and-drop interface.",
    icon: Gamepad2,
    levels: 3,
    ageRange: "6-10 years",
    duration: "8 weeks per level",
    price: "$199",
    bundlePrice: "$499",
    rating: 4.9,
    enrolled: 1247,
    maxCapacity: 12,
    color: "from-emerald-400 to-green-600",
    skills: ["Logic Building", "Problem Solving", "Creativity", "Game Design"],
    nextSession: "March 15, 2024",
    featured: true
  },
  {
    id: 2,
    title: "Python Explorers",
    subtitle: "Real Programming Language",
    description: "Step into real coding with Python! Build apps, games, and AI projects while learning one of the world's most popular programming languages.",
    icon: Code,
    levels: 4,
    ageRange: "10-16 years",
    duration: "10 weeks per level",
    price: "$249",
    bundlePrice: "$799",
    rating: 4.8,
    enrolled: 892,
    maxCapacity: 10,
    color: "from-blue-400 to-indigo-600",
    skills: ["Python Syntax", "Web Apps", "Data Science", "AI Basics"],
    nextSession: "March 20, 2024",
    featured: true
  },
  {
    id: 3,
    title: "AI Young Innovators",
    subtitle: "Artificial Intelligence for Kids",
    description: "Explore the future of technology! Learn machine learning, create chatbots, and build smart applications using kid-friendly AI tools.",
    icon: Brain,
    levels: 3,
    ageRange: "12-16 years",
    duration: "12 weeks per level",
    price: "$299",
    bundlePrice: "$699",
    rating: 5.0,
    enrolled: 534,
    maxCapacity: 8,
    color: "from-purple-400 to-violet-600",
    skills: ["Machine Learning", "ChatBots", "Image Recognition", "AI Ethics"],
    nextSession: "March 25, 2024",
    featured: true
  },
  {
    id: 4,
    title: "Robotics Masters",
    subtitle: "Build & Program Robots",
    description: "Hands-on robotics with LEGO Mindstorms and Arduino! Design, build, and program robots that move, sense, and interact with the world.",
    icon: Bot,
    levels: 3,
    ageRange: "8-14 years",
    duration: "10 weeks per level",
    price: "$349",
    bundlePrice: "$899",
    rating: 4.9,
    enrolled: 678,
    maxCapacity: 8,
    color: "from-orange-400 to-red-600",
    skills: ["Engineering", "Programming", "Electronics", "3D Design"],
    nextSession: "April 1, 2024",
    featured: false
  },
  {
    id: 5,
    title: "Web Design Wizards",
    subtitle: "Create Amazing Websites",
    description: "Build beautiful, interactive websites from scratch! Learn HTML, CSS, JavaScript and create professional web portfolios.",
    icon: Globe,
    levels: 3,
    ageRange: "10-16 years",
    duration: "8 weeks per level",
    price: "$199",
    bundlePrice: "$499",
    rating: 4.7,
    enrolled: 423,
    maxCapacity: 12,
    color: "from-teal-400 to-cyan-600",
    skills: ["HTML/CSS", "JavaScript", "Responsive Design", "UI/UX"],
    nextSession: "April 5, 2024",
    featured: false
  },
  {
    id: 6,
    title: "Digital Art & Animation",
    subtitle: "Creative Technology",
    description: "Combine art with technology! Create digital artwork, animations, and interactive media using professional design tools.",
    icon: Palette,
    levels: 2,
    ageRange: "8-14 years",
    duration: "6 weeks per level",
    price: "$179",
    bundlePrice: "$299",
    rating: 4.8,
    enrolled: 567,
    maxCapacity: 10,
    color: "from-pink-400 to-rose-600",
    skills: ["Digital Art", "Animation", "Video Editing", "Creative Coding"],
    nextSession: "April 10, 2024",
    featured: false
  }
];

const FeaturedCourses = () => {
  const featuredCourses = courses.filter(course => course.featured);
  const otherCourses = courses.filter(course => !course.featured);

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            Featured Programs
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Choose Your Learning Adventure
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Progressive learning paths designed by educators and tech experts. 
            Each course builds real skills through hands-on projects and fun challenges.
          </p>
        </div>

        {/* Featured Courses */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredCourses.map((course) => {
            const IconComponent = course.icon;
            return (
              <Card key={course.id} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 border-primary/20 hover:border-primary/40">
                {/* Featured Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-secondary text-secondary-foreground shadow-lg">
                    ⭐ Featured
                  </Badge>
                </div>

                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>

                <CardHeader className="relative">
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${course.color} shadow-lg`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-right text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        {course.rating}
                      </div>
                      <div className="text-muted-foreground">{course.enrolled} students</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">{course.title}</h3>
                    <p className="text-primary font-semibold">{course.subtitle}</p>
                    <p className="text-muted-foreground">{course.description}</p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Course Info */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      {course.ageRange}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {course.duration}
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Skills You'll Learn:</p>
                    <div className="flex flex-wrap gap-1">
                      {course.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {course.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{course.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Per Level</span>
                      <span className="text-2xl font-bold text-foreground">{course.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Full Course Bundle</span>
                      <div className="text-right">
                        <span className="text-lg font-bold text-success">{course.bundlePrice}</span>
                        <div className="text-xs text-muted-foreground">Save 30%</div>
                      </div>
                    </div>
                  </div>

                  {/* Next Session */}
                  <div className="flex items-center justify-between text-sm bg-success/10 text-success p-3 rounded-lg">
                    <span className="font-medium">Next Session:</span>
                    <span className="font-bold">{course.nextSession}</span>
                  </div>
                </CardContent>

                <CardFooter className="space-y-3">
                  <Button className="w-full group" size="lg">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="outline" className="w-full">
                    View Full Curriculum
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Other Courses Preview */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">More Amazing Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {otherCourses.map((course) => {
              const IconComponent = course.icon;
              return (
                <Card key={course.id} className="hover:shadow-lg transition-shadow border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${course.color} mb-4`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{course.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{course.subtitle}</p>
                    <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground">
                      <span>{course.ageRange}</span>
                      <span>•</span>
                      <span>{course.levels} levels</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <Button variant="outline" size="lg" className="group">
            View All Courses
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
