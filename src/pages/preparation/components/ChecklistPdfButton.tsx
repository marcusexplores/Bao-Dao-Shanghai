import { PDFDownloadLink } from "@react-pdf/renderer";
import { ChecklistPdf } from "./ChecklistPdf";
import type { Category } from "../data/checklist";
import { Button } from "@/components/button/Button";

interface ChecklistPdfButtonProps {
  data: Category[];
}

export const ChecklistPdfButton = ({ data }: ChecklistPdfButtonProps) => (
  <div>
    <Button asChild className="px-6 py-2 rounded-md">
      <PDFDownloadLink
        document={<ChecklistPdf data={data} />}
        fileName="travel-checklist.pdf"
      >
        Download PDF
      </PDFDownloadLink>
    </Button>
  </div>
);