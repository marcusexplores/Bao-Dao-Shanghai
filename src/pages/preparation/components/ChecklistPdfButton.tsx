import { PDFDownloadLink } from "@react-pdf/renderer";
import { ChecklistPdf } from "./ChecklistPdf";
import type { Category } from "../data/checklist";

interface ChecklistPdfButtonProps {
  data: Category[];
}

export const ChecklistPdfButton = ({ data }: ChecklistPdfButtonProps) => (
  <div>
    <PDFDownloadLink
      document={<ChecklistPdf data={data} />}
      fileName="travel-checklist.pdf"
      className="inline-block bg-black text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors"
    >
      Download PDF
      {/* {({ loading }) => (loading ? "Generating..." : "Download PDF")} */}
    </PDFDownloadLink>
  </div>
);
