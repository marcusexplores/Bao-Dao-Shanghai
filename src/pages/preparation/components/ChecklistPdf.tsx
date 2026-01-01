import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import type { Category } from "../data/checklist";

interface ChecklistPdfProps {
  data: Category[];
}

export const ChecklistPdf = ({ data }: ChecklistPdfProps) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Travel Packing Checklist</Text>

        <View style={styles.gridContainer}>
          {data.map((category, idx) => (
            <View key={idx} style={styles.categoryBox} wrap={false}>
              {/* Category Header */}
              <Text style={styles.categoryTitle}>{category.name}</Text>

              {/* Items */}
              {category.items.map((item, itemIdx) => (
                <View key={itemIdx} style={styles.itemRow}>
                  <View style={styles.checkbox} />
                  <Text style={styles.itemName}>{item.name}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: "#333",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
  },
  categoryBox: {
    width: "47%", // Creates a nice 2-column effect
    marginBottom: 15,
  },
  categoryTitle: {
    fontSize: 12,
    fontWeight: "bold",
    backgroundColor: "#f0f0f0",
    padding: 5,
    marginBottom: 5,
    borderLeft: "3pt solid #000",
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  checkbox: {
    width: 10,
    height: 10,
    border: "1pt solid #666",
    marginRight: 8,
  },
  itemName: {
    flex: 1,
  },
});
