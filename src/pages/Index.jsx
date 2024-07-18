import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our App</h1>
        <p className="text-xl mb-6">Your starting point for amazing projects</p>
        <Button>Get Started</Button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>Feature {i}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This is a placeholder for future content. Customize as needed.</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Index;