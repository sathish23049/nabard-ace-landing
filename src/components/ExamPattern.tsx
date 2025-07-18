import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const ExamPattern = () => {
  const cbt1Pattern = [
    { subject: "Mathematics", questions: 30, marks: 30, duration: "90 minutes" },
    { subject: "General Intelligence & Reasoning", questions: 30, marks: 30, duration: "90 minutes" },
    { subject: "General Awareness", questions: 40, marks: 40, duration: "90 minutes" },
    { subject: "General Science", questions: 0, marks: 0, duration: "90 minutes" }
  ];

  const cbt2Pattern = [
    { subject: "Mathematics", questions: 35, marks: 35, duration: "90 minutes" },
    { subject: "General Intelligence & Reasoning", questions: 35, marks: 35, duration: "90 minutes" },
    { subject: "General Awareness", questions: 50, marks: 50, duration: "90 minutes" }
  ];

  const additionalStages = [
    {
      stage: "Physical Efficiency Test (PET)",
      description: "Physical fitness test as per railway standards",
      applicable: "Group D & ALP categories"
    },
    {
      stage: "Typing/Skill Test",
      description: "Computer-based typing test for specific posts",
      applicable: "NTPC (selected posts)"
    },
    {
      stage: "Document Verification",
      description: "Verification of educational and other certificates",
      applicable: "All categories"
    },
    {
      stage: "Medical Examination",
      description: "Medical fitness test by Railway Medical Board",
      applicable: "All categories"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">RRB Exam Pattern</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Understand the complete examination structure and prepare accordingly
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* CBT 1 Pattern */}
          <Card className="border-2 border-primary/20">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-2xl text-primary text-center">CBT 1 (Preliminary)</CardTitle>
              <p className="text-center text-muted-foreground">Computer Based Test - Stage 1</p>
            </CardHeader>
            <CardContent className="p-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead className="text-center">Questions</TableHead>
                    <TableHead className="text-center">Marks</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cbt1Pattern.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.subject}</TableCell>
                      <TableCell className="text-center">{item.questions}</TableCell>
                      <TableCell className="text-center">{item.marks}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-muted/50 font-bold">
                    <TableCell>Total</TableCell>
                    <TableCell className="text-center">100</TableCell>
                    <TableCell className="text-center">100</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="mt-4 text-center">
                <Badge variant="secondary" className="text-sm">Duration: 90 minutes</Badge>
              </div>
            </CardContent>
          </Card>

          {/* CBT 2 Pattern */}
          <Card className="border-2 border-secondary/20">
            <CardHeader className="bg-secondary/5">
              <CardTitle className="text-2xl text-secondary text-center">CBT 2 (Mains)</CardTitle>
              <p className="text-center text-muted-foreground">Computer Based Test - Stage 2</p>
            </CardHeader>
            <CardContent className="p-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead className="text-center">Questions</TableHead>
                    <TableHead className="text-center">Marks</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cbt2Pattern.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.subject}</TableCell>
                      <TableCell className="text-center">{item.questions}</TableCell>
                      <TableCell className="text-center">{item.marks}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-muted/50 font-bold">
                    <TableCell>Total</TableCell>
                    <TableCell className="text-center">120</TableCell>
                    <TableCell className="text-center">120</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="mt-4 text-center">
                <Badge variant="secondary" className="text-sm">Duration: 90 minutes</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Stages */}
        <Card className="border-2 border-accent/20">
          <CardHeader className="bg-accent/5">
            <CardTitle className="text-2xl text-accent-foreground text-center">Additional Selection Stages</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalStages.map((stage, index) => (
                <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg text-primary mb-2">{stage.stage}</h4>
                  <p className="text-muted-foreground mb-3">{stage.description}</p>
                  <Badge variant="outline" className="text-xs">{stage.applicable}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ExamPattern;