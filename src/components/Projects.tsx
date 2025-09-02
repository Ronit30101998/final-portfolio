import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/data/portfolio';

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/30 via-background to-muted/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Zap className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <Star className="h-8 w-8 text-primary" />
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover my latest creations - each project represents a unique challenge solved with innovative technology and thoughtful design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            <Card className="overflow-hidden h-full transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 border-2 hover:border-primary/20">
              transition={{ duration: 0.6, delay: index * 0.2 }}
                <div className="absolute top-4 right-4 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.3 + 0.5 }}
                    className="bg-primary/90 backdrop-blur-sm rounded-full p-2"
                  >
                    <Star className="h-4 w-4 text-white fill-white" />
                  </motion.div>
                </div>
              whileHover={{ y: -5 }}
              className="group"
            >
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                <div className="relative overflow-hidden">
                  <motion.img
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-white/90 text-black">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-white/90 text-black">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              <CardContent className="p-8">
                  />
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                </div>
                
                <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.title}
                    <Badge key={tech} variant="outline" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                <div className="flex gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                    <Button variant="outline" size="sm" asChild className="w-full group border-2 hover:border-primary transition-all duration-300">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                        Code
                      </a>
                    </Button>
                  </motion.div>
                  
                  <div className="flex gap-3">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                      <Button size="sm" asChild className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 group shadow-lg hover:shadow-xl transition-all duration-300">
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                          Live Demo
                        </a>
                      </Button>
                    </motion.div>
                    
                    {project.demoUrl && (
                      <Button size="sm" asChild className="flex-1">
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}